// ============================================================
// BANK SOAL UPDA ITB S2 - TEKNIK KOMPUTER / INFORMATIKA
// 160+ soal mencakup 5 kategori
// ============================================================

const QUESTION_BANK = [

// ============================================================
// KATEGORI 1: MATEMATIKA (Kalkulus, Aljabar Linear, Statistik)
// ============================================================

// --- Kalkulus ---
{
    id: 1,
    category: "matematika",
    question: "Tentukan turunan dari f(x) = x³ · sin(x).",
    options: [
        "3x² · sin(x) + x³ · cos(x)",
        "3x² · cos(x)",
        "x³ · cos(x) - 3x² · sin(x)",
        "3x² · sin(x) - x³ · cos(x)"
    ],
    answer: 0,
    explanation: "Menggunakan aturan perkalian (product rule): f'(x) = u'v + uv' = 3x²·sin(x) + x³·cos(x)."
},
{
    id: 2,
    category: "matematika",
    question: "Hitung integral ∫₀¹ (3x² + 2x) dx.",
    options: [
        "2",
        "3",
        "1",
        "4"
    ],
    answer: 0,
    explanation: "∫₀¹ (3x² + 2x) dx = [x³ + x²]₀¹ = (1 + 1) - (0 + 0) = 2."
},
{
    id: 3,
    category: "matematika",
    question: "Tentukan limit: lim(x→0) [sin(3x) / x].",
    options: [
        "3",
        "1",
        "0",
        "∞"
    ],
    answer: 0,
    explanation: "lim(x→0) sin(3x)/x = lim(x→0) 3·[sin(3x)/(3x)] = 3·1 = 3."
},
{
    id: 4,
    category: "matematika",
    question: "Tentukan turunan dari f(x) = ln(x² + 1).",
    options: [
        "2x / (x² + 1)",
        "1 / (x² + 1)",
        "2x · ln(x² + 1)",
        "x / (x² + 1)"
    ],
    answer: 0,
    explanation: "Menggunakan chain rule: f'(x) = [1/(x²+1)] · 2x = 2x/(x²+1)."
},
{
    id: 5,
    category: "matematika",
    question: "Deret Taylor dari eˣ di sekitar x = 0 adalah...",
    options: [
        "1 + x + x²/2! + x³/3! + ...",
        "1 - x + x²/2! - x³/3! + ...",
        "x + x²/2 + x³/3 + ...",
        "1 + x + x² + x³ + ..."
    ],
    answer: 0,
    explanation: "Deret Taylor/Maclaurin dari eˣ = Σ(xⁿ/n!) = 1 + x + x²/2! + x³/3! + ..."
},
{
    id: 6,
    category: "matematika",
    question: "Hitung ∫ eˣ · cos(x) dx menggunakan integral parsial dua kali. Hasilnya adalah...",
    options: [
        "eˣ(sin(x) + cos(x))/2 + C",
        "eˣ · sin(x) + C",
        "eˣ(sin(x) - cos(x))/2 + C",
        "eˣ · cos(x) + C"
    ],
    answer: 0,
    explanation: "Dengan menerapkan integral parsial dua kali dan menyelesaikan persamaan, diperoleh ∫eˣcos(x)dx = eˣ(sin(x) + cos(x))/2 + C."
},
{
    id: 7,
    category: "matematika",
    question: "Tentukan nilai lim(x→∞) (1 + 1/x)ˣ.",
    options: [
        "e",
        "1",
        "∞",
        "0"
    ],
    answer: 0,
    explanation: "Ini merupakan definisi bilangan Euler (e ≈ 2.71828)."
},
{
    id: 8,
    category: "matematika",
    question: "Jika f(x) = x · eˣ, tentukan f''(x).",
    options: [
        "(x + 2)eˣ",
        "(x + 1)eˣ",
        "x · eˣ + 2eˣ",
        "2x · eˣ"
    ],
    answer: 0,
    explanation: "f'(x) = eˣ + x·eˣ = (x+1)eˣ. f''(x) = eˣ + (x+1)eˣ = (x+2)eˣ."
},

// --- Aljabar Linear ---
{
    id: 9,
    category: "matematika",
    question: "Diketahui matriks A = [[1, 2], [3, 4]]. Tentukan determinan A.",
    options: [
        "-2",
        "2",
        "-10",
        "10"
    ],
    answer: 0,
    explanation: "det(A) = (1)(4) - (2)(3) = 4 - 6 = -2."
},
{
    id: 10,
    category: "matematika",
    question: "Diketahui matriks A = [[2, 1], [1, 3]]. Tentukan eigenvalue dari A.",
    options: [
        "(5 + √5)/2 dan (5 - √5)/2",
        "2 dan 3",
        "1 dan 4",
        "1 dan 6"
    ],
    answer: 0,
    explanation: "det(A - λI) = 0 → (2-λ)(3-λ) - 1 = 0 → λ² - 5λ + 5 = 0 → λ = (5 ± √5)/2."
},
{
    id: 11,
    category: "matematika",
    question: "Jika A dan B adalah matriks 3×3 dengan det(A) = 2 dan det(B) = 5, berapakah det(AB)?",
    options: [
        "10",
        "7",
        "3",
        "25"
    ],
    answer: 0,
    explanation: "Sifat determinan: det(AB) = det(A) · det(B) = 2 × 5 = 10."
},
{
    id: 12,
    category: "matematika",
    question: "Vektor u = [1, 2, 3] dan v = [4, 5, 6]. Hitung u · v (dot product).",
    options: [
        "32",
        "15",
        "21",
        "30"
    ],
    answer: 0,
    explanation: "u·v = (1)(4) + (2)(5) + (3)(6) = 4 + 10 + 18 = 32."
},
{
    id: 13,
    category: "matematika",
    question: "Rank dari matriks [[1, 2, 3], [2, 4, 6], [0, 1, 1]] adalah...",
    options: [
        "2",
        "3",
        "1",
        "0"
    ],
    answer: 0,
    explanation: "Baris kedua adalah 2× baris pertama (linearly dependent), sehingga rank = 2."
},
{
    id: 14,
    category: "matematika",
    question: "Invers dari matriks [[1, 0], [2, 1]] adalah...",
    options: [
        "[[1, 0], [-2, 1]]",
        "[[1, 0], [2, -1]]",
        "[[1, 2], [0, 1]]",
        "[[0, 1], [1, -2]]"
    ],
    answer: 0,
    explanation: "Untuk matriks segitiga bawah [[1,0],[a,1]], inversnya adalah [[1,0],[-a,1]]."
},
{
    id: 15,
    category: "matematika",
    question: "Dua vektor dikatakan ortogonal jika...",
    options: [
        "Dot product-nya sama dengan 0",
        "Cross product-nya sama dengan 0",
        "Keduanya sejajar",
        "Panjangnya sama"
    ],
    answer: 0,
    explanation: "Dua vektor ortogonal (tegak lurus) jika dan hanya jika u·v = 0."
},

// --- Statistik & Probabilitas ---
{
    id: 16,
    category: "matematika",
    question: "Jika X ~ N(50, 10²) dan Z = (X - 50)/10, maka Z mengikuti distribusi...",
    options: [
        "Normal standar N(0, 1)",
        "Normal N(50, 1)",
        "Uniform (0, 1)",
        "Student-t"
    ],
    answer: 0,
    explanation: "Standardisasi Z = (X - μ)/σ mengubah distribusi normal menjadi normal standar N(0,1)."
},
{
    id: 17,
    category: "matematika",
    question: "Dari 10 mahasiswa, berapa cara memilih 3 mahasiswa untuk suatu kelompok?",
    options: [
        "120",
        "720",
        "210",
        "30"
    ],
    answer: 0,
    explanation: "C(10,3) = 10! / (3! × 7!) = 720/6 = 120."
},
{
    id: 18,
    category: "matematika",
    question: "Jika P(A) = 0.4, P(B) = 0.5, dan P(A∩B) = 0.2, berapakah P(A∪B)?",
    options: [
        "0.7",
        "0.9",
        "0.6",
        "0.3"
    ],
    answer: 0,
    explanation: "P(A∪B) = P(A) + P(B) - P(A∩B) = 0.4 + 0.5 - 0.2 = 0.7."
},
{
    id: 19,
    category: "matematika",
    question: "Varians dari data {2, 4, 6, 8, 10} adalah...",
    options: [
        "8",
        "10",
        "4",
        "6"
    ],
    answer: 0,
    explanation: "Mean = 6. Varians = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²] / 5 = (16+4+0+4+16)/5 = 40/5 = 8."
},
{
    id: 20,
    category: "matematika",
    question: "Dalam distribusi binomial B(n, p), nilai expected value (E[X]) adalah...",
    options: [
        "n × p",
        "n × p × (1-p)",
        "p / n",
        "n² × p"
    ],
    answer: 0,
    explanation: "Untuk distribusi binomial, E[X] = np dan Var(X) = np(1-p)."
},
{
    id: 21,
    category: "matematika",
    question: "Jika koefisien korelasi Pearson antara X dan Y adalah r = -0.85, maka...",
    options: [
        "Ada hubungan linear negatif yang kuat antara X dan Y",
        "Tidak ada hubungan antara X dan Y",
        "Ada hubungan linear positif yang kuat",
        "X dan Y independen"
    ],
    answer: 0,
    explanation: "r = -0.85 menunjukkan korelasi negatif yang kuat: saat X naik, Y cenderung turun."
},
{
    id: 22,
    category: "matematika",
    question: "Central Limit Theorem menyatakan bahwa...",
    options: [
        "Distribusi rata-rata sampel mendekati distribusi normal saat n besar",
        "Semua data mengikuti distribusi normal",
        "Varians sampel selalu sama dengan varians populasi",
        "Mean sampel selalu sama dengan mean populasi"
    ],
    answer: 0,
    explanation: "CLT menyatakan bahwa distribusi rata-rata sampel akan mendekati distribusi normal ketika ukuran sampel (n) cukup besar, terlepas dari distribusi populasi aslinya."
},
{
    id: 23,
    category: "matematika",
    question: "Turunan parsial ∂f/∂x dari f(x,y) = x²y + 3xy² adalah...",
    options: [
        "2xy + 3y²",
        "x² + 6xy",
        "2xy + 6xy",
        "x² + 3y²"
    ],
    answer: 0,
    explanation: "∂f/∂x: turunkan terhadap x, anggap y konstan. ∂(x²y)/∂x = 2xy, ∂(3xy²)/∂x = 3y². Total = 2xy + 3y²."
},
{
    id: 24,
    category: "matematika",
    question: "Gradient dari f(x,y) = x² + y² pada titik (1, 2) adalah...",
    options: [
        "(2, 4)",
        "(1, 2)",
        "(2, 2)",
        "(1, 4)"
    ],
    answer: 0,
    explanation: "∇f = (∂f/∂x, ∂f/∂y) = (2x, 2y). Di titik (1,2): ∇f = (2, 4)."
},
{
    id: 25,
    category: "matematika",
    question: "Dalam metode gradient descent, learning rate (α) yang terlalu besar akan menyebabkan...",
    options: [
        "Divergensi (tidak konvergen ke minimum)",
        "Konvergensi yang sangat cepat",
        "Selalu menemukan global minimum",
        "Tidak berpengaruh pada hasil"
    ],
    answer: 0,
    explanation: "Learning rate terlalu besar menyebabkan loncatan melewati minimum sehingga divergen."
},
{
    id: 26,
    category: "matematika",
    question: "Diketahui matriks A = [[1, 2], [0, 3]]. Tentukan A².",
    options: [
        "[[1, 8], [0, 9]]",
        "[[1, 4], [0, 9]]",
        "[[2, 4], [0, 6]]",
        "[[1, 6], [0, 9]]"
    ],
    answer: 0,
    explanation: "A² = A·A. Baris 1: [1·1+2·0, 1·2+2·3] = [1, 8]. Baris 2: [0·1+3·0, 0·2+3·3] = [0, 9]."
},
{
    id: 27,
    category: "matematika",
    question: "Median dari data {3, 7, 1, 9, 4, 2, 8} adalah...",
    options: [
        "4",
        "5",
        "7",
        "3"
    ],
    answer: 0,
    explanation: "Urutkan: {1, 2, 3, 4, 7, 8, 9}. Median = nilai tengah = 4."
},
{
    id: 28,
    category: "matematika",
    question: "Jika matriks A berukuran 3×4 dan matriks B berukuran 4×2, maka dimensi A×B adalah...",
    options: [
        "3 × 2",
        "4 × 4",
        "3 × 4",
        "4 × 2"
    ],
    answer: 0,
    explanation: "Perkalian matriks (m×n) · (n×p) = (m×p). Jadi (3×4)·(4×2) = 3×2."
},
{
    id: 29,
    category: "matematika",
    question: "Hitung ∫₀^π sin(x) dx.",
    options: [
        "2",
        "0",
        "π",
        "1"
    ],
    answer: 0,
    explanation: "∫₀^π sin(x) dx = [-cos(x)]₀^π = -cos(π) + cos(0) = -(-1) + 1 = 2."
},
{
    id: 30,
    category: "matematika",
    question: "Sebuah dadu dilempar 2 kali. Probabilitas mendapatkan jumlah mata dadu = 7 adalah...",
    options: [
        "6/36 = 1/6",
        "1/36",
        "7/36",
        "1/12"
    ],
    answer: 0,
    explanation: "Pasangan yang menghasilkan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 cara dari 36 kemungkinan = 1/6."
},
{
    id: 31,
    category: "matematika",
    question: "Diberikan f(x) = |x - 3|. Fungsi ini tidak terdiferensiasi di titik...",
    options: [
        "x = 3",
        "x = 0",
        "x = -3",
        "Terdiferensiasi di semua titik"
    ],
    answer: 0,
    explanation: "Fungsi nilai mutlak |x - a| memiliki titik sudut (cusp) di x = a sehingga tidak terdiferensiasi di titik tersebut."
},

// ============================================================
// KATEGORI 2: FISIKA (Mekanika, Listrik & Magnet)
// ============================================================

// --- Mekanika ---
{
    id: 32,
    category: "fisika",
    question: "Sebuah benda bermassa 5 kg bergerak dengan percepatan 3 m/s². Berapakah gaya yang bekerja pada benda tersebut?",
    options: [
        "15 N",
        "8 N",
        "1.67 N",
        "30 N"
    ],
    answer: 0,
    explanation: "Hukum Newton II: F = m·a = 5 × 3 = 15 N."
},
{
    id: 33,
    category: "fisika",
    question: "Sebuah benda dilempar vertikal ke atas dengan kecepatan awal 20 m/s. Berapakah ketinggian maksimum yang dicapai? (g = 10 m/s²)",
    options: [
        "20 m",
        "40 m",
        "10 m",
        "30 m"
    ],
    answer: 0,
    explanation: "Di titik tertinggi v = 0. v² = v₀² - 2gh → 0 = 400 - 20h → h = 20 m."
},
{
    id: 34,
    category: "fisika",
    question: "Energi kinetik sebuah benda bermassa 2 kg yang bergerak dengan kecepatan 6 m/s adalah...",
    options: [
        "36 J",
        "12 J",
        "72 J",
        "24 J"
    ],
    answer: 0,
    explanation: "Ek = ½mv² = ½ × 2 × 36 = 36 J."
},
{
    id: 35,
    category: "fisika",
    question: "Hukum kekekalan energi mekanik menyatakan bahwa...",
    options: [
        "Jumlah energi kinetik dan potensial adalah konstan jika hanya gaya konservatif yang bekerja",
        "Energi tidak dapat diciptakan maupun dimusnahkan dalam keadaan apapun",
        "Energi kinetik selalu sama dengan energi potensial",
        "Energi mekanik selalu bertambah"
    ],
    answer: 0,
    explanation: "Hukum kekekalan energi mekanik berlaku jika hanya gaya konservatif yang bekerja: Ek + Ep = konstan."
},
{
    id: 36,
    category: "fisika",
    question: "Sebuah benda bergerak melingkar beraturan dengan jari-jari 4 m dan kecepatan linear 8 m/s. Percepatan sentripetalnya adalah...",
    options: [
        "16 m/s²",
        "2 m/s²",
        "32 m/s²",
        "8 m/s²"
    ],
    answer: 0,
    explanation: "aₛ = v²/r = 64/4 = 16 m/s²."
},
{
    id: 37,
    category: "fisika",
    question: "Momentum linear dari benda bermassa 3 kg dengan kecepatan 4 m/s adalah...",
    options: [
        "12 kg·m/s",
        "7 kg·m/s",
        "0.75 kg·m/s",
        "24 kg·m/s"
    ],
    answer: 0,
    explanation: "p = m·v = 3 × 4 = 12 kg·m/s."
},
{
    id: 38,
    category: "fisika",
    question: "Sebuah pegas dengan konstanta k = 200 N/m ditekan sejauh 0.1 m. Energi potensial elastis yang tersimpan adalah...",
    options: [
        "1 J",
        "20 J",
        "10 J",
        "2 J"
    ],
    answer: 0,
    explanation: "Ep = ½kx² = ½ × 200 × 0.01 = 1 J."
},
{
    id: 39,
    category: "fisika",
    question: "Periode bandul sederhana dengan panjang 1 m di permukaan bumi (g = 10 m/s²) mendekati...",
    options: [
        "2 s",
        "1 s",
        "π s",
        "0.5 s"
    ],
    answer: 0,
    explanation: "T = 2π√(L/g) = 2π√(1/10) = 2π × 0.316 ≈ 1.99 ≈ 2 s."
},

// --- Listrik & Magnet ---
{
    id: 40,
    category: "fisika",
    question: "Hukum Ohm menyatakan bahwa...",
    options: [
        "V = I × R",
        "V = I / R",
        "I = V × R",
        "R = V × I"
    ],
    answer: 0,
    explanation: "Hukum Ohm: V = IR, di mana V = tegangan, I = arus, R = hambatan."
},
{
    id: 41,
    category: "fisika",
    question: "Dua resistor R₁ = 4Ω dan R₂ = 6Ω dipasang paralel. Hambatan total adalah...",
    options: [
        "2.4 Ω",
        "10 Ω",
        "5 Ω",
        "24 Ω"
    ],
    answer: 0,
    explanation: "1/Rtot = 1/R₁ + 1/R₂ = 1/4 + 1/6 = 5/12 → Rtot = 12/5 = 2.4 Ω."
},
{
    id: 42,
    category: "fisika",
    question: "Sebuah kapasitor 10 μF diisi dengan tegangan 100 V. Energi yang tersimpan adalah...",
    options: [
        "0.05 J",
        "0.5 J",
        "500 J",
        "0.001 J"
    ],
    answer: 0,
    explanation: "E = ½CV² = ½ × 10×10⁻⁶ × 10000 = 0.05 J."
},
{
    id: 43,
    category: "fisika",
    question: "Gaya Lorentz pada muatan q yang bergerak dengan kecepatan v dalam medan magnet B diberikan oleh...",
    options: [
        "F = q(v × B)",
        "F = qvB²",
        "F = qv/B",
        "F = q²vB"
    ],
    answer: 0,
    explanation: "Gaya Lorentz: F = q(v × B), di mana × adalah cross product."
},
{
    id: 44,
    category: "fisika",
    question: "Daya listrik yang diserap sebuah resistor 10Ω yang dialiri arus 3A adalah...",
    options: [
        "90 W",
        "30 W",
        "300 W",
        "0.9 W"
    ],
    answer: 0,
    explanation: "P = I²R = 9 × 10 = 90 W."
},
{
    id: 45,
    category: "fisika",
    question: "Hukum Faraday tentang induksi elektromagnetik menyatakan bahwa GGL induksi sebanding dengan...",
    options: [
        "Laju perubahan fluks magnetik terhadap waktu",
        "Besar medan magnet konstan",
        "Arus listrik yang mengalir",
        "Hambatan dalam rangkaian"
    ],
    answer: 0,
    explanation: "Hukum Faraday: ε = -dΦ/dt, GGL induksi sebanding dengan laju perubahan fluks magnetik."
},
{
    id: 46,
    category: "fisika",
    question: "Sebuah gelombang elektromagnetik merambat dengan kecepatan c di ruang hampa. Hubungan antara panjang gelombang (λ) dan frekuensi (f) adalah...",
    options: [
        "c = λ × f",
        "c = λ / f",
        "c = λ² × f",
        "c = f / λ"
    ],
    answer: 0,
    explanation: "Hubungan dasar gelombang: c = λf, berlaku untuk semua gelombang."
},
{
    id: 47,
    category: "fisika",
    question: "Hukum Coulomb menyatakan bahwa gaya antara dua muatan titik berbanding...",
    options: [
        "Lurus dengan perkalian muatan, terbalik dengan kuadrat jarak",
        "Lurus dengan kuadrat muatan, terbalik dengan jarak",
        "Terbalik dengan perkalian muatan dan jarak",
        "Lurus dengan jarak dan muatan"
    ],
    answer: 0,
    explanation: "F = k·q₁q₂/r². Gaya berbanding lurus dengan perkalian muatan, terbalik dengan kuadrat jarak."
},
{
    id: 48,
    category: "fisika",
    question: "Dalam rangkaian RLC seri, pada saat resonansi...",
    options: [
        "Impedansi bernilai minimum dan sama dengan R",
        "Impedansi bernilai maksimum",
        "Arus bernilai minimum",
        "Tegangan pada kapasitor sama dengan nol"
    ],
    answer: 0,
    explanation: "Saat resonansi, XL = XC sehingga saling meniadakan, dan impedansi Z = R (minimum)."
},
{
    id: 49,
    category: "fisika",
    question: "Sebuah bola bermassa 0.5 kg jatuh bebas dari ketinggian 5 m. Kecepatan bola saat menyentuh tanah adalah... (g = 10 m/s²)",
    options: [
        "10 m/s",
        "5 m/s",
        "√50 m/s",
        "20 m/s"
    ],
    answer: 0,
    explanation: "v² = 2gh = 2 × 10 × 5 = 100 → v = 10 m/s."
},
{
    id: 50,
    category: "fisika",
    question: "Momen inersia bola pejal bermassa m dan jari-jari r terhadap sumbu yang melewati pusat adalah...",
    options: [
        "2/5 mr²",
        "1/2 mr²",
        "mr²",
        "2/3 mr²"
    ],
    answer: 0,
    explanation: "Momen inersia bola pejal I = 2/5 mr²."
},
{
    id: 51,
    category: "fisika",
    question: "Efek Doppler terjadi ketika...",
    options: [
        "Ada gerakan relatif antara sumber dan pengamat gelombang",
        "Gelombang melewati celah sempit",
        "Dua gelombang berinterferensi",
        "Gelombang dipantulkan oleh permukaan"
    ],
    answer: 0,
    explanation: "Efek Doppler adalah perubahan frekuensi yang teramati karena gerakan relatif antara sumber dan pengamat."
},
{
    id: 52,
    category: "fisika",
    question: "Sebuah transformator step-up memiliki lilitan primer 100 dan lilitan sekunder 500. Jika tegangan primernya 220V, maka tegangan sekundernya adalah...",
    options: [
        "1100 V",
        "44 V",
        "550 V",
        "2200 V"
    ],
    answer: 0,
    explanation: "Vs/Vp = Ns/Np → Vs = 220 × 500/100 = 1100 V."
},
{
    id: 53,
    category: "fisika",
    question: "Hukum Gauss menyatakan bahwa fluks listrik total melalui permukaan tertutup sebanding dengan...",
    options: [
        "Muatan total yang dilingkupi",
        "Medan listrik pada permukaan",
        "Luas permukaan",
        "Jarak dari muatan"
    ],
    answer: 0,
    explanation: "Hukum Gauss: ∮E·dA = Q_enc/ε₀. Fluks total sebanding dengan muatan total yang dilingkupi."
},

// ============================================================
// KATEGORI 3: BAHASA INGGRIS (Reading Comprehension, Grammar)
// ============================================================

// --- Grammar ---
{
    id: 54,
    category: "english",
    question: "Choose the correct sentence:",
    options: [
        "Neither the students nor the teacher was aware of the change.",
        "Neither the students nor the teacher were aware of the change.",
        "Neither the students or the teacher was aware of the change.",
        "Neither the students nor the teacher are aware of the change."
    ],
    answer: 0,
    explanation: "With 'neither...nor', the verb agrees with the nearest subject ('the teacher' = singular → 'was')."
},
{
    id: 55,
    category: "english",
    question: "Select the correct form: 'If I ___ the answer, I would have told you.'",
    options: [
        "had known",
        "knew",
        "have known",
        "would know"
    ],
    answer: 0,
    explanation: "Third conditional (past unreal): If + past perfect, ...would have + past participle. → 'If I had known...'"
},
{
    id: 56,
    category: "english",
    question: "'The data ___ collected over a period of three months.' Choose the correct verb form.",
    options: [
        "were",
        "was",
        "is",
        "has"
    ],
    answer: 0,
    explanation: "'Data' is the plural of 'datum'. In formal/academic writing, it takes a plural verb: 'were collected'."
},
{
    id: 57,
    category: "english",
    question: "Which sentence uses the passive voice correctly?",
    options: [
        "The experiment was conducted by the research team.",
        "The research team was conducted the experiment.",
        "The experiment conducted by the research team.",
        "By the research team the experiment was conducting."
    ],
    answer: 0,
    explanation: "Passive voice: Subject + was/were + past participle + by + agent."
},
{
    id: 58,
    category: "english",
    question: "'Despite ___ the project on time, they received no bonus.' Fill in the blank.",
    options: [
        "completing",
        "completed",
        "to complete",
        "complete"
    ],
    answer: 0,
    explanation: "'Despite' is followed by a gerund (verb + -ing) or a noun phrase: 'Despite completing...'."
},
{
    id: 59,
    category: "english",
    question: "Which word best completes: 'The professor emphasized the ___ of peer review in academic research.'",
    options: [
        "significance",
        "significant",
        "significantly",
        "signify"
    ],
    answer: 0,
    explanation: "After 'the', a noun is needed. 'Significance' is the noun form."
},
{
    id: 60,
    category: "english",
    question: "'The number of students who ___ passed the exam has increased.' Choose the correct word.",
    options: [
        "have",
        "has",
        "had",
        "having"
    ],
    answer: 0,
    explanation: "'Who' refers to 'students' (plural), so the verb in the relative clause is plural: 'who have passed'."
},
{
    id: 61,
    category: "english",
    question: "Choose the correct sentence:",
    options: [
        "It is essential that he be present at the meeting.",
        "It is essential that he is present at the meeting.",
        "It is essential that he was present at the meeting.",
        "It is essential that he will be present at the meeting."
    ],
    answer: 0,
    explanation: "Subjunctive mood: After 'it is essential/important/necessary that', use the base form of the verb ('be')."
},

// --- Reading Comprehension ---
{
    id: 62,
    category: "english",
    question: "Read the passage: 'Machine learning algorithms can be broadly classified into supervised, unsupervised, and reinforcement learning. Supervised learning uses labeled data, while unsupervised learning discovers hidden patterns in unlabeled data.' — What is the main difference between supervised and unsupervised learning?",
    options: [
        "Supervised learning uses labeled data, while unsupervised uses unlabeled data.",
        "Supervised learning is faster than unsupervised learning.",
        "Unsupervised learning requires more computational power.",
        "There is no significant difference between them."
    ],
    answer: 0,
    explanation: "The passage explicitly states that supervised learning uses labeled data, while unsupervised learning works with unlabeled data."
},
{
    id: 63,
    category: "english",
    question: "Which transition word best fits: '___, the experimental results confirmed the hypothesis. ___, further testing is recommended.'",
    options: [
        "Overall / Nevertheless",
        "However / Therefore",
        "Because / Although",
        "Although / Because"
    ],
    answer: 0,
    explanation: "'Overall' summarizes the confirmation. 'Nevertheless' introduces a contrasting recommendation."
},
{
    id: 64,
    category: "english",
    question: "Choose the sentence with correct subject-verb agreement:",
    options: [
        "Each of the components has been tested individually.",
        "Each of the components have been tested individually.",
        "Each of the components are being tested individually.",
        "Each of the components were tested individually."
    ],
    answer: 0,
    explanation: "'Each' is always singular, so it takes 'has been tested'."
},
{
    id: 65,
    category: "english",
    question: "'The findings suggest that the hypothesis ___ incorrect.' Choose the best option.",
    options: [
        "may be",
        "may being",
        "maybe",
        "may been"
    ],
    answer: 0,
    explanation: "'May be' (two words, modal + verb) means 'might be'. 'Maybe' (one word) is an adverb meaning 'perhaps'."
},
{
    id: 66,
    category: "english",
    question: "Identify the correctly punctuated sentence:",
    options: [
        "The algorithm, which was developed in 2020, outperformed all its competitors.",
        "The algorithm which was developed in 2020, outperformed all its competitors.",
        "The algorithm, which was developed in 2020 outperformed all its competitors.",
        "The algorithm which was developed in 2020 outperformed, all its competitors."
    ],
    answer: 0,
    explanation: "Non-restrictive clauses (which provides additional info) are set off by commas on both sides."
},
{
    id: 67,
    category: "english",
    question: "'The team ___ working on the project for six months before they achieved a breakthrough.' Choose the correct tense.",
    options: [
        "had been",
        "has been",
        "was",
        "were"
    ],
    answer: 0,
    explanation: "Past perfect continuous ('had been working') is used for an action that was ongoing before another past action."
},
{
    id: 68,
    category: "english",
    question: "Which is the correct form? 'The report shows a ___ increase in performance.'",
    options: [
        "significant",
        "significantly",
        "significance",
        "signified"
    ],
    answer: 0,
    explanation: "An adjective is needed to modify the noun 'increase'. 'Significant' is the adjective."
},
{
    id: 69,
    category: "english",
    question: "'Hardly ___ the presentation when the fire alarm went off.' Complete the sentence.",
    options: [
        "had he started",
        "he had started",
        "he started",
        "did he start"
    ],
    answer: 0,
    explanation: "When 'hardly' begins a sentence, inversion is required: 'Hardly had + subject + past participle'."
},
{
    id: 70,
    category: "english",
    question: "Choose the correct relative pronoun: 'The researcher ___ paper was published in Nature won an award.'",
    options: [
        "whose",
        "which",
        "who",
        "whom"
    ],
    answer: 0,
    explanation: "'Whose' shows possession — the researcher's paper. 'Who' is for subjects, 'whom' for objects."
},
{
    id: 71,
    category: "english",
    question: "Read: 'Cloud computing enables on-demand access to a shared pool of configurable computing resources. It provides scalability, cost-effectiveness, and flexibility.' — The word 'scalability' in this context means:",
    options: [
        "The ability to increase or decrease resources as needed",
        "The speed of data processing",
        "The security of data storage",
        "The cost of maintaining servers"
    ],
    answer: 0,
    explanation: "Scalability refers to the ability to scale (increase/decrease) computing resources based on demand."
},

// ============================================================
// KATEGORI 4: LOGIKA & PENALARAN
// ============================================================

{
    id: 72,
    category: "logika",
    question: "Jika p → q bernilai benar dan p bernilai benar, maka q bernilai...",
    options: [
        "Benar",
        "Salah",
        "Tidak dapat ditentukan",
        "Bisa benar atau salah"
    ],
    answer: 0,
    explanation: "Modus Ponens: Jika p → q benar dan p benar, maka q pasti benar."
},
{
    id: 73,
    category: "logika",
    question: "Negasi dari pernyataan 'Semua mahasiswa lulus ujian' adalah...",
    options: [
        "Ada mahasiswa yang tidak lulus ujian",
        "Tidak ada mahasiswa yang lulus ujian",
        "Semua mahasiswa tidak lulus ujian",
        "Beberapa mahasiswa lulus ujian"
    ],
    answer: 0,
    explanation: "Negasi ∀x P(x) = ∃x ¬P(x). 'Semua lulus' negasinya 'ada yang tidak lulus'."
},
{
    id: 74,
    category: "logika",
    question: "Diberikan deret: 2, 6, 18, 54, ... Bilangan selanjutnya adalah...",
    options: [
        "162",
        "108",
        "72",
        "216"
    ],
    answer: 0,
    explanation: "Deret geometri dengan rasio 3: 2, 6, 18, 54, 162 (×3 setiap suku)."
},
{
    id: 75,
    category: "logika",
    question: "Jika semua bunga mawar berduri dan beberapa tanaman hias adalah bunga mawar, maka...",
    options: [
        "Beberapa tanaman hias berduri",
        "Semua tanaman hias berduri",
        "Semua yang berduri adalah bunga mawar",
        "Tidak ada tanaman hias yang berduri"
    ],
    answer: 0,
    explanation: "Jika beberapa tanaman hias = mawar, dan semua mawar berduri, maka beberapa tanaman hias berduri."
},
{
    id: 76,
    category: "logika",
    question: "Dalam notasi logika, kontraposisi dari p → q adalah...",
    options: [
        "¬q → ¬p",
        "q → p",
        "¬p → ¬q",
        "p ∧ ¬q"
    ],
    answer: 0,
    explanation: "Kontraposisi dari p → q adalah ¬q → ¬p, dan keduanya ekuivalen secara logis."
},
{
    id: 77,
    category: "logika",
    question: "Diberikan deret: 1, 1, 2, 3, 5, 8, 13, ... Bilangan selanjutnya adalah...",
    options: [
        "21",
        "18",
        "20",
        "15"
    ],
    answer: 0,
    explanation: "Deret Fibonacci: setiap bilangan = jumlah dua bilangan sebelumnya. 8 + 13 = 21."
},
{
    id: 78,
    category: "logika",
    question: "Ali lebih tua dari Budi. Cici lebih muda dari Budi. Dedi seumuran dengan Ali. Siapa yang paling muda?",
    options: [
        "Cici",
        "Budi",
        "Ali",
        "Dedi"
    ],
    answer: 0,
    explanation: "Ali = Dedi > Budi > Cici. Jadi Cici paling muda."
},
{
    id: 79,
    category: "logika",
    question: "Pernyataan mana yang merupakan tautologi?",
    options: [
        "p ∨ ¬p",
        "p ∧ ¬p",
        "p → q",
        "p ∧ q"
    ],
    answer: 0,
    explanation: "p ∨ ¬p selalu bernilai benar (tautologi). p ∧ ¬p selalu salah (kontradiksi)."
},
{
    id: 80,
    category: "logika",
    question: "Dalam sebuah ruangan, ada 3 orang: A, B, C. Diketahui: A selalu jujur, B selalu berbohong, C kadang jujur kadang berbohong. A berkata 'B bukan pembohong'. Apa yang dapat disimpulkan?",
    options: [
        "Skenario ini kontradiksi/tidak mungkin terjadi",
        "A memang jujur",
        "B juga jujur",
        "C yang berbohong"
    ],
    answer: 0,
    explanation: "Jika A selalu jujur, maka pernyataan 'B bukan pembohong' harus benar. Tapi B selalu berbohong. Kontradiksi."
},
{
    id: 81,
    category: "logika",
    question: "Jika hari ini Senin, maka besok Selasa. Besok bukan Selasa. Kesimpulannya...",
    options: [
        "Hari ini bukan Senin",
        "Hari ini Senin",
        "Besok Selasa",
        "Tidak dapat disimpulkan"
    ],
    answer: 0,
    explanation: "Modus Tollens: Jika p→q dan ¬q, maka ¬p. Jika 'besok bukan Selasa', maka 'hari ini bukan Senin'."
},
{
    id: 82,
    category: "logika",
    question: "Diberikan deret: 3, 7, 15, 31, 63, ... Suku selanjutnya adalah...",
    options: [
        "127",
        "126",
        "95",
        "125"
    ],
    answer: 0,
    explanation: "Pola: setiap suku = suku sebelumnya × 2 + 1. 63 × 2 + 1 = 127. Atau: 2² - 1, 2³ - 1, 2⁴ - 1, 2⁵ - 1, 2⁶ - 1, 2⁷ - 1 = 127."
},
{
    id: 83,
    category: "logika",
    question: "Tabel kebenaran AND (∧): p = True, q = False. Hasil p ∧ q adalah...",
    options: [
        "False",
        "True",
        "Undefined",
        "Null"
    ],
    answer: 0,
    explanation: "Operasi AND menghasilkan True hanya jika kedua operand True. True ∧ False = False."
},
{
    id: 84,
    category: "logika",
    question: "Sebuah kode loker terdiri dari 4 digit angka (0-9). Berapa total kemungkinan kode yang berbeda?",
    options: [
        "10.000",
        "10.000.000",
        "40",
        "5.040"
    ],
    answer: 0,
    explanation: "Setiap digit memiliki 10 pilihan (0-9). Total = 10⁴ = 10.000."
},
{
    id: 85,
    category: "logika",
    question: "Jika p ↔ q bernilai benar, maka...",
    options: [
        "p dan q memiliki nilai kebenaran yang sama",
        "p dan q selalu benar",
        "p dan q selalu salah",
        "p atau q benar, tapi tidak keduanya"
    ],
    answer: 0,
    explanation: "Bikonditional (↔) bernilai benar jika p dan q memiliki nilai kebenaran yang sama (keduanya benar atau keduanya salah)."
},
{
    id: 86,
    category: "logika",
    question: "Diketahui himpunan A = {1,2,3,4,5} dan B = {3,4,5,6,7}. Himpunan A ∩ B adalah...",
    options: [
        "{3, 4, 5}",
        "{1, 2, 3, 4, 5, 6, 7}",
        "{1, 2, 6, 7}",
        "{1, 2}"
    ],
    answer: 0,
    explanation: "A ∩ B (intersection) = elemen yang ada di kedua himpunan = {3, 4, 5}."
},
{
    id: 87,
    category: "logika",
    question: "Sebuah silogisme: 'Semua programmer pandai logika. Andi adalah programmer.' Kesimpulannya...",
    options: [
        "Andi pandai logika",
        "Semua yang pandai logika adalah programmer",
        "Andi bukan programmer",
        "Tidak dapat disimpulkan"
    ],
    answer: 0,
    explanation: "Silogisme klasik: Premis mayor + premis minor → kesimpulan. Andi programmer → Andi pandai logika."
},
{
    id: 88,
    category: "logika",
    question: "Hukum De Morgan menyatakan bahwa ¬(p ∧ q) setara dengan...",
    options: [
        "¬p ∨ ¬q",
        "¬p ∧ ¬q",
        "p ∨ q",
        "p ∧ q"
    ],
    answer: 0,
    explanation: "Hukum De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q dan ¬(p ∨ q) ≡ ¬p ∧ ¬q."
},
{
    id: 89,
    category: "logika",
    question: "Dalam basis bilangan biner, 1010₂ sama dengan berapa dalam desimal?",
    options: [
        "10",
        "12",
        "8",
        "1010"
    ],
    answer: 0,
    explanation: "1010₂ = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10."
},

// ============================================================
// KATEGORI 5: PEMROGRAMAN & ALGORITMA
// ============================================================

{
    id: 90,
    category: "programming",
    question: "Apa output dari kode Python berikut?\n<pre>x = [1, 2, 3, 4, 5]\nprint(x[1:3])</pre>",
    options: [
        "[2, 3]",
        "[1, 2, 3]",
        "[2, 3, 4]",
        "[1, 2]"
    ],
    answer: 0,
    explanation: "Slicing x[1:3] mengambil elemen dari indeks 1 (inklusif) sampai 3 (eksklusif) → [2, 3]."
},
{
    id: 91,
    category: "programming",
    question: "Kompleksitas waktu (time complexity) dari binary search pada array terurut adalah...",
    options: [
        "O(log n)",
        "O(n)",
        "O(n²)",
        "O(1)"
    ],
    answer: 0,
    explanation: "Binary search membagi data menjadi setengah setiap iterasi, menghasilkan O(log n)."
},
{
    id: 92,
    category: "programming",
    question: "Apa perbedaan utama antara Stack dan Queue?",
    options: [
        "Stack menggunakan LIFO, Queue menggunakan FIFO",
        "Stack lebih cepat dari Queue",
        "Queue menggunakan LIFO, Stack menggunakan FIFO",
        "Keduanya sama saja"
    ],
    answer: 0,
    explanation: "Stack: Last In First Out (LIFO). Queue: First In First Out (FIFO)."
},
{
    id: 93,
    category: "programming",
    question: "Apa output dari kode berikut?\n<pre>def foo(a, b=[]):\n    b.append(a)\n    return b\n\nprint(foo(1))\nprint(foo(2))</pre>",
    options: [
        "[1] kemudian [1, 2]",
        "[1] kemudian [2]",
        "Error",
        "[1, 2] kemudian [1, 2]"
    ],
    answer: 0,
    explanation: "Default mutable argument (list) di Python dibagi antar pemanggilan. Pertama: [1], kedua: [1, 2]."
},
{
    id: 94,
    category: "programming",
    question: "Algoritma sorting mana yang memiliki worst-case time complexity O(n log n)?",
    options: [
        "Merge Sort",
        "Quick Sort",
        "Bubble Sort",
        "Selection Sort"
    ],
    answer: 0,
    explanation: "Merge Sort selalu O(n log n). Quick Sort worst case O(n²). Bubble & Selection O(n²)."
},
{
    id: 95,
    category: "programming",
    question: "Dalam pemrograman OOP, 'inheritance' berarti...",
    options: [
        "Kelas anak mewarisi properti dan metode dari kelas induk",
        "Menyembunyikan detail implementasi",
        "Objek yang memiliki banyak bentuk",
        "Mengelompokkan data dan fungsi bersama"
    ],
    answer: 0,
    explanation: "Inheritance = pewarisan sifat dari parent class ke child class."
},
{
    id: 96,
    category: "programming",
    question: "Apa output dari kode Python berikut?\n<pre>print(type(3.14).__name__)</pre>",
    options: [
        "float",
        "double",
        "decimal",
        "number"
    ],
    answer: 0,
    explanation: "Di Python, bilangan desimal bertipe 'float'. __name__ memberikan nama tipe sebagai string."
},
{
    id: 97,
    category: "programming",
    question: "Struktur data mana yang paling efisien untuk pencarian berdasarkan key-value?",
    options: [
        "Hash Table / Dictionary",
        "Linked List",
        "Array",
        "Stack"
    ],
    answer: 0,
    explanation: "Hash table/dictionary menyediakan pencarian O(1) rata-rata berdasarkan key."
},
{
    id: 98,
    category: "programming",
    question: "Apa itu rekursi (recursion) dalam pemrograman?",
    options: [
        "Fungsi yang memanggil dirinya sendiri",
        "Perulangan menggunakan for loop",
        "Menyimpan data dalam array",
        "Membagi program menjadi beberapa file"
    ],
    answer: 0,
    explanation: "Rekursi adalah teknik di mana sebuah fungsi memanggil dirinya sendiri dengan base case untuk menghentikan pemanggilan."
},
{
    id: 99,
    category: "programming",
    question: "Dalam graph theory, algoritma Dijkstra digunakan untuk...",
    options: [
        "Menemukan jalur terpendek dari satu sumber ke semua simpul",
        "Mendeteksi cycle dalam graph",
        "Menemukan minimum spanning tree",
        "Melakukan topological sort"
    ],
    answer: 0,
    explanation: "Algoritma Dijkstra menemukan shortest path dari satu sumber ke semua node lain dalam weighted graph."
},
{
    id: 100,
    category: "programming",
    question: "Apa output dari kode berikut?\n<pre>a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)</pre>",
    options: [
        "{2, 3}",
        "{1, 2, 3, 4}",
        "{1, 4}",
        "Error"
    ],
    answer: 0,
    explanation: "Operator & pada set di Python melakukan intersection. {1,2,3} & {2,3,4} = {2,3}."
},
{
    id: 101,
    category: "programming",
    question: "Notasi Big-O O(1) disebut...",
    options: [
        "Constant time",
        "Linear time",
        "Logarithmic time",
        "Polynomial time"
    ],
    answer: 0,
    explanation: "O(1) = constant time, artinya waktu eksekusi tidak tergantung pada ukuran input."
},
{
    id: 102,
    category: "programming",
    question: "Apa perbedaan antara '==' dan 'is' di Python?",
    options: [
        "'==' membandingkan nilai, 'is' membandingkan identitas objek",
        "Keduanya sama",
        "'==' membandingkan tipe, 'is' membandingkan nilai",
        "'is' hanya untuk string"
    ],
    answer: 0,
    explanation: "'==' mengecek kesamaan nilai (equality), 'is' mengecek apakah kedua variabel merujuk ke objek yang sama di memori (identity)."
},
{
    id: 103,
    category: "programming",
    question: "Dalam binary tree, jumlah maksimum node pada level ke-k (root = level 0) adalah...",
    options: [
        "2ᵏ",
        "2ᵏ - 1",
        "k²",
        "2k"
    ],
    answer: 0,
    explanation: "Pada binary tree, setiap level k memiliki maksimum 2ᵏ node."
},
{
    id: 104,
    category: "programming",
    question: "Apa output dari kode berikut?\n<pre>x = 'Python'\nprint(x[::-1])</pre>",
    options: [
        "nohtyP",
        "Python",
        "Pytho",
        "Error"
    ],
    answer: 0,
    explanation: "x[::-1] membalik string. 'Python' → 'nohtyP'."
},
{
    id: 105,
    category: "programming",
    question: "Manakah yang merupakan contoh Dynamic Programming?",
    options: [
        "Fibonacci dengan memoization",
        "Linear search",
        "Bubble sort",
        "Breadth-first search"
    ],
    answer: 0,
    explanation: "Dynamic Programming memecah masalah menjadi subproblem yang overlap, seperti Fibonacci dengan memoization."
},
{
    id: 106,
    category: "programming",
    question: "Dalam SQL, perintah untuk mengambil data unik dari kolom 'nama' adalah...",
    options: [
        "SELECT DISTINCT nama FROM tabel",
        "SELECT UNIQUE nama FROM tabel",
        "SELECT nama FROM tabel WHERE UNIQUE",
        "SELECT ALL nama FROM tabel"
    ],
    answer: 0,
    explanation: "DISTINCT digunakan untuk mengambil nilai unik: SELECT DISTINCT nama FROM tabel."
},
{
    id: 107,
    category: "programming",
    question: "Apa itu deadlock dalam konteks sistem operasi?",
    options: [
        "Kondisi di mana dua atau lebih proses saling menunggu resource yang dikuasai proses lain",
        "Proses yang berjalan terlalu cepat",
        "Kekurangan memori RAM",
        "CPU yang overheat"
    ],
    answer: 0,
    explanation: "Deadlock terjadi ketika dua atau lebih proses saling menunggu resource satu sama lain sehingga tidak ada yang bisa melanjutkan."
},
{
    id: 108,
    category: "programming",
    question: "Apa yang dimaksud dengan 'encapsulation' dalam OOP?",
    options: [
        "Menyembunyikan detail implementasi internal dan hanya mengekspos antarmuka publik",
        "Kemampuan objek untuk memiliki banyak bentuk",
        "Pewarisan sifat dari kelas induk",
        "Membuat banyak objek dari satu kelas"
    ],
    answer: 0,
    explanation: "Encapsulation = pembungkusan data dan metode, menyembunyikan detail internal dari pengguna luar."
},
{
    id: 109,
    category: "programming",
    question: "Apa output dari kode berikut?\n<pre>print(bool(''), bool('0'), bool(0))</pre>",
    options: [
        "False True False",
        "True True False",
        "False False False",
        "True False False"
    ],
    answer: 0,
    explanation: "String kosong '' → False, string '0' (non-empty) → True, integer 0 → False."
},
{
    id: 110,
    category: "programming",
    question: "Algoritma BFS (Breadth-First Search) menggunakan struktur data...",
    options: [
        "Queue",
        "Stack",
        "Heap",
        "Array"
    ],
    answer: 0,
    explanation: "BFS menggunakan Queue (FIFO) untuk menjelajahi node level per level."
},
{
    id: 111,
    category: "programming",
    question: "Dalam konsep networking, TCP berbeda dari UDP karena...",
    options: [
        "TCP menjamin pengiriman data yang andal dan berurutan",
        "TCP lebih cepat dari UDP",
        "UDP menjamin pengiriman data",
        "TCP tidak memerlukan koneksi"
    ],
    answer: 0,
    explanation: "TCP (Transmission Control Protocol) adalah connection-oriented dan menjamin reliable, ordered delivery. UDP lebih cepat tapi unreliable."
},
{
    id: 112,
    category: "programming",
    question: "Apa itu API (Application Programming Interface)?",
    options: [
        "Antarmuka yang memungkinkan komunikasi antar software",
        "Bahasa pemrograman baru",
        "Jenis database",
        "Sistem operasi"
    ],
    answer: 0,
    explanation: "API adalah antarmuka yang mendefinisikan bagaimana komponen software berinteraksi satu sama lain."
},
{
    id: 113,
    category: "programming",
    question: "Berapa nilai dari 0xFF dalam desimal?",
    options: [
        "255",
        "256",
        "15",
        "16"
    ],
    answer: 0,
    explanation: "0xFF (hex) = 15×16¹ + 15×16⁰ = 240 + 15 = 255."
},
{
    id: 114,
    category: "programming",
    question: "Apa yang dimaksud dengan 'polymorphism' dalam OOP?",
    options: [
        "Kemampuan objek untuk merespon pesan yang sama dengan cara berbeda",
        "Menyembunyikan data",
        "Membuat objek baru",
        "Menghapus objek dari memori"
    ],
    answer: 0,
    explanation: "Polymorphism memungkinkan objek dari kelas berbeda merespon metode yang sama dengan perilaku yang berbeda."
},
{
    id: 115,
    category: "programming",
    question: "Apa itu Git branch?",
    options: [
        "Salinan independen dari kode untuk pengembangan paralel",
        "Perintah untuk menghapus file",
        "Cara untuk mengompres kode",
        "Jenis variabel"
    ],
    answer: 0,
    explanation: "Git branch adalah pointer ke snapshot kode yang memungkinkan pengembangan fitur secara paralel tanpa mengganggu kode utama."
},
{
    id: 116,
    category: "programming",
    question: "Apa output dari kode berikut?\n<pre>x = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)</pre>",
    options: [
        "[1, 2, 3, 4]",
        "[1, 2, 3]",
        "[4]",
        "Error"
    ],
    answer: 0,
    explanation: "y = x membuat y merujuk ke list yang sama. Mengubah y juga mengubah x (aliasing)."
},

// ============================================================
// SOAL TAMBAHAN - BERBAGAI KATEGORI
// ============================================================

// Matematika tambahan
{
    id: 117,
    category: "matematika",
    question: "Fungsi f(x) = x³ - 3x² + 2 memiliki titik kritis di...",
    options: [
        "x = 0 dan x = 2",
        "x = 1 dan x = 3",
        "x = -1 dan x = 2",
        "x = 0 saja"
    ],
    answer: 0,
    explanation: "f'(x) = 3x² - 6x = 3x(x-2) = 0 → x = 0 atau x = 2."
},
{
    id: 118,
    category: "matematika",
    question: "Laplace transform dari f(t) = e^(at) adalah...",
    options: [
        "1/(s - a), s > a",
        "1/(s + a)",
        "s/(s - a)",
        "a/(s² + a²)"
    ],
    answer: 0,
    explanation: "L{e^(at)} = 1/(s - a) untuk s > a."
},
{
    id: 119,
    category: "matematika",
    question: "Jika A adalah matriks ortogonal, maka A^T × A = ...",
    options: [
        "I (matriks identitas)",
        "A",
        "A²",
        "0 (matriks nol)"
    ],
    answer: 0,
    explanation: "Definisi matriks ortogonal: A^T × A = A × A^T = I."
},
{
    id: 120,
    category: "matematika",
    question: "Divergensi dari vektor field F = (x², y², z²) di titik (1, 1, 1) adalah...",
    options: [
        "6",
        "3",
        "2",
        "1"
    ],
    answer: 0,
    explanation: "div(F) = ∂Fx/∂x + ∂Fy/∂y + ∂Fz/∂z = 2x + 2y + 2z. Di (1,1,1): 2+2+2 = 6."
},

// Fisika tambahan
{
    id: 121,
    category: "fisika",
    question: "Prinsip ketidakpastian Heisenberg menyatakan bahwa...",
    options: [
        "Posisi dan momentum suatu partikel tidak bisa diketahui secara bersamaan dengan presisi sempurna",
        "Energi selalu kekal dalam sistem tertutup",
        "Kecepatan cahaya adalah konstan di semua kerangka acuan",
        "Setiap aksi ada reaksi yang sama besar dan berlawanan arah"
    ],
    answer: 0,
    explanation: "ΔxΔp ≥ ℏ/2. Semakin tepat kita ketahui posisi, semakin tidak pasti momentumnya, dan sebaliknya."
},
{
    id: 122,
    category: "fisika",
    question: "Berdasarkan hukum termodinamika kedua, entropi alam semesta...",
    options: [
        "Selalu meningkat atau tetap",
        "Selalu menurun",
        "Tetap konstan",
        "Tidak dapat diprediksi"
    ],
    answer: 0,
    explanation: "Hukum ke-2 termodinamika: entropi total sistem terisolasi selalu meningkat atau tetap (untuk proses reversibel)."
},
{
    id: 123,
    category: "fisika",
    question: "Efek fotolistrik menunjukkan bahwa cahaya memiliki sifat...",
    options: [
        "Partikel (foton)",
        "Gelombang murni",
        "Tidak memiliki energi",
        "Merambat hanya dalam medium"
    ],
    answer: 0,
    explanation: "Einstein menjelaskan efek fotolistrik dengan konsep foton (partikel cahaya), E = hf."
},
{
    id: 124,
    category: "fisika",
    question: "Dioda semikonduktor terbuat dari junction antara...",
    options: [
        "Material tipe-p dan tipe-n",
        "Dua konduktor",
        "Dua isolator",
        "Konduktor dan isolator"
    ],
    answer: 0,
    explanation: "Dioda semikonduktor dibentuk dari junction p-n (p-type dan n-type semiconductor)."
},

// English tambahan
{
    id: 125,
    category: "english",
    question: "'The committee ___ decided to postpone the meeting.' Choose the correct word.",
    options: [
        "has",
        "have",
        "are",
        "were"
    ],
    answer: 0,
    explanation: "'Committee' as a single unit takes a singular verb: 'has decided'."
},
{
    id: 126,
    category: "english",
    question: "Which sentence correctly uses a semicolon?",
    options: [
        "The experiment failed; however, the data collected was still valuable.",
        "The experiment failed; and the data collected was valuable.",
        "The experiment; failed however the data was valuable.",
        "The experiment failed, however; the data collected was valuable."
    ],
    answer: 0,
    explanation: "Semicolons can join two independent clauses, especially with conjunctive adverbs like 'however'."
},
{
    id: 127,
    category: "english",
    question: "What is the meaning of the idiom 'back to square one'?",
    options: [
        "To start over from the beginning",
        "To go back home",
        "To do math calculations",
        "To win a game"
    ],
    answer: 0,
    explanation: "'Back to square one' means returning to the starting point after a failure."
},

// Logika tambahan
{
    id: 128,
    category: "logika",
    question: "Konversi bilangan biner 11001₂ ke desimal adalah...",
    options: [
        "25",
        "17",
        "21",
        "29"
    ],
    answer: 0,
    explanation: "11001₂ = 1×16 + 1×8 + 0×4 + 0×2 + 1×1 = 16+8+1 = 25."
},
{
    id: 129,
    category: "logika",
    question: "Berapa jumlah subset dari himpunan {a, b, c, d}?",
    options: [
        "16",
        "8",
        "12",
        "24"
    ],
    answer: 0,
    explanation: "Jumlah subset dari himpunan dengan n elemen = 2ⁿ. 2⁴ = 16."
},
{
    id: 130,
    category: "logika",
    question: "Diberikan graf dengan 5 simpul. Jumlah maksimum sisi dalam graf sederhana tak berarah adalah...",
    options: [
        "10",
        "5",
        "20",
        "25"
    ],
    answer: 0,
    explanation: "Jumlah maksimum sisi = n(n-1)/2 = 5×4/2 = 10."
},

// Programming tambahan
{
    id: 131,
    category: "programming",
    question: "Apa output dari kode berikut?\n<pre>for i in range(3):\n    print(i, end=' ')</pre>",
    options: [
        "0 1 2",
        "1 2 3",
        "0 1 2 3",
        "1 2"
    ],
    answer: 0,
    explanation: "range(3) menghasilkan 0, 1, 2. end=' ' membuat output di satu baris."
},
{
    id: 132,
    category: "programming",
    question: "Dalam Linux, perintah untuk menampilkan isi file adalah...",
    options: [
        "cat",
        "dir",
        "show",
        "display"
    ],
    answer: 0,
    explanation: "'cat' (concatenate) digunakan untuk menampilkan isi file di terminal Linux."
},
{
    id: 133,
    category: "programming",
    question: "Apa itu REST API?",
    options: [
        "Arsitektur untuk membangun web services menggunakan HTTP methods",
        "Bahasa pemrograman",
        "Jenis database",
        "Protocol transfer file"
    ],
    answer: 0,
    explanation: "REST (Representational State Transfer) adalah arsitektur web services yang menggunakan HTTP methods (GET, POST, PUT, DELETE)."
},
{
    id: 134,
    category: "programming",
    question: "Apa perbedaan antara 'process' dan 'thread'?",
    options: [
        "Thread berbagi memori dalam satu proses, proses memiliki ruang memori terpisah",
        "Process lebih ringan dari thread",
        "Thread tidak bisa berkomunikasi satu sama lain",
        "Keduanya sama"
    ],
    answer: 0,
    explanation: "Thread adalah unit eksekusi ringan yang berbagi memori dalam proses yang sama. Proses memiliki ruang memori terpisah."
},
{
    id: 135,
    category: "programming",
    question: "Apa output dari kode berikut?\n<pre>d = {'a': 1, 'b': 2, 'c': 3}\nprint(list(d.keys()))</pre>",
    options: [
        "['a', 'b', 'c']",
        "[1, 2, 3]",
        "[('a',1), ('b',2), ('c',3)]",
        "{'a', 'b', 'c'}"
    ],
    answer: 0,
    explanation: "d.keys() mengembalikan keys dictionary. list() mengubahnya menjadi list."
},

// Soal lebih lanjut
{
    id: 136,
    category: "matematika",
    question: "Solusi dari persamaan diferensial dy/dx = 2x dengan y(0) = 1 adalah...",
    options: [
        "y = x² + 1",
        "y = 2x + 1",
        "y = x² - 1",
        "y = 2x"
    ],
    answer: 0,
    explanation: "∫dy = ∫2x dx → y = x² + C. y(0) = 1 → C = 1. Jadi y = x² + 1."
},
{
    id: 137,
    category: "matematika",
    question: "Trace dari matriks [[3, 1, 2], [0, 5, 4], [1, 2, 7]] adalah...",
    options: [
        "15",
        "8",
        "12",
        "25"
    ],
    answer: 0,
    explanation: "Trace = jumlah elemen diagonal utama = 3 + 5 + 7 = 15."
},
{
    id: 138,
    category: "fisika",
    question: "Dalam sirkuit RC seri, time constant (τ) dihitung dengan...",
    options: [
        "τ = R × C",
        "τ = R / C",
        "τ = R + C",
        "τ = √(RC)"
    ],
    answer: 0,
    explanation: "Time constant RC circuit: τ = R·C (satuan: detik)."
},
{
    id: 139,
    category: "fisika",
    question: "Kecepatan cahaya di ruang hampa mendekati...",
    options: [
        "3 × 10⁸ m/s",
        "3 × 10⁶ m/s",
        "3 × 10¹⁰ m/s",
        "3 × 10⁴ m/s"
    ],
    answer: 0,
    explanation: "Kecepatan cahaya c ≈ 3 × 10⁸ m/s atau 299.792.458 m/s."
},
{
    id: 140,
    category: "english",
    question: "'By the time the professor arrived, the students ___ waiting for an hour.' Choose the correct tense.",
    options: [
        "had been",
        "have been",
        "were",
        "are"
    ],
    answer: 0,
    explanation: "Past perfect continuous: action in progress before another past event. 'had been waiting'."
},
{
    id: 141,
    category: "logika",
    question: "Dalam teori graf, pohon (tree) dengan n node memiliki berapa sisi?",
    options: [
        "n - 1",
        "n",
        "n + 1",
        "2n"
    ],
    answer: 0,
    explanation: "Sebuah tree dengan n node selalu memiliki tepat n-1 sisi (edge)."
},
{
    id: 142,
    category: "programming",
    question: "Apa yang dimaksud dengan 'garbage collection' dalam pemrograman?",
    options: [
        "Proses otomatis membebaskan memori yang tidak lagi digunakan",
        "Menghapus file sampah dari disk",
        "Proses defragmentasi hard drive",
        "Menghapus variabel secara manual"
    ],
    answer: 0,
    explanation: "Garbage collection adalah mekanisme otomatis untuk mendeteksi dan membebaskan memori yang tidak lagi direferensikan oleh program."
},
{
    id: 143,
    category: "programming",
    question: "Dalam notasi Big-O, mana yang paling lambat untuk input besar?",
    options: [
        "O(2ⁿ)",
        "O(n²)",
        "O(n log n)",
        "O(n³)"
    ],
    answer: 0,
    explanation: "Urutan dari cepat ke lambat: O(n log n) < O(n²) < O(n³) < O(2ⁿ). Eksponensial paling lambat."
},
{
    id: 144,
    category: "matematika",
    question: "Jika z = 3 + 4i, berapakah |z| (modulus dari z)?",
    options: [
        "5",
        "7",
        "√7",
        "25"
    ],
    answer: 0,
    explanation: "|z| = √(3² + 4²) = √(9 + 16) = √25 = 5."
},
{
    id: 145,
    category: "fisika",
    question: "Dalam optika, hukum Snellius (Snell's law) menyatakan...",
    options: [
        "n₁ sin θ₁ = n₂ sin θ₂",
        "n₁ cos θ₁ = n₂ cos θ₂",
        "n₁ / sin θ₁ = n₂ / sin θ₂",
        "n₁ tan θ₁ = n₂ tan θ₂"
    ],
    answer: 0,
    explanation: "Hukum Snell: n₁ sin θ₁ = n₂ sin θ₂, menghubungkan sudut datang dan bias dengan indeks bias medium."
},
{
    id: 146,
    category: "logika",
    question: "Suatu relasi R pada himpunan A dikatakan relasi ekuivalensi jika R bersifat...",
    options: [
        "Refleksif, simetris, dan transitif",
        "Refleksif dan simetris saja",
        "Simetris dan transitif saja",
        "Antisimetris dan transitif"
    ],
    answer: 0,
    explanation: "Relasi ekuivalensi harus memenuhi tiga sifat: refleksif, simetris, dan transitif."
},
{
    id: 147,
    category: "programming",
    question: "Apa itu 'virtual memory' dalam sistem operasi?",
    options: [
        "Teknik yang memungkinkan eksekusi proses yang lebih besar dari memori fisik yang tersedia",
        "RAM tambahan yang dipasang secara virtual",
        "Memori cloud yang diakses dari internet",
        "Cache processor"
    ],
    answer: 0,
    explanation: "Virtual memory menggunakan disk sebagai perpanjangan RAM, memungkinkan proses yang lebih besar dari memori fisik."
},
{
    id: 148,
    category: "matematika",
    question: "Dalam transformasi Fourier, sinyal dalam domain waktu diubah ke domain...",
    options: [
        "Frekuensi",
        "Amplitudo",
        "Fase",
        "Waktu"
    ],
    answer: 0,
    explanation: "Transformasi Fourier mengonversi sinyal dari domain waktu ke domain frekuensi."
},
{
    id: 149,
    category: "fisika",
    question: "Dalam rangkaian listrik, hukum Kirchhoff I (KCL) menyatakan bahwa...",
    options: [
        "Jumlah arus yang masuk ke simpul sama dengan jumlah arus yang keluar",
        "Jumlah tegangan dalam loop tertutup sama dengan nol",
        "Arus selalu mengalir dari potensial tinggi ke rendah",
        "Daya yang masuk sama dengan daya yang keluar"
    ],
    answer: 0,
    explanation: "KCL (Kirchhoff's Current Law): ΣI_masuk = ΣI_keluar di setiap node/simpul."
},
{
    id: 150,
    category: "programming",
    question: "Apa itu 'middleware' dalam pengembangan web?",
    options: [
        "Software yang menjembatani request dan response dalam pipeline aplikasi",
        "Hardware jaringan",
        "Database management system",
        "Jenis browser"
    ],
    answer: 0,
    explanation: "Middleware adalah layer software yang berada antara client request dan server response, memproses logic seperti authentication, logging, dll."
},
{
    id: 151,
    category: "programming",
    question: "Apa output dari kode berikut?\n<pre>x = lambda a, b: a * b\nprint(x(3, 4))</pre>",
    options: [
        "12",
        "7",
        "34",
        "Error"
    ],
    answer: 0,
    explanation: "Lambda function: x = lambda a, b: a * b → x(3, 4) = 3 × 4 = 12."
},
{
    id: 152,
    category: "matematika",
    question: "Jika matriks A = [[a, b], [c, d]], maka A⁻¹ = ...",
    options: [
        "(1/det(A)) × [[d, -b], [-c, a]]",
        "(1/det(A)) × [[a, -b], [-c, d]]",
        "[[d, b], [c, a]] / det(A)",
        "[[a, c], [b, d]] / det(A)"
    ],
    answer: 0,
    explanation: "Untuk matriks 2×2: A⁻¹ = (1/(ad-bc)) × [[d, -b], [-c, a]]."
},
{
    id: 153,
    category: "fisika",
    question: "Satuan SI untuk tekanan adalah...",
    options: [
        "Pascal (Pa)",
        "Newton (N)",
        "Joule (J)",
        "Watt (W)"
    ],
    answer: 0,
    explanation: "Tekanan = Gaya/Luas, satuan SI: Pascal (Pa) = N/m²."
},
{
    id: 154,
    category: "logika",
    question: "Dalam representasi bilangan komputer, komplemen dua (two's complement) dari 5 dalam 8-bit adalah...",
    options: [
        "11111011",
        "11111010",
        "10000101",
        "10000100"
    ],
    answer: 0,
    explanation: "5 = 00000101. Komplemen 1: 11111010. Tambah 1: 11111011 = -5 dalam two's complement."
},
{
    id: 155,
    category: "programming",
    question: "HTTP status code 404 berarti...",
    options: [
        "Not Found - Resource yang diminta tidak ditemukan",
        "Internal Server Error",
        "Unauthorized - Akses ditolak",
        "OK - Permintaan berhasil"
    ],
    answer: 0,
    explanation: "404 = Not Found. 200 = OK. 401 = Unauthorized. 500 = Internal Server Error."
},
{
    id: 156,
    category: "matematika",
    question: "Hitung ∫ 1/(x² + 1) dx.",
    options: [
        "arctan(x) + C",
        "ln(x² + 1) + C",
        "1/x + C",
        "arcsin(x) + C"
    ],
    answer: 0,
    explanation: "∫ 1/(x² + 1) dx = arctan(x) + C. Ini adalah integral standar yang perlu dihafal."
},
{
    id: 157,
    category: "fisika",
    question: "Dalam fisika kuantum, fungsi gelombang (ψ) memberikan informasi tentang...",
    options: [
        "Probabilitas menemukan partikel di suatu posisi",
        "Kecepatan partikel secara pasti",
        "Massa partikel",
        "Warna partikel"
    ],
    answer: 0,
    explanation: "|ψ|² memberikan probabilitas densitas menemukan partikel di posisi tertentu (interpretasi Born)."
},
{
    id: 158,
    category: "english",
    question: "'The more you practice, the ___ you become.' Choose the correct form.",
    options: [
        "better",
        "best",
        "good",
        "well"
    ],
    answer: 0,
    explanation: "Comparative structure: 'The more...the better.' Uses comparative form 'better'."
},
{
    id: 159,
    category: "logika",
    question: "Berapa banyak cara menyusun huruf dari kata 'BUKU' (perhatikan huruf yang berulang)?",
    options: [
        "12",
        "24",
        "4",
        "6"
    ],
    answer: 0,
    explanation: "BUKU memiliki 4 huruf dengan U berulang 2 kali. Permutasi = 4!/2! = 24/2 = 12."
},
{
    id: 160,
    category: "programming",
    question: "Apa itu 'containerization' (misalnya Docker)?",
    options: [
        "Teknologi untuk mengemas aplikasi beserta dependensinya agar portabel di berbagai environment",
        "Cara menyimpan data dalam container plastik",
        "Jenis virtual machine",
        "Framework JavaScript"
    ],
    answer: 0,
    explanation: "Containerization mengemas aplikasi dan dependensinya ke dalam container yang ringan dan portabel, memastikan konsistensi di berbagai environment."
},
{
    id: 161,
    category: "programming",
    question: "Dalam database, apa itu 'normalization'?",
    options: [
        "Proses mengorganisasi data untuk mengurangi redundansi",
        "Proses membuat backup database",
        "Proses mengenkripsi data",
        "Proses menghapus data duplikat"
    ],
    answer: 0,
    explanation: "Normalisasi database adalah proses mengorganisasi tabel dan kolom untuk mengurangi redundansi data dan dependensi yang tidak diinginkan."
},
{
    id: 162,
    category: "matematika",
    question: "Sebuah matriks diagonalizable jika dan hanya jika...",
    options: [
        "Memiliki cukup banyak eigenvector yang independent secara linear",
        "Determinannya bukan nol",
        "Semua elemennya positif",
        "Berukuran n × n"
    ],
    answer: 0,
    explanation: "Matriks n×n diagonalizable jika memiliki n eigenvector yang linearly independent."
},
{
    id: 163,
    category: "fisika",
    question: "Hukum Stefan-Boltzmann menyatakan bahwa daya radiasi total benda hitam sebanding dengan...",
    options: [
        "Pangkat empat suhu mutlak (T⁴)",
        "Suhu (T)",
        "Kuadrat suhu (T²)",
        "Akar kuadrat suhu (√T)"
    ],
    answer: 0,
    explanation: "Hukum Stefan-Boltzmann: P = σAT⁴. Daya radiasi berbanding dengan T⁴."
},
{
    id: 164,
    category: "programming",
    question: "Apa itu 'design pattern' Singleton?",
    options: [
        "Memastikan sebuah class hanya memiliki satu instance",
        "Membuat banyak instance dari satu class",
        "Menghubungkan dua class yang berbeda",
        "Pola untuk iterasi data"
    ],
    answer: 0,
    explanation: "Singleton pattern memastikan bahwa sebuah class hanya memiliki satu instance dan menyediakan global access point ke instance tersebut."
},
{
    id: 165,
    category: "logika",
    question: "Fungsi f: A → B dikatakan bijektif jika...",
    options: [
        "f bersifat injektif (satu-satu) dan surjektif (onto)",
        "f hanya injektif",
        "f hanya surjektif",
        "f memiliki lebih dari satu output untuk satu input"
    ],
    answer: 0,
    explanation: "Bijeksi = injeksi (one-to-one) + surjeksi (onto). Setiap elemen B memiliki tepat satu preimage di A."
}
];
