// ============================================================
// UPDA ITB S2 SIMULATOR - APPLICATION LOGIC
// ============================================================

// ── State ──
let examState = {
    questions: [],
    currentIndex: 0,
    answers: {},       // { questionIndex: selectedOptionIndex }
    flags: new Set(),
    startTime: null,
    timeLimit: 0,      // in seconds, 0 = unlimited
    timerInterval: null,
    remainingTime: 0,
    finished: false
};

// ── Particles ──
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 15) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.width = (2 + Math.random() * 3) + 'px';
        p.style.height = p.style.width;
        const hue = 230 + Math.random() * 60;
        p.style.background = `hsl(${hue}, 70%, 60%)`;
        container.appendChild(p);
    }
}

// ── Screen Management ──
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}

// ── Shuffle Array ──
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ── Start Exam ──
function startExam() {
    const count = parseInt(document.getElementById('questionCount').value);
    const time = parseInt(document.getElementById('timeLimit').value);
    const category = document.getElementById('category').value;
    const doShuffle = document.getElementById('shuffle').value === 'yes';

    // Filter questions by category
    let pool = [...QUESTION_BANK];
    if (category !== 'all') {
        pool = pool.filter(q => q.category === category);
    }

    // Shuffle question order if requested
    if (doShuffle) {
        pool = shuffle(pool);
    }

    // Limit question count
    if (count > 0 && count < pool.length) {
        pool = pool.slice(0, count);
    }

    if (pool.length === 0) {
        alert('Tidak ada soal yang tersedia untuk kategori ini!');
        return;
    }

    // Shuffle options for every question so that the correct answer is randomized across A, B, C, D
    pool = pool.map(q => {
        const indexedOptions = q.options.map((opt, idx) => ({
            text: opt,
            isCorrect: idx === q.answer
        }));
        const shuffledOptions = shuffle(indexedOptions);
        return {
            ...q,
            options: shuffledOptions.map(item => item.text),
            answer: shuffledOptions.findIndex(item => item.isCorrect)
        };
    });

    // Reset state
    examState = {
        questions: pool,
        currentIndex: 0,
        answers: {},
        flags: new Set(),
        startTime: Date.now(),
        timeLimit: time * 60,
        timerInterval: null,
        remainingTime: time * 60,
        finished: false
    };

    // Update UI
    const categoryNames = {
        'all': 'Semua Kategori',
        'matematika': 'Matematika',
        'fisika': 'Fisika',
        'english': 'Bahasa Inggris',
        'logika': 'Logika & Penalaran',
        'programming': 'Pemrograman & Algoritma'
    };
    document.getElementById('examCategoryBadge').textContent = categoryNames[category];
    document.getElementById('totalQ').textContent = pool.length;
    document.getElementById('unansweredCount').textContent = pool.length;

    // Build navigator grid
    buildNavigatorGrid();

    // Show exam screen
    showScreen('exam');

    // Render first question
    renderQuestion(0);

    // Start timer
    if (time > 0) {
        startTimer();
    } else {
        document.getElementById('timerText').textContent = '∞';
    }
}

// ── Timer ──
function startTimer() {
    if (examState.timerInterval) clearInterval(examState.timerInterval);

    updateTimerDisplay();

    examState.timerInterval = setInterval(() => {
        examState.remainingTime--;
        updateTimerDisplay();

        if (examState.remainingTime <= 0) {
            clearInterval(examState.timerInterval);
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const t = examState.remainingTime;
    const mins = Math.floor(t / 60);
    const secs = t % 60;
    const display = document.getElementById('timerDisplay');
    const text = document.getElementById('timerText');

    text.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    display.classList.remove('warning', 'danger');
    if (t <= 60) {
        display.classList.add('danger');
    } else if (t <= 300) {
        display.classList.add('warning');
    }
}

// ── Render Question ──
function renderQuestion(index) {
    examState.currentIndex = index;
    const q = examState.questions[index];

    document.getElementById('questionNumber').textContent = `Soal ${index + 1}`;
    document.getElementById('questionCategory').textContent = getCategoryLabel(q.category);
    document.getElementById('questionText').innerHTML = q.question;
    document.getElementById('currentQ').textContent = index + 1;

    // Update progress
    const progress = ((index + 1) / examState.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Render options
    const optionsList = document.getElementById('optionsList');
    const letters = ['A', 'B', 'C', 'D', 'E'];
    optionsList.innerHTML = q.options.map((opt, i) => `
        <div class="option-item ${examState.answers[index] === i ? 'selected' : ''}" 
             onclick="selectOption(${i})" id="option-${i}">
            <div class="option-letter">${letters[i]}</div>
            <div class="option-text">${opt}</div>
        </div>
    `).join('');

    // Update flag button
    updateFlagButton();

    // Update nav buttons
    document.getElementById('prevBtn').style.visibility = index === 0 ? 'hidden' : 'visible';
    document.getElementById('nextBtn').textContent = index === examState.questions.length - 1 
        ? 'Selesai →' : 'Selanjutnya →';

    // Update dots
    renderQuestionDots();

    // Update navigator
    updateNavigatorGrid();
}

function getCategoryLabel(cat) {
    const labels = {
        'matematika': '📐 Matematika',
        'fisika': '⚡ Fisika',
        'english': '🇬🇧 English',
        'logika': '🧠 Logika',
        'programming': '💻 Programming'
    };
    return labels[cat] || cat;
}

// ── Select Option ──
function selectOption(optIndex) {
    examState.answers[examState.currentIndex] = optIndex;

    // Update UI
    document.querySelectorAll('.option-item').forEach((el, i) => {
        el.classList.toggle('selected', i === optIndex);
    });

    // Update counts
    updateCounts();
    updateNavigatorGrid();
    renderQuestionDots();
}

// ── Navigation ──
function nextQuestion() {
    if (examState.currentIndex < examState.questions.length - 1) {
        renderQuestion(examState.currentIndex + 1);
    } else {
        confirmFinish();
    }
}

function prevQuestion() {
    if (examState.currentIndex > 0) {
        renderQuestion(examState.currentIndex - 1);
    }
}

function goToQuestion(index) {
    renderQuestion(index);
    // Close navigator if open
    const panel = document.getElementById('navigatorPanel');
    if (panel.classList.contains('open')) {
        toggleNavigator();
    }
}

// ── Flag ──
function toggleFlag() {
    const idx = examState.currentIndex;
    if (examState.flags.has(idx)) {
        examState.flags.delete(idx);
    } else {
        examState.flags.add(idx);
    }
    updateFlagButton();
    updateCounts();
    updateNavigatorGrid();
}

function updateFlagButton() {
    const btn = document.getElementById('flagBtn');
    const icon = document.getElementById('flagIcon');
    if (examState.flags.has(examState.currentIndex)) {
        btn.classList.add('flagged');
        icon.textContent = '🚩';
    } else {
        btn.classList.remove('flagged');
        icon.textContent = '🏳️';
    }
}

// ── Navigator ──
function toggleNavigator() {
    document.getElementById('navigatorOverlay').classList.toggle('open');
    document.getElementById('navigatorPanel').classList.toggle('open');
}

function buildNavigatorGrid() {
    const grid = document.getElementById('navigatorGrid');
    grid.innerHTML = examState.questions.map((_, i) => `
        <button class="nav-btn" id="nav-btn-${i}" onclick="goToQuestion(${i})">${i + 1}</button>
    `).join('');
}

function updateNavigatorGrid() {
    examState.questions.forEach((_, i) => {
        const btn = document.getElementById(`nav-btn-${i}`);
        if (!btn) return;
        btn.className = 'nav-btn';
        if (i === examState.currentIndex) btn.classList.add('current');
        else if (examState.flags.has(i)) btn.classList.add('flagged');
        else if (examState.answers[i] !== undefined) btn.classList.add('answered');
    });
}

function updateCounts() {
    const answered = Object.keys(examState.answers).length;
    const flagged = examState.flags.size;
    const unanswered = examState.questions.length - answered;

    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('flaggedCount').textContent = flagged;
    document.getElementById('unansweredCount').textContent = unanswered;
}

// ── Question Dots ──
function renderQuestionDots() {
    const container = document.getElementById('questionDots');
    const total = examState.questions.length;
    const current = examState.currentIndex;

    // Show only nearby dots (window of ~30)
    const windowSize = 30;
    let start = Math.max(0, current - Math.floor(windowSize / 2));
    let end = Math.min(total, start + windowSize);
    if (end === total) start = Math.max(0, end - windowSize);

    let html = '';
    for (let i = start; i < end; i++) {
        let cls = 'q-dot';
        if (i === current) cls += ' active';
        else if (examState.answers[i] !== undefined) cls += ' answered';
        html += `<div class="${cls}" onclick="renderQuestion(${i})"></div>`;
    }
    container.innerHTML = html;
}

// ── Finish Exam ──
function confirmFinish() {
    const answered = Object.keys(examState.answers).length;
    const total = examState.questions.length;
    const unanswered = total - answered;

    const msg = unanswered > 0
        ? `Anda masih memiliki ${unanswered} soal yang belum dijawab dari total ${total} soal. Yakin ingin menyelesaikan ujian?`
        : `Anda telah menjawab semua ${total} soal. Selesaikan ujian?`;

    document.getElementById('modalMsg').textContent = msg;
    document.getElementById('confirmModal').classList.add('open');
}

function closeModal() {
    document.getElementById('confirmModal').classList.remove('open');
}

function finishExam() {
    closeModal();
    examState.finished = true;

    // Stop timer
    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
    }

    // Calculate results
    const results = calculateResults();

    // Show results
    showResults(results);
}

function calculateResults() {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    const categoryStats = {};

    examState.questions.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) {
            categoryStats[cat] = { correct: 0, total: 0 };
        }
        categoryStats[cat].total++;

        if (examState.answers[i] === undefined) {
            skipped++;
        } else if (examState.answers[i] === q.answer) {
            correct++;
            categoryStats[cat].correct++;
        } else {
            wrong++;
        }
    });

    const total = examState.questions.length;
    const score = Math.round((correct / total) * 100);
    const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);

    return { correct, wrong, skipped, total, score, elapsed, categoryStats };
}

// ── Show Results ──
function showResults(results) {
    showScreen('result');

    // Score animation
    const scoreVal = document.getElementById('scoreValue');
    animateValue(scoreVal, 0, results.score, 1500);

    // Score circle
    const circle = document.getElementById('scoreFillCircle');
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (results.score / 100) * circumference;

    // Add gradient definition
    const svg = circle.closest('svg');
    if (!svg.querySelector('#scoreGradient')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#6366f1"/>
                <stop offset="100%" stop-color="#a78bfa"/>
            </linearGradient>
        `;
        svg.prepend(defs);
    }

    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);

    // Result icon & title
    const icon = document.getElementById('resultIcon');
    const title = document.getElementById('resultTitle');
    if (results.score >= 80) {
        icon.textContent = '🏆';
        title.textContent = 'Luar Biasa!';
    } else if (results.score >= 60) {
        icon.textContent = '🎉';
        title.textContent = 'Bagus!';
    } else if (results.score >= 40) {
        icon.textContent = '💪';
        title.textContent = 'Terus Berlatih!';
    } else {
        icon.textContent = '📚';
        title.textContent = 'Perlu Belajar Lebih';
    }

    // Stats
    document.getElementById('correctCount').textContent = results.correct;
    document.getElementById('wrongCount').textContent = results.wrong;
    document.getElementById('skippedCount').textContent = results.skipped;

    const mins = Math.floor(results.elapsed / 60);
    const secs = results.elapsed % 60;
    document.getElementById('timeTaken').textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    // Category breakdown
    renderCategoryBreakdown(results.categoryStats);
}

function animateValue(el, start, end, duration) {
    const startTime = Date.now();
    const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
        const current = Math.round(start + (end - start) * eased);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
}

function renderCategoryBreakdown(categoryStats) {
    const container = document.getElementById('categoryBars');
    const labels = {
        'matematika': '📐 Matematika',
        'fisika': '⚡ Fisika',
        'english': '🇬🇧 Bahasa Inggris',
        'logika': '🧠 Logika & Penalaran',
        'programming': '💻 Pemrograman'
    };

    let html = '';
    for (const [cat, stats] of Object.entries(categoryStats)) {
        const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        html += `
            <div class="cat-bar-item">
                <div class="cat-bar-label">${labels[cat] || cat}</div>
                <div class="cat-bar-track">
                    <div class="cat-bar-fill" style="width: 0%" data-width="${pct}%"></div>
                </div>
                <div class="cat-bar-score">${stats.correct}/${stats.total} (${pct}%)</div>
            </div>
        `;
    }
    container.innerHTML = html;

    // Animate bars
    setTimeout(() => {
        container.querySelectorAll('.cat-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.width;
        });
    }, 200);
}

// ── Review Answers ──
function reviewAnswers() {
    showScreen('review');
    renderReviewList('all');
}

function filterReview(filter, btn) {
    document.querySelectorAll('.review-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderReviewList(filter);
}

function renderReviewList(filter) {
    const container = document.getElementById('reviewList');
    const letters = ['A', 'B', 'C', 'D', 'E'];

    let html = '';
    examState.questions.forEach((q, i) => {
        const userAnswer = examState.answers[i];
        const isCorrect = userAnswer === q.answer;
        const isSkipped = userAnswer === undefined;

        // Filter
        if (filter === 'correct' && !isCorrect) return;
        if (filter === 'wrong' && (isCorrect || isSkipped)) return;
        if (filter === 'skipped' && !isSkipped) return;

        let statusClass, statusIcon;
        if (isSkipped) {
            statusClass = 'skipped-item';
            statusIcon = '⏭️';
        } else if (isCorrect) {
            statusClass = 'correct-item';
            statusIcon = '✅';
        } else {
            statusClass = 'wrong-item';
            statusIcon = '❌';
        }

        const optionsHtml = q.options.map((opt, j) => {
            let optClass = 'neutral';
            if (j === q.answer) optClass = 'correct-answer';
            else if (j === userAnswer && !isCorrect) optClass = 'user-wrong';

            return `<div class="review-option ${optClass}">
                <strong>${letters[j]}.</strong> ${opt}
            </div>`;
        }).join('');

        html += `
            <div class="review-item ${statusClass}">
                <div class="review-item-header">
                    <span class="review-item-status">${statusIcon}</span>
                    <span class="review-item-number">Soal ${i + 1}</span>
                    <span class="review-item-cat">${getCategoryLabel(q.category)}</span>
                </div>
                <div class="review-question-text">${q.question}</div>
                <div class="review-options">${optionsHtml}</div>
                <div class="review-explanation">
                    <strong>💡 Penjelasan:</strong> ${q.explanation}
                </div>
            </div>
        `;
    });

    if (!html) {
        html = '<div style="text-align:center; padding:40px; color:var(--text-muted);">Tidak ada soal dalam filter ini.</div>';
    }

    container.innerHTML = html;
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    document.getElementById('totalQuestions').textContent = QUESTION_BANK.length + '+';

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('exam').classList.contains('active')) {
            if (e.key === 'ArrowRight' || e.key === 'Enter') {
                e.preventDefault();
                nextQuestion();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevQuestion();
            } else if (e.key >= '1' && e.key <= '5') {
                e.preventDefault();
                selectOption(parseInt(e.key) - 1);
            } else if (['a', 'b', 'c', 'd', 'e'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                const keyMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4 };
                selectOption(keyMap[e.key.toLowerCase()]);
            } else if (e.key === 'f' || e.key === 'F') {
                e.preventDefault();
                toggleFlag();
            }
        }
    });
});
