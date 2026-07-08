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
      id: "ch1-l1", title: "Types of Numbers",
      widget: "numberSystemFlowchart",
      blocks: [
        { type: "html", content: "<p>Click any box in the diagram above to flip it and reveal its definition. Every number on the GRE belongs somewhere on this tree — knowing the tree cold means you'll never be tricked by a \"which of the following is irrational\" question again.</p>" },
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
      id: "ch1-l2", title: "Divisibility Rules",
      blocks: [
        { type: "html", content: "<p>Memorize these — they turn 30-second long division into 3-second pattern checks.</p>" },
        { type: "table", headers: ["Divisor", "Rule"], rows: [
          ["2", "Last digit is even (0, 2, 4, 6, 8)."],
          ["3", "Sum of all digits is divisible by 3."],
          ["4", "Last two digits form a number divisible by 4."],
          ["5", "Last digit is 0 or 5."],
          ["6", "Divisible by both 2 and 3."],
          ["7", "Double the last digit, subtract it from the rest; repeat until you can tell if the result is divisible by 7."],
          ["8", "Last three digits form a number divisible by 8."],
          ["9", "Sum of all digits is divisible by 9."],
          ["10", "Last digit is 0."],
          ["11", "Alternating sum of digits (from the right) is divisible by 11."],
          ["12", "Divisible by both 3 and 4."]
        ]},
        { type: "reveal", label: "Try it: Is 81,925,361,407 divisible by 11?", prompt: "Use the alternating-digit-sum rule for 11.", answer: "No. From the right, the alternating sum of digits is $(7+4+6+5+9+8) - (0+1+3+2+1) = 39 - 7 = 32$. Since $32$ is not a multiple of $11$, the number is **not** divisible by 11." },
        { type: "reveal", label: "Try it: Is 10,000,000,032 divisible by 44?", prompt: "44 = 4 × 11 — check both.", answer: "Yes. Divisible by 4: the last two digits, \"32\", are divisible by 4. Divisible by 11: the alternating digit sum from the right is $(2+0+0+0+0+1) - (3+0+0+0+0) = 3 - 3 = 0$, which is a multiple of 11. Since it's divisible by both 4 and 11, it's divisible by 44." }
      ]
    },
    {
      id: "ch1-l3", title: "Factorization",
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
              "$32 = 2^5$. Since $x^2$ is a perfect square, every exponent in its prime factorization must be even — so $x^2$ must actually contain at least six factors of 2 (the next even number after 5), meaning $x^2 \\geq 2^6 \\cdot m$.",
              "That gives $x \\geq 2^3 \\cdot \\sqrt{m} = 8 \\cdot (\\text{integer})$, so $x$ must be a multiple of 8.",
              "Any multiple of 8 is automatically a multiple of 4 as well — so both 8 and 4 are guaranteed factors of $x$."
            ]
          },
          {
            kind: "MS", title: "Question 3 · Multiple Selection",
            context: "If $p$ and $q$ are distinct positive integers both divisible by 3, which of the following expressions must be divisible by 9? Indicate all such expressions.",
            options: [ {key:"A", text:"p + q"}, {key:"B", text:"p − q"}, {key:"C", text:"p × q"}, {key:"D", text:"p² + q²"}, {key:"E", text:"3p + 6q"} ],
            correct: ["C","D","E"],
            steps: [
              "Let $p = 3a$ and $q = 3b$ for integers $a, b$.",
              "A: $p+q = 3(a+b)$ — divisible by 3 but not guaranteed to be divisible by 9 (e.g. $p=3, q=12 \\Rightarrow 15$).",
              "B: $p - q = 3(a-b)$ — same issue, not always divisible by 9.",
              "C: $p \\times q = 9ab$ — explicitly has a factor of 9. Always divisible.",
              "D: $p^2+q^2 = 9a^2+9b^2 = 9(a^2+b^2)$ — always divisible by 9.",
              "E: $3p+6q = 9a+18b = 9(a+2b)$ — always divisible by 9."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch1-l4", title: "Remainders",
      blocks: [
        { type: "html", content: "<h4>The Remainder Formula</h4><p>For any integer dividend $A$ divided by a positive integer divisor $D$:</p>$$A = D \\cdot Q + R, \\quad 0 \\leq R < D$$" },
        { type: "html", content: "<h4>Arithmetic of Remainders</h4><p>If $A \\div D$ leaves remainder $R_1$ and $B \\div D$ leaves remainder $R_2$:</p><ul><li><strong>Addition:</strong> $(A+B) \\div D$ leaves the same remainder as $(R_1+R_2) \\div D$.</li><li><strong>Multiplication:</strong> $(A \\times B) \\div D$ leaves the same remainder as $(R_1 \\times R_2) \\div D$.</li><li><strong>Powers:</strong> $A^k \\div D$ leaves the same remainder as $(R_1)^k \\div D$.</li></ul><p class='note'>If the resulting $R_1+R_2$ or $R_1 \\times R_2$ is $\\geq D$, divide that new number by $D$ again to get the true final remainder.</p>" },
        { type: "html", content: "<h4>Cyclicity</h4><p>The GRE loves large exponents (e.g. $7^{43} \\div 5$). Find the repeating remainder pattern instead of computing the whole power:</p><p>$7^1 \\div 5 \\Rightarrow R=2$, &nbsp; $7^2 \\div 5 \\Rightarrow R=4$, &nbsp; $7^3 \\div 5 \\Rightarrow R=3$, &nbsp; $7^4 \\div 5 \\Rightarrow R=1$ — pattern repeats every 4 powers: 2, 4, 3, 1.</p>" },
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
              "Test C: if $x,y$ both odd, $x-y$ = Even, so $z$ must be Odd — meaning C's claim (\"z is even\") is false.",
              "Test D: if $z$ is even, $(x-y)$ must be Odd, meaning $x,y$ have different parities — the opposite of D's claim.",
              "Test A: if $x,y$ both even, $x-y$ = Even, so $z$ must be Odd — contradicts A.",
              "Test B: if $z$ is odd, $(x-y)$ must be Even, meaning $x,y$ share the same parity — contradicts B.",
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
      id: "ch2-l1", title: "Exponents and Roots — Advanced Concepts",
      blocks: [
        { type: "html", content: "<h4>The Negative & Fractional Base Traps</h4><ul><li>$(-x)^n$ vs. $-x^n$: $(-3)^2 = 9$, but $-3^2 = -9$. The negative is only included if it's explicitly inside parentheses.</li><li><strong>Parity of exponents:</strong> if $x^n = y^n$ and $n$ is even, then $x=y$ or $x=-y$. If $n$ is odd, then $x=y$.</li><li><strong>Bases between 0 and 1:</strong> raising $x$ to a higher power <em>decreases</em> its value when $0<x<1$ (e.g. $0.5^2 = 0.25 < 0.5$).</li></ul>" },
        { type: "html", content: "<h4>Factoring Out Large Exponents</h4><p>You cannot combine powers when adding/subtracting terms with large exponents — factor out the lowest power instead.</p><p><em>Simplify:</em> $3^{15} + 3^{16} + 3^{17}$</p>$$3^{15}(1 + 3 + 3^2) = 3^{15}(13)$$" },
        { type: "html", content: "<h4>The Principal Root Rule</h4><p>On the GRE, $\\sqrt{x}$ exclusively denotes the positive (principal) square root.</p><ul><li>If $x^2 = 16$, then $x = \\pm 4$.</li><li>If $x = \\sqrt{16}$, then $x = 4$ only.</li><li>Consequently, $\\sqrt{x^2} = |x|$ — it does <strong>not</strong> simplify to $x$ unless $x \\geq 0$ is guaranteed.</li></ul>" },
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
              "Testing each integer choice (−2, −1, 0, 1, 2) shows none satisfy the inequality — $x=0$ is undefined, and every other integer fails.",
              "The inequality only holds for a positive fraction less than 1 (e.g. $x=\\tfrac12$), which no integer choice can satisfy — none of the listed options work."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch2-l2", title: "Estimation and Number Lines",
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
      id: "ch3-l1", title: "Percent Change",
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
              "So $P = 80$ — a 25% increase followed by a 20% decrease nets to exactly 0% change."
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
      id: "ch4-l1", title: "Ratios and Rates",
      blocks: [
        { type: "html", content: "<h4>Combining Ratios (The Bridge Principle)</h4><p>If two ratios share a common element, rescale so that element matches before merging.</p><p>If $A:B = 2:3$ and $B:C=4:5$ — the shared element is $B$. LCM of 3 and 4 is 12, so rescale: $A:B=8:12$ and $B:C=12:15$. Merged: $A:B:C = 8:12:15$.</p>" },
        { type: "html", content: "<h4>Advanced Work Rates</h4><p>When multiple entities work together, their individual <em>rates</em> add — not their times.</p>$$\\frac{1}{T_{\\text{combined}}} = \\frac{1}{t_1}+\\frac{1}{t_2}+\\frac{1}{t_3}+\\cdots$$" },
        { type: "practice", questions: [
          {
            kind: "MS", title: "Question · Multiple Selection",
            context: "A mixture contains liquids $X, Y, Z$ in ratio $3:5:8$. If 32 liters of the mixture are removed and replaced with 32 liters of pure liquid $Z$, which statements must be true? Indicate all that apply.",
            options: [ {key:"A", text:"The new ratio of X:Y is still 3:5."}, {key:"B", text:"The total volume of the mixture remains unchanged."}, {key:"C", text:"Liquid Z now constitutes more than 50% of the mixture."} ],
            correct: ["A","B","C"],
            steps: [
              "A: removing a portion of a uniform mixture doesn't change the relative ratio of what's left, so $X:Y$ stays $3:5$. True.",
              "B: 32 liters removed, 32 liters added back — net volume change is 0. True.",
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
      id: "ch5-l1", title: "Absolute Value",
      blocks: [
        { type: "html", content: "<h4>Geometric Definition</h4><p>$|x-a|$ represents the <strong>distance</strong> between $x$ and the fixed point $a$ on the number line.</p><p>$|x-5|\\leq 3$ means \"the distance between $x$ and 5 is at most 3\" — so $x \\in [2, 8]$.</p>" },
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
      id: "ch6-l1", title: "Terminating vs. Repeating Decimals",
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
              "A: $\\frac{9}{120}=\\frac{3}{40}$, $40=2^3\\times5$ — only 2s and 5s. Terminates.",
              "B: $45 = 3^2 \\times 5$ — repeats. C: $14=2\\times7$ — repeats. D: $70=2\\times5\\times7$ — repeats. E: $15=3\\times5$ — repeats.",
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
      id: "ch7-l1", title: "Sequences",
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
      id: "ch8-l1", title: "Advanced Base Manipulations & Sign Traps",
      blocks: [
        { type: "html", content: "<h4>The Three Critical Base Exceptions</h4><p>The rule \"if $b^x=b^y$ then $x=y$\" breaks down if:</p><ol><li>$b=1$: $1^5=1^{12}$, but $5\\neq12$.</li><li>$b=0$: $0^2=0^{33}$, but $2\\neq33$.</li><li>$b=-1$: $(-1)^2=(-1)^4=1$, but $2\\neq4$.</li></ol>" },
        { type: "html", content: "<h4>Exponential Inequalities (0 < base < 1)</h4><p>If $0<b<1$ and $b^x>b^y$, then $x<y$ — raising a fractional base to a higher power makes it <em>smaller</em>.</p><p><em>Example:</em> $(0.5)^2=0.25$ and $(0.5)^3=0.125$. Since $0.25>0.125$, the lower exponent gave the larger value.</p>" },
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
              "Since $x$ is an integer, $x \\in \\{0,1,2,3,4\\}$ — $x$ could be 0 or positive, so the relationship cannot be determined."
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
      id: "ch9-l1", title: "Splitting Middle Terms & Advanced Difference of Squares",
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
      id: "ch10-l1", title: "Compound Inequalities and Absolute Range Limits",
      blocks: [
        { type: "html", content: "<h4>Multi-Variable Product Logic</h4><ul><li>If $ab>0$, $a$ and $b$ share the same sign.</li><li>If $ab<0$, $a$ and $b$ have opposite signs.</li><li><strong>The division trap:</strong> if $a>b$, it is <em>not</em> always true that $\\frac1a<\\frac1b$ — this only holds if $a,b$ share the same sign. If $a=2, b=-3$: $\\frac12 > -\\frac13$.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "If $x < y < 0$, which statement must be true?",
            options: [ {key:"A", text:"x² < y²"}, {key:"B", text:"1/x < 1/y"}, {key:"C", text:"xy < 0"}, {key:"D", text:"x/y > 1"}, {key:"E", text:"x + y > 0"} ],
            correct: "D",
            steps: [
              "Both $x,y$ are negative and $x$ is further left (more negative). Test $x=-3, y=-2$.",
              "$\\frac{x}{y}=\\frac{-3}{-2}=1.5$ — a positive quotient of two negatives with $|x|>|y|$ always exceeds 1.",
              "A fails ($9<4$ is false), B fails ($-0.33<-0.5$ is false) — D is the only guaranteed truth."
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
      id: "ch11-l1", title: "The Discriminant & Vertex Optimization",
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
  blurb: "One, none, or infinite solutions — spotted from the coefficients alone.",
  lessons: [
    {
      id: "ch12-l1", title: "Infinite vs. Zero Solution Configurations",
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
              "Check $\\frac{C_1}{C_2}$: $\\frac{12}{20}=\\frac35$, while $\\frac{3}{-6}=-\\frac12 \\neq \\frac35$ — confirms parallel, non-coincident lines."
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
      id: "ch13-l1", title: "Matrix Setups for Weighted Mixtures",
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
      id: "ch14-l1", title: "Reflections, Midpoints, and Area Intercepts",
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
      id: "ch15-l1", title: "Fundamental Angle Mechanics",
      blocks: [
        { type: "html", content: "<h4>Exact Angular Classifications</h4><ul><li><strong>Acute:</strong> $0°<\\theta<90°$</li><li><strong>Right:</strong> $\\theta=90°$</li><li><strong>Obtuse:</strong> $90°<\\theta<180°$</li><li><strong>Straight:</strong> $\\theta=180°$</li></ul>" },
        { type: "html", content: "<h4>The \"Not Drawn to Scale\" Trap</h4><p>Unless a diagram is explicitly marked to scale, never rely on visual estimation. Trust only stated constraints, equations, and right-angle marks.</p>" },
        { type: "html", content: "<h4>Intersecting Lines</h4><ul><li><strong>Complementary angles</strong> sum to exactly $90°$.</li><li><strong>Supplementary angles (linear pairs)</strong> sum to exactly $180°$.</li><li><strong>Vertical angles</strong> (directly opposite when two lines cross) are always equal.</li><li>All angles around a single point of intersection sum to $360°$.</li></ul>" }
      ]
    },
    {
      id: "ch15-l2", title: "Parallel Lines Cut by a Transversal",
      widget: "angleHashtag",
      blocks: [
        { type: "html", content: "<p>When $l_1 \\parallel l_2$ and a transversal $T$ crosses both, 8 angles form but only <strong>two unique measures</strong> exist. Click any angle in the diagram above to see every angle that must equal it, and drag the slider to change the transversal's tilt.</p>" },
        { type: "html", content: "<h4>The Binary Angle Grouping Rule</h4><ul><li>All <strong>Group Acute</strong> angles are equal.</li><li>All <strong>Group Obtuse</strong> angles are equal.</li><li>Any acute-group angle + any obtuse-group angle is always supplementary: $\\alpha+\\beta=180°$.</li></ul>" },
        { type: "html", content: "<h4>Structural Categorizations</h4><ul><li><strong>Alternate interior angles</strong> (opposite sides of the transversal, between the parallel lines) are equal.</li><li><strong>Alternate exterior angles</strong> (opposite sides, outside the parallel lines) are equal.</li><li><strong>Corresponding angles</strong> (matching relative position at each intersection) are equal.</li><li><strong>Consecutive interior angles</strong> (same side, between the lines) are supplementary.</li></ul>" },
        { type: "html", content: "<h4>Proving Parallelism</h4><p>Never assume two lines are parallel just because they look it. You can only conclude $l_1 \\parallel l_2$ if:</p><ol><li>A pair of alternate interior angles is equal, <strong>or</strong></li><li>A pair of corresponding angles is equal, <strong>or</strong></li><li>A pair of consecutive interior angles sums to $180°$.</li></ol><p class='note'><strong>Auxiliary line shortcut:</strong> for a \"crook\" or \"V-shape\" between two parallel lines, draw a third auxiliary parallel line through the vertex of the bend — this splits the unknown angle into two solvable parts.</p>" },
        { type: "practice", questions: [
          {
            kind: "QC", title: "Question · Quantitative Comparison",
            context: "Lines $L_1$ and $L_2$ are cut by transversal $T$. Angle 1 and Angle 2 are consecutive interior angles, with Angle 1 $= 2x+10$ and Angle 2 $= 3x-15$.",
            quantityA: "$x$",
            quantityB: "37",
            correct: "D",
            steps: [
              "Check the given constraint: does the problem state $L_1 \\parallel L_2$?",
              "It only says the lines are \"cut by transversal $T$\" — parallelism is never confirmed.",
              "Without that guarantee, consecutive interior angles don't have to sum to $180°$, so $x$ could be many values — the relationship cannot be determined."
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
      id: "ch16-l1", title: "Central Tendency",
      blocks: [
        { type: "html", content: "<h4>The Algebraic Mean</h4>$$\\mu = \\frac{\\sum_{i=1}^{n}x_i}{n} \\quad\\Longrightarrow\\quad \\text{Sum} = \\text{Mean}\\times n$$<p class='note'><strong>Strategy:</strong> when tracking changes to an average, convert means into <em>sums</em> — sums can be added and subtracted algebraically, averages cannot.</p>" },
        { type: "html", content: "<h4>The Weighted Mean</h4><p>Combining two groups of sizes $n_1, n_2$ with averages $M_1, M_2$:</p>$$M_c = \\frac{n_1 M_1 + n_2 M_2}{n_1+n_2}$$<p><strong>Balancing rule:</strong> $M_c$ always lies closer to the average of the larger group.</p>" },
        { type: "html", content: "<h4>Median & Mode</h4><ul><li><strong>Median</strong> (odd $n$): the value at position $\\frac{n+1}{2}$.</li><li><strong>Median</strong> (even $n$): the average of the values at positions $\\frac{n}{2}$ and $\\frac{n}{2}+1$.</li><li><strong>Mode:</strong> the most frequent value — a set can have zero, one, or many modes.</li></ul>" },
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
              "$(1+2+3)+35+36+x_6+80=280 \\Rightarrow x_6=123$ — but $x_6$ must stay below $x_7=80$, so 123 isn't achievable.",
              "Since all integers are distinct and $x_6<x_7=80$, the true ceiling is $x_6=79$. Check it's achievable: with $x_6=79$, the remaining three values $x_1,x_2,x_3$ must sum to $280-(35+36+79+80)=50$ — easily done with e.g. 10, 15, 25."
            ]
          }
        ]}
      ]
    },
    {
      id: "ch16-l2", title: "Dispersion",
      blocks: [
        { type: "html", content: "<h4>Range and IQR</h4><ul><li><strong>Range</strong> $=$ Max $-$ Min. Very sensitive to outliers.</li><li><strong>Quartiles:</strong> $Q_1$ (25th percentile), $Q_2$ (median), $Q_3$ (75th percentile).</li><li><strong>IQR</strong> $= Q_3-Q_1$ — spread of the middle 50%, resistant to outliers.</li></ul>" },
        { type: "html", content: "<h4>Standard Deviation — Structural Rules</h4><p>You'll almost never compute $\\sigma$ from its formula directly. Instead, master these:</p><ul><li><strong>Shifting:</strong> adding/subtracting a constant $k$ to every term shifts the mean by $k$ but leaves $\\sigma$ <strong>unchanged</strong>.</li><li><strong>Scaling:</strong> multiplying every term by a positive constant $k$ multiplies both the mean and $\\sigma$ by $k$.</li><li><strong>Clustering:</strong> the closer data points sit to the mean, the smaller $\\sigma$.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Question · Multiple Choice",
            context: "Data set X has 5 numbers with mean μ and standard deviation σ. Set Y is formed by multiplying each term in X by −3, then adding 10. What is the standard deviation of Y?",
            options: [ {key:"A", text:"σ"}, {key:"B", text:"3σ"}, {key:"C", text:"−3σ"}, {key:"D", text:"3σ + 10"}, {key:"E", text:"−3σ + 10"} ],
            correct: "B",
            steps: [
              "Multiplying by $-3$ scales the spread by $|-3|=3$ (standard deviation is never negative). New $\\sigma = 3\\sigma$.",
              "Adding 10 shifts every point equally — zero effect on spread.",
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
      id: "ch17-l1", title: "Deconstructing Advanced Charts",
      widget: "boxplotCompare",
      blocks: [
        { type: "html", content: "<h4>Boxplots (5-Number Summary)</h4><p>A boxplot splits data into four quartile zones, each holding exactly <strong>25% of the data points</strong> — regardless of the zone's physical width.</p><ul><li><strong>Whiskers</strong> extend to the min and max.</li><li><strong>The box</strong> spans $Q_1$ to $Q_3$; its width is the IQR.</li><li><strong>The internal line</strong> marks the median ($Q_2$).</li></ul><p>Hover over either boxplot above to see its exact five-number summary.</p>" },
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
              "Statement C: the zone from $Q_1$ to $Q_2$ always holds 25% of the data, and so does $Q_2$ to $Q_3$ — same pool, same class, so the actual counts match. True.",
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
      id: "ch18-l1", title: "Permutations, Combinations, and Group Constraints",
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
            context: "40% of a population has high blood pressure. Of those, 70% eat a high-sodium diet. Of those without high blood pressure, 20% eat a high-sodium diet. A random person eats a high-sodium diet — what's the probability they have high blood pressure?",
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
      id: "ch19-l1", title: "The Empirical Rule and Z-Score Mechanics",
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

];

if (typeof module !== "undefined") module.exports = { GRE_MATH_CHAPTERS };
