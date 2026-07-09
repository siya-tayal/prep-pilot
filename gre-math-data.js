// Full GRE Math (Quant) curriculum data.
// Each chapter -> lessons -> ordered content "blocks".
// Block types: "concepts" | "html" | "table" | "practice" | "reveal"
//   concepts: {type:"concepts", items:[{name, definition, identify, set, examples:[]}]}
//   html:     {type:"html", content:"<p>...</p>"}  (may contain $inline$ / $$display$$ math)
//   table:    {type:"table", headers:[...], rows:[[...]]}
//   practice: {type:"practice", questions:[ QUESTION, ... ]}
//   reveal:   {type:"reveal", label:"Show answer", prompt:"...", answer:"..."} (simple Q + reveal, no options)
//
// QUESTION shape:
//   { kind:"QC"|"MC"|"MS", title, context, quantityA, quantityB, options:[{key,text}], correct: "C" | ["C","D"], steps:[...] }
//   For kind "QC" the 4 standard options are injected automatically by the renderer.

const GRE_MATH_CHAPTERS = [

// ================= CHAPTER 1 =================
{
  id: "ch1", number: 1, title: "Numbers",
  blurb: "The full number system, divisibility, factorization, and remainders.",
  lessons: [
    {
      id: "ch1-l1", title: "Types of Numbers", video: { id: "0M8isaEu1EU", title: "Number Systems (Natural, Integer, Rational, Irrational, & Real Numbers)", channel: "MrBrownCS" },
      widget: "numberSystemFlowchart",
      blocks: [
        { type: "html", content: "<p>Click any box in the diagram above to flip it and reveal its definition. Every number on the GRE belongs somewhere on this tree, and knowing the tree cold means you'll never be tricked by a \"which of the following is irrational\" question again.</p>" },
        { type: "concepts", items: [
          { name: "Number System", definition: "The collection of all types of numbers used in mathematics.", identify: "If it represents a quantity or value, it belongs to the number system.", set: "All numbers: Natural, Whole, Integers, Rational, Irrational, Real, Complex.", examples: ["5", "-8", "3.14", "√2", "4 + 3i"] },
          { name: "Complex Numbers", definition: "Numbers that have a real part and/or an imaginary part.", identify: "Contains $i$, or can be written as $a + bi$.", set: "$\\mathbb{C} = \\{a + bi \\mid a, b \\in \\mathbb{R}\\}$", examples: ["2 + 3i", "-5i", "7", "-8 + i"] },
          { name: "Imaginary Numbers", definition: "Numbers whose real part is zero and which contain $i$.", identify: "Contains only $i$ and no real part.", set: "$\\{bi \\mid b \\in \\mathbb{R},\\ b \\neq 0\\}$", examples: ["i", "3i", "-7i", "(1/2)i"] },
          { name: "Real Numbers", definition: "Numbers that can be placed on the number line.", identify: "If it does not contain $i$, it's a real number.", set: "$\\mathbb{R}$ = Rational $\\cup$ Irrational", examples: ["-10", "0", "7", "2.5", "π", "√2"] },
          { name: "Rational Numbers", definition: "Numbers that can be written as a fraction of two integers.", identify: "Fraction, integer, terminating decimal, or repeating decimal.", set: "$\\mathbb{Q} = \\{p/q \\mid p, q \\in \\mathbb{Z},\\ q \\neq 0\\}$", examples: ["5", "-2", "3/4", "0.25", "0.333..."] },
          { name: "Irrational Numbers", definition: "Numbers that cannot be written as a fraction of two integers.", identify: "Decimal never ends and never repeats.", set: "$\\mathbb{R} - \\mathbb{Q}$", examples: ["π", "e", "√2", "√3", "√5"] },
          { name: "Fractional Numbers", definition: "Rational numbers that are not integers.", identify: "Written as a fraction or decimal with a nonzero fractional part.", set: "$\\{p/q \\mid p,q \\in \\mathbb{Z},\\ q \\neq 0,\\ p/q \\notin \\mathbb{Z}\\}$", examples: ["2/3", "-5/8", "7/4", "1.5"] },
          { name: "Integers", definition: "Whole numbers and their negatives, including zero.", identify: "No decimal or fraction.", set: "$\\mathbb{Z} = \\{..., -3, -2, -1, 0, 1, 2, 3, ...\\}$", examples: ["-10", "-1", "0", "4", "25"] },
          { name: "Negative Numbers", definition: "Numbers less than zero.", identify: "Has a negative sign and is less than zero.", set: "$\\{x \\in \\mathbb{R} \\mid x < 0\\}$", examples: ["-5", "-12", "-1/3", "-√2"] },
          { name: "Zero", definition: "The number representing no quantity.", identify: "Exactly equal to 0.", set: "$\\{0\\}$", examples: ["0"] },
          { name: "Positive Numbers", definition: "Numbers greater than zero.", identify: "Greater than zero.", set: "$\\{x \\in \\mathbb{R} \\mid x > 0\\}$", examples: ["1", "25", "3.5", "π"] },
          { name: "Whole Numbers", definition: "Natural numbers together with zero.", identify: "Non-negative integers.", set: "$W = \\{0, 1, 2, 3, ...\\}$", examples: ["0", "1", "8", "100"] },
          { name: "Natural Numbers", definition: "Counting numbers.", identify: "Positive integers starting from 1.", set: "$\\mathbb{N} = \\{1, 2, 3, 4, ...\\}$", examples: ["1", "2", "5", "20"] },
          { name: "Even Numbers", definition: "Integers divisible by 2.", identify: "Divides evenly by 2; last digit is 0, 2, 4, 6, or 8.", set: "$\\{2k \\mid k \\in \\mathbb{Z}\\}$", examples: ["-8", "-2", "0", "4", "16"] },
          { name: "Odd Numbers", definition: "Integers not divisible by 2.", identify: "Last digit is 1, 3, 5, 7, or 9.", set: "$\\{2k+1 \\mid k \\in \\mathbb{Z}\\}$", examples: ["-7", "-1", "1", "9", "25"] },
          { name: "Prime Numbers", definition: "A positive integer greater than 1 with exactly two positive factors: 1 and itself.", identify: "Greater than 1; only divisible by 1 and itself.", set: "$\\{2, 3, 5, 7, 11, 13, 17, ...\\}$", examples: ["2", "3", "5", "7", "11", "29"] },
          { name: "Composite Numbers", definition: "A positive integer greater than 1 with more than two positive factors.", identify: "Can be divided evenly by numbers other than 1 and itself.", set: "$\\{4, 6, 8, 9, 10, 12, ...\\}$", examples: ["4", "6", "8", "9", "12", "15"] }
        ]}
      ]
    },
    {
      id: "ch1-l2", title: "Divisibility Rules", video: { id: "uO9DjoNzihI", title: "Divisibility Rules With Examples | Math is Fun", channel: "Mathematics is Fun" },
      blocks: [
        { type: "html", content: "<p>Memorize these: they turn 30-second long division into 3-second pattern checks. Click any row to flip it and see a worked example.</p>" },
        { type: "flip-table", rows: [
          { key: "2", rule: "Last digit is even (0, 2, 4, 6, 8).", example: "128: last digit 8 is even, so 128 is divisible by 2 (128 ÷ 2 = 64)." },
          { key: "3", rule: "Sum of all digits is divisible by 3.", example: "156: digit sum 1+5+6 = 12, divisible by 3, so 156 ÷ 3 = 52." },
          { key: "4", rule: "Last two digits form a number divisible by 4.", example: "316: last two digits \"16\", and 16 ÷ 4 = 4, so 316 is divisible by 4." },
          { key: "5", rule: "Last digit is 0 or 5.", example: "245: last digit is 5, so 245 ÷ 5 = 49." },
          { key: "6", rule: "Divisible by both 2 and 3.", example: "138: even, and digit sum 1+3+8 = 12 is divisible by 3, so 138 ÷ 6 = 23." },
          { key: "7", rule: "Double the last digit, subtract it from the rest; repeat until you can tell if the result is divisible by 7.", example: "203: double the last digit: 3×2=6. Subtract from the rest: 20−6=14, which is divisible by 7, so 203 ÷ 7 = 29." },
          { key: "8", rule: "Last three digits form a number divisible by 8.", example: "1,928: last three digits \"928\", and 928 ÷ 8 = 116, so 1,928 is divisible by 8." },
          { key: "9", rule: "Sum of all digits is divisible by 9.", example: "549: digit sum 5+4+9 = 18, divisible by 9, so 549 ÷ 9 = 61." },
          { key: "10", rule: "Last digit is 0.", example: "370: last digit is 0, so 370 ÷ 10 = 37." },
          { key: "11", rule: "Alternating sum of digits (from the right) is divisible by 11.", example: "2,728: alternating sum from the right: 8−2+7−2 = 11, divisible by 11, so 2,728 ÷ 11 = 248." },
          { key: "12", rule: "Divisible by both 3 and 4.", example: "156: digit sum 1+5+6=12 (div. by 3) and last two digits 56÷4=14 (div. by 4), so 156 ÷ 12 = 13." }
        ]},
        { type: "reveal", label: "Try it: Is 81,925,361,407 divisible by 11?", prompt: "Use the alternating-digit-sum rule for 11.", answer: "No. From the right, the alternating sum of digits is $(7+4+6+5+9+8) - (0+1+3+2+1) = 39 - 7 = 32$. Since $32$ is not a multiple of $11$, the number is **not** divisible by 11." },
        { type: "reveal", label: "Try it: Is 10,000,000,032 divisible by 44?", prompt: "44 = 4 × 11, so check both.", answer: "Yes. Divisible by 4: the last two digits, \"32\", are divisible by 4. Divisible by 11: the alternating digit sum from the right is $(2+0+0+0+0+1) - (3+0+0+0+0) = 3 - 3 = 0$, which is a multiple of 11. Since it's divisible by both 4 and 11, it's divisible by 44." }
      ]
    },
    {
      id: "ch1-l3", title: "Factorization", video: { id: "zvaxUJOv6jM", title: "GCF and LCM Explained | Greatest Common Factor & Least Common Multiple", channel: "Math with Mr. J" },
      blocks: [
        { type: "html", content: "<h4>The Fundamental Theorem of Arithmetic</h4><p>Every integer $n > 1$ can be uniquely expressed as a product of prime powers:</p>$$n = p_1^{a} \\cdot p_2^{b} \\cdot p_3^{c} \\cdots$$<p>where $p_1, p_2, p_3, ...$ are distinct primes and $a, b, c, ...$ are positive integers.</p>" },
        { type: "html", content: "<h4>The Factor Count Formula</h4><p>If $n = p_1^{a} \\cdot p_2^{b} \\cdot p_3^{c}$, the total number of distinct positive factors of $n$ is:</p>$$\\text{Total Factors} = (a+1)(b+1)(c+1)\\cdots$$<ul><li><strong>Perfect square property:</strong> if a number has an <em>odd</em> number of total factors, it must be a perfect square. An even number of factors means it's not a perfect square.</li><li><strong>Prime power shortcut:</strong> if an integer has exactly $k$ factors and $k$ is prime, the integer must be of the form $p^{k-1}$ for some prime $p$.</li></ul>" },
        { type: "html", content: "<h4>Product of All Factors</h4><p>The product of all distinct positive factors of $n$ is:</p>$$\\text{Product of Factors} = n^{\\frac{\\text{Total Factors}}{2}}$$" },
        { type: "html", content: "<h4>GCF and LCM via Prime Powers</h4><p>For $X = p^a \\cdot q^b$ and $Y = p^c \\cdot q^d$:</p><ul><li><strong>GCF:</strong> $p^{\\min(a,c)} \\cdot q^{\\min(b,d)}$</li><li><strong>LCM:</strong> $p^{\\max(a,c)} \\cdot q^{\\max(b,d)}$</li><li><strong>Core identity:</strong> $\\text{GCF}(X,Y) \\times \\text{LCM}(X,Y) = X \\times Y$</li></ul>" },
        { type: "html", content: "<h4>Perfect Squares and Cubes</h4><p>For $n$ to be a perfect square, <strong>all</strong> exponents in its prime factorization must be even. For a perfect cube, all exponents must be multiples of 3.</p>" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question 1 · Quantitative Comparison",
            context: "$N$ is the smallest positive integer that has exactly 7 distinct positive factors.",
            quantityA: "The number of factors of $\\sqrt{N}$",
            quantityB: "The number of factors of $(N-2)$",
            correct: "C",
            steps: [
              "$N$ has 7 factors (odd), so $N$ must be a perfect square. Using the factor-count formula, $(a+1) = 7 \\Rightarrow a = 6$, so $N = p^6$. The smallest such $N$ uses the smallest prime: $N = 2^6 = 64$.",
              "Quantity A: $\\sqrt{N} = \\sqrt{64} = 8 = 2^3$, which has $(3+1) = 4$ factors.",
              "Quantity B: $N - 2 = 62 = 2^1 \\times 31^1$, which has $(1+1)(1+1) = 4$ factors.",
              "Both quantities equal 4."
            ]
          },
          {
            kind: "MC", title: "Question 2 · Multiple Choice",
            context: "If $x$ is a positive integer and $x^2$ is a multiple of 32, which of the following must be a factor of $x$?",
            options: [ {key:"A", text:"32"}, {key:"B", text:"16"}, {key:"C", text:"8"}, {key:"D", text:"4"}, {key:"E", text:"Both C and D"} ],
            correct: "E",
            steps: [
              "$32 = 2^5$. Since $x^2$ is a perfect square, every exponent in its prime factorization must be even, so $x^2$ must actually contain at least six factors of 2 (the next even number after 5), meaning $x^2 \\geq 2^6 \\cdot m$.",
              "That gives $x \\geq 2^3 \\cdot \\sqrt{m} = 8 \\cdot (\\text{integer})$, so $x$ must be a multiple of 8.",
              "Any multiple of 8 is automatically a multiple of 4 as well, so both 8 and 4 are guaranteed factors of $x$."
            ]
          },
          {
            kind: "MS", title: "Question 3 · Multiple Selection",
            context: "If $p$ and $q$ are distinct positive integers both divisible by 3, which of the following expressions must be divisible by 9? Indicate all such expressions.",
            options: [ {key:"A", text:"p + q"}, {key:"B", text:"p − q"}, {key:"C", text:"p × q"}, {key:"D", text:"p² + q²"}, {key:"E", text:"3p + 6q"} ],
            correct: ["C","D","E"],
            steps: [
              "Let $p = 3a$ and $q = 3b$ for integers $a, b$.",
              "A: $p+q = 3(a+b)$, divisible by 3 but not guaranteed to be divisible by 9 (e.g. $p=3, q=12 \\Rightarrow 15$).",
              "B: $p - q = 3(a-b)$, same issue, not always divisible by 9.",
              "C: $p \\times q = 9ab$, which explicitly has a factor of 9. Always divisible.",
              "D: $p^2+q^2 = 9a^2+9b^2 = 9(a^2+b^2)$, always divisible by 9.",
              "E: $3p+6q = 9a+18b = 9(a+2b)$, always divisible by 9."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch1-l4", title: "Remainders", video: { id: "88pWjrsuB0s", title: "How to do Remainders: GRE & GMAT", channel: "The Tested Tutor" },
      blocks: [
        { type: "html", content: "<h4>The Remainder Formula</h4><p>For any integer dividend $A$ divided by a positive integer divisor $D$:</p>$$A = D \\cdot Q + R, \\quad 0 \\leq R < D$$" },
        { type: "html", content: "<h4>Arithmetic of Remainders</h4><p>If $A \\div D$ leaves remainder $R_1$ and $B \\div D$ leaves remainder $R_2$:</p><ul><li><strong>Addition:</strong> $(A+B) \\div D$ leaves the same remainder as $(R_1+R_2) \\div D$.</li><li><strong>Multiplication:</strong> $(A \\times B) \\div D$ leaves the same remainder as $(R_1 \\times R_2) \\div D$.</li><li><strong>Powers:</strong> $A^k \\div D$ leaves the same remainder as $(R_1)^k \\div D$.</li></ul><p class='note'>If the resulting $R_1+R_2$ or $R_1 \\times R_2$ is $\\geq D$, divide that new number by $D$ again to get the true final remainder.</p>" },
        { type: "html", content: "<h4>Cyclicity</h4><p>The GRE loves large exponents (e.g. $7^{43} \\div 5$). Find the repeating remainder pattern instead of computing the whole power:</p><p>$7^1 \\div 5 \\Rightarrow R=2$, &nbsp; $7^2 \\div 5 \\Rightarrow R=4$, &nbsp; $7^3 \\div 5 \\Rightarrow R=3$, &nbsp; $7^4 \\div 5 \\Rightarrow R=1$: the pattern repeats every 4 powers: 2, 4, 3, 1.</p>" },
        { type: "html", content: "<h4>Odd and Even Integers (Parity)</h4><ul><li>An even number can be written as $2n$; an odd number as $2n+1$, for integer $n$.</li><li><strong>Trap:</strong> 0 is even. Consecutive integers always alternate parity.</li></ul>" },
        { type: "table", headers: ["Operation", "Rule", "Example"], rows: [
          ["Even ± Even", "Even", "4 + 2 = 6"],
          ["Odd ± Odd", "Even", "5 + 3 = 8"],
          ["Even ± Odd", "Odd", "6 + 3 = 9"],
          ["Even × anything", "Even", "4 × 3 = 12"],
          ["Odd × Odd", "Odd", "5 × 7 = 35"],
          ["Oddᵃⁿʸ ⁱⁿᵗᵉᵍᵉʳ ᵖᵒʷᵉʳ", "Odd", "3³ = 27"],
          ["Evenᵖᵒˢⁱᵗⁱᵛᵉ ⁱⁿᵗᵉᵍᵉʳ ᵖᵒʷᵉʳ", "Even", "2⁴ = 16"]
        ]},
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question 1 · Quantitative Comparison",
            context: "When the positive integer $n$ is divided by 9, the remainder is 7.",
            quantityA: "The remainder when $3n^2 + 2n + 5$ is divided by 9",
            quantityB: "4",
            correct: "C",
            steps: [
              "Since $n$ leaves remainder 7 mod 9, substitute 7 for $n$ in the expression.",
              "$3(7)^2 + 2(7) + 5 = 147 + 14 + 5 = 166$.",
              "$166 = 9 \\times 18 + 4$, so the remainder is 4.",
              "Both quantities equal 4."
            ]
          },
          {
            kind: "MC", title: "Question 2 · Multiple Choice",
            context: "If $x, y, z$ are integers such that $3x - 5y + z^2$ is odd, which of the following statements must be true?",
            options: [ {key:"A", text:"If x and y are both even, z is even."}, {key:"B", text:"If z is odd, then x and y have different parities."}, {key:"C", text:"If x and y are both odd, z is even."}, {key:"D", text:"If z is even, then x and y must have the same parity."}, {key:"E", text:"None of the above."} ],
            correct: "E",
            steps: [
              "$3x$ has the same parity as $x$; $-5y$ has the same parity as $y$; $z^2$ has the same parity as $z$. So the requirement becomes $x - y + z = \\text{Odd}$.",
              "Test C: if $x,y$ both odd, $x-y$ = Even, so $z$ must be Odd, meaning C's claim (\"z is even\") is false.",
              "Test D: if $z$ is even, $(x-y)$ must be Odd, meaning $x,y$ have different parities, the opposite of D's claim.",
              "Test A: if $x,y$ both even, $x-y$ = Even, so $z$ must be Odd, contradicting A.",
              "Test B: if $z$ is odd, $(x-y)$ must be Even, meaning $x,y$ share the same parity, contradicting B.",
              "Every option fails, so the answer is E."
            ]
          },
          {
            kind: "MS", title: "Question 3 · Multiple Selection",
            context: "If $n$ is a positive integer, which of the following could be the remainder when $n^4$ is divided by 5? Indicate all such expressions.",
            options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"4"} ],
            correct: ["A","B"],
            steps: [
              "Any integer $n$ divided by 5 leaves remainder 0, 1, 2, 3, or 4. Raise each to the 4th power and reduce mod 5:",
              "$0^4=0 \\to 0$;  $1^4=1 \\to 1$;  $2^4=16 \\to 1$;  $3^4=81 \\to 1$;  $4^4=256 \\to 1$.",
              "The only possible remainders for a fourth power mod 5 are 0 and 1."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 2 =================
{
  id: "ch2", number: 2, title: "Exponents and Roots",
  blurb: "Base traps, principal roots, estimation, and number-line reasoning.",
  lessons: [
    {
      id: "ch2-l1", title: "Exponents and Roots: Advanced Concepts", video: { id: "1QH_-bwvBSs", title: "GRE Tips and Tricks | Exponents and Roots", channel: "PrepScholar GRE" },
      blocks: [
        { type: "html", content: "<h4>The Negative & Fractional Base Traps</h4><ul><li>$(-x)^n$ vs. $-x^n$: $(-3)^2 = 9$, but $-3^2 = -9$. The negative is only included if it's explicitly inside parentheses.</li><li><strong>Parity of exponents:</strong> if $x^n = y^n$ and $n$ is even, then $x=y$ or $x=-y$. If $n$ is odd, then $x=y$.</li><li><strong>Bases between 0 and 1:</strong> raising $x$ to a higher power <em>decreases</em> its value when $0<x<1$ (e.g. $0.5^2 = 0.25 < 0.5$).</li></ul>" },
        { type: "html", content: "<h4>Factoring Out Large Exponents</h4><p>You cannot combine powers when adding/subtracting terms with large exponents; factor out the lowest power instead.</p><p><em>Simplify:</em> $3^{15} + 3^{16} + 3^{17}$</p>$$3^{15}(1 + 3 + 3^2) = 3^{15}(13)$$" },
        { type: "html", content: "<h4>The Principal Root Rule</h4><p>On the GRE, $\\sqrt{x}$ exclusively denotes the positive (principal) square root.</p><ul><li>If $x^2 = 16$, then $x = \\pm 4$.</li><li>If $x = \\sqrt{16}$, then $x = 4$ only.</li><li>Consequently, $\\sqrt{x^2} = |x|$: it does <strong>not</strong> simplify to $x$ unless $x \\geq 0$ is guaranteed.</li></ul>" },
        { type: "html", content: "<h4>Rules of Simplification</h4><ul><li><strong>Mult/Div:</strong> $\\sqrt{a}\\times\\sqrt{b}=\\sqrt{ab}$ and $\\frac{\\sqrt{a}}{\\sqrt{b}}=\\sqrt{\\frac{a}{b}}$ (for non-negative reals).</li><li><strong>Add/Subtract:</strong> $\\sqrt{a}+\\sqrt{b} \\neq \\sqrt{a+b}$. You can only combine roots with identical radicands: $3\\sqrt{2}+5\\sqrt{2}=8\\sqrt{2}$.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question 1 · Quantitative Comparison",
            quantityA: "$2^{33} - 2^{32} - 2^{31}$",
            quantityB: "$2^{31}$",
            correct: "C",
            steps: [
              "Factor Quantity A by the smallest power, $2^{31}$: $2^{31}(2^2 - 2^1 - 1)$.",
              "Simplify inside the parentheses: $4 - 2 - 1 = 1$.",
              "So Quantity A $= 2^{31}(1) = 2^{31}$, which exactly matches Quantity B."
            ]
          },
          {
            kind: "MC", title: "Question 2 · Multiple Choice",
            context: "If $x < 0$, which expression is equivalent to $\\sqrt{x^2} - \\sqrt[3]{x^3}$?",
            options: [ {key:"A", text:"0"}, {key:"B", text:"2x"}, {key:"C", text:"−2x"}, {key:"D", text:"x² − x"}, {key:"E", text:"√(x(x−1))"} ],
            correct: "C",
            steps: [
              "$\\sqrt{x^2} = |x|$. Since $x<0$, $|x| = -x$.",
              "$\\sqrt[3]{x^3} = x$ for any real $x$ (odd roots preserve sign).",
              "$(-x) - (x) = -2x$."
            ]
          },
          {
            kind: "MS", title: "Question 3 · Multiple Selection",
            context: "If $x$ is an integer and $x^{-3} > x^{-2}$, which of the following could be the value of $x$? Indicate all such values.",
            options: [ {key:"A", text:"−2"}, {key:"B", text:"−1"}, {key:"C", text:"0"}, {key:"D", text:"1"}, {key:"E", text:"2"} ],
            correct: [],
            steps: [
              "Rewrite as $\\frac{1}{x^3} > \\frac{1}{x^2}$.",
              "Testing each integer choice (−2, −1, 0, 1, 2) shows none satisfy the inequality: $x=0$ is undefined, and every other integer fails.",
              "The inequality only holds for a positive fraction less than 1 (e.g. $x=\\tfrac12$), which no integer choice can satisfy, so none of the listed options work."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch2-l2", title: "Estimation and Number Lines", video: { id: "ybyLNaQQeyk", title: "Use this Easy Trick to Find Any Square Root - The Number Line", channel: "MathBase" },
      blocks: [
        { type: "html", content: "<h4>Estimation in QC Questions</h4><p>Exact calculation is often a trap designed to waste time. Use strategic estimation:</p><ul><li><strong>Bounding:</strong> to estimate $\\sqrt{53}$, bound it: $\\sqrt{49} < \\sqrt{53} < \\sqrt{64}$, so $7 < \\sqrt{53} < 8$.</li><li><strong>Fractional approximation:</strong> $0.331 \\approx \\tfrac13$, $0.141 \\approx \\tfrac17$.</li></ul>" },
        { type: "html", content: "<h4>Number Line Intervals and Inequalities</h4><ul><li><strong>Midpoint:</strong> $\\text{Midpoint} = \\frac{a+b}{2}$</li><li><strong>Distance:</strong> $|a-b|$</li><li><strong>Product sign:</strong> if $x,y$ are on opposite sides of 0, $xy<0$; same side, $xy>0$.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question · Quantitative Comparison",
            context: "Points $x, y, z$ sit consecutively left-to-right on a number line, and the distance between $x$ and $y$ is half the distance between $y$ and $z$.",
            quantityA: "$\\frac{x+2z}{3}$",
            quantityB: "$y$",
            correct: "A",
            steps: [
              "Let the distance between $x$ and $y$ be $d$, so $y = x+d$.",
              "The distance between $y$ and $z$ is $2d$, so $z = y+2d = x+3d$.",
              "Substitute into Quantity A: $\\frac{x+2(x+3d)}{3} = \\frac{3x+6d}{3} = x+2d$.",
              "Compare to Quantity B ($y = x+d$): since $d>0$, $x+2d > x+d$."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 3 =================
{
  id: "ch3", number: 3, title: "Percent and Percent Change",
  blurb: "Sequential percent changes and the baseline-anchor trap.",
  lessons: [
    {
      id: "ch3-l1", title: "Percent Change", video: { id: "FCObY53fM-g", title: "Successive Percentage Change (GMAT/GRE/CAT/Bank PO/SSC CGL)", channel: "Sri Chaitanya Academy NEET" },
      blocks: [
        { type: "html", content: "<h4>Sequential Percent Changes</h4><p>If a quantity increases by $x\\%$ then decreases by $y\\%$, the final value is <strong>not</strong> a net change of $(x-y)\\%$. Multiply the multipliers instead:</p>$$\\text{Final} = \\text{Initial} \\times \\left(1+\\frac{x}{100}\\right)\\times\\left(1-\\frac{y}{100}\\right)$$" },
        { type: "html", content: "<h4>Percent Change Formula</h4>$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%$$<p class='note'><strong>Trap:</strong> \"percent more than $B$\" means $B$ is the denominator; \"percent less than $A$\" means $A$ is the denominator.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "The price of a stock increased 25% in October, then decreased 20% in November. If the price at the end of November was \\$80, what was its price at the beginning of October?",
            options: [ {key:"A", text:"\\$64"}, {key:"B", text:"\\$72"}, {key:"C", text:"\\$80"}, {key:"D", text:"\\$85"}, {key:"E", text:"\\$100"} ],
            correct: "C",
            steps: [
              "Let the initial price be $P$. Apply the sequential multipliers: $P \\times 1.25 \\times 0.80 = 80$.",
              "$1.25 \\times 0.80 = \\frac{5}{4}\\times\\frac{4}{5} = 1$.",
              "So $P = 80$: a 25% increase followed by a 20% decrease nets to exactly 0% change."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 4 =================
{
  id: "ch4", number: 4, title: "Ratio and Rate",
  blurb: "Merging ratios and combined work rates.",
  lessons: [
    {
      id: "ch4-l1", title: "Ratios and Rates", video: { id: "Y4fgwWEGQlg", title: "SAT Math Part 29 - Ratios and Proportions Word Problems", channel: "The Organic Chemistry Tutor" },
      blocks: [
        { type: "html", content: "<h4>Combining Ratios (The Bridge Principle)</h4><p>If two ratios share a common element, rescale so that element matches before merging.</p><p>If $A:B = 2:3$ and $B:C=4:5$, the shared element is $B$. LCM of 3 and 4 is 12, so rescale: $A:B=8:12$ and $B:C=12:15$. Merged: $A:B:C = 8:12:15$.</p>" },
        { type: "html", content: "<h4>Advanced Work Rates</h4><p>When multiple entities work together, their individual <em>rates</em> add, not their times.</p>$$\\frac{1}{T_{\\text{combined}}} = \\frac{1}{t_1}+\\frac{1}{t_2}+\\frac{1}{t_3}+\\cdots$$" },
        { type: "practice", questions: [
          {
            kind: "MS", title: "Question · Multiple Selection",
            context: "A mixture contains liquids $X, Y, Z$ in ratio $3:5:8$. If 32 liters of the mixture are removed and replaced with 32 liters of pure liquid $Z$, which statements must be true? Indicate all that apply.",
            options: [ {key:"A", text:"The new ratio of X:Y is still 3:5."}, {key:"B", text:"The total volume of the mixture remains unchanged."}, {key:"C", text:"Liquid Z now constitutes more than 50% of the mixture."} ],
            correct: ["A","B","C"],
            steps: [
              "A: removing a portion of a uniform mixture doesn't change the relative ratio of what's left, so $X:Y$ stays $3:5$. True.",
              "B: 32 liters removed, 32 liters added back, so net volume change is 0. True.",
              "C: originally $Z$ was $\\frac{8x}{16x}=50\\%$ of the mixture. Removing a proportional slice loses some $Z$, but replacing all 32L with pure $Z$ pushes its concentration above the original 50%. True."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 5 =================
{
  id: "ch5", number: 5, title: "Absolute Value",
  blurb: "Distance interpretation and the triangle inequality.",
  lessons: [
    {
      id: "ch5-l1", title: "Absolute Value", video: { id: "4YRtjY0bPV0", title: "How to Solve Absolute Value Equations | The Two-Case Method Explained", channel: "CodeLucky" },
      blocks: [
        { type: "html", content: "<h4>Geometric Definition</h4><p>$|x-a|$ represents the <strong>distance</strong> between $x$ and the fixed point $a$ on the number line.</p><p>$|x-5|\\leq 3$ means \"the distance between $x$ and 5 is at most 3,\" so $x \\in [2, 8]$.</p>" },
        { type: "html", content: "<h4>Algebraic Properties</h4><ul><li><strong>Square root identity:</strong> $\\sqrt{x^2}=|x|$</li><li><strong>Triangle inequality:</strong> $|x+y|\\leq|x|+|y|$, with equality iff $x$ and $y$ share the same sign ($xy \\geq 0$).</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question · Quantitative Comparison",
            quantityA: "$|x - y|$",
            quantityB: "$|x| - |y|$",
            correct: "D",
            steps: [
              "Test same-sign values: $x=5, y=2$. Quantity A: $|5-2|=3$. Quantity B: $|5|-|2|=3$. Equal.",
              "Test opposite-sign values: $x=5, y=-2$. Quantity A: $|5-(-2)|=7$. Quantity B: $5-2=3$. Quantity A is greater.",
              "The relationship changes depending on the signs of $x,y$, so it cannot be determined."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 6 =================
{
  id: "ch6", number: 6, title: "Decimal Representation",
  blurb: "Which fractions terminate, and which repeat forever.",
  lessons: [
    {
      id: "ch6-l1", title: "Terminating vs. Repeating Decimals", video: { id: "o4M6HnNatZ0", title: "Check which fractions give terminating decimals | Real numbers", channel: "Khan Academy India - English" },
      blocks: [
        { type: "html", content: "<h4>The Denominator Rule</h4><p>A fully simplified fraction $\\frac{a}{b}$ yields a <strong>terminating decimal</strong> if and only if the prime factorization of $b$ contains no primes other than 2 or 5.</p><ul><li>$\\frac{7}{40}$ terminates: $40 = 2^3 \\times 5$.</li><li>$\\frac{5}{12}$ repeats: $12 = 2^2 \\times 3$ (the 3 causes repetition).</li></ul>" },
        { type: "html", content: "<h4>Place Value Shifts</h4><p>Multiplying by $10^n$ shifts the decimal point $n$ places right; dividing by $10^n$ shifts it $n$ places left.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "Which of the following fractions results in a terminating decimal?",
            options: [ {key:"A", text:"9/120"}, {key:"B", text:"4/45"}, {key:"C", text:"1/14"}, {key:"D", text:"3/70"}, {key:"E", text:"7/15"} ],
            correct: "A",
            steps: [
              "Simplify each fraction, then check whether the denominator's only prime factors are 2 and 5.",
              "A: $\\frac{9}{120}=\\frac{3}{40}$, $40=2^3\\times5$, only 2s and 5s. Terminates.",
              "B: $45 = 3^2 \\times 5$, repeats. C: $14=2\\times7$, repeats. D: $70=2\\times5\\times7$, repeats. E: $15=3\\times5$, repeats.",
              "Only A terminates."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 7 =================
{
  id: "ch7", number: 7, title: "Sequences of Numbers",
  blurb: "Arithmetic, geometric, and recursive sequences.",
  lessons: [
    {
      id: "ch7-l1", title: "Sequences", video: { id: "UqCZXbwqiwA", title: "Introduction to Sequences (Arithmetic and Geometric) – FULL LESSON", channel: "TabletClass Math" },
      widget: "sequenceExplorer",
      blocks: [
        { type: "html", content: "<h4>Arithmetic Sequences</h4><p>The difference between consecutive terms is constant ($d$).</p><ul><li><strong>$n$-th term:</strong> $a_n = a_1 + (n-1)d$</li><li><strong>Sum of $n$ terms:</strong> $S_n = \\frac{n(a_1+a_n)}{2} = n \\times \\text{(average of the sequence)}$</li></ul>" },
        { type: "html", content: "<h4>Geometric Sequences</h4><p>Each term is the previous term times a constant ratio ($r$).</p><p><strong>$n$-th term:</strong> $a_n = a_1 \\cdot r^{(n-1)}$</p>" },
        { type: "html", content: "<h4>Recursive Sequences</h4><p>Defined by referencing preceding terms, e.g. $a_n = 2a_{n-1} - 3$. Step through early values by hand to uncover the pattern.</p>" },
        { type: "html", content: "<p>Use the explorer above to generate your own arithmetic or geometric sequences and see the formulas applied live.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "An arithmetic sequence has a 3rd term of 11 and an 8th term of 36. What is the 20th term?",
            options: [ {key:"A", text:"91"}, {key:"B", text:"96"}, {key:"C", text:"101"}, {key:"D", text:"106"}, {key:"E", text:"111"} ],
            correct: "B",
            steps: [
              "Set up: $a_1+2d=11$ and $a_1+7d=36$.",
              "Subtract: $5d=25 \\Rightarrow d=5$. Then $a_1 = 11-2(5)=1$.",
              "$a_{20} = a_1+19d = 1+19(5) = 96$."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 8 =================
{
  id: "ch8", number: 8, title: "Operations with Exponents",
  blurb: "Base exceptions and exponential inequalities.",
  lessons: [
    {
      id: "ch8-l1", title: "Advanced Base Manipulations & Sign Traps", video: { id: "m4sX4FQOyoo", title: "Negative Exponents and Fractional Exponents - Examples", channel: "Patrick J" },
      blocks: [
        { type: "html", content: "<h4>The Three Critical Base Exceptions</h4><p>The rule \"if $b^x=b^y$ then $x=y$\" breaks down if:</p><ol><li>$b=1$: $1^5=1^{12}$, but $5\\neq12$.</li><li>$b=0$: $0^2=0^{33}$, but $2\\neq33$.</li><li>$b=-1$: $(-1)^2=(-1)^4=1$, but $2\\neq4$.</li></ol>" },
        { type: "html", content: "<h4>Exponential Inequalities (0 < base < 1)</h4><p>If $0<b<1$ and $b^x>b^y$, then $x<y$: raising a fractional base to a higher power makes it <em>smaller</em>.</p><p><em>Example:</em> $(0.5)^2=0.25$ and $(0.5)^3=0.125$. Since $0.25>0.125$, the lower exponent gave the larger value.</p>" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question · Quantitative Comparison",
            context: "$x$ is an integer and $(0.4)^{x^2-5} > (0.4)^{4x}$.",
            quantityA: "$x$",
            quantityB: "$0$",
            correct: "D",
            steps: [
              "Base is $0.4$, between 0 and 1, so equating exponents flips the inequality: $x^2-5 < 4x$.",
              "Rearrange: $x^2-4x-5<0 \\Rightarrow (x-5)(x+1)<0$, valid for $-1<x<5$.",
              "Since $x$ is an integer, $x \\in \\{0,1,2,3,4\\}$, and $x$ could be 0 or positive, so the relationship cannot be determined."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 9 =================
{
  id: "ch9", number: 9, title: "Factoring and Simplifying Algebraic Expressions",
  blurb: "The AC method, higher-order difference of squares, and conjugates.",
  lessons: [
    {
      id: "ch9-l1", title: "Splitting Middle Terms & Advanced Difference of Squares", video: { id: "vypGuPy6g2A", title: "How To Factor Difference of Squares - Algebra", channel: "The Organic Chemistry Tutor" },
      blocks: [
        { type: "html", content: "<h4>Higher-Order Difference of Squares</h4>$$x^4-y^4=(x^2-y^2)(x^2+y^2)=(x-y)(x+y)(x^2+y^2)$$" },
        { type: "html", content: "<h4>Rationalizing via Conjugates</h4><p>Multiply numerator and denominator by the algebraic conjugate to exploit the difference of squares:</p>$$\\frac{1}{\\sqrt{x}-\\sqrt{y}} = \\frac{1}{\\sqrt{x}-\\sqrt{y}}\\cdot\\frac{\\sqrt{x}+\\sqrt{y}}{\\sqrt{x}+\\sqrt{y}} = \\frac{\\sqrt{x}+\\sqrt{y}}{x-y}$$" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "For all real $x>1$, which is equivalent to $\\frac{x-1}{\\sqrt{x}-1} - \\sqrt{x}$?",
            options: [ {key:"A", text:"−1"}, {key:"B", text:"0"}, {key:"C", text:"1"}, {key:"D", text:"√x"}, {key:"E", text:"x"} ],
            correct: "C",
            steps: [
              "View $(x-1)$ as a hidden difference of squares: $x-1=(\\sqrt{x}-1)(\\sqrt{x}+1)$.",
              "Substitute: $\\frac{(\\sqrt{x}-1)(\\sqrt{x}+1)}{\\sqrt{x}-1} - \\sqrt{x}$.",
              "Cancel $(\\sqrt{x}-1)$: $(\\sqrt{x}+1) - \\sqrt{x} = 1$."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 10 =================
{
  id: "ch10", number: 10, title: "Relations, Functions, Equations, and Inequalities",
  blurb: "Compound inequalities and the sign-flip division trap.",
  lessons: [
    {
      id: "ch10-l1", title: "Compound Inequalities and Absolute Range Limits", video: { id: "AKSnaGHiFMc", title: "Compound Inequalities | Graphing, Writing, and Solving", channel: "Math with Mr. J" },
      blocks: [
        { type: "html", content: "<h4>Multi-Variable Product Logic</h4><ul><li>If $ab>0$, $a$ and $b$ share the same sign.</li><li>If $ab<0$, $a$ and $b$ have opposite signs.</li><li><strong>The division trap:</strong> if $a>b$, it is <em>not</em> always true that $\\frac1a<\\frac1b$; this only holds if $a,b$ share the same sign. If $a=2, b=-3$: $\\frac12 > -\\frac13$.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "If $x < y < 0$, which statement must be true?",
            options: [ {key:"A", text:"x² < y²"}, {key:"B", text:"1/x < 1/y"}, {key:"C", text:"xy < 0"}, {key:"D", text:"x/y > 1"}, {key:"E", text:"x + y > 0"} ],
            correct: "D",
            steps: [
              "Both $x,y$ are negative and $x$ is further left (more negative). Test $x=-3, y=-2$.",
              "$\\frac{x}{y}=\\frac{-3}{-2}=1.5$: a positive quotient of two negatives with $|x|>|y|$ always exceeds 1.",
              "A fails ($9<4$ is false), B fails ($-0.33<-0.5$ is false), so D is the only guaranteed truth."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 11 =================
{
  id: "ch11", number: 11, title: "Solving Linear and Quadratic Equations and Inequalities",
  blurb: "The discriminant and vertex optimization.",
  lessons: [
    {
      id: "ch11-l1", title: "The Discriminant & Vertex Optimization", video: { id: "T5CAaynO-4k", title: "The Quadratic Formula & Discriminant in Algebra", channel: "Math and Science" },
      widget: "quadraticGrapher",
      blocks: [
        { type: "html", content: "<h4>The Discriminant Framework ($\\Delta = b^2-4ac$)</h4><ul><li>$b^2-4ac>0$: 2 distinct real roots (parabola crosses the x-axis twice).</li><li>$b^2-4ac=0$: exactly 1 real root (tangent to the x-axis).</li><li>$b^2-4ac<0$: 0 real roots (never touches the x-axis).</li></ul>" },
        { type: "html", content: "<h4>Vertex Axis of Symmetry</h4><p>The max/min of a quadratic occurs at:</p>$$x_{\\text{vertex}} = -\\frac{b}{2a}$$<p>Drag the sliders above to see how $a$, $b$, $c$ change the parabola, its roots, and its vertex in real time.</p>" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question · Quantitative Comparison",
            quantityA: "The number of real solutions to $3x^2-5x+4=0$",
            quantityB: "The minimum value of $x^2-6x+14$",
            correct: "B",
            steps: [
              "Quantity A: $\\Delta = (-5)^2-4(3)(4) = 25-48=-23 < 0$, so there are 0 real solutions. Quantity A = 0.",
              "Quantity B: vertex at $x=-\\frac{-6}{2(1)}=3$. Minimum value $= 3^2-6(3)+14 = 9-18+14=5$.",
              "5 > 0, so Quantity B is greater."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 12 =================
{
  id: "ch12", number: 12, title: "Solving Simultaneous Equations and Inequalities",
  blurb: "One, none, or infinite solutions, spotted from the coefficients alone.",
  lessons: [
    {
      id: "ch12-l1", title: "Infinite vs. Zero Solution Configurations", video: { id: "9itGIP8gns4", title: "Solving Systems of Linear Equations Using Substitution and Elimination", channel: "Mario's Math Tutoring" },
      blocks: [
        { type: "html", content: "<p>A system of two linear equations in two variables has exactly one of three outcomes: a unique solution (intersecting lines), no solution (parallel lines), or infinitely many solutions (coincident lines).</p>" },
        { type: "html", content: "<h4>The Coefficient Proportionality Rule</h4><p>For $A_1x+B_1y=C_1$ and $A_2x+B_2y=C_2$:</p><ul><li><strong>Exactly one solution:</strong> $\\frac{A_1}{A_2} \\neq \\frac{B_1}{B_2}$</li><li><strong>No solution:</strong> $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} \\neq \\frac{C_1}{C_2}$</li><li><strong>Infinitely many:</strong> $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2}$</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "If the system $3x-4y=12$ and $kx+8y=20$ has no real solutions, what is $k$?",
            options: [ {key:"A", text:"−6"}, {key:"B", text:"−3"}, {key:"C", text:"3"}, {key:"D", text:"6"}, {key:"E", text:"12"} ],
            correct: "A",
            steps: [
              "No-solution condition: $\\frac{A_1}{A_2}=\\frac{B_1}{B_2}$, i.e. $\\frac{3}{k}=\\frac{-4}{8}$.",
              "Cross-multiply: $-4k = 24 \\Rightarrow k=-6$.",
              "Check $\\frac{C_1}{C_2}$: $\\frac{12}{20}=\\frac35$, while $\\frac{3}{-6}=-\\frac12 \\neq \\frac35$, confirming parallel, non-coincident lines."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 13 =================
{
  id: "ch13", number: 13, title: "Setting Up Equations to Solve Word Problems",
  blurb: "Overlapping groups and mixture balance equations.",
  lessons: [
    {
      id: "ch13-l1", title: "Matrix Setups for Weighted Mixtures", video: { id: "8rYOIVhIL9w", title: "Algebra Mixture Word Problems Explained: Step-by-Step Solution & Example", channel: "TabletClass Math" },
      blocks: [
        { type: "html", content: "<h4>The Overlapping Group Formula</h4>$$\\text{Total} = \\text{Group A} + \\text{Group B} - \\text{Both} + \\text{Neither}$$" },
        { type: "html", content: "<h4>Fluid Mixture Balance Equation</h4><p>The total amount of pure substance stays constant when mixing:</p>$$C_1 V_1 + C_2 V_2 = C_{\\text{final}}(V_1+V_2)$$<p>where $C$ = concentration, $V$ = volume.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "How many liters of a 20% acid solution must be mixed with 10 liters of a 50% acid solution to create a 30% acid solution?",
            options: [ {key:"A", text:"10"}, {key:"B", text:"15"}, {key:"C", text:"20"}, {key:"D", text:"25"}, {key:"E", text:"30"} ],
            correct: "C",
            steps: [
              "Let $x$ = liters of the 20% solution. Balance: $0.20x + 0.50(10) = 0.30(x+10)$.",
              "Multiply by 10: $2x+50=3x+30$.",
              "$x = 20$."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 14 =================
{
  id: "ch14", number: 14, title: "Coordinate Geometry",
  blurb: "Reflections, midpoints, and triangle areas from intercepts.",
  lessons: [
    {
      id: "ch14-l1", title: "Reflections, Midpoints, and Area Intercepts", video: { id: "GhAxN5ohg2k", title: "Reflections on the Coordinate Plane", channel: "MooMooMath and Science" },
      widget: "reflectionTool",
      blocks: [
        { type: "html", content: "<h4>Reflection Rules</h4><ul><li>Across the x-axis: $(x,y)\\to(x,-y)$</li><li>Across the y-axis: $(x,y)\\to(-x,y)$</li><li>Through the origin: $(x,y)\\to(-x,-y)$</li><li>Across $y=x$: $(x,y)\\to(y,x)$</li></ul><p>Drag the point above to see all four reflections update live.</p>" },
        { type: "html", content: "<h4>Triangle Area from Axis Intercepts</h4>$$\\text{Area} = \\frac{1}{2}\\cdot|x\\text{-intercept}|\\cdot|y\\text{-intercept}|$$" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question · Quantitative Comparison",
            quantityA: "The area of the triangle bounded by the axes and the line $4x+3y=24$",
            quantityB: "25",
            correct: "B",
            steps: [
              "$x$-intercept ($y=0$): $4x=24 \\Rightarrow x=6$.",
              "$y$-intercept ($x=0$): $3y=24 \\Rightarrow y=8$.",
              "Area $= \\frac12 \\times 6 \\times 8 = 24$.",
              "24 < 25, so Quantity B is greater."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 15 =================
{
  id: "ch15", number: 15, title: "Advanced Lines and Angles",
  blurb: "Transversals, parallel lines, and the angle relationships that always hold.",
  lessons: [
    {
      id: "ch15-l1", title: "Fundamental Angle Mechanics", video: { id: "Y5f1ojx4RkQ", title: "Complementary, Supplementary, and Vertical Angles", channel: "MooMooMath and Science" },
      blocks: [
        { type: "html", content: "<h4>Exact Angular Classifications</h4><ul><li><strong>Acute:</strong> $0°<\\theta<90°$</li><li><strong>Right:</strong> $\\theta=90°$</li><li><strong>Obtuse:</strong> $90°<\\theta<180°$</li><li><strong>Straight:</strong> $\\theta=180°$</li></ul>" },
        { type: "html", content: "<h4>The \"Not Drawn to Scale\" Trap</h4><p>Unless a diagram is explicitly marked to scale, never rely on visual estimation. Trust only stated constraints, equations, and right-angle marks.</p>" },
        { type: "html", content: "<h4>Intersecting Lines</h4><ul><li><strong>Complementary angles</strong> sum to exactly $90°$.</li><li><strong>Supplementary angles (linear pairs)</strong> sum to exactly $180°$.</li><li><strong>Vertical angles</strong> (directly opposite when two lines cross) are always equal.</li><li>All angles around a single point of intersection sum to $360°$.</li></ul>" }
      ]
    },
    {
      id: "ch15-l2", title: "Parallel Lines Cut by a Transversal", video: { id: "kR3oOKUNJjM", title: "Angle Pairs-Parallel Lines Cut by a Transversal", channel: "MooMooMath and Science" },
      widget: "angleHashtag",
      blocks: [
        { type: "html", content: "<p>When $l_1 \\parallel l_2$ and a transversal $T$ crosses both, 8 angles form but only <strong>two unique measures</strong> exist. Click any angle in the diagram above to see every angle that must equal it, and drag the slider to change the transversal's tilt.</p>" },
        { type: "html", content: "<h4>The Binary Angle Grouping Rule</h4><ul><li>All <strong>Group Acute</strong> angles are equal.</li><li>All <strong>Group Obtuse</strong> angles are equal.</li><li>Any acute-group angle + any obtuse-group angle is always supplementary: $\\alpha+\\beta=180°$.</li></ul>" },
        { type: "html", content: "<h4>Structural Categorizations</h4><ul><li><strong>Alternate interior angles</strong> (opposite sides of the transversal, between the parallel lines) are equal.</li><li><strong>Alternate exterior angles</strong> (opposite sides, outside the parallel lines) are equal.</li><li><strong>Corresponding angles</strong> (matching relative position at each intersection) are equal.</li><li><strong>Consecutive interior angles</strong> (same side, between the lines) are supplementary.</li></ul>" },
        { type: "html", content: "<h4>Proving Parallelism</h4><p>Never assume two lines are parallel just because they look it. You can only conclude $l_1 \\parallel l_2$ if:</p><ol><li>A pair of alternate interior angles is equal, <strong>or</strong></li><li>A pair of corresponding angles is equal, <strong>or</strong></li><li>A pair of consecutive interior angles sums to $180°$.</li></ol><p class='note'><strong>Auxiliary line shortcut:</strong> for a \"crook\" or \"V-shape\" between two parallel lines, draw a third auxiliary parallel line through the vertex of the bend; this splits the unknown angle into two solvable parts.</p>" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question · Quantitative Comparison",
            context: "Lines $L_1$ and $L_2$ are cut by transversal $T$. Angle 1 and Angle 2 are consecutive interior angles, with Angle 1 $= 2x+10$ and Angle 2 $= 3x-15$.",
            quantityA: "$x$",
            quantityB: "37",
            correct: "D",
            steps: [
              "Check the given constraint: does the problem state $L_1 \\parallel L_2$?",
              "It only says the lines are \"cut by transversal $T$\": parallelism is never confirmed.",
              "Without that guarantee, consecutive interior angles don't have to sum to $180°$, so $x$ could be many values, and the relationship cannot be determined."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 16 =================
{
  id: "ch16", number: 16, title: "Advanced Data Analysis & Statistics",
  blurb: "Mean, median, mode, and everything that governs how spread out data is.",
  lessons: [
    {
      id: "ch16-l1", title: "Central Tendency", video: { id: "e3uY2LraXts", title: "Mean, Median, Mode, and Range", channel: "Math with Mr. J" },
      blocks: [
        { type: "html", content: "<h4>The Algebraic Mean</h4>$$\\mu = \\frac{\\sum_{i=1}^{n}x_i}{n} \\quad\\Longrightarrow\\quad \\text{Sum} = \\text{Mean}\\times n$$<p class='note'><strong>Strategy:</strong> when tracking changes to an average, convert means into <em>sums</em>; sums can be added and subtracted algebraically, averages cannot.</p>" },
        { type: "html", content: "<h4>The Weighted Mean</h4><p>Combining two groups of sizes $n_1, n_2$ with averages $M_1, M_2$:</p>$$M_c = \\frac{n_1 M_1 + n_2 M_2}{n_1+n_2}$$<p><strong>Balancing rule:</strong> $M_c$ always lies closer to the average of the larger group.</p>" },
        { type: "html", content: "<h4>Median & Mode</h4><ul><li><strong>Median</strong> (odd $n$): the value at position $\\frac{n+1}{2}$.</li><li><strong>Median</strong> (even $n$): the average of the values at positions $\\frac{n}{2}$ and $\\frac{n}{2}+1$.</li><li><strong>Mode:</strong> the most frequent value; a set can have zero, one, or many modes.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "A set of 7 distinct positive integers has mean 40 and median 35. The largest integer is 80. What is the maximum possible value of the second-largest integer?",
            options: [ {key:"A", text:"44"}, {key:"B", text:"45"}, {key:"C", text:"53"}, {key:"D", text:"54"}, {key:"E", text:"79"} ],
            correct: "E",
            steps: [
              "Order the 7 integers $x_1<x_2<\\cdots<x_7$, with median $x_4=35$ and max $x_7=80$.",
              "Total sum $= 40 \\times 7 = 280$.",
              "To maximize $x_6$, minimize $x_1,x_2,x_3,x_5$: smallest distinct positives $x_1{=}1, x_2{=}2, x_3{=}3$, and $x_5$ must just exceed the median, so $x_5=36$.",
              "$(1+2+3)+35+36+x_6+80=280 \\Rightarrow x_6=123$, but $x_6$ must stay below $x_7=80$, so 123 isn't achievable.",
              "Since all integers are distinct and $x_6<x_7=80$, the true ceiling is $x_6=79$. Check it's achievable: with $x_6=79$, the remaining three values $x_1,x_2,x_3$ must sum to $280-(35+36+79+80)=50$, easily done with e.g. 10, 15, 25."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch16-l2", title: "Dispersion", video: { id: "ApT_UJfIeAc", title: "Standard deviation Simply Explained", channel: "Kirkman's Academy" },
      blocks: [
        { type: "html", content: "<h4>Range and IQR</h4><ul><li><strong>Range</strong> $=$ Max $-$ Min. Very sensitive to outliers.</li><li><strong>Quartiles:</strong> $Q_1$ (25th percentile), $Q_2$ (median), $Q_3$ (75th percentile).</li><li><strong>IQR</strong> $= Q_3-Q_1$: spread of the middle 50%, resistant to outliers.</li></ul>" },
        { type: "html", content: "<h4>Standard Deviation: Structural Rules</h4><p>You'll almost never compute $\\sigma$ from its formula directly. Instead, master these:</p><ul><li><strong>Shifting:</strong> adding/subtracting a constant $k$ to every term shifts the mean by $k$ but leaves $\\sigma$ <strong>unchanged</strong>.</li><li><strong>Scaling:</strong> multiplying every term by a positive constant $k$ multiplies both the mean and $\\sigma$ by $k$.</li><li><strong>Clustering:</strong> the closer data points sit to the mean, the smaller $\\sigma$.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "Data set X has 5 numbers with mean μ and standard deviation σ. Set Y is formed by multiplying each term in X by −3, then adding 10. What is the standard deviation of Y?",
            options: [ {key:"A", text:"σ"}, {key:"B", text:"3σ"}, {key:"C", text:"−3σ"}, {key:"D", text:"3σ + 10"}, {key:"E", text:"−3σ + 10"} ],
            correct: "B",
            steps: [
              "Multiplying by $-3$ scales the spread by $|-3|=3$ (standard deviation is never negative). New $\\sigma = 3\\sigma$.",
              "Adding 10 shifts every point equally, so it has zero effect on spread.",
              "Final standard deviation: $3\\sigma$."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 17 =================
{
  id: "ch17", number: 17, title: "Interpretation of Graphical Data Distributions",
  blurb: "Boxplots, scatterplots, and frequency histograms.",
  lessons: [
    {
      id: "ch17-l1", title: "Deconstructing Advanced Charts", video: { id: "1MXcyrNkprk", title: "Mastering Data Visualization: Histograms, Bar Charts, Box Plots, and Scatter Plots Explained", channel: "Fatima's Digital Space" },
      widget: "boxplotCompare",
      blocks: [
        { type: "html", content: "<h4>Boxplots (5-Number Summary)</h4><p>A boxplot splits data into four quartile zones, each holding exactly <strong>25% of the data points</strong>, regardless of the zone's physical width.</p><ul><li><strong>Whiskers</strong> extend to the min and max.</li><li><strong>The box</strong> spans $Q_1$ to $Q_3$; its width is the IQR.</li><li><strong>The internal line</strong> marks the median ($Q_2$).</li></ul><p>Hover over either boxplot above to see its exact five-number summary.</p>" },
        { type: "html", content: "<h4>Scatterplots</h4><p>Track the relationship between two variables. The <strong>line of best fit</strong> represents the trend; points above it exceed the model's prediction. Correlation can be positive, negative, or zero.</p>" },
        { type: "html", content: "<h4>Frequency Distributions</h4><p>In a histogram, the y-axis is the frequency count within each x-axis bin. To find the median, find total frequency $N$ and locate the bin containing the $\\frac{N}{2}$ position.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "Class A's boxplot: min 40, Q1 55, median 70, Q3 85, max 95. Class B's boxplot: min 50, Q1 65, median 75, Q3 80, max 90. Which must be true?",
            options: [ {key:"A", text:"Class A has a higher range of scores than Class B."}, {key:"B", text:"More students passed in Class B than Class A."}, {key:"C", text:"The number of students scoring 55–70 in Class A equals the number scoring 70–85 in Class A."}, {key:"D", text:"The IQR of Class A equals the IQR of Class B."}, {key:"E", text:"Both A and C."} ],
            correct: "E",
            steps: [
              "Range A $= 95-40=55$; Range B $=90-50=40$. Since $55>40$, statement A is true.",
              "Statement C: the zone from $Q_1$ to $Q_2$ always holds 25% of the data, and so does $Q_2$ to $Q_3$, the same pool and same class, so the actual counts match. True.",
              "Since both A and C hold, the answer is E."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 18 =================
{
  id: "ch18", number: 18, title: "Advanced Counting Methods & Probability Theory",
  blurb: "Permutations, combinations, and conditional probability.",
  lessons: [
    {
      id: "ch18-l1", title: "Permutations, Combinations, and Group Constraints", video: { id: "j_863d3QWvs", title: "How to Calculate Permutations and Combinations - Probability", channel: "Jeremy Blitz-Jones" },
      widget: "combinatoricsCalculator",
      blocks: [
        { type: "html", content: "<h4>The Fundamental Counting Principle</h4><p>If task 1 has $a$ ways and task 2 has $b$ ways, both together have $a \\times b$ ways.</p>" },
        { type: "html", content: "<h4>Permutations vs. Combinations</h4><ul><li><strong>Permutation</strong> (order matters): $P(n,r) = \\dfrac{n!}{(n-r)!}$</li><li><strong>Combination</strong> (order doesn't matter): $C(n,r) = \\dbinom{n}{r} = \\dfrac{n!}{r!(n-r)!}$</li></ul><p>Use the calculator above to compute both instantly for any $n$ and $r$.</p>" },
        { type: "html", content: "<h4>Permutations with Repetition</h4><p>When arranging items with indistinguishable duplicates, divide by the factorial of each repeat count:</p>$$\\text{Total Arrangements} = \\frac{n!}{n_1!\\cdot n_2!\\cdot n_3!\\cdots}$$" }
      ]
    },
    {
      id: "ch18-l2", title: "Probability Mechanics",
      blocks: [
        { type: "html", content: "<h4>Compound Events</h4><p>Probabilities always fall in $0 \\leq P(A) \\leq 1$.</p><ul><li><strong>\"OR\" rule:</strong> $P(A\\text{ or }B)=P(A)+P(B)-P(A\\text{ and }B)$ (for mutually exclusive events, $P(A\\text{ and }B)=0$).</li><li><strong>\"AND\" rule:</strong> $P(A\\text{ and }B)=P(A)\\times P(B\\mid A)$ (for independent events, $P(B\\mid A)=P(B)$).</li></ul>" },
        { type: "html", content: "<h4>Conditional Probability</h4>$$P(A\\mid B) = \\frac{P(A\\text{ and }B)}{P(B)}$$" },
        { type: "html", content: "<h4>The Complement Shortcut</h4><p>For \"at least once\" questions, it's almost always faster to find the complement:</p>$$P(\\text{at least once}) = 1 - P(\\text{none})$$" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice (Conditional Probability)",
            context: "40% of a population has high blood pressure. Of those, 70% eat a high-sodium diet. Of those without high blood pressure, 20% eat a high-sodium diet. A random person eats a high-sodium diet. What's the probability they have high blood pressure?",
            options: [ {key:"A", text:"7/10"}, {key:"B", text:"7/25"}, {key:"C", text:"14/25"}, {key:"D", text:"7/11"}, {key:"E", text:"4/11"} ],
            correct: "A",
            steps: [
              "Assume 100 people. High blood pressure (H) = 40; no HBP = 60.",
              "High-sodium & H: $70\\% \\times 40 = 28$. High-sodium & no-H: $20\\% \\times 60 = 12$.",
              "Total high-sodium eaters: $28+12=40$.",
              "$P(H\\mid S) = \\dfrac{28}{40} = \\dfrac{7}{10}$"
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 19 =================
{
  id: "ch19", number: 19, title: "Random Variables & Normal Distributions",
  blurb: "The empirical rule, z-scores, and percentiles under the bell curve.",
  lessons: [
    {
      id: "ch19-l1", title: "The Empirical Rule and Z-Score Mechanics", video: { id: "mtbJbDwqWLE", title: "The Normal Distribution and the 68-95-99.7 Rule (5.2)", channel: "Simple Learning Pro" },
      widget: "normalCurve",
      blocks: [
        { type: "html", content: "<p>A continuous random variable is <strong>normally distributed</strong> if its probability density function forms a symmetric, bell-shaped curve centered on the mean ($\\mu$). Use the slider above to shade different $\\sigma$ ranges and see exactly what percentage of data falls inside.</p>" },
        { type: "html", content: "<h4>The 68-95-99.7 Rule</h4><ul><li>$\\mu \\pm 1\\sigma$ contains ≈ <strong>68%</strong> of the data (34% each side).</li><li>$\\mu \\pm 2\\sigma$ contains ≈ <strong>95%</strong> of the data.</li><li>$\\mu \\pm 3\\sigma$ contains ≈ <strong>99.7%</strong> of the data.</li></ul>" },
        { type: "html", content: "<h4>Tail Percentiles</h4><p>Because the curve is symmetric, 50% of data lies above the mean and 50% below.</p><ul><li>A point at exactly $+1\\sigma$ sits at the <strong>84th percentile</strong> ($50\\%+34\\%$).</li><li>A point at exactly $+2\\sigma$ sits at the <strong>97.5th percentile</strong> ($50\\%+34\\%+13.5\\%$).</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "Annual rainfall in a region is normally distributed with mean 42 inches and standard deviation 5 inches. Which quantity is greatest?",
            options: [ {key:"A", text:"P(rainfall between 37 and 42 inches)"}, {key:"B", text:"P(rainfall between 42 and 47 inches)"}, {key:"C", text:"P(rainfall greater than 47 inches)"}, {key:"D", text:"P(rainfall less than 37 inches)"}, {key:"E", text:"A and B are equal and both largest"} ],
            correct: "E",
            steps: [
              "Convert to standard deviations ($\\sigma=5$): 37 in $=-1\\sigma$, 42 in $=\\mu$, 47 in $=+1\\sigma$.",
              "Option A (between $-1\\sigma$ and $\\mu$) = 34%. Option B (between $\\mu$ and $+1\\sigma$) = 34%.",
              "Both are symmetric halves of the 68% central band and are the largest single concentrations of probability among the choices."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 20 =================
{
  id: "ch20", number: 20, title: "Geometry: Triangles, Circles & Solids",
  blurb: "Triangles, circles, polygons, and 3D solids, the shapes the GRE loves to test.",
  lessons: [
    {
      id: "ch20-l1", title: "Triangles", video: { id: "IAsesh9oLhQ", title: "Pythagorean Theorem: Right Triangle Basics and Applications", channel: "IXL" },
      widget: "triangleExplorer",
      blocks: [
        { type: "html", content: "<p>Drag any vertex above to reshape the triangle and watch every measurement update live.</p><h4>Angle Sum & Exterior Angles</h4><p>The three interior angles of any triangle always sum to $180°$. An <strong>exterior angle</strong> equals the sum of the two non-adjacent interior angles.</p>" },
        { type: "html", content: "<h4>The Pythagorean Theorem</h4><p>For a right triangle with legs $a, b$ and hypotenuse $c$:</p>$$a^2 + b^2 = c^2$$<p><strong>Common Pythagorean triples:</strong> 3-4-5, 6-8-10, 5-12-13, 8-15-17 (and any multiple of these).</p>" },
        { type: "html", content: "<h4>Special Right Triangles</h4><ul><li><strong>45-45-90:</strong> sides are in ratio $x : x : x\\sqrt{2}$ (legs equal, hypotenuse is leg $\\times \\sqrt2$).</li><li><strong>30-60-90:</strong> sides are in ratio $x : x\\sqrt{3} : 2x$ (short leg, long leg, hypotenuse).</li></ul>" },
        { type: "html", content: "<h4>The Triangle Inequality</h4><p>The sum of any two sides must exceed the third side, and each side must exceed the positive difference of the other two:</p>$$|b - c| < a < b + c$$<h4>Similar Triangles</h4><p>If two triangles are similar with side ratio $k$, their perimeters scale by $k$ and their <strong>areas scale by $k^2$</strong>.</p>" },
        { type: "html", content: "<h4>Area</h4>$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question 1 · Quantitative Comparison",
            context: "A triangle has two sides of length 7 and 10.",
            quantityA: "The maximum possible integer value of the third side",
            quantityB: "16",
            correct: "C",
            steps: [
              "By the triangle inequality, the third side must be less than $7 + 10 = 17$ and greater than $10 - 7 = 3$.",
              "The largest integer strictly less than 17 is 16.",
              "Both quantities equal 16."
            ]
          },
          {
            kind: "MC", title: "Question 2 · Multiple Choice",
            context: "A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?",
            options: [ {key:"A", text:"15"}, {key:"B", text:"21"}, {key:"C", text:"10.5"}, {key:"D", text:"18"}, {key:"E", text:"13"} ],
            correct: "A",
            steps: [
              "$9^2 + 12^2 = 81 + 144 = 225$.",
              "$\\sqrt{225} = 15$.",
              "This is just the 3-4-5 triple scaled by 3 (9-12-15)."
            ]
          },
          {
            kind: "QC", title: "Question 3 · Quantitative Comparison",
            context: "Triangle $ABC$ is similar to Triangle $DEF$, with corresponding sides in ratio $2:3$.",
            quantityA: "The ratio of the area of $ABC$ to the area of $DEF$",
            quantityB: "$4/9$",
            correct: "C",
            steps: [
              "For similar triangles, the ratio of areas equals the square of the ratio of sides.",
              "$(2/3)^2 = 4/9$.",
              "Both quantities equal $4/9$."
            ]
          }
        ]}
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A right triangle has legs of length 9 and 40. What is the length of the hypotenuse?",
          options: [ {key:"A", text:"41"}, {key:"B", text:"45"}, {key:"C", text:"49"}, {key:"D", text:"43"}, {key:"E", text:"39"} ],
          correct: "A",
          steps: ["$9^2 + 40^2 = 81 + 1600 = 1681$.", "$\\sqrt{1681} = 41$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "The interior angles of a triangle are in the ratio $2:3:4$. What is the measure of the largest angle?",
          options: [ {key:"A", text:"60°"}, {key:"B", text:"70°"}, {key:"C", text:"80°"}, {key:"D", text:"90°"}, {key:"E", text:"100°"} ],
          correct: "C",
          steps: ["The three parts add to $2+3+4=9$ shares of $180°$, so each share is $20°$.", "The largest angle is $4 \\times 20° = 80°$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "An isosceles right triangle has two legs of length 5. What is the length of the hypotenuse?",
          options: [ {key:"A", text:"5"}, {key:"B", text:"7"}, {key:"C", text:"$5\\sqrt2$"}, {key:"D", text:"10"}, {key:"E", text:"$5\\sqrt3$"} ],
          correct: "C",
          steps: ["This is a 45-45-90 triangle, so the hypotenuse is leg $\\times \\sqrt2$.", "Hypotenuse $= 5\\sqrt2$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "In triangle ABC, the exterior angle at C measures 130°, and angle A measures 55°. What is the measure of angle B?",
          options: [ {key:"A", text:"55°"}, {key:"B", text:"65°"}, {key:"C", text:"70°"}, {key:"D", text:"75°"}, {key:"E", text:"80°"} ],
          correct: "D",
          steps: ["The exterior angle equals the sum of the two non-adjacent interior angles: $130° = \\angle A + \\angle B$.", "$130° = 55° + \\angle B$, so $\\angle B = 75°$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "Two similar triangles have corresponding sides in ratio $3:5$. The smaller triangle has perimeter 18. What is the perimeter of the larger triangle?",
          options: [ {key:"A", text:"24"}, {key:"B", text:"27"}, {key:"C", text:"30"}, {key:"D", text:"33"}, {key:"E", text:"36"} ],
          correct: "C",
          steps: ["Perimeters of similar figures scale with the same ratio as their sides.", "$18 \\times \\frac{5}{3} = 30$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A 30-60-90 triangle has a hypotenuse of length 14. What is the length of the side opposite the 30° angle?",
          options: [ {key:"A", text:"5"}, {key:"B", text:"6"}, {key:"C", text:"7"}, {key:"D", text:"$7\\sqrt3$"}, {key:"E", text:"14"} ],
          correct: "C",
          steps: ["In a 30-60-90 triangle, the side opposite the 30° angle is always half the hypotenuse.", "$14 \\div 2 = 7$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "A triangle has two sides of length 6 and 7. Which of the following CANNOT be the length of the third side?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"8"}, {key:"C", text:"12"}, {key:"D", text:"13"}, {key:"E", text:"6"} ],
          correct: "D",
          steps: ["By the triangle inequality, the third side must satisfy $7-6 < x < 7+6$, so $1 < x < 13$.", "13 is not strictly less than 13, so it is impossible."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "What is the area of an equilateral triangle with side length 8?",
          options: [ {key:"A", text:"$16\\sqrt3$"}, {key:"B", text:"$32\\sqrt3$"}, {key:"C", text:"$8\\sqrt3$"}, {key:"D", text:"64"}, {key:"E", text:"16"} ],
          correct: "A",
          steps: ["Area of an equilateral triangle $= \\frac{\\sqrt3}{4}a^2$.", "$\\frac{\\sqrt3}{4}(8^2) = \\frac{\\sqrt3}{4}(64) = 16\\sqrt3$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A triangle has sides 5, 12, and 13. What is its area?",
          options: [ {key:"A", text:"25"}, {key:"B", text:"30"}, {key:"C", text:"32.5"}, {key:"D", text:"60"}, {key:"E", text:"65"} ],
          correct: "B",
          steps: ["Since $5^2+12^2=25+144=169=13^2$, this is a right triangle with legs 5 and 12.", "Area $= \\frac12(5)(12) = 30$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A triangle has interior angles of 40° and 75°. What type of triangle is it, based on its angles?",
          options: [ {key:"A", text:"Acute"}, {key:"B", text:"Right"}, {key:"C", text:"Obtuse"}, {key:"D", text:"Equilateral"}, {key:"E", text:"Cannot be determined"} ],
          correct: "A",
          steps: ["The third angle is $180° - 40° - 75° = 65°$.", "All three angles (40°, 75°, 65°) are under 90°, so the triangle is acute."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
          correct: 13,
          steps: ["$5^2+12^2=25+144=169$.", "$\\sqrt{169}=13$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A triangle's three interior angles measure $x$, $2x$, and $3x$ degrees. What is the value of $x$?",
          correct: 30,
          steps: ["$x + 2x + 3x = 180$, so $6x = 180$.", "$x = 30$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "An equilateral triangle has a perimeter of 36. What is the length of one side?",
          correct: 12,
          steps: ["All three sides of an equilateral triangle are equal.", "$36 \\div 3 = 12$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "A 45-45-90 triangle has a hypotenuse of length $10\\sqrt2$. What is the length of one leg?",
          correct: 10,
          steps: ["In a 45-45-90 triangle, hypotenuse $=$ leg $\\times \\sqrt2$.", "$10\\sqrt2 \\div \\sqrt2 = 10$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "An exterior angle of a triangle measures 118°. One of the two non-adjacent interior angles measures 47°. What is the measure of the other non-adjacent interior angle, in degrees?",
          correct: 71,
          steps: ["The exterior angle equals the sum of the two non-adjacent interior angles.", "$118° - 47° = 71°$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A triangle has a base of 14 and a corresponding height of 9. What is its area?",
          correct: 63,
          steps: ["Area $= \\frac12 \\times \\text{base} \\times \\text{height}$.", "$\\frac12 (14)(9) = 63$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "Two similar triangles have areas in ratio $4:25$. What is the ratio of their corresponding side lengths, smaller to larger, expressed as a decimal?",
          correct: 0.4,
          steps: ["The ratio of sides is the square root of the ratio of areas.", "$\\sqrt{4/25} = 2/5 = 0.4$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "A right triangle has legs in ratio $3:4$ and a hypotenuse of length 25. What is the length of the longer leg?",
          correct: 20,
          steps: ["Legs are $3k$ and $4k$, with hypotenuse $5k$ (a scaled 3-4-5 triple).", "$5k = 25$, so $k=5$, and the longer leg is $4(5)=20$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following sets of three side lengths CAN form a triangle? Select all that apply.",
          options: [ {key:"A", text:"3, 4, 5"}, {key:"B", text:"1, 2, 3"}, {key:"C", text:"5, 5, 9"}, {key:"D", text:"2, 2, 5"}, {key:"E", text:"6, 8, 10"} ],
          correct: ["A", "C", "E"],
          steps: [
            "A triangle forms only if the sum of the two shorter sides exceeds the longest side.",
            "A: $3+4=7>5$, valid. B: $1+2=3$, not greater than 3, invalid (degenerate). C: $5+5=10>9$, valid.",
            "D: $2+2=4$, not greater than 5, invalid. E: $6+8=14>10$, valid.",
            "Valid sets: A, C, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A triangle has angles 50°, 60°, and 70°. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"The triangle is acute."}, {key:"B", text:"The triangle is scalene."}, {key:"C", text:"The side opposite the 70° angle is the longest side."}, {key:"D", text:"The triangle is isosceles."}, {key:"E", text:"The triangle is a right triangle."} ],
          correct: ["A", "B", "C"],
          steps: [
            "All three angles are under 90°, so the triangle is acute (A true).",
            "All three angles are different, so all three sides are different lengths, making it scalene (B true) and not isosceles (D false).",
            "The longest side is always opposite the largest angle, which is 70° (C true).",
            "No angle is 90°, so it is not a right triangle (E false)."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following sets of three side lengths form a right triangle? Select all that apply.",
          options: [ {key:"A", text:"5, 12, 13"}, {key:"B", text:"8, 15, 17"}, {key:"C", text:"7, 10, 13"}, {key:"D", text:"9, 12, 15"}, {key:"E", text:"6, 9, 12"} ],
          correct: ["A", "B", "D"],
          steps: [
            "Check whether the square of the longest side equals the sum of squares of the other two.",
            "A: $5^2+12^2=169=13^2$, valid. B: $8^2+15^2=289=17^2$, valid.",
            "C: $7^2+10^2=149 \\ne 13^2=169$, invalid. D: $9^2+12^2=225=15^2$, valid (a scaled 3-4-5). E: $6^2+9^2=117 \\ne 12^2=144$, invalid."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A triangle has side lengths 4, 4, and $4\\sqrt2$. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The triangle is isosceles."}, {key:"B", text:"The triangle is a right triangle."}, {key:"C", text:"The triangle is equilateral."}, {key:"D", text:"The largest angle is 90°."}, {key:"E", text:"The perimeter is $8 + 4\\sqrt2$."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "Two sides are equal (4 and 4), so the triangle is isosceles (A true), and not equilateral since the third side differs (C false).",
            "Check the Pythagorean theorem: $4^2+4^2=32=(4\\sqrt2)^2$, so it is a right triangle (B true), with the 90° angle opposite the longest side, $4\\sqrt2$ (D true).",
            "Perimeter $=4+4+4\\sqrt2=8+4\\sqrt2$ (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "In triangle ABC, side $a=7$ and side $b=9$. Side $c$ has an unknown length $x$. Which of the following values of $x$ are possible? Select all that apply.",
          options: [ {key:"A", text:"1"}, {key:"B", text:"2"}, {key:"C", text:"3"}, {key:"D", text:"10"}, {key:"E", text:"16"} ],
          correct: ["C", "D"],
          steps: [
            "By the triangle inequality, $9-7 < x < 9+7$, so $2 < x < 16$.",
            "A (1) and B (2) fail the lower bound. E (16) fails the upper bound. C (3) and D (10) both fall strictly between 2 and 16."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following are properties of every isosceles triangle? Select all that apply.",
          options: [ {key:"A", text:"At least two sides are equal."}, {key:"B", text:"At least two angles are equal."}, {key:"C", text:"It has a line of symmetry."}, {key:"D", text:"All of its angles are less than 90°."}, {key:"E", text:"The bisector of the apex angle is also a median and an altitude to the base."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "By definition, an isosceles triangle has at least two equal sides (A) and the base angles opposite them are equal (B), giving it a line of symmetry (C).",
            "D is false: an isosceles triangle can have an obtuse apex angle, for example sides 2, 2, 3 give an apex angle of about 97°.",
            "E is a standard property: in an isosceles triangle, the bisector from the apex angle coincides with the median and altitude to the base."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A triangle has sides 8, 15, and 17.",
          quantityA: "The area of the triangle",
          quantityB: "60",
          correct: "C",
          steps: ["Since $8^2+15^2=64+225=289=17^2$, this is a right triangle with legs 8 and 15.", "Area $=\\frac12(8)(15)=60$.", "Both quantities equal 60."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "In triangle ABC, angle A = 50° and angle B = 60°.",
          quantityA: "Angle C",
          quantityB: "70°",
          correct: "C",
          steps: ["$\\angle C = 180° - 50° - 60° = 70°$.", "Both quantities equal 70°."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A triangle has sides of length 5 and 9.",
          quantityA: "The maximum possible integer value of the third side",
          quantityB: "13",
          correct: "C",
          steps: ["By the triangle inequality, the third side must be less than $5+9=14$.", "The largest integer strictly less than 14 is 13.", "Both quantities equal 13."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "A right triangle has legs of length 6 and 8.",
          quantityA: "The length of the hypotenuse",
          quantityB: "Half the triangle's perimeter",
          correct: "B",
          steps: ["Hypotenuse $=\\sqrt{6^2+8^2}=\\sqrt{100}=10$.", "Perimeter $=6+8+10=24$, half of that is 12.", "Quantity A (10) is less than Quantity B (12)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "Two similar triangles have corresponding sides in ratio $2:3$.",
          quantityA: "The ratio of their areas",
          quantityB: "$2/3$",
          correct: "B",
          steps: ["The ratio of areas is the square of the ratio of sides: $(2/3)^2 = 4/9 \\approx 0.44$.", "Quantity B is $2/3 \\approx 0.67$.", "Quantity A is less than Quantity B."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "In triangle PQR, PQ = PR, and angle P = 40°.",
          quantityA: "Angle Q",
          quantityB: "70°",
          correct: "C",
          steps: ["Since $PQ = PR$, the base angles $\\angle Q$ and $\\angle R$ are equal.", "$\\angle Q = \\frac{180° - 40°}{2} = 70°$.", "Both quantities equal 70°."]
        }
      ]
    },
    {
      id: "ch20-l2", title: "Circles", video: { id: "hhkW5nW2tJY", title: "Arc Length and Sector Area: The Complete Guide (6 Examples!)", channel: "Mario's Math Tutoring" },
      widget: "circleExplorer",
      blocks: [
        { type: "html", content: "<p>Adjust the radius and central angle above to see circumference, area, arc length, and sector area update live.</p><h4>Core Formulas</h4><ul><li><strong>Circumference:</strong> $C = 2\\pi r$</li><li><strong>Area:</strong> $A = \\pi r^2$</li></ul>" },
        { type: "html", content: "<h4>Arcs and Sectors</h4><p>A central angle of $\\theta°$ carves out a fraction $\\frac{\\theta}{360}$ of the whole circle:</p><ul><li><strong>Arc length:</strong> $\\dfrac{\\theta}{360} \\times 2\\pi r$</li><li><strong>Sector area:</strong> $\\dfrac{\\theta}{360} \\times \\pi r^2$</li></ul>" },
        { type: "html", content: "<h4>Inscribed vs. Central Angles</h4><p>An inscribed angle is always <strong>half</strong> the central angle that subtends the same arc. Any inscribed angle subtending a diameter is exactly $90°$.</p><h4>Tangent Lines</h4><p>A tangent line touches a circle at exactly one point and is always <strong>perpendicular</strong> to the radius drawn to that point.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question 1 · Multiple Choice",
            context: "A circle has radius 6. What is the area of a sector with a central angle of 60°?",
            options: [ {key:"A", text:"3π"}, {key:"B", text:"6π"}, {key:"C", text:"9π"}, {key:"D", text:"12π"}, {key:"E", text:"36π"} ],
            correct: "B",
            steps: [
              "Full circle area $= \\pi(6)^2 = 36\\pi$.",
              "Sector fraction $= \\frac{60}{360} = \\frac16$.",
              "Sector area $= \\frac16 \\times 36\\pi = 6\\pi$."
            ]
          },
          {
            kind: "QC", title: "Question 2 · Quantitative Comparison",
            quantityA: "The arc length of a 90° sector in a circle of radius 8",
            quantityB: "$4\\pi$",
            correct: "C",
            steps: [
              "Circumference $= 2\\pi(8) = 16\\pi$.",
              "Arc length $= \\frac{90}{360} \\times 16\\pi = \\frac14 \\times 16\\pi = 4\\pi$.",
              "Both quantities equal $4\\pi$."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch20-l3", title: "Polygons & Quadrilaterals", video: { id: "9DK8FRklVrw", title: "Quadrilaterals Explained (Mini Course) | Intro, Properties, and Types", channel: "Math with Mr. J" },
      blocks: [
        { type: "html", content: "<h4>Interior Angle Sum</h4><p>For any polygon with $n$ sides:</p>$$\\text{Sum of interior angles} = (n-2) \\times 180°$$<p>For a <em>regular</em> polygon (all sides/angles equal), each interior angle measures:</p>$$\\frac{(n-2)\\times 180°}{n}$$" },
        { type: "table", headers: ["Quadrilateral", "Key properties"], rows: [
          ["Parallelogram", "Opposite sides parallel & equal; opposite angles equal; diagonals bisect each other."],
          ["Rectangle", "A parallelogram with four right angles; diagonals are equal in length."],
          ["Rhombus", "A parallelogram with four equal sides; diagonals are perpendicular bisectors of each other."],
          ["Square", "A rectangle and a rhombus at once: all sides equal, all angles 90°."],
          ["Trapezoid", "Exactly one pair of parallel sides (the \"bases\")."]
        ]},
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "What is the sum of the interior angles of a regular hexagon (6 sides)?",
            options: [ {key:"A", text:"540°"}, {key:"B", text:"600°"}, {key:"C", text:"720°"}, {key:"D", text:"900°"}, {key:"E", text:"1080°"} ],
            correct: "C",
            steps: [
              "$(n-2) \\times 180 = (6-2) \\times 180 = 4 \\times 180 = 720°$."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch20-l4", title: "3D Solids", video: { id: "alSGsV9UvNQ", title: "Find the Volume and Surface Area of Cylinders, Cones, and Spheres", channel: "Math and Science" },
      blocks: [
        { type: "table", headers: ["Solid", "Volume", "Surface area"], rows: [
          ["Rectangular solid", "$l \\times w \\times h$", "$2(lw + lh + wh)$"],
          ["Cube (side $s$)", "$s^3$", "$6s^2$"],
          ["Cylinder (radius $r$, height $h$)", "$\\pi r^2 h$", "$2\\pi r^2 + 2\\pi r h$"],
          ["Sphere (radius $r$)", "$\\frac{4}{3}\\pi r^3$", "$4\\pi r^2$"]
        ]},
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question 1 · Multiple Choice",
            context: "What is the volume of a cylinder with radius 3 and height 10?",
            options: [ {key:"A", text:"30π"}, {key:"B", text:"60π"}, {key:"C", text:"90π"}, {key:"D", text:"120π"}, {key:"E", text:"300π"} ],
            correct: "C",
            steps: [
              "$V = \\pi r^2 h = \\pi (3)^2 (10) = 90\\pi$."
            ]
          },
          {
            kind: "QC", title: "Question 2 · Quantitative Comparison",
            context: "A sphere has radius 3.",
            quantityA: "The sphere's surface area",
            quantityB: "The sphere's volume",
            correct: "C",
            steps: [
              "Surface area $= 4\\pi r^2 = 4\\pi(9) = 36\\pi$.",
              "Volume $= \\frac43 \\pi r^3 = \\frac43 \\pi (27) = 36\\pi$.",
              "At $r=3$, these happen to come out numerically equal: both are $36\\pi$. (Careful: they're different quantities with different units in real life, but the GRE is only asking you to compare the two computed values.)"
            ]
          }
        ]}
      ]
    },
    {
      id: "ch20-l5", title: "Advanced Circle Theorems", video: { id: "KFV70dj5OMw", title: "Power Theorems - Chords, Secants & Tangents - Circle Theorems - Geometry", channel: "The Organic Chemistry Tutor" },
      widget: "circleTheoremsExplorer",
      blocks: [
        { type: "html", content: "<p>Toggle between the two theorems above. Drag the sliders and watch the numbers stay consistent no matter how you move the points, that consistency is the whole point of a theorem.</p><p><em>Scope note: the official GRE review covers central and inscribed angles directly. Power of a Point problems below show up less often, mostly in harder Quantitative Comparison questions, but they are useful tools once you spot two lines crossing through a circle.</em></p>" },
        { type: "html", content: "<h4>Tangent Basics</h4><ul><li>A tangent line touches a circle at exactly one point and is always <strong>perpendicular</strong> to the radius drawn to that point.</li><li>Two tangent segments drawn from the same external point to a circle are always <strong>equal in length</strong>: if $PA$ and $PB$ are tangent from external point $P$, then $PA = PB$.</li><li>The segment from $P$ to the center bisects the angle between the two tangents.</li></ul>" },
        { type: "html", content: "<h4>Power of a Point</h4><p>From an external point $P$, any line through a circle hits it at two points. Multiply the two distances from $P$ to those points, and you get the <strong>same number no matter which line you draw</strong>, as long as it starts at $P$.</p><ul><li><strong>Secant-secant:</strong> if one line through $P$ hits the circle at $A$ and $B$, and another hits it at $C$ and $D$, then $$PA \\cdot PB = PC \\cdot PD$$</li><li><strong>Tangent-secant:</strong> if $PT$ is tangent and $PBC$ is a secant through the same point, then $$PT^2 = PB \\cdot PC$$</li></ul>" },
        { type: "html", content: "<h4>Inscribed Angle Theorem</h4><p>An inscribed angle (formed by two chords meeting at a point on the circle) is always <strong>half</strong> the central angle that subtends the same arc:</p>$$\\text{Inscribed angle} = \\frac{\\text{Central angle}}{2}$$<p>Two useful consequences:</p><ul><li><strong>Angles in the same segment are equal.</strong> Any two inscribed angles that subtend the same arc from the same side are equal to each other, since they are both half of the same central angle.</li><li><strong>Angle in a semicircle.</strong> If the chord is a diameter, the central angle is $180°$, so every inscribed angle subtending it is exactly $90°$. This is why a right triangle inscribed in a circle always has its hypotenuse on a diameter.</li></ul>" },
        { type: "html", content: "<h4>Alternate Segment Theorem</h4><p>The angle between a tangent and a chord drawn from the point of tangency equals the inscribed angle in the alternate segment, the angle subtending that same chord from the other side of the circle.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question 1 · Multiple Choice",
            context: "From external point P, a tangent segment has length 12. A secant from P passes through the circle, with the near intersection 8 units from P.",
            options: [ {key:"A", text:"6"}, {key:"B", text:"9"}, {key:"C", text:"10"}, {key:"D", text:"18"}, {key:"E", text:"24"} ],
            correct: "D",
            steps: [
              "By the tangent-secant relationship, $PT^2 = PB \\cdot PC$.",
              "$12^2 = 8 \\cdot PC$, so $144 = 8 \\cdot PC$.",
              "$PC = 18$."
            ]
          },
          {
            kind: "QC", title: "Question 2 · Quantitative Comparison",
            context: "In a circle, a central angle measures 70°. An inscribed angle subtends the same arc.",
            quantityA: "The inscribed angle",
            quantityB: "35°",
            correct: "C",
            steps: [
              "Inscribed angle = central angle ÷ 2 = $70° \\div 2 = 35°$.",
              "Both quantities equal $35°$."
            ]
          },
          {
            kind: "MC", title: "Question 3 · Multiple Choice",
            context: "Triangle XYZ is inscribed in a circle so that side XZ is a diameter. What is the measure of angle Y?",
            options: [ {key:"A", text:"It depends on the triangle"}, {key:"B", text:"45°"}, {key:"C", text:"60°"}, {key:"D", text:"90°"}, {key:"E", text:"Cannot be determined"} ],
            correct: "D",
            steps: [
              "Any angle inscribed in a semicircle subtends a diameter, so its central angle is $180°$.",
              "Angle Y $= 180° \\div 2 = 90°$, true for every such triangle."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch20-l6", title: "Triangle Centers: Bisectors & Medians", video: { id: "p52H7YcoDO8", title: "Incenter, Circumcenter, Centroid, Orthocenter (Properties & Diagrams)", channel: "Mario's Math Tutoring" },
      widget: "triangleCentersExplorer",
      blocks: [
        { type: "html", content: "<p>Drag any vertex above, then toggle between the two views to compare how medians and angle bisectors behave differently even in the same triangle.</p><p><em>Scope note: medians and the centroid appear in the official GRE math review. Angle bisectors and the incenter show up less often directly, but they sharpen your sense of proportion and ratio, which the GRE tests constantly.</em></p>" },
        { type: "html", content: "<h4>The Angle Bisector Theorem</h4><p>An angle bisector splits the opposite side into two pieces that are proportional to the two sides adjacent to the angle. If $AD$ bisects angle $A$ in triangle $ABC$, with $D$ on side $BC$:</p>$$\\frac{BD}{DC} = \\frac{AB}{AC}$$<p>All three internal angle bisectors of a triangle meet at a single point, the <strong>incenter</strong> $I$. It is the center of the triangle's inscribed circle (the <strong>incircle</strong>), the largest circle that fits inside the triangle and touches all three sides. Its radius is $r = \\dfrac{\\text{Area}}{s}$, where $s$ is the semiperimeter.</p>" },
        { type: "html", content: "<h4>Medians and the Centroid</h4><p>A <strong>median</strong> runs from a vertex to the midpoint of the opposite side. Every triangle has three medians, and they always meet at one point, the <strong>centroid</strong> $G$, the triangle's center of mass.</p><p>The centroid always splits each median in a <strong>2:1 ratio</strong>, measured from the vertex:</p>$$AG : GM_a = 2 : 1$$<p>where $M_a$ is the midpoint of side $BC$. Each median also bisects the triangle into two regions of equal area, and all three medians together divide it into six equal-area pieces.</p>" },
        { type: "html", content: "<h4>Median Length Formula</h4><p>If you know all three sides $a$, $b$, $c$, the length of the median $m_a$ drawn to side $a$ is:</p>$$m_a^2 = \\frac{2b^2 + 2c^2 - a^2}{4}$$" },
        { type: "table", headers: ["Center", "Formed by", "Key property"], rows: [
          ["Incenter (I)", "Angle bisectors", "Equidistant from all three sides; center of the incircle."],
          ["Centroid (G)", "Medians", "Splits each median 2:1 from the vertex; the triangle's balance point."]
        ]},
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question 1 · Multiple Choice",
            context: "In triangle ABC, AD bisects angle A with D on BC. AB = 8 and AC = 12. If BD = 6, what is DC?",
            options: [ {key:"A", text:"4"}, {key:"B", text:"6"}, {key:"C", text:"9"}, {key:"D", text:"12"}, {key:"E", text:"16"} ],
            correct: "C",
            steps: [
              "By the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{8}{12} = \\frac{2}{3}$.",
              "$\\frac{6}{DC} = \\frac{2}{3}$, so $DC = \\frac{6 \\times 3}{2} = 9$."
            ]
          },
          {
            kind: "QC", title: "Question 2 · Quantitative Comparison",
            context: "In triangle ABC, G is the centroid and M is the midpoint of BC. AG = 10.",
            quantityA: "GM",
            quantityB: "5",
            correct: "C",
            steps: [
              "The centroid splits the median $AM$ in a 2:1 ratio, so $AG:GM = 2:1$.",
              "$GM = \\frac{AG}{2} = \\frac{10}{2} = 5$.",
              "Both quantities equal 5."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch20-l7", title: "Triangle Area, Inequality & Classification", video: { id: "5zuU0UiQOf4", title: "Heron's formula (example and proof)", channel: "bprp math basics" },
      blocks: [
        { type: "html", content: "<p><em>Scope note: the triangle inequality and classifying triangles by sides and angles are core GRE topics, expect them on Quantitative Comparison questions. Heron's Formula is not official ETS content, but it is a fast backup when you know all three sides and have no height to work with.</em></p>" },
        { type: "html", content: "<h4>Heron's Formula</h4><p>When you know all three sides $a$, $b$, $c$ but not the height, you can still find the area:</p>$$s = \\frac{a+b+c}{2} \\quad \\text{(the semiperimeter)}$$$$\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}$$<p>No height or angle required, just the three side lengths.</p>" },
        { type: "table", headers: ["What you know", "Area formula"], rows: [
          ["Base and height", "$\\frac{1}{2} \\times \\text{base} \\times \\text{height}$"],
          ["Two sides and the included angle", "$\\frac{1}{2}ab\\sin C$"],
          ["All three sides", "Heron's Formula: $\\sqrt{s(s-a)(s-b)(s-c)}$"],
          ["All three sides and the circumradius $R$", "$\\frac{abc}{4R}$"],
          ["All three sides and the inradius $r$", "$rs$, where $s$ is the semiperimeter"]
        ]},
        { type: "html", content: "<h4>The Triangle Inequality</h4><p>Three lengths can only form a triangle if the sum of any two sides is greater than the third:</p>$$a + b > c, \\quad b + c > a, \\quad a + c > b$$<p>In practice, once you know two sides, the third must fall strictly between their difference and their sum: if $a=7$ and $b=10$, then $3 < c < 17$.</p><h4>Exterior Angle Theorem</h4><p>An exterior angle of a triangle equals the sum of the two non-adjacent (remote) interior angles, and it is always greater than either one alone.</p>" },
        { type: "table", headers: ["Classify by sides", "Meaning"], rows: [
          ["Scalene", "No sides equal, no angles equal."],
          ["Isosceles", "Exactly two sides equal, and the two angles opposite them are equal too."],
          ["Equilateral", "All three sides equal, all three angles are 60°. Area $= \\frac{\\sqrt3}{4}a^2$, and the circumradius is always exactly double the inradius."]
        ]},
        { type: "table", headers: ["Classify by angles", "Meaning"], rows: [
          ["Acute", "All three angles under 90°."],
          ["Right", "One angle is exactly 90°; the Pythagorean theorem applies."],
          ["Obtuse", "One angle is over 90°."]
        ]},
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question 1 · Multiple Choice",
            context: "A triangle has sides 5, 6, and 7.",
            options: [ {key:"A", text:"$\\sqrt{60}$"}, {key:"B", text:"$6\\sqrt6$"}, {key:"C", text:"18"}, {key:"D", text:"$\\sqrt{216}$"}, {key:"E", text:"21"} ],
            correct: "B",
            steps: [
              "$s = \\frac{5+6+7}{2} = 9$.",
              "Area $= \\sqrt{9(9-5)(9-6)(9-7)} = \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = 6\\sqrt6$."
            ]
          },
          {
            kind: "QC", title: "Question 2 · Quantitative Comparison",
            context: "A triangle has two sides of length 4 and 9.",
            quantityA: "The greatest possible integer length of the third side",
            quantityB: "12",
            correct: "C",
            steps: [
              "By the triangle inequality, the third side must be less than $4 + 9 = 13$.",
              "The largest integer strictly less than 13 is 12.",
              "Both quantities equal 12."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch20-l8", title: "Basic Trigonometry", video: { id: "WFH_7n7hpHo", title: "Trigonometry | SOH CAH TOA | Sin, Cos, Tan", channel: "Cognito" },
      widget: "trigRatioExplorer",
      blocks: [
        { type: "html", content: "<p><em>Scope note: the GRE does not test trigonometry directly, no sin, cos, or tan questions will appear. This lesson is here because understanding these ratios makes special right triangles click faster, and it carries straight over if you are also prepping for the GMAT or another test that does use trig.</em></p>" },
        { type: "html", content: "<h4>The Three Basic Ratios</h4><p>In a right triangle, pick one of the non-right angles and call it $\\theta$. Every side gets a name relative to that angle: the side across from it is <strong>opposite</strong>, the side next to it (that is not the hypotenuse) is <strong>adjacent</strong>, and the longest side is the <strong>hypotenuse</strong>.</p>$$\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} \\qquad \\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} \\qquad \\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$$<p><strong>SOH-CAH-TOA</strong> is the standard memory aid: Sine is Opposite over Hypotenuse, Cosine is Adjacent over Hypotenuse, Tangent is Opposite over Adjacent.</p>" },
        { type: "table", headers: ["θ", "sin θ", "cos θ", "tan θ"], rows: [
          ["30°", "1/2", "√3/2", "1/√3"],
          ["45°", "1/√2", "1/√2", "1"],
          ["60°", "√3/2", "1/2", "√3"]
        ]},
        { type: "html", content: "<h4>Reciprocal Functions and the Pythagorean Identity</h4>$$\\csc(\\theta) = \\frac{1}{\\sin(\\theta)} \\qquad \\sec(\\theta) = \\frac{1}{\\cos(\\theta)} \\qquad \\cot(\\theta) = \\frac{1}{\\tan(\\theta)}$$<p>And for any angle:</p>$$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$$" },
        { type: "html", content: "<h4>Law of Sines and Law of Cosines</h4><p>These extend trig ratios beyond right triangles, to any triangle:</p>$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R \\quad \\text{(Law of Sines, R = circumradius)}$$$$c^2 = a^2 + b^2 - 2ab\\cos C \\quad \\text{(Law of Cosines)}$$<p>Use the Law of Cosines when you know two sides and the included angle, or all three sides and need an angle. Use the Law of Sines when you know an angle-side pair plus one more piece of information.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question 1 · Multiple Choice",
            context: "In a right triangle, the side opposite a 30° angle has length 5. What is the length of the hypotenuse?",
            options: [ {key:"A", text:"5"}, {key:"B", text:"$5\\sqrt2$"}, {key:"C", text:"$5\\sqrt3$"}, {key:"D", text:"10"}, {key:"E", text:"$10\\sqrt3$"} ],
            correct: "D",
            steps: [
              "$\\sin(30°) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{\\text{hyp}}$.",
              "$\\sin(30°) = \\frac12$, so $\\frac12 = \\frac{5}{\\text{hyp}}$, giving hyp $= 10$."
            ]
          },
          {
            kind: "QC", title: "Question 2 · Quantitative Comparison",
            context: "θ is an angle strictly between 0° and 90°.",
            quantityA: "$\\sin^2(\\theta) + \\cos^2(\\theta)$",
            quantityB: "1",
            correct: "C",
            steps: [
              "The Pythagorean identity holds for every angle: $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ always.",
              "Both quantities equal 1, regardless of the specific value of θ."
            ]
          }
        ]}
      ]
    }
  ]
},

];

if (typeof window !== "undefined") window.GRE_MATH_CHAPTERS = GRE_MATH_CHAPTERS;
if (typeof module !== "undefined") module.exports = { GRE_MATH_CHAPTERS };
