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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "Which of the following numbers is irrational?",
          options: [ {key:"A", text:"$\\sqrt{49}$"}, {key:"B", text:"$\\sqrt{50}$"}, {key:"C", text:"$0.7$"}, {key:"D", text:"$-3$"}, {key:"E", text:"$7/2$"} ],
          correct: "B",
          steps: ["$\\sqrt{49}=7$, an integer, so it's rational. $0.7$, $-3$, and $7/2$ are all fractions of integers, so they're rational.", "$\\sqrt{50}=5\\sqrt2$, and since 50 is not a perfect square, its square root is irrational."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "How many prime numbers are there between 1 and 20, inclusive?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"7"}, {key:"C", text:"8"}, {key:"D", text:"9"}, {key:"E", text:"10"} ],
          correct: "C",
          steps: ["List primes between 1 and 20: 2, 3, 5, 7, 11, 13, 17, 19.", "That's 8 primes."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "Which of the following is NOT a whole number?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"-4"}, {key:"C", text:"12"}, {key:"D", text:"1"}, {key:"E", text:"100"} ],
          correct: "B",
          steps: ["Whole numbers are the non-negative integers: 0, 1, 2, 3, ...", "$-4$ is negative, so it is an integer but not a whole number."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "If $x$ is a positive integer with exactly two positive factors, which of the following must be true about $x$?",
          options: [ {key:"A", text:"$x$ is even."}, {key:"B", text:"$x$ is odd."}, {key:"C", text:"$x$ is composite."}, {key:"D", text:"$x$ is prime."}, {key:"E", text:"$x$ is a perfect square."} ],
          correct: "D",
          steps: ["A positive integer with exactly two positive factors (1 and itself) is, by definition, prime.", "This is true regardless of whether $x$ is even or odd (2 is the only even prime), so D is the only statement that must hold."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "Which of the following best describes the number $-\\frac{9}{3}$?",
          options: [ {key:"A", text:"Irrational only"}, {key:"B", text:"Integer but not a whole number"}, {key:"C", text:"Whole number"}, {key:"D", text:"Natural number"}, {key:"E", text:"Not a real number"} ],
          correct: "B",
          steps: ["$-\\frac{9}{3} = -3$, which is an integer.", "Since $-3$ is negative, it is not a whole number (whole numbers are non-negative) and not a natural number, so B is correct."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "Which of the following numbers is composite?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"2"}, {key:"C", text:"31"}, {key:"D", text:"51"}, {key:"E", text:"53"} ],
          correct: "D",
          steps: ["1 is neither prime nor composite. 2, 31, and 53 are all prime (none has a factor besides 1 and itself).", "$51 = 3 \\times 17$, which has more than two factors, so it is composite."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "If $n$ is an odd integer, which of the following must be an odd integer?",
          options: [ {key:"A", text:"$n+1$"}, {key:"B", text:"$2n$"}, {key:"C", text:"$n+3$"}, {key:"D", text:"$n^2+1$"}, {key:"E", text:"$3n$"} ],
          correct: "E",
          steps: ["$n$ is odd. $n+1$ = odd + even shift = even. $2n$ = even (any integer times 2). $n+3$ = odd + odd = even.", "$n^2$ is odd (odd times odd), so $n^2+1$ = odd + 1 = even.", "$3n$ = odd $\\times$ odd = odd. This is the only option guaranteed to stay odd."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "Which of the following is equal to a terminating decimal?",
          options: [ {key:"A", text:"$1/3$"}, {key:"B", text:"$1/6$"}, {key:"C", text:"$1/7$"}, {key:"D", text:"$1/8$"}, {key:"E", text:"$1/9$"} ],
          correct: "D",
          steps: ["A fraction in lowest terms terminates as a decimal exactly when its denominator's only prime factors are 2 and/or 5.", "$8 = 2^3$, so $1/8 = 0.125$ terminates. The denominators 3, 6, 7, and 9 all contain a prime factor other than 2 or 5 (3, 3, 7, 3 respectively), so those give repeating decimals."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "How many even integers are there between 10 and 30, exclusive of both endpoints?",
          options: [ {key:"A", text:"8"}, {key:"B", text:"9"}, {key:"C", text:"10"}, {key:"D", text:"11"}, {key:"E", text:"19"} ],
          correct: "B",
          steps: ["The even integers strictly between 10 and 30 are 12, 14, 16, 18, 20, 22, 24, 26, 28.", "Counting them: $(28-12)/2 + 1 = 16/2+1 = 8+1 = 9$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "If $a$ is a nonzero integer and $b$ is a nonzero integer, which of the following is guaranteed to be a rational number?",
          options: [ {key:"A", text:"$\\sqrt{a}$"}, {key:"B", text:"$a/b$"}, {key:"C", text:"$\\sqrt{a/b}$"}, {key:"D", text:"$a^{1/2}$"}, {key:"E", text:"$\\pi \\cdot a$"} ],
          correct: "B",
          steps: ["By definition, a rational number is any number expressible as a ratio of two integers.", "Since $a$ and $b$ are both integers with $b \\neq 0$, the quotient $a/b$ is always rational. The square-root options are not guaranteed rational (e.g., $a=2$ gives $\\sqrt2$), and $\\pi \\cdot a$ is irrational for any nonzero integer $a$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "How many distinct prime numbers are less than 15?",
          correct: 6,
          steps: ["Primes less than 15: 2, 3, 5, 7, 11, 13.", "That is 6 primes."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "What is the smallest positive composite number?",
          correct: 4,
          steps: ["1 is neither prime nor composite. 2 and 3 are prime.", "4 has factors 1, 2, and 4, so it is the smallest composite number."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "How many odd integers are there from 1 to 41, inclusive?",
          correct: 21,
          steps: ["The odd integers are 1, 3, 5, ..., 41, forming an arithmetic sequence with common difference 2.", "Number of terms $= \\frac{41-1}{2}+1 = 20+1 = 21$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "$x$ is the smallest prime number greater than 40. What is the value of $x$?",
          correct: 41,
          steps: ["Check integers above 40: 41 is not divisible by 2, 3, 5, or any prime up to $\\sqrt{41}\\approx6.4$ (so checking 2, 3, 5 suffices).", "41 is prime, so $x=41$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "How many positive even integers less than 100 are also multiples of 3?",
          correct: 16,
          steps: ["Positive integers less than 100 that are multiples of both 2 and 3 are multiples of 6.", "Multiples of 6 less than 100: 6, 12, ..., 96. Number of terms $= 96/6 = 16$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "What is the sum of the smallest positive integer and the smallest positive prime number?",
          correct: 3,
          steps: ["The smallest positive integer is 1.", "The smallest positive prime is 2.", "$1 + 2 = 3$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "How many integers between 1 and 100, inclusive, are perfect squares?",
          correct: 10,
          steps: ["The perfect squares in this range are $1^2, 2^2, \\ldots, 10^2$ since $10^2=100$ and $11^2=121$ exceeds 100.", "That gives 10 perfect squares."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "If $n$ is the greatest prime number less than 50, what is the units digit of $n$?",
          correct: 7,
          steps: ["Check integers just below 50: 49 = $7^2$ (composite), 48 (even), 47 is prime (not divisible by 2, 3, 5; $\\sqrt{47}<7$).", "So $n=47$, and its units digit is 7."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following numbers are irrational? Select all that apply.",
          options: [ {key:"A", text:"$\\sqrt{16}$"}, {key:"B", text:"$\\sqrt{18}$"}, {key:"C", text:"$\\pi$"}, {key:"D", text:"$0.121212...$"}, {key:"E", text:"$\\sqrt{7}$"} ],
          correct: ["B", "C", "E"],
          steps: [
            "A: $\\sqrt{16}=4$, rational (integer).",
            "B: $\\sqrt{18}=3\\sqrt2$, irrational since 18 is not a perfect square.",
            "C: $\\pi$ is a well-known irrational number.",
            "D: $0.121212...$ is a repeating decimal, equal to $12/99=4/33$, which is rational.",
            "E: $\\sqrt7$ is irrational since 7 is not a perfect square.",
            "Irrational: B, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "If $x$ is an integer, which of the following could be true? Select all that apply.",
          options: [ {key:"A", text:"$x$ is both even and prime."}, {key:"B", text:"$x$ is both odd and composite."}, {key:"C", text:"$x$ is both prime and composite."}, {key:"D", text:"$x$ is both negative and prime."}, {key:"E", text:"$x$ is both a whole number and a natural number."} ],
          correct: ["A", "B", "E"],
          steps: [
            "A: $x=2$ is even and prime, so this is possible.",
            "B: $x=9$ is odd and composite ($9=3\\times3$), so this is possible.",
            "C: By definition, prime numbers have exactly two factors and composite numbers have more than two; no number can be both.",
            "D: Primes are defined only among positive integers greater than 1, so a negative number cannot be prime.",
            "E: $x=5$ is both a whole number and a natural number, so this is possible.",
            "Possible: A, B, E."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following expressions always produce a rational number when $a$ and $b$ are nonzero integers? Select all that apply.",
          options: [ {key:"A", text:"$a + b$"}, {key:"B", text:"$a/b$"}, {key:"C", text:"$\\sqrt{a}$"}, {key:"D", text:"$a \\times b$"}, {key:"E", text:"$a - b$"} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "A: sum of two integers is always an integer, hence rational.",
            "B: quotient of two integers (with nonzero denominator) is rational by definition.",
            "C: $\\sqrt{a}$ is not guaranteed rational, e.g. $a=2$ gives $\\sqrt2$, irrational.",
            "D: product of two integers is always an integer, hence rational.",
            "E: difference of two integers is always an integer, hence rational.",
            "Always rational: A, B, D, E."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following integers are perfect squares? Select all that apply.",
          options: [ {key:"A", text:"36"}, {key:"B", text:"48"}, {key:"C", text:"64"}, {key:"D", text:"90"}, {key:"E", text:"121"} ],
          correct: ["A", "C", "E"],
          steps: [
            "A: $36=6^2$, a perfect square.",
            "B: $48$ is between $6^2=36$ and $7^2=49$, not a perfect square.",
            "C: $64=8^2$, a perfect square.",
            "D: $90$ is between $9^2=81$ and $10^2=100$, not a perfect square.",
            "E: $121=11^2$, a perfect square.",
            "Perfect squares: A, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "$n$ is a positive integer such that $n$ is a multiple of 4. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$n$ is even."}, {key:"B", text:"$n$ is a multiple of 2."}, {key:"C", text:"$n$ is a multiple of 8."}, {key:"D", text:"$n$ is composite."}, {key:"E", text:"$n^2$ is a multiple of 16."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "Since $n$ is a multiple of 4, write $n=4k$ for some positive integer $k$.",
            "A: $4k$ is always even, true. B: a multiple of 4 is automatically a multiple of 2, true.",
            "C: not guaranteed, e.g. $n=4$ is a multiple of 4 but not of 8, so C is false.",
            "D: $n=4k$ has at least factors $1,2,4,n$ (for $k\\ge1$, $n\\ge4$), so $n$ always has more than two factors, meaning it's composite; true (note $n$ can't equal 1 or a prime since it's a multiple of 4).",
            "E: $n^2=16k^2$, which is always a multiple of 16, true.",
            "Must be true: A, B, D, E."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following statements about the number 0 are true? Select all that apply.",
          options: [ {key:"A", text:"0 is an even number."}, {key:"B", text:"0 is a whole number."}, {key:"C", text:"0 is a natural number."}, {key:"D", text:"0 is a positive number."}, {key:"E", text:"0 is a rational number."} ],
          correct: ["A", "B", "E"],
          steps: [
            "A: 0 is divisible by 2 (since $0 = 2 \\times 0$), so it is even.",
            "B: whole numbers are $\\{0, 1, 2, 3, ...\\}$, so 0 qualifies.",
            "C: natural numbers, in the standard GRE convention, start at 1, so 0 is not a natural number.",
            "D: 0 is neither positive nor negative.",
            "E: $0 = 0/1$, a ratio of integers, so 0 is rational.",
            "True statements: A, B, E."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "Consider the integers from 2 through 9, inclusive.",
          quantityA: "The number of prime numbers in this range",
          quantityB: "The number of composite numbers in this range",
          correct: "C",
          steps: ["The integers from 2 to 9 are 2, 3, 4, 5, 6, 7, 8, 9.", "Primes among them: 2, 3, 5, 7, a total of 4.", "Composites among them: 4, 6, 8, 9, a total of 4.", "Both quantities equal 4."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$n$ is an odd integer greater than 1.",
          quantityA: "$n^2$",
          quantityB: "$n + 2$",
          correct: "A",
          steps: ["Since $n>1$ and odd, the smallest case is $n=3$: Quantity A $=9$, Quantity B $=5$, so A is greater.", "Try $n=5$: Quantity A $=25$, Quantity B $=7$, A is still greater.", "In general, $n^2-(n+2)=n^2-n-2=(n-2)(n+1)$, which is positive for all $n>2$ and also checks out directly at $n=3$ (9 vs 5). Quantity A is always greater."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$x$ and $y$ are integers, and $x/y$ is an integer.",
          quantityA: "Whether $x/y$ is rational",
          quantityB: "True",
          correct: "C",
          steps: ["Any integer can be expressed as itself divided by 1, so every integer is rational by definition.", "Since $x/y$ is given to be an integer, it is automatically rational.", "Quantity A (True) equals Quantity B (True)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "$p$ is the number of distinct positive factors of 12. $q$ is the number of distinct positive factors of 18.",
          quantityA: "$p$",
          quantityB: "$q$",
          correct: "C",
          steps: ["Factors of 12: 1, 2, 3, 4, 6, 12, so $p=6$.", "Factors of 18: 1, 2, 3, 6, 9, 18, so $q=6$.", "Both quantities equal 6."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$a$ = the smallest positive even integer. $b$ = the smallest positive odd integer that is composite.",
          quantityA: "$a$",
          quantityB: "$b$",
          correct: "B",
          steps: ["The smallest positive even integer is $a=2$.", "The smallest positive odd composite is 9 (since 1, 3, 5, 7 are not composite: 1 is neither prime nor composite, and 3, 5, 7 are prime), so $b=9$.", "Quantity B (9) is greater than Quantity A (2)."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$x$ is an irrational number and $x > 0$.",
          quantityA: "$\\sqrt{x^2}$",
          quantityB: "A rational number",
          correct: "D",
          steps: ["$\\sqrt{x^2}=x$ since $x>0$, so Quantity A equals $x$, which is irrational by the given condition.", "Quantity B states \"a rational number\" as an unspecified rational value, so we are comparing an irrational number to an unspecified rational number.", "Since Quantity B could be any rational number (larger or smaller than $x$), the relationship cannot be determined from the given information."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "Which of the following numbers is divisible by 4?",
          options: [ {key:"A", text:"1,314"}, {key:"B", text:"2,226"}, {key:"C", text:"3,548"}, {key:"D", text:"4,750"}, {key:"E", text:"5,102"} ],
          correct: "C",
          steps: ["A number is divisible by 4 exactly when its last two digits form a number divisible by 4.", "1,314 → 14 (not div. by 4). 2,226 → 26 (not div. by 4). 3,548 → 48, and $48 \\div 4 = 12$, divisible. 4,750 → 50 (not div. by 4). 5,102 → 02 (not div. by 4).", "Only 3,548 works."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "What is the smallest digit $d$ that can be placed in the blank so that $52\\_$ is divisible by 3?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"4"} ],
          correct: "C",
          steps: ["The digit sum so far is $5+2=7$. We need $7+d$ to be a multiple of 3.", "Testing $d=0$: sum 7, not a multiple of 3. Testing $d=1$: sum 8, not a multiple of 3. Testing $d=2$: sum 9, which is a multiple of 3.", "The smallest valid digit is 2, giving the number 522, and $522\\div3=174$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "Which of the following numbers is divisible by both 3 and 4 (that is, by 12)?",
          options: [ {key:"A", text:"144"}, {key:"B", text:"154"}, {key:"C", text:"164"}, {key:"D", text:"174"}, {key:"E", text:"184"} ],
          correct: "A",
          steps: ["Check divisibility by 4 (last two digits) and 3 (digit sum) for each option.", "144: last two digits 44, $44\\div4=11$ ✓. Digit sum $1+4+4=9$, divisible by 3 ✓. So 144 is divisible by 12.", "154: 54÷4 is not an integer, fails. 164: digit sum 11, not div by 3, fails. 174: last two digits 74, not div by 4, fails. 184: digit sum 13, not div by 3, fails."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "A number $N$ is divisible by 6 and by 5. Which of the following must also be a divisor of $N$?",
          options: [ {key:"A", text:"4"}, {key:"B", text:"7"}, {key:"C", text:"9"}, {key:"D", text:"15"}, {key:"E", text:"25"} ],
          correct: "D",
          steps: ["If $N$ is divisible by 6 and by 5, then $N$ must be divisible by the LCM of 6 and 5.", "$\\text{LCM}(6,5)=30$ since they share no common factors.", "Any divisor of 30 must also divide $N$. Checking the choices: 15 divides 30 (since $30=2\\times15$), so 15 must divide $N$. 4, 7, 9, and 25 do not necessarily divide $N$ (30 itself isn't divisible by any of them)."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "Which of the following is divisible by 11?",
          options: [ {key:"A", text:"1,234"}, {key:"B", text:"2,345"}, {key:"C", text:"5,181"}, {key:"D", text:"6,342"}, {key:"E", text:"8,123"} ],
          correct: "C",
          steps: ["Use the alternating digit sum rule: sum digits in odd positions (from the right) minus digits in even positions; the result must be a multiple of 11 (including 0).", "5,181: from the right, digits are 1,8,1,5. Odd positions (1st, 3rd): $1+1=2$. Even positions (2nd, 4th): $8+5=13$. Difference $=2-13=-11$, a multiple of 11.", "Verify directly: $5{,}181 \\div 11 = 471$ exactly. The other options (1,234, 2,345, 6,342, 8,123) each leave a nonzero remainder when divided by 11."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "How many two-digit multiples of 7 are there?",
          options: [ {key:"A", text:"11"}, {key:"B", text:"12"}, {key:"C", text:"13"}, {key:"D", text:"14"}, {key:"E", text:"15"} ],
          correct: "C",
          steps: ["The smallest two-digit multiple of 7 is 14 ($7\\times2$), and the largest is 98 ($7\\times14$).", "The multiples of 7 in this range correspond to multipliers 2 through 14.", "Count $=14-2+1=13$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "The number $2,45\\_$ (with the blank as an unknown digit) is divisible by 8. What is the value of the missing digit?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"2"}, {key:"C", text:"4"}, {key:"D", text:"6"}, {key:"E", text:"8"} ],
          correct: "D",
          steps: ["Divisibility by 8 depends only on the last three digits, here \"45d\" where d is the unknown units digit.", "Test each option: 450÷8=56.25(no), 452÷8=56.5(no), 454÷8=56.75(no), 456÷8=57(yes), 458÷8=57.25(no).", "Only $d=6$ makes 456 divisible by 8."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "If a number is divisible by both 4 and 9, which of the following must it be divisible by?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"8"}, {key:"C", text:"18"}, {key:"D", text:"36"}, {key:"E", text:"72"} ],
          correct: "D",
          steps: ["Since $\\gcd(4,9)=1$, a number divisible by both 4 and 9 must be divisible by their product (which is also their LCM): $4\\times9=36$.", "36 is guaranteed; 6, 8, 18, and 72 are not all guaranteed (e.g. 36 itself is divisible by 36 but not by 8 or 72)."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "What is the largest digit that can replace the blank in $7\\_2$ so that the resulting three-digit number is divisible by 6?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"4"}, {key:"C", text:"6"}, {key:"D", text:"8"}, {key:"E", text:"9"} ],
          correct: "E",
          steps: ["The number ends in 2, which is even, so it's automatically divisible by 2 regardless of the blank; we just need divisibility by 3.", "Digit sum $=7+d+2=9+d$. Since 9 is already a multiple of 3, we need $d$ itself to be a multiple of 3: $d \\in \\{0,3,6,9\\}$.", "The largest digit in this set is 9. Check: 792 has digit sum 18 (divisible by 3) and is even, so $792 \\div 6 = 132$, confirming divisibility."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A three-digit number has digits that sum to 21 and ends in 0. By which of the following is it guaranteed to be divisible?",
          options: [ {key:"A", text:"4"}, {key:"B", text:"7"}, {key:"C", text:"8"}, {key:"D", text:"11"}, {key:"E", text:"15"} ],
          correct: "E",
          steps: ["Ending in 0 means the number is divisible by both 2 and 5 (hence by 10).", "A digit sum of 21 is divisible by 3, so the number is also divisible by 3.", "Since the number is divisible by both 3 and 5 (coprime), it's divisible by 15. It's not guaranteed to be divisible by 4, 7, 8, or 11 just from these facts."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "What is the smallest three-digit number divisible by 12?",
          correct: 108,
          steps: ["Divide 100 by 12: $100 \\div 12 \\approx 8.33$, so the next whole multiplier is 9.", "$12 \\times 9 = 108$, which is divisible by both 3 (digit sum 9) and 4 (last two digits 08), confirming it's divisible by 12."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "How many multiples of 9 are there between 1 and 100, inclusive?",
          correct: 11,
          steps: ["The multiples of 9 up to 100 are $9\\times1, 9\\times2, \\ldots, 9\\times11=99$, since $9\\times12=108>100$.", "There are 11 such multiples."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "What is the smallest missing digit $d$ in the number $3d6$ if the number must be divisible by 9?",
          correct: 0,
          steps: ["Digit sum $=3+d+6=9+d$. For divisibility by 9, $9+d$ must be a multiple of 9.", "Among single digits 0-9, $d=0$ gives sum 9 (a multiple of 9), and $d=9$ gives sum 18 (also a multiple of 9), so both work.", "The smallest such digit is $d=0$, giving 306, and $306 \\div 9 = 34$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "What is the largest three-digit number divisible by 7?",
          correct: 994,
          steps: ["Divide 999 by 7: $999 \\div 7 = 142.71...$, so the largest integer multiplier is 142.", "$7 \\times 142 = 994$, which is the largest three-digit multiple of 7."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "How many integers from 1 to 60, inclusive, are divisible by neither 2 nor 3?",
          correct: 20,
          steps: ["Count divisible by 2: $60/2=30$. Divisible by 3: $60/3=20$. Divisible by both (i.e. by 6): $60/6=10$.", "By inclusion-exclusion, divisible by 2 or 3: $30+20-10=40$.", "Divisible by neither: $60-40=20$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "The five-digit number with digits 4, 7, 2, $x$, 6 (in that order) is divisible by 3. If $x$ is the smallest possible digit satisfying this, what is $x$?",
          correct: 2,
          steps: ["Digit sum excluding $x$: $4+7+2+6=19$. We need $19+x$ to be divisible by 3.", "Since $19 \\mod 3 = 1$, we need $x \\mod 3 = 2$, so $x \\in \\{2, 5, 8\\}$.", "The smallest valid digit is $x=2$: check $19+2=21$, and $21 \\div 3 = 7$, confirming divisibility."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "What is the greatest common factor of 84 and 90?",
          correct: 6,
          steps: ["$84 = 2^2 \\times 3 \\times 7$. $90 = 2 \\times 3^2 \\times 5$.", "GCF takes the lowest power of each shared prime: $2^1 \\times 3^1 = 6$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "How many positive divisors of 100 are there that are also multiples of 5?",
          correct: 6,
          steps: ["$100 = 2^2 \\times 5^2$, which has $(2+1)(2+1)=9$ total divisors: 1, 2, 4, 5, 10, 20, 25, 50, 100.", "Among these, the multiples of 5 are 5, 10, 20, 25, 50, 100, a total of 6."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following numbers are divisible by 9? Select all that apply.",
          options: [ {key:"A", text:"144"}, {key:"B", text:"252"}, {key:"C", text:"310"}, {key:"D", text:"414"}, {key:"E", text:"522"} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "Divisibility by 9 requires the digit sum to be a multiple of 9.",
            "144: $1+4+4=9$ ✓. 252: $2+5+2=9$ ✓. 310: $3+1+0=4$, not divisible by 9.",
            "414: $4+1+4=9$ ✓. 522: $5+2+2=9$ ✓.",
            "Divisible by 9: A, B, D, E."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following numbers are divisible by 4? Select all that apply.",
          options: [ {key:"A", text:"1,236"}, {key:"B", text:"1,342"}, {key:"C", text:"1,428"}, {key:"D", text:"1,516"}, {key:"E", text:"1,650"} ],
          correct: ["A", "C", "D"],
          steps: [
            "Check the last two digits of each: they must form a number divisible by 4.",
            "1,236 → 36, $36\\div4=9$ ✓. 1,342 → 42, $42\\div4=10.5$, not divisible.",
            "1,428 → 28, $28\\div4=7$ ✓. 1,516 → 16, $16\\div4=4$ ✓. 1,650 → 50, $50\\div4=12.5$, not divisible.",
            "Divisible by 4: A, C, D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following numbers are divisible by 11? Select all that apply.",
          options: [ {key:"A", text:"121"}, {key:"B", text:"143"}, {key:"C", text:"253"}, {key:"D", text:"302"}, {key:"E", text:"473"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Use the alternating digit sum (from the right); it must be a multiple of 11 (including 0).",
            "121: $(1+1)-2=0$ ✓ ($121=11\\times11$). 143: $(3+1)-4=0$ ✓ ($143=11\\times13$).",
            "253: $(3+2)-5=0$ ✓ ($253=11\\times23$). 302: $(2+3)-0=5$, not divisible.",
            "473: $(3+4)-7=0$ ✓ ($473=11\\times43$).",
            "Divisible by 11: A, B, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A number $N$ is divisible by both 6 and 4. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$N$ is divisible by 2."}, {key:"B", text:"$N$ is divisible by 3."}, {key:"C", text:"$N$ is divisible by 12."}, {key:"D", text:"$N$ is divisible by 24."}, {key:"E", text:"$N$ is even."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Since $N$ is divisible by 6, it's divisible by both 2 and 3 (A and B true), and therefore even (E true).",
            "Since $N$ is divisible by 4 and by 3, and $\\gcd(4,3)=1$, $N$ must be divisible by $4\\times3=12$ (C true).",
            "D is not guaranteed: $N=12$ is divisible by both 6 and 4, but $12$ is not divisible by 24.",
            "Must be true: A, B, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following digits can replace the blank in $58\\_$ so that the number is divisible by 3? Select all that apply.",
          options: [ {key:"A", text:"1"}, {key:"B", text:"2"}, {key:"C", text:"5"}, {key:"D", text:"7"}, {key:"E", text:"8"} ],
          correct: ["B", "C", "E"],
          steps: [
            "Digit sum without the blank: $5+8=13$. We need $13+d$ to be a multiple of 3.",
            "$d=1$: sum $14$, not divisible by 3. $d=2$: sum $15=3\\times5$, divisible. $d=5$: sum $18=3\\times6$, divisible.",
            "$d=7$: sum $20$, not divisible by 3. $d=8$: sum $21=3\\times7$, divisible.",
            "Valid digits: B (2), C (5), E (8)."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following are true about the number 630? Select all that apply.",
          options: [ {key:"A", text:"630 is divisible by 9."}, {key:"B", text:"630 is divisible by 7."}, {key:"C", text:"630 is divisible by 5."}, {key:"D", text:"630 is divisible by 4."}, {key:"E", text:"630 is divisible by 6."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Digit sum of 630 is $6+3+0=9$, divisible by 9, so A is true.",
            "$630 \\div 7 = 90$, an integer, so B is true.",
            "630 ends in 0, so it's divisible by 5 (C true) and by 2, and since it's also divisible by 3 (digit sum 9), it's divisible by 6 (E true).",
            "Last two digits \"30\": $30\\div4=7.5$, not an integer, so D is false.",
            "True: A, B, C, E."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "$N = 2,\\!376$.",
          quantityA: "The remainder when $N$ is divided by 9",
          quantityB: "The remainder when $N$ is divided by 11",
          correct: "C",
          steps: ["Digit sum of 2,376: $2+3+7+6=18$, which is divisible by 9 (and by 3), so the remainder when dividing by 9 is 0.", "Alternating sum from the right: $(6+3)-(7+2)=9-9=0$, a multiple of 11, so the remainder when dividing by 11 is also 0.", "Both quantities equal 0."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "Consider positive integers from 1 to 50, inclusive.",
          quantityA: "The number of multiples of 4 in this range",
          quantityB: "The number of multiples of 6 in this range",
          correct: "A",
          steps: ["Multiples of 4 from 1 to 50: $\\lfloor 50/4 \\rfloor = 12$.", "Multiples of 6 from 1 to 50: $\\lfloor 50/6 \\rfloor = 8$.", "Quantity A (12) is greater than Quantity B (8)."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$x$ is a three-digit number whose digit sum is 24.",
          quantityA: "The remainder when $x$ is divided by 3",
          quantityB: "The remainder when $x$ is divided by 9",
          correct: "B",
          steps: ["A digit sum of 24 is divisible by 3 (since $24=3\\times8$), so $x$ is divisible by 3, giving remainder 0 when divided by 3.", "24 is not divisible by 9 ($24=9\\times2+6$), so the remainder when $x$ is divided by 9 equals the remainder when 24 is divided by 9, which is 6.", "Quantity B (6) is greater than Quantity A (0)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "$P$ is the smallest positive integer divisible by both 8 and 12. $Q$ is the largest common factor of 8 and 12.",
          quantityA: "$P$",
          quantityB: "$6 \\times Q$",
          correct: "C",
          steps: ["$P = \\text{LCM}(8,12)$. $8=2^3$, $12=2^2\\times3$, so LCM $=2^3\\times3=24$. $P=24$.", "$Q = \\text{GCF}(8,12) = 2^2 = 4$.", "$6 \\times Q = 6 \\times 4 = 24$.", "Both quantities equal 24."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$N$ is a two-digit number that is divisible by both 3 and 4.",
          quantityA: "The smallest possible value of $N$",
          quantityB: "12",
          correct: "C",
          steps: ["Divisible by both 3 and 4 means divisible by 12 (since $\\gcd(3,4)=1$).", "The two-digit multiples of 12 start at 12 itself ($12$ is a two-digit number).", "The smallest possible value of $N$ is 12, so both quantities equal 12."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$a$ is the number of positive divisors of 36. $b$ is the number of positive divisors of 48.",
          quantityA: "$a$",
          quantityB: "$b$",
          correct: "B",
          steps: ["$36 = 2^2 \\times 3^2$, so the number of divisors is $(2+1)(2+1)=9$. $a=9$.", "$48 = 2^4 \\times 3^1$, so the number of divisors is $(4+1)(1+1)=10$. $b=10$.", "Quantity B (10) is greater than Quantity A (9)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "What is the greatest common factor of 48 and 72?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"12"}, {key:"C", text:"24"}, {key:"D", text:"36"}, {key:"E", text:"48"} ],
          correct: "C",
          steps: ["$48 = 2^4 \\times 3$ and $72 = 2^3 \\times 3^2$.", "GCF takes the lowest power of each shared prime: $2^{\\min(4,3)} \\times 3^{\\min(1,2)} = 2^3 \\times 3 = 24$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "What is the least common multiple of 18 and 24?",
          options: [ {key:"A", text:"36"}, {key:"B", text:"48"}, {key:"C", text:"54"}, {key:"D", text:"72"}, {key:"E", text:"144"} ],
          correct: "D",
          steps: ["$18 = 2 \\times 3^2$ and $24 = 2^3 \\times 3$.", "LCM takes the highest power of each prime: $2^{\\max(1,3)} \\times 3^{\\max(2,1)} = 2^3 \\times 3^2 = 8 \\times 9 = 72$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "How many distinct positive factors does 72 have?",
          options: [ {key:"A", text:"8"}, {key:"B", text:"10"}, {key:"C", text:"12"}, {key:"D", text:"14"}, {key:"E", text:"16"} ],
          correct: "C",
          steps: ["$72 = 2^3 \\times 3^2$.", "Total factors $= (3+1)(2+1) = 4 \\times 3 = 12$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "What is the smallest positive integer $n$ such that $n$ is a multiple of both 15 and 20?",
          options: [ {key:"A", text:"30"}, {key:"B", text:"45"}, {key:"C", text:"60"}, {key:"D", text:"75"}, {key:"E", text:"300"} ],
          correct: "C",
          steps: ["$15 = 3 \\times 5$ and $20 = 2^2 \\times 5$.", "LCM $= 2^2 \\times 3 \\times 5 = 4 \\times 3 \\times 5 = 60$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "If $N = 2^3 \\times 3^2 \\times 5$, how many distinct positive factors does $N$ have?",
          options: [ {key:"A", text:"16"}, {key:"B", text:"20"}, {key:"C", text:"24"}, {key:"D", text:"28"}, {key:"E", text:"32"} ],
          correct: "C",
          steps: ["Total factors $= (3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "$N$ is the smallest positive integer with exactly 5 distinct positive factors. What is $N$?",
          options: [ {key:"A", text:"16"}, {key:"B", text:"24"}, {key:"C", text:"32"}, {key:"D", text:"36"}, {key:"E", text:"81"} ],
          correct: "A",
          steps: ["Since 5 is prime, the factor-count formula $(a+1)=5$ forces $a=4$, so $N$ must be of the form $p^4$ for some prime $p$.", "The smallest such $N$ uses the smallest prime: $N = 2^4 = 16$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "What is the product of all distinct positive factors of 20?",
          options: [ {key:"A", text:"400"}, {key:"B", text:"2,000"}, {key:"C", text:"8,000"}, {key:"D", text:"20,000"}, {key:"E", text:"160,000"} ],
          correct: "C",
          steps: ["$20 = 2^2 \\times 5$, so total factors $= (2+1)(1+1) = 6$.", "Product of all factors $= N^{\\text{(total factors)}/2} = 20^{6/2} = 20^3 = 8{,}000$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "If the GCF of two positive integers is 6 and their LCM is 72, and one of the integers is 24, what is the other integer?",
          options: [ {key:"A", text:"12"}, {key:"B", text:"18"}, {key:"C", text:"24"}, {key:"D", text:"36"}, {key:"E", text:"48"} ],
          correct: "B",
          steps: ["Using the identity $\\text{GCF} \\times \\text{LCM} = X \\times Y$: $6 \\times 72 = 24 \\times Y$.", "$432 = 24Y$, so $Y = 18$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "How many distinct positive factors does 200 have?",
          options: [ {key:"A", text:"9"}, {key:"B", text:"10"}, {key:"C", text:"12"}, {key:"D", text:"14"}, {key:"E", text:"16"} ],
          correct: "C",
          steps: ["$200 = 2^3 \\times 5^2$.", "Total factors $= (3+1)(2+1) = 4 \\times 3 = 12$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "What is the smallest positive integer that must be multiplied by 45 to make it a perfect square?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"5"}, {key:"C", text:"9"}, {key:"D", text:"15"}, {key:"E", text:"45"} ],
          correct: "B",
          steps: ["$45 = 3^2 \\times 5^1$. For a perfect square, every exponent must be even.", "The exponent of 3 (2) is already even, but the exponent of 5 (1) is odd, so we need one more factor of 5.", "Multiplying by 5 gives $3^2 \\times 5^2 = 225 = 15^2$, a perfect square."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "What is the GCF of 60 and 90?",
          correct: 30,
          steps: ["$60 = 2^2 \\times 3 \\times 5$ and $90 = 2 \\times 3^2 \\times 5$.", "GCF $= 2^1 \\times 3^1 \\times 5^1 = 30$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "What is the LCM of 36 and 60?",
          correct: 180,
          steps: ["$36 = 2^2 \\times 3^2$ and $60 = 2^2 \\times 3 \\times 5$.", "LCM $= 2^2 \\times 3^2 \\times 5 = 4 \\times 9 \\times 5 = 180$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "How many distinct positive factors does 144 have?",
          correct: 15,
          steps: ["$144 = 2^4 \\times 3^2$.", "Total factors $= (4+1)(2+1) = 5 \\times 3 = 15$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "$N$ is the smallest positive integer that has exactly 3 distinct positive factors. What is $N$?",
          correct: 4,
          steps: ["Since 3 is prime, $(a+1)=3$ forces $a=2$, so $N=p^2$ for a prime $p$.", "The smallest such $N$ uses the smallest prime: $N=2^2=4$ (factors: 1, 2, 4)."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "Two positive integers have a GCF of 8 and an LCM of 96. If one integer is 32, what is the other integer?",
          correct: 24,
          steps: ["$\\text{GCF} \\times \\text{LCM} = X \\times Y$: $8 \\times 96 = 32 \\times Y$.", "$768 = 32Y$, so $Y = 24$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "What is the smallest positive integer $k$ such that $90k$ is a perfect square?",
          correct: 10,
          steps: ["$90 = 2 \\times 3^2 \\times 5$. For a perfect square, all exponents must be even.", "The exponents of 2 and 5 are both odd (1 each), so $k$ must supply one more factor of 2 and one more factor of 5: $k = 2 \\times 5 = 10$.", "Check: $90 \\times 10 = 900 = 30^2$, a perfect square."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "If $x = 2^2 \\times 3^3$ and $y = 2^3 \\times 3$, what is the GCF of $x$ and $y$?",
          correct: 12,
          steps: ["GCF takes the lowest power of each prime: $2^{\\min(2,3)} \\times 3^{\\min(3,1)} = 2^2 \\times 3^1 = 4 \\times 3 = 12$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "What is the product of all distinct positive factors of 12?",
          correct: 1728,
          steps: ["$12 = 2^2 \\times 3$, so total factors $=(2+1)(1+1)=6$.", "Product of all factors $= 12^{6/2} = 12^3 = 1{,}728$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following integers are perfect squares? Select all that apply.",
          options: [ {key:"A", text:"$2^4 \\times 3^2$"}, {key:"B", text:"$2^3 \\times 3^2$"}, {key:"C", text:"$2^6$"}, {key:"D", text:"$3^3 \\times 5^2$"}, {key:"E", text:"$5^2 \\times 7^4$"} ],
          correct: ["A", "C", "E"],
          steps: [
            "A number is a perfect square exactly when every exponent in its prime factorization is even.",
            "A: exponents 4 and 2, both even, perfect square. B: exponents 3 and 2; 3 is odd, not a perfect square.",
            "C: exponent 6, even, perfect square. D: exponents 3 and 2; 3 is odd, not a perfect square.",
            "E: exponents 2 and 4, both even, perfect square.",
            "Perfect squares: A, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following are factors of 84? Select all that apply.",
          options: [ {key:"A", text:"6"}, {key:"B", text:"9"}, {key:"C", text:"12"}, {key:"D", text:"14"}, {key:"E", text:"16"} ],
          correct: ["A", "C", "D"],
          steps: [
            "$84 = 2^2 \\times 3 \\times 7$.",
            "A: $84 \\div 6 = 14$, integer, factor. B: $84 \\div 9 = 9.33$, not a factor.",
            "C: $84 \\div 12 = 7$, integer, factor. D: $84 \\div 14 = 6$, integer, factor.",
            "E: $84 \\div 16 = 5.25$, not a factor.",
            "Factors of 84: A, C, D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "$N = 2^3 \\times 5^2$. Which of the following are factors of $N$? Select all that apply.",
          options: [ {key:"A", text:"10"}, {key:"B", text:"20"}, {key:"C", text:"25"}, {key:"D", text:"40"}, {key:"E", text:"50"} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "$N = 2^3 \\times 5^2 = 200$. A factor of $N$ must have the form $2^a \\times 5^b$ with $0 \\le a \\le 3$ and $0 \\le b \\le 2$.",
            "A: $10=2\\times5$ ($a=1,b=1$), valid. B: $20=2^2\\times5$ ($a=2,b=1$), valid.",
            "C: $25=5^2$ ($a=0,b=2$), valid. D: $40=2^3\\times5$ ($a=3,b=1$), valid.",
            "E: $50=2\\times5^2$ ($a=1,b=2$), valid.",
            "All five, A through E, are factors of 200."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "$x$ and $y$ are positive integers such that $x = 2^2 \\times 3$ and $y = 2 \\times 3^2 \\times 5$. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The GCF of $x$ and $y$ is 6."}, {key:"B", text:"The LCM of $x$ and $y$ is 180."}, {key:"C", text:"$x$ is a factor of $y$."}, {key:"D", text:"$y$ is a multiple of $x$."}, {key:"E", text:"$\\text{GCF}(x,y) \\times \\text{LCM}(x,y) = x \\times y$."} ],
          correct: ["A", "B", "E"],
          steps: [
            "$x = 12$, $y = 90$.",
            "A: GCF $= 2^{\\min(2,1)} \\times 3^{\\min(1,2)} = 2 \\times 3 = 6$, true.",
            "B: LCM $= 2^{\\max(2,1)} \\times 3^{\\max(1,2)} \\times 5 = 4 \\times 9 \\times 5 = 180$, true.",
            "C and D: $90 \\div 12 = 7.5$, not an integer, so $x$ does not divide $y$ and $y$ is not a multiple of $x$; both false.",
            "E: this is the core GCF-LCM identity, always true: $6 \\times 180 = 1080 = 12 \\times 90$, true.",
            "True statements: A, B, E."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following numbers of total factors would force an integer $n>1$ to be a perfect square? Select all that apply.",
          options: [ {key:"A", text:"3"}, {key:"B", text:"4"}, {key:"C", text:"5"}, {key:"D", text:"6"}, {key:"E", text:"9"} ],
          correct: ["A", "C", "E"],
          steps: [
            "An integer has an odd number of total factors if and only if it is a perfect square (since factors pair up $d$ with $n/d$, except when $d=\\sqrt n$).",
            "Among the choices, the odd values are 3, 5, and 9; the even values are 4 and 6.",
            "A number with an even factor count (4 or 6) cannot be a perfect square, since perfect squares always have an odd factor count.",
            "Forces a perfect square: A, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following are perfect cubes? Select all that apply.",
          options: [ {key:"A", text:"$2^6$"}, {key:"B", text:"$2^3 \\times 3^3$"}, {key:"C", text:"$2^4 \\times 3^3$"}, {key:"D", text:"$3^9$"}, {key:"E", text:"$2^2 \\times 3^2$"} ],
          correct: ["A", "B", "D"],
          steps: [
            "An integer is a perfect cube exactly when every exponent in its prime factorization is a multiple of 3.",
            "A: exponent 6 (multiple of 3), perfect cube. B: exponents 3 and 3, both multiples of 3, perfect cube.",
            "C: exponent of 2 is 4, not a multiple of 3, not a perfect cube.",
            "D: exponent 9 (multiple of 3), perfect cube. E: exponents 2 and 2, neither a multiple of 3, not a perfect cube.",
            "Perfect cubes: A, B, D."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "$x = 24$ and $y = 36$.",
          quantityA: "$\\text{GCF}(x,y) \\times \\text{LCM}(x,y)$",
          quantityB: "$x \\times y$",
          correct: "C",
          steps: ["This is the core identity relating GCF and LCM: $\\text{GCF}(x,y) \\times \\text{LCM}(x,y) = x \\times y$ for any two positive integers.", "$\\text{GCF}(24,36)=12$ and $\\text{LCM}(24,36)=72$; $12\\times72=864$. Also $24\\times36=864$.", "Both quantities equal 864."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$N$ is the smallest positive integer with exactly 6 distinct positive factors.",
          quantityA: "$N$",
          quantityB: "12",
          correct: "C",
          steps: ["6 factors can arise as $(a+1)(b+1)=6=2\\times3$, giving exponents $a=1,b=2$ (using two primes) or as $6=6\\times1$, giving a single prime with exponent 5.", "Two-prime option: $2^2 \\times 3^1 = 12$. Single-prime option: $2^5=32$.", "The smallest is 12, so $N=12$.", "Both quantities equal 12."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$a = 2^3 \\times 3^2$ and $b = 2^2 \\times 3^4$.",
          quantityA: "The GCF of $a$ and $b$",
          quantityB: "The GCF of $a$ and $b$, divided by 4",
          correct: "A",
          steps: ["GCF $= 2^{\\min(3,2)} \\times 3^{\\min(2,4)} = 2^2 \\times 3^2 = 36$.", "Quantity A is 36. Quantity B is $36/4=9$.", "Quantity A (36) is greater than Quantity B (9)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "$p$ is the number of distinct positive factors of $2^5$. $q$ is the number of distinct positive factors of $2^2 \\times 3^2$.",
          quantityA: "$p$",
          quantityB: "$q$",
          correct: "B",
          steps: ["$2^5$ has $(5+1)=6$ factors, so $p=6$.", "$2^2 \\times 3^2$ has $(2+1)(2+1)=9$ factors, so $q=9$.", "Quantity B (9) is greater than Quantity A (6)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$x$ is the smallest positive integer that must be multiplied by 50 to produce a perfect cube.",
          quantityA: "$x$",
          quantityB: "20",
          correct: "C",
          steps: ["$50 = 2^1 \\times 5^2$. For a perfect cube, every exponent must be a multiple of 3.", "The exponent of 2 (currently 1) needs 2 more to reach 3; the exponent of 5 (currently 2) needs 1 more to reach 3.", "So $x = 2^2 \\times 5^1 = 20$. Check: $50 \\times 20 = 1000 = 10^3$, a perfect cube.", "Both quantities equal 20."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "Two positive integers have GCF 9 and LCM 108.",
          quantityA: "The product of the two integers",
          quantityB: "1,000",
          correct: "B",
          steps: ["By the GCF-LCM identity, the product of the two integers equals $\\text{GCF} \\times \\text{LCM} = 9 \\times 108 = 972$.", "Quantity A is 972, and Quantity B is 1,000.", "Quantity B (1,000) is greater than Quantity A (972)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "What is the remainder when 137 is divided by 12?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"5"}, {key:"C", text:"7"}, {key:"D", text:"9"}, {key:"E", text:"11"} ],
          correct: "B",
          steps: ["$137 = 12 \\times 11 + R$.", "$12 \\times 11 = 132$, so $R = 137 - 132 = 5$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "If $x$ divided by 8 leaves remainder 5, and $y$ divided by 8 leaves remainder 6, what is the remainder when $x+y$ is divided by 8?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"3"}, {key:"C", text:"5"}, {key:"D", text:"7"}, {key:"E", text:"11"} ],
          correct: "B",
          steps: ["Add the remainders: $5+6=11$.", "Since $11 \\geq 8$, divide again: $11 = 8(1)+3$.", "The remainder is 3."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "What is the remainder when $7^{10}$ is divided by 5?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"2"}, {key:"C", text:"3"}, {key:"D", text:"4"}, {key:"E", text:"0"} ],
          correct: "D",
          steps: ["$7 \\div 5$ leaves remainder 2, so $7^{10}$ has the same remainder pattern as $2^{10}$ mod 5.", "Powers of 2 mod 5 cycle every 4: $2^1{=}2, 2^2{=}4, 2^3{=}3, 2^4{=}1$, then repeats.", "$10 = 4(2)+2$, so $2^{10}$ mod 5 matches $2^2$ mod 5, which is 4."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "If $n$ is an integer and $n$ divided by 6 leaves remainder 4, what is the remainder when $3n$ is divided by 6?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"4"} ],
          correct: "A",
          steps: ["Since $n \\div 6$ leaves remainder 4, the remainder of $3n$ matches $3 \\times 4 = 12$, reduced mod 6.", "$12 = 6 \\times 2 + 0$.", "The remainder is 0."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "$x$ and $y$ are positive integers. When $x$ is divided by 9, the remainder is 4. When $y$ is divided by 9, the remainder is 8. What is the remainder when $xy$ is divided by 9?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"2"}, {key:"C", text:"4"}, {key:"D", text:"5"}, {key:"E", text:"8"} ],
          correct: "D",
          steps: ["Multiply the remainders: $4 \\times 8 = 32$.", "Reduce mod 9: $32 = 9(3)+5$.", "The remainder is 5."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "How many positive integers less than 50 leave a remainder of 3 when divided by 7?",
          options: [ {key:"A", text:"5"}, {key:"B", text:"6"}, {key:"C", text:"7"}, {key:"D", text:"8"}, {key:"E", text:"9"} ],
          correct: "C",
          steps: ["Numbers of the form $7k+3$ less than 50: $3, 10, 17, 24, 31, 38, 45$ (next would be 52, too large).", "Counting: 3, 10, 17, 24, 31, 38, 45 is 7 values."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "If $p$ is an odd integer and $q$ is an even integer, which of the following must be even?",
          options: [ {key:"A", text:"$p+q$"}, {key:"B", text:"$p+q^2$"}, {key:"C", text:"$p^2+q$"}, {key:"D", text:"$3p+q$"}, {key:"E", text:"$2p+q$"} ],
          correct: "E",
          steps: ["$p$ is odd, $q$ is even. A: $p+q$ = odd+even = odd, not even.", "B: $q^2$ is even, so $p+q^2$ = odd+even = odd, not even.", "C: $p^2$ is odd, so $p^2+q$ = odd+even = odd, not even.", "D: $3p$ is odd (odd times odd), so $3p+q$ = odd+even = odd, not even.", "E: $2p$ is always even, so $2p+q$ = even+even = even. This is the only option guaranteed to be even."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "What is the remainder when $2^{20}$ is divided by 7?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"2"}, {key:"C", text:"4"}, {key:"D", text:"5"}, {key:"E", text:"6"} ],
          correct: "C",
          steps: ["Powers of 2 mod 7 cycle: $2^1{=}2, 2^2{=}4, 2^3{=}1$, then repeats every 3 powers.", "$20 = 3(6)+2$, so $2^{20}$ mod 7 matches $2^2$ mod 7, which is 4."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "$N$ is a positive integer such that $N$ divided by 15 leaves remainder 11. What is the remainder when $N$ is divided by 5?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"4"} ],
          correct: "B",
          steps: ["$N = 15k + 11$ for some integer $k \\geq 0$.", "Since $15k$ is always a multiple of 5, $N \\div 5$ has the same remainder as $11 \\div 5$.", "$11 = 5(2)+1$, so the remainder is 1."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "If $a$, $b$, and $c$ are consecutive integers (in that order), which of the following must be true?",
          options: [ {key:"A", text:"$a$, $b$, $c$ are all even."}, {key:"B", text:"$a+c$ is even."}, {key:"C", text:"$a+b+c$ is even."}, {key:"D", text:"$abc$ is odd."}, {key:"E", text:"$b$ is always even."} ],
          correct: "B",
          steps: ["Consecutive integers alternate parity, so $a$ and $c$ (two apart) share the same parity, while $b$ is the opposite parity from both.", "$a+c$ = same parity + same parity = even, always true.", "C is false in general: $a+b+c = 3b$ (since $a=b-1,c=b+1$), which is even only when $b$ is even. D and E are not guaranteed (e.g. $a=2,b=3,c=4$ makes $abc$ even and $b$ odd). A is clearly false."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "What is the remainder when 251 is divided by 13?",
          correct: 4,
          steps: ["$13 \\times 19 = 247$.", "$251 - 247 = 4$, so the remainder is 4."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "If $n$ divided by 11 leaves remainder 8, what is the remainder when $n+25$ is divided by 11?",
          correct: 0,
          steps: ["$25$ divided by 11 leaves remainder $25-22=3$.", "Add remainders: $8+3=11$.", "Since $11 \\geq 11$, reduce: $11 \\div 11$ leaves remainder 0."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "What is the remainder when $5^{100}$ is divided by 8?",
          correct: 1,
          steps: ["Powers of 5 mod 8 cycle: $5^1{=}5, 5^2{=}25\\to1$, then repeats every 2 powers (since $5^2\\equiv1$).", "$100$ is even, so $5^{100} \\equiv (5^2)^{50} \\equiv 1^{50} \\equiv 1 \\pmod 8$.", "The remainder is 1."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "How many integers between 1 and 100, inclusive, leave a remainder of 2 when divided by 9?",
          correct: 11,
          steps: ["Numbers of the form $9k+2$: 2, 11, 20, 29, 38, 47, 56, 65, 74, 83, 92 (next is 101, too large).", "Counting these gives 11 values."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "$x$ and $y$ are positive integers. When $x$ is divided by 6, the remainder is 5. When $y$ is divided by 6, the remainder is 5. What is the remainder when $x-y$ is divided by 6?",
          correct: 0,
          steps: ["Subtract remainders: $5-5=0$.", "Since 0 is already within the valid range $[0,6)$, the remainder is 0. (This makes sense since $x-y$ is a multiple of 6 when both leave the same remainder.)"]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "What is the units digit of $3^{47}$? (Hint: use the cyclicity of remainders when dividing by 10.)",
          correct: 7,
          steps: ["Powers of 3 mod 10 cycle every 4: $3^1{=}3, 3^2{=}9, 3^3{=}27\\to7, 3^4{=}81\\to1$, then repeats.", "$47 = 4(11)+3$, so $3^{47}$ mod 10 matches $3^3$ mod 10, which is 7.", "The units digit is 7."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "If $n$ is a positive integer and $2n$ divided by 7 leaves remainder 4, what is the smallest possible positive value of $n$?",
          correct: 2,
          steps: ["We need $2n \\equiv 4 \\pmod 7$. Testing small $n$: $n=1 \\to 2n=2$, remainder 2, no. $n=2 \\to 2n=4$, remainder 4, yes.", "The smallest positive value of $n$ is 2."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "What is the remainder when the sum $1+2+3+\\cdots+50$ is divided by 8?",
          correct: 3,
          steps: ["The sum of the first 50 positive integers is $\\frac{50 \\times 51}{2} = 1275$.", "$1275 \\div 8$: $8 \\times 159 = 1272$, so $1275 - 1272 = 3$.", "The remainder is 3."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "$n$ is a positive integer. Which of the following expressions must be even, if $n$ is odd? Select all that apply.",
          options: [ {key:"A", text:"$n+1$"}, {key:"B", text:"$n^2+1$"}, {key:"C", text:"$3n+5$"}, {key:"D", text:"$n^2$"}, {key:"E", text:"$4n+2$"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "$n$ is odd. A: $n+1$ = odd+1 = even, true.",
            "B: $n^2$ is odd (odd × odd), so $n^2+1$ = odd+1 = even, true.",
            "C: $3n$ is odd (odd × odd), so $3n+5$ = odd+odd = even, true.",
            "D: $n^2$ is odd, as shown above, so D is false.",
            "E: $4n$ is always even (even × anything), so $4n+2$ = even+even = even, true.",
            "Must be even: A, B, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "When positive integer $m$ is divided by 12, the remainder is 7. Which of the following could be a value of $m$? Select all that apply.",
          options: [ {key:"A", text:"19"}, {key:"B", text:"31"}, {key:"C", text:"43"}, {key:"D", text:"55"}, {key:"E", text:"60"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Values of $m$ have the form $12k+7$: 7, 19, 31, 43, 55, 67, ...",
            "A: 19 fits ($12(1)+7$). B: 31 fits ($12(2)+7$). C: 43 fits ($12(3)+7$). D: 55 fits ($12(4)+7$).",
            "E: 60 gives $60 = 12(5)+0$, remainder 0, not 7, so E does not fit.",
            "Could be values of $m$: A, B, C, D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following powers of 6, when divided by 10, leave a remainder of 6? Select all that apply.",
          options: [ {key:"A", text:"$6^1$"}, {key:"B", text:"$6^2$"}, {key:"C", text:"$6^3$"}, {key:"D", text:"$6^4$"}, {key:"E", text:"$6^5$"} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "Powers of 6 always end in the digit 6: $6^1=6$, $6^2=36$, $6^3=216$, $6^4=1296$, $6^5=7776$.",
            "Since the units digit of every power of 6 is 6, the remainder when dividing by 10 is always 6.",
            "All five options leave remainder 6: A, B, C, D, E."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "$x$, $y$, and $z$ are integers such that $x+y+z$ is odd. Which of the following combinations of parities for $(x,y,z)$ are possible? Select all that apply.",
          options: [ {key:"A", text:"All three odd."}, {key:"B", text:"All three even."}, {key:"C", text:"Exactly one odd, two even."}, {key:"D", text:"Exactly two odd, one even."}, {key:"E", text:"Exactly one even, two odd."} ],
          correct: ["A", "C"],
          steps: [
            "A sum is odd only when it contains an odd number of odd terms (1 or 3 odd terms among 3 numbers).",
            "A: three odds sum to odd+odd+odd = odd, possible.",
            "B: three evens sum to even, not possible for an odd total.",
            "C: one odd, two even: odd+even+even = odd, possible.",
            "D and E both describe two odd numbers and one even number: odd+odd+even = even, not possible for an odd total.",
            "Possible: A, C."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "If $n$ is a positive integer, which of the following could be the remainder when $n^2$ is divided by 4? Select all that apply.",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"4"} ],
          correct: ["A", "B"],
          steps: [
            "Any integer $n$ mod 4 gives remainder 0, 1, 2, or 3. Square each and reduce mod 4:",
            "$0^2=0\\to0$; $1^2=1\\to1$; $2^2=4\\to0$; $3^2=9\\to1$.",
            "The only possible remainders for $n^2$ mod 4 are 0 and 1.",
            "Possible: A, B."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "$n$ is a positive integer such that $n$ divided by 4 leaves remainder 3. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$n$ is odd."}, {key:"B", text:"$n+1$ is divisible by 4."}, {key:"C", text:"$n^2$ divided by 4 leaves remainder 1."}, {key:"D", text:"$n$ is divisible by 3."}, {key:"E", text:"$2n$ divided by 4 leaves remainder 2."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "$n = 4k+3$ for some integer $k \\geq 0$.",
            "A: $4k$ is even and 3 is odd, so $n$ is odd, true.",
            "B: $n+1=4k+4=4(k+1)$, divisible by 4, true.",
            "C: the remainder of $n^2$ matches $3^2=9$ reduced mod 4, which is 1, true.",
            "D: not guaranteed, e.g. $n=7$ (which is $4(1)+3$) is not divisible by 3, false.",
            "E: $2n$'s remainder matches $2\\times3=6$ reduced mod 4, which is 2, true.",
            "Must be true: A, B, C, E."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "When positive integer $n$ is divided by 8, the remainder is 5.",
          quantityA: "The remainder when $n^2$ is divided by 8",
          quantityB: "1",
          correct: "C",
          steps: ["The remainder of $n^2$ mod 8 matches $5^2=25$ reduced mod 8.", "$25 = 8(3)+1$.", "Both quantities equal 1."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$p$ is an odd integer and $q$ is an even integer.",
          quantityA: "The remainder when $p+q$ is divided by 2",
          quantityB: "1",
          correct: "C",
          steps: ["Odd + Even = Odd, so $p+q$ is odd.", "Any odd number divided by 2 leaves remainder 1.", "Both quantities equal 1."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$N$ is a positive integer, and $N$ divided by 6 leaves remainder 5.",
          quantityA: "The remainder when $N$ is divided by 3",
          quantityB: "2",
          correct: "C",
          steps: ["Write $N = 6k+5$. Since $6k$ is a multiple of 3, the remainder of $N$ mod 3 matches the remainder of $5$ mod 3.", "$5 = 3(1)+2$.", "Both quantities equal 2."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "$x$ is the remainder when $9^{15}$ is divided by 4. $y$ is the remainder when $9^{16}$ is divided by 4.",
          quantityA: "$x$",
          quantityB: "$y$",
          correct: "C",
          steps: ["$9 \\equiv 1 \\pmod 4$, so every power of 9 mod 4 equals $1^k = 1$, regardless of the exponent.", "So $x=1$ and $y=1$.", "Both quantities equal 1."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$a$ and $b$ are positive integers with the same parity.",
          quantityA: "The parity of $a+b$",
          quantityB: "Even",
          correct: "C",
          steps: ["If $a$ and $b$ have the same parity, both are even or both are odd.", "Even+Even=Even, and Odd+Odd=Even. Either way, $a+b$ is even.", "Quantity A (even) equals Quantity B (even)."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$n$ is a positive integer greater than 1.",
          quantityA: "The remainder when $n^2 - n$ is divided by 2",
          quantityB: "1",
          correct: "B",
          steps: ["$n^2-n = n(n-1)$, the product of two consecutive integers.", "Among any two consecutive integers, exactly one is even, so their product $n(n-1)$ is always even.", "The remainder when an even number is divided by 2 is always 0.", "Quantity B (1) is greater than Quantity A (0)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "What is the value of $-2^4 - (-2)^4$?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"−32"}, {key:"C", text:"32"}, {key:"D", text:"−16"}, {key:"E", text:"16"} ],
          correct: "B",
          steps: ["$-2^4$ means the negative of $2^4$, since the negative sign is not inside parentheses: $-2^4 = -16$.", "$(-2)^4$ has the negative inside the parentheses, so it's $(-2)\\times(-2)\\times(-2)\\times(-2) = 16$.", "$-16 - 16 = -32$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "If $x^4 = 81$, what is the sum of all possible values of $x$?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"3"}, {key:"C", text:"6"}, {key:"D", text:"9"}, {key:"E", text:"18"} ],
          correct: "A",
          steps: ["Since the exponent 4 is even, $x^4=81$ has two real solutions: $x=3$ and $x=-3$.", "$3+(-3) = 0$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "Simplify $5^{20} + 5^{21} + 5^{22}$.",
          options: [ {key:"A", text:"$5^{20}(31)$"}, {key:"B", text:"$5^{22}(3)$"}, {key:"C", text:"$5^{20}(3)$"}, {key:"D", text:"$5^{21}(31)$"}, {key:"E", text:"$5^{63}$"} ],
          correct: "A",
          steps: ["Factor out the lowest power, $5^{20}$: $5^{20}(1+5+5^2)$.", "$1+5+25=31$.", "The expression equals $5^{20}(31)$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "Which of the following is equal to $0.2^3$?",
          options: [ {key:"A", text:"0.6"}, {key:"B", text:"0.008"}, {key:"C", text:"0.08"}, {key:"D", text:"0.6"}, {key:"E", text:"0.02"} ],
          correct: "B",
          steps: ["Since the base $0.2$ is between 0 and 1, raising it to a higher power shrinks its value.", "$0.2^3 = 0.2\\times0.2\\times0.2 = 0.008$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "If $x$ is a real number and $x^2 = 49$, which statement must be true?",
          options: [ {key:"A", text:"$x = 7$"}, {key:"B", text:"$x = -7$"}, {key:"C", text:"$x = 7$ or $x = -7$"}, {key:"D", text:"$\\sqrt{x^2} = x$"}, {key:"E", text:"$x$ is positive"} ],
          correct: "C",
          steps: ["Since the exponent is even, both $x=7$ and $x=-7$ satisfy $x^2=49$.", "D is false in general because $\\sqrt{x^2}=|x|$, which only equals $x$ when $x\\geq0$.", "Only C must be true."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "Simplify $\\sqrt{72} - \\sqrt{50} + \\sqrt{8}$.",
          options: [ {key:"A", text:"$\\sqrt{30}$"}, {key:"B", text:"$4\\sqrt{2}$"}, {key:"C", text:"$3\\sqrt{2}$"}, {key:"D", text:"$5\\sqrt{2}$"}, {key:"E", text:"$2\\sqrt{2}$"} ],
          correct: "C",
          steps: ["Simplify each radical: $\\sqrt{72}=\\sqrt{36\\times2}=6\\sqrt2$, $\\sqrt{50}=\\sqrt{25\\times2}=5\\sqrt2$, $\\sqrt{8}=\\sqrt{4\\times2}=2\\sqrt2$.", "All terms now share the radicand 2, so combine coefficients: $6\\sqrt2 - 5\\sqrt2 + 2\\sqrt2 = 3\\sqrt2$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "If $x < 0$, which expression is equivalent to $\\sqrt{x^2}+x$?",
          options: [ {key:"A", text:"$2x$"}, {key:"B", text:"$0$"}, {key:"C", text:"$-2x$"}, {key:"D", text:"$2|x|$"}, {key:"E", text:"$x^2$"} ],
          correct: "B",
          steps: ["$\\sqrt{x^2}=|x|$, and since $x<0$, $|x|=-x$.", "$\\sqrt{x^2}+x = -x+x = 0$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "What is $\\sqrt{3}\\times\\sqrt{27}$?",
          options: [ {key:"A", text:"$9$"}, {key:"B", text:"$3\\sqrt{3}$"}, {key:"C", text:"$81$"}, {key:"D", text:"$\\sqrt{30}$"}, {key:"E", text:"$27$"} ],
          correct: "A",
          steps: ["$\\sqrt{a}\\times\\sqrt{b}=\\sqrt{ab}$, so $\\sqrt{3}\\times\\sqrt{27}=\\sqrt{81}$.", "$\\sqrt{81}=9$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "$8^{10}$ is closest in value to which of the following?",
          options: [ {key:"A", text:"$2^{13}$"}, {key:"B", text:"$2^{20}$"}, {key:"C", text:"$2^{30}$"}, {key:"D", text:"$2^{40}$"}, {key:"E", text:"$4^{10}$"} ],
          correct: "C",
          steps: ["Rewrite 8 as $2^3$, so $8^{10}=(2^3)^{10}=2^{30}$.", "This exactly matches option C."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "If $0 < x < 1$, which of the following lists the terms in increasing order?",
          options: [ {key:"A", text:"$x < x^2 < x^3$"}, {key:"B", text:"$x^3 < x^2 < x$"}, {key:"C", text:"$x^2 < x < x^3$"}, {key:"D", text:"$x^3 < x < x^2$"}, {key:"E", text:"$x < x^3 < x^2$"} ],
          correct: "B",
          steps: ["For a base strictly between 0 and 1, higher powers produce smaller values.", "Test $x=0.5$: $x=0.5$, $x^2=0.25$, $x^3=0.125$.", "In increasing order: $0.125 < 0.25 < 0.5$, i.e. $x^3 < x^2 < x$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "If $x^6 = y^6$ and $x$ and $y$ are both negative integers with $x \\neq y$... actually, if $2^{2x} = 64$, what is the value of $x$?",
          correct: 3,
          steps: ["$64 = 2^6$, so $2^{2x}=2^6$.", "Since the bases match and are not among the exception bases (0, 1, −1), the exponents must be equal: $2x=6$.", "$x=3$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "What is the value of $4^{15} - 4^{14}$, expressed in the form $4^{14}\\times k$? Give the value of $k$.",
          correct: 3,
          steps: ["Factor out $4^{14}$: $4^{14}(4^1 - 4^0) = 4^{14}(4-1)$.", "$4-1=3$, so $k=3$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "$x$ is a positive integer and $(-1)^x = -1$. What is the smallest possible value of $x$?",
          correct: 1,
          steps: ["$(-1)^x = -1$ holds exactly when $x$ is odd.", "The smallest positive odd integer is 1.", "Check: $(-1)^1 = -1$, which satisfies the condition."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "Simplify $\\sqrt{45} + \\sqrt{20}$. Express the result in the form $k\\sqrt5$, and give the value of $k$.",
          correct: 5,
          steps: ["$\\sqrt{45}=\\sqrt{9\\times5}=3\\sqrt5$ and $\\sqrt{20}=\\sqrt{4\\times5}=2\\sqrt5$.", "$3\\sqrt5+2\\sqrt5=5\\sqrt5$, so $k=5$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "If $x^2 = 144$ and $x < 0$, what is the value of $\\sqrt{x^2} - x$?",
          correct: 24,
          steps: ["$x^2=144$ and $x<0$ means $x=-12$.", "$\\sqrt{x^2}=|x|=12$.", "$\\sqrt{x^2}-x = 12-(-12)=24$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "What is $\\frac{\\sqrt{200}}{\\sqrt{2}}$?",
          correct: 10,
          steps: ["$\\frac{\\sqrt{a}}{\\sqrt{b}}=\\sqrt{\\frac{a}{b}}$, so $\\frac{\\sqrt{200}}{\\sqrt2}=\\sqrt{\\frac{200}{2}}=\\sqrt{100}$.", "$\\sqrt{100}=10$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "If $0.6^n < 0.6^5$ and $n$ is a positive integer, what is the smallest possible value of $n$?",
          correct: 6,
          steps: ["The base $0.6$ is between 0 and 1, so a larger exponent gives a smaller value.", "For $0.6^n < 0.6^5$, we need $n > 5$.", "The smallest positive integer greater than 5 is 6."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "Simplify $2^{40} + 2^{40} + 2^{40} + 2^{40}$ and express the result as $2^k$. What is $k$?",
          correct: 42,
          steps: ["There are four identical terms of $2^{40}$, so the sum is $4\\times 2^{40}$.", "$4=2^2$, so $4\\times2^{40}=2^{42}$.", "$k=42$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "For which of the following values of $x$ is $\\sqrt{x^2} = x$? Select all that apply.",
          options: [ {key:"A", text:"−3"}, {key:"B", text:"0"}, {key:"C", text:"1"}, {key:"D", text:"5"}, {key:"E", text:"−1"} ],
          correct: ["B", "C", "D"],
          steps: [
            "$\\sqrt{x^2}=|x|$, which equals $x$ only when $x \\geq 0$.",
            "B (0): $|0|=0$, true. C (1): $|1|=1$, true. D (5): $|5|=5$, true.",
            "A (−3): $|-3|=3 \\neq -3$, false. E (−1): $|-1|=1 \\neq -1$, false."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following expressions are equivalent to $16$? Select all that apply.",
          options: [ {key:"A", text:"$2^4$"}, {key:"B", text:"$4^2$"}, {key:"C", text:"$8^{4/3}$"}, {key:"D", text:"$(-2)^4$"}, {key:"E", text:"$2^{4} \\times 2^{-1}$"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "A: $2^4=16$, true. B: $4^2=16$, true.",
            "C: $8^{4/3}=(8^{1/3})^4=2^4=16$, true. D: $(-2)^4 = 16$ since an even power of a negative number is positive, true.",
            "E: $2^4\\times2^{-1}=2^3=8 \\neq 16$, false."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "If $x$ is a real number satisfying $x^5 = -32$, which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$x = -2$"}, {key:"B", text:"$x$ is negative"}, {key:"C", text:"$x^2 = 4$"}, {key:"D", text:"There are two possible real values of $x$"}, {key:"E", text:"$|x| = 2$"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Since the exponent 5 is odd, there is exactly one real solution: $x=-2$ (A true, D false since there's only one real solution, not two).",
            "$x=-2$ is negative (B true). $x^2=(-2)^2=4$ (C true). $|x|=|-2|=2$ (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following are correctly simplified? Select all that apply.",
          options: [ {key:"A", text:"$\\sqrt{18}=3\\sqrt2$"}, {key:"B", text:"$\\sqrt{5}+\\sqrt{5}=\\sqrt{10}$"}, {key:"C", text:"$\\sqrt{75}=5\\sqrt3$"}, {key:"D", text:"$\\sqrt{4}\\times\\sqrt{9}=\\sqrt{36}$"}, {key:"E", text:"$2\\sqrt3+3\\sqrt3=5\\sqrt3$"} ],
          correct: ["A", "C", "D", "E"],
          steps: [
            "A: $\\sqrt{18}=\\sqrt{9\\times2}=3\\sqrt2$, true.",
            "B: $\\sqrt5+\\sqrt5=2\\sqrt5$, not $\\sqrt{10}$ (you can't add radicands of like terms), false.",
            "C: $\\sqrt{75}=\\sqrt{25\\times3}=5\\sqrt3$, true.",
            "D: $\\sqrt4\\times\\sqrt9=\\sqrt{4\\times9}=\\sqrt{36}$, true (and both sides equal 6).",
            "E: like radicands combine directly: $2\\sqrt3+3\\sqrt3=5\\sqrt3$, true."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "If $x^4 = y^4$ where $x$ and $y$ are real numbers, which of the following could be true? Select all that apply.",
          options: [ {key:"A", text:"$x = y$"}, {key:"B", text:"$x = -y$"}, {key:"C", text:"$x = 0$ and $y = 0$"}, {key:"D", text:"$x = -y$ and $x \\neq 0$"}, {key:"E", text:"$x = 2y$"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Since the exponent 4 is even, $x^4=y^4$ implies $x=y$ or $x=-y$.",
            "A, B, C, and D are all specific cases consistent with $x=y$ or $x=-y$ (C is the trivial case of both).",
            "E ($x=2y$) is not generally forced or even consistent unless $y=0$, but as a general relationship it does not satisfy $x^4=y^4$ for nonzero $y$ (since $(2y)^4=16y^4 \\neq y^4$), false."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "For which of the following bases $b$ does $b^2 > b^3$ hold? Select all that apply.",
          options: [ {key:"A", text:"$b = 0.5$"}, {key:"B", text:"$b = 2$"}, {key:"C", text:"$b = 0.9$"}, {key:"D", text:"$b = -1$"}, {key:"E", text:"$b = 1$"} ],
          correct: ["A", "C", "D"],
          steps: [
            "A: $0.5^2=0.25$, $0.5^3=0.125$; $0.25>0.125$, true.",
            "B: $2^2=4$, $2^3=8$; $4<8$, false.",
            "C: $0.9^2=0.81$, $0.9^3=0.729$; $0.81>0.729$, true.",
            "D: $(-1)^2=1$, $(-1)^3=-1$; $1>-1$, true.",
            "E: $1^2=1$, $1^3=1$; equal, not greater, false."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "$x$ is a real number and $x^2 = 25$.",
          quantityA: "$x$",
          quantityB: "$5$",
          correct: "D",
          steps: ["Since the exponent is even, $x=5$ or $x=-5$.", "If $x=5$, Quantity A equals Quantity B. If $x=-5$, Quantity A is less than Quantity B.", "The relationship cannot be determined."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$0 < x < 1$.",
          quantityA: "$x^3$",
          quantityB: "$x^5$",
          correct: "A",
          steps: ["For a base strictly between 0 and 1, a smaller exponent produces a larger value.", "Since $3<5$, $x^3 > x^5$ for all $x$ in this range.", "Quantity A is greater."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$x$ is a negative real number.",
          quantityA: "$\\sqrt{x^2}$",
          quantityB: "$x$",
          correct: "A",
          steps: ["$\\sqrt{x^2}=|x|$, and since $x$ is negative, $|x|=-x$, which is positive.", "Quantity B, $x$, is negative.", "A positive quantity is always greater than a negative one, so Quantity A is greater."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "$$3^{18}+3^{19}+3^{20}$$",
          quantityA: "The value of the expression above",
          quantityB: "$3^{18} \\times 18$",
          correct: "B",
          steps: ["Factor the expression by its lowest power, $3^{18}$: since $3^{19}=3^{18}\\times3$ and $3^{20}=3^{18}\\times9$, the sum is $3^{18}(1+3+9)=3^{18}(13)$.", "Quantity A equals $3^{18}\\times13$, and Quantity B equals $3^{18}\\times18$.", "Since $13 < 18$, Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$x$ is a positive integer and $\\sqrt{x}$ is also an integer.",
          quantityA: "The number of possible values of $x$ less than 100",
          quantityB: "$9$",
          correct: "C",
          steps: ["$x$ must be a perfect square less than 100: $1, 4, 9, 16, 25, 36, 49, 64, 81$.", "Counting these values gives 9 possible values of $x$ (note that $100$ itself is excluded since $x$ must be strictly less than 100).", "Quantity A equals 9, matching Quantity B."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$n$ is a positive integer.",
          quantityA: "$(-1)^{2n}$",
          quantityB: "$(-1)^{2n+1}$",
          correct: "A",
          steps: ["$2n$ is always even (for any integer $n$), so $(-1)^{2n}=1$.", "$2n+1$ is always odd, so $(-1)^{2n+1}=-1$.", "$1 > -1$, so Quantity A is greater."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "Which of the following is the best estimate of $\\sqrt{95}$?",
          options: [ {key:"A", text:"8.7"}, {key:"B", text:"9.2"}, {key:"C", text:"9.7"}, {key:"D", text:"10.2"}, {key:"E", text:"11.0"} ],
          correct: "C",
          steps: ["Bound it: $\\sqrt{81} < \\sqrt{95} < \\sqrt{100}$, so $9 < \\sqrt{95} < 10$.", "$95$ is close to $100$, so $\\sqrt{95}$ should be close to but a bit less than 10.", "9.7 fits this range well ($9.7^2 = 94.09$, very close to 95)."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "Point $A$ is at $-8$ and point $B$ is at $14$ on a number line. What is the coordinate of the midpoint of segment $AB$?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"4"}, {key:"C", text:"5"}, {key:"D", text:"6"}, {key:"E", text:"11"} ],
          correct: "A",
          steps: ["Midpoint $=\\frac{a+b}{2}=\\frac{-8+14}{2}$.", "$\\frac{6}{2}=3$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "What is the distance between $-15$ and $22$ on a number line?",
          options: [ {key:"A", text:"7"}, {key:"B", text:"27"}, {key:"C", text:"33"}, {key:"D", text:"37"}, {key:"E", text:"22"} ],
          correct: "D",
          steps: ["Distance $=|a-b|=|-15-22|=|-37|$.", "$=37$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "If $x$ and $y$ are on opposite sides of 0 on a number line, and $|x| > |y|$, what is the sign of $x + y$?",
          options: [ {key:"A", text:"Always positive"}, {key:"B", text:"Always negative"}, {key:"C", text:"Same sign as $x$"}, {key:"D", text:"Same sign as $y$"}, {key:"E", text:"Cannot be determined"} ],
          correct: "C",
          steps: ["Since $x$ and $y$ have opposite signs, $x+y$ is a partial cancellation.", "Because $|x|>|y|$, the larger-magnitude term $x$ dominates the sum, so the result has the same sign as $x$.", "For example, $x=5, y=-2$: sum is 3, same sign as $x$. Or $x=-5,y=2$: sum is $-3$, same sign as $x$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "Using $0.334 \\approx \\frac13$, which is the best approximation of $0.334 \\times 27$?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"9"}, {key:"C", text:"12"}, {key:"D", text:"18"}, {key:"E", text:"27"} ],
          correct: "B",
          steps: ["Approximate $0.334$ as $\\frac13$.", "$\\frac13 \\times 27 = 9$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "On a number line, $x$, $y$, and $z$ are positioned so that $x < y < z$, and $y$ is the midpoint of $x$ and $z$. If $x = -6$ and $z = 20$, what is $y$?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"7"}, {key:"C", text:"8"}, {key:"D", text:"13"}, {key:"E", text:"14"} ],
          correct: "B",
          steps: ["Midpoint $y = \\frac{x+z}{2} = \\frac{-6+20}{2}$.", "$\\frac{14}{2}=7$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "Which of the following is closest in value to $\\sqrt{123}$?",
          options: [ {key:"A", text:"10"}, {key:"B", text:"10.5"}, {key:"C", text:"11.1"}, {key:"D", text:"11.8"}, {key:"E", text:"12.5"} ],
          correct: "C",
          steps: ["Bound: $\\sqrt{121} < \\sqrt{123} < \\sqrt{144}$, so $11 < \\sqrt{123} < 12$, and much closer to 11 since 123 is barely above 121.", "$11.1^2 = 123.21$, extremely close to 123, confirming this estimate."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "If $x < 0 < y$ on a number line, and $|x| = 3|y|$, which of the following could be true?",
          options: [ {key:"A", text:"$x + y = 0$"}, {key:"B", text:"$x = y$"}, {key:"C", text:"$x + 3y = 0$"}, {key:"D", text:"The midpoint of $x$ and $y$ is positive"}, {key:"E", text:"$3x + y = 0$"} ],
          correct: "C",
          steps: ["Let $y=k>0$, so $x=-3k$ (since $x<0$ and $|x|=3|y|=3k$).", "Test C: $x+3y = -3k+3k = 0$. True for any $k$.", "Test D: midpoint $=\\frac{x+y}{2}=\\frac{-3k+k}{2}=-k$, which is negative, not positive. Test A: $x+y=-3k+k=-2k \\neq 0$. So C is the one that must be true."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "$0.667$ is closest to which fraction?",
          options: [ {key:"A", text:"$\\frac{1}{2}$"}, {key:"B", text:"$\\frac{3}{5}$"}, {key:"C", text:"$\\frac{2}{3}$"}, {key:"D", text:"$\\frac{3}{4}$"}, {key:"E", text:"$\\frac{5}{7}$"} ],
          correct: "C",
          steps: ["$\\frac23 = 0.6\\overline{6}$, which rounds to $0.667$.", "This matches the given decimal almost exactly."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "Points $P$, $Q$, and $R$ lie on a number line in that order. $PQ = 9$ and $QR = 15$. What is the distance from $P$ to the midpoint of segment $QR$?",
          options: [ {key:"A", text:"9"}, {key:"B", text:"13.5"}, {key:"C", text:"16.5"}, {key:"D", text:"22.5"}, {key:"E", text:"24"} ],
          correct: "C",
          steps: ["Let $P=0$. Then $Q=9$ (since $PQ=9$), and $R=9+15=24$ (since $QR=15$).", "Midpoint of $QR$ is $\\frac{9+24}{2}=16.5$.", "Distance from $P$ (at 0) to 16.5 is 16.5."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "What integer $n$ satisfies $n < \\sqrt{130} < n+1$?",
          correct: 11,
          steps: ["$11^2=121$ and $12^2=144$.", "Since $121<130<144$, we have $11<\\sqrt{130}<12$, so $n=11$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "On a number line, point $A$ is at coordinate $-6$ and point $B$ is at coordinate $18$. What is the coordinate of the point on segment $AB$ that is twice as far from $A$ as it is from $B$?",
          correct: 10,
          steps: ["A point twice as far from $A$ as from $B$ divides segment $AB$ in ratio $2:1$ measured from $A$, so it sits two-thirds of the way from $A$ to $B$.", "Total distance from $A$ to $B$ is $18-(-6)=24$.", "Point $= A + \\frac23(24) = -6+16 = 10$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "Estimate $\\sqrt{40} + \\sqrt{40}$ to the nearest integer.",
          correct: 13,
          steps: ["$\\sqrt{40}$ is between $\\sqrt{36}=6$ and $\\sqrt{49}=7$, closer to 6.3 since $6.3^2=39.69$.", "$\\sqrt{40}+\\sqrt{40} \\approx 6.32+6.32=12.65$, which rounds to 13."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "On a number line, the distance between $x$ and $-4$ is 9, and $x$ is positive. What is the value of $x$?",
          correct: 5,
          steps: ["$|x-(-4)|=9$, so $|x+4|=9$.", "This gives $x+4=9$ or $x+4=-9$, so $x=5$ or $x=-13$.", "Since $x$ is positive, $x=5$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "Using the approximation $0.143 \\approx \\frac17$, estimate $0.143 \\times 490$.",
          correct: 70,
          steps: ["Approximate $0.143$ as $\\frac17$.", "$\\frac17 \\times 490 = 70$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "Points $M$ and $N$ are on a number line with $M$ at $-12$. The midpoint of $M$ and $N$ is $3$. What is the coordinate of $N$?",
          correct: 18,
          steps: ["Midpoint formula: $3 = \\frac{-12+N}{2}$.", "$6 = -12+N$, so $N=18$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "How many integers lie strictly between $\\sqrt{10}$ and $\\sqrt{99}$?",
          correct: 6,
          steps: ["$\\sqrt{10}$ is between 3 and 4 (since $3^2=9<10$), so the smallest integer greater than $\\sqrt{10}$ is 4.", "$\\sqrt{99}$ is between 9 and 10 (since $9^2=81<99<100=10^2$), so the largest integer less than $\\sqrt{99}$ is 9.", "Integers from 4 to 9 inclusive: 4,5,6,7,8,9, which is 6 integers."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "$x$ and $y$ are both negative numbers on a number line, with $x$ to the left of $y$. If $x=-20$ and the distance between $x$ and $y$ is 7, what is $y$?",
          correct: -13,
          steps: ["Since $x$ is to the left of $y$, $y = x + 7$.", "$y=-20+7=-13$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following values of $n$ satisfy $7 < \\sqrt{n} < 8$? Select all that apply.",
          options: [ {key:"A", text:"48"}, {key:"B", text:"52"}, {key:"C", text:"63"}, {key:"D", text:"64"}, {key:"E", text:"50"} ],
          correct: ["B", "C", "E"],
          steps: [
            "The condition $7<\\sqrt n<8$ is equivalent to $49<n<64$.",
            "A (48): fails, $48<49$. B (52): $49<52<64$, valid. C (63): $49<63<64$, valid.",
            "D (64): fails, $\\sqrt{64}=8$ exactly, not strictly less than 8. E (50): $49<50<64$, valid."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Points $x$ and $y$ satisfy $xy < 0$ on a number line. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$x$ and $y$ are on opposite sides of 0"}, {key:"B", text:"$x + y = 0$"}, {key:"C", text:"$|x - y| > |x|$"}, {key:"D", text:"$|x - y| > |y|$"}, {key:"E", text:"Exactly one of $x, y$ is negative"} ],
          correct: ["A", "C", "D", "E"],
          steps: [
            "$xy<0$ means one factor is positive and one is negative, so $x$ and $y$ lie on opposite sides of 0 (A true) and exactly one of them is negative (E true).",
            "B is false in general: e.g. $x=5, y=-1$ gives $xy=-5<0$ but $x+y=4\\neq0$.",
            "Since $x$ and $y$ have opposite signs and neither is 0, $|x-y| = |x|+|y|$ (the distance between them is the sum of their distances from 0).",
            "This sum is always strictly greater than $|x|$ alone and strictly greater than $|y|$ alone, so C and D are always true."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following are reasonable estimates (within 0.1) of $\\sqrt{50}$? Select all that apply.",
          options: [ {key:"A", text:"7.0"}, {key:"B", text:"7.1"}, {key:"C", text:"7.5"}, {key:"D", text:"8.0"}, {key:"E", text:"6.9"} ],
          correct: ["A", "B"],
          steps: [
            "$\\sqrt{50} \\approx 7.071$ (since $7.07^2 \\approx 49.98$).",
            "Within 0.1 of 7.071 means the estimate must fall strictly between 6.971 and 7.171.",
            "A (7.0): $|7.0-7.071|=0.071$, within range, true. B (7.1): $|7.1-7.071|=0.029$, within range, true.",
            "C (7.5): difference 0.429, false. D (8.0): difference 0.929, false. E (6.9): difference 0.171, exceeds 0.1, false."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "On a number line, $-10 \\leq x \\leq 4$. Which of the following could be the distance from $x$ to $-3$? Select all that apply.",
          options: [ {key:"A", text:"0"}, {key:"B", text:"5"}, {key:"C", text:"7"}, {key:"D", text:"9"}, {key:"E", text:"12"} ],
          correct: ["A", "B", "C"],
          steps: [
            "The point $-3$ lies inside the interval $[-10, 4]$, so the distance from $x$ to $-3$ ranges from 0 up to the largest distance to either endpoint.",
            "Distance from $-3$ to $-10$ is $|-10-(-3)|=7$. Distance from $-3$ to $4$ is $|4-(-3)|=7$.",
            "So the achievable distances range continuously from 0 to 7. Values A (0), B (5), and C (7) are all possible.",
            "D (9) and E (12) exceed the maximum possible distance of 7, so they are not possible."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "$x$ is a number line coordinate with $|x - 6| \\leq 4$. Which of the following are possible values of $x$? Select all that apply.",
          options: [ {key:"A", text:"2"}, {key:"B", text:"3"}, {key:"C", text:"5"}, {key:"D", text:"9"}, {key:"E", text:"11"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "$|x-6|\\leq4$ means $x$ is within 4 of 6, so $2 \\leq x \\leq 10$.",
            "A (2): $|2-6|=4\\leq4$, valid. B (3): $|3-6|=3\\leq4$, valid. C (5): $|5-6|=1\\leq4$, valid. D (9): $|9-6|=3\\leq4$, valid.",
            "E (11): $|11-6|=5>4$, invalid.",
            "Valid values: A, B, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following fractions round to $0.6$ when expressed as a decimal to one decimal place? Select all that apply.",
          options: [ {key:"A", text:"$\\frac{3}{5}$"}, {key:"B", text:"$\\frac{5}{8}$"}, {key:"C", text:"$\\frac{4}{7}$"}, {key:"D", text:"$\\frac{7}{12}$"}, {key:"E", text:"$\\frac{11}{18}$"} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "A: $3/5=0.60$, rounds to 0.6.",
            "B: $5/8=0.625$, rounds to 0.6. C: $4/7\\approx0.571$, rounds to 0.6.",
            "D: $7/12\\approx0.583$, rounds to 0.6. E: $11/18\\approx0.611$, rounds to 0.6.",
            "All five fractions round to 0.6 to one decimal place."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "$x$ is the coordinate of the midpoint between $-9$ and $17$ on a number line.",
          quantityA: "$x$",
          quantityB: "$4$",
          correct: "C",
          steps: ["Midpoint $= \\frac{-9+17}{2} = \\frac{8}{2} = 4$.", "So $x=4$, which matches Quantity B exactly.", "Both quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "On a number line, $a = -6$ and $b = 11$.",
          quantityA: "The distance from $a$ to $b$",
          quantityB: "$2 \\times$ (distance from $a$ to the midpoint of $a$ and $b$)",
          correct: "C",
          steps: ["Distance from $a$ to $b$: $|{-6}-11|=17$.", "Midpoint of $a,b$: $\\frac{-6+11}{2}=2.5$. Distance from $a$ to midpoint: $|{-6}-2.5|=8.5$.", "$2\\times8.5=17$, which equals Quantity A. Both quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$x = \\sqrt{85}$",
          quantityA: "9.2",
          quantityB: "$x$",
          correct: "B",
          steps: ["Bound $\\sqrt{85}$: $\\sqrt{81}=9 < \\sqrt{85} < \\sqrt{100}=10$.", "Since $9.2^2 = 84.64 < 85$, it follows that $9.2 < \\sqrt{85}$.", "Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "$x$ and $y$ are on a number line with $x < 0 < y$ and $|x| = |y|$.",
          quantityA: "$x + y$",
          quantityB: "The midpoint of $x$ and $y$",
          correct: "C",
          steps: ["Since $|x|=|y|$ with $x$ negative and $y$ positive, $y=-x$, so $x+y=0$.", "Midpoint $=\\frac{x+y}{2}=\\frac{0}{2}=0$.", "Both quantities equal 0."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$n$ is a positive integer such that $6 < \\sqrt{n} < 7$.",
          quantityA: "The number of possible integer values of $n$",
          quantityB: "$12$",
          correct: "C",
          steps: ["$6<\\sqrt n<7$ means $36<n<49$.", "Integers strictly between 36 and 49: 37 through 48, inclusive.", "$48-37+1=12$ values, matching Quantity B."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "On a number line, points $A$, $B$, $C$ are positioned left to right with $AB = 6$ and $BC = 10$.",
          quantityA: "The distance from $A$ to the midpoint of $BC$",
          quantityB: "$11$",
          correct: "C",
          steps: ["Let $A=0$. Then $B=6$ (since $AB=6$), and $C=6+10=16$ (since $BC=10$).", "Midpoint of $BC$: $\\frac{6+16}{2}=11$.", "Distance from $A$ (at 0) to 11 is 11, matching Quantity B."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A jacket originally priced at \\$250 is increased by 20%, then discounted 25% during a sale. What is the final price?",
          options: [ {key:"A", text:"\\$200"}, {key:"B", text:"\\$210"}, {key:"C", text:"\\$225"}, {key:"D", text:"\\$237.50"}, {key:"E", text:"\\$250"} ],
          correct: "C",
          steps: ["Apply the multipliers in sequence: $250 \\times 1.20 \\times 0.75$.", "$250 \\times 1.20 = 300$.", "$300 \\times 0.75 = 225$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "A savings account grows by 10% in the first year and 10% in the second year. What is the overall percent increase over the two years?",
          options: [ {key:"A", text:"20%"}, {key:"B", text:"20.5%"}, {key:"C", text:"21%"}, {key:"D", text:"22%"}, {key:"E", text:"1%"} ],
          correct: "C",
          steps: ["Multiply the growth factors: $1.10 \\times 1.10 = 1.21$.", "This represents a 21% overall increase, not the naive sum of 10%+10%=20%."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "40 is what percent more than 25?",
          options: [ {key:"A", text:"15%"}, {key:"B", text:"37.5%"}, {key:"C", text:"40%"}, {key:"D", text:"60%"}, {key:"E", text:"160%"} ],
          correct: "D",
          steps: ["\"Percent more than 25\" means 25 is the denominator (the base of comparison).", "$\\frac{40-25}{25}\\times100\\% = \\frac{15}{25}\\times100\\% = 60\\%$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "25 is what percent less than 40?",
          options: [ {key:"A", text:"15%"}, {key:"B", text:"25%"}, {key:"C", text:"37.5%"}, {key:"D", text:"60%"}, {key:"E", text:"62.5%"} ],
          correct: "C",
          steps: ["\"Percent less than 40\" means 40 is the denominator.", "$\\frac{40-25}{40}\\times100\\% = \\frac{15}{40}\\times100\\% = 37.5\\%$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "A price increases by 50%. By approximately what percent must it now decrease to return to its original value?",
          options: [ {key:"A", text:"25%"}, {key:"B", text:"33.3%"}, {key:"C", text:"50%"}, {key:"D", text:"66.7%"}, {key:"E", text:"75%"} ],
          correct: "B",
          steps: ["Let original price be $P$. After the increase: $1.5P$.", "We need $1.5P \\times (1-x) = P$, so $1-x = \\frac{1}{1.5} = \\frac{2}{3}$.", "$x = 1-\\frac23 = \\frac13 \\approx 33.3\\%$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A stock's value fell from \\$120 to \\$90. What was the percent decrease?",
          options: [ {key:"A", text:"20%"}, {key:"B", text:"25%"}, {key:"C", text:"30%"}, {key:"D", text:"33.3%"}, {key:"E", text:"75%"} ],
          correct: "B",
          steps: ["Percent change $=\\frac{\\text{New}-\\text{Old}}{\\text{Old}}\\times100\\% = \\frac{90-120}{120}\\times100\\%$.", "$\\frac{-30}{120}\\times100\\% = -25\\%$, a 25% decrease."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "60 is increased by 150%. What is the resulting value?",
          options: [ {key:"A", text:"90"}, {key:"B", text:"120"}, {key:"C", text:"150"}, {key:"D", text:"180"}, {key:"E", text:"210"} ],
          correct: "C",
          steps: ["Increasing by 150% means multiplying by $1+1.5=2.5$.", "$60 \\times 2.5 = 150$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A town's population grows 10% per year. Starting from 1,000 people, what is the population after 2 years?",
          options: [ {key:"A", text:"1,100"}, {key:"B", text:"1,190"}, {key:"C", text:"1,200"}, {key:"D", text:"1,210"}, {key:"E", text:"1,220"} ],
          correct: "D",
          steps: ["Apply the 10% growth factor twice: $1000 \\times 1.1 \\times 1.1$.", "$1000\\times1.1 = 1100$, then $1100 \\times 1.1 = 1210$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "An item is discounted 30%, and then 8% sales tax is applied to the discounted price. If the final price paid is \\$75.60, what was the original price?",
          options: [ {key:"A", text:"\\$90"}, {key:"B", text:"\\$95"}, {key:"C", text:"\\$97.50"}, {key:"D", text:"\\$100"}, {key:"E", text:"\\$108"} ],
          correct: "D",
          steps: ["Let original price be $P$. After the discount: $0.70P$. After tax: $0.70P \\times 1.08$.", "$0.70 \\times 1.08 = 0.756$, so $0.756P = 75.60$.", "$P = 75.60/0.756 = 100$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "When $x$ is increased by 40%, the result is 84. What is $x$?",
          options: [ {key:"A", text:"50"}, {key:"B", text:"56"}, {key:"C", text:"58.8"}, {key:"D", text:"60"}, {key:"E", text:"64"} ],
          correct: "D",
          steps: ["$x \\times 1.40 = 84$.", "$x = 84/1.4 = 60$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A value rises from 80 to 100. What is the percent increase?",
          correct: 25,
          steps: ["Percent change $=\\frac{100-80}{80}\\times100\\%$.", "$\\frac{20}{80}\\times100\\% = 25\\%$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A value decreases 15% to reach 85. What was the original value?",
          correct: 100,
          steps: ["If the original value is $V$, then $V\\times0.85=85$.", "$V=85/0.85=100$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A price increases 20%, then decreases 20%. What is the net percent change, as a negative number (e.g. enter −4 for a 4% decrease)?",
          correct: -4,
          steps: ["Multiply the factors: $1.20 \\times 0.80 = 0.96$.", "This is a 4% net decrease from the original, so the net percent change is $-4$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "45 is 150% of what number?",
          correct: 30,
          steps: ["$1.50 \\times x = 45$.", "$x = 45/1.5 = 30$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A quantity increases from 50 to 70. What is the percent increase?",
          correct: 40,
          steps: ["Percent change $=\\frac{70-50}{50}\\times100\\%$.", "$\\frac{20}{50}\\times100\\%=40\\%$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A price of \\$100 increases by 25% three times in succession (i.e. three consecutive 25% increases). What is the final price, in dollars?",
          correct: 195.3125,
          steps: ["Apply the multiplier $1.25$ three times: $100 \\times 1.25^3$.", "$1.25^3 = 1.953125$.", "$100 \\times 1.953125 = 195.3125$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "30% of a number is 45. What is the number?",
          correct: 150,
          steps: ["$0.30 \\times x = 45$.", "$x = 45/0.30 = 150$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "A company's revenue increased 20% this year to \\$240,000. What was last year's revenue, in thousands of dollars?",
          correct: 200,
          steps: ["Let last year's revenue be $R$ (in thousands). Then $R \\times 1.20 = 240$.", "$R = 240/1.2 = 200$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "A price undergoes a 25% increase followed by a decrease of $x\\%$. Which of the following values of $x$ would result in a final price LOWER than the original price? Select all that apply.",
          options: [ {key:"A", text:"15"}, {key:"B", text:"20"}, {key:"C", text:"25"}, {key:"D", text:"30"}, {key:"E", text:"5"} ],
          correct: ["C", "D"],
          steps: [
            "Final price factor is $1.25 \\times (1-x/100)$. This is below 1 (original) when $1-x/100 < 1/1.25 = 0.8$, i.e. when $x > 20$.",
            "A (15): $1.25\\times0.85=1.0625$, above original, not lower. B (20): $1.25\\times0.80=1.00$, exactly equal, not lower.",
            "C (25): $1.25\\times0.75=0.9375$, lower. D (30): $1.25\\times0.70=0.875$, lower. E (5): $1.25\\times0.95=1.1875$, not lower.",
            "Only C and D result in a final price below the original."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following pairs of successive percent changes result in a net INCREASE overall? Select all that apply.",
          options: [ {key:"A", text:"+30% then −20%"}, {key:"B", text:"+10% then −10%"}, {key:"C", text:"+50% then −40%"}, {key:"D", text:"−20% then +20%"}, {key:"E", text:"+25% then −15%"} ],
          correct: ["A", "E"],
          steps: [
            "Compute each combined multiplier and compare to 1.",
            "A: $1.30\\times0.80=1.04$, net increase. B: $1.10\\times0.90=0.99$, net decrease.",
            "C: $1.50\\times0.60=0.90$, net decrease. D: $0.80\\times1.20=0.96$, net decrease. E: $1.25\\times0.85=1.0625$, net increase.",
            "Net increases occur only for A and E."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "A shirt's price is \\$50. Which of the following final prices are achievable through a single percent increase between 10% and 30% (inclusive)? Select all that apply.",
          options: [ {key:"A", text:"\\$52"}, {key:"B", text:"\\$55"}, {key:"C", text:"\\$60"}, {key:"D", text:"\\$63"}, {key:"E", text:"\\$68"} ],
          correct: ["B", "C", "D"],
          steps: [
            "A 10% increase gives $50\\times1.10=55$; a 30% increase gives $50\\times1.30=65$. So achievable final prices range from \\$55 to \\$65.",
            "A (\\$52): below \\$55, not achievable. B (\\$55): the 10% boundary, achievable.",
            "C (\\$60): corresponds to a 20% increase, achievable. D (\\$63): corresponds to a 26% increase, achievable.",
            "E (\\$68): above \\$65, not achievable."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A value $V$ is increased by 40% to get $W$. Which of the following statements are true? Select all that apply.",
          options: [ {key:"A", text:"$W = 1.4V$"}, {key:"B", text:"$V$ is 40% less than $W$"}, {key:"C", text:"$V \\approx 0.714W$"}, {key:"D", text:"$W$ is 140% of $V$"}, {key:"E", text:"$V$ is about 28.6% less than $W$"} ],
          correct: ["A", "C", "D", "E"],
          steps: [
            "A: by definition, $W=V\\times1.40=1.4V$, true. D: this restates the same relationship, true.",
            "C: $V = W/1.4 \\approx 0.714W$, true.",
            "E: percent by which $V$ is less than $W$ is $\\frac{W-V}{W}\\times100\\% = \\frac{1.4V-V}{1.4V}\\times100\\% = \\frac{0.4}{1.4}\\times100\\% \\approx 28.6\\%$, true.",
            "B is false: $V$ is NOT 40% less than $W$ (that would require the 40% denominator to be $W$, not $V$; the actual figure is about 28.6%, as shown in E)."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "A price is first increased by 10%, then increased again by 10%. Which of the following are true about the result compared to a single 20% increase on the original price? Select all that apply.",
          options: [ {key:"A", text:"The two successive 10% increases produce a larger final price than a single 20% increase."}, {key:"B", text:"The two successive 10% increases produce the same final price as a single 20% increase."}, {key:"C", text:"The two successive 10% increases produce a net increase of 21%."}, {key:"D", text:"A single 20% increase produces a net increase of exactly 20%."}, {key:"E", text:"The difference between the two methods is 1 percentage point of net growth."} ],
          correct: ["A", "C", "D", "E"],
          steps: [
            "Successive 10% increases: $1.10\\times1.10=1.21$, a net 21% increase (C true).",
            "A single 20% increase: multiplier $1.20$, a net 20% increase exactly (D true).",
            "Since $1.21 > 1.20$, the successive increases yield a larger final price (A true, B false).",
            "$21\\% - 20\\% = 1$ percentage point difference (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following correctly describe the relationship: \"60 is 20% more than $x$\"? Select all that apply.",
          options: [ {key:"A", text:"$x \\times 1.2 = 60$"}, {key:"B", text:"$x = 50$"}, {key:"C", text:"$60 \\times 0.8 = x$"}, {key:"D", text:"$x = 48$"}, {key:"E", text:"60 is the base of comparison"} ],
          correct: ["A", "B"],
          steps: [
            "\"60 is 20% more than $x$\" means $x$ is the base: $60 = x \\times 1.2$ (A true).",
            "Solve: $x = 60/1.2 = 50$ (B true, D false).",
            "C is false: $60\\times0.8=48\\neq50$, this formula doesn't correctly invert a percent increase.",
            "E is false: $x$, not 60, is the base of comparison in this statement."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A price increases by 30% and then decreases by 30%.",
          quantityA: "The final price as a percent of the original price",
          quantityB: "100%",
          correct: "B",
          steps: ["Combined multiplier: $1.30\\times0.70=0.91$.", "The final price is 91% of the original.", "91% is less than 100%, so Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$x$ is 25% greater than $y$, and $y$ is positive.",
          quantityA: "$y$",
          quantityB: "80% of $x$",
          correct: "C",
          steps: ["$x = 1.25y$, so $y = x/1.25 = 0.8x$, which is 80% of $x$.", "Both quantities equal $0.8x$, so they are equal."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A quantity decreases by 50% and then increases by 50%.",
          quantityA: "The final value",
          quantityB: "The original value",
          correct: "B",
          steps: ["Combined multiplier: $0.50\\times1.50=0.75$.", "The final value is 75% of the original, which is less than the original.", "Quantity B (the original value) is greater."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "Item A's price increases from \\$40 to \\$50. Item B's price increases from \\$80 to \\$95.",
          quantityA: "The percent increase in Item A's price",
          quantityB: "The percent increase in Item B's price",
          correct: "A",
          steps: ["Item A: $\\frac{50-40}{40}\\times100\\%=25\\%$.", "Item B: $\\frac{95-80}{80}\\times100\\%=18.75\\%$.", "Quantity A (25%) is greater than Quantity B (18.75%)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$m$ is 40% of $n$, and $n$ is 40% of $p$, where $p>0$.",
          quantityA: "$m$",
          quantityB: "$0.16p$",
          correct: "C",
          steps: ["$n = 0.40p$, and $m = 0.40n = 0.40(0.40p) = 0.16p$.", "Quantity A equals $0.16p$, matching Quantity B exactly.", "The quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A population increases by 10% each year for 3 consecutive years.",
          quantityA: "The total percent increase over the 3 years",
          quantityB: "30%",
          correct: "A",
          steps: ["Combined multiplier: $1.10^3 = 1.331$.", "This represents a 33.1% total increase.", "33.1% is greater than 30%, so Quantity A is greater."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A group of 40 marbles is divided between two jars in the ratio $3:5$. How many marbles are in the larger jar?",
          options: [ {key:"A", text:"15"}, {key:"B", text:"20"}, {key:"C", text:"24"}, {key:"D", text:"25"}, {key:"E", text:"30"} ],
          correct: "D",
          steps: ["The ratio parts sum to $3+5=8$ shares.", "Each share is worth $40/8=5$ marbles.", "The larger jar gets $5\\times5=25$ marbles."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "A car travels at a constant rate of 60 miles per hour for 3.5 hours. How far does it travel?",
          options: [ {key:"A", text:"180 miles"}, {key:"B", text:"195 miles"}, {key:"C", text:"200 miles"}, {key:"D", text:"210 miles"}, {key:"E", text:"215 miles"} ],
          correct: "D",
          steps: ["Distance $=$ rate $\\times$ time.", "$60 \\times 3.5 = 210$ miles."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "Pipe A can fill a tank in 4 hours alone. Pipe B can fill the same tank in 12 hours alone. Working together, how many hours does it take to fill the tank?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"2.5"}, {key:"C", text:"3"}, {key:"D", text:"6"}, {key:"E", text:"8"} ],
          correct: "C",
          steps: ["Individual rates add: $\\frac{1}{T} = \\frac14 + \\frac{1}{12}$.", "$\\frac14=\\frac{3}{12}$, so $\\frac{1}{T}=\\frac{3}{12}+\\frac{1}{12}=\\frac{4}{12}=\\frac13$.", "$T=3$ hours."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "On a map, 1 inch represents 25 miles of actual distance. Two cities are 6.5 inches apart on the map. What is the actual distance between them?",
          options: [ {key:"A", text:"130 miles"}, {key:"B", text:"150 miles"}, {key:"C", text:"162.5 miles"}, {key:"D", text:"175 miles"}, {key:"E", text:"200 miles"} ],
          correct: "C",
          steps: ["Set up the proportion: $\\frac{1\\text{ in}}{25\\text{ mi}} = \\frac{6.5\\text{ in}}{x\\text{ mi}}$.", "$x = 6.5 \\times 25 = 162.5$ miles."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "In a group, $A:B = 5:6$ and $B:C = 2:3$. What is the combined ratio $A:B:C$?",
          options: [ {key:"A", text:"5:6:9"}, {key:"B", text:"5:12:9"}, {key:"C", text:"10:12:9"}, {key:"D", text:"5:6:3"}, {key:"E", text:"15:18:27"} ],
          correct: "A",
          steps: ["The shared term is $B$. In the first ratio $B=6$; in the second, $B=2$. LCM of 6 and 2 is 6.", "First ratio already has $B=6$. Rescale the second ratio ($B:C=2:3$) by 3 so $B=6$: $B:C=6:9$.", "Merge: $A:B:C = 5:6:9$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "Three workers, working at the same rate, complete a job in 8 days. How many days would it take one worker alone to complete the same job?",
          options: [ {key:"A", text:"11"}, {key:"B", text:"16"}, {key:"C", text:"20"}, {key:"D", text:"24"}, {key:"E", text:"32"} ],
          correct: "D",
          steps: ["Three workers together have a combined rate of $\\frac{1}{8}$ job/day, so each worker's rate is $\\frac{1}{8}\\div3=\\frac{1}{24}$ job/day.", "One worker alone takes $24$ days."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "Two runners cover the same distance. Their speeds are in the ratio $4:7$. If the faster runner takes 8 hours to finish, how long does the slower runner take?",
          options: [ {key:"A", text:"4.57 hours"}, {key:"B", text:"11 hours"}, {key:"C", text:"12.25 hours"}, {key:"D", text:"14 hours"}, {key:"E", text:"16 hours"} ],
          correct: "D",
          steps: ["For a fixed distance, time is inversely proportional to speed, so the time ratio is the reverse of the speed ratio: $7:4$.", "The faster runner (speed ratio part 7) takes 8 hours, so each 'time unit' is $8/4=2$ hours.", "The slower runner corresponds to the time ratio part 7: $7\\times2=14$ hours."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A solution contains sugar and water in the ratio $3:7$. If the total volume is 60 liters, how many liters of water are in the solution?",
          options: [ {key:"A", text:"18"}, {key:"B", text:"24"}, {key:"C", text:"36"}, {key:"D", text:"40"}, {key:"E", text:"42"} ],
          correct: "E",
          steps: ["The ratio parts sum to $3+7=10$ shares, each worth $60/10=6$ liters.", "Water is $7$ shares: $7\\times6=42$ liters."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "Two trains start 390 miles apart and move toward each other, one at 70 mph and the other at 60 mph. How many hours until they meet?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"2.5"}, {key:"C", text:"3"}, {key:"D", text:"3.5"}, {key:"E", text:"4"} ],
          correct: "C",
          steps: ["Their closing rate is the sum of their speeds: $70+60=130$ mph.", "Time $=\\frac{\\text{distance}}{\\text{rate}} = \\frac{390}{130} = 3$ hours."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "24 workers can complete a job in 15 days. How many days would it take 40 workers, working at the same individual rate, to complete the same job?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"7.5"}, {key:"C", text:"9"}, {key:"D", text:"10"}, {key:"E", text:"12"} ],
          correct: "C",
          steps: ["Total work is constant: workers $\\times$ days $=24\\times15=360$ worker-days.", "With 40 workers: days $=360/40=9$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A total of 64 stickers is divided in the ratio $7:9$ between two friends. How many stickers does the friend with the smaller share get?",
          correct: 28,
          steps: ["The ratio parts sum to $7+9=16$ shares, each worth $64/16=4$ stickers.", "The smaller share is $7$ parts: $7\\times4=28$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "Machine A alone takes 6 hours to complete a job. Machine B alone also takes 6 hours. Working together, how many hours does the job take?",
          correct: 3,
          steps: ["Combined rate: $\\frac{1}{6}+\\frac{1}{6}=\\frac{2}{6}=\\frac13$ job/hour.", "Time $=1\\div\\frac13=3$ hours."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A cyclist rides at a constant 45 mph for 2.6 hours. How many miles does the cyclist travel?",
          correct: 117,
          steps: ["Distance $=$ rate $\\times$ time.", "$45 \\times 2.6 = 117$ miles."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "In a mixture, $a:b:c = 2:3:5$. If $c=40$, what is $a$?",
          correct: 16,
          steps: ["Each ratio unit is worth $40/5=8$.", "$a = 2\\times8=16$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A job takes 5 workers 12 days to complete. How many days would it take 1 worker alone, at the same individual rate?",
          correct: 60,
          steps: ["Total work is $5\\times12=60$ worker-days.", "One worker alone needs $60/1=60$ days."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "$A:B=4:9$ and $B:C=3:2$. After bridging the ratios so $B$ matches, what is the value of $C$ in the combined ratio $A:B:C$ (using the smallest whole-number form)?",
          correct: 6,
          steps: ["Shared term $B$: first ratio has $B=9$, second has $B=3$. LCM of 9 and 3 is 9.", "First ratio is already $A:B=4:9$. Rescale the second by 3: $B:C=9:6$.", "Combined ratio: $A:B:C=4:9:6$, so $C=6$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A pump fills $\\frac{1}{10}$ of a tank each hour. How many hours does it take to fill $\\frac{3}{5}$ of the tank?",
          correct: 6,
          steps: ["Time $=\\frac{3/5}{1/10} = \\frac35\\times10 = 6$ hours."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "Worker A completes a job alone in 30 days. Workers A and B together complete the same job in 18 days. In how many days would Worker B alone complete the job?",
          correct: 45,
          steps: ["Worker A's rate is $\\frac{1}{30}$ job/day. Combined rate is $\\frac{1}{18}$ job/day.", "Worker B's rate: $\\frac{1}{18}-\\frac{1}{30}$. Common denominator 90: $\\frac{5}{90}-\\frac{3}{90}=\\frac{2}{90}=\\frac{1}{45}$.", "Worker B alone takes $45$ days."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "A recipe requires flour and sugar in the ratio $5:2$. Which of the following amounts of flour and sugar (in cups) correctly maintain this ratio? Select all that apply.",
          options: [ {key:"A", text:"10 flour, 4 sugar"}, {key:"B", text:"15 flour, 6 sugar"}, {key:"C", text:"7 flour, 2 sugar"}, {key:"D", text:"25 flour, 10 sugar"}, {key:"E", text:"12.5 flour, 5 sugar"} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "Check whether flour/sugar simplifies to $5/2$ in each case.",
            "A: $10/4=2.5=5/2$, valid. B: $15/6=2.5$, valid. C: $7/2=3.5\\neq2.5$, invalid.",
            "D: $25/10=2.5$, valid. E: $12.5/5=2.5$, valid."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Pipe X fills a tank in 6 hours alone; Pipe Y fills the same tank in 3 hours alone. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"Pipe Y works twice as fast as Pipe X."}, {key:"B", text:"Working together, they fill the tank in 2 hours."}, {key:"C", text:"Pipe X's rate is $\\frac16$ tank/hour."}, {key:"D", text:"Working together takes longer than Pipe Y alone."}, {key:"E", text:"The combined rate is $\\frac12$ tank/hour."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Pipe X's rate is $\\frac16$ (C true); Pipe Y's rate is $\\frac13=\\frac26$, twice Pipe X's rate (A true).",
            "Combined rate: $\\frac16+\\frac13=\\frac16+\\frac26=\\frac36=\\frac12$ tank/hour (E true).",
            "Combined time: $1\\div\\frac12=2$ hours (B true).",
            "D is false: working together (2 hours) is faster than Pipe Y alone (3 hours), not longer."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "$A:B=3:4$ and $B:C=8:5$. Which of the following are part of the correctly bridged ratio $A:B:C$? Select all that apply.",
          options: [ {key:"A", text:"$A=6$"}, {key:"B", text:"$B=8$"}, {key:"C", text:"$C=5$"}, {key:"D", text:"$A:C = 6:5$"}, {key:"E", text:"$B:C=8:5$"} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "Shared term is $B$: first ratio has $B=4$, second has $B=8$. LCM of 4 and 8 is 8.",
            "Rescale the first ratio by 2: $A:B=6:8$. The second ratio already has $B=8$: $B:C=8:5$.",
            "Combined: $A:B:C=6:8:5$. So $A=6$ (A true), $B=8$ (B true), $C=5$ (C true), $A:C=6:5$ (D true), and $B:C=8:5$ is unchanged (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Three workers, P, Q, and R, have individual rates of $\\frac{1}{10}$, $\\frac{1}{15}$, and $\\frac{1}{30}$ job/day respectively. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"P is the fastest worker."}, {key:"B", text:"All three working together finish the job in 5 days."}, {key:"C", text:"P and R together are faster than Q alone."}, {key:"D", text:"The combined rate of all three is $\\frac15$ job/day."}, {key:"E", text:"R is the slowest worker."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "P's rate $\\frac{1}{10}=0.1$, Q's rate $\\frac{1}{15}\\approx0.067$, R's rate $\\frac{1}{30}\\approx0.033$. So P is fastest, R is slowest (A, E true).",
            "Combined rate: $\\frac{1}{10}+\\frac{1}{15}+\\frac{1}{30}$. Common denominator 30: $\\frac{3}{30}+\\frac{2}{30}+\\frac{1}{30}=\\frac{6}{30}=\\frac15$ (D true).",
            "Combined time: $1\\div\\frac15=5$ days (B true).",
            "C: P and R together have rate $\\frac{1}{10}+\\frac{1}{30}=\\frac{3}{30}+\\frac{1}{30}=\\frac{4}{30}=\\frac{2}{15}$, while Q alone has rate $\\frac{1}{15}=\\frac{1}{15}$. Since $\\frac{2}{15}>\\frac{1}{15}$, P and R together are indeed faster than Q alone, so C is true as well."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "A car travels at 50 mph. Which of the following (time, distance) pairs are consistent with this rate? Select all that apply.",
          options: [ {key:"A", text:"(2 hours, 100 miles)"}, {key:"B", text:"(3 hours, 150 miles)"}, {key:"C", text:"(1.5 hours, 75 miles)"}, {key:"D", text:"(4 hours, 180 miles)"}, {key:"E", text:"(0.5 hours, 25 miles)"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Check whether distance/time equals 50 for each pair.",
            "A: $100/2=50$, valid. B: $150/3=50$, valid. C: $75/1.5=50$, valid.",
            "D: $180/4=45\\neq50$, invalid. E: $25/0.5=50$, valid."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "In a class, the ratio of boys to girls is $5:4$. Which of the following could be the total number of students in the class? Select all that apply.",
          options: [ {key:"A", text:"18"}, {key:"B", text:"29"}, {key:"C", text:"36"}, {key:"D", text:"40"}, {key:"E", text:"45"} ],
          correct: ["A", "C", "E"],
          steps: [
            "The ratio parts sum to $5+4=9$, so the total number of students must be a multiple of 9.",
            "A (18): $18\\div9=2$, valid. B (29): not divisible by 9, invalid. C (36): $36\\div9=4$, valid.",
            "D (40): not divisible by 9, invalid. E (45): $45\\div9=5$, valid.",
            "Valid totals: A, C, and E."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A mixture has salt and water in ratio $2:9$, with a total volume of 55 liters.",
          quantityA: "The amount of salt in the mixture",
          quantityB: "10 liters",
          correct: "C",
          steps: ["Ratio parts sum to $2+9=11$, each worth $55/11=5$ liters.", "Salt $=2\\times5=10$ liters.", "Both quantities equal 10."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "Pipe A fills a tank in 5 hours alone. Pipe B fills the same tank in 20 hours alone.",
          quantityA: "The time for both pipes working together to fill the tank",
          quantityB: "4 hours",
          correct: "C",
          steps: ["Combined rate: $\\frac15+\\frac{1}{20}=\\frac{4}{20}+\\frac{1}{20}=\\frac{5}{20}=\\frac14$.", "Combined time: $1\\div\\frac14=4$ hours.", "Both quantities equal 4 hours."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$x:y = 3:7$ and $x + y = 50$.",
          quantityA: "$y - x$",
          quantityB: "$20$",
          correct: "C",
          steps: ["Ratio parts sum to $3+7=10$, each worth $50/10=5$.", "$x=15$, $y=35$.", "$y-x=35-15=20$, matching Quantity B."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "Car P travels 240 miles in 4 hours. Car Q travels 300 miles in 5 hours.",
          quantityA: "Car P's speed",
          quantityB: "Car Q's speed",
          correct: "C",
          steps: ["Car P's speed: $240/4=60$ mph.", "Car Q's speed: $300/5=60$ mph.", "Both quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "8 workers complete a job in 12 days.",
          quantityA: "The number of days it would take 6 workers to complete the same job, at the same individual rate",
          quantityB: "16",
          correct: "C",
          steps: ["Total work: $8\\times12=96$ worker-days.", "With 6 workers: $96/6=16$ days.", "Both quantities equal 16."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$A:B=2:3$ and $B:C=4:5$.",
          quantityA: "$A:C$ (expressed as a ratio and compared numerically as $A/C$)",
          quantityB: "$\\frac{8}{15}$",
          correct: "C",
          steps: ["Shared term $B$: first ratio has $B=3$, second has $B=4$. LCM of 3 and 4 is 12.", "Rescale first ratio by 4: $A:B=8:12$. Rescale second by 3: $B:C=12:15$.", "Combined: $A:B:C=8:12:15$, so $A/C=8/15$, matching Quantity B exactly."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "What is the sum of all values of $x$ that satisfy $|2x-6|=10$?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"4"}, {key:"C", text:"6"}, {key:"D", text:"8"}, {key:"E", text:"10"} ],
          correct: "C",
          steps: ["Split into two cases: $2x-6=10$ or $2x-6=-10$.", "Case 1: $2x=16$, so $x=8$. Case 2: $2x=-4$, so $x=-2$.", "Sum: $8+(-2)=6$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "What is the length of the interval of $x$-values satisfying $|x-4|\\leq 9$?",
          options: [ {key:"A", text:"9"}, {key:"B", text:"13"}, {key:"C", text:"15"}, {key:"D", text:"18"}, {key:"E", text:"20"} ],
          correct: "D",
          steps: ["$|x-4|\\leq 9$ means $-9\\leq x-4\\leq 9$.", "Adding 4 across: $-5\\leq x\\leq 13$.", "The length of this interval is $13-(-5)=18$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "What is the smaller value of $x$ that satisfies $|3x+1|=|2x-9|$?",
          options: [ {key:"A", text:"$-10$"}, {key:"B", text:"$-2$"}, {key:"C", text:"$1.6$"}, {key:"D", text:"$3$"}, {key:"E", text:"$8$"} ],
          correct: "A",
          steps: ["Two expressions have equal absolute value when they're equal or opposite.", "Case 1: $3x+1=2x-9 \\Rightarrow x=-10$.", "Case 2: $3x+1=-(2x-9) \\Rightarrow 3x+1=-2x+9 \\Rightarrow 5x=8 \\Rightarrow x=1.6$.", "The smaller solution is $-10$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "On the number line, $x$ is 3 units from $-7$. What is the greater possible value of $x$?",
          options: [ {key:"A", text:"$-10$"}, {key:"B", text:"$-7$"}, {key:"C", text:"$-4$"}, {key:"D", text:"$0$"}, {key:"E", text:"$4$"} ],
          correct: "C",
          steps: ["\"3 units from $-7$\" translates to $|x+7|=3$.", "$x+7=3 \\Rightarrow x=-4$, or $x+7=-3 \\Rightarrow x=-10$.", "The greater value is $-4$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "If $|x|-3=7$, what is the product of all possible values of $x$?",
          options: [ {key:"A", text:"$-100$"}, {key:"B", text:"$-49$"}, {key:"C", text:"$0$"}, {key:"D", text:"$49$"}, {key:"E", text:"$100$"} ],
          correct: "A",
          steps: ["$|x|-3=7 \\Rightarrow |x|=10$.", "So $x=10$ or $x=-10$.", "Product: $10\\times(-10)=-100$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "How many values of $x$ satisfy $|x-2|+|x+2|=10$?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"Infinitely many"} ],
          correct: "C",
          steps: ["$|x-2|+|x+2|$ is the sum of the distances from $x$ to 2 and from $x$ to $-2$.", "For $-2\\leq x\\leq2$, this sum is always exactly 4 (the distance between the two points), never 10.", "For $x>2$: $(x-2)+(x+2)=2x=10 \\Rightarrow x=5$. For $x<-2$: $-(x-2)-(x+2)=-2x=10 \\Rightarrow x=-5$.", "There are exactly 2 solutions: $x=5$ and $x=-5$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "What is the sum of all values of $x$ satisfying $\\sqrt{(x-3)^2}=7$?",
          options: [ {key:"A", text:"$-4$"}, {key:"B", text:"$0$"}, {key:"C", text:"$4$"}, {key:"D", text:"$6$"}, {key:"E", text:"$10$"} ],
          correct: "D",
          steps: ["By the identity $\\sqrt{x^2}=|x|$, this equation is $|x-3|=7$.", "$x-3=7 \\Rightarrow x=10$, or $x-3=-7 \\Rightarrow x=-4$.", "Sum: $10+(-4)=6$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "What is the largest value of $x$ satisfying $|2x-5|=x+1$?",
          options: [ {key:"A", text:"$\\frac{4}{3}$"}, {key:"B", text:"$2$"}, {key:"C", text:"$4$"}, {key:"D", text:"$6$"}, {key:"E", text:"$8$"} ],
          correct: "D",
          steps: ["Since an absolute value can't be negative, we need $x+1\\geq0$ for any solution to be valid.", "Case 1: $2x-5=x+1 \\Rightarrow x=6$. Check: $x+1=7\\geq0$, valid.", "Case 2: $2x-5=-(x+1) \\Rightarrow 2x-5=-x-1 \\Rightarrow 3x=4 \\Rightarrow x=\\frac{4}{3}$. Check: $x+1=\\frac73\\geq0$, valid.", "The larger of the two solutions is $x=6$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "What is the minimum possible value of $|x-4|+|x+6|$ over all real numbers $x$?",
          options: [ {key:"A", text:"$0$"}, {key:"B", text:"$2$"}, {key:"C", text:"$6$"}, {key:"D", text:"$10$"}, {key:"E", text:"$14$"} ],
          correct: "D",
          steps: ["$|x-4|+|x+6|$ is the sum of the distances from $x$ to 4 and from $x$ to $-6$.", "This sum is minimized (and constant) for any $x$ between $-6$ and $4$, where it equals the distance between those two points.", "Minimum value $=4-(-6)=10$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "Which of the following integers does NOT satisfy $|x+3|>5$?",
          options: [ {key:"A", text:"$-10$"}, {key:"B", text:"$-9$"}, {key:"C", text:"$-1$"}, {key:"D", text:"$3$"}, {key:"E", text:"$5$"} ],
          correct: "C",
          steps: ["$|x+3|>5$ means $x+3>5$ or $x+3<-5$, so $x>2$ or $x<-8$.", "Check each option: $-10<-8$ works. $-9<-8$ works. $-1$: is it $>2$ or $<-8$? No, so it fails. $3>2$ works. $5>2$ works.", "Only $-1$ falls in the excluded middle region $-8\\leq x\\leq2$, so it does not satisfy the inequality."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "What is the larger value of $x$ satisfying $|x-7|=15$?",
          correct: 22,
          steps: ["$x-7=15 \\Rightarrow x=22$, or $x-7=-15 \\Rightarrow x=-8$.", "The larger value is 22."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "What is the positive value of $x$ satisfying $|3x+2|=14$?",
          correct: 4,
          steps: ["$3x+2=14 \\Rightarrow 3x=12 \\Rightarrow x=4$ (positive).", "The other case, $3x+2=-14$, gives $x=-\\frac{16}{3}$, which is negative and rejected."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "If $|x|\\leq 6$ and $|y|\\leq 4$, what is the maximum possible value of $x-y$?",
          correct: 10,
          steps: ["To maximize $x-y$, make $x$ as large as possible and $y$ as small (most negative) as possible.", "Maximum $x=6$, minimum $y=-4$.", "$x-y=6-(-4)=10$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "If $x=-9$, what is the value of $\\sqrt{x^2}+x$?",
          correct: 0,
          steps: ["$\\sqrt{x^2}=|x|$, and since $x=-9$, $|x|=9$.", "$\\sqrt{x^2}+x=9+(-9)=0$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "What value of $x$ satisfies $|x-5|=|x+3|$?",
          correct: 1,
          steps: ["This equation says $x$ is equidistant from 5 and $-3$ on the number line.", "The equidistant point is the midpoint: $\\frac{5+(-3)}{2}=1$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "How many integers satisfy $|x-4|<3$?",
          correct: 5,
          steps: ["$|x-4|<3$ means $-3<x-4<3$, so $1<x<7$.", "The integers strictly between 1 and 7 are 2, 3, 4, 5, 6, a total of 5 integers."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "If $|x+2|+|y-3|=0$, what is the value of $x+y$?",
          correct: 1,
          steps: ["A sum of absolute values equals 0 only if each term is 0.", "So $x+2=0 \\Rightarrow x=-2$, and $y-3=0 \\Rightarrow y=3$.", "$x+y=-2+3=1$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "What is the value of $x$ satisfying $|x+1|=9$, given that $x<0$?",
          correct: -10,
          steps: ["$x+1=9 \\Rightarrow x=8$, but this doesn't satisfy $x<0$, so reject it.", "$x+1=-9 \\Rightarrow x=-10$, which does satisfy $x<0$.", "$x=-10$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following are solutions to $|x-3|=5$? Select all that apply.",
          options: [ {key:"A", text:"$-8$"}, {key:"B", text:"$-2$"}, {key:"C", text:"$2$"}, {key:"D", text:"$8$"}, {key:"E", text:"$3$"} ],
          correct: ["B", "D"],
          steps: ["$x-3=5 \\Rightarrow x=8$, or $x-3=-5 \\Rightarrow x=-2$.", "The two solutions are $x=8$ and $x=-2$, corresponding to options D and B."]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following statements about absolute value are always true for real numbers $a$ and $b$? Select all that apply.",
          options: [ {key:"A", text:"$|a|\\geq 0$"}, {key:"B", text:"$|a|=a$"}, {key:"C", text:"$|a-b|=|b-a|$"}, {key:"D", text:"$|a+b|=|a|+|b|$"}, {key:"E", text:"$\\sqrt{a^2}=|a|$"} ],
          correct: ["A", "C", "E"],
          steps: ["A is always true: absolute value is never negative.", "B is false whenever $a<0$, for example $a=-4$ gives $|a|=4\\neq a$.", "C is always true: distance from $a$ to $b$ equals distance from $b$ to $a$, and $|a-b|=|-(b-a)|=|b-a|$.", "D is false unless $a$ and $b$ share the same sign (or one is 0); for example $a=3,b=-3$ gives $|a+b|=0$ but $|a|+|b|=6$.", "E is always true by the square root identity."]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "For which of the following values of $x$ is $|x|>x$ true? Select all that apply.",
          options: [ {key:"A", text:"$-3$"}, {key:"B", text:"$0$"}, {key:"C", text:"$2$"}, {key:"D", text:"$-0.5$"}, {key:"E", text:"$5$"} ],
          correct: ["A", "D"],
          steps: ["$|x|>x$ is true exactly when $x$ is negative, since for $x\\geq0$, $|x|=x$ (equal, not greater).", "$-3$: $|-3|=3>-3$, true. $0$: $|0|=0=0$, false. $2$: $|2|=2=2$, false. $-0.5$: $|-0.5|=0.5>-0.5$, true. $5$: $|5|=5=5$, false.", "True for $-3$ and $-0.5$."]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following values of $x$ satisfy $|x^2-9|=0$? Select all that apply.",
          options: [ {key:"A", text:"$-3$"}, {key:"B", text:"$0$"}, {key:"C", text:"$3$"}, {key:"D", text:"$9$"}, {key:"E", text:"$-9$"} ],
          correct: ["A", "C"],
          steps: ["$|x^2-9|=0$ means $x^2-9=0$, so $x^2=9$.", "$x=3$ or $x=-3$.", "These correspond to options C and A."]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following are equivalent to $|x-2|\\leq5$? Select all that apply.",
          options: [ {key:"A", text:"$-3\\leq x\\leq7$"}, {key:"B", text:"$(x-2)^2\\leq25$"}, {key:"C", text:"$x\\leq7$"}, {key:"D", text:"$x\\geq-3$ and $x\\leq7$"}, {key:"E", text:"$|x|\\leq5$"} ],
          correct: ["A", "B", "D"],
          steps: ["$|x-2|\\leq5$ means $-5\\leq x-2\\leq5$, i.e. $-3\\leq x\\leq7$. This matches A and D exactly.", "Squaring both sides of $|x-2|\\leq5$ (valid since both sides are nonnegative) gives $(x-2)^2\\leq25$, so B is equivalent too.", "C only gives the upper bound, missing $x\\geq-3$, so it's not equivalent (e.g. $x=-100$ satisfies C but not the original).", "E describes a different interval, $-5\\leq x\\leq5$, which doesn't match $-3\\leq x\\leq7$."]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "For which of the following values of $a$ does the equation $|x|=a$ have exactly two solutions? Select all that apply.",
          options: [ {key:"A", text:"$-2$"}, {key:"B", text:"$0$"}, {key:"C", text:"$3$"}, {key:"D", text:"$7$"}, {key:"E", text:"$-1$"} ],
          correct: ["C", "D"],
          steps: ["$|x|=a$ has two solutions ($x=a$ and $x=-a$) when $a>0$, one solution ($x=0$) when $a=0$, and no solution when $a<0$.", "$-2$: negative, no solution. $0$: exactly one solution. $3$: positive, two solutions. $7$: positive, two solutions. $-1$: negative, no solution.", "Two solutions occur for $a=3$ and $a=7$."]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "$x=-6$.",
          quantityA: "$|x|$",
          quantityB: "$\\frac{x^2}{6}$",
          correct: "C",
          steps: ["Quantity A: $|x|=|-6|=6$.", "Quantity B: $\\frac{x^2}{6}=\\frac{36}{6}=6$.", "Both quantities equal 6."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$|x-3|=8$.",
          quantityA: "The greatest possible value of $x$",
          quantityB: "$11$",
          correct: "C",
          steps: ["$x-3=8 \\Rightarrow x=11$, or $x-3=-8 \\Rightarrow x=-5$.", "The greatest possible value of $x$ is 11.", "Both quantities equal 11."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$x<0$.",
          quantityA: "$|x|$",
          quantityB: "$-x$",
          correct: "C",
          steps: ["For any negative $x$, $|x|=-x$ by definition (the absolute value of a negative number is its opposite).", "For example, $x=-5$ gives $|x|=5$ and $-x=5$.", "The two quantities are always equal when $x<0$."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "$a$ and $b$ are nonzero integers with $ab<0$.",
          quantityA: "$|a+b|$",
          quantityB: "$|a|+|b|$",
          correct: "B",
          steps: ["$ab<0$ means $a$ and $b$ have opposite signs.", "Test $a=4, b=-9$: Quantity A $=|4-9|=5$. Quantity B $=4+9=13$.", "Test $a=-2, b=1$: Quantity A $=|-1|=1$. Quantity B $=2+1=3$.", "Whenever $a$ and $b$ have opposite signs, some cancellation occurs in $a+b$, so $|a+b|<|a|+|b|$ always. Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$|x+5|\\leq3$.",
          quantityA: "$x$",
          quantityB: "$-5$",
          correct: "D",
          steps: ["$|x+5|\\leq3$ means $-3\\leq x+5\\leq3$, so $-8\\leq x\\leq-2$.", "If $x=-5$, the quantities are equal. If $x=-2$, Quantity A is greater. If $x=-8$, Quantity B is greater.", "Since the relationship changes depending on the value of $x$ within the allowed range, it cannot be determined."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$x$ is a real number.",
          quantityA: "$\\sqrt{(-7)^2}$",
          quantityB: "$|-7|$",
          correct: "C",
          steps: ["Quantity A: $\\sqrt{(-7)^2}=\\sqrt{49}=7$.", "Quantity B: $|-7|=7$.", "Both quantities equal 7."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "Which of the following fractions results in a terminating decimal?",
          options: [ {key:"A", text:"11/80"}, {key:"B", text:"5/66"}, {key:"C", text:"3/28"}, {key:"D", text:"7/45"}, {key:"E", text:"7/48"} ],
          correct: "A",
          steps: [
            "A fraction in lowest terms terminates only if its denominator's prime factorization contains no primes other than 2 and 5.",
            "A: $80=2^4\\times5$, only 2s and 5s. Terminates.",
            "B: $66=2\\times3\\times11$, has a 3 and an 11, repeats. C: $28=2^2\\times7$, has a 7, repeats. D: $45=3^2\\times5$, has a 3, repeats. E: $48=2^4\\times3$, has a 3, repeats.",
            "Only A terminates."
          ]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "Which of the following fractions does NOT result in a terminating decimal?",
          options: [ {key:"A", text:"3/50"}, {key:"B", text:"7/16"}, {key:"C", text:"9/40"}, {key:"D", text:"1/25"}, {key:"E", text:"2/15"} ],
          correct: "E",
          steps: [
            "Check each denominator's prime factors after simplifying.",
            "A: $50=2\\times5^2$, terminates. B: $16=2^4$, terminates. C: $40=2^3\\times5$, terminates. D: $25=5^2$, terminates.",
            "E: $15=3\\times5$, has a 3, so it does not terminate.",
            "Only E fails to terminate."
          ]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "For what smallest positive integer $k$ does $\\frac{7k}{12}$ result in a terminating decimal?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"3"}, {key:"C", text:"4"}, {key:"D", text:"6"}, {key:"E", text:"12"} ],
          correct: "B",
          steps: [
            "$12=2^2\\times3$. The factor of 3 must be cancelled by the numerator for the fraction to terminate.",
            "$k=1$: $\\frac{7}{12}$, denominator still has a 3. $k=2$: $\\frac{14}{12}=\\frac{7}{6}$, denominator $6=2\\times3$, still has a 3.",
            "$k=3$: $\\frac{21}{12}=\\frac{7}{4}$, denominator $4=2^2$, only 2s. Terminates.",
            "The smallest such $k$ is 3."
          ]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "What is the decimal expansion of $\\frac{5}{8}$?",
          options: [ {key:"A", text:"0.5"}, {key:"B", text:"0.58"}, {key:"C", text:"0.6"}, {key:"D", text:"0.625"}, {key:"E", text:"0.75"} ],
          correct: "D",
          steps: ["$8=2^3$, so this terminates within 3 digits.", "$5\\div8=0.625$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "What is the decimal expansion of $\\frac{11}{16}$?",
          options: [ {key:"A", text:"0.6785"}, {key:"B", text:"0.6875"}, {key:"C", text:"0.6975"}, {key:"D", text:"0.7"}, {key:"E", text:"0.6825"} ],
          correct: "B",
          steps: ["$16=2^4$, so this terminates within 4 digits.", "$11\\div16=0.6875$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "What is the value of $0.0047\\times10^3$?",
          options: [ {key:"A", text:"0.047"}, {key:"B", text:"0.47"}, {key:"C", text:"4.7"}, {key:"D", text:"47"}, {key:"E", text:"470"} ],
          correct: "C",
          steps: ["Multiplying by $10^3$ shifts the decimal point 3 places to the right.", "$0.0047 \\to 0.047 \\to 0.47 \\to 4.7$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "What is the value of $\\frac{340}{10^4}$?",
          options: [ {key:"A", text:"0.0034"}, {key:"B", text:"0.034"}, {key:"C", text:"0.34"}, {key:"D", text:"3.4"}, {key:"E", text:"34"} ],
          correct: "B",
          steps: ["Dividing by $10^4$ shifts the decimal point 4 places to the left.", "$340.0 \\to 34.00 \\to 3.400 \\to 0.3400 \\to 0.03400$.", "The result is 0.034."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "Which of the following fractions has the SHORTEST terminating decimal expansion (fewest digits after the decimal point)?",
          options: [ {key:"A", text:"1/8"}, {key:"B", text:"1/2"}, {key:"C", text:"3/20"}, {key:"D", text:"7/25"}, {key:"E", text:"9/50"} ],
          correct: "B",
          steps: [
            "The number of decimal digits for a terminating fraction equals $\\max(a,b)$, where the simplified denominator is $2^a5^b$.",
            "A: $8=2^3$, 3 digits ($0.125$). B: $2=2^1$, 1 digit ($0.5$). C: $20=2^2\\times5$, 2 digits ($0.15$). D: $25=5^2$, 2 digits ($0.28$). E: $50=2\\times5^2$, 2 digits ($0.18$).",
            "B has the fewest digits, just 1."
          ]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "What is the length of the repeating block (period) in the decimal expansion of $\\frac{1}{7}$?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"2"}, {key:"C", text:"3"}, {key:"D", text:"6"}, {key:"E", text:"7"} ],
          correct: "D",
          steps: ["$\\frac{1}{7}=0.\\overline{142857}$.", "Long division on $1\\div7$ cycles through remainders $1,3,2,6,4,5$ before returning to remainder 1, giving a repeating block of 6 digits."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A fraction $\\frac{a}{b}$ is in lowest terms, and $b=2^3\\times5^2\\times7$. Which statement about its decimal expansion is true?",
          options: [ {key:"A", text:"It terminates in exactly 3 digits."}, {key:"B", text:"It terminates in exactly 5 digits."}, {key:"C", text:"It does not terminate, because of the factor of 7."}, {key:"D", text:"It terminates in exactly 2 digits."}, {key:"E", text:"It cannot be determined without knowing $a$."} ],
          correct: "C",
          steps: ["The denominator $b=2^3\\times5^2\\times7$ contains a prime factor other than 2 or 5, namely 7.", "Since $a$ is coprime to $b$ (the fraction is in lowest terms), that factor of 7 cannot be cancelled.", "The decimal expansion does not terminate; it repeats."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "How many digits are there after the decimal point in the terminating decimal expansion of $\\frac{7}{16}$?",
          correct: 4,
          steps: ["$16=2^4$, so the number of decimal digits is $\\max(4,0)=4$.", "Indeed, $7\\div16=0.4375$, which has 4 digits after the decimal point."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "What is the value of $0.00056\\times10^5$?",
          correct: 56,
          steps: ["Multiplying by $10^5$ shifts the decimal point 5 places right.", "$0.00056 \\to 0.0056 \\to 0.056 \\to 0.56 \\to 5.6 \\to 56$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "What is the value of $\\frac{4200}{10^6}$?",
          correct: 0.0042,
          steps: ["Dividing by $10^6$ shifts the decimal point 6 places left.", "$4200 \\to 420.0 \\to 42.00 \\to 4.200 \\to 0.4200 \\to 0.04200 \\to 0.004200$.", "The result is 0.0042."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "How many digits are there after the decimal point in the terminating decimal expansion of $\\frac{21}{40}$?",
          correct: 3,
          steps: ["$\\gcd(21,40)=1$, so the fraction is already in lowest terms.", "$40=2^3\\times5$, so the number of decimal digits is $\\max(3,1)=3$.", "Indeed, $21\\div40=0.525$, which has 3 digits after the decimal point."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "What single digit repeats forever in the decimal expansion of $\\frac{1}{6}$?",
          correct: 6,
          steps: ["$\\frac{1}{6}=0.1\\overline{6}=0.16666\\ldots$", "After the first digit (1), the digit 6 repeats indefinitely."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "What is the value of $\\frac{82.5}{10^2}$?",
          correct: 0.825,
          steps: ["Dividing by $10^2$ shifts the decimal point 2 places left.", "$82.5 \\to 8.25 \\to 0.825$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "For what smallest positive integer $k$ does $\\frac{9k}{20}$ have a value that is a whole number?",
          correct: 20,
          steps: ["$\\frac{9k}{20}$ is a whole number when $20$ divides $9k$.", "Since $\\gcd(9,20)=1$, $20$ must divide $k$ directly.", "The smallest such positive $k$ is 20, giving $\\frac{9(20)}{20}=9$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "For how many integers $n$ from 1 to 20, inclusive, does $\\frac{3}{n}$ (reduced to lowest terms) produce a terminating decimal?",
          correct: 12,
          steps: [
            "A denominator (after reducing $\\frac{3}{n}$) yields a terminating decimal only if its prime factors are limited to 2 and 5.",
            "Checking $n=1$ through $20$: $n=1,2,3,4,5,6,8,10,12,15,16,20$ all work (note that $n=3,6,12,15$ let the 3 in the denominator cancel with the numerator's 3).",
            "That gives 12 values of $n$ out of 20."
          ]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following fractions result in a terminating decimal? Select all that apply.",
          options: [ {key:"A", text:"5/32"}, {key:"B", text:"7/20"}, {key:"C", text:"2/9"}, {key:"D", text:"11/55"}, {key:"E", text:"13/50"} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "Simplify each fraction and check the denominator's prime factors.",
            "A: $32=2^5$, terminates. B: $20=2^2\\times5$, terminates. C: $9=3^2$, has a 3, repeats.",
            "D: $\\frac{11}{55}=\\frac{1}{5}$, denominator $5$, terminates. E: $50=2\\times5^2$, terminates.",
            "A, B, D, and E all terminate; only C repeats."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "For which of the following values of $k$ does $\\frac{1}{k}$ produce a terminating decimal? Select all that apply.",
          options: [ {key:"A", text:"4"}, {key:"B", text:"6"}, {key:"C", text:"9"}, {key:"D", text:"25"}, {key:"E", text:"32"} ],
          correct: ["A", "D", "E"],
          steps: [
            "$\\frac{1}{k}$ terminates only if $k$'s prime factorization contains no primes other than 2 and 5.",
            "A: $4=2^2$, terminates. B: $6=2\\times3$, has a 3, repeats. C: $9=3^2$, has a 3, repeats.",
            "D: $25=5^2$, terminates. E: $32=2^5$, terminates.",
            "Terminating for $k=4, 25, 32$."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following are true when multiplying a decimal by a positive power of 10? Select all that apply.",
          options: [ {key:"A", text:"The decimal point moves to the right."}, {key:"B", text:"$0.037\\times100=3.7$"}, {key:"C", text:"The number of digits moved equals the exponent."}, {key:"D", text:"$2.5\\times10=250$"}, {key:"E", text:"The value of the number increases (assuming it started positive)."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A is true by definition of the place-value shift.",
            "B: $0.037\\times100$ shifts the decimal 2 places right: $0.037\\to0.37\\to3.7$. True.",
            "C is true: multiplying by $10^n$ shifts exactly $n$ places.",
            "D is false: $2.5\\times10=25$, not 250 (shifting 1 place, not 3).",
            "E is true for any positive starting value, since multiplying by a power of 10 greater than 1 scales it up."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following fractions, when simplified, have a denominator that is a power of 2 only (no factor of 5)? Select all that apply.",
          options: [ {key:"A", text:"3/16"}, {key:"B", text:"7/20"}, {key:"C", text:"9/64"}, {key:"D", text:"5/8"}, {key:"E", text:"1/10"} ],
          correct: ["A", "C", "D"],
          steps: [
            "Simplify each fraction and factor its denominator.",
            "A: $16=2^4$, pure power of 2. B: $20=2^2\\times5$, has a factor of 5. C: $64=2^6$, pure power of 2.",
            "D: $8=2^3$, pure power of 2. E: $10=2\\times5$, has a factor of 5.",
            "A, C, and D have denominators that are pure powers of 2."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following fractions terminate in exactly 2 digits after the decimal point? Select all that apply.",
          options: [ {key:"A", text:"3/4"}, {key:"B", text:"1/8"}, {key:"C", text:"7/25"}, {key:"D", text:"9/20"}, {key:"E", text:"1/50"} ],
          correct: ["A", "C", "D", "E"],
          steps: [
            "For a simplified denominator $2^a5^b$, the number of decimal digits is $\\max(a,b)$.",
            "A: $4=2^2$, $\\max(2,0)=2$ digits ($0.75$). B: $8=2^3$, $\\max(3,0)=3$ digits ($0.125$), not 2.",
            "C: $25=5^2$, $\\max(0,2)=2$ digits ($0.28$). D: $20=2^2\\times5$, $\\max(2,1)=2$ digits ($0.45$). E: $50=2\\times5^2$, $\\max(1,2)=2$ digits ($0.02$).",
            "A, C, D, and E all terminate in exactly 2 digits; B terminates in 3 digits."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following statements about decimal expansions are true? Select all that apply.",
          options: [ {key:"A", text:"$\\frac13=0.\\overline{3}$, a repeating decimal."}, {key:"B", text:"$\\frac{2}{11}=0.\\overline{18}$, a repeating decimal."}, {key:"C", text:"Every fraction with a prime denominator greater than 5 produces a repeating decimal."}, {key:"D", text:"$\\frac16$ terminates immediately with no repeating part."}, {key:"E", text:"Whether $\\frac{a}{b}$ (in lowest terms) terminates depends only on the prime factors of $b$, not on the value of $a$."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A is true: $1\\div3=0.3333\\ldots$",
            "B is true: $2\\div11=0.181818\\ldots$",
            "C is true: any prime other than 2 or 5 in the denominator (in lowest terms) guarantees repetition, and all primes greater than 5 fall in that category.",
            "D is false: $\\frac16=0.1\\overline6$, which has a non-repeating digit (1) followed by a repeating part (6); it does not terminate at all.",
            "E is true: the terminating rule is entirely a statement about the denominator's prime factorization once the fraction is fully reduced; the numerator only determines which digits appear, not whether it terminates."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "Consider the fractions $\\frac{3}{16}$ and $\\frac{7}{8}$.",
          quantityA: "The number of digits after the decimal point in $\\frac{3}{16}$",
          quantityB: "The number of digits after the decimal point in $\\frac{7}{8}$",
          correct: "A",
          steps: ["$\\frac{3}{16}=0.1875$, which has 4 digits after the decimal point (since $16=2^4$).", "$\\frac{7}{8}=0.875$, which has 3 digits after the decimal point (since $8=2^3$).", "Quantity A (4) is greater than Quantity B (3)."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "",
          quantityA: "$0.0025\\times10^3$",
          quantityB: "$2.5$",
          correct: "C",
          steps: ["Quantity A: multiplying by $10^3$ shifts the decimal 3 places right: $0.0025\\to0.025\\to0.25\\to2.5$.", "Quantity B is $2.5$.", "Both quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "The decimal expansion of $\\frac{5}{12}$ is $0.41\\overline{6}$.",
          quantityA: "The number of digits in the repeating block",
          quantityB: "$1$",
          correct: "C",
          steps: ["$\\frac{5}{12}=0.41666\\ldots=0.41\\overline6$.", "Only the digit 6 repeats, so the repeating block has length 1.", "Both quantities equal 1."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "",
          quantityA: "$\\frac{720}{10^5}$",
          quantityB: "$0.0072$",
          correct: "C",
          steps: ["Quantity A: dividing 720 by $10^5$ shifts the decimal point 5 places left: $720\\to72.0\\to7.20\\to0.720\\to0.0720\\to0.00720$.", "That gives 0.0072, matching Quantity B exactly.", "The two quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "A fraction $\\frac{a}{b}$ is in lowest terms with $b=2^3\\times5^2$.",
          quantityA: "The number of digits after the decimal point in its terminating expansion",
          quantityB: "$3$",
          correct: "C",
          steps: ["The number of terminating digits equals $\\max(a,b)$ for denominator $2^a5^b$.", "Here $\\max(3,2)=3$.", "Both quantities equal 3."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "",
          quantityA: "$\\frac{1}{9}$",
          quantityB: "$\\frac{1}{11}$",
          correct: "A",
          steps: ["Quantity A: $\\frac19=0.1111\\ldots$", "Quantity B: $\\frac{1}{11}=0.0909\\ldots$", "$0.111\\ldots > 0.0909\\ldots$, so Quantity A is greater. This also follows since 9 < 11, making $\\frac19$ the larger fraction."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "An arithmetic sequence has first term 7 and common difference 4. What is the 15th term?",
          options: [ {key:"A", text:"56"}, {key:"B", text:"59"}, {key:"C", text:"63"}, {key:"D", text:"67"}, {key:"E", text:"71"} ],
          correct: "C",
          steps: ["$a_n=a_1+(n-1)d$.", "$a_{15}=7+(14)(4)=7+56=63$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "In an arithmetic sequence, the 5th term is 23 and the 12th term is 58. What is the 20th term?",
          options: [ {key:"A", text:"88"}, {key:"B", text:"93"}, {key:"C", text:"98"}, {key:"D", text:"103"}, {key:"E", text:"108"} ],
          correct: "C",
          steps: ["Set up: $a_1+4d=23$ and $a_1+11d=58$.", "Subtract: $7d=35$, so $d=5$. Then $a_1=23-4(5)=3$.", "$a_{20}=a_1+19d=3+19(5)=3+95=98$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A geometric sequence has first term 3 and common ratio 2. What is the 8th term?",
          options: [ {key:"A", text:"192"}, {key:"B", text:"256"}, {key:"C", text:"320"}, {key:"D", text:"384"}, {key:"E", text:"768"} ],
          correct: "D",
          steps: ["$a_n=a_1\\cdot r^{n-1}$.", "$a_8=3\\cdot2^7=3\\times128=384$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "A geometric sequence has first term 5 and common ratio $-2$. What is the 6th term?",
          options: [ {key:"A", text:"$-160$"}, {key:"B", text:"$-80$"}, {key:"C", text:"80"}, {key:"D", text:"160"}, {key:"E", text:"320"} ],
          correct: "A",
          steps: ["$a_n=a_1\\cdot r^{n-1}$.", "$a_6=5\\cdot(-2)^5=5\\times(-32)=-160$.", "Note that with a negative ratio, odd-numbered powers of $r$ stay negative, which flips the sign here."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "An arithmetic sequence has first term 2 and common difference 3. What is the sum of the first 10 terms?",
          options: [ {key:"A", text:"125"}, {key:"B", text:"140"}, {key:"C", text:"155"}, {key:"D", text:"170"}, {key:"E", text:"185"} ],
          correct: "C",
          steps: ["First find $a_{10}=a_1+9d=2+9(3)=29$.", "$S_n=\\frac{n(a_1+a_n)}{2}$.", "$S_{10}=\\frac{10(2+29)}{2}=\\frac{10(31)}{2}=155$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A sequence is defined recursively by $a_1=3$ and $a_n=2a_{n-1}+1$. What is $a_4$?",
          options: [ {key:"A", text:"13"}, {key:"B", text:"15"}, {key:"C", text:"29"}, {key:"D", text:"31"}, {key:"E", text:"33"} ],
          correct: "D",
          steps: ["$a_1=3$.", "$a_2=2(3)+1=7$.", "$a_3=2(7)+1=15$.", "$a_4=2(15)+1=31$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "In a geometric sequence, the 3rd term is 12 and the 6th term is 96. What is the common ratio?",
          options: [ {key:"A", text:"1.5"}, {key:"B", text:"2"}, {key:"C", text:"2.5"}, {key:"D", text:"3"}, {key:"E", text:"4"} ],
          correct: "B",
          steps: ["$a_3=a_1r^2=12$ and $a_6=a_1r^5=96$.", "Dividing: $\\frac{a_1r^5}{a_1r^2}=r^3=\\frac{96}{12}=8$.", "$r=\\sqrt[3]{8}=2$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "An arithmetic sequence has first term 10 and 20th term 67. What is the sum of the first 20 terms?",
          options: [ {key:"A", text:"640"}, {key:"B", text:"700"}, {key:"C", text:"740"}, {key:"D", text:"770"}, {key:"E", text:"800"} ],
          correct: "D",
          steps: ["$S_n=\\frac{n(a_1+a_n)}{2}$.", "$S_{20}=\\frac{20(10+67)}{2}=\\frac{20(77)}{2}=770$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "How many terms are in the arithmetic sequence $5, 9, 13, \\ldots, 101$?",
          options: [ {key:"A", text:"22"}, {key:"B", text:"23"}, {key:"C", text:"24"}, {key:"D", text:"25"}, {key:"E", text:"26"} ],
          correct: "D",
          steps: ["Here $a_1=5$, $d=4$, and $a_n=101$.", "$101=5+(n-1)(4) \\Rightarrow 96=(n-1)(4) \\Rightarrow n-1=24 \\Rightarrow n=25$.", "There are 25 terms."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A geometric sequence has first term 81 and common ratio $\\frac13$. What is the 5th term?",
          options: [ {key:"A", text:"$\\frac13$"}, {key:"B", text:"1"}, {key:"C", text:"3"}, {key:"D", text:"9"}, {key:"E", text:"27"} ],
          correct: "B",
          steps: ["$a_n=a_1\\cdot r^{n-1}$.", "$a_5=81\\cdot\\left(\\frac13\\right)^4=81\\times\\frac1{81}=1$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "An arithmetic sequence has first term 6 and common difference 7. What is the 10th term?",
          correct: 69,
          steps: ["$a_{10}=a_1+9d=6+9(7)=6+63=69$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A geometric sequence has first term 4 and common ratio 3. What is the 5th term?",
          correct: 324,
          steps: ["$a_5=a_1\\cdot r^4=4\\times3^4=4\\times81=324$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "In an arithmetic sequence, the 4th term is 20 and the 9th term is 45. What is the common difference?",
          correct: 5,
          steps: ["From the 4th to the 9th term is 5 steps of $d$.", "$a_9-a_4=45-20=25=5d$.", "$d=5$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "What is the sum of the first 12 terms of the arithmetic sequence $3, 7, 11, 15, \\ldots$?",
          correct: 300,
          steps: ["$a_1=3$, $d=4$.", "$a_{12}=3+11(4)=3+44=47$.", "$S_{12}=\\frac{12(3+47)}{2}=\\frac{12(50)}{2}=300$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A sequence is defined recursively by $a_1=2$ and $a_n=3a_{n-1}-1$. What is $a_5$?",
          correct: 122,
          steps: ["$a_1=2$. $a_2=3(2)-1=5$. $a_3=3(5)-1=14$. $a_4=3(14)-1=41$. $a_5=3(41)-1=122$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "In a geometric sequence, the 2nd term is 6 and the 5th term is 48. What is the first term?",
          correct: 3,
          steps: ["$a_2=a_1r=6$ and $a_5=a_1r^4=48$.", "Dividing: $\\frac{a_1r^4}{a_1r}=r^3=\\frac{48}{6}=8$, so $r=2$.", "$a_1=\\frac{6}{r}=\\frac{6}{2}=3$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "How many terms are in the arithmetic sequence $-8, -3, 2, \\ldots, 87$?",
          correct: 20,
          steps: ["Here $a_1=-8$, $d=5$, and $a_n=87$.", "$87=-8+(n-1)(5) \\Rightarrow 95=(n-1)(5) \\Rightarrow n-1=19 \\Rightarrow n=20$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "An arithmetic sequence has first term 100 and common difference $-6$. What is the 20th term?",
          correct: -14,
          steps: ["$a_{20}=a_1+19d=100+19(-6)=100-114=-14$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "The arithmetic sequence has first term 4 and common difference 6, so its terms are $4, 10, 16, 22, \\ldots$. Which of the following numbers are terms of this sequence? Select all that apply.",
          options: [ {key:"A", text:"22"}, {key:"B", text:"25"}, {key:"C", text:"40"}, {key:"D", text:"52"}, {key:"E", text:"55"} ],
          correct: ["A", "C", "D"],
          steps: [
            "A number $v$ is a term of this sequence exactly when $v-4$ is a nonnegative multiple of 6.",
            "A: $22-4=18=6\\times3$, term. B: $25-4=21$, not a multiple of 6, not a term. C: $40-4=36=6\\times6$, term.",
            "D: $52-4=48=6\\times8$, term. E: $55-4=51$, not a multiple of 6, not a term.",
            "Terms: A, C, D."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A geometric sequence has first term 2 and common ratio 3, so its terms are $2, 6, 18, 54, 162, \\ldots$. Which of the following numbers are terms of this sequence? Select all that apply.",
          options: [ {key:"A", text:"18"}, {key:"B", text:"20"}, {key:"C", text:"54"}, {key:"D", text:"100"}, {key:"E", text:"486"} ],
          correct: ["A", "C", "E"],
          steps: [
            "The terms are $2\\times3^k$ for $k=0,1,2,\\ldots$: $2, 6, 18, 54, 162, 486, \\ldots$",
            "18 appears ($k=2$), 54 appears ($k=3$), and 486 appears ($k=5$).",
            "20 and 100 are not powers of 3 times 2, so they are not terms.",
            "Terms: A, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "An arithmetic sequence has first term 5 and common difference 3. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The 7th term is 23."}, {key:"B", text:"The sum of the first 6 terms is 75."}, {key:"C", text:"The sequence is increasing."}, {key:"D", text:"The 4th term is 15."}, {key:"E", text:"Every term is odd."} ],
          correct: ["A", "B", "C"],
          steps: [
            "The sequence is $5, 8, 11, 14, 17, 20, 23, \\ldots$",
            "$a_7=5+6(3)=23$ (A true). $S_6=\\frac{6(5+20)}{2}=\\frac{6(25)}{2}=75$ (B true). Since $d=3>0$, the sequence is increasing (C true).",
            "$a_4=5+3(3)=14$, not 15 (D false). Terms alternate: 5(odd), 8(even), 11(odd), 14(even)... so not every term is odd (E false)."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A geometric sequence has first term 4 and common ratio $-3$, so its terms are $4, -12, 36, -108, 324, \\ldots$. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The terms alternate in sign."}, {key:"B", text:"The 5th term is 324."}, {key:"C", text:"The sequence is increasing."}, {key:"D", text:"The magnitude of each term is 3 times the magnitude of the previous term."}, {key:"E", text:"The 3rd term is negative."} ],
          correct: ["A", "B", "D"],
          steps: [
            "With $r=-3$ (negative), consecutive terms alternate sign (A true): $4, -12, 36, -108, 324$.",
            "$a_5=4(-3)^4=4\\times81=324$ (B true).",
            "The sequence is not consistently increasing since it oscillates in sign (C false).",
            "Since $|r|=3$, each term's magnitude is 3 times the previous magnitude (D true).",
            "The 3rd term is $4(-3)^2=36$, which is positive, not negative (E false)."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "A sequence is defined by $a_1=1$, $a_2=1$, and $a_n=a_{n-1}+a_{n-2}$ for $n\\geq3$. Which of the following are terms of this sequence? Select all that apply.",
          options: [ {key:"A", text:"2"}, {key:"B", text:"4"}, {key:"C", text:"13"}, {key:"D", text:"20"}, {key:"E", text:"34"} ],
          correct: ["A", "C", "E"],
          steps: [
            "Building the sequence: $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, \\ldots$",
            "2 appears (3rd term), 13 appears (7th term), and 34 appears (9th term).",
            "4 and 20 never appear in this list.",
            "Terms: A, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "An arithmetic sequence has first term 50 and common difference $-7$. For which of the following term numbers $n$ is $a_n$ negative? Select all that apply.",
          options: [ {key:"A", text:"$n=7$"}, {key:"B", text:"$n=8$"}, {key:"C", text:"$n=9$"}, {key:"D", text:"$n=10$"}, {key:"E", text:"$n=11$"} ],
          correct: ["C", "D", "E"],
          steps: [
            "$a_n=50+(n-1)(-7)=50-7(n-1)$.",
            "$n=7$: $a_7=50-42=8$, positive. $n=8$: $a_8=50-49=1$, positive. $n=9$: $a_9=50-56=-6$, negative.",
            "$n=10$: $a_{10}=50-63=-13$, negative. $n=11$: $a_{11}=50-70=-20$, negative.",
            "Negative for $n=9, 10, 11$."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "An arithmetic sequence has first term 3 and common difference 5.",
          quantityA: "The 10th term",
          quantityB: "48",
          correct: "C",
          steps: ["$a_{10}=3+9(5)=3+45=48$.", "Both quantities equal 48."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "A geometric sequence has first term 2 and common ratio 4.",
          quantityA: "The 4th term",
          quantityB: "128",
          correct: "C",
          steps: ["$a_4=2\\times4^3=2\\times64=128$.", "Both quantities equal 128."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "An arithmetic sequence has 3rd term 15 and 7th term 35.",
          quantityA: "The common difference",
          quantityB: "5",
          correct: "C",
          steps: ["From the 3rd to the 7th term is 4 steps: $a_7-a_3=35-15=20=4d$.", "$d=5$.", "Both quantities equal 5."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "A geometric sequence has first term 100 and common ratio 0.5.",
          quantityA: "The 5th term",
          quantityB: "The 4th term",
          correct: "B",
          steps: ["$a_4=100\\times0.5^3=100\\times0.125=12.5$.", "$a_5=100\\times0.5^4=100\\times0.0625=6.25$.", "Since $0<r<1$, each term is smaller than the one before, so Quantity B (12.5) is greater than Quantity A (6.25)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "An arithmetic sequence of the first 10 odd positive integers has first term 1 and common difference 2.",
          quantityA: "The sum of the first 10 terms",
          quantityB: "100",
          correct: "C",
          steps: ["$a_{10}=1+9(2)=19$.", "$S_{10}=\\frac{10(1+19)}{2}=\\frac{10(20)}{2}=100$.", "Both quantities equal 100."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A sequence is defined recursively by $a_1=5$ and $a_n=2a_{n-1}-3$.",
          quantityA: "The 4th term",
          quantityB: "20",
          correct: "B",
          steps: ["$a_1=5$. $a_2=2(5)-3=7$. $a_3=2(7)-3=11$. $a_4=2(11)-3=19$.", "Quantity A is 19, which is less than Quantity B, 20."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "What is the value of $(-1)^{250} + (-1)^{251}$?",
          options: [ {key:"A", text:"$-2$"}, {key:"B", text:"$-1$"}, {key:"C", text:"$0$"}, {key:"D", text:"$1$"}, {key:"E", text:"$2$"} ],
          correct: "C",
          steps: ["$250$ is even, so $(-1)^{250}=1$.", "$251$ is odd, so $(-1)^{251}=-1$.", "$1+(-1)=0$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "$b$ is a real number and $b^5 = b^9$. Which of the following is NOT a possible value of $b$?",
          options: [ {key:"A", text:"$0$"}, {key:"B", text:"$1$"}, {key:"C", text:"$-1$"}, {key:"D", text:"$2$"}, {key:"E", text:"$-2$"} ],
          correct: "D",
          steps: ["The rule \"if $b^x=b^y$ then $x=y$\" fails at the base exceptions $b=0$, $b=1$, and $b=-1$.", "Check: $0^5=0=0^9$. $1^5=1=1^9$. $(-1)^5=-1=(-1)^9$. All three work despite $5\\neq9$.", "But $2^5=32$ and $2^9=512$, which are not equal, so $b=2$ does not satisfy the equation.", "$2$ is not a possible value."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "Which of the following lists $(0.2)^1$, $(0.2)^3$, and $(0.2)^5$ in order from LEAST to GREATEST?",
          options: [ {key:"A", text:"$(0.2)^1 < (0.2)^3 < (0.2)^5$"}, {key:"B", text:"$(0.2)^5 < (0.2)^3 < (0.2)^1$"}, {key:"C", text:"$(0.2)^3 < (0.2)^1 < (0.2)^5$"}, {key:"D", text:"$(0.2)^1 < (0.2)^5 < (0.2)^3$"}, {key:"E", text:"$(0.2)^5 < (0.2)^1 < (0.2)^3$"} ],
          correct: "B",
          steps: ["Since $0<0.2<1$, raising it to a higher power makes it smaller: the exponent and the value move in opposite directions.", "So the largest exponent (5) gives the smallest value, and the smallest exponent (1) gives the largest value.", "Order: $(0.2)^5 < (0.2)^3 < (0.2)^1$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "$x$ is an integer and $(0.7)^x < (0.7)^{2x+3}$. What is the greatest possible value of $x$?",
          options: [ {key:"A", text:"$-6$"}, {key:"B", text:"$-5$"}, {key:"C", text:"$-4$"}, {key:"D", text:"$-3$"}, {key:"E", text:"$0$"} ],
          correct: "C",
          steps: ["Since the base $0.7$ is between 0 and 1, the inequality direction flips when comparing exponents: $(0.7)^x < (0.7)^{2x+3}$ means $x > 2x+3$.", "Solve: $-x>3 \\Rightarrow x<-3$.", "The greatest integer strictly less than $-3$ is $-4$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "What is the value of $(-1)^{36}\\times(-1)^{49}$?",
          options: [ {key:"A", text:"$-1$"}, {key:"B", text:"$0$"}, {key:"C", text:"$1$"}, {key:"D", text:"$2$"}, {key:"E", text:"$-2$"} ],
          correct: "A",
          steps: ["$36$ is even, so $(-1)^{36}=1$.", "$49$ is odd, so $(-1)^{49}=-1$.", "$1\\times(-1)=-1$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "$x$ is a real number and $x^4=x^{12}$. How many possible values of $x$ are there?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"2"}, {key:"C", text:"3"}, {key:"D", text:"4"}, {key:"E", text:"Infinitely many"} ],
          correct: "C",
          steps: ["Rewrite as $x^4(x^8-1)=0$.", "This holds when $x^4=0$ (so $x=0$) or $x^8=1$ (so $x=1$ or $x=-1$, the only real 8th roots of 1).", "Three possible values: $0$, $1$, $-1$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "$x$ is a positive integer and $(0.5)^x > (0.5)^7$. What is the greatest possible value of $x$?",
          options: [ {key:"A", text:"5"}, {key:"B", text:"6"}, {key:"C", text:"7"}, {key:"D", text:"8"}, {key:"E", text:"9"} ],
          correct: "B",
          steps: ["Since $0<0.5<1$, a smaller exponent gives a larger value, so $(0.5)^x>(0.5)^7$ means $x<7$.", "The greatest positive integer less than 7 is 6."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "$b>0$ and $b^{12}=b^{20}$. What is the value of $b$?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"$\\frac12$"}, {key:"C", text:"1"}, {key:"D", text:"2"}, {key:"E", text:"Cannot be determined"} ],
          correct: "C",
          steps: ["Rewrite as $b^{12}(b^8-1)=0$.", "Since $b>0$, $b\\neq0$, so we need $b^8=1$.", "The only positive real solution is $b=1$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "What is the value of $(-1)^{99}+(-1)^{100}+(-1)^{101}$?",
          options: [ {key:"A", text:"$-3$"}, {key:"B", text:"$-1$"}, {key:"C", text:"$0$"}, {key:"D", text:"$1$"}, {key:"E", text:"$3$"} ],
          correct: "B",
          steps: ["$99$ is odd: $(-1)^{99}=-1$. $100$ is even: $(-1)^{100}=1$. $101$ is odd: $(-1)^{101}=-1$.", "$-1+1+(-1)=-1$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "Which of the following expressions equals 1 for EVERY real value of $x$?",
          options: [ {key:"A", text:"$x^0$"}, {key:"B", text:"$1^x$"}, {key:"C", text:"$0^x$"}, {key:"D", text:"$(-1)^x$"}, {key:"E", text:"$x^1$"} ],
          correct: "B",
          steps: ["$x^0$ fails at $x=0$ itself, since $0^0$ is undefined (not a well-defined base exception).", "$1^x=1$ for every real $x$, since 1 raised to any power stays 1.", "$0^x$ is undefined for $x\\leq0$. $(-1)^x$ is not even always real (e.g. $x=0.5$ gives $\\sqrt{-1}$). $x^1=x$, which only equals 1 when $x=1$.", "Only $1^x$ works for all real $x$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "What is the value of $(-1)^{77}+(-1)^{78}$?",
          correct: 0,
          steps: ["$77$ is odd, so $(-1)^{77}=-1$. $78$ is even, so $(-1)^{78}=1$.", "$-1+1=0$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "How many integers $n$ from 1 to 50, inclusive, satisfy $(-1)^n=-1$?",
          correct: 25,
          steps: ["$(-1)^n=-1$ exactly when $n$ is odd.", "There are 25 odd integers between 1 and 50 (namely $1,3,5,\\ldots,49$)."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "$b$ is a negative real number and $b^6=b^{10}$. What is the value of $b$?",
          correct: -1,
          steps: ["Rewrite as $b^6(b^4-1)=0$.", "Since $b$ is negative, $b\\neq0$, so $b^4=1$, giving real solutions $b=1$ or $b=-1$.", "Since $b$ must be negative, $b=-1$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "What is the value of $\\dfrac{(0.25)^3}{(0.25)^5}$?",
          correct: 16,
          steps: ["$\\dfrac{(0.25)^3}{(0.25)^5}=(0.25)^{3-5}=(0.25)^{-2}$.", "$(0.25)^{-2}=\\dfrac{1}{(0.25)^2}=\\dfrac{1}{0.0625}=16$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "$x$ is a positive integer and $(0.9)^x<(0.9)^3$. What is the smallest possible value of $x$?",
          correct: 4,
          steps: ["Since $0<0.9<1$, a larger exponent gives a smaller value, so $(0.9)^x<(0.9)^3$ means $x>3$.", "The smallest positive integer greater than 3 is 4."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "What is the value of $(-1)^{15}\\times(-1)^{22}\\times(-1)^{33}$?",
          correct: 1,
          steps: ["$15$ odd: $-1$. $22$ even: $1$. $33$ odd: $-1$.", "$(-1)\\times1\\times(-1)=1$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "$x$ is a real number and $x^6=x^{10}$. How many possible values of $x$ are there?",
          correct: 3,
          steps: ["Rewrite as $x^6(x^4-1)=0$.", "This holds when $x=0$ or $x^4=1$ (giving $x=1$ or $x=-1$ as the real roots).", "Three possible values: $0, 1, -1$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "$b=0$. What is the value of $b^7-b^3+b^{100}$?",
          correct: 0,
          steps: ["Every term is $0$ raised to a positive power, which equals $0$.", "$0-0+0=0$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "For which of the following values of $b$ does $b^4=b^6$ hold? Select all that apply.",
          options: [ {key:"A", text:"$-1$"}, {key:"B", text:"$0$"}, {key:"C", text:"$1$"}, {key:"D", text:"$2$"}, {key:"E", text:"$-2$"} ],
          correct: ["A", "B", "C"],
          steps: [
            "Check the three base exceptions and two ordinary values.",
            "$b=-1$: $(-1)^4=1=(-1)^6$, true. $b=0$: $0^4=0=0^6$, true. $b=1$: $1^4=1=1^6$, true.",
            "$b=2$: $2^4=16$, $2^6=64$, not equal. $b=-2$: $(-2)^4=16$, $(-2)^6=64$, not equal.",
            "Works for $-1$, $0$, and $1$."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following statements are true? Select all that apply.",
          options: [ {key:"A", text:"$(-1)^{18}=1$"}, {key:"B", text:"$(-1)^{23}=-1$"}, {key:"C", text:"$1^{1{,}000{,}000}=1$"}, {key:"D", text:"$0^{5}=1$"}, {key:"E", text:"$(-1)^{0}=1$"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A: 18 is even, $(-1)^{18}=1$. True.",
            "B: 23 is odd, $(-1)^{23}=-1$. True.",
            "C: 1 to any power is 1. True.",
            "D: $0^5=0$, not 1. False.",
            "E: any nonzero base to the 0 power is 1, and $(-1)^0=1$. True."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "For which of the following values of $n$ is $(0.3)^n<(0.3)^4$ true? Select all that apply.",
          options: [ {key:"A", text:"1"}, {key:"B", text:"3"}, {key:"C", text:"5"}, {key:"D", text:"6"}, {key:"E", text:"8"} ],
          correct: ["C", "D", "E"],
          steps: [
            "Since $0<0.3<1$, larger exponents give smaller values, so $(0.3)^n<(0.3)^4$ means $n>4$.",
            "Check: $n=1$, not $>4$. $n=3$, not $>4$. $n=5,6,8$ are all $>4$.",
            "True for $n=5, 6, 8$."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following equations are true when $b=1$? Select all that apply.",
          options: [ {key:"A", text:"$b^3=b^5$"}, {key:"B", text:"$b^2=4$"}, {key:"C", text:"$b^0=1$"}, {key:"D", text:"$2b=2$"}, {key:"E", text:"$b+1=2$"} ],
          correct: ["A", "C", "D", "E"],
          steps: [
            "Substitute $b=1$ into each.",
            "A: $1^3=1=1^5$, true. B: $1^2=1\\neq4$, false. C: $1^0=1$, true. D: $2(1)=2$, true. E: $1+1=2$, true.",
            "True for A, C, D, E."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following values of $x$ satisfy $x^8=x^4$ AND $x\\neq1$? Select all that apply.",
          options: [ {key:"A", text:"$0$"}, {key:"B", text:"$-1$"}, {key:"C", text:"$1$"}, {key:"D", text:"$2$"}, {key:"E", text:"$-2$"} ],
          correct: ["A", "B"],
          steps: [
            "Rewrite as $x^4(x^4-1)=0$, so $x=0$ or $x^4=1$ (giving $x=1$ or $x=-1$).",
            "$x=0$: satisfies the equation and $0\\neq1$, valid. $x=-1$: satisfies the equation and $-1\\neq1$, valid.",
            "$x=1$ is excluded by the condition $x\\neq1$. $x=2$: $2^8=256\\neq16=2^4$, doesn't even satisfy the equation. $x=-2$: $(-2)^8=256\\neq16=(-2)^4$, doesn't satisfy either.",
            "Valid: $0$ and $-1$."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following statements about exponential bases are true? Select all that apply.",
          options: [ {key:"A", text:"If $b=1$, then $b^x=b^y$ for all real $x, y$."}, {key:"B", text:"If $b=0$ and $x, y$ are both positive, then $b^x=b^y$."}, {key:"C", text:"If $b=-1$, then $b^x=b^y$ whenever $x$ and $y$ are both even or both odd."}, {key:"D", text:"If $0<b<1$, then $b^x$ decreases as $x$ increases."}, {key:"E", text:"If $b>1$, then $b^x$ decreases as $x$ increases."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "A: $1$ raised to any power is always $1$. True.",
            "B: for positive exponents, $0^x=0$ regardless of the specific positive value of $x$. True.",
            "C: $(-1)^x$ depends only on the parity of $x$ (assuming integer exponents); same parity gives the same value. True.",
            "D: this is the fractional-base rule; raising a value between 0 and 1 to a higher power shrinks it. True.",
            "E: for $b>1$, $b^x$ actually increases as $x$ increases (e.g. $2^2=4<2^3=8$). False."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "$b=-1$.",
          quantityA: "$b^{50}$",
          quantityB: "$b^{51}$",
          correct: "A",
          steps: ["$b^{50}=(-1)^{50}=1$, since 50 is even.", "$b^{51}=(-1)^{51}=-1$, since 51 is odd.", "Quantity A (1) is greater than Quantity B ($-1$)."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$0<x<1$.",
          quantityA: "$x^3$",
          quantityB: "$x^5$",
          correct: "A",
          steps: ["Since $0<x<1$, raising $x$ to a higher power produces a smaller result.", "The smaller exponent (3) therefore gives the larger value.", "Quantity A is greater than Quantity B for every $x$ strictly between 0 and 1."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$x$ is an integer and $(-1)^x=1$.",
          quantityA: "$x$",
          quantityB: "$0$",
          correct: "D",
          steps: ["$(-1)^x=1$ means $x$ is even, so $x$ could be $\\ldots,-4,-2,0,2,4,\\ldots$", "If $x=0$, the quantities are equal. If $x=2$, Quantity A is greater. If $x=-2$, Quantity B is greater.", "The relationship cannot be determined."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "",
          quantityA: "$1^{100}$",
          quantityB: "$1^{99}$",
          correct: "C",
          steps: ["Quantity A: $1^{100}=1$.", "Quantity B: $1^{99}=1$.", "Both quantities equal 1, since 1 raised to any power is 1."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$b>0$ and $b^7=b^{11}$.",
          quantityA: "$b$",
          quantityB: "$1$",
          correct: "C",
          steps: ["Rewrite as $b^7(b^4-1)=0$.", "Since $b>0$, $b\\neq0$, so $b^4=1$, and the only positive real solution is $b=1$.", "Both quantities equal 1."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$0<a<1$.",
          quantityA: "$a^2$",
          quantityB: "$a$",
          correct: "B",
          steps: ["Since $0<a<1$, multiplying $a$ by itself again (an amount less than 1) shrinks it further.", "For example, $a=0.5$ gives $a^2=0.25<0.5=a$.", "$a^2<a$ for every $a$ strictly between 0 and 1, so Quantity B is greater."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "What are the roots of $6x^2 + 7x - 3 = 0$?",
          options: [ {key:"A", text:"$x = \\frac13, -\\frac32$"}, {key:"B", text:"$x = -\\frac13, \\frac32$"}, {key:"C", text:"$x = \\frac16, -3$"}, {key:"D", text:"$x = 3, -\\frac16$"}, {key:"E", text:"$x = 1, -\\frac32$"} ],
          correct: "A",
          steps: ["We need two numbers with product $6\\times(-3)=-18$ and sum $7$: those are $9$ and $-2$.", "Split the middle term: $6x^2+9x-2x-3 = 3x(2x+3)-1(2x+3) = (3x-1)(2x+3)$.", "Setting each factor to 0: $x=\\frac13$ or $x=-\\frac32$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "What are the roots of $2x^2 - 11x + 12 = 0$?",
          options: [ {key:"A", text:"$x = 2, 3$"}, {key:"B", text:"$x = \\frac32, 4$"}, {key:"C", text:"$x = -\\frac32, -4$"}, {key:"D", text:"$x = 4, 6$"}, {key:"E", text:"$x = \\frac34, 2$"} ],
          correct: "B",
          steps: ["We need two numbers with product $2\\times12=24$ and sum $-11$: those are $-8$ and $-3$.", "Split the middle term: $2x^2-8x-3x+12 = 2x(x-4)-3(x-4) = (2x-3)(x-4)$.", "Setting each factor to 0: $x=\\frac32$ or $x=4$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "Which of the following is equivalent to $x^4 - 81$?",
          options: [ {key:"A", text:"$(x^2-9)^2$"}, {key:"B", text:"$(x-3)(x+3)(x^2-9)$"}, {key:"C", text:"$(x-3)(x+3)(x^2+9)$"}, {key:"D", text:"$(x-9)(x+9)(x^2+9)$"}, {key:"E", text:"$(x^2-9)(x^2-9)$"} ],
          correct: "C",
          steps: ["Apply difference of squares once: $x^4-81=(x^2-9)(x^2+9)$.", "The first factor is itself a difference of squares: $x^2-9=(x-3)(x+3)$, while $x^2+9$ has no real factorization.", "Full factorization: $(x-3)(x+3)(x^2+9)$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "For all real $x > 25$, which expression is equivalent to $\\frac{x-25}{\\sqrt{x}-5}$?",
          options: [ {key:"A", text:"$\\sqrt{x}-5$"}, {key:"B", text:"$\\sqrt{x}+5$"}, {key:"C", text:"$x+5$"}, {key:"D", text:"$\\sqrt{x}-25$"}, {key:"E", text:"$5$"} ],
          correct: "B",
          steps: ["Recognize $x-25$ as a hidden difference of squares in terms of $\\sqrt{x}$: $x-25=(\\sqrt{x})^2-5^2=(\\sqrt{x}-5)(\\sqrt{x}+5)$.", "Substitute: $\\frac{(\\sqrt{x}-5)(\\sqrt{x}+5)}{\\sqrt{x}-5}$.", "Cancel the common factor $(\\sqrt{x}-5)$, leaving $\\sqrt{x}+5$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "What is $\\frac{1}{\\sqrt{7}-\\sqrt{5}}$ after rationalizing the denominator?",
          options: [ {key:"A", text:"$\\sqrt7-\\sqrt5$"}, {key:"B", text:"$\\frac{\\sqrt7+\\sqrt5}{2}$"}, {key:"C", text:"$\\frac{\\sqrt7-\\sqrt5}{2}$"}, {key:"D", text:"$\\sqrt7+\\sqrt5$"}, {key:"E", text:"$\\frac{\\sqrt7+\\sqrt5}{12}$"} ],
          correct: "B",
          steps: ["Multiply numerator and denominator by the conjugate $\\sqrt7+\\sqrt5$: $\\frac{1}{\\sqrt7-\\sqrt5}\\cdot\\frac{\\sqrt7+\\sqrt5}{\\sqrt7+\\sqrt5}$.", "The denominator becomes a difference of squares: $7-5=2$.", "Result: $\\frac{\\sqrt7+\\sqrt5}{2}$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "What are the roots of $5x^2 + 13x - 6 = 0$?",
          options: [ {key:"A", text:"$x = \\frac25, -3$"}, {key:"B", text:"$x = -\\frac25, 3$"}, {key:"C", text:"$x = \\frac35, -2$"}, {key:"D", text:"$x = \\frac65, -1$"}, {key:"E", text:"$x = 2, -\\frac35$"} ],
          correct: "A",
          steps: ["We need two numbers with product $5\\times(-6)=-30$ and sum $13$: those are $15$ and $-2$.", "Split the middle term: $5x^2+15x-2x-6=5x(x+3)-2(x+3)=(5x-2)(x+3)$.", "Setting each factor to 0: $x=\\frac25$ or $x=-3$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "Which of the following is the complete factorization of $x^4 - 16$ over the real numbers?",
          options: [ {key:"A", text:"$(x-2)(x+2)(x^2+4)$"}, {key:"B", text:"$(x-2)(x+2)(x-2)(x+2)$"}, {key:"C", text:"$(x^2-4)(x^2-4)$"}, {key:"D", text:"$(x-4)(x+4)(x^2+4)$"}, {key:"E", text:"$(x-2)(x+2)(x^2-4)$"} ],
          correct: "A",
          steps: ["Apply difference of squares: $x^4-16=(x^2-4)(x^2+4)$.", "Factor further: $x^2-4=(x-2)(x+2)$, and $x^2+4$ cannot be factored over the reals since it has no real roots.", "Complete factorization: $(x-2)(x+2)(x^2+4)$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "What are the roots of $3x^2 - x - 14 = 0$?",
          options: [ {key:"A", text:"$x = \\frac73, -2$"}, {key:"B", text:"$x = 7, -\\frac23$"}, {key:"C", text:"$x = -\\frac73, 2$"}, {key:"D", text:"$x = \\frac23, -7$"}, {key:"E", text:"$x = \\frac{14}{3}, -1$"} ],
          correct: "A",
          steps: ["We need two numbers with product $3\\times(-14)=-42$ and sum $-1$: those are $-7$ and $6$.", "Split the middle term: $3x^2-7x+6x-14=x(3x-7)+2(3x-7)=(3x-7)(x+2)$.", "Setting each factor to 0: $x=\\frac73$ or $x=-2$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "What are the roots of $4x^2 + 4x - 3 = 0$?",
          options: [ {key:"A", text:"$x = \\frac12, -\\frac32$"}, {key:"B", text:"$x = -\\frac12, \\frac32$"}, {key:"C", text:"$x = \\frac14, -3$"}, {key:"D", text:"$x = \\frac34, -1$"}, {key:"E", text:"$x = 3, -\\frac14$"} ],
          correct: "A",
          steps: ["We need two numbers with product $4\\times(-3)=-12$ and sum $4$: those are $6$ and $-2$.", "Split the middle term: $4x^2+6x-2x-3=2x(2x+3)-1(2x+3)=(2x-1)(2x+3)$.", "Setting each factor to 0: $x=\\frac12$ or $x=-\\frac32$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "What is $\\frac{1}{\\sqrt{10}-3}$ after rationalizing the denominator?",
          options: [ {key:"A", text:"$\\sqrt{10}+3$"}, {key:"B", text:"$\\sqrt{10}-3$"}, {key:"C", text:"$\\frac{\\sqrt{10}+3}{19}$"}, {key:"D", text:"$\\frac{\\sqrt{10}-3}{19}$"}, {key:"E", text:"$\\frac{\\sqrt{10}+3}{7}$"} ],
          correct: "A",
          steps: ["Multiply numerator and denominator by the conjugate $\\sqrt{10}+3$: $\\frac{1}{\\sqrt{10}-3}\\cdot\\frac{\\sqrt{10}+3}{\\sqrt{10}+3}$.", "The denominator becomes $(\\sqrt{10})^2-3^2=10-9=1$.", "Result: $\\frac{\\sqrt{10}+3}{1}=\\sqrt{10}+3$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "If $8x^2 + 2x - 3 = 0$ and $x > 0$, what is the value of $x$? Express your answer as a decimal.",
          correct: 0.5,
          steps: ["We need two numbers with product $8\\times(-3)=-24$ and sum $2$: those are $6$ and $-4$.", "Split the middle term: $8x^2+6x-4x-3=2x(4x+3)-1(4x+3)=(2x-1)(4x+3)$.", "The roots are $x=\\frac12$ and $x=-\\frac34$. Since $x>0$, $x=0.5$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "If $7x^2 - 19x + 10 = 0$, what is the larger root of $x$?",
          correct: 2,
          steps: ["We need two numbers with product $7\\times10=70$ and sum $-19$: those are $-14$ and $-5$.", "Split the middle term: $7x^2-14x-5x+10=7x(x-2)-5(x-2)=(7x-5)(x-2)$.", "The roots are $x=\\frac57$ and $x=2$. The larger root is 2."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "What is the positive real root of $x^4 - 256 = 0$?",
          correct: 4,
          steps: ["Factor using difference of squares: $x^4-256=(x^2-16)(x^2+16)$.", "$x^2+16=0$ has no real solutions, so we solve $x^2-16=0$, giving $x^2=16$.", "The positive real root is $x=4$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "$\\frac{1}{\\sqrt{x}-\\sqrt{y}}$ rationalizes to $\\frac{\\sqrt{x}+\\sqrt{y}}{x-y}$. If $x=19$ and $y=15$, what is the value of the denominator $x-y$ after rationalizing?",
          correct: 4,
          steps: ["Rationalizing multiplies numerator and denominator by the conjugate $\\sqrt{x}+\\sqrt{y}$.", "The new denominator is $(\\sqrt{x})^2-(\\sqrt{y})^2=x-y$.", "With $x=19$ and $y=15$: $19-15=4$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "If $9x^2 - 6x - 8 = 0$, what is the sum of the two roots? Express your answer as a decimal.",
          correct: 0.667,
          steps: ["We need two numbers with product $9\\times(-8)=-72$ and sum $-6$: those are $-12$ and $6$.", "Split the middle term: $9x^2-12x+6x-8=3x(3x-4)+2(3x-4)=(3x+2)(3x-4)$.", "The roots are $x=-\\frac23$ and $x=\\frac43$. Their sum is $-\\frac23+\\frac43=\\frac23\\approx0.667$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "For $x>1$, the expression $\\frac{x-1}{\\sqrt{x}-1}-\\sqrt{x}$ simplifies to a constant. What is that constant?",
          correct: 1,
          steps: ["Write $x-1$ as a difference of squares in $\\sqrt{x}$: $x-1=(\\sqrt{x}-1)(\\sqrt{x}+1)$.", "Substitute: $\\frac{(\\sqrt{x}-1)(\\sqrt{x}+1)}{\\sqrt{x}-1}-\\sqrt{x}$.", "Cancel $(\\sqrt{x}-1)$: $(\\sqrt{x}+1)-\\sqrt{x}=1$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "If $x^4 - y^4 = 65$ and $x^2 - y^2 = 5$, what is the value of $x^2 + y^2$?",
          correct: 13,
          steps: ["Factor: $x^4-y^4=(x^2-y^2)(x^2+y^2)$.", "Substitute the known value: $65=5(x^2+y^2)$.", "Divide: $x^2+y^2=13$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "If $2x^2 + 5x - 12 = 0$, what is the positive root of $x$? Express your answer as a decimal.",
          correct: 1.5,
          steps: ["We need two numbers with product $2\\times(-12)=-24$ and sum $5$: those are $8$ and $-3$.", "Split the middle term: $2x^2+8x-3x-12=2x(x+4)-3(x+4)=(2x-3)(x+4)$.", "The roots are $x=\\frac32$ and $x=-4$. The positive root is $1.5$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following are valid factorizations of $10x^2 + 11x - 6$? Select all that apply.",
          options: [ {key:"A", text:"$(5x-2)(2x+3)$"}, {key:"B", text:"$(2x+3)(5x-2)$"}, {key:"C", text:"$(10x+15)(x-2)$"}, {key:"D", text:"$(5x+6)(2x-1)$"}, {key:"E", text:"$(2x-3)(5x+2)$"} ],
          correct: ["A", "B"],
          steps: [
            "We need two numbers with product $10\\times(-6)=-60$ and sum $11$: those are $15$ and $-4$.",
            "Split the middle term: $10x^2+15x-4x-6=5x(2x+3)-2(2x+3)=(5x-2)(2x+3)$.",
            "A and B are the same factorization written in different order, both correct.",
            "C shares a common factor of 5 pulled out incorrectly; expanding $(10x+15)(x-2)=10x^2-20x+15x-30=10x^2-5x-30$, which does not match.",
            "D expands to $10x^2-5x+12x-6=10x^2+7x-6$, which does not match. E expands to $10x^2+4x-15x-6=10x^2-11x-6$, which does not match (wrong sign on the middle term)."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following expressions are equivalent to $(x-6)(x+6)$ for all real $x$? Select all that apply.",
          options: [ {key:"A", text:"$x^2-36$"}, {key:"B", text:"$x^2-12x+36$"}, {key:"C", text:"$(x^2-36)$"}, {key:"D", text:"$x^2+36$"}, {key:"E", text:"$-(36-x^2)$"} ],
          correct: ["A", "C", "E"],
          steps: [
            "$(x-6)(x+6)=x^2-36$ by the difference of squares identity, matching A and C (identical expressions).",
            "B is the expansion of $(x-6)^2$, not $(x-6)(x+6)$, so it's incorrect. D has the wrong sign.",
            "E: $-(36-x^2)=x^2-36$, which matches."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following quadratics have $x=\\frac34$ as one of their roots? Select all that apply.",
          options: [ {key:"A", text:"$4x^2-x-3=0$"}, {key:"B", text:"$4x^2-3x-1=0$"}, {key:"C", text:"$8x^2-2x-3=0$"}, {key:"D", text:"$4x^2+x-3=0$"}, {key:"E", text:"$16x^2-9=0$"} ],
          correct: ["C", "D", "E"],
          steps: [
            "Substitute $x=\\frac34$ into each equation and check whether the result is 0.",
            "A: $4(\\frac{9}{16})-\\frac34-3=\\frac94-\\frac34-3=\\frac64-3=-1.5\\ne0$. A fails.",
            "B: $4(\\frac{9}{16})-3(\\frac34)-1=\\frac94-\\frac94-1=-1\\ne0$. B fails.",
            "C: $8(\\frac{9}{16})-2(\\frac34)-3=\\frac92-\\frac32-3=3-3=0$. C works.",
            "D: $4(\\frac{9}{16})+\\frac34-3=\\frac94+\\frac34-3=3-3=0$. D works.",
            "E: $16(\\frac{9}{16})-9=9-9=0$. E works.",
            "Correct set is C, D, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Let $f(x) = x^4 - 625$. Which of the following are factors of $f(x)$ over the real numbers? Select all that apply.",
          options: [ {key:"A", text:"$x-5$"}, {key:"B", text:"$x+5$"}, {key:"C", text:"$x^2+25$"}, {key:"D", text:"$x^2-25$"}, {key:"E", text:"$x-25$"} ],
          correct: ["A", "B", "C"],
          steps: [
            "Factor: $x^4-625=(x^2-25)(x^2+25)=(x-5)(x+5)(x^2+25)$.",
            "So the real factors are $x-5$, $x+5$, and $x^2+25$ (this quadratic has no real roots but is still an irreducible real factor).",
            "D, $x^2-25$, is a product of two of the listed factors, not itself a prime/irreducible factor in the final factorization, and E is not a factor at all since $25^4\\ne625$."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following are equivalent to $\\frac{1}{\\sqrt{x}+\\sqrt{y}}$ (assuming $x \\ne y$, both positive)? Select all that apply.",
          options: [ {key:"A", text:"$\\frac{\\sqrt{x}-\\sqrt{y}}{x-y}$"}, {key:"B", text:"$\\frac{\\sqrt{x}+\\sqrt{y}}{x-y}$"}, {key:"C", text:"$\\frac{\\sqrt{x}-\\sqrt{y}}{x+y}$"}, {key:"D", text:"$\\frac{1}{\\sqrt{x}-\\sqrt{y}} - \\frac{2\\sqrt{y}}{x-y}$"}, {key:"E", text:"$\\frac{\\sqrt{x}-\\sqrt{y}}{(\\sqrt{x})^2-(\\sqrt{y})^2}$"} ],
          correct: ["A", "D", "E"],
          steps: [
            "Rationalize the original: $\\frac{1}{\\sqrt{x}+\\sqrt{y}}\\cdot\\frac{\\sqrt{x}-\\sqrt{y}}{\\sqrt{x}-\\sqrt{y}}=\\frac{\\sqrt{x}-\\sqrt{y}}{x-y}$, matching A.",
            "E is the same expression as A since $(\\sqrt x)^2-(\\sqrt y)^2=x-y$, so E matches too.",
            "For D: $\\frac{1}{\\sqrt{x}-\\sqrt{y}}=\\frac{\\sqrt{x}+\\sqrt{y}}{x-y}$, so $\\frac{\\sqrt{x}+\\sqrt{y}}{x-y}-\\frac{2\\sqrt{y}}{x-y}=\\frac{\\sqrt{x}-\\sqrt{y}}{x-y}$, matching A. D is valid.",
            "B has the wrong sign in the numerator, and C has the wrong sign in the denominator; neither equals the target."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "The quadratic $12x^2 - 5x - 2 = 0$ has two roots. Which of the following statements about the roots are true? Select all that apply.",
          options: [ {key:"A", text:"One root is $\\frac23$."}, {key:"B", text:"One root is $-\\frac14$."}, {key:"C", text:"The sum of the roots is $\\frac{5}{12}$."}, {key:"D", text:"The product of the roots is $-\\frac16$."}, {key:"E", text:"Both roots are positive."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "We need two numbers with product $12\\times(-2)=-24$ and sum $-5$: those are $-8$ and $3$.",
            "Split the middle term: $12x^2-8x+3x-2=4x(3x-2)+1(3x-2)=(4x+1)(3x-2)$.",
            "Roots: $x=-\\frac14$ and $x=\\frac23$, confirming A and B.",
            "Sum of roots $=-\\frac14+\\frac23=-\\frac{3}{12}+\\frac{8}{12}=\\frac{5}{12}$, matching C (also equals $-b/a=5/12$).",
            "Product of roots $=(-\\frac14)(\\frac23)=-\\frac16$, matching D (also equals $c/a=-2/12=-1/6$).",
            "E is false since one root is negative."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "$x$ and $y$ are positive integers such that $x^2 - y^2 = 45$ and $x - y = 9$.",
          quantityA: "$x + y$",
          quantityB: "$6$",
          correct: "B",
          steps: ["Factor: $x^2-y^2=(x-y)(x+y)=45$.", "Since $x-y=9$: $9(x+y)=45$, so $x+y=5$.", "Quantity A is 5, and Quantity B is 6, so Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$4x^2 + 4x - 15 = 0$, and $x$ is negative.",
          quantityA: "$x$",
          quantityB: "$-2$",
          correct: "B",
          steps: ["We need two numbers with product $4\\times(-15)=-60$ and sum $4$: those are $10$ and $-6$.", "Split the middle term: $4x^2+10x-6x-15=2x(2x+5)-3(2x+5)=(2x-3)(2x+5)$.", "Roots: $x=\\frac32$ and $x=-\\frac52$. The negative root is $-2.5$.", "Since $-2.5$ is further left on the number line than $-2$, Quantity A ($-2.5$) is less than Quantity B ($-2$)."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$x^4 - y^4 = 175$ and $x^2 + y^2 = 25$, where $x$ and $y$ are positive.",
          quantityA: "$x^2 - y^2$",
          quantityB: "$8$",
          correct: "B",
          steps: ["Factor: $x^4-y^4=(x^2-y^2)(x^2+y^2)=175$.", "Substitute: $(x^2-y^2)(25)=175$, so $x^2-y^2=7$.", "Quantity A is 7, Quantity B is 8, so Quantity B is greater than Quantity A."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "For $x>4$, let $E = \\frac{x-4}{\\sqrt{x}-2}$.",
          quantityA: "$E$ when $x=9$",
          quantityB: "$5$",
          correct: "C",
          steps: ["Simplify generally: $x-4=(\\sqrt{x}-2)(\\sqrt{x}+2)$, so $E=\\sqrt{x}+2$.", "At $x=9$: $E=\\sqrt9+2=3+2=5$.", "Both quantities equal 5."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$a$ and $b$ are positive numbers with $a - b = 4$ and $a + b = 11$.",
          quantityA: "$\\frac{1}{\\sqrt{a}-\\sqrt{b}}$ multiplied by $(a-b)$",
          quantityB: "$\\sqrt{a}+\\sqrt{b}$",
          correct: "C",
          steps: ["Rationalizing shows $\\frac{1}{\\sqrt{a}-\\sqrt{b}}=\\frac{\\sqrt{a}+\\sqrt{b}}{a-b}$.", "Multiplying this by $(a-b)$ gives exactly $\\sqrt{a}+\\sqrt{b}$, regardless of the specific values of $a$ and $b$.", "Quantity A and Quantity B are algebraically identical, so they are equal."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$6x^2 - 7x - 3 = 0$.",
          quantityA: "The positive root of $x$",
          quantityB: "The absolute value of the negative root of $x$",
          correct: "A",
          steps: ["We need two numbers with product $6\\times(-3)=-18$ and sum $-7$: those are $-9$ and $2$.", "Split the middle term: $6x^2-9x+2x-3=3x(2x-3)+1(2x-3)=(3x+1)(2x-3)$.", "Roots: $x=-\\frac13$ and $x=\\frac32$.", "Quantity A is $\\frac32=1.5$. Quantity B is $|-\\frac13|=\\frac13\\approx0.33$.", "Quantity A is greater."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "How many integers $x$ satisfy $|3x - 6| < 15$?",
          options: [ {key:"A", text:"7"}, {key:"B", text:"8"}, {key:"C", text:"9"}, {key:"D", text:"10"}, {key:"E", text:"11"} ],
          correct: "C",
          steps: ["Rewrite the absolute value inequality: $-15 < 3x-6 < 15$.", "Add 6 to all parts: $-9 < 3x < 21$, then divide by 3: $-3 < x < 7$.", "The integers strictly between $-3$ and $7$ are $-2,-1,0,1,2,3,4,5,6$, which is 9 integers."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "If $a > 0$ and $b < 0$, which of the following must be true?",
          options: [ {key:"A", text:"$a < b$"}, {key:"B", text:"$\\frac1a < \\frac1b$"}, {key:"C", text:"$\\frac1a > \\frac1b$"}, {key:"D", text:"$ab > 0$"}, {key:"E", text:"$a + b > 0$"} ],
          correct: "C",
          steps: ["Since $a>0$, $\\frac1a$ is positive. Since $b<0$, $\\frac1b$ is negative.", "A positive number is always greater than a negative number, so $\\frac1a > \\frac1b$ always holds.", "A is false since $a$ is positive and $b$ is negative. D is false since a positive times a negative is negative. E depends on magnitudes and isn't guaranteed."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "What is the maximum integer value of $x$ satisfying $-2 \\le 3x + 4 < 13$?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"4"} ],
          correct: "C",
          steps: ["Subtract 4 from all parts: $-6 \\le 3x < 9$.", "Divide by 3: $-2 \\le x < 3$.", "The greatest integer satisfying $-2 \\le x < 3$ is 2 (since 3 itself is excluded)."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "If $x < y < 0$, which of the following must be true?",
          options: [ {key:"A", text:"$x^2 < y^2$"}, {key:"B", text:"$\\frac{1}{x} < \\frac{1}{y}$"}, {key:"C", text:"$x - y > 0$"}, {key:"D", text:"$xy < 0$"}, {key:"E", text:"$\\frac{y}{x} < 1$"} ],
          correct: "E",
          steps: ["Test $x=-5, y=-2$, which satisfies $x<y<0$.", "$\\frac{y}{x}=\\frac{-2}{-5}=0.4$, and since $|y|<|x|$ (both negative, $x$ further from 0), this quotient is always between 0 and 1, so E holds.", "A fails ($25 < 4$ is false), B fails ($-0.2 < -0.5$ is false), C fails ($x-y=-3$, not positive), D fails since both are negative so $xy>0$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "If $-4 \\le x \\le 10$ and $-2 \\le y \\le 3$, what is the maximum possible value of $x - y$?",
          options: [ {key:"A", text:"7"}, {key:"B", text:"8"}, {key:"C", text:"10"}, {key:"D", text:"12"}, {key:"E", text:"13"} ],
          correct: "D",
          steps: ["To maximize $x-y$, we want $x$ as large as possible and $y$ as small as possible.", "Maximum $x=10$, minimum $y=-2$.", "$x - y = 10 - (-2) = 12$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "What is the sum of all values of $x$ satisfying $|4x + 1| = 9$?",
          options: [ {key:"A", text:"$-1$"}, {key:"B", text:"$-0.5$"}, {key:"C", text:"$0$"}, {key:"D", text:"$0.5$"}, {key:"E", text:"$2$"} ],
          correct: "B",
          steps: ["Split into two cases: $4x+1=9$ or $4x+1=-9$.", "Case 1: $4x=8$, so $x=2$. Case 2: $4x=-10$, so $x=-2.5$.", "Sum: $2 + (-2.5) = -0.5$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "If $p$ and $q$ are nonzero numbers with $pq < 0$ and $p < q$, which must be true?",
          options: [ {key:"A", text:"$p > 0$"}, {key:"B", text:"$q < 0$"}, {key:"C", text:"$p < 0 < q$"}, {key:"D", text:"$|p| < |q|$"}, {key:"E", text:"$p + q = 0$"} ],
          correct: "C",
          steps: ["Since $pq<0$, $p$ and $q$ have opposite signs.", "Since $p<q$ and they have opposite signs, the negative one must be $p$ (it's smaller) and the positive one must be $q$.", "So $p<0<q$. D and E are not guaranteed since we know nothing about the specific magnitudes."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "How many integers satisfy $2 \\le |x - 3| \\le 7$?",
          options: [ {key:"A", text:"10"}, {key:"B", text:"11"}, {key:"C", text:"12"}, {key:"D", text:"13"}, {key:"E", text:"14"} ],
          correct: "C",
          steps: ["This splits into two ranges: $3-7 \\le x \\le 3-2$ or $3+2 \\le x \\le 3+7$, i.e. $-4 \\le x \\le 1$ or $5 \\le x \\le 10$.", "Integers in $[-4,1]$: $-4,-3,-2,-1,0,1$, that's 6 integers.", "Integers in $[5,10]$: $5,6,7,8,9,10$, that's 6 integers. Total: $6+6=12$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "If $\\frac{1}{a} > \\frac{1}{b}$ and both $a$ and $b$ are negative, which must be true?",
          options: [ {key:"A", text:"$a > b$"}, {key:"B", text:"$a < b$"}, {key:"C", text:"$a = b$"}, {key:"D", text:"$ab < 0$"}, {key:"E", text:"$a + b > 0$"} ],
          correct: "B",
          steps: ["When $a$ and $b$ share the same sign, taking reciprocals reverses the inequality direction.", "Test $a=-5, b=-2$: $\\frac{1}{-5}=-0.2$ and $\\frac{1}{-2}=-0.5$. Since $-0.2 > -0.5$, this satisfies $\\frac1a>\\frac1b$, and here $a=-5 < b=-2$.", "Since $a$ and $b$ share the same sign, $\\frac1a > \\frac1b \\iff a < b$. So the answer is B."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "What is the solution set of $-6 < 4 - 2x \\le 10$?",
          options: [ {key:"A", text:"$-3 \\le x < 5$"}, {key:"B", text:"$-5 \\le x < 3$"}, {key:"C", text:"$-3 < x \\le 5$"}, {key:"D", text:"$3 \\le x < 5$"}, {key:"E", text:"$-3 \\le x < -5$"} ],
          correct: "A",
          steps: ["Subtract 4 from all parts: $-10 < -2x \\le 6$.", "Divide by $-2$; dividing an inequality by a negative number flips both inequality signs: $5 > x \\ge -3$.", "Rewriting: $-3 \\le x < 5$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "How many integers satisfy $3 < 2x - 1 \\le 17$?",
          correct: 7,
          steps: ["Add 1 to all parts: $4 < 2x \\le 18$.", "Divide by 2: $2 < x \\le 9$.", "Integers satisfying this are $3,4,5,6,7,8,9$: that's 7 integers."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "What is the smallest positive integer $x$ satisfying $|2x - 5| > 11$?",
          correct: 9,
          steps: ["Split into two cases: $2x-5>11$ or $2x-5<-11$.", "Case 1: $2x>16$, so $x>8$. Case 2: $2x<-6$, so $x<-3$.", "The solution set is $x>8$ or $x<-3$. Among positive integers, the smallest one satisfying $x>8$ is 9."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "If $x$ and $y$ are integers with $-3 \\le x \\le 5$ and $2 \\le y \\le 6$, what is the minimum possible value of $xy$?",
          correct: -18,
          steps: ["To minimize the product $xy$, pair the most negative $x$ with the largest positive $y$.", "Minimum $x=-3$, maximum $y=6$.", "$xy = (-3)(6) = -18$. Checking other extreme pairs like $(5)(2)=10$ or $(-3)(2)=-6$ confirms $-18$ is the smallest."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "What is the positive difference between the two solutions of $|5x + 2| = 18$?",
          correct: 7.2,
          steps: ["Split into two cases: $5x+2=18$ or $5x+2=-18$.", "Case 1: $5x=16$, so $x=3.2$. Case 2: $5x=-20$, so $x=-4$.", "Positive difference: $3.2 - (-4) = 7.2$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "For how many integers $x$ is it true that $|x + 6| \\le 4$?",
          correct: 9,
          steps: ["Rewrite: $-4 \\le x+6 \\le 4$.", "Subtract 6: $-10 \\le x \\le -2$.", "Integers from $-10$ to $-2$ inclusive: that's $-2-(-10)+1=9$ integers."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "If $a > b > 0$, and $\\frac1a - \\frac1b = -\\frac{1}{12}$, with $a=4$, what is the value of $b$?",
          correct: 3,
          steps: ["Substitute $a=4$: $\\frac14 - \\frac1b = -\\frac{1}{12}$.", "Rearrange: $\\frac1b = \\frac14 + \\frac{1}{12} = \\frac{3}{12}+\\frac{1}{12}=\\frac{4}{12}=\\frac13$.", "So $b=3$. Check: $a=4>b=3>0$ as required."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "What is the width of the solution interval for $|3x - 9| \\le 21$? (Width means the difference between the largest and smallest values of $x$ satisfying the inequality.)",
          correct: 14,
          steps: ["Rewrite: $-21 \\le 3x-9 \\le 21$.", "Add 9: $-12 \\le 3x \\le 30$. Divide by 3: $-4 \\le x \\le 10$.", "Width $= 10 - (-4) = 14$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "If $x$ is a negative integer and $y$ is a positive integer with $|x| = |y| - 3$, and $y = 10$, what is $x$?",
          correct: -7,
          steps: ["Substitute $y=10$: $|x| = 10 - 3 = 7$.", "Since $x$ is negative, $x = -7$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Given $x < y < 0$, which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$xy > 0$"}, {key:"B", text:"$x + y < 2y$"}, {key:"C", text:"$y - x > 0$"}, {key:"D", text:"$\\frac1x > \\frac1y$"}, {key:"E", text:"$x + y > 2y$"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Test with $x=-6, y=-2$, which satisfies $x<y<0$.",
            "A: $xy=(-6)(-2)=12>0$, always true since two negatives multiply to a positive.",
            "B: $x<y \\Rightarrow x+y<y+y=2y$, always true (adding $y$ to both sides of $x<y$). Here $-8<-4$, confirmed.",
            "C: $x<y \\Rightarrow y-x>0$ always, by definition of a smaller number. Here $-2-(-6)=4>0$, confirmed.",
            "D: since $x,y$ share the same (negative) sign, taking reciprocals of $x<y$ flips the direction, giving $\\frac1x>\\frac1y$. Here $\\frac{1}{-6}\\approx-0.167 > \\frac{1}{-2}=-0.5$, confirmed.",
            "E is the reverse of B and is therefore false."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following integer values of $x$ satisfy $|2x - 7| < 9$? Select all that apply.",
          options: [ {key:"A", text:"$-1$"}, {key:"B", text:"$0$"}, {key:"C", text:"$4$"}, {key:"D", text:"$7$"}, {key:"E", text:"$8$"} ],
          correct: ["B", "C", "D"],
          steps: [
            "Rewrite: $-9 < 2x-7 < 9$. Add 7: $-2 < 2x < 16$. Divide by 2: $-1 < x < 8$.",
            "A ($x=-1$): $|2(-1)-7|=|-9|=9$, which is not strictly less than 9, so A fails (it lands exactly on the boundary).",
            "B ($x=0$): $|{-7}|=7<9$, true. C ($x=4$): $|8-7|=1<9$, true. D ($x=7$): $|14-7|=7<9$, true.",
            "E ($x=8$): $|16-7|=9$, not strictly less than 9, fails.",
            "Correct set: B, C, D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "If $ab < 0$ and $a + b > 0$, which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$a$ and $b$ have opposite signs."}, {key:"B", text:"The positive one of $a,b$ has greater absolute value."}, {key:"C", text:"$a > 0$ and $b > 0$."}, {key:"D", text:"$|a+b| < |a-b|$."}, {key:"E", text:"At least one of $a,b$ is positive."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "$ab<0$ means $a$ and $b$ have opposite signs (A true), which immediately implies at least one of them is positive (E true).",
            "Since their sum is positive despite one being negative, the positive value must outweigh the negative one in magnitude (B true). C is false since they have opposite signs, not both positive.",
            "D: when $a,b$ have opposite signs, $|a-b|=|a|+|b|$, while $|a+b|=\\big||a|-|b|\\big|$, which is always less than $|a|+|b|$ (as long as both are nonzero). So $|a+b|<|a-b|$ always holds here.",
            "Check with $a=5,b=-2$: $|a+b|=3$ and $|a-b|=7$, confirming $3<7$. D is true.",
            "Correct set: A, B, D, E."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following values of $x$ satisfy $x^2 - 5x < 0$? Select all that apply.",
          options: [ {key:"A", text:"$1$"}, {key:"B", text:"$2$"}, {key:"C", text:"$4$"}, {key:"D", text:"$5$"}, {key:"E", text:"$-1$"} ],
          correct: ["A", "B", "C"],
          steps: [
            "Factor: $x^2-5x = x(x-5) < 0$. This product is negative when $x$ and $x-5$ have opposite signs, which happens for $0 < x < 5$.",
            "Check each: A ($x=1$): $0<1<5$, true. B ($x=2$): true. C ($x=4$): true.",
            "D ($x=5$): $x(x-5)=5(0)=0$, not less than 0, fails. E ($x=-1$): $(-1)(-6)=6>0$, fails.",
            "Correct set: A, B, C."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following compound inequalities have the same solution set as $-5 \\le x \\le 5$? Select all that apply.",
          options: [ {key:"A", text:"$|x| \\le 5$"}, {key:"B", text:"$x^2 \\le 25$"}, {key:"C", text:"$-10 \\le 2x \\le 10$"}, {key:"D", text:"$|x| \\ge 5$"}, {key:"E", text:"$25 - x^2 \\ge 0$"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A: $|x|\\le5$ means exactly $-5\\le x\\le5$ by definition, matches.",
            "B: $x^2\\le25$ means $|x|\\le5$ (taking square roots of both sides of a squared inequality), matches.",
            "C: dividing all parts by 2 gives $-5\\le x\\le5$, matches.",
            "D: $|x|\\ge5$ means $x\\le-5$ or $x\\ge5$, the opposite region, does not match.",
            "E: $25-x^2\\ge0 \\Rightarrow x^2\\le25 \\Rightarrow -5\\le x\\le5$, matches."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Let $m$ and $n$ be nonzero real numbers such that $m > n$. Which of the following statements are always true? Select all that apply.",
          options: [ {key:"A", text:"If $m,n$ have the same sign, then $\\frac1m < \\frac1n$."}, {key:"B", text:"$-m < -n$."}, {key:"C", text:"$m^2 > n^2$."}, {key:"D", text:"$m - n > 0$."}, {key:"E", text:"If $m>0>n$, then $\\frac1m > \\frac1n$."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "A: When two numbers share a sign, taking reciprocals flips the inequality direction, so $m>n$ with same sign gives $\\frac1m<\\frac1n$. True.",
            "B: Multiplying $m>n$ by $-1$ flips the inequality: $-m<-n$. True.",
            "C: Test $m=1, n=-5$: here $m>n$ but $m^2=1 < n^2=25$. C is false, a classic trap since squaring doesn't preserve order without same-sign or magnitude info.",
            "D: $m>n \\Leftrightarrow m-n>0$ by definition. True.",
            "E: If $m>0>n$, then $\\frac1m$ is positive and $\\frac1n$ is negative, so $\\frac1m>\\frac1n$ always. True."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "$x$ satisfies $-8 \\le 3x + 1 \\le 13$.",
          quantityA: "The maximum possible value of $x$",
          quantityB: "$4$",
          correct: "C",
          steps: ["Subtract 1 from all parts: $-9 \\le 3x \\le 12$.", "Divide by 3: $-3 \\le x \\le 4$.", "The maximum possible value of $x$ is 4, so Quantity A equals Quantity B."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$a$ and $b$ are negative numbers with $a < b$.",
          quantityA: "$\\frac1a$",
          quantityB: "$\\frac1b$",
          correct: "A",
          steps: ["Since $a$ and $b$ are both negative and share the same sign, taking reciprocals reverses the inequality direction.", "$a<b$ (same sign) implies $\\frac1a>\\frac1b$.", "So Quantity A is greater than Quantity B."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$x$ is an integer satisfying $|x - 4| \\le 6$.",
          quantityA: "The number of possible integer values of $x$",
          quantityB: "$13$",
          correct: "C",
          steps: ["Rewrite: $-6 \\le x-4 \\le 6$, so $-2 \\le x \\le 10$.", "Integers from $-2$ to $10$ inclusive: $10-(-2)+1=13$.", "Both quantities equal 13."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "$p > 0$ and $q < 0$.",
          quantityA: "$p - q$",
          quantityB: "$p + q$",
          correct: "A",
          steps: ["Since $q<0$, $-q>0$, so $p-q = p + (-q)$ adds a positive amount to $p$.", "Meanwhile $p+q$ adds a negative amount to $p$ (since $q<0$).", "Therefore $p-q > p+q$ always, so Quantity A is greater."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$-3 \\le x \\le 7$ and $y = |x - 2|$.",
          quantityA: "The maximum possible value of $y$",
          quantityB: "$6$",
          correct: "B",
          steps: ["$y=|x-2|$ is maximized at whichever endpoint of the interval is farther from 2.", "At $x=-3$: $y=|-3-2|=5$. At $x=7$: $y=|7-2|=5$.", "Both endpoints give $y=5$, and since $x-2$ passes through 0 within the interval (no larger distance occurs in between), the maximum value of $y$ is 5.", "Quantity A (5) is less than Quantity B (6)."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$m$ and $n$ are integers with $mn < 0$ and $|m| = 8$, $|n| = 3$.",
          quantityA: "The maximum possible value of $m + n$",
          quantityB: "$5$",
          correct: "C",
          steps: ["Since $mn<0$, $m$ and $n$ have opposite signs.", "To maximize $m+n$, take $m$ positive and $n$ negative (since $|m|>|n|$, this yields the larger sum): $m=8$, $n=-3$.", "$m+n = 8 + (-3) = 5$. Both quantities equal 5."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "How many distinct real solutions does $x^2 - 8x + 15 = 0$ have?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"Cannot be determined"} ],
          correct: "C",
          steps: ["Compute the discriminant: $\\Delta = (-8)^2 - 4(1)(15) = 64-60=4$.", "Since $\\Delta>0$, the equation has 2 distinct real solutions.", "(Indeed, $x^2-8x+15=(x-3)(x-5)$, confirming roots 3 and 5.)"]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "What is the minimum value of $f(x) = x^2 - 10x + 30$?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"5"}, {key:"C", text:"20"}, {key:"D", text:"25"}, {key:"E", text:"30"} ],
          correct: "B",
          steps: ["The vertex occurs at $x=-\\frac{b}{2a}=-\\frac{-10}{2(1)}=5$.", "Evaluate: $f(5)=5^2-10(5)+30=25-50+30=5$.", "Since $a=1>0$, the parabola opens upward, so this vertex value is the minimum."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "For what value of $k$ does $kx^2 + 4x + 1 = 0$ have exactly one real solution?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"2"}, {key:"C", text:"4"}, {key:"D", text:"8"}, {key:"E", text:"16"} ],
          correct: "C",
          steps: ["Exactly one real solution requires the discriminant to equal 0: $4^2 - 4(k)(1) = 0$.", "$16 - 4k = 0$, so $4k=16$.", "$k=4$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "What is the maximum value of $g(x) = -2x^2 + 12x - 5$?",
          options: [ {key:"A", text:"5"}, {key:"B", text:"7"}, {key:"C", text:"9"}, {key:"D", text:"13"}, {key:"E", text:"18"} ],
          correct: "D",
          steps: ["The vertex occurs at $x=-\\frac{b}{2a}=-\\frac{12}{2(-2)}=3$.", "Evaluate: $g(3)=-2(9)+12(3)-5=-18+36-5=13$.", "Since $a=-2<0$, the parabola opens downward, so this is the maximum value."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "How many real solutions does $2x^2 - 4x + 7 = 0$ have?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"4"} ],
          correct: "A",
          steps: ["Compute the discriminant: $\\Delta = (-4)^2 - 4(2)(7) = 16-56=-40$.", "Since $\\Delta<0$, the equation has 0 real solutions."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "What is the positive value of $k$ for which $x^2 + kx + 9 = 0$ has exactly one real solution?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"6"}, {key:"C", text:"9"}, {key:"D", text:"12"}, {key:"E", text:"18"} ],
          correct: "B",
          steps: ["Exactly one real solution requires $\\Delta=0$: $k^2 - 4(1)(9) = 0$.", "$k^2 = 36$, so $k = 6$ or $k=-6$.", "The positive value is $k=6$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "A ball's height in meters is modeled by $h(t) = -5t^2 + 20t + 3$, where $t$ is time in seconds. What is the maximum height reached?",
          options: [ {key:"A", text:"20"}, {key:"B", text:"23"}, {key:"C", text:"25"}, {key:"D", text:"28"}, {key:"E", text:"30"} ],
          correct: "B",
          steps: ["The vertex (maximum, since $a=-5<0$) occurs at $t=-\\frac{20}{2(-5)}=2$.", "Evaluate: $h(2)=-5(4)+20(2)+3=-20+40+3=23$.", "The maximum height is 23 meters."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "For what value of $c$ does $x^2 - 6x + c = 0$ have exactly one real solution?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"6"}, {key:"C", text:"9"}, {key:"D", text:"12"}, {key:"E", text:"36"} ],
          correct: "C",
          steps: ["Exactly one solution requires $\\Delta=0$: $(-6)^2-4(1)(c)=0$.", "$36-4c=0$, so $c=9$.", "(Indeed, $x^2-6x+9=(x-3)^2$, confirming a single repeated root at $x=3$.)"]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "How many real solutions does $x^2 + 2x + 5 = 0$ have?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"Cannot be determined"} ],
          correct: "A",
          steps: ["Compute the discriminant: $\\Delta = 2^2-4(1)(5)=4-20=-16$.", "Since $\\Delta<0$, there are 0 real solutions."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "What is the minimum value of $f(x) = 5x^2 - 20x + 13$?",
          options: [ {key:"A", text:"$-7$"}, {key:"B", text:"$-5$"}, {key:"C", text:"$2$"}, {key:"D", text:"$7$"}, {key:"E", text:"$13$"} ],
          correct: "A",
          steps: ["The vertex occurs at $x=-\\frac{-20}{2(5)}=2$.", "Evaluate: $f(2)=5(4)-20(2)+13=20-40+13=-7$.", "Since $a=5>0$, the parabola opens upward, so this is the minimum value."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "What is the minimum value of $x^2 - 14x + 50$?",
          correct: 1,
          steps: ["The vertex occurs at $x=-\\frac{-14}{2(1)}=7$.", "Evaluate: $7^2-14(7)+50=49-98+50=1$.", "Since the leading coefficient is positive, this is the minimum value."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "For what value of $k$ does $x^2 + 6x + k = 0$ have exactly one real solution?",
          correct: 9,
          steps: ["Exactly one solution requires $\\Delta=0$: $6^2-4(1)(k)=0$.", "$36-4k=0$, so $k=9$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "What is the maximum value of $-x^2 + 10x - 21$?",
          correct: 4,
          steps: ["The vertex occurs at $x=-\\frac{10}{2(-1)}=5$.", "Evaluate: $-(25)+10(5)-21=-25+50-21=4$.", "Since the leading coefficient is negative, this is the maximum value."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "What is the $x$-coordinate of the vertex of $y = 4x^2 - 16x + 3$?",
          correct: 2,
          steps: ["The vertex occurs at $x=-\\frac{b}{2a}=-\\frac{-16}{2(4)}$.", "$x=\\frac{16}{8}=2$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "What is the discriminant of $2x^2 + 3x - 9 = 0$?",
          correct: 81,
          steps: ["$\\Delta = b^2-4ac = 3^2-4(2)(-9)$.", "$\\Delta = 9+72=81$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "What is the largest integer value of $c$ for which $x^2 - 2x + c = 0$ has two distinct real solutions?",
          correct: 0,
          steps: ["Two distinct real solutions require $\\Delta>0$: $(-2)^2-4(1)(c)>0$.", "$4-4c>0$, so $c<1$.", "The largest integer satisfying $c<1$ is $c=0$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A rectangle has a perimeter of 40. What is the maximum possible area, modeled by $A(x) = x(20-x)$ where $x$ is one side length?",
          correct: 100,
          steps: ["Expand: $A(x)=20x-x^2=-x^2+20x$, a downward parabola.", "Vertex at $x=-\\frac{20}{2(-1)}=10$.", "$A(10)=10(20-10)=10(10)=100$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "What is the maximum value of $-3x^2 + 18x + 2$?",
          correct: 29,
          steps: ["The vertex occurs at $x=-\\frac{18}{2(-3)}=3$.", "Evaluate: $-3(9)+18(3)+2=-27+54+2=29$.", "Since the leading coefficient is negative, this is the maximum value."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following quadratic equations have exactly two distinct real solutions? Select all that apply.",
          options: [ {key:"A", text:"$x^2-6x+8=0$"}, {key:"B", text:"$x^2-6x+9=0$"}, {key:"C", text:"$x^2-6x+10=0$"}, {key:"D", text:"$2x^2+5x-3=0$"}, {key:"E", text:"$x^2+4x+4=0$"} ],
          correct: ["A", "D"],
          steps: [
            "A: $\\Delta=(-6)^2-4(1)(8)=36-32=4>0$, two distinct real solutions.",
            "B: $\\Delta=36-4(9)=0$, exactly one repeated solution, not two distinct ones.",
            "C: $\\Delta=36-40=-4<0$, no real solutions.",
            "D: $\\Delta=5^2-4(2)(-3)=25+24=49>0$, two distinct real solutions.",
            "E: $\\Delta=16-16=0$, exactly one repeated solution."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following functions have a maximum (rather than a minimum) value? Select all that apply.",
          options: [ {key:"A", text:"$f(x)=3x^2-2x+1$"}, {key:"B", text:"$f(x)=-x^2+4x$"}, {key:"C", text:"$f(x)=-5x^2+2$"}, {key:"D", text:"$f(x)=7-2x^2$"}, {key:"E", text:"$f(x)=x^2-9$"} ],
          correct: ["B", "C", "D"],
          steps: [
            "A parabola $ax^2+bx+c$ has a maximum if $a<0$ (opens downward) and a minimum if $a>0$ (opens upward).",
            "A: $a=3>0$, minimum. B: $a=-1<0$, maximum. C: $a=-5<0$, maximum.",
            "D: rewritten as $-2x^2+7$, $a=-2<0$, maximum. E: $a=1>0$, minimum.",
            "Functions with a maximum: B, C, D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "For the equation $x^2 - 4x + m = 0$, which of the following values of $m$ result in 0 real solutions? Select all that apply.",
          options: [ {key:"A", text:"$1$"}, {key:"B", text:"$3$"}, {key:"C", text:"$4$"}, {key:"D", text:"$5$"}, {key:"E", text:"$8$"} ],
          correct: ["D", "E"],
          steps: [
            "$\\Delta = (-4)^2-4(1)(m) = 16-4m$. We need $\\Delta<0$: $16-4m<0$, so $m>4$.",
            "A ($m=1$): $16-4=12>0$, two real solutions, fails. B ($m=3$): $16-12=4>0$, fails. C ($m=4$): $16-16=0$, exactly one solution, fails.",
            "D ($m=5$): $16-20=-4<0$, 0 real solutions, works. E ($m=8$): $16-32=-16<0$, 0 real solutions, works.",
            "Correct set: D, E."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "The function $h(x) = -(x-4)^2 + 7$ is given. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The maximum value of $h$ is 7."}, {key:"B", text:"The maximum occurs at $x=4$."}, {key:"C", text:"$h$ has two distinct real roots."}, {key:"D", text:"The minimum value of $h$ is 7."}, {key:"E", text:"$h(4) = 7$."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "In vertex form $h(x)=a(x-h)^2+k$, the vertex is $(4,7)$, and since $a=-1<0$, the parabola opens downward, so this vertex is a maximum, not a minimum. This confirms A and B, and makes D false (there is no minimum value).",
            "$h(4)=-(0)^2+7=7$, confirming E.",
            "For real roots, set $h(x)=0$: $-(x-4)^2+7=0 \\Rightarrow (x-4)^2=7 \\Rightarrow x=4\\pm\\sqrt7$, giving two distinct real roots. C is true.",
            "Correct set: A, B, C, E."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following values of $b$ make $x^2 + bx + 16 = 0$ have two distinct real solutions? Select all that apply.",
          options: [ {key:"A", text:"$6$"}, {key:"B", text:"$8$"}, {key:"C", text:"$9$"}, {key:"D", text:"$-9$"}, {key:"E", text:"$-6$"} ],
          correct: ["C", "D"],
          steps: [
            "$\\Delta = b^2 - 4(1)(16) = b^2-64$. We need $\\Delta>0$: $b^2>64$, so $b>8$ or $b<-8$.",
            "A ($b=6$): $36<64$, fails. B ($b=8$): $64=64$, exactly one solution, fails. C ($b=9$): $81>64$, works.",
            "D ($b=-9$): $81>64$, works. E ($b=-6$): $36<64$, fails.",
            "Correct set: C, D."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Consider $f(x) = 2x^2 - 8x + 5$. Which of the following statements are true? Select all that apply.",
          options: [ {key:"A", text:"The vertex is at $x=2$."}, {key:"B", text:"The minimum value is $-3$."}, {key:"C", text:"The parabola opens upward."}, {key:"D", text:"The discriminant is positive."}, {key:"E", text:"The function has no real roots."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Vertex: $x=-\\frac{-8}{2(2)}=2$, confirming A. Since $a=2>0$, the parabola opens upward (C true), so this vertex is a minimum.",
            "$f(2)=2(4)-8(2)+5=8-16+5=-3$, confirming B.",
            "$\\Delta = (-8)^2-4(2)(5)=64-40=24>0$, confirming D and implying two real roots, so E is false."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "Let $f(x) = x^2 - 12x + 40$.",
          quantityA: "The minimum value of $f(x)$",
          quantityB: "$4$",
          correct: "C",
          steps: ["Vertex at $x=-\\frac{-12}{2(1)}=6$.", "$f(6)=36-72+40=4$.", "Both quantities equal 4."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "Equation P: $x^2 - 5x + 7 = 0$. Equation Q: $x^2 - 5x + 3 = 0$.",
          quantityA: "The discriminant of Equation P",
          quantityB: "The discriminant of Equation Q",
          correct: "B",
          steps: ["Discriminant of P: $\\Delta_P=(-5)^2-4(1)(7)=25-28=-3$.", "Discriminant of Q: $\\Delta_Q=(-5)^2-4(1)(3)=25-12=13$.", "Quantity B (13) is greater than Quantity A ($-3$)."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "$k$ is a positive number such that $x^2 + 10x + k = 0$ has exactly one real solution.",
          quantityA: "$k$",
          quantityB: "$20$",
          correct: "A",
          steps: ["Exactly one solution requires $\\Delta=0$: $10^2-4(1)(k)=0$.", "$100-4k=0$, so $k=25$.", "Quantity A (25) is greater than Quantity B (20)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "$f(x) = -3x^2 + 6x + 9$.",
          quantityA: "The maximum value of $f(x)$",
          quantityB: "$f(0)$",
          correct: "A",
          steps: ["Vertex at $x=-\\frac{6}{2(-3)}=1$. $f(1)=-3+6+9=12$.", "$f(0)=-3(0)+6(0)+9=9$.", "Quantity A (12) is greater than Quantity B (9)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$x^2 + bx + 25 = 0$ has exactly one real solution, and $b$ is negative.",
          quantityA: "$b$",
          quantityB: "$-10$",
          correct: "C",
          steps: ["Exactly one solution requires $\\Delta=0$: $b^2-4(1)(25)=0$.", "$b^2=100$, so $b=10$ or $b=-10$.", "Since $b$ is negative, $b=-10$. Both quantities equal $-10$."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "Parabola $y = x^2 - 4x + c$ passes through the point $(0, 7)$.",
          quantityA: "The minimum value of $y$",
          quantityB: "$3$",
          correct: "C",
          steps: ["Since $(0,7)$ lies on the parabola: $7 = 0^2-4(0)+c$, so $c=7$.", "The vertex occurs at $x=-\\frac{-4}{2(1)}=2$. Minimum value: $2^2-4(2)+7=4-8+7=3$.", "Both quantities equal 3."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "What is the solution $(x, y)$ to the system $2x + y = 11$ and $x - y = 1$?",
          options: [ {key:"A", text:"(3, 4)"}, {key:"B", text:"(4, 3)"}, {key:"C", text:"(5, 2)"}, {key:"D", text:"(2, 5)"}, {key:"E", text:"(4, 4)"} ],
          correct: "B",
          steps: ["Add the two equations to eliminate $y$: $(2x+y)+(x-y)=11+1 \\Rightarrow 3x=12 \\Rightarrow x=4$.", "Substitute into $x-y=1$: $4-y=1 \\Rightarrow y=3$.", "The solution is $(4, 3)$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "For what value of $k$ does the system $4x - 2y = 8$ and $kx - y = 4$ have infinitely many solutions?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"2"}, {key:"C", text:"4"}, {key:"D", text:"−2"}, {key:"E", text:"8"} ],
          correct: "B",
          steps: ["For infinitely many solutions, $\\frac{4}{k}=\\frac{-2}{-1}=\\frac{8}{4}$.", "$\\frac{-2}{-1}=2$ and $\\frac{8}{4}=2$, so both ratios already equal 2.", "Set $\\frac{4}{k}=2 \\Rightarrow k=2$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "For what value of $k$ does the system $x + 3y = 6$ and $2x + ky = 9$ have no solution?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"4"}, {key:"C", text:"6"}, {key:"D", text:"9"}, {key:"E", text:"12"} ],
          correct: "C",
          steps: ["For no solution, the lines must be parallel but not identical: $\\frac{1}{2}=\\frac{3}{k}$.", "Cross-multiply: $k=6$.", "Check the constant ratio: $\\frac{6}{9}=\\frac23$, which is not equal to $\\frac12$, confirming the lines are parallel but distinct, so there is no solution."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "How many solutions does the system $y = 2x + 5$ and $2y - 4x = 10$ have?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"Infinitely many"}, {key:"E", text:"Cannot be determined"} ],
          correct: "D",
          steps: ["Rewrite the second equation: $2y-4x=10 \\Rightarrow y-2x=5 \\Rightarrow y=2x+5$.", "This is identical to the first equation, so every point on the line is a solution.", "The system has infinitely many solutions."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "What is the value of $x - y$ if $5x + 2y = 19$ and $3x - 2y = 5$?",
          options: [ {key:"A", text:"−1"}, {key:"B", text:"0"}, {key:"C", text:"1"}, {key:"D", text:"2"}, {key:"E", text:"3"} ],
          correct: "C",
          steps: ["Add the equations to eliminate $y$: $(5x+2y)+(3x-2y)=19+5 \\Rightarrow 8x=24 \\Rightarrow x=3$.", "Substitute into $5x+2y=19$: $15+2y=19 \\Rightarrow y=2$.", "$x-y=3-2=1$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "The system $6x - 3y = 12$ and $2x - y = k$ has infinitely many solutions. What is $k$?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"3"}, {key:"C", text:"4"}, {key:"D", text:"6"}, {key:"E", text:"12"} ],
          correct: "C",
          steps: ["Divide the first equation by 3: $2x-y=4$.", "This is identical in form to the second equation $2x-y=k$, so for infinitely many solutions, $k=4$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "For how many values of $k$ does the system $x + ky = 7$ and $2x + 4y = 14$ have exactly one solution?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"Infinitely many"}, {key:"E", text:"Cannot be determined"} ],
          correct: "D",
          steps: ["Divide the second equation by 2: $x+2y=7$.", "Comparing coefficients, the two lines have the same slope only when $k=2$, which then produces infinitely many solutions, not a unique one.", "For every other real value of $k$, the slopes differ, giving a unique solution, and there are infinitely many such values of $k$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "If the system $9x - 6y = 15$ and $3x - 2y = m$ has infinitely many solutions, what is $m$?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"5"}, {key:"C", text:"9"}, {key:"D", text:"15"}, {key:"E", text:"45"} ],
          correct: "B",
          steps: ["Divide the first equation by 3: $3x-2y=5$.", "This matches the second equation exactly when $m=5$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "How many solutions does the system $4x + 6y = 10$ and $6x + 9y = 12$ have?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"2"}, {key:"D", text:"Infinitely many"}, {key:"E", text:"Cannot be determined"} ],
          correct: "A",
          steps: ["Compare coefficient ratios: $\\frac{4}{6}=\\frac23$ and $\\frac{6}{9}=\\frac23$, so they match.", "Compare constants: $\\frac{10}{12}=\\frac56$, which is not equal to $\\frac23$.", "Since the coefficient ratios match but the constant ratio doesn't, the lines are parallel and distinct: 0 solutions."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "What is the value of $y$ in the solution to $x + y = 10$ and $x - y = 2$?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"3"}, {key:"C", text:"4"}, {key:"D", text:"6"}, {key:"E", text:"8"} ],
          correct: "C",
          steps: ["Add the equations: $2x=12 \\Rightarrow x=6$.", "Substitute into $x+y=10$: $y=4$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "Solve the system $3x + y = 13$ and $x + y = 7$ for $x$.",
          correct: 3,
          steps: ["Subtract the second equation from the first: $(3x+y)-(x+y)=13-7 \\Rightarrow 2x=6 \\Rightarrow x=3$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "For what value of $k$ does the system $2x + 5y = 10$ and $4x + ky = 20$ have infinitely many solutions?",
          correct: 10,
          steps: ["For infinitely many solutions, $\\frac{2}{4}=\\frac{5}{k}=\\frac{10}{20}$.", "$\\frac24=\\frac12$ and $\\frac{10}{20}=\\frac12$ already match.", "Set $\\frac5k=\\frac12 \\Rightarrow k=10$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "For what value of $k$ does the system $x - 2y = 5$ and $3x - 6y = k$ have infinitely many solutions (rather than none)?",
          correct: 15,
          steps: ["Multiply the first equation by 3: $3x-6y=15$.", "For the system to have infinitely many solutions rather than no solution, $k$ must equal 15."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "What is $x + y$ if $7x - 3y = 29$ and $2x + 3y = 16$?",
          correct: 7,
          steps: ["Add the two equations to eliminate $y$: $9x=45 \\Rightarrow x=5$.", "Substitute into $2x+3y=16$: $10+3y=16 \\Rightarrow y=2$.", "$x+y=5+2=7$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "For what value of $k$ does the system $5x + ky = 20$ and $10x + 6y = 40$ have infinitely many solutions instead of a unique one?",
          correct: 3,
          steps: ["Divide the second equation by 2: $5x+3y=20$.", "This matches the first equation exactly when $k=3$, giving infinitely many solutions rather than a unique one."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "Solve the system $x + 4y = 18$ and $x - 2y = 0$ for $y$.",
          correct: 3,
          steps: ["Subtract the second equation from the first: $(x+4y)-(x-2y)=18-0 \\Rightarrow 6y=18 \\Rightarrow y=3$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "What is the product $xy$ if $2x + y = 8$ and $x - y = 1$?",
          correct: 6,
          steps: ["Add the equations: $3x=9 \\Rightarrow x=3$.", "Substitute into $x-y=1$: $y=2$.", "$xy=3 \\times 2=6$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "For what value of $m$ does the system $mx + 2y = 6$ and $3x + 4y = 12$ have infinitely many solutions?",
          correct: 1.5,
          steps: ["For infinitely many solutions, $\\frac{m}{3}=\\frac{2}{4}=\\frac{6}{12}$.", "$\\frac24=\\frac12$ and $\\frac{6}{12}=\\frac12$ already match.", "Set $\\frac{m}{3}=\\frac12 \\Rightarrow m=1.5$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following systems have exactly one solution? Select all that apply.",
          options: [ {key:"A", text:"$x+y=5$ and $x-y=1$"}, {key:"B", text:"$2x+4y=8$ and $x+2y=4$"}, {key:"C", text:"$x+3y=6$ and $2x+6y=10$"}, {key:"D", text:"$3x-y=7$ and $x+y=5$"}, {key:"E", text:"$5x+2y=10$ and $5x+2y=20$"} ],
          correct: ["A", "D"],
          steps: [
            "A: coefficient ratios $\\frac11=1$ and $\\frac{1}{-1}=-1$ differ, so this has a unique solution.",
            "B: ratios $\\frac21=2$, $\\frac42=2$, $\\frac84=2$ all match, giving infinitely many solutions, not unique.",
            "C: ratios $\\frac12=0.5$ and $\\frac36=0.5$ match, but $\\frac{6}{10}=0.6$ doesn't, giving no solution, not unique.",
            "D: ratios $\\frac31=3$ and $\\frac{-1}{1}=-1$ differ, so this has a unique solution.",
            "E: ratios $\\frac55=1$ and $\\frac22=1$ match, but $\\frac{10}{20}=0.5$ doesn't, giving no solution, not unique.",
            "Only A and D have exactly one solution."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "The system $ax+by=c$ and $dx+ey=f$ has no solution. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$\\frac{a}{d}=\\frac{b}{e}$"}, {key:"B", text:"$\\frac{a}{d}=\\frac{c}{f}$"}, {key:"C", text:"$\\frac{a}{d} \\neq \\frac{c}{f}$"}, {key:"D", text:"The two lines are parallel."}, {key:"E", text:"The two lines have the same slope but different y-intercepts."} ],
          correct: ["A", "C", "D", "E"],
          steps: [
            "The no-solution condition is exactly $\\frac{a}{d}=\\frac{b}{e} \\neq \\frac{c}{f}$, so A is true, and since $\\frac{a}{d}=\\frac{b}{e}$, it follows that $\\frac{a}{d}\\neq\\frac{c}{f}$ too, so C is true.",
            "B directly contradicts the no-solution condition, so B is false.",
            "Matching coefficient ratios but different constant ratios describes two distinct parallel lines, so D and E are both true."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "For the system $x + 2y = 8$ and $kx + 4y = m$, which of the following $(k, m)$ pairs produce infinitely many solutions? Select all that apply.",
          options: [ {key:"A", text:"$k=2, m=16$"}, {key:"B", text:"$k=2, m=10$"}, {key:"C", text:"$k=1, m=8$"}, {key:"D", text:"$k=4, m=16$"}, {key:"E", text:"$k=2, m=8$"} ],
          correct: ["A"],
          steps: [
            "For infinitely many solutions, all three ratios must match: $\\frac{1}{k}=\\frac{2}{4}=\\frac{8}{m}$.",
            "$\\frac24=0.5$, so $\\frac1k=0.5 \\Rightarrow k=2$, and $\\frac{8}{m}=0.5 \\Rightarrow m=16$.",
            "Only option A has both $k=2$ and $m=16$ simultaneously; the rest each break at least one required ratio."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Two linear equations represent the exact same line. Which of the following must be true about their graphs? Select all that apply.",
          options: [ {key:"A", text:"They intersect at exactly one point."}, {key:"B", text:"They intersect at infinitely many points."}, {key:"C", text:"They have the same slope."}, {key:"D", text:"They have the same y-intercept."}, {key:"E", text:"They are perpendicular."} ],
          correct: ["B", "C", "D"],
          steps: [
            "If two equations represent the same line, every point on that line satisfies both equations, so they share infinitely many points, not just one (B true, A false).",
            "Being the same line, they trivially share the same slope and same y-intercept (C, D true). E is false, since a line is never perpendicular to itself."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following systems have NO solution? Select all that apply.",
          options: [ {key:"A", text:"$x+y=4$ and $x+y=9$"}, {key:"B", text:"$2x-y=3$ and $4x-2y=6$"}, {key:"C", text:"$3x+y=5$ and $3x+y=7$"}, {key:"D", text:"$x-2y=1$ and $2x-4y=2$"}, {key:"E", text:"$5x+2y=1$ and $10x+4y=3$"} ],
          correct: ["A", "C", "E"],
          steps: [
            "A: identical left sides but different constants (4 vs 9), so the lines are parallel and distinct: no solution.",
            "B: ratios $\\frac24=0.5$, $\\frac{-1}{-2}=0.5$, $\\frac36=0.5$ all match, giving infinitely many solutions, not none.",
            "C: identical left sides but different constants (5 vs 7): no solution.",
            "D: ratios $\\frac12=0.5$, $\\frac{-2}{-4}=0.5$, $\\frac12=0.5$ all match, giving infinitely many solutions, not none.",
            "E: ratios $\\frac{5}{10}=0.5$ and $\\frac24=0.5$ match, but $\\frac13\\approx0.33$ doesn't: no solution.",
            "The systems with no solution are A, C, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "For the system $4x - 6y = 10$ and $kx - 9y = m$ with $k=6$, which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"If $m=15$, the system has infinitely many solutions."}, {key:"B", text:"If $m=20$, the system has no solution."}, {key:"C", text:"The system always has a unique solution when $k=6$."}, {key:"D", text:"If $m=15$, the system has no solution."}, {key:"E", text:"The coefficient ratios $\\frac{4}{6}$ and $\\frac{-6}{-9}$ are equal."} ],
          correct: ["A", "B", "E"],
          steps: [
            "With $k=6$: $\\frac{4}{6}=\\frac23$ and $\\frac{-6}{-9}=\\frac23$, so the coefficient ratios already match (E true), meaning this system can never have a unique solution when $k=6$ (C is false).",
            "For infinitely many solutions, the constant ratio must also equal $\\frac23$: $\\frac{10}{m}=\\frac23 \\Rightarrow m=15$. So when $m=15$, the system has infinitely many solutions (A true, D false).",
            "For any $m \\neq 15$, such as $m=20$, the coefficient ratios match but the constant ratio doesn't, giving no solution (B true)."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "The system $x+y=12$ and $x-y=4$ has solution $(x,y)$.",
          quantityA: "$x$",
          quantityB: "$y$",
          correct: "A",
          steps: ["Add the equations: $2x=16 \\Rightarrow x=8$.", "Substitute: $y=12-8=4$.", "Quantity A (8) is greater than Quantity B (4)."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "The system $2x+3y=6$ and $4x+ky=12$ has infinitely many solutions.",
          quantityA: "$k$",
          quantityB: "$6$",
          correct: "C",
          steps: ["For infinitely many solutions, $\\frac24=\\frac{3}{k}=\\frac{6}{12}$.", "$\\frac24=0.5$ and $\\frac{6}{12}=0.5$ already match.", "Set $\\frac3k=0.5 \\Rightarrow k=6$.", "Both quantities equal 6."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "The system $x-3y=-1$ and $2x+y=12$ has solution $(x,y)$.",
          quantityA: "$x$",
          quantityB: "$y$",
          correct: "A",
          steps: ["From the first equation, $x=3y-1$.", "Substitute into the second: $2(3y-1)+y=12 \\Rightarrow 7y=14 \\Rightarrow y=2$.", "Then $x=3(2)-1=5$.", "Quantity A (5) is greater than Quantity B (2)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "System 1: $x+2y=10$ and $3x-2y=6$. System 2: $x+2y=10$ and $x-y=1$.",
          quantityA: "The value of $x$ in System 1",
          quantityB: "The value of $x$ in System 2",
          correct: "C",
          steps: ["System 1: add the two equations to eliminate $y$: $4x=16 \\Rightarrow x=4$.", "System 2: from $x-y=1$, $x=y+1$. Substitute into $x+2y=10$: $3y+1=10 \\Rightarrow y=3$, so $x=4$.", "Both systems give $x=4$; the quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "The system $5x - 2y = 3$ and $10x - 4y = k$ has no solution.",
          quantityA: "$k$",
          quantityB: "$6$",
          correct: "D",
          steps: ["The coefficient ratio is $\\frac{5}{10}=\\frac{-2}{-4}=0.5$, which already matches.", "For infinitely many solutions, the constant ratio would also need to be 0.5, meaning $\\frac{3}{k}=0.5 \\Rightarrow k=6$.", "Since the system is given to have NO solution instead, $k$ cannot equal 6, but it could be any other real number, greater or less than 6.", "The relationship cannot be determined from the given information."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "The system $x+y=20$ and $x-y=8$ has solution $(x,y)$.",
          quantityA: "The average (arithmetic mean) of $x$ and $y$",
          quantityB: "$10$",
          correct: "C",
          steps: ["The average of $x$ and $y$ is $\\frac{x+y}{2}$.", "From the first equation, $x+y=20$, so the average is $\\frac{20}{2}=10$ directly, with no need to solve for $x$ and $y$ individually.", "Both quantities equal 10."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "How many liters of a 10% saline solution must be added to 15 liters of a 40% saline solution to produce a 25% saline solution?",
          options: [ {key:"A", text:"10"}, {key:"B", text:"12"}, {key:"C", text:"15"}, {key:"D", text:"18"}, {key:"E", text:"20"} ],
          correct: "C",
          steps: ["Let $x$ = liters of 10% solution. Balance: $0.10x + 0.40(15) = 0.25(x+15)$.", "$0.10x + 6 = 0.25x + 3.75$.", "$2.25 = 0.15x$, so $x = 15$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "A store mixes coffee beans worth $6 per pound with coffee beans worth $9 per pound to make 20 pounds of a blend worth $7.50 per pound. How many pounds of the $6 beans are used?",
          options: [ {key:"A", text:"8"}, {key:"B", text:"9"}, {key:"C", text:"10"}, {key:"D", text:"11"}, {key:"E", text:"12"} ],
          correct: "C",
          steps: ["Let $x$ = pounds of $6 beans, so $20-x$ = pounds of $9 beans.", "$6x + 9(20-x) = 7.50(20)$.", "$6x + 180 - 9x = 150$.", "$-3x = -30$, so $x = 10$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "In a class of 50 students, 28 take Spanish and 22 take French. If 8 students take both languages, how many students take neither?",
          options: [ {key:"A", text:"4"}, {key:"B", text:"6"}, {key:"C", text:"8"}, {key:"D", text:"10"}, {key:"E", text:"12"} ],
          correct: "C",
          steps: ["Total $=$ Spanish $+$ French $-$ Both $+$ Neither.", "$50 = 28 + 22 - 8 + \\text{Neither}$.", "$50 = 42 + \\text{Neither}$, so Neither $= 8$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "How many milliliters of pure water must be added to 60 milliliters of a 30% alcohol solution to dilute it to a 12% alcohol solution?",
          options: [ {key:"A", text:"60"}, {key:"B", text:"75"}, {key:"C", text:"90"}, {key:"D", text:"100"}, {key:"E", text:"120"} ],
          correct: "C",
          steps: ["Pure water has 0% concentration. Balance: $0.30(60) + 0(x) = 0.12(60+x)$.", "$18 = 7.2 + 0.12x$.", "$10.8 = 0.12x$, so $x = 90$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "At a company, 80 employees know Python, 55 know Java, and 30 know both. Every employee knows at least one of the two languages. How many employees are there in total?",
          options: [ {key:"A", text:"95"}, {key:"B", text:"100"}, {key:"C", text:"105"}, {key:"D", text:"110"}, {key:"E", text:"135"} ],
          correct: "C",
          steps: ["Since everyone knows at least one language, Neither $= 0$.", "Total $= 80 + 55 - 30 + 0 = 105$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A chemist has a 15% acid solution and a 45% acid solution. She wants to mix them to create 12 liters of a 35% acid solution. How many liters of the 45% solution should she use?",
          options: [ {key:"A", text:"4"}, {key:"B", text:"6"}, {key:"C", text:"7"}, {key:"D", text:"8"}, {key:"E", text:"9"} ],
          correct: "D",
          steps: ["Let $x$ = liters of the 45% solution, so $12-x$ is the 15% solution.", "$0.45x + 0.15(12-x) = 0.35(12)$.", "$0.45x + 1.8 - 0.15x = 4.2$.", "$0.30x = 2.4$, so $x = 8$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "Nuts worth $4 per pound are mixed with 5 pounds of nuts worth $10 per pound to create a blend worth $6 per pound. How many pounds of the $4 nuts are used?",
          options: [ {key:"A", text:"8"}, {key:"B", text:"9"}, {key:"C", text:"10"}, {key:"D", text:"11"}, {key:"E", text:"12"} ],
          correct: "C",
          steps: ["Let $x$ = pounds of $4 nuts. Balance: $4x + 10(5) = 6(x+5)$.", "$4x + 50 = 6x + 30$.", "$20 = 2x$, so $x = 10$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "Of 200 survey respondents, 120 own a car and 90 own a bike. If 45 respondents own neither, how many own both a car and a bike?",
          options: [ {key:"A", text:"35"}, {key:"B", text:"40"}, {key:"C", text:"45"}, {key:"D", text:"55"}, {key:"E", text:"65"} ],
          correct: "D",
          steps: ["Total $=$ Car $+$ Bike $-$ Both $+$ Neither.", "$200 = 120 + 90 - \\text{Both} + 45$.", "$200 = 255 - \\text{Both}$, so Both $= 55$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "How many liters of pure antifreeze must be added to 8 liters of a 20% antifreeze solution to make a 50% antifreeze solution?",
          options: [ {key:"A", text:"3.6"}, {key:"B", text:"4"}, {key:"C", text:"4.4"}, {key:"D", text:"4.8"}, {key:"E", text:"5.2"} ],
          correct: "D",
          steps: ["Pure antifreeze is 100% concentration. Balance: $0.20(8) + 1.00(x) = 0.50(8+x)$.", "$1.6 + x = 4 + 0.5x$.", "$0.5x = 2.4$, so $x = 4.8$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A gardener mixes fertilizer type A, which is 8% nitrogen, with fertilizer type B, which is 20% nitrogen, to make 30 kilograms of a mix that is 14% nitrogen. How many kilograms of type B are used?",
          options: [ {key:"A", text:"10"}, {key:"B", text:"12"}, {key:"C", text:"15"}, {key:"D", text:"18"}, {key:"E", text:"20"} ],
          correct: "C",
          steps: ["Let $x$ = kilograms of type B, so $30-x$ is type A.", "$0.08(30-x) + 0.20x = 0.14(30)$.", "$2.4 - 0.08x + 0.20x = 4.2$.", "$0.12x = 1.8$, so $x = 15$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "How many liters of a 60% alcohol solution must be mixed with 4 liters of a 20% alcohol solution to produce a 40% alcohol solution?",
          correct: 4,
          steps: ["Let $x$ = liters of the 60% solution. Balance: $0.60x + 0.20(4) = 0.40(x+4)$.", "$0.60x + 0.8 = 0.40x + 1.6$.", "$0.20x = 0.8$, so $x = 4$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "Among 120 people surveyed, 70 like tea, 65 like coffee, and 10 like neither. How many people like both tea and coffee?",
          correct: 25,
          steps: ["Total $=$ Tea $+$ Coffee $-$ Both $+$ Neither.", "$120 = 70 + 65 - \\text{Both} + 10$.", "$120 = 145 - \\text{Both}$, so Both $= 25$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A metal alloy is 25% copper. How many kilograms of pure copper must be added to 12 kilograms of this alloy to raise the copper content to 40%?",
          correct: 3,
          steps: ["Let $x$ = kilograms of pure copper. Balance: $0.25(12) + 1.00(x) = 0.40(12+x)$.", "$3 + x = 4.8 + 0.4x$.", "$0.6x = 1.8$, so $x = 3$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "Raisins worth $3 per pound are mixed with 6 pounds of cashews worth $8 per pound to create a trail mix worth $5 per pound. How many pounds of raisins are used?",
          correct: 9,
          steps: ["Let $x$ = pounds of raisins. Balance: $3x + 8(6) = 5(x+6)$.", "$3x + 48 = 5x + 30$.", "$18 = 2x$, so $x = 9$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "Of 90 students, some take Chemistry, some take Physics, and 15 take both. If 60 students take Chemistry and 40 take Physics, how many students take neither?",
          correct: 5,
          steps: ["Total $=$ Chemistry $+$ Physics $-$ Both $+$ Neither.", "$90 = 60 + 40 - 15 + \\text{Neither}$.", "$90 = 85 + \\text{Neither}$, so Neither $= 5$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "How many liters of a 70% acid solution must be mixed with a 10% acid solution to produce 18 liters of a 40% acid solution?",
          correct: 9,
          steps: ["Let $x$ = liters of the 70% solution, so $18-x$ is the 10% solution.", "$0.70x + 0.10(18-x) = 0.40(18)$.", "$0.70x + 1.8 - 0.10x = 7.2$.", "$0.60x = 5.4$, so $x = 9$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "At a school, 200 students play a sport, a musical instrument, or both. If 130 play a sport and 95 play an instrument, how many students do both?",
          correct: 25,
          steps: ["Since every student does at least one activity, Neither $= 0$.", "Total $=$ Sport $+$ Instrument $-$ Both.", "$200 = 130 + 95 - \\text{Both}$, so Both $= 25$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "A tank contains 40 liters of a 45% saltwater solution. How many liters must be drained and replaced with pure water to bring the concentration down to 27%, if the drained amount is replaced with an equal amount of pure water?",
          correct: 16,
          steps: ["Let $x$ = liters drained and replaced. After removing $x$ liters of the mixture, $40-x$ liters of 45% solution remain, then $x$ liters of pure water are added back, keeping total volume at 40.", "Salt balance: $0.45(40-x) = 0.27(40)$.", "$18 - 0.45x = 10.8$.", "$0.45x = 7.2$, so $x = 16$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "A group of 100 people either read fiction, read nonfiction, or both; nobody reads neither. If 65 read fiction and 55 read nonfiction, which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"20 people read both fiction and nonfiction."}, {key:"B", text:"At least 20 people read only fiction."}, {key:"C", text:"45 people read only fiction."}, {key:"D", text:"35 people read only nonfiction."}, {key:"E", text:"The number who read only nonfiction is less than the number who read both."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Both $= 65+55-100 = 20$ (A true).",
            "Only fiction $= 65-20=45$ (C true, and since $45 \\ge 20$, B is also true).",
            "Only nonfiction $= 55-20=35$ (D true).",
            "E is false since only nonfiction (35) is greater than both (20), not less."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A 20% acid solution is mixed with a 60% acid solution to create a mixture that is between 30% and 40% acid, inclusive. Which of the following could be the ratio of liters of 20% solution to liters of 60% solution used? Select all that apply.",
          options: [ {key:"A", text:"1:1"}, {key:"B", text:"3:1"}, {key:"C", text:"1:3"}, {key:"D", text:"4:1"}, {key:"E", text:"2:1"} ],
          correct: ["A", "B", "E"],
          steps: [
            "For ratio $m:n$ (20% to 60%), the mixture concentration is $\\frac{20m+60n}{m+n}$.",
            "A (1:1): $\\frac{20+60}{2}=40$, within range. B (3:1): $\\frac{60+60}{4}=30$, within range.",
            "C (1:3): $\\frac{20+180}{4}=50$, too high. D (4:1): $\\frac{80+60}{5}=28$, too low.",
            "E (2:1): $\\frac{40+60}{3}=33.\\overline{3}$, within range.",
            "Valid ratios: A, B, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "In a survey of 150 people, some own a laptop, some own a tablet. Let $B$ be the number who own both, and suppose 90 own a laptop and 70 own a tablet. Which of the following are possible values of $B$? Select all that apply.",
          options: [ {key:"A", text:"5"}, {key:"B", text:"10"}, {key:"C", text:"40"}, {key:"D", text:"65"}, {key:"E", text:"75"} ],
          correct: ["B", "C", "D"],
          steps: [
            "Neither $= 150 - 90 - 70 + B = B - 10$, and since Neither cannot be negative, $B \\ge 10$.",
            "Also $B$ cannot exceed the smaller group, so $B \\le 70$.",
            "A (5) fails the lower bound, and E (75) fails the upper bound.",
            "B (10), C (40), and D (65) all satisfy $10 \\le B \\le 70$, so they are possible."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A 12-liter mixture is created by combining a 0% acid solution (pure water) with a 100% acid solution (pure acid). Which of the following final concentrations are achievable using whole-liter amounts of each? Select all that apply.",
          options: [ {key:"A", text:"0%"}, {key:"B", text:"25%"}, {key:"C", text:"33%"}, {key:"D", text:"50%"}, {key:"E", text:"75%"} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "With $x$ liters of pure acid and $12-x$ liters of water, concentration is $\\frac{x}{12} \\times 100\\%$, where $x$ is a whole number from 0 to 12.",
            "A: $0\\%$ needs $x=0$, valid. B: $25\\%$ needs $x=3$, valid. D: $50\\%$ needs $x=6$, valid. E: $75\\%$ needs $x=9$, valid.",
            "C: $33\\%$ needs $x=3.96$, not a whole number, invalid.",
            "Achievable: A, B, D, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Solution X is 30% salt and Solution Y is 50% salt. Equal volumes of X and Y are combined. Which of the following must be true about the resulting mixture? Select all that apply.",
          options: [ {key:"A", text:"The mixture is 40% salt."}, {key:"B", text:"The mixture's concentration is the average of 30% and 50%."}, {key:"C", text:"The mixture is saltier than Solution X."}, {key:"D", text:"The mixture is saltier than Solution Y."}, {key:"E", text:"The mixture's concentration depends on the actual volumes used, not just the ratio."} ],
          correct: ["A", "B", "C"],
          steps: [
            "With equal volumes, the mixture concentration is simply the average: $\\frac{30+50}{2}=40\\%$ (A and B true).",
            "40% > 30%, so it's saltier than X (C true). 40% < 50%, so it's not saltier than Y (D false).",
            "For a fixed ratio (here 1:1), the resulting concentration depends only on the ratio, not the actual volumes, so E is false."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "At a conference of 300 attendees, some attended Session A, some attended Session B. 180 attended A and 150 attended B. Which of the following statements about the number attending both sessions, $B_{oth}$, are true? Select all that apply.",
          options: [ {key:"A", text:"$B_{oth}$ could be as low as 30."}, {key:"B", text:"$B_{oth}$ could be as high as 150."}, {key:"C", text:"If everyone attended at least one session, $B_{oth}=30$."}, {key:"D", text:"$B_{oth}$ can exceed 150."}, {key:"E", text:"If $B_{oth}=100$, then 70 attendees attended neither session."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Neither $= 300 - 180 - 150 + B_{oth} = B_{oth} - 30$, and since Neither cannot be negative, $B_{oth} \\ge 30$, with equality when everyone attends at least one session (A true, C true).",
            "$B_{oth}$ also cannot exceed the smaller group of 150, so its maximum is exactly 150 (B true, D false).",
            "If $B_{oth}=100$: Neither $= 100 - 30 = 70$ (E true)."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A 40% saline solution is mixed with a 10% saline solution in a 2:1 ratio (2 parts 40% to 1 part 10%).",
          quantityA: "The concentration of the resulting mixture",
          quantityB: "30%",
          correct: "C",
          steps: ["Using 2 liters of 40% and 1 liter of 10%: $\\frac{0.40(2)+0.10(1)}{3} = \\frac{0.8+0.1}{3} = \\frac{0.9}{3} = 0.30$.", "The mixture is exactly 30%.", "Both quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "Of 80 people, 50 speak English and 45 speak French, and every person speaks at least one of the two languages.",
          quantityA: "The number of people who speak both languages",
          quantityB: "20",
          correct: "B",
          steps: ["Total $=$ English $+$ French $-$ Both (since Neither $=0$).", "$80 = 50+45-\\text{Both} = 95-\\text{Both}$.", "Both $= 15$.", "Quantity A is 15, which is less than Quantity B, 20."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "Solution P is 25% alcohol. 6 liters of pure alcohol are added to 10 liters of Solution P.",
          quantityA: "The concentration of the resulting mixture",
          quantityB: "50%",
          correct: "B",
          steps: ["Alcohol balance: $0.25(10) + 1.00(6) = 2.5+6 = 8.5$ liters of alcohol in $10+6=16$ liters total.", "Concentration $= 8.5/16 = 0.53125 = 53.125\\%$.", "Quantity A (about 53.1%) is greater than Quantity B (50%)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "A mixture is made from Solution A (20% salt) and Solution B (80% salt). The mixture uses more volume of Solution A than Solution B.",
          quantityA: "The concentration of the resulting mixture",
          quantityB: "50%",
          correct: "B",
          steps: ["The mixture concentration is a weighted average of 20% and 80%, weighted toward whichever solution has more volume.", "Since Solution A (the lower concentration) has more volume, the weighted average is pulled below the midpoint of 50%.", "Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "In a group of 60 students, 38 take Art and 27 take Music. The number who take neither is 5.",
          quantityA: "The number of students who take both Art and Music",
          quantityB: "12",
          correct: "B",
          steps: ["Total $=$ Art $+$ Music $-$ Both $+$ Neither.", "$60 = 38+27-\\text{Both}+5 = 70-\\text{Both}$.", "Both $= 10$.", "Quantity A is 10, which is less than Quantity B, 12."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "$x$ liters of a 90% acid solution are mixed with $y$ liters of a 30% acid solution, where $x=y$.",
          quantityA: "The concentration of the resulting mixture",
          quantityB: "The average of 90% and 30%",
          correct: "C",
          steps: ["When equal volumes are mixed, the resulting concentration is exactly the simple average of the two original concentrations.", "$\\frac{90+30}{2}=60\\%$, which is what Quantity A equals by the same reasoning as Quantity B.", "Both quantities are equal."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "Point $A$ has coordinates $(3, -7)$. What are the coordinates of the reflection of $A$ across the x-axis?",
          options: [ {key:"A", text:"$(-3, 7)$"}, {key:"B", text:"$(3, 7)$"}, {key:"C", text:"$(-3, -7)$"}, {key:"D", text:"$(7, -3)$"}, {key:"E", text:"$(-7, 3)$"} ],
          correct: "B",
          steps: ["Reflection across the x-axis: $(x,y)\\to(x,-y)$.", "$(3,-7) \\to (3, 7)$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "What is the midpoint of the segment connecting $(-4, 6)$ and $(10, -2)$?",
          options: [ {key:"A", text:"$(3, 2)$"}, {key:"B", text:"$(3, 4)$"}, {key:"C", text:"$(6, 4)$"}, {key:"D", text:"$(7, 2)$"}, {key:"E", text:"$(3, -2)$"} ],
          correct: "A",
          steps: ["Midpoint $=\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$.", "$\\left(\\frac{-4+10}{2}, \\frac{6+(-2)}{2}\\right) = (3, 2)$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A line has x-intercept 5 and y-intercept 12. What is the area of the triangle formed by this line and the two coordinate axes?",
          options: [ {key:"A", text:"17"}, {key:"B", text:"30"}, {key:"C", text:"60"}, {key:"D", text:"65"}, {key:"E", text:"120"} ],
          correct: "B",
          steps: ["Area $= \\frac12 |x\\text{-intercept}| \\cdot |y\\text{-intercept}|$.", "$\\frac12 (5)(12) = 30$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "Point $B$ is at $(-6, -9)$. What are the coordinates of its reflection through the origin?",
          options: [ {key:"A", text:"$(6, 9)$"}, {key:"B", text:"$(-6, 9)$"}, {key:"C", text:"$(6, -9)$"}, {key:"D", text:"$(9, 6)$"}, {key:"E", text:"$(-9, -6)$"} ],
          correct: "A",
          steps: ["Reflection through the origin: $(x,y)\\to(-x,-y)$.", "$(-6,-9) \\to (6, 9)$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "The midpoint of segment $PQ$ is $(2, 5)$. If $P = (-4, 1)$, what are the coordinates of $Q$?",
          options: [ {key:"A", text:"$(-1, 3)$"}, {key:"B", text:"$(6, 9)$"}, {key:"C", text:"$(8, 9)$"}, {key:"D", text:"$(0, 6)$"}, {key:"E", text:"$(6, 4)$"} ],
          correct: "C",
          steps: ["Midpoint formula: $2 = \\frac{-4+x_Q}{2}$ and $5 = \\frac{1+y_Q}{2}$.", "$4 = -4+x_Q$, so $x_Q = 8$.", "$10 = 1+y_Q$, so $y_Q = 9$.", "$Q = (8, 9)$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A line intersects the axes to form a triangle with the origin. The x-intercept is $-8$ and the y-intercept is $6$. What is the area of the triangle?",
          options: [ {key:"A", text:"14"}, {key:"B", text:"24"}, {key:"C", text:"28"}, {key:"D", text:"48"}, {key:"E", text:"56"} ],
          correct: "B",
          steps: ["Area uses absolute values of the intercepts: $\\frac12 |-8| \\cdot |6|$.", "$\\frac12(8)(6) = 24$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "Point $C = (4, -3)$ is reflected across the line $y = x$, giving point $C'$. What are the coordinates of $C'$?",
          options: [ {key:"A", text:"$(4, 3)$"}, {key:"B", text:"$(-4, -3)$"}, {key:"C", text:"$(-3, 4)$"}, {key:"D", text:"$(3, -4)$"}, {key:"E", text:"$(-3, -4)$"} ],
          correct: "C",
          steps: ["Reflection across $y=x$: $(x,y)\\to(y,x)$.", "$(4,-3) \\to (-3, 4)$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "The line $3x + 4y = 24$ crosses the x-axis and y-axis. What is the area of the triangle enclosed by this line and the two axes?",
          options: [ {key:"A", text:"12"}, {key:"B", text:"18"}, {key:"C", text:"24"}, {key:"D", text:"36"}, {key:"E", text:"48"} ],
          correct: "C",
          steps: ["x-intercept ($y=0$): $3x=24$, so $x=8$.", "y-intercept ($x=0$): $4y=24$, so $y=6$.", "Area $= \\frac12(8)(6) = 24$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A point is reflected across the y-axis, and the result is $(-9, 4)$. What were the original coordinates of the point?",
          options: [ {key:"A", text:"$(9, 4)$"}, {key:"B", text:"$(9, -4)$"}, {key:"C", text:"$(-9, -4)$"}, {key:"D", text:"$(4, -9)$"}, {key:"E", text:"$(-4, 9)$"} ],
          correct: "A",
          steps: ["Reflection across the y-axis: $(x,y)\\to(-x,y)$, and this operation is its own inverse.", "Applying it again to $(-9,4)$ recovers the original: $(9, 4)$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "Segment $DE$ has endpoints $D = (1, 1)$ and $E = (7, 7)$. What is the distance from the midpoint of $DE$ to the origin?",
          options: [ {key:"A", text:"$4\\sqrt2$"}, {key:"B", text:"$\\sqrt{34}$"}, {key:"C", text:"$8$"}, {key:"D", text:"$\\sqrt{41}$"}, {key:"E", text:"$10$"} ],
          correct: "A",
          steps: ["Midpoint $= \\left(\\frac{1+7}{2}, \\frac{1+7}{2}\\right) = (4, 4)$.", "Distance to origin $= \\sqrt{4^2+4^2} = \\sqrt{32} = 4\\sqrt2$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "Point $A = (-2, 5)$ is reflected across the x-axis to get point $A'$, then $A'$ is reflected across the y-axis to get point $A''$. What is the y-coordinate of $A''$?",
          correct: -5,
          steps: ["Reflect across x-axis: $(-2,5) \\to (-2,-5)$.", "Reflect that across the y-axis: $(-2,-5) \\to (2,-5)$.", "The y-coordinate of $A''$ is $-5$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A line has x-intercept 6 and forms a triangle of area 27 with the coordinate axes. What is the y-intercept of the line (a positive value)?",
          correct: 9,
          steps: ["Area $= \\frac12 (6)(y\\text{-intercept}) = 27$.", "$3(y\\text{-intercept}) = 27$, so the y-intercept is $9$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "The midpoint of segment $FG$ is $(0, -3)$, and $F = (5, 2)$. What is the x-coordinate of $G$?",
          correct: -5,
          steps: ["$0 = \\frac{5+x_G}{2}$, so $5+x_G=0$, giving $x_G = -5$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "Point $(7, -2)$ is reflected through the origin. What is the sum of the coordinates of the reflected point?",
          correct: -5,
          steps: ["Reflection through the origin: $(x,y)\\to(-x,-y)$.", "$(7,-2)\\to(-7,2)$.", "Sum of coordinates: $-7+2 = -5$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A line passes through $(0, 10)$ and $(15, 0)$. What is the area of the triangle formed with the coordinate axes?",
          correct: 75,
          steps: ["The y-intercept is 10 and the x-intercept is 15.", "Area $= \\frac12(15)(10) = 75$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "Points $H = (3, 8)$ and $K = (11, 8)$ have midpoint $M$. What is the distance from $M$ to point $(7, 3)$?",
          correct: 5,
          steps: ["Midpoint $M = \\left(\\frac{3+11}{2}, \\frac{8+8}{2}\\right) = (7, 8)$.", "Distance from $(7,8)$ to $(7,3)$ is $|8-3| = 5$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A triangle is formed by the line $5x + 2y = 20$ and the coordinate axes. What is the area of this triangle?",
          correct: 20,
          steps: ["x-intercept: $5x=20$, so $x=4$.", "y-intercept: $2y=20$, so $y=10$.", "Area $= \\frac12(4)(10) = 20$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "Point $(a, b)$ is reflected across $y = x$ to get $(3, -8)$. What is the value of $a + b$?",
          correct: -5,
          steps: ["Reflection across $y=x$ swaps coordinates and is its own inverse, so the original point is $(-8, 3)$.", "$a=-8$, $b=3$.", "$a+b = -8+3 = -5$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Point $P = (4, -6)$. Which of the following are true about its reflections? Select all that apply.",
          options: [ {key:"A", text:"Reflecting $P$ across the x-axis gives $(4, 6)$."}, {key:"B", text:"Reflecting $P$ across the y-axis gives $(-4, -6)$."}, {key:"C", text:"Reflecting $P$ through the origin gives $(-4, 6)$."}, {key:"D", text:"Reflecting $P$ across $y=x$ gives $(-6, 4)$."}, {key:"E", text:"Reflecting $P$ across the x-axis and then the y-axis gives the same result as reflecting through the origin."} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "x-axis: $(4,-6)\\to(4,6)$ (A true). y-axis: $(4,-6)\\to(-4,-6)$ (B true). Origin: $(4,-6)\\to(-4,6)$ (C true). $y=x$: $(4,-6)\\to(-6,4)$ (D true).",
            "Reflecting across the x-axis then the y-axis: $(4,-6)\\to(4,6)\\to(-4,6)$, which matches the origin reflection exactly (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A line has x-intercept $a$ and y-intercept $b$, both positive, and forms a triangle of area 40 with the axes. Which of the following pairs $(a, b)$ are possible? Select all that apply.",
          options: [ {key:"A", text:"$(8, 10)$"}, {key:"B", text:"$(5, 16)$"}, {key:"C", text:"$(4, 40)$"}, {key:"D", text:"$(20, 4)$"}, {key:"E", text:"$(10, 10)$"} ],
          correct: ["A", "B", "D"],
          steps: [
            "The pair is valid when $\\frac12 ab = 40$, i.e. $ab = 80$.",
            "A: $8\\times10=80$, valid. B: $5\\times16=80$, valid. C: $4\\times40=160$, invalid.",
            "D: $20\\times4=80$, valid. E: $10\\times10=100$, invalid.",
            "Valid pairs: A, B, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "The midpoint of segment $ST$ is $(3, -1)$. Which of the following could be the coordinates of $S$ and $T$? Select all that apply.",
          options: [ {key:"A", text:"$S=(1,1), T=(5,-3)$"}, {key:"B", text:"$S=(0,0), T=(6,-2)$"}, {key:"C", text:"$S=(3,-1), T=(3,-1)$"}, {key:"D", text:"$S=(-3,1), T=(9,-3)$"}, {key:"E", text:"$S=(2,-2), T=(4,1)$"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Check whether the average of each pair equals $(3,-1)$.",
            "A: $\\left(\\frac{1+5}{2},\\frac{1-3}{2}\\right)=(3,-1)$, valid. B: $\\left(\\frac{0+6}{2},\\frac{0-2}{2}\\right)=(3,-1)$, valid.",
            "C: $\\left(\\frac{3+3}{2},\\frac{-1-1}{2}\\right)=(3,-1)$, valid (a degenerate segment where $S=T$).",
            "D: $\\left(\\frac{-3+9}{2},\\frac{1-3}{2}\\right)=(3,-1)$, valid. E: $\\left(\\frac{2+4}{2},\\frac{-2+1}{2}\\right)=(3,-0.5)$, invalid.",
            "Valid pairs: A, B, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A point $(x, y)$ lies in Quadrant II (where $x<0$ and $y>0$). Which of the following reflections must land in Quadrant IV (where $x>0$ and $y<0$)? Select all that apply.",
          options: [ {key:"A", text:"Reflection across the x-axis"}, {key:"B", text:"Reflection across the y-axis"}, {key:"C", text:"Reflection through the origin"}, {key:"D", text:"Reflection across $y=x$"}, {key:"E", text:"Reflection across the x-axis followed by reflection across the y-axis"} ],
          correct: ["C", "D", "E"],
          steps: [
            "Start in Quadrant II: $x<0, y>0$.",
            "A (x-axis): $(x,y)\\to(x,-y)$ gives $x<0,-y<0$, Quadrant III, not IV.",
            "B (y-axis): $(x,y)\\to(-x,y)$ gives $-x>0,y>0$, Quadrant I, not IV.",
            "C (origin): $(x,y)\\to(-x,-y)$ gives $-x>0,-y<0$, Quadrant IV, valid.",
            "D ($y=x$): $(x,y)\\to(y,x)$ gives new x-coordinate $y>0$ and new y-coordinate $x<0$, which is Quadrant IV, valid.",
            "E (x-axis then y-axis) is algebraically the same as reflecting through the origin: $(x,y)\\to(x,-y)\\to(-x,-y)$, landing in Quadrant IV, valid.",
            "Reflections that land in Quadrant IV: C, D, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "A triangle is formed by a line and the coordinate axes, with x-intercept 12 and y-intercept 5. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The area of the triangle is 30."}, {key:"B", text:"The hypotenuse of the triangle has length 13."}, {key:"C", text:"The triangle is a right triangle."}, {key:"D", text:"The perimeter of the triangle is 30."}, {key:"E", text:"The line's slope has magnitude $\\frac{5}{12}$."} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "Area $=\\frac12(12)(5)=30$ (A true).",
            "The two legs (along the axes) are 12 and 5, meeting at a right angle at the origin, so it's a right triangle (C true) with hypotenuse $\\sqrt{12^2+5^2}=\\sqrt{169}=13$ (B true).",
            "Perimeter $=12+5+13=30$ (D true).",
            "The slope of the line through $(12,0)$ and $(0,5)$ has magnitude $\\left|\\frac{5-0}{0-12}\\right|=\\frac{5}{12}$ (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Point $W$ has coordinates $(a, b)$ with $a>0$ and $b<0$. Which of the following statements must be true? Select all that apply.",
          options: [ {key:"A", text:"$W$ lies in Quadrant IV."}, {key:"B", text:"The reflection of $W$ across the x-axis lies in Quadrant I."}, {key:"C", text:"The reflection of $W$ across the y-axis lies in Quadrant III."}, {key:"D", text:"The midpoint of $W$ and its reflection through the origin is the origin."}, {key:"E", text:"The reflection of $W$ across $y=x$ has a positive x-coordinate."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "$a>0, b<0$ places $W$ in Quadrant IV (A true).",
            "Reflecting across the x-axis: $(a,-b)$ with $-b>0$, giving Quadrant I (B true).",
            "Reflecting across the y-axis: $(-a,b)$ with $-a<0, b<0$, giving Quadrant III (C true).",
            "$W$ and its origin-reflection $(-a,-b)$ average to $\\left(\\frac{a-a}{2},\\frac{b-b}{2}\\right)=(0,0)$ (D true).",
            "Reflecting across $y=x$ gives $(b,a)$, whose x-coordinate is $b$, which is negative, not positive (E false)."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A line has x-intercept 9 and y-intercept 8.",
          quantityA: "The area of the triangle formed with the coordinate axes",
          quantityB: "35",
          correct: "A",
          steps: ["Area $= \\frac12(9)(8) = 36$.", "Quantity A (36) is greater than Quantity B (35)."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "Point $M$ is the midpoint of $(2, 9)$ and $(-8, 1)$.",
          quantityA: "The x-coordinate of $M$",
          quantityB: "The y-coordinate of $M$",
          correct: "B",
          steps: ["$M = \\left(\\frac{2-8}{2}, \\frac{9+1}{2}\\right) = (-3, 5)$.", "Quantity A is $-3$ and Quantity B is $5$.", "Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "Point $R = (6, -2)$ is reflected across the x-axis to get $R'$, and reflected across the y-axis to get $R''$.",
          quantityA: "The distance from $R'$ to the origin",
          quantityB: "The distance from $R''$ to the origin",
          correct: "C",
          steps: ["$R' = (6, 2)$, distance to origin $= \\sqrt{36+4}=\\sqrt{40}$.", "$R'' = (-6, -2)$, distance to origin $= \\sqrt{36+4}=\\sqrt{40}$.", "Both quantities are equal, since reflections preserve distance from the origin when only a sign flips."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "A line passes through $(0, -6)$ and $(4, 0)$. The x-intercept and y-intercept of this line define a triangle with the origin.",
          quantityA: "The area of the triangle formed with the coordinate axes",
          quantityB: "The area of a triangle with legs 5 and 5",
          correct: "B",
          steps: ["The x-intercept is 4 and the y-intercept is $-6$; area uses absolute values: $\\frac12(4)(6) = 12$.", "The comparison triangle has area $\\frac12(5)(5) = 12.5$.", "Quantity A (12) is less than Quantity B (12.5)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "The midpoint of $(a, 4)$ and $(10, b)$ is $(6, -1)$.",
          quantityA: "$a$",
          quantityB: "$b$",
          correct: "A",
          steps: ["$6 = \\frac{a+10}{2}$, so $a+10=12$, giving $a=2$.", "$-1 = \\frac{4+b}{2}$, so $4+b=-2$, giving $b=-6$.", "Quantity A is 2 and Quantity B is $-6$.", "Quantity A is greater than Quantity B."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "Point $(x, y)$ satisfies $x>0$ and $y>0$. It is reflected through the origin to form point $Z$.",
          quantityA: "The x-coordinate of $Z$",
          quantityB: "0",
          correct: "B",
          steps: ["Reflection through the origin sends $(x,y)\\to(-x,-y)$.", "Since $x>0$, the new x-coordinate, $-x$, is negative.", "Quantity B (0) is greater than Quantity A (a negative number)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "Two angles are complementary. One angle measures 34°. What is the measure of the other angle?",
          options: [ {key:"A", text:"46°"}, {key:"B", text:"56°"}, {key:"C", text:"66°"}, {key:"D", text:"146°"}, {key:"E", text:"156°"} ],
          correct: "B",
          steps: ["Complementary angles sum to $90°$.", "$90° - 34° = 56°$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "Two angles form a linear pair. One angle measures 112°. What is the measure of the other angle?",
          options: [ {key:"A", text:"58°"}, {key:"B", text:"68°"}, {key:"C", text:"78°"}, {key:"D", text:"248°"}, {key:"E", text:"88°"} ],
          correct: "B",
          steps: ["A linear pair is supplementary, summing to $180°$.", "$180° - 112° = 68°$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "Two lines intersect at a point, forming four angles. One of the angles measures 73°. What is the measure of the angle vertical to it?",
          options: [ {key:"A", text:"17°"}, {key:"B", text:"73°"}, {key:"C", text:"90°"}, {key:"D", text:"107°"}, {key:"E", text:"180°"} ],
          correct: "B",
          steps: ["Vertical angles (directly opposite at an intersection) are always equal.", "The angle vertical to 73° also measures 73°."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "An angle measures $3x + 15$ degrees, and its complement measures $2x$ degrees. What is the value of $x$?",
          options: [ {key:"A", text:"12"}, {key:"B", text:"15"}, {key:"C", text:"18"}, {key:"D", text:"21"}, {key:"E", text:"25"} ],
          correct: "B",
          steps: ["Complementary angles sum to $90°$: $(3x+15) + 2x = 90$.", "$5x + 15 = 90$.", "$5x = 75$, so $x = 15$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "Four angles meet at a single point. Three of them measure 80°, 95°, and 110°. What is the measure of the fourth angle?",
          options: [ {key:"A", text:"55°"}, {key:"B", text:"65°"}, {key:"C", text:"75°"}, {key:"D", text:"85°"}, {key:"E", text:"95°"} ],
          correct: "C",
          steps: ["Angles around a single point sum to $360°$.", "$360° - 80° - 95° - 110° = 75°$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "An angle measures 5 times its supplement. What is the measure of the angle?",
          options: [ {key:"A", text:"120°"}, {key:"B", text:"140°"}, {key:"C", text:"150°"}, {key:"D", text:"160°"}, {key:"E", text:"170°"} ],
          correct: "C",
          steps: ["Let the supplement be $x$, so the angle is $5x$, and $x + 5x = 180°$.", "$6x = 180°$, so $x = 30°$.", "The angle is $5(30°) = 150°$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "An angle is 4 times as large as its complement. What is the measure of the smaller angle?",
          options: [ {key:"A", text:"14°"}, {key:"B", text:"18°"}, {key:"C", text:"20°"}, {key:"D", text:"22°"}, {key:"E", text:"36°"} ],
          correct: "B",
          steps: ["Let the smaller angle (complement) be $x$, so the larger is $4x$, and $x+4x=90°$.", "$5x=90°$, so $x=18°$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "Two angles are supplementary and are in ratio $2:7$. What is the measure of the smaller angle?",
          options: [ {key:"A", text:"20°"}, {key:"B", text:"30°"}, {key:"C", text:"40°"}, {key:"D", text:"50°"}, {key:"E", text:"60°"} ],
          correct: "C",
          steps: ["The parts $2$ and $7$ total 9 shares of $180°$, so each share is $20°$.", "The smaller angle is $2 \\times 20° = 40°$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "An angle measures 128°. Based on its measure, how would this angle be classified?",
          options: [ {key:"A", text:"Acute"}, {key:"B", text:"Right"}, {key:"C", text:"Obtuse"}, {key:"D", text:"Straight"}, {key:"E", text:"Cannot be determined"} ],
          correct: "C",
          steps: ["An angle strictly between $90°$ and $180°$ is obtuse.", "$90° < 128° < 180°$, so it is obtuse."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "Three angles meet at a point on one side of a straight line, so together they form a straight angle. They measure $2x$, $3x$, and $x+30$ degrees. What is the measure of the largest of the three angles?",
          options: [ {key:"A", text:"50°"}, {key:"B", text:"75°"}, {key:"C", text:"80°"}, {key:"D", text:"90°"}, {key:"E", text:"100°"} ],
          correct: "B",
          steps: ["Angles on a straight line sum to $180°$: $2x + 3x + (x+30) = 180$.", "$6x + 30 = 180$.", "$6x = 150$, so $x = 25$.", "The three angles are $50°, 75°, 55°$, so the largest is $75°$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "Two angles are complementary, and one is 3 times as large as the other. What is the measure, in degrees, of the larger angle?",
          correct: 67.5,
          steps: ["Let the smaller be $x$, so the larger is $3x$, and $x+3x=90°$.", "$4x=90°$, so $x=22.5°$.", "The larger angle is $3(22.5°)=67.5°$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "Two lines intersect, forming four angles. One angle is $4x$ degrees and the angle adjacent to it (forming a linear pair) is $2x+30$ degrees. What is the value of $x$?",
          correct: 25,
          steps: ["A linear pair sums to $180°$: $4x + (2x+30) = 180$.", "$6x + 30 = 180$.", "$6x = 150$, so $x = 25$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "Five angles meet at a single point and are all equal. What is the measure, in degrees, of each angle?",
          correct: 72,
          steps: ["Angles around a point sum to $360°$.", "$360° \\div 5 = 72°$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "The measure of an angle exceeds the measure of its complement by 26°. What is the measure, in degrees, of the angle itself (the larger one)?",
          correct: 58,
          steps: ["Let the complement be $x$, so the angle is $x+26$, and $x + (x+26) = 90$.", "$2x + 26 = 90$.", "$2x = 64$, so $x = 32$.", "The angle is $32+26=58°$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "Two angles are supplementary. The measure of the first is 15° more than twice the measure of the second. What is the measure, in degrees, of the second (smaller) angle?",
          correct: 55,
          steps: ["Let the second angle be $x$, so the first is $2x+15$, and $x + (2x+15) = 180$.", "$3x + 15 = 180$.", "$3x = 165$, so $x = 55$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "At a point on a line, two rays are drawn on the same side, splitting the straight angle into three parts measuring $x$, $x+20$, and $x+40$ degrees. What is the value of $x$?",
          correct: 40,
          steps: ["The three parts sum to $180°$: $x + (x+20) + (x+40) = 180$.", "$3x + 60 = 180$.", "$3x = 120$, so $x = 40$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "Two vertical angles are labeled $5x - 20$ and $3x + 10$ degrees. What is the measure, in degrees, of each angle?",
          correct: 55,
          steps: ["Vertical angles are equal: $5x - 20 = 3x + 10$.", "$2x = 30$, so $x = 15$.", "Each angle measures $5(15)-20 = 55°$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "At a point, four angles are formed by two intersecting lines. One angle measures 38°. What is the sum, in degrees, of the two angles that are NOT vertical to the 38° angle?",
          correct: 284,
          steps: ["The angle vertical to 38° also measures 38°, and the other two angles are each supplementary to 38°, so each measures $180-38=142°$.", "Sum of the two non-vertical angles: $142+142=284°$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "An angle measures 62°. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"Its complement measures 28°."}, {key:"B", text:"Its supplement measures 118°."}, {key:"C", text:"The angle is acute."}, {key:"D", text:"The angle is obtuse."}, {key:"E", text:"Its supplement is obtuse."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Complement: $90-62=28°$ (A true). Supplement: $180-62=118°$ (B true).",
            "$62°$ is between $0°$ and $90°$, so the angle is acute (C true), not obtuse (D false).",
            "$118°$ is between $90°$ and $180°$, so the supplement is obtuse (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Two lines intersect at point $O$, forming angles 1, 2, 3, and 4 in order around the point. Angle 1 and Angle 3 are vertical, and Angle 2 and Angle 4 are vertical. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$\\angle1 = \\angle3$"}, {key:"B", text:"$\\angle1 + \\angle2 = 180°$"}, {key:"C", text:"$\\angle1 + \\angle2 + \\angle3 + \\angle4 = 360°$"}, {key:"D", text:"$\\angle2 = \\angle4$"}, {key:"E", text:"$\\angle1 = \\angle2$"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Vertical angles are equal, so $\\angle1=\\angle3$ (A true) and $\\angle2=\\angle4$ (D true).",
            "Adjacent angles at an intersection form a linear pair, so $\\angle1+\\angle2=180°$ (B true).",
            "All four angles around the point sum to $360°$ (C true).",
            "$\\angle1=\\angle2$ is not generally true; it only holds if both angles happen to be $90°$, which isn't given (E false)."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following angle measures are classified as obtuse? Select all that apply.",
          options: [ {key:"A", text:"89°"}, {key:"B", text:"90°"}, {key:"C", text:"91°"}, {key:"D", text:"150°"}, {key:"E", text:"180°"} ],
          correct: ["C", "D"],
          steps: [
            "Obtuse angles satisfy $90°<\\theta<180°$.",
            "A (89°) is acute. B (90°) is right, not obtuse. C (91°) and D (150°) both fall strictly between 90° and 180°, so both are obtuse. E (180°) is straight, not obtuse.",
            "Obtuse measures: C and D."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Angles $P$ and $Q$ are complementary, and angles $Q$ and $R$ are supplementary. If $P = 40°$, which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"$Q = 50°$"}, {key:"B", text:"$R = 130°$"}, {key:"C", text:"$R = 140°$"}, {key:"D", text:"$P + R = 170°$"}, {key:"E", text:"$Q$ is acute."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "$P+Q=90°$: $40°+Q=90°$, so $Q=50°$ (A true), which is acute (E true).",
            "$Q+R=180°$: $50°+R=180°$, so $R=130°$ (B true, C false).",
            "$P+R = 40°+130°=170°$ (D true)."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "At a point, several angles are arranged so that two of them, $\\angle1$ and $\\angle2$, are supplementary, and $\\angle2$ and $\\angle3$ are also supplementary. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$\\angle1 = \\angle3$"}, {key:"B", text:"$\\angle1 + \\angle3 = 2 \\times \\angle2$"}, {key:"C", text:"$\\angle1$ and $\\angle3$ are always vertical angles."}, {key:"D", text:"If $\\angle2 = 70°$, then $\\angle1 = 110°$."}, {key:"E", text:"$\\angle1 + \\angle2 + \\angle3 = 270°$"} ],
          correct: ["A", "D"],
          steps: [
            "$\\angle1 = 180° - \\angle2$ and $\\angle3 = 180° - \\angle2$, so $\\angle1 = \\angle3$ algebraically, regardless of geometric position (A true).",
            "If $\\angle2=70°$: $\\angle1 = 180°-70°=110°$ (D true).",
            "$\\angle1+\\angle3 = 2(180°-\\angle2) = 360°-2\\angle2$, which equals $2\\times\\angle2$ only in the special case $\\angle2=90°$, so B is not always true.",
            "$\\angle1+\\angle2+\\angle3 = (180°-\\angle2)+\\angle2+(180°-\\angle2) = 360°-\\angle2$, which is a fixed $270°$ only when $\\angle2=90°$, so E is not always true.",
            "C is false: being supplementary to a common angle makes $\\angle1$ and $\\angle3$ equal in measure, but that alone doesn't make them a vertical angle pair; they could be two separate linear pairs at different locations.",
            "Only A and D must always be true."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Angle $M$ and angle $N$ are vertical angles formed by two intersecting lines. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$M = N$"}, {key:"B", text:"$M$ and $N$ share a common vertex."}, {key:"C", text:"$M$ and $N$ are adjacent."}, {key:"D", text:"$M$ and each angle adjacent to it are supplementary."}, {key:"E", text:"If $M = 90°$, then all four angles at the intersection equal 90°."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "By definition, vertical angles are always equal (A true) and share the same vertex (B true), but they are opposite each other, not adjacent (C false).",
            "Each angle adjacent to $M$ forms a linear pair with it, so they are supplementary to $M$ (D true).",
            "If $M=90°$, its vertical angle $N$ also equals $90°$, and each adjacent angle is $180-90=90°$, so all four angles are $90°$ (E true)."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "Angle $X$ and angle $Y$ are complementary. Angle $X = 37°$.",
          quantityA: "Angle $Y$",
          quantityB: "53°",
          correct: "C",
          steps: ["$Y = 90° - 37° = 53°$.", "Both quantities equal 53°."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "Two angles form a linear pair. The first angle is 35° greater than the second.",
          quantityA: "The measure of the smaller angle",
          quantityB: "75°",
          correct: "B",
          steps: ["Let the smaller be $x$, so the larger is $x+35$, and $x+(x+35)=180°$.", "$2x=145°$, so $x=72.5°$.", "Quantity B (75°) is greater than Quantity A (72.5°)."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "At a point, three angles are formed on one side of a line, measuring 50°, 65°, and $z$ degrees, together forming a straight angle.",
          quantityA: "$z$",
          quantityB: "60°",
          correct: "A",
          steps: ["The three angles sum to $180°$: $50+65+z=180$.", "$z = 65°$.", "Quantity A (65°) is greater than Quantity B (60°)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "An angle is obtuse.",
          quantityA: "The measure of its supplement",
          quantityB: "The measure of its complement",
          correct: "D",
          steps: ["An obtuse angle has no complement, since a complement requires the angle to be less than 90°.", "Without a valid complement, the comparison cannot be evaluated using consistent geometric quantities, so the relationship cannot be determined from the given information alone."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "Four angles meet at a point: three of them measure 85°, 95°, and 100°.",
          quantityA: "The fourth angle",
          quantityB: "90°",
          correct: "B",
          steps: ["The four angles sum to $360°$: $85+95+100+w=360$.", "$280+w=360$, so $w=80°$.", "Quantity B (90°) is greater than Quantity A (80°)."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "Angle $A$ is vertical to angle $B$, and angle $B$ is supplementary to angle $C$, where angle $C = 65°$.",
          quantityA: "Angle $A$",
          quantityB: "115°",
          correct: "C",
          steps: ["$B = 180° - 65° = 115°$ (supplementary to $C$).", "$A = B = 115°$ (vertical angles are equal).", "Both quantities equal 115°."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "Lines $l_1$ and $l_2$ are parallel and cut by transversal $T$. One angle formed measures 72°. What is the measure of its corresponding angle at the other intersection?",
          options: [ {key:"A", text:"18°"}, {key:"B", text:"72°"}, {key:"C", text:"108°"}, {key:"D", text:"144°"}, {key:"E", text:"180°"} ],
          correct: "B",
          steps: ["Corresponding angles formed by a transversal crossing parallel lines are always equal.", "The corresponding angle also measures 72°."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. A pair of consecutive interior angles measure $3x$ and $2x + 20$ degrees. What is the value of $x$?",
          options: [ {key:"A", text:"28"}, {key:"B", text:"30"}, {key:"C", text:"32"}, {key:"D", text:"34"}, {key:"E", text:"36"} ],
          correct: "C",
          steps: ["Consecutive interior angles are supplementary: $3x + (2x+20) = 180$.", "$5x + 20 = 180$.", "$5x = 160$, so $x = 32$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. One angle in the acute group measures 58°. What is the measure of an angle in the obtuse group?",
          options: [ {key:"A", text:"32°"}, {key:"B", text:"58°"}, {key:"C", text:"122°"}, {key:"D", text:"128°"}, {key:"E", text:"148°"} ],
          correct: "C",
          steps: ["Any acute-group angle and any obtuse-group angle are supplementary.", "$180° - 58° = 122°$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$, forming alternate interior angles of $4x - 10$ and $2x + 30$ degrees. What is the value of $x$?",
          options: [ {key:"A", text:"15"}, {key:"B", text:"18"}, {key:"C", text:"20"}, {key:"D", text:"22"}, {key:"E", text:"25"} ],
          correct: "C",
          steps: ["Alternate interior angles are equal: $4x - 10 = 2x + 30$.", "$2x = 40$, so $x = 20$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "Two lines are cut by a transversal. A pair of corresponding angles are found to be equal. What can be concluded?",
          options: [ {key:"A", text:"The two lines are perpendicular."}, {key:"B", text:"The two lines are parallel."}, {key:"C", text:"The transversal bisects both lines."}, {key:"D", text:"The two lines intersect at a right angle."}, {key:"E", text:"Nothing can be concluded."} ],
          correct: "B",
          steps: ["One of the standard tests for parallelism is a pair of equal corresponding angles.", "Since this pair is equal, the two lines must be parallel."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$, creating alternate exterior angles of $5x$ and $3x + 40$ degrees. What is the measure, in degrees, of each of these angles?",
          options: [ {key:"A", text:"80°"}, {key:"B", text:"90°"}, {key:"C", text:"100°"}, {key:"D", text:"110°"}, {key:"E", text:"120°"} ],
          correct: "C",
          steps: ["Alternate exterior angles are equal: $5x = 3x + 40$.", "$2x = 40$, so $x = 20$.", "Each angle measures $5(20) = 100°$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "Two horizontal lines are connected by a bent path that forms a 'V' shape between them, like a zigzag. An auxiliary line is drawn through the vertex of the bend, parallel to both original lines. Why is this technique useful?",
          options: [ {key:"A", text:"It proves the two original lines are perpendicular."}, {key:"B", text:"It splits the unknown bend angle into two angles, each solvable using alternate interior angles with one of the original lines."}, {key:"C", text:"It doubles the size of the bend angle."}, {key:"D", text:"It eliminates the need for the transversal."}, {key:"E", text:"It shows the bend angle is always 90°."} ],
          correct: "B",
          steps: ["The auxiliary parallel line through the vertex creates two smaller angles that pair with alternate interior angle relationships to each of the two original parallel lines.", "Solving each piece separately and adding them recovers the full bend angle."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. One angle measures $x$ degrees and a consecutive interior angle on the same side measures $x + 60$ degrees. What is the measure, in degrees, of the smaller of the two angles?",
          options: [ {key:"A", text:"50°"}, {key:"B", text:"55°"}, {key:"C", text:"60°"}, {key:"D", text:"65°"}, {key:"E", text:"70°"} ],
          correct: "C",
          steps: ["Consecutive interior angles are supplementary: $x + (x+60) = 180$.", "$2x + 60 = 180$.", "$2x = 120$, so $x = 60°$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "Two lines are cut by a transversal, and a pair of consecutive interior angles is found to sum to exactly 180°. What can be concluded?",
          options: [ {key:"A", text:"The lines are parallel."}, {key:"B", text:"The lines are perpendicular."}, {key:"C", text:"The transversal is perpendicular to one line."}, {key:"D", text:"The lines intersect."}, {key:"E", text:"Nothing can be concluded."} ],
          correct: "A",
          steps: ["A pair of consecutive interior angles summing to exactly $180°$ is one of the valid tests proving parallelism.", "Therefore the two lines must be parallel."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. An angle in the obtuse group is $6x$ degrees, and an angle in the acute group at the same intersection is $2x + 10$ degrees, and the two angles are supplementary as a linear pair. What is the value of $x$?",
          options: [ {key:"A", text:"18.75"}, {key:"B", text:"20"}, {key:"C", text:"21.25"}, {key:"D", text:"22.5"}, {key:"E", text:"25"} ],
          correct: "C",
          steps: ["A linear pair is supplementary: $6x + (2x+10) = 180$.", "$8x + 10 = 180$.", "$8x = 170$, so $x = 21.25$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. A pair of corresponding angles are $4x + 5$ and $6x - 15$ degrees. What is the value of $x$?",
          correct: 10,
          steps: ["Corresponding angles are equal: $4x+5=6x-15$.", "$20=2x$, so $x=10$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. One angle in the acute group is $x$ degrees, and its consecutive interior angle is $3x + 20$ degrees. What is the measure, in degrees, of the acute angle?",
          correct: 40,
          steps: ["Consecutive interior angles are supplementary: $x + (3x+20) = 180$.", "$4x + 20 = 180$.", "$4x = 160$, so $x = 40°$.", "The acute angle measures $40°$, and the other angle is $3(40)+20=140°$, which is obtuse, consistent with the setup."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. An alternate exterior angle pair is given as $7x - 8$ and $5x + 12$ degrees. What is the measure, in degrees, of each angle?",
          correct: 62,
          steps: ["Alternate exterior angles are equal: $7x-8=5x+12$.", "$2x=20$, so $x=10$.", "Each angle measures $7(10)-8=62°$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. Two consecutive interior angles are in ratio $2:7$. What is the measure, in degrees, of the smaller angle?",
          correct: 40,
          steps: ["The two parts total 9 shares of $180°$ since they're supplementary.", "Each share is $180 \\div 9 = 20°$.", "The smaller angle is $2 \\times 20° = 40°$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. An angle in the acute group measures $(2x+10)$ degrees, and an angle in the obtuse group measures $(3x+20)$ degrees. If these two angles are supplementary, what is the value of $x$?",
          correct: 30,
          steps: ["Supplementary: $(2x+10) + (3x+20) = 180$.", "$5x + 30 = 180$.", "$5x = 150$, so $x = 30$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A zigzag path connects two parallel horizontal lines, bending once between them. An auxiliary parallel line through the bend splits the bend angle into two parts: one part equal to 35° (alternate interior with the top line) and the other part equal to 50° (alternate interior with the bottom line). What is the measure, in degrees, of the full bend angle?",
          correct: 85,
          steps: ["The auxiliary line splits the bend angle into two additive parts.", "Total bend angle $= 35° + 50° = 85°$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. One angle measures $5x + 15$ degrees, and its vertical angle measures $2x + 45$ degrees. What is the measure, in degrees, of the angle?",
          correct: 65,
          steps: ["Vertical angles are equal: $5x+15=2x+45$.", "$3x=30$, so $x=10$.", "The angle measures $5(10)+15=65°$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. A pair of alternate interior angles measure $(x+15)$ and $(3x-45)$ degrees. What is the measure, in degrees, of each angle?",
          correct: 45,
          steps: ["Alternate interior angles are equal: $x+15=3x-45$.", "$60=2x$, so $x=30$.", "Each angle measures $30+15=45°$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$, forming 8 angles. One angle measures 65°. Which of the following angle types must also measure 65°? Select all that apply.",
          options: [ {key:"A", text:"Its vertical angle"}, {key:"B", text:"Its corresponding angle at the other intersection"}, {key:"C", text:"Its alternate interior angle (if applicable)"}, {key:"D", text:"Its consecutive interior angle"}, {key:"E", text:"Its supplementary linear-pair angle"} ],
          correct: ["A", "B", "C"],
          steps: [
            "Vertical angles are always equal (A true). Corresponding angles are always equal (B true). Alternate interior/exterior angles are always equal (C true).",
            "A consecutive interior angle is supplementary to it, so it measures $180-65=115°$, not 65° (D false).",
            "Its linear-pair angle is also supplementary, measuring $115°$, not 65° (E false)."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Two lines are cut by a transversal. Which of the following observations would be enough, by itself, to prove the two lines are parallel? Select all that apply.",
          options: [ {key:"A", text:"A pair of alternate interior angles are equal."}, {key:"B", text:"A pair of corresponding angles are equal."}, {key:"C", text:"A pair of consecutive interior angles sum to 180°."}, {key:"D", text:"The transversal appears visually perpendicular to both lines in the diagram."}, {key:"E", text:"A pair of vertical angles are equal."} ],
          correct: ["A", "B", "C"],
          steps: [
            "A, B, and C are the three standard valid tests for proving parallelism.",
            "D is invalid: diagrams are not drawn to scale, and visual appearance never proves a geometric relationship.",
            "E is invalid: vertical angles are always equal regardless of whether the lines are parallel, so it proves nothing about parallelism."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. Angle 1 is in the acute group. Which of the following angles must belong to the obtuse group (assuming the lines are not perpendicular to the transversal)? Select all that apply.",
          options: [ {key:"A", text:"The angle vertical to Angle 1"}, {key:"B", text:"The angle forming a linear pair with Angle 1"}, {key:"C", text:"The angle corresponding to Angle 1 at the other intersection"}, {key:"D", text:"The consecutive interior angle paired with Angle 1"}, {key:"E", text:"The alternate exterior angle paired with Angle 1"} ],
          correct: ["B", "D"],
          steps: [
            "Vertical angles equal Angle 1, so they stay in the acute group (A false). Corresponding angles equal Angle 1, so they stay acute (C false). Alternate exterior angles equal Angle 1, so they stay acute (E false).",
            "The linear pair angle is supplementary to Angle 1, landing in the obtuse group (B true). The consecutive interior angle is also supplementary to Angle 1, landing in the obtuse group (D true)."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$, and one of the eight angles formed measures exactly 90°. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"All eight angles measure 90°."}, {key:"B", text:"The transversal is perpendicular to both $l_1$ and $l_2$."}, {key:"C", text:"There is only one unique angle measure among all eight angles."}, {key:"D", text:"The acute-group and obtuse-group angles are equal to each other."}, {key:"E", text:"The lines are no longer parallel."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "If one angle is 90°, its supplement is also $180-90=90°$, so both groups collapse to the same value, meaning all eight angles equal 90° (A true, C true, D true).",
            "A transversal that forms a 90° angle with one parallel line must form 90° with the other as well, since corresponding angles are equal, making the transversal perpendicular to both (B true).",
            "Being parallel is unaffected by the transversal's angle of crossing, so the lines remain parallel (E false)."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. Angle $A$ measures $3x + 10$ degrees and is in the acute group. Angle $B$ measures $x + 50$ degrees and is a consecutive interior angle to Angle $A$. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"$x = 30$"}, {key:"B", text:"Angle $A$ measures 100°."}, {key:"C", text:"Angle $B$ measures 80°."}, {key:"D", text:"Angle $A$ is actually in the obtuse group given this value."}, {key:"E", text:"Angle $A$ and Angle $B$ are equal."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Consecutive interior angles are supplementary: $(3x+10)+(x+50)=180$.",
            "$4x+60=180$, so $4x=120$, giving $x=30$ (A true).",
            "Angle $A = 3(30)+10=100°$ (B true), which is actually obtuse, contradicting its labeling as 'acute group' (D true, since 100° > 90°).",
            "Angle $B = 30+50=80°$ (C true).",
            "$100° \\ne 80°$, so Angle $A$ and Angle $B$ are not equal (E false)."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "A transversal crosses two lines that are NOT confirmed to be parallel. One pair of alternate interior angles measures 48° and 52°. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The two lines must be parallel."}, {key:"B", text:"The two lines are definitely not parallel."}, {key:"C", text:"If the lines were parallel, these two angles would have to be equal."}, {key:"D", text:"No conclusion about parallelism can be drawn from this pair alone."}, {key:"E", text:"The sum of the two angles, 100°, proves the lines intersect."} ],
          correct: ["B", "C"],
          steps: [
            "If the lines were parallel, alternate interior angles would have to be equal, but 48° $\\ne$ 52° (C true).",
            "Since the required equality fails, the lines cannot be parallel; this pair actively disproves parallelism, so B is true and A and D are false.",
            "E is not a meaningful geometric conclusion: any two non-parallel lines can be connected by a transversal regardless of these angle values, so this sum proves nothing specific."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. One angle measures 55°.",
          quantityA: "Its alternate interior angle",
          quantityB: "55°",
          correct: "C",
          steps: ["Alternate interior angles are equal when the lines are parallel.", "The alternate interior angle also measures 55°.", "Both quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. One angle in the acute group measures 40°.",
          quantityA: "An angle in the obtuse group",
          quantityB: "150°",
          correct: "B",
          steps: ["Any obtuse-group angle is supplementary to any acute-group angle.", "$180° - 40° = 140°$.", "Quantity A (140°) is less than Quantity B (150°)."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "Two lines are cut by a transversal. A pair of consecutive interior angles measure 85° and 95°.",
          quantityA: "The measure of an alternate interior angle to the 85° angle",
          quantityB: "85°",
          correct: "C",
          steps: ["Since the consecutive interior angles sum to exactly $85°+95°=180°$, the two lines are confirmed parallel.", "With the lines parallel, the alternate interior angle to the 85° angle is equal to it, so it also measures $85°$.", "Both quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "Lines $l_1 \\parallel l_2$ are cut by transversal $T$. A consecutive interior angle pair is $2x + 5$ and $3x + 15$ degrees.",
          quantityA: "$x$",
          quantityB: "32",
          correct: "C",
          steps: ["Consecutive interior angles are supplementary: $(2x+5)+(3x+15)=180$.", "$5x+20=180$.", "$5x=160$, so $x=32$.", "Both quantities equal 32."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "Two lines are cut by a transversal. A pair of corresponding angles measures 78° and 82°.",
          quantityA: "The measure of the angle vertical to the 78° angle",
          quantityB: "82°",
          correct: "B",
          steps: ["A vertical angle is always equal to the angle it is opposite, regardless of whether the lines are parallel: the angle vertical to 78° measures 78°.", "Note that since $78° \\ne 82°$, this pair actually proves the lines are NOT parallel, but the vertical angle relationship holds either way.", "Quantity B (82°) is greater than Quantity A (78°)."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A zigzag connects two parallel horizontal lines with a single bend. An auxiliary parallel line through the bend splits the bend angle into a 30° part and a 45° part.",
          quantityA: "The full bend angle",
          quantityB: "70°",
          correct: "A",
          steps: ["The auxiliary line splits the bend angle additively: $30°+45°=75°$.", "Quantity A (75°) is greater than Quantity B (70°)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A set of five numbers is $12, 15, 18, 21, 24$. What is the mean of the set?",
          options: [ {key:"A", text:"15"}, {key:"B", text:"16"}, {key:"C", text:"18"}, {key:"D", text:"20"}, {key:"E", text:"21"} ],
          correct: "C",
          steps: ["Sum $= 12+15+18+21+24 = 90$.", "Mean $= 90 \\div 5 = 18$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "Class A has 20 students with an average test score of 75. Class B has 30 students with an average test score of 85. What is the combined average score of both classes?",
          options: [ {key:"A", text:"79"}, {key:"B", text:"80"}, {key:"C", text:"81"}, {key:"D", text:"82"}, {key:"E", text:"85"} ],
          correct: "C",
          steps: ["Convert each average to a sum: Class A sum $= 20 \\times 75 = 1500$. Class B sum $= 30 \\times 85 = 2550$.", "Combined mean $= \\frac{1500+2550}{20+30} = \\frac{4050}{50} = 81$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A set of 8 numbers has a mean of 12. One number is removed, and the mean of the remaining 7 numbers is 11. What was the value of the number removed?",
          options: [ {key:"A", text:"13"}, {key:"B", text:"17"}, {key:"C", text:"19"}, {key:"D", text:"21"}, {key:"E", text:"23"} ],
          correct: "C",
          steps: ["Original sum $= 8 \\times 12 = 96$.", "Remaining sum $= 7 \\times 11 = 77$.", "Removed number $= 96 - 77 = 19$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "What is the median of the set $\\{3, 7, 9, 14, 20, 25\\}$?",
          options: [ {key:"A", text:"9"}, {key:"B", text:"10.5"}, {key:"C", text:"11.5"}, {key:"D", text:"14"}, {key:"E", text:"17"} ],
          correct: "C",
          steps: ["With 6 values (even count), the median is the average of the 3rd and 4th values in sorted order.", "Sorted: 3, 7, 9, 14, 20, 25. The middle two are 9 and 14.", "Median $= \\frac{9+14}{2} = 11.5$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "A set of data values is $\\{6, 6, 9, 11, 11, 11, 14\\}$. What is the mode of the set?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"9"}, {key:"C", text:"11"}, {key:"D", text:"14"}, {key:"E", text:"There is no mode"} ],
          correct: "C",
          steps: ["The mode is the most frequently occurring value.", "6 appears twice, 11 appears three times, and 9 and 14 each appear once.", "11 appears most often, so it is the mode."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A set of 9 numbers has a mean of 50. A tenth number, 90, is added to the set. What is the new mean?",
          options: [ {key:"A", text:"52"}, {key:"B", text:"53"}, {key:"C", text:"54"}, {key:"D", text:"55"}, {key:"E", text:"56"} ],
          correct: "C",
          steps: ["Original sum $= 9 \\times 50 = 450$.", "New sum $= 450 + 90 = 540$.", "New mean $= 540 \\div 10 = 54$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "A set of 5 distinct positive integers has a mean of 20, and 14 is the unique mode, appearing exactly twice. What is the maximum possible value of the largest number in the set?",
          options: [ {key:"A", text:"65"}, {key:"B", text:"67"}, {key:"C", text:"69"}, {key:"D", text:"71"}, {key:"E", text:"73"} ],
          correct: "C",
          steps: ["The total sum is $5 \\times 20 = 100$.", "The set must include 14 twice. To make the largest number as big as possible, make the two remaining (non-mode) numbers as small as possible: 1 and 2, the smallest distinct positive integers not equal to 14.", "Sum so far: $14+14+1+2 = 31$.", "Largest number $= 100 - 31 = 69$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A data set has a mean of 60. If every value in the set is first increased by 5, and then the result is multiplied by 2, what is the new mean?",
          options: [ {key:"A", text:"120"}, {key:"B", text:"125"}, {key:"C", text:"130"}, {key:"D", text:"135"}, {key:"E", text:"140"} ],
          correct: "C",
          steps: ["Adding 5 to every value increases the mean by 5: new mean $= 60+5 = 65$.", "Multiplying every value by 2 doubles the mean: $65 \\times 2 = 130$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A set of 7 numbers is $\\{4, 8, 15, 16, 23, 42, 50\\}$. What is the median?",
          options: [ {key:"A", text:"15"}, {key:"B", text:"16"}, {key:"C", text:"22.6"}, {key:"D", text:"23"}, {key:"E", text:"42"} ],
          correct: "B",
          steps: ["With 7 values (odd count), the median is the value at position $\\frac{7+1}{2}=4$ in sorted order.", "Sorted: 4, 8, 15, 16, 23, 42, 50. The 4th value is 16."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A set of numbers has exactly two values that each occur more often than every other value in the set, and those two values occur the same number of times as each other. What best describes the set's mode?",
          options: [ {key:"A", text:"The set has no mode."}, {key:"B", text:"The set is bimodal, with two modes."}, {key:"C", text:"The set has a single mode."}, {key:"D", text:"The mode equals the mean."}, {key:"E", text:"The mode equals the median."} ],
          correct: "B",
          steps: ["A set can have more than one mode if multiple values are tied for the highest frequency.", "Since exactly two values tie for the most frequent, the set is bimodal, having two modes."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A set of 6 numbers has a mean of 18. What is the sum of the numbers in the set?",
          correct: 108,
          steps: ["Sum $=$ Mean $\\times n$.", "$18 \\times 6 = 108$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A set of 10 numbers has a sum of 250. One number, 40, is removed from the set and replaced with 60. What is the new mean of the set?",
          correct: 27,
          steps: ["New sum $= 250 - 40 + 60 = 270$.", "New mean $= 270 \\div 10 = 27$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "What is the median of the set $\\{31, 12, 45, 9, 27\\}$?",
          correct: 27,
          steps: ["Sort the set: 9, 12, 27, 31, 45.", "With 5 values, the median is the 3rd value: 27."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "Group 1 has 12 items with an average of 50. Group 2 has 8 items with an average of 75. What is the average of the combined group of 20 items?",
          correct: 60,
          steps: ["Group 1 sum $= 12 \\times 50 = 600$. Group 2 sum $= 8 \\times 75 = 600$.", "Combined mean $= \\frac{600+600}{20} = \\frac{1200}{20} = 60$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A set of 5 distinct positive integers has a mean of 10 and a median of 8. What is the minimum possible value of the largest number in the set?",
          correct: 15,
          steps: ["The sum is $5 \\times 10 = 50$, and the median (3rd value) is 8, so the set looks like $x_1 < x_2 < 8 < x_4 < x_5$.", "To minimize $x_5$, maximize $x_1+x_2+x_4$. The largest values under 8 for $x_1,x_2$ are 6 and 7, and $x_4$ must stay below $x_5$.", "If $x_5=15$, then $x_4 \\le 14$, and $x_1+x_2+x_4 = 50-8-15 = 27$, achieved with $x_1=6, x_2=7, x_4=14$. This gives the valid set 6, 7, 8, 14, 15.", "Any smaller $x_5$ makes it impossible to reach the required sum, so the minimum value of the largest number is 15."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A company's 7 employees have a mean salary of $52{,}000$. If the highest earner, who makes $88{,}000$, is excluded, what is the mean salary (in dollars) of the remaining 6 employees?",
          correct: 46000,
          steps: ["Total salary of all 7 employees $= 7 \\times 52{,}000 = 364{,}000$.", "Remove the highest earner: $364{,}000 - 88{,}000 = 276{,}000$.", "New mean $= 276{,}000 \\div 6 = 46{,}000$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "What is the mode of the set $\\{5, 5, 5, 8, 9, 9, 12\\}$?",
          correct: 5,
          steps: ["Count the frequency of each value: 5 appears 3 times, 9 appears 2 times, 8 and 12 each appear once.", "The most frequent value, 5, is the mode."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "A set of 8 numbers, sorted in increasing order, has a median of 24. The 4th value in the sorted order is 21. What is the 5th value?",
          correct: 27,
          steps: ["For an even-sized set, the median is the average of the 4th and 5th values: $\\frac{21+e}{2}=24$.", "$21+e=48$, so $e=27$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "For which of the following sets does the mean equal the median? Select all that apply.",
          options: [ {key:"A", text:"$\\{2, 4, 6, 8, 10\\}$"}, {key:"B", text:"$\\{1, 2, 3, 10, 50\\}$"}, {key:"C", text:"$\\{5, 5, 5, 5\\}$"}, {key:"D", text:"$\\{1, 2, 3, 4\\}$"}, {key:"E", text:"$\\{1, 1, 1, 100\\}$"} ],
          correct: ["A", "C", "D"],
          steps: [
            "A: mean $=\\frac{2+4+6+8+10}{5}=6$, median (middle value) $=6$. Equal.",
            "B: mean $=\\frac{1+2+3+10+50}{5}=13.2$, median $=3$. Not equal.",
            "C: mean $=5$, median $=5$. Equal.",
            "D: mean $=\\frac{1+2+3+4}{4}=2.5$, median $=\\frac{2+3}{2}=2.5$. Equal.",
            "E: mean $=\\frac{1+1+1+100}{4}=25.75$, median $=1$. Not equal.",
            "The sets with mean equal to median are A, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A data set is $\\{6, 12, 12, 18, 24, 48\\}$. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The mean is greater than the median."}, {key:"B", text:"The mode is 12."}, {key:"C", text:"The median is 18."}, {key:"D", text:"The range is 42."}, {key:"E", text:"The mean equals the mode."} ],
          correct: ["A", "B", "D"],
          steps: [
            "Mean $= \\frac{6+12+12+18+24+48}{6} = \\frac{120}{6} = 20$. Median (average of 3rd and 4th sorted values, 12 and 18) $= \\frac{12+18}{2}=15$.",
            "A: $20 > 15$, true. C: median is 15, not 18, false.",
            "B: 12 appears twice, more than any other value, true.",
            "D: range $= 48-6=42$, true.",
            "E: mean is 20, mode is 12, not equal, false.",
            "True statements: A, B, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "A set currently has a median of 40. Which of the following actions is guaranteed to leave the median unchanged? Select all that apply.",
          options: [ {key:"A", text:"Adding a new value equal to the current median."}, {key:"B", text:"Adding the current mean, if it is also equal to 40, to the set."}, {key:"C", text:"Multiplying every value in the set by 1."}, {key:"D", text:"Adding a value far greater than every existing value in the set."}, {key:"E", text:"Removing the single largest value in the set."} ],
          correct: ["A", "B", "C"],
          steps: [
            "A: inserting another 40 keeps 40 as the middle value (or one of the two middle values, whose average is still 40 if the set was balanced around it).",
            "B: this is the same action as A when the mean equals 40, since it adds the value 40 to the set.",
            "C: multiplying by 1 changes nothing, so the median is unchanged.",
            "D: adding an extreme high value shifts which position is the 'middle' one, which can change the median.",
            "E: removing the largest value changes the count and shifts the middle position, which generally changes the median.",
            "Guaranteed to leave the median unchanged: A, B, and C."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A set of 5 positive integers is $\\{4, 4, 4, x, y\\}$, where $x$ and $y$ are positive integers, and the mean of the set is 10. Which of the following could be the value of $x$? Select all that apply.",
          options: [ {key:"A", text:"1"}, {key:"B", text:"10"}, {key:"C", text:"37"}, {key:"D", text:"38"}, {key:"E", text:"50"} ],
          correct: ["A", "B", "C"],
          steps: [
            "The sum of the set is $5 \\times 10 = 50$, so $4+4+4+x+y=50$, giving $x+y=38$.",
            "Since $y$ must be a positive integer, $y = 38-x \\ge 1$, which means $x \\le 37$.",
            "A: $x=1 \\Rightarrow y=37$, valid. B: $x=10 \\Rightarrow y=28$, valid. C: $x=37 \\Rightarrow y=1$, valid.",
            "D: $x=38 \\Rightarrow y=0$, not a positive integer, invalid. E: $x=50 \\Rightarrow y=-12$, invalid.",
            "Possible values of $x$: 1, 10, and 37."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "A set is $\\{10, 15, 20\\}$, with a mean of 15. For each scenario below, determine whether the mean of the resulting set stays exactly 15. Select all scenarios where it does.",
          options: [ {key:"A", text:"Add the number 15 to the set."}, {key:"B", text:"Remove the number 15 from the set."}, {key:"C", text:"Double every number in the set."}, {key:"D", text:"Add the numbers 10 and 20 to the set."}, {key:"E", text:"Add the numbers 5 and 30 to the set."} ],
          correct: ["A", "B", "D"],
          steps: [
            "A: new set $\\{10,15,20,15\\}$, mean $=\\frac{60}{4}=15$. Unchanged.",
            "B: new set $\\{10,20\\}$, mean $=\\frac{30}{2}=15$. Unchanged.",
            "C: new set $\\{20,30,40\\}$, mean $=30$. Changed.",
            "D: new set $\\{10,15,20,10,20\\}$, mean $=\\frac{75}{5}=15$. Unchanged, since the added pair (10 and 20) itself averages to 15.",
            "E: new set $\\{10,15,20,5,30\\}$, mean $=\\frac{80}{5}=16$. Changed, since the added pair (5 and 30) averages to 17.5, not 15.",
            "Scenarios where the mean stays 15: A, B, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "A set is $\\{2, 4, 6, 8, 100\\}$. If the outlier 100 is removed, leaving $\\{2, 4, 6, 8\\}$, which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The original mean is 24."}, {key:"B", text:"The original median is 6."}, {key:"C", text:"After removing 100, the new mean is 5."}, {key:"D", text:"After removing 100, the new median is 5."}, {key:"E", text:"Removing the outlier changes the mean by more than it changes the median."} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "Original set: mean $=\\frac{2+4+6+8+100}{5}=\\frac{120}{5}=24$ (A true). Median (middle of 5 sorted values) $=6$ (B true).",
            "New set $\\{2,4,6,8\\}$: mean $=\\frac{20}{4}=5$ (C true). Median $=\\frac{4+6}{2}=5$ (D true).",
            "The mean changed from 24 to 5, a drop of 19. The median changed from 6 to 5, a drop of only 1.",
            "Since $19 > 1$, the mean changed far more than the median (E true), illustrating that the mean is much more sensitive to outliers.",
            "All five statements are true."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A set is $\\{4, 8, 12, 16, 20\\}$.",
          quantityA: "The mean of the set",
          quantityB: "The median of the set",
          correct: "C",
          steps: ["Mean $= \\frac{4+8+12+16+20}{5} = \\frac{60}{5}=12$.", "Median (middle of 5 sorted values) $=12$.", "Both quantities equal 12."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "Group 1 has 10 students with a mean score of 70. Group 2 has 10 students with a mean score of 90.",
          quantityA: "The mean score of both groups combined",
          quantityB: "80",
          correct: "C",
          steps: ["Combined mean $= \\frac{10(70)+10(90)}{20} = \\frac{700+900}{20} = \\frac{1600}{20}=80$.", "Since the groups are equal in size, the combined mean is simply the average of the two group means.", "Both quantities equal 80."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A set of 6 numbers has a sum of 300. The number 20 is removed from the set, leaving 5 numbers.",
          quantityA: "The mean of the remaining 5 numbers",
          quantityB: "The mean of the original 6 numbers",
          correct: "A",
          steps: ["Original mean $=300 \\div 6=50$.", "Removing 20, which is below the original mean of 50, pulls the remaining mean upward.", "New sum $=300-20=280$, new mean $=280\\div5=56$.", "Quantity A (56) is greater than Quantity B (50)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "A set is $\\{3, 9, 15, 21, 27\\}$.",
          quantityA: "The median of the set",
          quantityB: "The mean of the set",
          correct: "C",
          steps: ["Median (middle of 5 sorted values) $=15$.", "Mean $=\\frac{3+9+15+21+27}{5}=\\frac{75}{5}=15$.", "Both quantities equal 15."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "Group 1 has 5 items with a mean of 60. Group 2 has 20 items with a mean of 90.",
          quantityA: "The mean of the combined 25 items",
          quantityB: "84",
          correct: "C",
          steps: ["Combined mean $= \\frac{5(60)+20(90)}{25} = \\frac{300+1800}{25}=\\frac{2100}{25}=84$.", "Since Group 2 is four times as large as Group 1, the combined mean lies much closer to 90 than to 60, landing exactly at 84.", "Both quantities equal 84."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A data set is $\\{5, 7, 7, 7, 9\\}$.",
          quantityA: "The mean of the set",
          quantityB: "The mode of the set",
          correct: "C",
          steps: ["Mean $=\\frac{5+7+7+7+9}{5}=\\frac{35}{5}=7$.", "Mode (most frequent value) $=7$, since it appears three times.", "Both quantities equal 7."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A data set is $\\{8, 15, 22, 30, 45\\}$. What is the range of the set?",
          options: [ {key:"A", text:"22"}, {key:"B", text:"30"}, {key:"C", text:"37"}, {key:"D", text:"38"}, {key:"E", text:"45"} ],
          correct: "C",
          steps: ["Range $=$ Max $-$ Min.", "$45 - 8 = 37$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "A sorted data set is $\\{2, 4, 6, 8, 10, 12, 14, 16\\}$. What is its interquartile range (IQR)?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"7"}, {key:"C", text:"8"}, {key:"D", text:"9"}, {key:"E", text:"14"} ],
          correct: "C",
          steps: ["With 8 values, split into a lower half $\\{2,4,6,8\\}$ and upper half $\\{10,12,14,16\\}$.", "$Q_1$ is the median of the lower half: $\\frac{4+6}{2}=5$. $Q_3$ is the median of the upper half: $\\frac{12+14}{2}=13$.", "IQR $= Q_3 - Q_1 = 13-5=8$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "Data set X has a mean of 40 and a standard deviation of 6. Data set Y is formed by adding 12 to every value in X. What is the standard deviation of Y?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"12"}, {key:"C", text:"18"}, {key:"D", text:"52"}, {key:"E", text:"72"} ],
          correct: "A",
          steps: ["Adding a constant to every value shifts the mean but leaves the spread unchanged.", "The standard deviation of Y is still 6."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "Data set X has a mean of 20 and a standard deviation of 4. Data set Y is formed by multiplying every value in X by 5. What is the standard deviation of Y?",
          options: [ {key:"A", text:"4"}, {key:"B", text:"9"}, {key:"C", text:"20"}, {key:"D", text:"25"}, {key:"E", text:"100"} ],
          correct: "C",
          steps: ["Multiplying every value by a positive constant $k$ multiplies the standard deviation by $k$.", "$4 \\times 5 = 20$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "Data set X has a standard deviation of 9. Data set Y is formed by multiplying every value in X by $-2$ and then adding 7. What is the standard deviation of Y?",
          options: [ {key:"A", text:"7"}, {key:"B", text:"9"}, {key:"C", text:"11"}, {key:"D", text:"18"}, {key:"E", text:"25"} ],
          correct: "D",
          steps: ["Adding 7 has no effect on spread.", "Multiplying by $-2$ scales the spread by $|-2|=2$, since standard deviation is never negative.", "New standard deviation $= 2 \\times 9 = 18$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A data set is $\\{10, 14, 18, 22\\}$, with a range of 12. If 50 is added to every value in the set, what is the range of the new set?",
          options: [ {key:"A", text:"12"}, {key:"B", text:"22"}, {key:"C", text:"50"}, {key:"D", text:"62"}, {key:"E", text:"72"} ],
          correct: "A",
          steps: ["Adding a constant to every value shifts the entire set equally, so the gap between the max and min is unchanged.", "The range stays 12."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "Which of the following sets has the smallest standard deviation?",
          options: [ {key:"A", text:"$\\{10, 10, 10, 10\\}$"}, {key:"B", text:"$\\{8, 9, 10, 11, 12\\}$"}, {key:"C", text:"$\\{1, 5, 10, 15, 20\\}$"}, {key:"D", text:"$\\{0, 5, 10, 15, 25\\}$"}, {key:"E", text:"$\\{2, 6, 10, 14, 18\\}$"} ],
          correct: "A",
          steps: ["Standard deviation measures how spread out values are from the mean.", "Set A has every value identical (all equal to 10), so there is zero deviation from the mean.", "Its standard deviation is 0, the smallest possible."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "Data set X has a standard deviation of 5. Data set Y is formed by dividing every value in X by 2. What is the standard deviation of Y?",
          options: [ {key:"A", text:"1.5"}, {key:"B", text:"2"}, {key:"C", text:"2.5"}, {key:"D", text:"5"}, {key:"E", text:"10"} ],
          correct: "C",
          steps: ["Dividing every value by 2 is the same as multiplying by $\\frac12$, which scales the standard deviation by $\\frac12$.", "$5 \\times \\frac12 = 2.5$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A data set's maximum value is 92 and its minimum value is 17. What is the range of the set?",
          options: [ {key:"A", text:"55"}, {key:"B", text:"65"}, {key:"C", text:"75"}, {key:"D", text:"85"}, {key:"E", text:"109"} ],
          correct: "C",
          steps: ["Range $=$ Max $-$ Min.", "$92-17=75$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A data set consists of the same value repeated 6 times. What is its standard deviation?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1"}, {key:"C", text:"The value itself"}, {key:"D", text:"6"}, {key:"E", text:"Cannot be determined"} ],
          correct: "A",
          steps: ["Standard deviation measures the average distance of values from the mean.", "If every value is identical, every value equals the mean, so every deviation is 0.", "The standard deviation is 0."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A data set is $\\{14, 22, 9, 35, 18\\}$. What is its range?",
          correct: 26,
          steps: ["Max $=35$, Min $=9$.", "Range $=35-9=26$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A data set has $Q_1 = 18$ and $Q_3 = 42$. What is the interquartile range (IQR) of the set?",
          correct: 24,
          steps: ["IQR $= Q_3 - Q_1$.", "$42-18=24$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "Data set X has a standard deviation of 7. Data set Y is formed by adding 20 to every value in X. What is the standard deviation of Y?",
          correct: 7,
          steps: ["Adding a constant shifts the mean but does not change the spread.", "The standard deviation of Y is still 7."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "Data set X has a standard deviation of 3. Data set Y is formed by multiplying every value in X by 6. What is the standard deviation of Y?",
          correct: 18,
          steps: ["Multiplying every value by a positive constant $k$ multiplies the standard deviation by $k$.", "$3 \\times 6 = 18$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "Data set X has a standard deviation of 4. Data set Y is formed by multiplying every value in X by $-5$ and then adding 2. What is the standard deviation of Y?",
          correct: 20,
          steps: ["Adding 2 does not affect the spread.", "Multiplying by $-5$ scales the standard deviation by $|-5|=5$.", "New standard deviation $= 5 \\times 4 = 20$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A data set has a range of 30 and a minimum value of 12. What is the maximum value of the set?",
          correct: 42,
          steps: ["Range $=$ Max $-$ Min, so Max $=$ Range $+$ Min.", "$30+12=42$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A boxplot's five-number summary is: min 10, $Q_1$ 25, median 40, $Q_3$ 55, max 70. What is the interquartile range?",
          correct: 30,
          steps: ["IQR $= Q_3-Q_1$.", "$55-25=30$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "Data set X has a standard deviation of 12. Data set Y is formed by multiplying every value in X by $\\frac14$. What is the standard deviation of Y?",
          correct: 3,
          steps: ["Multiplying every value by a positive constant $k$ multiplies the standard deviation by $k$.", "$12 \\times \\frac14 = 3$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following sets have a range of 0? Select all that apply.",
          options: [ {key:"A", text:"$\\{7, 7, 7, 7\\}$"}, {key:"B", text:"$\\{3, 3, 3, 4\\}$"}, {key:"C", text:"$\\{5, 5\\}$"}, {key:"D", text:"$\\{1, 2, 1, 2\\}$"}, {key:"E", text:"$\\{9\\}$"} ],
          correct: ["A", "C", "E"],
          steps: [
            "A set has a range of 0 only when every value in it is identical (max equals min).",
            "A: all values are 7, range $=7-7=0$. C: both values are 5, range $=0$. E: a single value has no spread, range $=0$.",
            "B: values are 3 and 4, range $=4-3=1 \\ne 0$. D: values are 1 and 2, range $=2-1=1 \\ne 0$.",
            "Sets with range 0: A, C, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A base set is $\\{4, 6, 8, 10, 12\\}$. For each transformed set below, determine whether its standard deviation is the SAME as the base set's standard deviation. Select all that apply.",
          options: [ {key:"A", text:"Add 5 to every value: $\\{9, 11, 13, 15, 17\\}$"}, {key:"B", text:"Multiply every value by 3: $\\{12, 18, 24, 30, 36\\}$"}, {key:"C", text:"Multiply every value by $-1$: $\\{-4, -6, -8, -10, -12\\}$"}, {key:"D", text:"Subtract 100 from every value: $\\{-96, -94, -92, -90, -88\\}$"}, {key:"E", text:"Square every value: $\\{16, 36, 64, 100, 144\\}$"} ],
          correct: ["A", "C", "D"],
          steps: [
            "Adding or subtracting a constant never changes the standard deviation (shifting rule).",
            "A and D are both pure shifts (add 5, subtract 100), so they preserve the original standard deviation.",
            "C multiplies by $-1$, scaling the standard deviation by $|-1|=1$, also preserving it.",
            "B multiplies by 3, scaling the standard deviation by 3, so it is NOT the same.",
            "E squares each value, which is not a linear transformation, so the shifting/scaling rules do not apply; the spread changes in a more complex, non-proportional way, so it is NOT the same.",
            "Sets with the same standard deviation as the base: A, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "The set $\\{2, 4, 6\\}$ has a certain standard deviation. Which of the following sets have that SAME standard deviation? Select all that apply.",
          options: [ {key:"A", text:"$\\{12, 14, 16\\}$"}, {key:"B", text:"$\\{4, 8, 12\\}$"}, {key:"C", text:"$\\{102, 104, 106\\}$"}, {key:"D", text:"$\\{-2, -4, -6\\}$"}, {key:"E", text:"$\\{6, 12, 18\\}$"} ],
          correct: ["A", "C", "D"],
          steps: [
            "A is the base set shifted by $+10$ (add 10 to each term), which preserves standard deviation.",
            "C is the base set shifted by $+100$, which also preserves standard deviation.",
            "D is the base set scaled by $-1$, and since $|-1|=1$, standard deviation is preserved.",
            "B is the base set scaled by 2, doubling the standard deviation, not the same.",
            "E is the base set scaled by 3, tripling the standard deviation, not the same.",
            "Sets with the same standard deviation as $\\{2,4,6\\}$: A, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A boxplot's five-number summary is: min 5, $Q_1$ 20, median 35, $Q_3$ 50, max 90. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The IQR is 30."}, {key:"B", text:"The IQR is not affected by the outlier at the maximum, 90."}, {key:"C", text:"The range is 85."}, {key:"D", text:"The IQR is greater than the range."}, {key:"E", text:"The median lies between $Q_1$ and $Q_3$."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "IQR $= Q_3-Q_1 = 50-20=30$ (A true).",
            "The IQR only depends on the middle 50% of the data ($Q_1$ to $Q_3$), so extreme values like the max of 90 don't affect it (B true).",
            "Range $=$ max $-$ min $=90-5=85$ (C true).",
            "$30$ is not greater than $85$, so D is false.",
            "The median, 35, falls between $Q_1=20$ and $Q_3=50$ (E true), which is always the case since the median splits the box.",
            "True statements: A, B, C, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "The set $X = \\{10, 12, 14, 16, 18\\}$ has a standard deviation of approximately 2.83. Which of the following sets have a standard deviation GREATER than X's? Select all that apply.",
          options: [ {key:"A", text:"$\\{10, 11, 15, 16, 18\\}$"}, {key:"B", text:"$\\{13, 13, 14, 15, 15\\}$"}, {key:"C", text:"$\\{10, 10, 10, 10, 50\\}$"}, {key:"D", text:"$\\{13, 14, 14, 15, 14\\}$"}, {key:"E", text:"$\\{2, 6, 14, 22, 26\\}$"} ],
          correct: ["A", "C", "E"],
          steps: [
            "A has values spread slightly more unevenly around its mean than X, giving a standard deviation of about 3.03, greater than 2.83.",
            "B and D are both tightly clustered near a single value, giving small standard deviations (about 0.89 and 0.63), less than X's.",
            "C contains an extreme outlier (50 versus four values of 10), giving a large standard deviation of 16, far greater than X's.",
            "E has values spread widely from 2 to 26, giving a standard deviation of about 9.12, much greater than X's.",
            "Sets with standard deviation greater than X's: A, C, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "A boxplot's five-number summary is: min 12, $Q_1$ 25, median 38, $Q_3$ 50, max 70. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The middle 50% of the data spans 25 units."}, {key:"B", text:"At least 50% of the data values are less than or equal to 38."}, {key:"C", text:"The whisker from $Q_3$ to the max is longer than the whisker from the min to $Q_1$."}, {key:"D", text:"Exactly 25% of the data values lie strictly above $Q_3$."}, {key:"E", text:"The IQR is greater than the range."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "IQR $=Q_3-Q_1=50-25=25$, which is the span of the middle 50% of data (A true).",
            "By definition, the median splits the data in half, so at least 50% of values are $\\le 38$ (B true).",
            "Upper whisker length $=$ max $-Q_3=70-50=20$. Lower whisker length $=Q_1-$min$=25-12=13$. Since $20>13$, C is true.",
            "By definition, exactly 25% of values lie above $Q_3$ (D true).",
            "IQR (25) is not greater than range ($70-12=58$), so E is false.",
            "True statements: A, B, C, and D."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "Set P is $\\{5, 10, 15\\}$. Set Q is formed by adding 100 to every value in P.",
          quantityA: "The standard deviation of P",
          quantityB: "The standard deviation of Q",
          correct: "C",
          steps: ["Adding a constant to every value shifts the set but does not change its spread.", "Set P and Set Q therefore have the same standard deviation.", "Both quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "A data set is $\\{10, 20, 21, 22, 23, 90\\}$.",
          quantityA: "The range of the set",
          quantityB: "The interquartile range (IQR) of the set",
          correct: "A",
          steps: ["Range $=90-10=80$.", "Sorted, the lower half is $\\{10,20,21\\}$ and upper half is $\\{22,23,90\\}$, so $Q_1=20$ and $Q_3=23$.", "IQR $=23-20=3$.", "Quantity A (80) is far greater than Quantity B (3), since the range is stretched by the outlier 90 while the IQR ignores it."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "Data set X has a standard deviation of 6. Data set Y is formed by multiplying every value in X by $-4$.",
          quantityA: "The standard deviation of Y",
          quantityB: "25",
          correct: "B",
          steps: ["Multiplying every value by $-4$ scales the standard deviation by $|-4|=4$.", "Standard deviation of Y $=4 \\times 6=24$.", "Quantity A (24) is less than Quantity B (25)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "Set A is $\\{8, 10, 12\\}$. Set B is $\\{2, 10, 18\\}$. Both sets have a mean of 10.",
          quantityA: "The standard deviation of Set A",
          quantityB: "The standard deviation of Set B",
          correct: "B",
          steps: ["Set A's values are close to the mean of 10 (deviations of 2, 0, 2), giving a small standard deviation, about 1.63.", "Set B's values are much farther from the mean of 10 (deviations of 8, 0, 8), giving a larger standard deviation, about 6.53.", "Quantity A is less than Quantity B."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "A data set is $\\{5, 40, 42, 44, 46, 48\\}$, with range 43. The outlier 5 is removed, leaving $\\{40, 42, 44, 46, 48\\}$.",
          quantityA: "The range of the original set",
          quantityB: "The range of the set after removing the outlier",
          correct: "A",
          steps: ["Original range $=48-5=43$.", "New range $=48-40=8$.", "Quantity A (43) is greater than Quantity B (8), since removing the low outlier sharply shrinks the range."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "Set M has $Q_1=30$ and $Q_3=55$. Set N has $Q_1=40$ and $Q_3=62$.",
          quantityA: "The IQR of Set M",
          quantityB: "The IQR of Set N",
          correct: "A",
          steps: ["IQR of M $=55-30=25$.", "IQR of N $=62-40=22$.", "Quantity A (25) is greater than Quantity B (22)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A class's boxplot shows: min 30, $Q_1$ 45, median 60, $Q_3$ 80, max 95. What is the interquartile range (IQR)?",
          options: [ {key:"A", text:"15"}, {key:"B", text:"20"}, {key:"C", text:"35"}, {key:"D", text:"50"}, {key:"E", text:"65"} ],
          correct: "C",
          steps: ["IQR $= Q_3 - Q_1$.", "$80-45=35$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "In a boxplot, what percentage of the data lies between $Q_1$ and the median?",
          options: [ {key:"A", text:"10%"}, {key:"B", text:"20%"}, {key:"C", text:"25%"}, {key:"D", text:"50%"}, {key:"E", text:"75%"} ],
          correct: "C",
          steps: ["A boxplot splits the data into four quartile zones, each holding exactly 25% of the data points.", "The zone from $Q_1$ to the median (which is $Q_2$) is one of these four zones, so it holds 25% of the data."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A histogram has bins $[0,10)$, $[10,20)$, $[20,30)$, $[30,40)$, $[40,50)$ with frequencies 5, 12, 18, 10, and 5, respectively. Which bin contains the median of the data?",
          options: [ {key:"A", text:"$[0,10)$"}, {key:"B", text:"$[10,20)$"}, {key:"C", text:"$[20,30)$"}, {key:"D", text:"$[30,40)$"}, {key:"E", text:"$[40,50)$"} ],
          correct: "C",
          steps: ["Total frequency $N = 5+12+18+10+5=50$, so the median lies at the position of the 25th/26th value.", "Cumulative frequency after $[0,10)$: 5. After $[10,20)$: 17. After $[20,30)$: 35.", "The 25th and 26th values fall between cumulative counts 17 and 35, which is within the bin $[20,30)$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "Class A's boxplot shows min 20 and max 88. Class B's boxplot shows min 35 and max 80. How much larger is Class A's range than Class B's range?",
          options: [ {key:"A", text:"8"}, {key:"B", text:"15"}, {key:"C", text:"23"}, {key:"D", text:"45"}, {key:"E", text:"68"} ],
          correct: "C",
          steps: ["Class A's range $= 88-20=68$.", "Class B's range $= 80-35=45$.", "Difference $=68-45=23$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "On a scatterplot with a line of best fit, a data point lies above the line. What does this indicate?",
          options: [ {key:"A", text:"The point's actual value is less than the model predicts."}, {key:"B", text:"The point's actual value exceeds what the model predicts."}, {key:"C", text:"The point is an error and should be excluded."}, {key:"D", text:"The correlation is negative."}, {key:"E", text:"The point lies exactly on the trend."} ],
          correct: "B",
          steps: ["The line of best fit represents the model's predicted values for each x.", "A point above the line has a y-value greater than what the line predicts at that x, meaning it exceeds the model's prediction."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A histogram has bins with frequencies 8, 16, 20, 4, and 2. What percentage of the data falls in the bin with a frequency of 20?",
          options: [ {key:"A", text:"20%"}, {key:"B", text:"30%"}, {key:"C", text:"36%"}, {key:"D", text:"40%"}, {key:"E", text:"44%"} ],
          correct: "D",
          steps: ["Total frequency $=8+16+20+4+2=50$.", "Percentage in that bin $=\\frac{20}{50}\\times100\\%=40\\%$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "A boxplot has $Q_1 = 48$ and $Q_3 = 72$. What is the IQR?",
          options: [ {key:"A", text:"12"}, {key:"B", text:"20"}, {key:"C", text:"24"}, {key:"D", text:"48"}, {key:"E", text:"60"} ],
          correct: "C",
          steps: ["IQR $=Q_3-Q_1$.", "$72-48=24$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A histogram has bins $[0,10), [10,20), [20,30), [30,40), [40,50), [50,60)$ with frequencies 3, 7, 15, 20, 10, and 5. Which bin contains the median?",
          options: [ {key:"A", text:"$[10,20)$"}, {key:"B", text:"$[20,30)$"}, {key:"C", text:"$[30,40)$"}, {key:"D", text:"$[40,50)$"}, {key:"E", text:"$[50,60)$"} ],
          correct: "C",
          steps: ["Total frequency $N=3+7+15+20+10+5=60$, so the median lies at the position of the 30th/31st value.", "Cumulative frequency: after $[0,10)$: 3. After $[10,20)$: 10. After $[20,30)$: 25. After $[30,40)$: 45.", "The 30th and 31st values fall between cumulative counts 25 and 45, within bin $[30,40)$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A histogram has bins with frequencies 6, 14, 22, 18, and 10. How many total data points does the histogram represent?",
          options: [ {key:"A", text:"22"}, {key:"B", text:"50"}, {key:"C", text:"60"}, {key:"D", text:"70"}, {key:"E", text:"80"} ],
          correct: "D",
          steps: ["Total data points $=$ sum of all bin frequencies.", "$6+14+22+18+10=70$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "Class C's boxplot shows a median of 55. Class D's boxplot shows a median of 68. Which of the following must be true?",
          options: [ {key:"A", text:"Class D's typical (middle) score is higher than Class C's."}, {key:"B", text:"Class D has less spread than Class C."}, {key:"C", text:"Every student in Class D scored higher than every student in Class C."}, {key:"D", text:"Class C has a smaller range than Class D."}, {key:"E", text:"Class C and Class D have the same IQR."} ],
          correct: "A",
          steps: ["The median represents the middle (typical) value of a data set.", "Since $68 > 55$, Class D's median score is higher, meaning its typical score is higher than Class C's.", "None of the other statements can be concluded from medians alone; they would require more of the five-number summary or the full data."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A boxplot has $Q_1 = 38$ and $Q_3 = 66$. What is the interquartile range?",
          correct: 28,
          steps: ["IQR $=Q_3-Q_1$.", "$66-38=28$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A histogram has bins with frequencies 4, 9, 13, 11, and 3. How many total data points does it represent?",
          correct: 40,
          steps: ["Total $=4+9+13+11+3=40$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A boxplot shows a minimum of 14 and a maximum of 97. What is the range of the data?",
          correct: 83,
          steps: ["Range $=$ max $-$ min.", "$97-14=83$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "A histogram has 5 bins representing a total of 80 data points. Four of the bins have frequencies 10, 18, 25, and 15. What is the frequency of the fifth bin?",
          correct: 12,
          steps: ["Sum of known bins $=10+18+25+15=68$.", "Fifth bin $=80-68=12$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A histogram has bins $[0,10), [10,20), [20,30), [30,40), [40,50), [50,60)$ with frequencies 5, 10, 20, 25, 15, and 5. What is the lower boundary of the bin that contains the median?",
          correct: 30,
          steps: ["Total frequency $N=5+10+20+25+15+5=80$, so the median lies at the position of the 40th/41st value.", "Cumulative frequency: after $[0,10)$: 5. After $[10,20)$: 15. After $[20,30)$: 35. After $[30,40)$: 60.", "The 40th and 41st values fall between cumulative counts 35 and 60, within bin $[30,40)$.", "The lower boundary of that bin is 30."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "In a boxplot, what percentage of the data lies within the box itself, from $Q_1$ to $Q_3$?",
          correct: 50,
          steps: ["The box spans from $Q_1$ to $Q_3$, covering the 2nd and 3rd quartile zones.", "Each zone holds 25% of the data, so together they hold $25\\%+25\\%=50\\%$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A data set has 120 values. Based on the definition of quartiles, how many values lie strictly above $Q_3$?",
          correct: 30,
          steps: ["By definition, exactly 25% of the data lies above $Q_3$.", "$120 \\times 0.25 = 30$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "A boxplot has $Q_3 = 63$ and a maximum of 91. What is the length of the upper whisker (from $Q_3$ to the maximum)?",
          correct: 28,
          steps: ["Upper whisker length $=$ max $-Q_3$.", "$91-63=28$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Class A's boxplot: min 20, $Q_1$ 40, median 55, $Q_3$ 75, max 90. Class B's boxplot: min 30, $Q_1$ 45, median 60, $Q_3$ 70, max 85. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"Class A has a larger range than Class B."}, {key:"B", text:"Class A has a larger IQR than Class B."}, {key:"C", text:"Class B's median is higher than Class A's median."}, {key:"D", text:"Class A's $Q_1$ is higher than Class B's $Q_1$."}, {key:"E", text:"The middle 50% of Class A's data spans more than the middle 50% of Class B's data."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Range A $=90-20=70$. Range B $=85-30=55$. Since $70>55$, A is true.",
            "IQR A $=75-40=35$. IQR B $=70-45=25$. Since $35>25$, B is true.",
            "Median A $=55$, median B $=60$. Since $60>55$, C is true.",
            "$Q_1$ A $=40$, $Q_1$ B $=45$. Since $40<45$, D is false.",
            "E restates the IQR comparison in words: the middle 50% span (IQR) of A, 35, exceeds that of B, 25. True.",
            "True statements: A, B, C, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A histogram has bins $[0,10), [10,20), [20,30), [30,40), [40,50)$ with frequencies 6, 14, 22, 18, and 10. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The total number of data points is 70."}, {key:"B", text:"The median falls within the bin $[20,30)$."}, {key:"C", text:"More than half the data points are less than 30."}, {key:"D", text:"The bin $[20,30)$ has the highest frequency (the modal bin)."}, {key:"E", text:"Exactly 18 data points are 40 or greater."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Total $=6+14+22+18+10=70$ (A true).",
            "Half of 70 is 35. Cumulative frequency after $[10,20)$ is $6+14=20$; after $[20,30)$ is $20+22=42$. Since 35 falls between 20 and 42, the median is in $[20,30)$ (B true).",
            "Cumulative frequency up through $[20,30)$ is 42, which is more than half of 70 (35), so more than half the data is below 30 (C true).",
            "The bin $[20,30)$ has frequency 22, the largest of all bins (D true).",
            "Values 40 or greater fall in bin $[40,50)$, which has frequency 10, not 18 (E false).",
            "True statements: A, B, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following statements about scatterplots and correlation are true? Select all that apply.",
          options: [ {key:"A", text:"A point above the line of best fit has an actual value exceeding the model's prediction."}, {key:"B", text:"A positive correlation means that as x increases, y tends to increase as well."}, {key:"C", text:"A correlation coefficient of 0 always means there is no relationship of any kind between the variables."}, {key:"D", text:"The line of best fit is not required to pass through every data point."}, {key:"E", text:"Points tightly clustered around the line of best fit indicate a strong correlation."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "A is true by definition: the line represents predicted values, and points above it exceed that prediction.",
            "B is true: this is the definition of positive correlation.",
            "C is false: a correlation coefficient of 0 rules out a linear relationship, but a strong nonlinear (for example, curved) relationship can still exist.",
            "D is true: the line of best fit models the overall trend and generally does not pass through most individual points exactly.",
            "E is true: tighter clustering around the trend line indicates a stronger correlation.",
            "True statements: A, B, D, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A class of 40 students has test scores summarized by a boxplot with $Q_1=60$ and $Q_3=80$. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"Exactly 10 students scored above 80."}, {key:"B", text:"Exactly 10 students scored below 60."}, {key:"C", text:"Exactly 20 students scored between 60 and 80."}, {key:"D", text:"Exactly 30 students scored below 80."}, {key:"E", text:"Exactly 5 students scored above 80."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "25% of 40 students scored above $Q_3=80$: $40\\times0.25=10$ (A true, E false).",
            "25% of 40 students scored below $Q_1=60$: $40\\times0.25=10$ (B true).",
            "The middle 50% scored between $Q_1$ and $Q_3$: $40\\times0.5=20$ (C true).",
            "75% of students scored below $Q_3=80$ (everyone except the top quarter): $40\\times0.75=30$ (D true).",
            "True statements: A, B, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "A histogram has bins $[10,20), [20,30), [30,40), [40,50), [50,60)$ with frequencies 4, 9, 13, 11, and 3. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The total number of data points is 40."}, {key:"B", text:"The bin $[30,40)$ has the highest frequency."}, {key:"C", text:"Fewer than 10 data points fall in $[50,60)$."}, {key:"D", text:"The combined frequency of $[20,30)$ and $[40,50)$ is 20."}, {key:"E", text:"More data points fall in $[50,60)$ than in $[10,20)$."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Total $=4+9+13+11+3=40$ (A true).",
            "The highest frequency is 13, in bin $[30,40)$ (B true).",
            "$[50,60)$ has frequency 3, which is fewer than 10 (C true).",
            "$[20,30)$ has 9 and $[40,50)$ has 11: $9+11=20$ (D true).",
            "$[50,60)$ has 3 data points and $[10,20)$ has 4; since $3<4$, E is false.",
            "True statements: A, B, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "A sorted data set is $\\{10, 20, 30, 40, 50, 60, 70\\}$, with a median of 40. For each change below, determine whether the median of the resulting set stays 40. Select all that apply.",
          options: [ {key:"A", text:"Increasing the maximum value from 70 to 200."}, {key:"B", text:"Decreasing the minimum value from 10 to −50."}, {key:"C", text:"Adding a new value equal to 40 (the current median)."}, {key:"D", text:"Removing the value 70 (the current maximum)."}, {key:"E", text:"Replacing the value 60 with 45."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A: new sorted set $\\{10,20,30,40,50,60,200\\}$, median (4th of 7) is still 40. Unchanged.",
            "B: new sorted set $\\{-50,20,30,40,50,60,70\\}$, median is still 40. Unchanged.",
            "C: new sorted set $\\{10,20,30,40,40,50,60,70\\}$ (8 values), median $=\\frac{40+40}{2}=40$. Unchanged.",
            "D: new sorted set $\\{10,20,30,40,50,60\\}$ (6 values), median $=\\frac{30+40}{2}=35$. Changed.",
            "E: new sorted set $\\{10,20,30,40,45,50,70\\}$, median (4th of 7) is still 40. Unchanged.",
            "Scenarios where the median stays 40: A, B, C, and E."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "Class A's boxplot shows a median of 62. Class B's boxplot shows a median of 58.",
          quantityA: "Class A's median",
          quantityB: "Class B's median",
          correct: "A",
          steps: ["Class A's median is 62 and Class B's median is 58.", "Since $62>58$, Quantity A is greater."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "A histogram has bins with frequencies 8, 12, 20, and 10.",
          quantityA: "The percentage of data in the bin with frequency 20",
          quantityB: "35%",
          correct: "A",
          steps: ["Total frequency $=8+12+20+10=50$.", "Percentage in that bin $=\\frac{20}{50}\\times100\\%=40\\%$.", "Since $40\\%>35\\%$, Quantity A is greater."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A boxplot has the five-number summary: min 22, $Q_1$ 38, median 50, $Q_3$ 64, max 70.",
          quantityA: "The range of the data",
          quantityB: "Twice the IQR of the data",
          correct: "B",
          steps: ["Range $=70-22=48$.", "IQR $=64-38=26$, so twice the IQR is $2 \\times 26=52$.", "Since $48 < 52$, Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "A data set of 84 values is summarized by a boxplot.",
          quantityA: "The number of values strictly above $Q_3$",
          quantityB: "The number of values strictly below $Q_1$",
          correct: "C",
          steps: ["By definition, exactly 25% of the data lies above $Q_3$ and exactly 25% lies below $Q_1$.", "Values above $Q_3$: $84\\times0.25=21$. Values below $Q_1$: $84\\times0.25=21$.", "Both quantities equal 21."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "A survey of 200 people is summarized in a histogram. The top bin contains 55 people.",
          quantityA: "The percentage of people in the top bin",
          quantityB: "30%",
          correct: "B",
          steps: ["Percentage in the top bin $=\\frac{55}{200}\\times100\\%=27.5\\%$.", "Since $27.5\\%<30\\%$, Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A boxplot has the five-number summary: min 18, $Q_1$ 35, median 50, $Q_3$ 60, max 64.",
          quantityA: "The length of the lower whisker (min to $Q_1$)",
          quantityB: "The length of the upper whisker ($Q_3$ to max)",
          correct: "A",
          steps: ["Lower whisker length $=Q_1-\\text{min}=35-18=17$.", "Upper whisker length $=\\text{max}-Q_3=64-60=4$.", "Quantity A (17) is greater than Quantity B (4)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A lunch special lets you choose 1 of 4 sandwiches, 1 of 3 sides, and 1 of 5 drinks. How many different lunch specials are possible?",
          options: [ {key:"A", text:"12"}, {key:"B", text:"20"}, {key:"C", text:"40"}, {key:"D", text:"60"}, {key:"E", text:"120"} ],
          correct: "D",
          steps: ["By the fundamental counting principle, multiply the number of choices at each step.", "$4 \\times 3 \\times 5 = 60$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "In how many ways can a president, vice president, and secretary be chosen from a group of 7 people, if no one can hold more than one office?",
          options: [ {key:"A", text:"21"}, {key:"B", text:"35"}, {key:"C", text:"120"}, {key:"D", text:"210"}, {key:"E", text:"343"} ],
          correct: "D",
          steps: ["Order matters here since the three offices are distinct, so this is a permutation.", "$P(7,3) = \\frac{7!}{(7-3)!} = 7 \\times 6 \\times 5 = 210$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "How many different 4-person committees can be formed from a group of 10 people?",
          options: [ {key:"A", text:"40"}, {key:"B", text:"120"}, {key:"C", text:"210"}, {key:"D", text:"720"}, {key:"E", text:"5040"} ],
          correct: "C",
          steps: ["A committee has no distinct roles, so order doesn't matter, making this a combination.", "$C(10,4) = \\frac{10!}{4!6!} = \\frac{10\\times9\\times8\\times7}{4\\times3\\times2\\times1} = \\frac{5040}{24}=210$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "How many distinct ways can the letters of the word BANANA be arranged?",
          options: [ {key:"A", text:"20"}, {key:"B", text:"60"}, {key:"C", text:"120"}, {key:"D", text:"360"}, {key:"E", text:"720"} ],
          correct: "B",
          steps: ["BANANA has 6 letters total, with B appearing once, A appearing 3 times, and N appearing 2 times.", "Distinct arrangements $= \\frac{6!}{3!\\,2!\\,1!} = \\frac{720}{6\\times2\\times1}=\\frac{720}{12}=60$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "A committee of 5 people is to be chosen from a group of 12 people. How many different committees are possible?",
          options: [ {key:"A", text:"60"}, {key:"B", text:"210"}, {key:"C", text:"396"}, {key:"D", text:"792"}, {key:"E", text:"95040"} ],
          correct: "D",
          steps: ["Since the committee has no distinct roles, use combinations.", "$C(12,5) = \\frac{12!}{5!7!} = \\frac{12\\times11\\times10\\times9\\times8}{5\\times4\\times3\\times2\\times1} = \\frac{95040}{120}=792$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "In how many ways can 5 distinct books be arranged in a row on a shelf?",
          options: [ {key:"A", text:"20"}, {key:"B", text:"60"}, {key:"C", text:"100"}, {key:"D", text:"120"}, {key:"E", text:"625"} ],
          correct: "D",
          steps: ["Arranging all 5 distinct items in a row is a permutation of all 5.", "$5! = 5\\times4\\times3\\times2\\times1=120$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "A coach must select a captain, co-captain, and MVP from a team of 8 players, where no player can receive more than one title. How many ways can this be done?",
          options: [ {key:"A", text:"56"}, {key:"B", text:"168"}, {key:"C", text:"336"}, {key:"D", text:"512"}, {key:"E", text:"40320"} ],
          correct: "C",
          steps: ["The three titles are distinct roles, so order matters, making this a permutation.", "$P(8,3) = 8\\times7\\times6=336$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A store sells shirts in 3 colors and 4 sizes, and each shirt can optionally be personalized or not (2 options). How many distinct shirt configurations are possible?",
          options: [ {key:"A", text:"9"}, {key:"B", text:"12"}, {key:"C", text:"14"}, {key:"D", text:"20"}, {key:"E", text:"24"} ],
          correct: "E",
          steps: ["By the fundamental counting principle, multiply the choices at each independent step.", "$3 \\times 4 \\times 2 = 24$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A group of 5 men and 4 women needs to form a subcommittee with exactly 2 men and 2 women. How many such subcommittees are possible?",
          options: [ {key:"A", text:"20"}, {key:"B", text:"36"}, {key:"C", text:"40"}, {key:"D", text:"60"}, {key:"E", text:"126"} ],
          correct: "D",
          steps: ["Choose the men and women independently, then multiply.", "Ways to choose 2 men from 5: $C(5,2)=10$. Ways to choose 2 women from 4: $C(4,2)=6$.", "Total $=10\\times6=60$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "How many distinct ways can the letters of the word LEVEL be arranged?",
          options: [ {key:"A", text:"20"}, {key:"B", text:"30"}, {key:"C", text:"60"}, {key:"D", text:"120"}, {key:"E", text:"600"} ],
          correct: "B",
          steps: ["LEVEL has 5 letters total, with L appearing twice, E appearing twice, and V appearing once.", "Distinct arrangements $=\\frac{5!}{2!\\,2!\\,1!}=\\frac{120}{4}=30$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A café offers 5 types of coffee and 6 types of pastries. How many different coffee-and-pastry pairs can be ordered?",
          correct: 30,
          steps: ["By the fundamental counting principle, multiply the number of choices.", "$5 \\times 6 = 30$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "In how many ways can a first-place and second-place winner be selected from 6 finalists?",
          correct: 30,
          steps: ["Order matters (1st place differs from 2nd place), so this is a permutation.", "$P(6,2) = 6\\times5=30$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "How many different 3-person teams can be formed from a group of 9 people?",
          correct: 84,
          steps: ["A team has no distinct roles, so use combinations.", "$C(9,3) = \\frac{9!}{3!6!} = \\frac{9\\times8\\times7}{3\\times2\\times1} = \\frac{504}{6}=84$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "How many distinct ways can the letters of the word STATS be arranged?",
          correct: 30,
          steps: ["STATS has 5 letters total, with S appearing twice, T appearing twice, and A appearing once.", "Distinct arrangements $=\\frac{5!}{2!\\,2!\\,1!}=\\frac{120}{4}=30$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A committee of 4 people must be chosen from a group of 10 people, and two specific people, Ana and Ben, must both be included. How many such committees are possible?",
          correct: 28,
          steps: ["Since Ana and Ben are already on the committee, 2 more members must be chosen from the remaining 8 people.", "$C(8,2) = \\frac{8\\times7}{2\\times1}=28$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "In how many distinct orders can 4 distinct paintings be hung in a row on a wall?",
          correct: 24,
          steps: ["Arranging all 4 distinct items is a permutation of all 4.", "$4! = 4\\times3\\times2\\times1=24$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A club with 9 members must choose a president, a vice president, and a treasurer, where no member can hold more than one office. How many ways can this be done?",
          correct: 504,
          steps: ["The three offices are distinct roles, so order matters, making this a permutation.", "$P(9,3) = 9\\times8\\times7=504$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "A pizza shop offers 8 toppings, and a customer wants to choose exactly 3 of them. How many different topping combinations are possible?",
          correct: 56,
          steps: ["Order doesn't matter when choosing toppings, so use combinations.", "$C(8,3) = \\frac{8\\times7\\times6}{3\\times2\\times1}=\\frac{336}{6}=56$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "For each scenario below, determine whether it should be modeled using a PERMUTATION (order matters). Select all that apply.",
          options: [ {key:"A", text:"Assigning gold, silver, and bronze medals to 3 of 10 racers."}, {key:"B", text:"Choosing 3 people from 10 to form an unranked committee."}, {key:"C", text:"Selecting a starting lineup's batting order for 9 players out of a 15-player roster."}, {key:"D", text:"Choosing 4 pizza toppings from a menu of 12 toppings."}, {key:"E", text:"Assigning distinct roles of director, producer, and editor to 3 of 8 candidates."} ],
          correct: ["A", "C", "E"],
          steps: [
            "A: gold, silver, and bronze are distinct positions, so order matters. Permutation.",
            "B: an unranked committee has no distinct roles, so order doesn't matter. Combination, not permutation.",
            "C: a batting order is a specific sequence, so order matters. Permutation.",
            "D: choosing toppings has no order or distinct roles. Combination, not permutation.",
            "E: director, producer, and editor are distinct roles, so order matters. Permutation.",
            "Scenarios requiring permutations: A, C, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following expressions are equal to $C(8,3)$? Select all that apply.",
          options: [ {key:"A", text:"$C(8,3)$ computed directly"}, {key:"B", text:"$C(8,5)$"}, {key:"C", text:"$\\dfrac{P(8,3)}{3!}$"}, {key:"D", text:"$\\dfrac{8!}{3!\\,5!}$"}, {key:"E", text:"$C(8,4)$"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "$C(8,3) = \\frac{8!}{3!5!} = 56$ (A true, and this is D's formula restated, also true).",
            "By the symmetry rule $C(n,r)=C(n,n-r)$: $C(8,5)=C(8,3)=56$ (B true).",
            "Since $C(n,r) = \\frac{P(n,r)}{r!}$, we get $\\frac{P(8,3)}{3!}=\\frac{336}{6}=56$ (C true).",
            "$C(8,4) = \\frac{8!}{4!4!} = 70 \\ne 56$ (E false).",
            "Expressions equal to $C(8,3)$: A, B, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following words have exactly 30 distinct letter arrangements? Select all that apply.",
          options: [ {key:"A", text:"LEVEL"}, {key:"B", text:"STATS"}, {key:"C", text:"BANANA"}, {key:"D", text:"RADAR"}, {key:"E", text:"HELLO"} ],
          correct: ["A", "B", "D"],
          steps: [
            "LEVEL: 5 letters, L twice, E twice. Arrangements $=\\frac{5!}{2!2!}=\\frac{120}{4}=30$.",
            "STATS: 5 letters, S twice, T twice, A once. Arrangements $=\\frac{5!}{2!2!}=30$.",
            "BANANA: 6 letters, A three times, N twice. Arrangements $=\\frac{6!}{3!2!}=\\frac{720}{12}=60$, not 30.",
            "RADAR: 5 letters, R twice, A twice, D once. Arrangements $=\\frac{5!}{2!2!}=30$.",
            "HELLO: 5 letters, L twice, others once each. Arrangements $=\\frac{5!}{2!}=\\frac{120}{2}=60$, not 30.",
            "Words with exactly 30 arrangements: LEVEL, STATS, and RADAR (A, B, D)."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A group of 10 people consists of 6 men and 4 women. A 4-person committee is chosen at random from the group. Which of the following statements about possible committees are true? Select all that apply.",
          options: [ {key:"A", text:"The number of committees with exactly 2 men and 2 women is 90."}, {key:"B", text:"The number of committees with all 4 members women is 1."}, {key:"C", text:"The number of committees with exactly 1 woman (and 3 men) is 80."}, {key:"D", text:"The number of committees with at least 3 women is 25."}, {key:"E", text:"The total number of possible 4-person committees, with no restriction, is 200."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "A: $C(6,2)\\times C(4,2) = 15\\times6=90$. True.",
            "B: $C(4,4)\\times C(6,0)=1\\times1=1$. True.",
            "C: $C(4,1)\\times C(6,3)=4\\times20=80$. True.",
            "D: at least 3 women means exactly 3 women and 1 man, plus exactly 4 women: $C(4,3)C(6,1)+C(4,4)C(6,0)=4\\times6+1\\times1=24+1=25$. True.",
            "E: the true total is $C(10,4)=210$, not 200. False.",
            "True statements: A, B, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following quantities equal $5! = 120$? Select all that apply.",
          options: [ {key:"A", text:"The number of ways to arrange 5 distinct books on a shelf."}, {key:"B", text:"$P(5,5)$, the number of ways to arrange all 5 of 5 distinct people."}, {key:"C", text:"The number of ways 5 people can be seated in 5 distinct chairs."}, {key:"D", text:"$P(5,3)$, the number of ordered arrangements of 3 people chosen from 5."}, {key:"E", text:"$C(5,5)$, the number of ways to choose all 5 people from a group of 5."} ],
          correct: ["A", "B", "C"],
          steps: [
            "A: arranging all 5 distinct books is $5!=120$. True.",
            "B: $P(5,5)=\\frac{5!}{0!}=5!=120$. True.",
            "C: seating 5 people in 5 chairs is a full arrangement, $5!=120$. True.",
            "D: $P(5,3)=5\\times4\\times3=60 \\ne 120$. False.",
            "E: $C(5,5)=1 \\ne 120$. False.",
            "Quantities equal to 120: A, B, and C."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following scenarios result in exactly 24 total outcomes? Select all that apply.",
          options: [ {key:"A", text:"Choosing 1 of 3 appetizers, 1 of 4 entrees, and 1 of 2 desserts."}, {key:"B", text:"Arranging all 4 letters of a word with no repeated letters."}, {key:"C", text:"Choosing 1 of 2 colors, 1 of 2 sizes, 1 of 2 materials, and 1 of 3 styles."}, {key:"D", text:"Choosing 1 of 6 shirts and 1 of 4 pairs of pants."}, {key:"E", text:"Choosing an unordered pair of judges from 6 finalists, then assigning either of the 2 remaining top scorers a bonus."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "A: $3\\times4\\times2=24$. True.",
            "B: arranging 4 distinct letters is $4!=24$. True.",
            "C: $2\\times2\\times2\\times3=24$. True.",
            "D: $6\\times4=24$. True.",
            "E: $C(6,2)\\times2 = 15\\times2=30 \\ne 24$. False.",
            "Scenarios with exactly 24 outcomes: A, B, C, and D."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A group has 6 people.",
          quantityA: "$P(6,3)$, the number of ways to select and order 3 people",
          quantityB: "$C(6,3)$, the number of ways to select an unordered group of 3 people",
          correct: "A",
          steps: ["$P(6,3) = 6\\times5\\times4=120$.", "$C(6,3) = \\frac{6\\times5\\times4}{3\\times2\\times1}=\\frac{120}{6}=20$.", "Quantity A (120) is greater than Quantity B (20), since permutations count every ordering separately while combinations do not."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "A group has 10 people.",
          quantityA: "$C(10,4)$, the number of ways to choose a 4-person committee",
          quantityB: "$C(10,6)$, the number of ways to choose a 6-person committee",
          correct: "C",
          steps: ["By the symmetry property, $C(n,r) = C(n,n-r)$.", "$C(10,4) = C(10,6)$ since $10-4=6$.", "Both quantities equal 210."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "Consider two 5-letter strings: AABBB and AAABB.",
          quantityA: "The number of distinct arrangements of AABBB",
          quantityB: "The number of distinct arrangements of AAABB",
          correct: "C",
          steps: ["AABBB: 5 letters, A twice, B three times. Arrangements $=\\frac{5!}{2!3!}=\\frac{120}{12}=10$.", "AAABB: 5 letters, A three times, B twice. Arrangements $=\\frac{5!}{3!2!}=\\frac{120}{12}=10$.", "Both quantities equal 10, since swapping which letter repeats 3 times doesn't change the count."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "A group has 8 people.",
          quantityA: "The number of distinct 3-person committees (order doesn't matter)",
          quantityB: "The number of ways to arrange 3 of the 8 people in a row (order matters)",
          correct: "B",
          steps: ["Quantity A: $C(8,3) = \\frac{8\\times7\\times6}{3\\times2\\times1}=56$.", "Quantity B: $P(8,3) = 8\\times7\\times6=336$.", "Quantity B is greater, since a permutation counts every distinct ordering of the same 3 people as a separate outcome."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "A group has 5 people.",
          quantityA: "The number of ways to choose an unordered group of 2 people",
          quantityB: "The number of ways to choose an unordered group of 3 people",
          correct: "C",
          steps: ["$C(5,2) = \\frac{5\\times4}{2\\times1}=10$.", "$C(5,3) = \\frac{5\\times4\\times3}{3\\times2\\times1}=10$.", "Both quantities equal 10, consistent with the symmetry property $C(5,2)=C(5,3)$ since $5-2=3$."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A restaurant offers 4 shirts and 3 pants for outfits. Separately, a group of 5 people will each shake hands with every other person exactly once.",
          quantityA: "The total number of possible shirt-and-pants outfits",
          quantityB: "The total number of handshakes among the 5 people",
          correct: "A",
          steps: ["Quantity A: by the counting principle, $4\\times3=12$ outfits.", "Quantity B: each handshake is an unordered pair from 5 people, $C(5,2)=\\frac{5\\times4}{2\\times1}=10$.", "Quantity A (12) is greater than Quantity B (10)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A fair coin is flipped 3 times. What is the probability of getting exactly 2 heads?",
          options: [ {key:"A", text:"1/8"}, {key:"B", text:"1/4"}, {key:"C", text:"3/8"}, {key:"D", text:"1/2"}, {key:"E", text:"5/8"} ],
          correct: "C",
          steps: ["There are $2^3 = 8$ equally likely outcomes.", "The outcomes with exactly 2 heads are HHT, HTH, THH: 3 outcomes.", "$P = 3/8$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "A bag has 5 red marbles and 3 blue marbles. One marble is drawn, not replaced, then a second is drawn. What is the probability both are red?",
          options: [ {key:"A", text:"25/64"}, {key:"B", text:"5/14"}, {key:"C", text:"5/8"}, {key:"D", text:"15/56"}, {key:"E", text:"5/28"} ],
          correct: "B",
          steps: ["$P(\\text{1st red}) = 5/8$.", "After removing one red marble, 4 red remain out of 7 total: $P(\\text{2nd red}) = 4/7$.", "$P(\\text{both red}) = \\frac58 \\times \\frac47 = \\frac{20}{56} = \\frac{5}{14}$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A die is rolled once. What is the probability of rolling a number that is either even or greater than 4?",
          options: [ {key:"A", text:"1/3"}, {key:"B", text:"1/2"}, {key:"C", text:"2/3"}, {key:"D", text:"5/6"}, {key:"E", text:"1"} ],
          correct: "C",
          steps: ["Even numbers: {2,4,6}, $P=3/6$. Greater than 4: {5,6}, $P=2/6$.", "Overlap (even AND greater than 4): {6}, $P=1/6$.", "$P(\\text{even or} > 4) = \\frac36+\\frac26-\\frac16 = \\frac46 = \\frac23$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "The probability it rains on Saturday is 0.3, and the probability it rains on Sunday is 0.4. The two events are independent. What is the probability it rains on at least one of the two days?",
          options: [ {key:"A", text:"0.12"}, {key:"B", text:"0.42"}, {key:"C", text:"0.58"}, {key:"D", text:"0.70"}, {key:"E", text:"0.88"} ],
          correct: "C",
          steps: ["$P(\\text{no rain Sat}) = 0.7$, $P(\\text{no rain Sun}) = 0.6$.", "$P(\\text{no rain either day}) = 0.7 \\times 0.6 = 0.42$ (independent events).", "$P(\\text{at least one day}) = 1 - 0.42 = 0.58$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "In a class of 30 students, 18 play soccer, 12 play tennis, and 6 play both. If a student is chosen at random, what is the probability the student plays neither sport?",
          options: [ {key:"A", text:"1/5"}, {key:"B", text:"1/6"}, {key:"C", text:"1/3"}, {key:"D", text:"2/5"}, {key:"E", text:"4/5"} ],
          correct: "B",
          steps: ["$P(\\text{soccer or tennis}) = P(\\text{soccer})+P(\\text{tennis})-P(\\text{both}) = \\frac{18}{30}+\\frac{12}{30}-\\frac{6}{30} = \\frac{24}{30} = \\frac45$.", "$P(\\text{neither}) = 1 - \\frac45 = \\frac15$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A spinner is divided into 4 equal sections labeled 1, 2, 3, 4. It is spun twice. What is the probability that the sum of the two spins is 5?",
          options: [ {key:"A", text:"1/16"}, {key:"B", text:"1/8"}, {key:"C", text:"1/4"}, {key:"D", text:"3/8"}, {key:"E", text:"1/2"} ],
          correct: "C",
          steps: ["There are $4\\times4=16$ equally likely outcomes.", "Pairs summing to 5: (1,4),(2,3),(3,2),(4,1): 4 outcomes.", "$P = 4/16 = 1/4$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "A factory finds that 5% of its light bulbs are defective. If 3 bulbs are chosen at random (independently), what is the probability that at least one is defective?",
          options: [ {key:"A", text:"0.05"}, {key:"B", text:"0.1426"}, {key:"C", text:"0.15"}, {key:"D", text:"0.857375"}, {key:"E", text:"0.9975"} ],
          correct: "B",
          steps: ["$P(\\text{not defective}) = 0.95$ for each bulb.", "$P(\\text{none defective}) = 0.95^3 = 0.857375$.", "$P(\\text{at least one defective}) = 1 - 0.857375 = 0.142625 \\approx 0.1426$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "In a group of 50 people, 60% own a car. Of those who own a car, 1/3 also own a bike. What is the probability that a randomly chosen person owns both a car and a bike?",
          options: [ {key:"A", text:"1/5"}, {key:"B", text:"3/10"}, {key:"C", text:"1/3"}, {key:"D", text:"2/5"}, {key:"E", text:"3/5"} ],
          correct: "A",
          steps: ["$P(\\text{car}) = 0.6 = 3/5$.", "$P(\\text{bike} \\mid \\text{car}) = 1/3$.", "$P(\\text{car and bike}) = \\frac35 \\times \\frac13 = \\frac{3}{15} = \\frac15$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A jar contains 4 green and 6 yellow candies. Two candies are drawn without replacement. What is the probability that the two candies are different colors?",
          options: [ {key:"A", text:"2/15"}, {key:"B", text:"4/15"}, {key:"C", text:"7/15"}, {key:"D", text:"8/15"}, {key:"E", text:"3/5"} ],
          correct: "D",
          steps: ["$P(\\text{green then yellow}) = \\frac{4}{10}\\times\\frac{6}{9} = \\frac{24}{90}$.", "$P(\\text{yellow then green}) = \\frac{6}{10}\\times\\frac{4}{9} = \\frac{24}{90}$.", "Total $= \\frac{48}{90} = \\frac{8}{15}$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "Event A and event B are independent, with $P(A) = 0.5$ and $P(A \\text{ and } B) = 0.2$. What is $P(B)$?",
          options: [ {key:"A", text:"0.1"}, {key:"B", text:"0.2"}, {key:"C", text:"0.3"}, {key:"D", text:"0.4"}, {key:"E", text:"0.7"} ],
          correct: "D",
          steps: ["For independent events, $P(A \\text{ and } B) = P(A) \\times P(B)$.", "$0.2 = 0.5 \\times P(B)$, so $P(B) = 0.4$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A card is drawn from a standard 52-card deck. What is the probability, expressed as a fraction in lowest terms, that the card is a king? Give your answer as a decimal rounded to the nearest hundredth.",
          correct: 0.08,
          steps: ["There are 4 kings in 52 cards.", "$P = 4/52 = 1/13 \\approx 0.0769$, which rounds to $0.08$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "Events A and B are mutually exclusive, with $P(A) = 0.25$ and $P(B) = 0.35$. What is $P(A \\text{ or } B)$?",
          correct: 0.6,
          steps: ["For mutually exclusive events, $P(A \\text{ and } B) = 0$.", "$P(A \\text{ or } B) = P(A)+P(B) = 0.25+0.35 = 0.6$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A box has 3 white balls and 7 black balls. If two balls are drawn without replacement, what is the probability, as a fraction, that both are white? Express your answer as a fraction in the form of a decimal (e.g., enter 0.5 for 1/2).",
          correct: 0.0667,
          steps: ["$P(\\text{1st white}) = 3/10$.", "$P(\\text{2nd white} \\mid \\text{1st white}) = 2/9$.", "$P(\\text{both white}) = \\frac{3}{10}\\times\\frac29 = \\frac{6}{90} = \\frac{1}{15} \\approx 0.0667$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "In a survey, $P(\\text{likes coffee}) = 0.6$, and $P(\\text{likes coffee and likes tea}) = 0.24$. What is $P(\\text{likes tea} \\mid \\text{likes coffee})$?",
          correct: 0.4,
          steps: ["$P(\\text{tea} \\mid \\text{coffee}) = \\dfrac{P(\\text{coffee and tea})}{P(\\text{coffee})} = \\dfrac{0.24}{0.6}$.", "$= 0.4$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A weighted coin lands heads with probability 0.7. If it is flipped 2 times, what is the probability of getting heads both times, rounded to the nearest hundredth?",
          correct: 0.49,
          steps: ["The flips are independent, so $P(\\text{HH}) = 0.7 \\times 0.7$.", "$= 0.49$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A committee of 2 people is chosen at random from a group of 4 men and 2 women. What is the probability, as a decimal rounded to the nearest hundredth, that both people chosen are women?",
          correct: 0.07,
          steps: ["Total ways to choose 2 from 6: $\\binom{6}{2}=15$.", "Ways to choose 2 women from 2: $\\binom{2}{2}=1$.", "$P = 1/15 \\approx 0.0667$, which rounds to $0.07$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "The probability that a machine produces a defective part is 0.1 on any given trial, and trials are independent. What is the probability that the first two parts are good and the third part is defective, rounded to the nearest thousandth?",
          correct: 0.081,
          steps: ["$P(\\text{good}) = 0.9$ per trial.", "$P(\\text{good, good, defective}) = 0.9 \\times 0.9 \\times 0.1 = 0.081$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "$P(A) = 0.4$, $P(B) = 0.5$, and $P(A \\text{ and } B) = 0.2$. What is $P(A \\text{ or } B)$?",
          correct: 0.7,
          steps: ["$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$.", "$= 0.4 + 0.5 - 0.2 = 0.7$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "A fair six-sided die is rolled once. Which of the following statements are true? Select all that apply.",
          options: [ {key:"A", text:"$P(\\text{rolling a 7}) = 0$"}, {key:"B", text:"$P(\\text{rolling a number from 1 to 6}) = 1$"}, {key:"C", text:"$P(\\text{rolling an odd number}) = 0.5$"}, {key:"D", text:"$P(\\text{rolling a prime number}) = 0.6$"}, {key:"E", text:"$P(\\text{rolling a number} < 3) = 1/3$"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A: 7 is impossible on a standard die, so $P=0$, true.",
            "B: every roll is 1 through 6, so $P=1$, true.",
            "C: odd numbers {1,3,5} give $P=3/6=0.5$, true.",
            "D: primes on a die are {2,3,5}, giving $P=3/6=0.5$, not 0.6, false.",
            "E: numbers less than 3 are {1,2}, giving $P=2/6=1/3$, true."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Events C and D satisfy $P(C) = 0.4$ and $P(D) = 0.3$. Which of the following values are possible for $P(C \\text{ and } D)$? Select all that apply.",
          options: [ {key:"A", text:"0"}, {key:"B", text:"0.1"}, {key:"C", text:"0.12"}, {key:"D", text:"0.3"}, {key:"E", text:"0.35"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "$P(C \\text{ and } D)$ can never exceed the smaller of $P(C)$ and $P(D)$, which is 0.3, and cannot be negative.",
            "So valid values satisfy $0 \\le P(C \\text{ and } D) \\le 0.3$.",
            "A (0), B (0.1), C (0.12), and D (0.3) all fall in this range.",
            "E (0.35) exceeds 0.3, so it is impossible."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "A bag contains only red and blue chips. A chip is drawn, its color noted, and it is replaced before the next draw. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$P(\\text{red}) + P(\\text{blue}) = 1$"}, {key:"B", text:"The draws are independent of each other."}, {key:"C", text:"$P(\\text{red on draw 2} \\mid \\text{red on draw 1}) = P(\\text{red on draw 2})$"}, {key:"D", text:"$P(\\text{red twice in a row}) = P(\\text{red})^2$"}, {key:"E", text:"$P(\\text{red}) = P(\\text{blue})$"} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "A: red and blue are the only possible outcomes, so their probabilities sum to 1, true.",
            "B, C, D: because the chip is replaced, the composition of the bag never changes, so each draw is independent of the others; this makes B, C (independence definition), and D (multiplication rule for independent events) all true.",
            "E: this would only hold if there were equal numbers of red and blue chips, which is not stated, so it is not necessarily true."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A survey of 200 people finds 90 like hiking, 70 like biking, and 30 like both. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"$P(\\text{hiking or biking}) = 0.65$"}, {key:"B", text:"$P(\\text{neither}) = 0.35$"}, {key:"C", text:"$P(\\text{hiking only}) = 0.3$"}, {key:"D", text:"$P(\\text{biking only}) = 0.2$"}, {key:"E", text:"$P(\\text{both}) = 0.15$"} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "$P(\\text{hiking or biking}) = \\frac{90}{200}+\\frac{70}{200}-\\frac{30}{200} = \\frac{130}{200} = 0.65$, A true.",
            "$P(\\text{neither}) = 1 - 0.65 = 0.35$, B true.",
            "Hiking only $= 90-30=60$ people, $60/200=0.3$, C true.",
            "Biking only $= 70-30=40$ people, $40/200=0.2$, D true.",
            "$P(\\text{both}) = 30/200 = 0.15$, E true."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Two dice are rolled. Which of the following events have probability greater than $1/6$? Select all that apply.",
          options: [ {key:"A", text:"The sum is 7."}, {key:"B", text:"The sum is 2."}, {key:"C", text:"The sum is even."}, {key:"D", text:"Both dice show the same number."}, {key:"E", text:"At least one die shows a 6."} ],
          correct: ["C", "E"],
          steps: [
            "There are 36 equally likely outcomes.",
            "A: sum of 7 has 6 outcomes (1,6),(2,5),(3,4),(4,3),(5,2),(6,1), so $P=6/36=1/6$, exactly equal, not greater. Excluded.",
            "B: sum of 2 has only 1 outcome, $P=1/36$, less than $1/6$. Excluded.",
            "C: sum is even for exactly half the 36 outcomes, $18/36=1/2 > 1/6$. Included.",
            "D: both dice matching has 6 outcomes, $6/36=1/6$, exactly equal, not greater. Excluded.",
            "E: at least one die shows 6 has 11 outcomes (11 out of 36, since 6 outcomes have the first die as 6, 6 outcomes have the second die as 6, minus the 1 double-counted (6,6)), so $P=11/36 > 6/36=1/6$. Included."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "In a shipment of 100 devices, 20 are defective. Two devices are tested one at a time without replacement. Let $R_1$ be the event the first device tested is defective, and $R_2$ be the event the second device tested is defective. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"$P(R_1) = 0.2$"}, {key:"B", text:"$R_1$ and $R_2$ are independent events."}, {key:"C", text:"$P(R_2 \\mid R_1) = 19/99$"}, {key:"D", text:"$P(R_1 \\text{ and } R_2) = P(R_1) \\times P(R_2 \\mid R_1)$"}, {key:"E", text:"$P(R_2 \\mid R_1) = P(R_2)$"} ],
          correct: ["A", "C", "D"],
          steps: [
            "A: $P(R_1) = 20/100 = 0.2$, true.",
            "Because there is no replacement, the outcome of the first draw changes the pool for the second draw, so the two events are dependent: B is false, and E (which restates independence) is also false.",
            "C: given the first device tested was defective, 19 defective devices remain out of 99 total, so $P(R_2 \\mid R_1) = 19/99$, true.",
            "D: this is just the general multiplication rule for any two events (independent or not), which always holds, true."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A fair coin is flipped 4 times.",
          quantityA: "The probability of getting at least one head",
          quantityB: "15/16",
          correct: "C",
          steps: ["$P(\\text{no heads}) = (1/2)^4 = 1/16$.", "$P(\\text{at least one head}) = 1 - 1/16 = 15/16$.", "Both quantities equal $15/16$."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "$P(X) = 0.6$ and $P(Y) = 0.5$, and X and Y are independent events.",
          quantityA: "$P(X \\text{ and } Y)$",
          quantityB: "$P(X \\text{ or } Y) - 0.6$",
          correct: "A",
          steps: ["$P(X \\text{ and } Y) = 0.6 \\times 0.5 = 0.3$ (independence).", "$P(X \\text{ or } Y) = 0.6+0.5-0.3 = 0.8$.", "Quantity B $= 0.8-0.6 = 0.2$.", "Quantity A ($0.3$) is greater than Quantity B ($0.2$)."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A box contains 6 pens: 2 are defective. Two pens are chosen at random without replacement.",
          quantityA: "The probability neither pen is defective",
          quantityB: "3/5",
          correct: "B",
          steps: ["$P(\\text{1st good}) = 4/6$.", "$P(\\text{2nd good} \\mid \\text{1st good}) = 3/5$.", "$P(\\text{both good}) = \\frac46 \\times \\frac35 = \\frac{12}{30} = \\frac25 = 0.4$.", "Quantity B is $3/5 = 0.6$.", "Quantity A ($0.4$) is less than Quantity B ($0.6$)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "Events M and N are mutually exclusive. $P(M) = 0.3$ and $P(N) = 0.4$.",
          quantityA: "$P(M \\text{ or } N)$",
          quantityB: "$P(M) \\times P(N) + 0.58$",
          correct: "C",
          steps: ["Since M and N are mutually exclusive, $P(M \\text{ or } N) = P(M)+P(N) = 0.3+0.4 = 0.7$.", "Quantity B: $P(M)\\times P(N) = 0.3\\times0.4 = 0.12$, plus $0.58$ gives $0.7$.", "Both quantities equal $0.7$."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "A spinner has 5 equal sections numbered 1 through 5 and is spun twice, independently.",
          quantityA: "The probability that both spins land on 5",
          quantityB: "The probability that the sum of the two spins is 2",
          correct: "C",
          steps: ["$P(\\text{both land on 5}) = \\frac15 \\times \\frac15 = \\frac{1}{25}$.", "Sum of 2 only happens with (1,1): $P = \\frac15\\times\\frac15 = \\frac{1}{25}$.", "Both quantities equal $1/25$."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "In a group of workers, $P(\\text{has a degree}) = 0.7$, and $P(\\text{has a degree and is a manager}) = 0.21$.",
          quantityA: "$P(\\text{is a manager} \\mid \\text{has a degree})$",
          quantityB: "0.3",
          correct: "C",
          steps: ["$P(\\text{manager} \\mid \\text{degree}) = \\dfrac{P(\\text{degree and manager})}{P(\\text{degree})} = \\dfrac{0.21}{0.7}$.", "$= 0.3$.", "Both quantities equal $0.3$."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A dataset is normally distributed with mean 50 and standard deviation 4. What percent of the data falls between 46 and 54?",
          options: [ {key:"A", text:"34%"}, {key:"B", text:"50%"}, {key:"C", text:"68%"}, {key:"D", text:"95%"}, {key:"E", text:"99.7%"} ],
          correct: "C",
          steps: ["$46 = 50-4 = \\mu-1\\sigma$ and $54=50+4=\\mu+1\\sigma$.", "This is the range $\\mu \\pm 1\\sigma$, which contains about 68% of the data."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "Test scores are normally distributed with mean 100 and standard deviation 15. What is the z-score of a test score of 130?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"1.5"}, {key:"C", text:"2"}, {key:"D", text:"2.5"}, {key:"E", text:"3"} ],
          correct: "C",
          steps: ["$z = \\dfrac{x-\\mu}{\\sigma} = \\dfrac{130-100}{15} = \\dfrac{30}{15}$.", "$z=2$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A normally distributed variable has mean 60 and standard deviation 5. Approximately what percent of values lie between 55 and 65?",
          options: [ {key:"A", text:"13.5%"}, {key:"B", text:"34%"}, {key:"C", text:"50%"}, {key:"D", text:"68%"}, {key:"E", text:"95%"} ],
          correct: "D",
          steps: ["$55 = 60-5 = \\mu-1\\sigma$, $65=60+5=\\mu+1\\sigma$.", "This range is $\\mu\\pm1\\sigma$, which holds about 68% of the data."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "IQ scores are normally distributed with mean 100 and standard deviation 15. What percentile does a score of 115 correspond to?",
          options: [ {key:"A", text:"50th"}, {key:"B", text:"68th"}, {key:"C", text:"84th"}, {key:"D", text:"95th"}, {key:"E", text:"97.5th"} ],
          correct: "C",
          steps: ["$z = \\dfrac{115-100}{15} = 1$, so 115 is exactly $1\\sigma$ above the mean.", "By symmetry, 50% of data lies below the mean, plus 34% between the mean and $+1\\sigma$: $50\\%+34\\%=84\\%$.", "A score at $+1\\sigma$ is at the 84th percentile."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "A machine fills bottles with a mean volume of 500 mL and standard deviation 2 mL, normally distributed. Approximately what percent of bottles contain between 494 mL and 506 mL?",
          options: [ {key:"A", text:"68%"}, {key:"B", text:"95%"}, {key:"C", text:"99.7%"}, {key:"D", text:"99.9%"}, {key:"E", text:"84%"} ],
          correct: "C",
          steps: ["$494 = 500-6 = \\mu-3\\sigma$, $506=500+6=\\mu+3\\sigma$ since $\\sigma=2$.", "The range $\\mu\\pm3\\sigma$ contains about 99.7% of the data."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A normally distributed variable has mean 200 and standard deviation 10. A value has a z-score of $-1.5$. What is the value?",
          options: [ {key:"A", text:"180"}, {key:"B", text:"185"}, {key:"C", text:"190"}, {key:"D", text:"195"}, {key:"E", text:"215"} ],
          correct: "C",
          steps: ["$x = \\mu + z\\sigma = 200 + (-1.5)(10)$.", "$x = 200-15 = 185$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "Heights of adult men are normally distributed with mean 70 inches and standard deviation 3 inches. What percent of men are taller than 76 inches?",
          options: [ {key:"A", text:"0.15%"}, {key:"B", text:"2.5%"}, {key:"C", text:"2.35%"}, {key:"D", text:"5%"}, {key:"E", text:"16%"} ],
          correct: "B",
          steps: ["$76 = 70+6 = \\mu+2\\sigma$ since $\\sigma=3$.", "$\\mu\\pm2\\sigma$ contains 95%, leaving 5% split evenly in the two tails beyond $\\pm2\\sigma$: $2.5\\%$ in each tail.", "$P(\\text{taller than } \\mu+2\\sigma) = 2.5\\%$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A normally distributed variable has mean 40. A value of 34 has a z-score of $-2$. What is the standard deviation?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"3"}, {key:"C", text:"4"}, {key:"D", text:"5"}, {key:"E", text:"6"} ],
          correct: "B",
          steps: ["$z = \\dfrac{x-\\mu}{\\sigma}$, so $-2 = \\dfrac{34-40}{\\sigma} = \\dfrac{-6}{\\sigma}$.", "$\\sigma = \\dfrac{-6}{-2} = 3$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "Scores on an exam are normally distributed with mean 72 and standard deviation 8. Approximately what percent of students scored below 64?",
          options: [ {key:"A", text:"2.5%"}, {key:"B", text:"13.5%"}, {key:"C", text:"16%"}, {key:"D", text:"32%"}, {key:"E", text:"34%"} ],
          correct: "C",
          steps: ["$64 = 72-8 = \\mu-1\\sigma$.", "Below $\\mu-1\\sigma$: the tail beyond $-1\\sigma$ is $50\\%-34\\%=16\\%$ (since 34% lies between $-1\\sigma$ and the mean).", "$P(\\text{score}<64)=16\\%$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "Two students take different exams. Student X scores 82 on an exam with mean 70 and standard deviation 6. Student Y scores 90 on an exam with mean 75 and standard deviation 10. Who performed better relative to their exam's distribution?",
          options: [ {key:"A", text:"Student X, since 82 > 75"}, {key:"B", text:"Student Y, since 90 > 82"}, {key:"C", text:"Student X, since X's z-score is higher"}, {key:"D", text:"Student Y, since Y's z-score is higher"}, {key:"E", text:"They performed equally well"} ],
          correct: "C",
          steps: ["Student X's z-score: $\\dfrac{82-70}{6} = \\dfrac{12}{6} = 2$.", "Student Y's z-score: $\\dfrac{90-75}{10} = \\dfrac{15}{10} = 1.5$.", "Since $2 > 1.5$, Student X performed better relative to their own distribution."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A normally distributed variable has mean 55 and standard deviation 6. What is the z-score of the value 43?",
          correct: -2,
          steps: ["$z = \\dfrac{43-55}{6} = \\dfrac{-12}{6}$.", "$z=-2$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A normally distributed variable has mean 30 and standard deviation 4. What value corresponds to a z-score of 2.5?",
          correct: 40,
          steps: ["$x = \\mu+z\\sigma = 30+(2.5)(4)$.", "$x = 30+10 = 40$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "Battery life for a phone model is normally distributed with mean 20 hours. Approximately 95% of batteries last between 16 and 24 hours. What is the standard deviation, in hours?",
          correct: 2,
          steps: ["The 95% range corresponds to $\\mu\\pm2\\sigma$.", "$24-20 = 2\\sigma$, so $4=2\\sigma$, giving $\\sigma=2$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "A normally distributed variable has mean 500 and standard deviation 100. Approximately what percent of values fall between 400 and 500?",
          correct: 34,
          steps: ["$400 = 500-100 = \\mu-1\\sigma$.", "The range from $\\mu-1\\sigma$ to $\\mu$ is half of the central 68%, so it holds 34%."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A normally distributed variable has mean 12 and standard deviation 1.5. Approximately what percent of values are greater than 15?",
          correct: 2.5,
          steps: ["$15 = 12+3 = \\mu+2\\sigma$ since $\\sigma=1.5$.", "$\\mu\\pm2\\sigma$ holds 95%, leaving 5% split evenly between both tails, so 2.5% lies above $\\mu+2\\sigma$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A normally distributed variable has mean 45 and standard deviation 5. What is the value at the 84th percentile?",
          correct: 50,
          steps: ["The 84th percentile corresponds to $z=+1$ (since $50\\%+34\\%=84\\%$).", "$x = 45+1(5) = 50$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A normally distributed dataset has mean 80. The value 92 has a z-score of 3. What is the standard deviation?",
          correct: 4,
          steps: ["$z=\\dfrac{x-\\mu}{\\sigma}$, so $3 = \\dfrac{92-80}{\\sigma} = \\dfrac{12}{\\sigma}$.", "$\\sigma = 12/3 = 4$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "A normally distributed variable has mean 70 and standard deviation 8. Approximately what percent of values fall between 62 and 78?",
          correct: 68,
          steps: ["$62=70-8=\\mu-1\\sigma$, $78=70+8=\\mu+1\\sigma$.", "The range $\\mu\\pm1\\sigma$ holds about 68% of the data."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "A variable is normally distributed with mean 100 and standard deviation 10. Which of the following statements are true? Select all that apply.",
          options: [ {key:"A", text:"About 68% of values lie between 90 and 110."}, {key:"B", text:"About 95% of values lie between 80 and 120."}, {key:"C", text:"A value of 130 has a z-score of 3."}, {key:"D", text:"About 50% of values are below 100."}, {key:"E", text:"About 16% of values are above 110."} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "A: $90=\\mu-1\\sigma$, $110=\\mu+1\\sigma$; this range holds about 68%, true.",
            "B: $80=\\mu-2\\sigma$, $120=\\mu+2\\sigma$; this range holds about 95%, true.",
            "C: $z=(130-100)/10=3$, true.",
            "D: the mean splits a symmetric distribution exactly in half, true.",
            "E: values above $\\mu+1\\sigma$ make up the remaining tail: $50\\%-34\\%=16\\%$, true."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A normally distributed variable has mean 50 and standard deviation 5. Which of the following values have a z-score with absolute value greater than 2? Select all that apply.",
          options: [ {key:"A", text:"35"}, {key:"B", text:"38"}, {key:"C", text:"45"}, {key:"D", text:"61"}, {key:"E", text:"62"} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "$z=\\dfrac{x-50}{5}$ for each value.",
            "A: $z=(35-50)/5=-3$, $|z|=3>2$, included.",
            "B: $z=(38-50)/5=-2.4$, $|z|=2.4>2$, included.",
            "C: $z=(45-50)/5=-1$, $|z|=1$, not greater than 2, excluded.",
            "D: $z=(61-50)/5=2.2$, $|z|=2.2>2$, included.",
            "E: $z=(62-50)/5=2.4$, $|z|=2.4>2$, included."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Which of the following are properties of a normal distribution? Select all that apply.",
          options: [ {key:"A", text:"It is symmetric about the mean."}, {key:"B", text:"The mean, median, and mode are all equal."}, {key:"C", text:"Approximately 99.7% of data lies within 3 standard deviations of the mean."}, {key:"D", text:"It is only defined for positive values of the variable."}, {key:"E", text:"The total area under the curve equals 1."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A, B, C, and E are all standard defining properties of the normal distribution.",
            "D is false: a normal distribution's bell curve extends over all real numbers, not just positive ones."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "A normally distributed variable has mean 60 and standard deviation 4. Which of the following statements are true? Select all that apply.",
          options: [ {key:"A", text:"The value 68 is at approximately the 97.5th percentile."}, {key:"B", text:"The value 52 is at approximately the 2.5th percentile."}, {key:"C", text:"The value 64 is at approximately the 84th percentile."}, {key:"D", text:"The value 56 is at approximately the 16th percentile."}, {key:"E", text:"The value 60 is at approximately the 50th percentile."} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "$z$ for 68: $(68-60)/4=2$, percentile $=50+34+13.5=97.5$th, A true.",
            "$z$ for 52: $(52-60)/4=-2$, percentile $=100-97.5=2.5$th, B true.",
            "$z$ for 64: $(64-60)/4=1$, percentile $=50+34=84$th, C true.",
            "$z$ for 56: $(56-60)/4=-1$, percentile $=50-34=16$th, D true.",
            "$z$ for 60: $(60-60)/4=0$, percentile $=50$th (the mean), E true."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "A factory's widget weights are normally distributed with mean 25 g and standard deviation 3 g. Which of the following weights fall within 2 standard deviations of the mean? Select all that apply.",
          options: [ {key:"A", text:"18 g"}, {key:"B", text:"19 g"}, {key:"C", text:"22 g"}, {key:"D", text:"29 g"}, {key:"E", text:"32 g"} ],
          correct: ["B", "C", "D"],
          steps: [
            "Two standard deviations from the mean spans $25-2(3)=19$ to $25+2(3)=31$.",
            "A: 18 is below 19, excluded.",
            "B: 19 is exactly at the boundary, included.",
            "C: 22 is between 19 and 31, included.",
            "D: 29 is between 19 and 31, included.",
            "E: 32 is above 31, excluded."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "A normally distributed variable has mean 90 and standard deviation 6. Which of the following approximate percentile ranks are correctly matched to their values? Select all that apply.",
          options: [ {key:"A", text:"96 is at the 84th percentile."}, {key:"B", text:"84 is at the 16th percentile."}, {key:"C", text:"102 is at the 97.5th percentile."}, {key:"D", text:"90 is at the 0th percentile."}, {key:"E", text:"78 is at the 2.5th percentile."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "$z$ for 96: $(96-90)/6=1$, percentile $=50+34=84$th, A true.",
            "$z$ for 84: $(84-90)/6=-1$, percentile $=50-34=16$th, B true.",
            "$z$ for 102: $(102-90)/6=2$, percentile $=50+34+13.5=97.5$th, C true.",
            "$z$ for 90: $(90-90)/6=0$, this is the mean, which sits at the 50th percentile, not the 0th, D false.",
            "$z$ for 78: $(78-90)/6=-2$, percentile $=100-97.5=2.5$th, E true."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A normally distributed variable has mean 40 and standard deviation 5.",
          quantityA: "The percent of values between 35 and 45",
          quantityB: "68%",
          correct: "C",
          steps: ["$35=\\mu-1\\sigma$, $45=\\mu+1\\sigma$.", "This range holds about 68% of the data.", "Both quantities equal 68%."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "A normally distributed variable X has mean 90 and standard deviation 6. A value of 102 is observed.",
          quantityA: "The z-score of 102",
          quantityB: "2.5",
          correct: "B",
          steps: ["$z = \\dfrac{102-90}{6} = \\dfrac{12}{6} = 2$.", "Quantity A is 2, Quantity B is 2.5.", "Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A normally distributed variable has mean 200 and standard deviation 20.",
          quantityA: "The percent of values above 240",
          quantityB: "The percent of values below 160",
          correct: "C",
          steps: ["$240=\\mu+2\\sigma$, and the tail above $\\mu+2\\sigma$ is $(100-95)/2=2.5\\%$.", "$160=\\mu-2\\sigma$, and by symmetry the tail below $\\mu-2\\sigma$ is also $2.5\\%$.", "Both quantities equal 2.5%."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "Variable A is normally distributed with mean 50, standard deviation 5. Variable B is normally distributed with mean 50, standard deviation 8. A value of 60 is observed for each variable.",
          quantityA: "The z-score of 60 under distribution A",
          quantityB: "The z-score of 60 under distribution B",
          correct: "A",
          steps: ["$z_A = \\dfrac{60-50}{5} = 2$.", "$z_B = \\dfrac{60-50}{8} = 1.25$.", "Quantity A (2) is greater than Quantity B (1.25)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "A normally distributed variable has mean 500 and standard deviation 50.",
          quantityA: "The value at the 84th percentile",
          quantityB: "560",
          correct: "B",
          steps: ["The 84th percentile is $\\mu+1\\sigma = 500+50=550$.", "Quantity A is 550, Quantity B is 560.", "Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A normally distributed variable has mean 75 and standard deviation 10. A value of 55 is observed.",
          quantityA: "The percentile rank of 55",
          quantityB: "5",
          correct: "B",
          steps: ["$z$ for 55: $(55-75)/10=-2$, so 55 sits at $\\mu-2\\sigma$.", "The tail below $\\mu-2\\sigma$ holds $(100-95)/2=2.5\\%$ of the data, so 55 is at the 2.5th percentile.", "Quantity A is 2.5, Quantity B is 5.", "Quantity B is greater."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A circle has radius 9. What is its circumference?",
          options: [ {key:"A", text:"$9\\pi$"}, {key:"B", text:"$18\\pi$"}, {key:"C", text:"$81\\pi$"}, {key:"D", text:"$27\\pi$"}, {key:"E", text:"$36\\pi$"} ],
          correct: "B",
          steps: ["$C = 2\\pi r = 2\\pi(9)$.", "$C = 18\\pi$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "A circle has area $64\\pi$. What is its radius?",
          options: [ {key:"A", text:"6"}, {key:"B", text:"7"}, {key:"C", text:"8"}, {key:"D", text:"9"}, {key:"E", text:"16"} ],
          correct: "C",
          steps: ["$A = \\pi r^2$, so $64\\pi = \\pi r^2$, giving $r^2=64$.", "$r = 8$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A circle has radius 12. What is the area of a sector with central angle 90°?",
          options: [ {key:"A", text:"$12\\pi$"}, {key:"B", text:"$18\\pi$"}, {key:"C", text:"$24\\pi$"}, {key:"D", text:"$36\\pi$"}, {key:"E", text:"$48\\pi$"} ],
          correct: "D",
          steps: ["Full circle area $= \\pi(12)^2 = 144\\pi$.", "Sector fraction $= 90/360 = 1/4$.", "Sector area $= 144\\pi/4 = 36\\pi$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "A circle has radius 15. What is the arc length subtended by a central angle of 120°?",
          options: [ {key:"A", text:"$5\\pi$"}, {key:"B", text:"$10\\pi$"}, {key:"C", text:"$15\\pi$"}, {key:"D", text:"$20\\pi$"}, {key:"E", text:"$30\\pi$"} ],
          correct: "B",
          steps: ["Circumference $= 2\\pi(15) = 30\\pi$.", "Arc fraction $= 120/360 = 1/3$.", "Arc length $= 30\\pi/3 = 10\\pi$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "A chord subtends a central angle of 80°. What is the measure of the inscribed angle that subtends the same arc?",
          options: [ {key:"A", text:"20°"}, {key:"B", text:"40°"}, {key:"C", text:"80°"}, {key:"D", text:"120°"}, {key:"E", text:"160°"} ],
          correct: "B",
          steps: ["An inscribed angle is always half the central angle subtending the same arc.", "$80° \\div 2 = 40°$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A circle has diameter 20. A radius is drawn to the point where a tangent line touches the circle. What is the angle between the radius and the tangent line?",
          options: [ {key:"A", text:"45°"}, {key:"B", text:"60°"}, {key:"C", text:"90°"}, {key:"D", text:"120°"}, {key:"E", text:"180°"} ],
          correct: "C",
          steps: ["A tangent line is always perpendicular to the radius drawn to the point of tangency.", "The angle is 90°."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "A triangle is inscribed in a circle such that one of its sides is a diameter of the circle. What must be the measure of the angle opposite that diameter?",
          options: [ {key:"A", text:"45°"}, {key:"B", text:"60°"}, {key:"C", text:"90°"}, {key:"D", text:"120°"}, {key:"E", text:"It cannot be determined"} ],
          correct: "C",
          steps: ["Any inscribed angle that subtends a diameter is exactly 90°.", "The angle opposite the diameter must be 90°."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A circle has circumference $22\\pi$. What is the area of the circle?",
          options: [ {key:"A", text:"$44\\pi$"}, {key:"B", text:"$110\\pi$"}, {key:"C", text:"$121\\pi$"}, {key:"D", text:"$242\\pi$"}, {key:"E", text:"$484\\pi$"} ],
          correct: "C",
          steps: ["$C=2\\pi r = 22\\pi$, so $r=11$.", "$A = \\pi r^2 = \\pi(11)^2 = 121\\pi$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A sector of a circle with radius 6 has area $6\\pi$. What is the measure of its central angle?",
          options: [ {key:"A", text:"30°"}, {key:"B", text:"45°"}, {key:"C", text:"60°"}, {key:"D", text:"90°"}, {key:"E", text:"120°"} ],
          correct: "C",
          steps: ["Full circle area $= \\pi(6)^2 = 36\\pi$.", "Sector fraction $= \\dfrac{6\\pi}{36\\pi} = \\dfrac16$.", "Central angle $= \\dfrac16 \\times 360° = 60°$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A circular track has radius 35 meters. Approximately how far does a runner travel after completing exactly half a lap? (Use $\\pi \\approx 22/7$.)",
          options: [ {key:"A", text:"55 m"}, {key:"B", text:"70 m"}, {key:"C", text:"110 m"}, {key:"D", text:"140 m"}, {key:"E", text:"220 m"} ],
          correct: "C",
          steps: ["Full circumference $= 2\\pi r = 2 \\times \\frac{22}{7} \\times 35 = 220$ m.", "Half a lap $= 220 \\div 2 = 110$ m."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A circle has radius 7. Using $\\pi \\approx 22/7$, what is the circumference of the circle?",
          correct: 44,
          steps: ["$C = 2\\pi r = 2 \\times \\frac{22}{7} \\times 7$.", "$= 2 \\times 22 = 44$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A circle has radius 10. What is its area, in terms of $\\pi$? Enter just the coefficient of $\\pi$.",
          correct: 100,
          steps: ["$A = \\pi r^2 = \\pi (10)^2 = 100\\pi$.", "The coefficient is 100."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A sector has a central angle of 45° in a circle of radius 8. What is the sector's area, in terms of $\\pi$? Enter just the coefficient of $\\pi$.",
          correct: 8,
          steps: ["Full circle area $= \\pi(8)^2 = 64\\pi$.", "Sector fraction $= 45/360 = 1/8$.", "Sector area $= 64\\pi/8 = 8\\pi$; coefficient is 8."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "An arc has length $5\\pi$ in a circle of radius 10. What is the central angle of the arc, in degrees?",
          correct: 90,
          steps: ["Circumference $= 2\\pi(10) = 20\\pi$.", "Arc fraction $= \\dfrac{5\\pi}{20\\pi} = \\dfrac14$.", "Central angle $= \\dfrac14 \\times 360° = 90°$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "An inscribed angle in a circle measures 35°. What is the measure, in degrees, of the central angle that subtends the same arc?",
          correct: 70,
          steps: ["A central angle is always double the inscribed angle subtending the same arc.", "$35° \\times 2 = 70°$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A circle has diameter 26. What is its radius?",
          correct: 13,
          steps: ["Radius is half the diameter.", "$26 \\div 2 = 13$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "Two circles have radii 4 and 12. What is the ratio of the area of the smaller circle to the area of the larger circle, expressed as a decimal?",
          correct: 0.1111,
          steps: ["Area ratio $= \\left(\\dfrac{4}{12}\\right)^2 = \\left(\\dfrac13\\right)^2 = \\dfrac19$.", "$1/9 \\approx 0.1111$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "A circle has area $49\\pi$. What is its circumference, in terms of $\\pi$? Enter just the coefficient of $\\pi$.",
          correct: 14,
          steps: ["$A=\\pi r^2=49\\pi$, so $r=7$.", "$C = 2\\pi r = 2\\pi(7) = 14\\pi$; coefficient is 14."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "A circle has radius 10. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The circumference is $20\\pi$."}, {key:"B", text:"The area is $100\\pi$."}, {key:"C", text:"A sector with central angle 36° has arc length $2\\pi$."}, {key:"D", text:"A sector with central angle 90° has area $25\\pi$."}, {key:"E", text:"The diameter is 5."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "A: $C=2\\pi(10)=20\\pi$, true.",
            "B: $A=\\pi(10)^2=100\\pi$, true.",
            "C: arc length $=\\frac{36}{360}\\times20\\pi=\\frac{1}{10}\\times20\\pi=2\\pi$, true.",
            "D: sector area $=\\frac{90}{360}\\times100\\pi=\\frac14\\times100\\pi=25\\pi$, true.",
            "E: diameter $=2\\times10=20 \\ne 5$, false."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "In a circle, a triangle is inscribed with one side as a diameter. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"The triangle is a right triangle."}, {key:"B", text:"The angle opposite the diameter is 90°."}, {key:"C", text:"The triangle is always isosceles."}, {key:"D", text:"The hypotenuse of the triangle equals the circle's diameter."}, {key:"E", text:"The triangle's area depends only on the circle's radius, not on the position of the third vertex."} ],
          correct: ["A", "B", "D"],
          steps: [
            "Since the diameter subtends the inscribed angle at the third vertex, that angle is 90° (A and B true).",
            "The side opposite the right angle, the diameter, is by definition the hypotenuse (D true).",
            "C is false: the two legs can have any lengths satisfying the Pythagorean relationship with the diameter, so the triangle need not be isosceles.",
            "E is false: the height from the third vertex to the diameter varies with the vertex's position, so the area varies too."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "Circle P has radius 6 and Circle Q has radius 9. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The ratio of their circumferences is $2:3$."}, {key:"B", text:"The ratio of their areas is $4:9$."}, {key:"C", text:"Circle Q's area is exactly 1.5 times Circle P's area."}, {key:"D", text:"Circle Q's circumference is exactly 1.5 times Circle P's circumference."}, {key:"E", text:"The ratio of their areas equals the ratio of their circumferences."} ],
          correct: ["A", "B", "D"],
          steps: [
            "A: circumference ratio $=6:9=2:3$, true.",
            "B: area ratio $=6^2:9^2=36:81=4:9$, true.",
            "C: area ratio $4:9$ means Circle Q's area is $9/4=2.25$ times Circle P's area, not 1.5, so C is false.",
            "D: circumference ratio is $9/6=1.5$, true.",
            "E: area ratio ($4/9\\approx0.44$) does not equal circumference ratio ($2/3\\approx0.67$), false."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following statements about a tangent line to a circle are true? Select all that apply.",
          options: [ {key:"A", text:"It intersects the circle at exactly one point."}, {key:"B", text:"It is perpendicular to the radius at the point of tangency."}, {key:"C", text:"It passes through the center of the circle."}, {key:"D", text:"Two tangent segments drawn from the same external point to a circle are equal in length."}, {key:"E", text:"It can intersect the circle at exactly two points."} ],
          correct: ["A", "B", "D"],
          steps: [
            "A and B are the defining properties of a tangent line, both true.",
            "C is false: a line through the center that touches the circle would be a secant (or diameter line), not a tangent, since it would intersect the circle twice.",
            "D is a standard theorem: tangent segments from an external point are congruent, true.",
            "E is false: by definition, a tangent touches the circle at exactly one point, not two."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "A circle has radius 20. Which of the following central angles produce a sector with arc length greater than $10\\pi$? Select all that apply.",
          options: [ {key:"A", text:"60°"}, {key:"B", text:"90°"}, {key:"C", text:"120°"}, {key:"D", text:"150°"}, {key:"E", text:"180°"} ],
          correct: ["C", "D", "E"],
          steps: [
            "Circumference $=2\\pi(20)=40\\pi$. Arc length $=\\frac{\\theta}{360}\\times40\\pi$.",
            "For arc length $>10\\pi$: $\\frac{\\theta}{360}\\times40\\pi>10\\pi \\Rightarrow \\frac{\\theta}{360}>\\frac14 \\Rightarrow \\theta>90°$.",
            "A (60°) and B (90°) do not exceed 90°, excluded. B at exactly 90° gives arc length exactly $10\\pi$, not greater, excluded.",
            "C (120°), D (150°), and E (180°) all exceed 90°, included."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "A circle is centered at point O with radius 5. Points A and B lie on the circle such that the central angle AOB is 100°. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"Any inscribed angle subtending arc AB (from the major arc side) measures 50°."}, {key:"B", text:"OA = OB = 5."}, {key:"C", text:"The minor arc AB is $\\frac{100}{360}$ of the circle's circumference."}, {key:"D", text:"Triangle OAB is equilateral."}, {key:"E", text:"Triangle OAB is isosceles."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A: the inscribed angle is always half the central angle subtending the same arc, so $100°/2=50°$, true.",
            "B: OA and OB are both radii of the circle, so both equal 5, true.",
            "C: the minor arc's fraction of the circle equals the central angle's fraction of 360°, true.",
            "D: for the triangle to be equilateral, all angles would need to be 60°, but the angle at O is 100°, so it cannot be equilateral, false.",
            "E: since OA = OB = 5, triangle OAB has two equal sides, making it isosceles, true."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A circle has radius 8.",
          quantityA: "The circumference of the circle",
          quantityB: "$8\\pi$",
          correct: "A",
          steps: ["$C = 2\\pi(8) = 16\\pi$.", "Quantity A is $16\\pi$, Quantity B is $8\\pi$.", "Quantity A is greater."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "A sector of a circle with radius 9 has a central angle of 40°.",
          quantityA: "The area of the sector",
          quantityB: "$9\\pi$",
          correct: "C",
          steps: ["Full circle area $=\\pi(9)^2=81\\pi$.", "Sector area $=\\frac{40}{360}\\times81\\pi=\\frac19\\times81\\pi=9\\pi$.", "Both quantities equal $9\\pi$."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "Circle A has radius 3. Circle B has radius 6.",
          quantityA: "The area of Circle B",
          quantityB: "Twice the area of Circle A",
          correct: "A",
          steps: ["Area of Circle A $=\\pi(3)^2=9\\pi$. Area of Circle B $=\\pi(6)^2=36\\pi$.", "Twice the area of Circle A $=2\\times9\\pi=18\\pi$.", "Quantity A ($36\\pi$) is greater than Quantity B ($18\\pi$), since doubling the radius quadruples the area, not just doubles it."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "An inscribed angle in a circle subtends an arc, and the corresponding central angle measures 130°.",
          quantityA: "The inscribed angle",
          quantityB: "60°",
          correct: "A",
          steps: ["Inscribed angle $=130°/2=65°$.", "Quantity A is 65°, Quantity B is 60°.", "Quantity A is greater."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "A circle has circumference $30\\pi$.",
          quantityA: "The radius of the circle",
          quantityB: "16",
          correct: "B",
          steps: ["$C=2\\pi r=30\\pi$, so $r=15$.", "Quantity A is 15, Quantity B is 16.", "Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A tangent line touches a circle of radius 5 at point T. Point O is the center. A point P lies on the tangent line such that OP = 13.",
          quantityA: "The distance PT",
          quantityB: "12",
          correct: "C",
          steps: ["Since OT is a radius drawn to the point of tangency, OT is perpendicular to the tangent line, making triangle OTP a right triangle with legs OT and PT and hypotenuse OP.", "$OT^2+PT^2=OP^2 \\Rightarrow 5^2+PT^2=13^2 \\Rightarrow 25+PT^2=169 \\Rightarrow PT^2=144$.", "$PT=12$.", "Both quantities equal 12."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "What is the sum of the interior angles of a pentagon (5 sides)?",
          options: [ {key:"A", text:"360°"}, {key:"B", text:"450°"}, {key:"C", text:"540°"}, {key:"D", text:"630°"}, {key:"E", text:"720°"} ],
          correct: "C",
          steps: ["Sum $=(n-2)\\times180° = (5-2)\\times180°$.", "$=3\\times180°=540°$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "What is the measure of each interior angle of a regular octagon (8 sides)?",
          options: [ {key:"A", text:"120°"}, {key:"B", text:"135°"}, {key:"C", text:"140°"}, {key:"D", text:"144°"}, {key:"E", text:"150°"} ],
          correct: "B",
          steps: ["Sum of interior angles $=(8-2)\\times180°=1080°$.", "Each angle $=1080°\\div8=135°$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A rhombus has diagonals of length 6 and 8. What is its area?",
          options: [ {key:"A", text:"14"}, {key:"B", text:"24"}, {key:"C", text:"28"}, {key:"D", text:"48"}, {key:"E", text:"56"} ],
          correct: "B",
          steps: ["Area of a rhombus $=\\frac12 d_1 d_2$.", "$\\frac12(6)(8)=24$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "A rectangle has length 12 and width 5. What is the length of its diagonal?",
          options: [ {key:"A", text:"11"}, {key:"B", text:"12"}, {key:"C", text:"13"}, {key:"D", text:"14"}, {key:"E", text:"17"} ],
          correct: "C",
          steps: ["The diagonal, length, and width form a right triangle.", "$d=\\sqrt{12^2+5^2}=\\sqrt{144+25}=\\sqrt{169}=13$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "A regular polygon has an interior angle of 150°. How many sides does it have?",
          options: [ {key:"A", text:"9"}, {key:"B", text:"10"}, {key:"C", text:"11"}, {key:"D", text:"12"}, {key:"E", text:"15"} ],
          correct: "D",
          steps: ["Each interior angle $=\\dfrac{(n-2)\\times180°}{n}=150°$.", "$180n-360=150n \\Rightarrow 30n=360 \\Rightarrow n=12$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A trapezoid has parallel sides (bases) of length 10 and 16, and a height of 7. What is its area?",
          options: [ {key:"A", text:"91"}, {key:"B", text:"98"}, {key:"C", text:"105"}, {key:"D", text:"112"}, {key:"E", text:"182"} ],
          correct: "A",
          steps: ["Area of a trapezoid $=\\frac12(b_1+b_2)\\times h$.", "$\\frac12(10+16)(7)=\\frac12(26)(7)=91$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "In parallelogram ABCD, angle A measures 65°. What is the measure of angle B?",
          options: [ {key:"A", text:"65°"}, {key:"B", text:"90°"}, {key:"C", text:"115°"}, {key:"D", text:"125°"}, {key:"E", text:"135°"} ],
          correct: "C",
          steps: ["Consecutive angles in a parallelogram are supplementary (they add to 180°).", "$\\angle B = 180° - 65° = 115°$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A square has a diagonal of length $10\\sqrt2$. What is the area of the square?",
          options: [ {key:"A", text:"50"}, {key:"B", text:"100"}, {key:"C", text:"140"}, {key:"D", text:"200"}, {key:"E", text:"400"} ],
          correct: "B",
          steps: ["A square's diagonal $= s\\sqrt2$, so $s\\sqrt2 = 10\\sqrt2$, giving $s=10$.", "Area $=s^2=10^2=100$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "The exterior angles of a regular polygon each measure 24°. How many sides does the polygon have?",
          options: [ {key:"A", text:"12"}, {key:"B", text:"15"}, {key:"C", text:"18"}, {key:"D", text:"20"}, {key:"E", text:"24"} ],
          correct: "B",
          steps: ["The exterior angles of any polygon sum to 360°, and for a regular polygon each equals $360°/n$.", "$360°/n = 24° \\Rightarrow n = 15$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A kite has one diagonal of length 14 and the other of length 9. What is its area?",
          options: [ {key:"A", text:"31.5"}, {key:"B", text:"52.5"}, {key:"C", text:"63"}, {key:"D", text:"94.5"}, {key:"E", text:"126"} ],
          correct: "C",
          steps: ["A kite's diagonals are perpendicular, so area $=\\frac12 d_1 d_2$ (same formula as a rhombus).", "$14\\times9=126$; half of that is $63$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "What is the sum, in degrees, of the interior angles of a decagon (10 sides)?",
          correct: 1440,
          steps: ["Sum $=(n-2)\\times180°=(10-2)\\times180°$.", "$=8\\times180°=1440°$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A regular polygon has an interior angle of 144°. How many sides does it have?",
          correct: 10,
          steps: ["$\\dfrac{(n-2)\\times180°}{n}=144°$.", "$180n-360=144n \\Rightarrow 36n=360 \\Rightarrow n=10$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A parallelogram has a base of 15 and a height of 8. What is its area?",
          correct: 120,
          steps: ["Area of a parallelogram $=\\text{base}\\times\\text{height}$.", "$15\\times8=120$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "A rhombus has a side length of 10 and one diagonal of length 12. What is the length of the other diagonal?",
          correct: 16,
          steps: ["The diagonals of a rhombus are perpendicular bisectors of each other, splitting it into 4 right triangles with legs $d_1/2$ and $d_2/2$ and hypotenuse equal to the side.", "$6^2 + (d_2/2)^2 = 10^2 \\Rightarrow 36+(d_2/2)^2=100 \\Rightarrow (d_2/2)^2=64 \\Rightarrow d_2/2=8$.", "$d_2=16$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A regular polygon has exterior angles measuring 18° each. How many sides does it have?",
          correct: 20,
          steps: ["$360°/n=18°$.", "$n=360/18=20$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A trapezoid has area 84, height 8, and one base of length 11. What is the length of the other base?",
          correct: 10,
          steps: ["Area $=\\frac12(b_1+b_2)h$, so $84=\\frac12(11+b_2)(8)$.", "$84 = 4(11+b_2) \\Rightarrow 21=11+b_2 \\Rightarrow b_2=10$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A regular hexagon has a side length of 6. Using the fact that a regular hexagon is composed of 6 equilateral triangles, what is the area of the hexagon? Round to the nearest whole number.",
          correct: 94,
          steps: ["Each equilateral triangle has side 6, area $=\\frac{\\sqrt3}{4}(6)^2=\\frac{\\sqrt3}{4}(36)=9\\sqrt3$.", "Total hexagon area $=6\\times9\\sqrt3=54\\sqrt3\\approx93.53$.", "Rounded to the nearest whole number, this is 94."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "The interior angles of a quadrilateral are $3x$, $4x$, $5x$, and $6x$ degrees. What is the value of $x$?",
          correct: 20,
          steps: ["The interior angles of any quadrilateral sum to $(4-2)\\times180°=360°$.", "$3x+4x+5x+6x=360 \\Rightarrow 18x=360 \\Rightarrow x=20$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following are true of every rectangle? Select all that apply.",
          options: [ {key:"A", text:"Opposite sides are equal and parallel."}, {key:"B", text:"All four angles are 90°."}, {key:"C", text:"The diagonals are equal in length."}, {key:"D", text:"All four sides are equal."}, {key:"E", text:"The diagonals are perpendicular."} ],
          correct: ["A", "B", "C"],
          steps: [
            "A, B, and C are defining/derived properties of every rectangle: it's a parallelogram (A) with right angles (B), and its diagonals are always congruent (C).",
            "D is false in general: a rectangle only has all sides equal if it's also a square.",
            "E is false in general: rectangle diagonals are only perpendicular if the rectangle is a square."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following are true of every rhombus? Select all that apply.",
          options: [ {key:"A", text:"All four sides are equal."}, {key:"B", text:"The diagonals bisect each other."}, {key:"C", text:"The diagonals are perpendicular."}, {key:"D", text:"All four angles are 90°."}, {key:"E", text:"Opposite angles are equal."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A rhombus is a parallelogram with all sides equal (A true), so it inherits the parallelogram properties of diagonals bisecting each other (B true) and opposite angles equal (E true).",
            "A rhombus's diagonals are always perpendicular (C true).",
            "D is false in general: a rhombus only has all right angles if it's also a square."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "A quadrilateral has interior angles 90°, 90°, 90°, and 90°. Which of the following could it be? Select all that apply.",
          options: [ {key:"A", text:"A square"}, {key:"B", text:"A rectangle that is not a square"}, {key:"C", text:"A rhombus that is not a square"}, {key:"D", text:"A trapezoid"}, {key:"E", text:"A parallelogram"} ],
          correct: ["A", "B", "E"],
          steps: [
            "All four angles being 90° means the shape is some kind of rectangle (which includes squares), so A and B are possible, and since every rectangle is a parallelogram, E is possible too.",
            "C is impossible: a rhombus with all 90° angles is by definition a square, so it cannot be 'not a square'.",
            "D is impossible: a trapezoid with all four angles equal to 90° would have two pairs of parallel sides, making it a rectangle, not a (non-parallelogram) trapezoid."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following regular polygons have an interior angle greater than 140°? Select all that apply.",
          options: [ {key:"A", text:"Regular hexagon (6 sides)"}, {key:"B", text:"Regular octagon (8 sides)"}, {key:"C", text:"Regular nonagon (9 sides)"}, {key:"D", text:"Regular decagon (10 sides)"}, {key:"E", text:"Regular dodecagon (12 sides)"} ],
          correct: ["D", "E"],
          steps: [
            "Interior angle formula: $\\dfrac{(n-2)\\times180°}{n}$.",
            "A (n=6): $(4\\times180)/6=120°$, not greater than 140°, excluded.",
            "B (n=8): $(6\\times180)/8=135°$, excluded.",
            "C (n=9): $(7\\times180)/9=140°$, exactly equal, not greater, excluded.",
            "D (n=10): $(8\\times180)/10=144°$, greater than 140°, included.",
            "E (n=12): $(10\\times180)/12=150°$, greater than 140°, included."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "A quadrilateral ABCD has AB parallel to CD, but AD is not parallel to BC, and AB ≠ CD. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"ABCD is a trapezoid."}, {key:"B", text:"ABCD is a parallelogram."}, {key:"C", text:"ABCD has exactly one pair of parallel sides."}, {key:"D", text:"ABCD is a rectangle."}, {key:"E", text:"The sum of ABCD's interior angles is 360°."} ],
          correct: ["A", "C", "E"],
          steps: [
            "Since exactly one pair of sides (AB and CD) is parallel, and the other pair is not, ABCD fits the definition of a trapezoid (A true) with exactly one pair of parallel sides (C true).",
            "B and D are false: a parallelogram (and rectangle, a special parallelogram) requires both pairs of opposite sides to be parallel, which is not the case here.",
            "E is true for every quadrilateral: interior angles always sum to $(4-2)\\times180°=360°$."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "A square has a side length of 8. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"Its area is 64."}, {key:"B", text:"Its perimeter is 32."}, {key:"C", text:"Its diagonal is $8\\sqrt2$."}, {key:"D", text:"Its diagonal is 16."}, {key:"E", text:"Each diagonal bisects a pair of opposite 90° angles into two 45° angles."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A: area $=8^2=64$, true.",
            "B: perimeter $=4\\times8=32$, true.",
            "C and D: diagonal $=s\\sqrt2=8\\sqrt2\\approx11.3$, so C is true and D (16) is false.",
            "E: a square's diagonal bisects each 90° corner angle into two 45° angles, true."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A regular polygon has 9 sides.",
          quantityA: "The measure of one interior angle",
          quantityB: "135°",
          correct: "A",
          steps: ["Interior angle $=\\dfrac{(9-2)\\times180°}{9}=\\dfrac{1260°}{9}=140°$.", "Quantity A is 140°, Quantity B is 135°.", "Quantity A is greater."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "A rectangle has length 16 and width 12.",
          quantityA: "The length of the diagonal",
          quantityB: "The perimeter divided by 2.8",
          correct: "C",
          steps: ["Diagonal $=\\sqrt{16^2+12^2}=\\sqrt{256+144}=\\sqrt{400}=20$.", "Perimeter $=2(16+12)=56$; $56/2.8=20$.", "Both quantities equal 20."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A parallelogram has base 10 and height 6. A trapezoid has bases 8 and 12, and height 6.",
          quantityA: "The area of the parallelogram",
          quantityB: "The area of the trapezoid",
          correct: "C",
          steps: ["Parallelogram area $=10\\times6=60$.", "Trapezoid area $=\\frac12(8+12)(6)=\\frac12(20)(6)=60$.", "Both quantities equal 60."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "Quadrilateral WXYZ has interior angles measuring $x$, $x+10$, $x+20$, and $x+30$ degrees.",
          quantityA: "$x$",
          quantityB: "75°",
          correct: "C",
          steps: ["The four angles sum to 360°: $x+(x+10)+(x+20)+(x+30)=360$.", "$4x+60=360 \\Rightarrow 4x=300 \\Rightarrow x=75$.", "Both quantities equal 75°."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "A rhombus has diagonals of length 10 and 24.",
          quantityA: "The side length of the rhombus",
          quantityB: "14",
          correct: "B",
          steps: ["The diagonals bisect each other at right angles, forming right triangles with legs 5 and 12.", "Side $=\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$.", "Quantity A is 13, Quantity B is 14.", "Quantity B is greater."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A regular polygon has an exterior angle of 40°.",
          quantityA: "The number of sides of the polygon",
          quantityB: "10",
          correct: "B",
          steps: ["Number of sides $=360°/40°=9$.", "Quantity A is 9, Quantity B is 10.", "Quantity B is greater."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "What is the volume of a cylinder with radius 4 and height 7?",
          options: [ {key:"A", text:"$56\\pi$"}, {key:"B", text:"$84\\pi$"}, {key:"C", text:"$112\\pi$"}, {key:"D", text:"$128\\pi$"}, {key:"E", text:"$196\\pi$"} ],
          correct: "C",
          steps: ["$V = \\pi r^2 h = \\pi(4)^2(7) = \\pi(16)(7)$.", "$16 \\times 7 = 112$, so $V = 112\\pi$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "A cube has a side length of 6. What is its surface area?",
          options: [ {key:"A", text:"36"}, {key:"B", text:"144"}, {key:"C", text:"180"}, {key:"D", text:"216"}, {key:"E", text:"324"} ],
          correct: "D",
          steps: ["Surface area of a cube $= 6s^2$.", "$6(6)^2 = 6(36) = 216$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "What is the volume of a sphere with radius 6?",
          options: [ {key:"A", text:"$72\\pi$"}, {key:"B", text:"$144\\pi$"}, {key:"C", text:"$216\\pi$"}, {key:"D", text:"$288\\pi$"}, {key:"E", text:"$864\\pi$"} ],
          correct: "D",
          steps: ["$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(6)^3 = \\frac{4}{3}\\pi(216)$.", "$\\frac{4}{3} \\times 216 = 288$, so $V = 288\\pi$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "A rectangular solid has dimensions 5 by 4 by 3. What is its volume?",
          options: [ {key:"A", text:"12"}, {key:"B", text:"47"}, {key:"C", text:"60"}, {key:"D", text:"94"}, {key:"E", text:"120"} ],
          correct: "C",
          steps: ["Volume $= l \\times w \\times h = 5 \\times 4 \\times 3$.", "$5 \\times 4 \\times 3 = 60$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "What is the surface area of a cylinder with radius 2 and height 9?",
          options: [ {key:"A", text:"$22\\pi$"}, {key:"B", text:"$36\\pi$"}, {key:"C", text:"$40\\pi$"}, {key:"D", text:"$44\\pi$"}, {key:"E", text:"$72\\pi$"} ],
          correct: "D",
          steps: ["Surface area $= 2\\pi r^2 + 2\\pi rh = 2\\pi(2)^2 + 2\\pi(2)(9)$.", "$2\\pi(4) = 8\\pi$, and $2\\pi(2)(9) = 36\\pi$.", "$8\\pi + 36\\pi = 44\\pi$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A cube has a surface area of 150. What is its volume?",
          options: [ {key:"A", text:"25"}, {key:"B", text:"50"}, {key:"C", text:"75"}, {key:"D", text:"100"}, {key:"E", text:"125"} ],
          correct: "E",
          steps: ["Surface area $= 6s^2 = 150$, so $s^2 = 25$ and $s = 5$.", "Volume $= s^3 = 5^3 = 125$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "What is the surface area of a sphere with radius 5?",
          options: [ {key:"A", text:"$25\\pi$"}, {key:"B", text:"$50\\pi$"}, {key:"C", text:"$100\\pi$"}, {key:"D", text:"$125\\pi$"}, {key:"E", text:"$\\frac{500}{3}\\pi$"} ],
          correct: "C",
          steps: ["Surface area $= 4\\pi r^2 = 4\\pi(5)^2 = 4\\pi(25)$.", "$4 \\times 25 = 100$, so surface area $= 100\\pi$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A rectangular solid has dimensions 6 by 5 by 4. What is its surface area?",
          options: [ {key:"A", text:"74"}, {key:"B", text:"120"}, {key:"C", text:"148"}, {key:"D", text:"152"}, {key:"E", text:"296"} ],
          correct: "C",
          steps: ["Surface area $= 2(lw + lh + wh) = 2(6\\cdot5 + 6\\cdot4 + 5\\cdot4)$.", "$6\\cdot5=30$, $6\\cdot4=24$, $5\\cdot4=20$, and $30+24+20=74$.", "$2 \\times 74 = 148$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A cylinder has a diameter of 10 and a height of 6. What is its volume?",
          options: [ {key:"A", text:"$60\\pi$"}, {key:"B", text:"$100\\pi$"}, {key:"C", text:"$150\\pi$"}, {key:"D", text:"$200\\pi$"}, {key:"E", text:"$600\\pi$"} ],
          correct: "C",
          steps: ["Diameter 10 means radius $r = 5$.", "$V = \\pi r^2 h = \\pi(5)^2(6) = \\pi(25)(6)$.", "$25 \\times 6 = 150$, so $V = 150\\pi$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A sphere has its radius doubled. By what factor does its volume increase?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"4"}, {key:"C", text:"6"}, {key:"D", text:"8"}, {key:"E", text:"16"} ],
          correct: "D",
          steps: ["Volume depends on $r^3$: $V = \\frac{4}{3}\\pi r^3$.", "Doubling $r$ scales the volume by $2^3 = 8$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A cube has a volume of 343. What is its surface area?",
          correct: 294,
          steps: ["$s^3 = 343$, so $s = 7$ (since $7^3 = 343$).", "Surface area $= 6s^2 = 6(49) = 294$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "A cylinder has a volume of $200\\pi$ and a radius of 5. What is its height?",
          correct: 8,
          steps: ["$V = \\pi r^2 h$, so $200\\pi = \\pi(25)h$.", "$200 = 25h$, so $h = 8$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A sphere has a volume of $36\\pi$. What is its radius?",
          correct: 3,
          steps: ["$\\frac{4}{3}\\pi r^3 = 36\\pi$, so $\\frac{4}{3}r^3 = 36$.", "$r^3 = 36 \\times \\frac{3}{4} = 27$, so $r = 3$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "A rectangular solid has a volume of 120. Its length is 6 and its width is 5. What is its height?",
          correct: 4,
          steps: ["$V = lwh$, so $120 = 6 \\times 5 \\times h = 30h$.", "$h = 120 \\div 30 = 4$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A cube has a surface area of 96. What is its volume?",
          correct: 64,
          steps: ["$6s^2 = 96$, so $s^2 = 16$ and $s = 4$.", "Volume $= s^3 = 4^3 = 64$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A cylinder has radius 3 and height 5. Its surface area equals $k\\pi$ for some number $k$. What is $k$?",
          correct: 48,
          steps: ["Surface area $= 2\\pi r^2 + 2\\pi rh = 2\\pi(9) + 2\\pi(3)(5) = 18\\pi + 30\\pi = 48\\pi$.", "So $k = 48$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A sphere has a surface area of $144\\pi$. Its volume equals $m\\pi$ for some number $m$. What is $m$?",
          correct: 288,
          steps: ["$4\\pi r^2 = 144\\pi$, so $r^2 = 36$ and $r = 6$.", "Volume $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(216) = 288\\pi$.", "So $m = 288$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "Two cubes have side lengths 2 and 4. What is the ratio of the larger cube's volume to the smaller cube's volume?",
          correct: 8,
          steps: ["Larger cube's volume $= 4^3 = 64$. Smaller cube's volume $= 2^3 = 8$.", "$64 \\div 8 = 8$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following sets of dimensions describe a rectangular solid with volume 60? Select all that apply.",
          options: [ {key:"A", text:"3 by 4 by 5"}, {key:"B", text:"2 by 5 by 6"}, {key:"C", text:"1 by 6 by 10"}, {key:"D", text:"2 by 3 by 9"}, {key:"E", text:"4 by 3 by 4"} ],
          correct: ["A", "B", "C"],
          steps: [
            "Volume $= l \\times w \\times h$ for each option.",
            "A: $3\\times4\\times5=60$, valid. B: $2\\times5\\times6=60$, valid. C: $1\\times6\\times10=60$, valid.",
            "D: $2\\times3\\times9=54$, not 60. E: $4\\times3\\times4=48$, not 60.",
            "Valid sets: A, B, and C."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A sphere has radius 4. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The surface area is $64\\pi$."}, {key:"B", text:"The volume is $\\frac{256}{3}\\pi$."}, {key:"C", text:"The volume is greater than the surface area's numeric coefficient (i.e., $\\frac{256}{3} > 64$)."}, {key:"D", text:"Doubling the radius would multiply the surface area by 4."}, {key:"E", text:"Doubling the radius would multiply the volume by 4."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Surface area $= 4\\pi r^2 = 4\\pi(16) = 64\\pi$ (A true).",
            "Volume $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(64) = \\frac{256}{3}\\pi$ (B true).",
            "$\\frac{256}{3} \\approx 85.3$, which is greater than 64 (C true).",
            "Surface area scales with $r^2$, so doubling $r$ multiplies it by $2^2=4$ (D true).",
            "Volume scales with $r^3$, so doubling $r$ multiplies it by $2^3=8$, not 4 (E false)."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "A cylinder has radius 5 and height 8. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"The volume is $200\\pi$."}, {key:"B", text:"The surface area is $130\\pi$."}, {key:"C", text:"The surface area is $260\\pi$."}, {key:"D", text:"If the radius were doubled and the height kept the same, the volume would quadruple."}, {key:"E", text:"If the height were doubled and the radius kept the same, the volume would double."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "Volume $= \\pi r^2 h = \\pi(25)(8) = 200\\pi$ (A true).",
            "Surface area $= 2\\pi r^2 + 2\\pi rh = 2\\pi(25) + 2\\pi(5)(8) = 50\\pi + 80\\pi = 130\\pi$ (B true, C false).",
            "Volume $\\propto r^2$ when height is fixed, so doubling $r$ multiplies volume by $2^2=4$ (D true).",
            "Volume $\\propto h$ when radius is fixed, so doubling $h$ multiplies volume by 2 (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following changes to a cube of side $s$ would double its volume? Select all that apply.",
          options: [ {key:"A", text:"Multiplying the side length by $\\sqrt[3]{2}$."}, {key:"B", text:"Multiplying the side length by 2."}, {key:"C", text:"Multiplying the side length by $\\sqrt2$."}, {key:"D", text:"Keeping it a cube but multiplying the volume formula's exponent by 2 (not a real geometric operation, just a distractor)."}, {key:"E", text:"Replacing the cube with a rectangular box of dimensions $s$, $s$, and $2s$."} ],
          correct: ["A", "E"],
          steps: [
            "Original volume is $s^3$. We want a new volume of $2s^3$.",
            "A: new side $s\\sqrt[3]{2}$ gives volume $(s\\sqrt[3]{2})^3 = s^3 \\cdot 2 = 2s^3$, valid.",
            "B: multiplying side by 2 gives volume $(2s)^3 = 8s^3$, not double.",
            "C: multiplying side by $\\sqrt2$ gives volume $(s\\sqrt2)^3 = s^3 \\cdot 2\\sqrt2 \\approx 2.83s^3$, not exactly double.",
            "D is not a valid geometric operation.",
            "E: a box $s \\times s \\times 2s$ has volume $2s^3$, exactly double, valid."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Which of the following are true about the relationship between a sphere and a cube? Select all that apply.",
          options: [ {key:"A", text:"A sphere of radius 3 has a smaller volume than a cube of side 5 (volume 125)."}, {key:"B", text:"A sphere of radius 3 has volume $36\\pi$, which is approximately 113.1."}, {key:"C", text:"A cube of side 6 (volume 216) has a smaller volume than a sphere of radius 4 (volume $\\frac{256}{3}\\pi \\approx 268.1$)."}, {key:"D", text:"A cube and a sphere can never have exactly equal volumes for any positive real side length and radius."}, {key:"E", text:"Both a cube's volume and a sphere's volume grow with the cube of their respective linear dimension (side or radius)."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Sphere $r=3$: $V = \\frac{4}{3}\\pi(27) = 36\\pi \\approx 113.1$ (B true), which is less than cube side-5 volume $125$ (A true).",
            "Cube side 6: $V = 216$. Sphere $r=4$: $V = \\frac{4}{3}\\pi(64) = \\frac{256}{3}\\pi \\approx 268.1$, so $216 < 268.1$ (C true).",
            "D is false: for any cube volume, you can always solve $\\frac{4}{3}\\pi r^3 = s^3$ for a matching positive $r$, so equal volumes are always achievable.",
            "Both volume formulas ($s^3$ and $\\frac{4}{3}\\pi r^3$) scale with the cube of the linear measurement (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "A rectangular solid has length 8, width 4, and height 2. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"Its volume is 64."}, {key:"B", text:"Its surface area is 112."}, {key:"C", text:"A cube with the same volume would have side length 4."}, {key:"D", text:"A cube with the same volume would have a smaller surface area than this solid."}, {key:"E", text:"Its surface area is 96."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Volume $= 8\\times4\\times2 = 64$ (A true).",
            "Surface area $= 2(lw+lh+wh) = 2(32+16+8) = 2(56) = 112$ (B true, E false).",
            "A cube with volume 64 has side $s=4$ since $4^3=64$ (C true), with surface area $6(16)=96$.",
            "$96 < 112$, so the cube has smaller surface area than the rectangular solid for the same volume (D true, this is the isoperimetric-type principle that a cube minimizes surface area for a given volume among rectangular solids)."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A cylinder has radius 3 and height 8.",
          quantityA: "The cylinder's volume",
          quantityB: "$225$",
          correct: "A",
          steps: ["Volume $= \\pi r^2 h = \\pi(9)(8) = 72\\pi$.", "$72\\pi \\approx 72 \\times 3.14159 \\approx 226.2$.", "Quantity A ($\\approx226.2$) is greater than Quantity B (225)."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "A sphere with radius 3 is placed inside a cylinder that exactly contains it (the cylinder has radius 3 and height 6, equal to the sphere's diameter).",
          quantityA: "The sphere's volume",
          quantityB: "The cylinder's volume",
          correct: "B",
          steps: ["Sphere volume $= \\frac{4}{3}\\pi(3)^3 = \\frac{4}{3}\\pi(27) = 36\\pi$.", "Cylinder volume $= \\pi(3)^2(6) = \\pi(9)(6) = 54\\pi$.", "Quantity A ($36\\pi$) is less than Quantity B ($54\\pi$)."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A cube has volume 64. A rectangular solid with dimensions 2 by 4 by 8 also has volume 64.",
          quantityA: "The cube's surface area",
          quantityB: "The rectangular solid's surface area",
          correct: "B",
          steps: ["Cube: $s^3=64$, so $s=4$, and surface area $=6(16)=96$.", "Rectangular solid: surface area $= 2(2\\cdot4+2\\cdot8+4\\cdot8) = 2(8+16+32) = 2(56) = 112$.", "Quantity A (96) is less than Quantity B (112)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "Sphere 1 has radius 2. Sphere 2 has radius 4.",
          quantityA: "The ratio of Sphere 2's surface area to Sphere 1's surface area",
          quantityB: "The ratio of Sphere 2's volume to Sphere 1's volume",
          correct: "B",
          steps: ["Surface area ratio scales with $r^2$: $(4/2)^2 = 4$.", "Volume ratio scales with $r^3$: $(4/2)^3 = 8$.", "Quantity A (4) is less than Quantity B (8)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "A cylinder has height equal to its radius, $r = 6$. A sphere has the same radius, 6.",
          quantityA: "The cylinder's volume",
          quantityB: "The sphere's volume",
          correct: "B",
          steps: ["Cylinder volume $= \\pi r^2 h = \\pi(36)(6) = 216\\pi$.", "Sphere volume $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(216) = 288\\pi$.", "Quantity A ($216\\pi$) is less than Quantity B ($288\\pi$)."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A rectangular solid has integer dimensions and a volume of 36.",
          quantityA: "The greatest possible surface area of such a solid",
          quantityB: "The least possible surface area of such a solid",
          correct: "A",
          steps: ["To maximize surface area with fixed volume, make the solid as 'thin' as possible: $1\\times1\\times36$ gives surface area $2(1+36+36)=2(73)=146$.", "To minimize surface area, make it as close to a cube as possible: $3\\times3\\times4$ gives surface area $2(9+12+12)=2(33)=66$.", "Quantity A (146) is greater than Quantity B (66)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "From external point P, a tangent segment PT has length 15. A secant from P intersects the circle first at B, with PB = 9, and then at C. What is PC?",
          options: [ {key:"A", text:"18"}, {key:"B", text:"20"}, {key:"C", text:"24"}, {key:"D", text:"25"}, {key:"E", text:"27"} ],
          correct: "D",
          steps: ["By the tangent-secant relationship, $PT^2 = PB \\cdot PC$.", "$15^2 = 9 \\cdot PC$, so $225 = 9 \\cdot PC$.", "$PC = 25$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "From external point P, one secant hits the circle at A (near) and B (far), with PA = 6 and PB = 14. A second secant hits the circle at C (near), with PC = 8. What is PD, the far intersection of the second secant?",
          options: [ {key:"A", text:"9"}, {key:"B", text:"9.5"}, {key:"C", text:"10"}, {key:"D", text:"10.5"}, {key:"E", text:"11"} ],
          correct: "D",
          steps: ["By the secant-secant relationship, $PA \\cdot PB = PC \\cdot PD$.", "$6 \\times 14 = 84$, so $8 \\cdot PD = 84$.", "$PD = 84 \\div 8 = 10.5$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A central angle in a circle measures 100°. What is the measure of an inscribed angle that subtends the same arc?",
          options: [ {key:"A", text:"25°"}, {key:"B", text:"40°"}, {key:"C", text:"50°"}, {key:"D", text:"80°"}, {key:"E", text:"100°"} ],
          correct: "C",
          steps: ["An inscribed angle is always half the central angle subtending the same arc.", "$100° \\div 2 = 50°$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "From external point P, two tangent segments touch a circle at A and B, with PA = 3x - 2 and PB = x + 8. What is PA?",
          options: [ {key:"A", text:"9"}, {key:"B", text:"11"}, {key:"C", text:"13"}, {key:"D", text:"15"}, {key:"E", text:"17"} ],
          correct: "C",
          steps: ["Two tangent segments from the same external point are equal in length, so $3x-2 = x+8$.", "$2x = 10$, so $x = 5$.", "$PA = 3(5) - 2 = 13$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "Triangle XYZ is inscribed in a circle with side XZ as a diameter. Angle X measures 40°. What is the measure of angle Z?",
          options: [ {key:"A", text:"40°"}, {key:"B", text:"45°"}, {key:"C", text:"50°"}, {key:"D", text:"60°"}, {key:"E", text:"90°"} ],
          correct: "C",
          steps: ["Since XZ is a diameter, the inscribed angle Y subtending it is 90°.", "The angles of the triangle sum to 180°, so $\\angle X + \\angle Y + \\angle Z = 180°$.", "$40° + 90° + \\angle Z = 180°$, so $\\angle Z = 50°$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A tangent and a chord meet at the point of tangency, forming an angle of 50°. By the alternate segment theorem, what is the measure of the inscribed angle in the alternate segment that subtends the same chord?",
          options: [ {key:"A", text:"25°"}, {key:"B", text:"40°"}, {key:"C", text:"50°"}, {key:"D", text:"100°"}, {key:"E", text:"130°"} ],
          correct: "C",
          steps: ["The alternate segment theorem states the tangent-chord angle equals the inscribed angle in the alternate segment.", "The inscribed angle equals 50°."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "An inscribed angle in a circle measures 42°. What is the measure of the central angle subtending the same arc?",
          options: [ {key:"A", text:"21°"}, {key:"B", text:"42°"}, {key:"C", text:"63°"}, {key:"D", text:"84°"}, {key:"E", text:"96°"} ],
          correct: "D",
          steps: ["A central angle is always twice the inscribed angle subtending the same arc.", "$42° \\times 2 = 84°$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "From external point P, two tangent segments PA and PB touch a circle at A and B. The angle between the two tangents at P measures 50°. Since a radius is always perpendicular to a tangent at the point of tangency, what is the measure of the angle AOB at the center O?",
          options: [ {key:"A", text:"50°"}, {key:"B", text:"90°"}, {key:"C", text:"100°"}, {key:"D", text:"130°"}, {key:"E", text:"140°"} ],
          correct: "D",
          steps: ["Quadrilateral OAPB has angles at A and B each equal to 90° (radius perpendicular to tangent).", "The four angles of a quadrilateral sum to 360°: $90° + 90° + 50° + \\angle O = 360°$.", "$\\angle O = 360° - 230° = 130°$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "From external point P, a tangent segment PT has length 8. A secant from P passes through the circle, hitting it first at B and then at C, with PC = 16. What is the length of chord BC (the part of the secant inside the circle)?",
          options: [ {key:"A", text:"8"}, {key:"B", text:"10"}, {key:"C", text:"12"}, {key:"D", text:"14"}, {key:"E", text:"16"} ],
          correct: "C",
          steps: ["By the tangent-secant relationship, $PT^2 = PB \\cdot PC$.", "$8^2 = PB \\cdot 16$, so $64 = 16 \\cdot PB$, giving $PB = 4$.", "$BC = PC - PB = 16 - 4 = 12$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "From external point P, one secant hits the circle at A (near) then B (far), with PA = 5 and AB = 7. A second secant hits the circle at C (near), with PC = 6. What is the length of CD, the chord of the second secant inside the circle?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"3"}, {key:"C", text:"4"}, {key:"D", text:"5"}, {key:"E", text:"6"} ],
          correct: "C",
          steps: ["$PB = PA + AB = 5 + 7 = 12$.", "By the secant-secant relationship, $PA \\cdot PB = PC \\cdot PD$, so $5 \\times 12 = 6 \\cdot PD$.", "$60 = 6 \\cdot PD$, so $PD = 10$.", "$CD = PD - PC = 10 - 6 = 4$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "From external point P, a secant hits a circle first at B (PB = 6) then at C (PC = 24). A tangent segment from P has length PT. What is PT?",
          correct: 12,
          steps: ["By the tangent-secant relationship, $PT^2 = PB \\cdot PC = 6 \\times 24 = 144$.", "$PT = \\sqrt{144} = 12$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "From external point P, one secant hits a circle at A (PA = 4) then B (PB = 10). A second secant hits it at C (PC = 5) then D. What is PD?",
          correct: 8,
          steps: ["By the secant-secant relationship, $PA \\cdot PB = PC \\cdot PD$.", "$4 \\times 10 = 40$, so $5 \\cdot PD = 40$, giving $PD = 8$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A central angle in a circle measures 130°. What is the measure, in degrees, of an inscribed angle subtending the same arc?",
          correct: 65,
          steps: ["Inscribed angle = central angle $\\div 2$.", "$130° \\div 2 = 65°$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "An inscribed angle in a circle measures 55°. What is the measure, in degrees, of the central angle subtending the same arc?",
          correct: 110,
          steps: ["Central angle = inscribed angle $\\times 2$.", "$55° \\times 2 = 110°$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "From external point P, two tangent segments touch a circle at A and B, with PA = 2x + 3 and PB = 4x - 5. What is the value of PA?",
          correct: 11,
          steps: ["Two tangent segments from the same point are equal: $2x + 3 = 4x - 5$.", "$8 = 2x$, so $x = 4$.", "$PA = 2(4) + 3 = 11$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "From external point P, a tangent segment PT has length 9. A secant from P hits the circle first at B then at C, with PC = 27. What is PB?",
          correct: 3,
          steps: ["$PT^2 = PB \\cdot PC$, so $9^2 = PB \\times 27$.", "$81 = 27 \\cdot PB$, so $PB = 3$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A tangent and a chord meet at the point of tangency, forming a 63° angle. By the alternate segment theorem, the inscribed angle in the alternate segment equals 63°. What is the measure, in degrees, of the central angle subtending that same chord?",
          correct: 126,
          steps: ["The inscribed angle in the alternate segment equals the tangent-chord angle, 63°, by the alternate segment theorem.", "The central angle subtending the same arc is twice the inscribed angle: $63° \\times 2 = 126°$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "From external point P, one secant hits a circle at A (PA = 3) then B, with AB = 9. A second secant hits it at C (PC = 4) then D. What is the length of CD?",
          correct: 5,
          steps: ["$PB = PA + AB = 3 + 9 = 12$.", "By the secant-secant relationship, $PA \\cdot PB = PC \\cdot PD$: $3 \\times 12 = 36 = 4 \\cdot PD$, so $PD = 9$.", "$CD = PD - PC = 9 - 4 = 5$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following are true statements about tangent lines to a circle? Select all that apply.",
          options: [ {key:"A", text:"A tangent line touches the circle at exactly one point."}, {key:"B", text:"A tangent line is always perpendicular to the radius drawn to the point of tangency."}, {key:"C", text:"Two tangent segments drawn from the same external point are always equal in length."}, {key:"D", text:"A tangent line can intersect a circle at exactly two points."}, {key:"E", text:"The segment from an external point to the center of the circle bisects the angle between the two tangent segments from that point."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "By definition, a tangent touches a circle at exactly one point (A true) and is perpendicular to the radius at that point (B true).",
            "Two tangent segments from the same external point are always equal in length (C true), a direct consequence of congruent right triangles formed with the radii.",
            "D is false: that would make it a secant, not a tangent, by definition.",
            "E is a standard property: the line from the external point to the center bisects the angle formed by the two tangents (true)."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A central angle in a circle measures 80°. Which of the following are true? Select all that apply.",
          options: [ {key:"A", text:"An inscribed angle subtending the same arc measures 40°."}, {key:"B", text:"An inscribed angle subtending the same arc measures 160°."}, {key:"C", text:"Two different inscribed angles subtending this same arc from the same side must be equal to each other."}, {key:"D", text:"An inscribed angle subtending the same arc could measure anywhere from 0° to 80°, depending on where the vertex is placed."}, {key:"E", text:"If the arc were instead a semicircle (central angle 180°), the inscribed angle would be 90°."} ],
          correct: ["A", "C", "E"],
          steps: [
            "Inscribed angle $= 80° \\div 2 = 40°$ (A true, B false).",
            "All inscribed angles subtending the same arc from the same side are equal, since they're each half of the same central angle (C true, D false, the inscribed angle is fixed at 40° regardless of where the vertex sits on the major arc).",
            "For a semicircle, central angle is 180°, so inscribed angle is $180° \\div 2 = 90°$ (E true)."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "For each of the following, PT is a tangent segment and PB, PC are the near and far distances along a secant from the same external point P. Which satisfy the tangent-secant relationship $PT^2 = PB \\cdot PC$? Select all that apply.",
          options: [ {key:"A", text:"PT = 10, PB = 5, PC = 20"}, {key:"B", text:"PT = 12, PB = 6, PC = 22"}, {key:"C", text:"PT = 9, PB = 3, PC = 27"}, {key:"D", text:"PT = 15, PB = 9, PC = 25"}, {key:"E", text:"PT = 8, PB = 4, PC = 15"} ],
          correct: ["A", "C", "D"],
          steps: [
            "Check whether $PT^2 = PB \\cdot PC$ for each.",
            "A: $10^2=100$, $5\\times20=100$, valid. B: $12^2=144$, $6\\times22=132$, invalid.",
            "C: $9^2=81$, $3\\times27=81$, valid. D: $15^2=225$, $9\\times25=225$, valid.",
            "E: $8^2=64$, $4\\times15=60$, invalid.",
            "Valid: A, C, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "For each of the following, two secants from the same external point P have near/far distances (PA, PB) and (PC, PD). Which satisfy the secant-secant relationship $PA \\cdot PB = PC \\cdot PD$? Select all that apply.",
          options: [ {key:"A", text:"PA=4, PB=9, PC=3, PD=12"}, {key:"B", text:"PA=5, PB=8, PC=4, PD=11"}, {key:"C", text:"PA=3, PB=16, PC=6, PD=8"}, {key:"D", text:"PA=2, PB=15, PC=5, PD=7"}, {key:"E", text:"PA=5, PB=20, PC=4, PD=25"} ],
          correct: ["A", "C", "E"],
          steps: [
            "Check whether $PA \\cdot PB = PC \\cdot PD$ for each.",
            "A: $4\\times9=36$, $3\\times12=36$, valid. B: $5\\times8=40$, $4\\times11=44$, invalid.",
            "C: $3\\times16=48$, $6\\times8=48$, valid. D: $2\\times15=30$, $5\\times7=35$, invalid.",
            "E: $5\\times20=100$, $4\\times25=100$, valid.",
            "Valid: A, C, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "Triangle ABC is inscribed in a circle with AC as a diameter. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"Angle B is 90°."}, {key:"B", text:"Angle A plus angle C equals 90°."}, {key:"C", text:"Triangle ABC is a right triangle."}, {key:"D", text:"AC is the longest side of the triangle."}, {key:"E", text:"Angle B could be acute or obtuse depending on where B is on the circle."} ],
          correct: ["A", "B", "C", "D"],
          steps: [
            "Since AC is a diameter, any inscribed angle B subtending it is 90° (A true, C true).",
            "Since the triangle's angles sum to 180° and $\\angle B = 90°$, $\\angle A + \\angle C = 90°$ (B true).",
            "In a right triangle, the hypotenuse (here AC, opposite the right angle) is always the longest side (D true).",
            "E is false: angle B is always exactly 90° regardless of where B sits on the circle, as long as AC remains the diameter."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "A tangent and a chord meet at a point of tangency T, and the tangent-chord angle measures 72°. Which of the following are true, by the alternate segment theorem and related circle facts? Select all that apply.",
          options: [ {key:"A", text:"The inscribed angle in the alternate segment subtending the same chord is 72°."}, {key:"B", text:"The central angle subtending that same chord (on the side of the alternate segment) is 144°."}, {key:"C", text:"The inscribed angle in the alternate segment is 36°."}, {key:"D", text:"If the tangent-chord angle were instead 90°, the chord would have to be a diameter."}, {key:"E", text:"The tangent-chord angle always equals half the arc it cuts off, on the far side."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "By the alternate segment theorem, the tangent-chord angle equals the inscribed angle in the alternate segment: both are 72° (A true, C false).",
            "The central angle is twice any inscribed angle subtending the same arc: $72° \\times 2 = 144°$ (B true).",
            "If the tangent-chord angle is 90°, the arc it cuts off is $180°$, meaning the chord spans a semicircle, so it must be a diameter (D true).",
            "This is exactly the content of the alternate segment theorem: the tangent-chord angle equals half the intercepted arc (E true)."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A central angle in a circle measures 96°.",
          quantityA: "An inscribed angle subtending the same arc",
          quantityB: "48°",
          correct: "C",
          steps: ["Inscribed angle $= 96° \\div 2 = 48°$.", "Both quantities equal 48°."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "From external point P, two tangent segments PA and PB touch a circle at points A and B.",
          quantityA: "PA",
          quantityB: "PB",
          correct: "C",
          steps: ["Two tangent segments from the same external point to a circle are always equal in length.", "$PA = PB$, so the two quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "From external point P, a tangent segment has length 6. A secant from P hits the circle first at B, with PB = 4, then at C.",
          quantityA: "PC",
          quantityB: "9",
          correct: "C",
          steps: ["$PT^2 = PB \\cdot PC$: $6^2 = 4 \\cdot PC$, so $36 = 4 \\cdot PC$.", "$PC = 9$.", "Both quantities equal 9."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "From external point P, one secant hits a circle at A (PA = 5) then B (PB = 9). A second secant hits it at C then D (PD = 15).",
          quantityA: "PC",
          quantityB: "4",
          correct: "B",
          steps: ["$PA \\cdot PB = PC \\cdot PD$: $5 \\times 9 = 45 = PC \\times 15$.", "$PC = 45 \\div 15 = 3$.", "Quantity A (3) is less than Quantity B (4)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "In a circle, triangle DEF is inscribed with DF as a diameter, and angle D measures 35°.",
          quantityA: "Angle E",
          quantityB: "Angle F",
          correct: "A",
          steps: ["Since DF is a diameter, the inscribed angle E opposite it is 90°.", "The remaining two angles sum to 90°: $\\angle D + \\angle F = 90°$, so $\\angle F = 90° - 35° = 55°$.", "Quantity A (angle E = 90°) is greater than Quantity B (angle F = 55°)."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A tangent-chord angle at point of tangency T measures 58°.",
          quantityA: "The inscribed angle in the alternate segment subtending the same chord",
          quantityB: "The central angle subtending the same chord, on the alternate segment's side",
          correct: "B",
          steps: ["By the alternate segment theorem, the inscribed angle in the alternate segment equals the tangent-chord angle: 58°.", "The central angle is twice the inscribed angle: $58° \\times 2 = 116°$.", "Quantity A (58°) is less than Quantity B (116°)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "In triangle ABC, AD bisects angle A with D on BC. AB = 10, AC = 15, and BD = 8. What is DC?",
          options: [ {key:"A", text:"9"}, {key:"B", text:"10"}, {key:"C", text:"11"}, {key:"D", text:"12"}, {key:"E", text:"13"} ],
          correct: "D",
          steps: ["By the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{10}{15} = \\frac{2}{3}$.", "$\\frac{8}{DC} = \\frac{2}{3}$, so $DC = \\frac{8 \\times 3}{2} = 12$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "In triangle ABC, G is the centroid and M is the midpoint of BC. If AG = 14, what is GM?",
          options: [ {key:"A", text:"4.67"}, {key:"B", text:"6"}, {key:"C", text:"7"}, {key:"D", text:"9.33"}, {key:"E", text:"14"} ],
          correct: "C",
          steps: ["The centroid splits each median in a 2:1 ratio, measured from the vertex: $AG:GM = 2:1$.", "$GM = \\frac{AG}{2} = \\frac{14}{2} = 7$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A right triangle has legs 6 and 8, and hypotenuse 10. What is the length of the median drawn to the hypotenuse?",
          options: [ {key:"A", text:"4"}, {key:"B", text:"4.5"}, {key:"C", text:"5"}, {key:"D", text:"6"}, {key:"E", text:"7"} ],
          correct: "C",
          steps: ["Using the median length formula with $a=10$ (the hypotenuse), $b=6$, $c=8$: $m_a^2 = \\frac{2b^2+2c^2-a^2}{4}$.", "$m_a^2 = \\frac{2(36)+2(64)-100}{4} = \\frac{72+128-100}{4} = \\frac{100}{4} = 25$.", "$m_a = 5$. (This matches the well-known fact that the median to the hypotenuse of a right triangle always equals half the hypotenuse.)"]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "A triangle has area 24 and semiperimeter 12. What is the radius of its incircle?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"1.5"}, {key:"C", text:"2"}, {key:"D", text:"2.5"}, {key:"E", text:"3"} ],
          correct: "C",
          steps: ["The inradius formula is $r = \\frac{\\text{Area}}{s}$.", "$r = \\frac{24}{12} = 2$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "In triangle ABC, AD bisects angle A with D on BC. AB = 6, AC = 9, and BC = 10. What is BD?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"3.5"}, {key:"C", text:"4"}, {key:"D", text:"4.5"}, {key:"E", text:"6"} ],
          correct: "C",
          steps: ["By the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{6}{9} = \\frac{2}{3}$.", "Since $BD + DC = 10$, split 10 into parts with ratio 2:3: $BD = 10 \\times \\frac{2}{5} = 4$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "In triangle ABC, the full median from vertex A to the midpoint of BC has length 21. G is the centroid. What is AG?",
          options: [ {key:"A", text:"7"}, {key:"B", text:"10.5"}, {key:"C", text:"12"}, {key:"D", text:"14"}, {key:"E", text:"18"} ],
          correct: "D",
          steps: ["The centroid divides the median so that $AG$ is $\\frac23$ of the full median, measured from the vertex.", "$AG = \\frac23 \\times 21 = 14$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "An isosceles triangle has two sides of length 5 and a base of length 8. What is the length of the median drawn to the base?",
          options: [ {key:"A", text:"2"}, {key:"B", text:"2.5"}, {key:"C", text:"3"}, {key:"D", text:"3.5"}, {key:"E", text:"4"} ],
          correct: "C",
          steps: ["Using the median formula with $a=8$ (the base), $b=c=5$: $m_a^2 = \\frac{2(25)+2(25)-64}{4} = \\frac{100-64}{4} = \\frac{36}{4} = 9$.", "$m_a = 3$. (This checks out geometrically too: in an isosceles triangle, the median to the base is also the altitude. Half the base is 4, and $\\sqrt{5^2-4^2} = \\sqrt{9} = 3$.)"]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A right triangle has legs 5 and 12 (hypotenuse 13). What is the radius of its incircle?",
          options: [ {key:"A", text:"1"}, {key:"B", text:"1.5"}, {key:"C", text:"2"}, {key:"D", text:"2.5"}, {key:"E", text:"3"} ],
          correct: "C",
          steps: ["Semiperimeter $s = \\frac{5+12+13}{2} = 15$.", "Area $= \\frac12(5)(12) = 30$.", "$r = \\frac{\\text{Area}}{s} = \\frac{30}{15} = 2$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "In triangle ABC, AD bisects angle A with D on BC. AB = 7, AC = 5, and BC = 9. What is DC?",
          options: [ {key:"A", text:"3.375"}, {key:"B", text:"3.75"}, {key:"C", text:"4"}, {key:"D", text:"4.5"}, {key:"E", text:"5.25"} ],
          correct: "B",
          steps: ["By the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{7}{5}$.", "Split 9 into parts with ratio 7:5: $DC = 9 \\times \\frac{5}{12} = 3.75$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "In triangle ABC, the median from vertex A has length 18. G is the centroid, and M is the midpoint of BC. What is AG - GM?",
          options: [ {key:"A", text:"3"}, {key:"B", text:"6"}, {key:"C", text:"9"}, {key:"D", text:"12"}, {key:"E", text:"18"} ],
          correct: "B",
          steps: ["$AG = \\frac23(18) = 12$ and $GM = \\frac13(18) = 6$.", "$AG - GM = 12 - 6 = 6$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "In triangle ABC, AD bisects angle A with D on BC. AB = 9, AC = 6, and BC = 10. What is BD?",
          correct: 6,
          steps: ["By the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{9}{6} = \\frac{3}{2}$.", "Split 10 into ratio 3:2: $BD = 10 \\times \\frac{3}{5} = 6$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "In triangle ABC, the median from A to the midpoint of BC has length 15. G is the centroid. What is AG?",
          correct: 10,
          steps: ["$AG = \\frac23$ of the full median.", "$AG = \\frac23(15) = 10$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A triangle has area 36 and semiperimeter 9. What is the radius of its incircle?",
          correct: 4,
          steps: ["$r = \\frac{\\text{Area}}{s} = \\frac{36}{9} = 4$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "A right triangle has legs 9 and 12, with hypotenuse 15. What is the length of the median drawn to the hypotenuse?",
          correct: 7.5,
          steps: ["Using the median formula with $a=15$, $b=9$, $c=12$: $m_a^2 = \\frac{2(81)+2(144)-225}{4} = \\frac{162+288-225}{4} = \\frac{225}{4}$.", "$m_a = \\frac{15}{2} = 7.5$. (This matches the rule that the median to the hypotenuse is half the hypotenuse: $15 \\div 2 = 7.5$.)"]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "In triangle ABC, AD bisects angle A with D on BC. AB = 12, AC = 8, and DC = 5. What is BD?",
          correct: 7.5,
          steps: ["By the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{12}{8} = \\frac{3}{2}$.", "$\\frac{BD}{5} = \\frac{3}{2}$, so $BD = \\frac{5 \\times 3}{2} = 7.5$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "In triangle ABC, G is the centroid and M is the midpoint of BC. If GM = 6, what is the full length of median AM?",
          correct: 18,
          steps: ["Since $AG:GM = 2:1$, GM is $\\frac13$ of the full median.", "$AM = 3 \\times GM = 3 \\times 6 = 18$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A right triangle has legs 9 and 12 (hypotenuse 15). What is the radius of its incircle?",
          correct: 3,
          steps: ["Semiperimeter $s = \\frac{9+12+15}{2} = 18$.", "Area $= \\frac12(9)(12) = 54$.", "$r = \\frac{54}{18} = 3$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "An isosceles triangle has two sides of length 13 and a base of length 10. What is the length of the median drawn to the base?",
          correct: 12,
          steps: ["Using the median formula with $a=10$ (base), $b=c=13$: $m_a^2 = \\frac{2(169)+2(169)-100}{4} = \\frac{676-100}{4} = \\frac{576}{4} = 144$.", "$m_a = 12$. (Check: half the base is 5, and $\\sqrt{13^2-5^2} = \\sqrt{169-25} = \\sqrt{144} = 12$, since the median to the base of an isosceles triangle is also the altitude.)"]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following are true properties of the incenter of a triangle? Select all that apply.",
          options: [ {key:"A", text:"It is the intersection point of the three angle bisectors."}, {key:"B", text:"It is equidistant from all three sides of the triangle."}, {key:"C", text:"It is the center of the triangle's circumscribed circle."}, {key:"D", text:"It is always located inside the triangle, for any triangle."}, {key:"E", text:"Its distance to each side equals the inradius $r = \\frac{\\text{Area}}{s}$."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "By definition, the incenter is where the three angle bisectors meet (A true).",
            "It is equidistant from the three sides, since that distance is the inradius (B true, E true).",
            "C is false: that describes the circumcenter, not the incenter.",
            "Unlike the circumcenter (which can fall outside an obtuse triangle), the incenter is always inside the triangle (D true)."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following are true properties of the centroid of a triangle? Select all that apply.",
          options: [ {key:"A", text:"It is the intersection point of the three medians."}, {key:"B", text:"It divides each median in a 2:1 ratio, measured from the vertex."}, {key:"C", text:"It is the triangle's center of mass."}, {key:"D", text:"Each median divides the triangle into two regions of equal area."}, {key:"E", text:"The three medians divide the triangle into six regions of equal area."} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "All five statements are standard properties of the centroid and medians.",
            "The centroid is where the three medians intersect (A), splitting each 2:1 from the vertex (B), and it represents the triangle's balance point (C).",
            "Each individual median splits the triangle into two equal-area halves (D), and together all three medians partition the triangle into six equal-area smaller triangles (E)."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "For each scenario, AD bisects angle A in triangle ABC, with D on BC. Which scenarios correctly satisfy the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC}$? Select all that apply.",
          options: [ {key:"A", text:"AB=10, AC=15, BD=8, DC=12"}, {key:"B", text:"AB=6, AC=9, BD=4, DC=6"}, {key:"C", text:"AB=7, AC=14, BD=3, DC=7"}, {key:"D", text:"AB=5, AC=10, BD=6, DC=12"}, {key:"E", text:"AB=8, AC=10, BD=5, DC=7"} ],
          correct: ["A", "B", "D"],
          steps: [
            "Check whether $\\frac{AB}{AC} = \\frac{BD}{DC}$ for each.",
            "A: $\\frac{10}{15}=\\frac23$, $\\frac{8}{12}=\\frac23$, valid. B: $\\frac{6}{9}=\\frac23$, $\\frac{4}{6}=\\frac23$, valid.",
            "C: $\\frac{7}{14}=\\frac12$, $\\frac{3}{7}\\ne\\frac12$, invalid. D: $\\frac{5}{10}=\\frac12$, $\\frac{6}{12}=\\frac12$, valid.",
            "E: $\\frac{8}{10}=0.8$, $\\frac{5}{7}\\approx0.714$, invalid.",
            "Valid: A, B, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "For each triangle described by side $a$ (the side the median is drawn to) and the other two sides $b$, $c$, which claimed median length $m_a$ is correct? Select all that apply.",
          options: [ {key:"A", text:"a=10, b=6, c=8 (right triangle): claimed $m_a = 5$"}, {key:"B", text:"a=8, b=5, c=5 (isosceles): claimed $m_a = 3$"}, {key:"C", text:"a=6, b=6, c=6 (equilateral): claimed $m_a = 3$"}, {key:"D", text:"a=10, b=13, c=13 (isosceles): claimed $m_a = 12$"}, {key:"E", text:"a=15, b=9, c=12 (right triangle): claimed $m_a = 7.5$"} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "Use $m_a^2 = \\frac{2b^2+2c^2-a^2}{4}$ for each.",
            "A: $\\frac{2(36)+2(64)-100}{4}=\\frac{100}{4}=25$, $m_a=5$, valid.",
            "B: $\\frac{2(25)+2(25)-64}{4}=\\frac{36}{4}=9$, $m_a=3$, valid.",
            "C: $\\frac{2(36)+2(36)-36}{4}=\\frac{108}{4}=27$, $m_a=\\sqrt{27}=3\\sqrt3\\approx5.2$, not 3, invalid.",
            "D: $\\frac{2(169)+2(169)-100}{4}=\\frac{576}{4}=144$, $m_a=12$, valid.",
            "E: $\\frac{2(81)+2(144)-225}{4}=\\frac{225}{4}=56.25$, $m_a=7.5$, valid."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "For each triangle, a full median has the given length, and G is the centroid. Which claimed values of AG and GM are both correct? Select all that apply.",
          options: [ {key:"A", text:"Median = 18: claimed AG = 12, GM = 6"}, {key:"B", text:"Median = 21: claimed AG = 14, GM = 7"}, {key:"C", text:"Median = 30: claimed AG = 15, GM = 15"}, {key:"D", text:"Median = 9: claimed AG = 6, GM = 3"}, {key:"E", text:"Median = 24: claimed AG = 8, GM = 16"} ],
          correct: ["A", "B", "D"],
          steps: [
            "The centroid always gives $AG = \\frac23(\\text{median})$ and $GM = \\frac13(\\text{median})$.",
            "A: $\\frac23(18)=12$, $\\frac13(18)=6$, valid. B: $\\frac23(21)=14$, $\\frac13(21)=7$, valid.",
            "C: $\\frac23(30)=20 \\ne 15$, invalid (the claimed values are equal, but AG should be twice GM, not equal to it).",
            "D: $\\frac23(9)=6$, $\\frac13(9)=3$, valid. E: $\\frac23(24)=16 \\ne 8$, invalid (the claimed values are swapped)."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "In triangle ABC, AB = AC (isosceles), and AD bisects angle A with D on BC. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"BD = DC."}, {key:"B", text:"AD is also the median from A to BC."}, {key:"C", text:"AD is also the altitude from A to BC."}, {key:"D", text:"AD passes through both the incenter and the centroid of the triangle."}, {key:"E", text:"Angle ADB = angle ADC = 90°."} ],
          correct: ["A", "B", "C", "D", "E"],
          steps: [
            "By the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = 1$ since $AB=AC$, so $BD=DC$ (A true), meaning AD is also the median (B true).",
            "In an isosceles triangle, the bisector from the apex angle coincides with the median and the altitude to the base (C true, E true, since the altitude meets the base at a right angle).",
            "AD is an angle bisector, so it passes through the incenter, and since it's also a median here, it passes through the centroid too (D true). This coincidence of centers along one line is special to the isosceles case; in a general scalene triangle the angle bisector, median, and altitude from a vertex are three different lines."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "In triangle ABC, AD bisects angle A with D on BC. AB = 9, AC = 15, and BD = 6.",
          quantityA: "DC",
          quantityB: "10",
          correct: "C",
          steps: ["By the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{9}{15} = \\frac{3}{5}$.", "$\\frac{6}{DC} = \\frac{3}{5}$, so $DC = \\frac{6 \\times 5}{3} = 10$.", "Both quantities equal 10."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "In triangle ABC, G is the centroid and M is the midpoint of BC. AG = 16.",
          quantityA: "GM",
          quantityB: "8",
          correct: "C",
          steps: ["$GM = \\frac{AG}{2} = \\frac{16}{2} = 8$.", "Both quantities equal 8."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A triangle has sides 6, 8, and 10.",
          quantityA: "The radius of its incircle",
          quantityB: "2",
          correct: "C",
          steps: ["Semiperimeter $s = \\frac{6+8+10}{2} = 12$.", "Since $6^2+8^2=10^2$, this is a right triangle with area $\\frac12(6)(8)=24$.", "$r = \\frac{24}{12} = 2$.", "Both quantities equal 2."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "An equilateral triangle has side length 4.",
          quantityA: "The length of the median to any side",
          quantityB: "4",
          correct: "B",
          steps: ["Using the median formula with $a=b=c=4$: $m_a^2 = \\frac{2(16)+2(16)-16}{4} = \\frac{48}{4} = 12$.", "$m_a = \\sqrt{12} = 2\\sqrt3 \\approx 3.46$.", "Quantity A ($\\approx3.46$) is less than Quantity B (4)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "In triangle ABC, AB = AC, so the triangle is isosceles, and AD bisects angle A with D on side BC.",
          quantityA: "BD",
          quantityB: "DC",
          correct: "C",
          steps: ["By the angle bisector theorem, $\\frac{BD}{DC} = \\frac{AB}{AC}$.", "Since $AB = AC$, this ratio is 1, so $BD = DC$.", "Both quantities are equal."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "In an equilateral triangle, I is the incenter and G is the centroid.",
          quantityA: "The distance from I to a vertex",
          quantityB: "The distance from G to that same vertex",
          correct: "C",
          steps: ["In an equilateral triangle, all four triangle centers (incenter, centroid, circumcenter, orthocenter) coincide at the same single point, due to the triangle's full symmetry.", "So I and G are literally the same point, meaning their distances to any vertex are equal.", "Both quantities are equal."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "A triangle has sides 13, 14, and 15. What is its area?",
          options: [ {key:"A", text:"56"}, {key:"B", text:"70"}, {key:"C", text:"78"}, {key:"D", text:"84"}, {key:"E", text:"91"} ],
          correct: "D",
          steps: ["$s = \\frac{13+14+15}{2} = 21$.", "Area $= \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "Two sides of a triangle have lengths 6 and 10, with an included angle of 30°. What is the area of the triangle?",
          options: [ {key:"A", text:"10"}, {key:"B", text:"12"}, {key:"C", text:"15"}, {key:"D", text:"20"}, {key:"E", text:"30"} ],
          correct: "C",
          steps: ["Area $= \\frac12 ab \\sin C = \\frac12(6)(10)\\sin(30°)$.", "$\\sin(30°) = \\frac12$, so Area $= \\frac12(60)(\\frac12) = 15$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "A triangle has interior angles in the ratio 1:2:3. What type of triangle is it, classified by angles?",
          options: [ {key:"A", text:"Acute"}, {key:"B", text:"Right"}, {key:"C", text:"Obtuse"}, {key:"D", text:"Equilateral"}, {key:"E", text:"Cannot be determined"} ],
          correct: "B",
          steps: ["The parts sum to $1+2+3=6$ shares of $180°$, so each share is $30°$.", "The angles are $30°, 60°, 90°$. Since one angle is exactly $90°$, the triangle is right."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "In a triangle, an exterior angle measures 140°. One of the two non-adjacent (remote) interior angles measures 65°. What is the measure of the other remote interior angle?",
          options: [ {key:"A", text:"65°"}, {key:"B", text:"70°"}, {key:"C", text:"75°"}, {key:"D", text:"80°"}, {key:"E", text:"85°"} ],
          correct: "C",
          steps: ["The exterior angle equals the sum of the two non-adjacent interior angles.", "$140° = 65° + x$, so $x = 75°$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "A triangle has sides 6, 8, and 10, and its circumradius is 5. What is its area?",
          options: [ {key:"A", text:"12"}, {key:"B", text:"18"}, {key:"C", text:"24"}, {key:"D", text:"30"}, {key:"E", text:"48"} ],
          correct: "C",
          steps: ["Area $= \\frac{abc}{4R} = \\frac{(6)(8)(10)}{4(5)} = \\frac{480}{20} = 24$.", "This matches the direct check: since $6^2+8^2=10^2$, it's a right triangle with area $\\frac12(6)(8)=24$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "A triangle has an inradius of 3 and a semiperimeter of 18. What is its area?",
          options: [ {key:"A", text:"21"}, {key:"B", text:"36"}, {key:"C", text:"48"}, {key:"D", text:"54"}, {key:"E", text:"60"} ],
          correct: "D",
          steps: ["Area $= rs = (3)(18) = 54$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "A triangle has two sides of length 9 and 13. Which of the following could NOT be the length of the third side?",
          options: [ {key:"A", text:"5"}, {key:"B", text:"8"}, {key:"C", text:"15"}, {key:"D", text:"21"}, {key:"E", text:"22"} ],
          correct: "E",
          steps: ["By the triangle inequality, the third side must satisfy $13-9 < x < 13+9$, so $4 < x < 22$.", "22 is not strictly less than 22, so it is impossible; all the other listed values fall inside the valid range."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "A triangle has sides 4, 13, and 15. What is its area?",
          options: [ {key:"A", text:"18"}, {key:"B", text:"20"}, {key:"C", text:"24"}, {key:"D", text:"26"}, {key:"E", text:"30"} ],
          correct: "C",
          steps: ["$s = \\frac{4+13+15}{2} = 16$.", "Area $= \\sqrt{16(16-4)(16-13)(16-15)} = \\sqrt{16 \\cdot 12 \\cdot 3 \\cdot 1} = \\sqrt{576} = 24$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "Two sides of a triangle both have length 8, with an included angle of 60°. What is the area of the triangle?",
          options: [ {key:"A", text:"$8\\sqrt3$"}, {key:"B", text:"$16\\sqrt3$"}, {key:"C", text:"32"}, {key:"D", text:"$32\\sqrt3$"}, {key:"E", text:"64"} ],
          correct: "B",
          steps: ["Area $= \\frac12 ab \\sin C = \\frac12(8)(8)\\sin(60°)$.", "$\\sin(60°) = \\frac{\\sqrt3}{2}$, so Area $= \\frac12(64)\\left(\\frac{\\sqrt3}{2}\\right) = 16\\sqrt3$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "A triangle has sides of length 7, 7, and 7. How would this triangle be classified, both by sides and by angles?",
          options: [ {key:"A", text:"Scalene and acute"}, {key:"B", text:"Isosceles and right"}, {key:"C", text:"Equilateral and acute"}, {key:"D", text:"Isosceles and obtuse"}, {key:"E", text:"Scalene and obtuse"} ],
          correct: "C",
          steps: ["All three sides are equal, so the triangle is equilateral.", "Every equilateral triangle has all angles equal to $60°$, which is less than $90°$, so it is also acute."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "A triangle has sides 9, 10, and 17. What is its area?",
          correct: 36,
          steps: ["$s = \\frac{9+10+17}{2} = 18$.", "Area $= \\sqrt{18(18-9)(18-10)(18-17)} = \\sqrt{18 \\cdot 9 \\cdot 8 \\cdot 1} = \\sqrt{1296} = 36$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "Two sides of a triangle have lengths 12 and 5, with an included angle of 90°. What is the area of the triangle?",
          correct: 30,
          steps: ["Area $= \\frac12 ab \\sin C = \\frac12(12)(5)\\sin(90°)$.", "$\\sin(90°) = 1$, so Area $= \\frac12(60)(1) = 30$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A triangle has two sides of length 8 and 15. What is the greatest possible integer length of the third side?",
          correct: 22,
          steps: ["By the triangle inequality, the third side must be less than $8+15=23$.", "The largest integer strictly less than 23 is 22."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "In a triangle, an exterior angle measures 155°. One remote interior angle measures 62°. What is the measure, in degrees, of the other remote interior angle?",
          correct: 93,
          steps: ["The exterior angle equals the sum of the two remote interior angles.", "$155° - 62° = 93°$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "A triangle has sides 9, 12, and 15, and a circumradius of 7.5. What is its area?",
          correct: 54,
          steps: ["Area $= \\frac{abc}{4R} = \\frac{(9)(12)(15)}{4(7.5)} = \\frac{1620}{30} = 54$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "A triangle has an inradius of 4 and a semiperimeter of 15. What is its area?",
          correct: 60,
          steps: ["Area $= rs = (4)(15) = 60$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A triangle's interior angles are in the ratio 2:3:4. What is the measure, in degrees, of the largest angle?",
          correct: 80,
          steps: ["The parts sum to $2+3+4=9$ shares of $180°$, so each share is $20°$.", "The largest angle is $4 \\times 20° = 80°$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "A triangle has sides 7, 24, and 25. What is its area?",
          correct: 84,
          steps: ["$s = \\frac{7+24+25}{2} = 28$.", "Area $= \\sqrt{28(28-7)(28-24)(28-25)} = \\sqrt{28 \\cdot 21 \\cdot 4 \\cdot 3} = \\sqrt{7056} = 84$.", "(This also checks out directly: $7^2+24^2=625=25^2$, a right triangle with area $\\frac12(7)(24)=84$.)"]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following sets of three side lengths CAN form a triangle? Select all that apply.",
          options: [ {key:"A", text:"6, 7, 8"}, {key:"B", text:"2, 3, 7"}, {key:"C", text:"9, 9, 9"}, {key:"D", text:"4, 4, 9"}, {key:"E", text:"10, 11, 12"} ],
          correct: ["A", "C", "E"],
          steps: [
            "A triangle forms only if the sum of the two shorter sides exceeds the longest side.",
            "A: $6+7=13>8$, valid. B: $2+3=5$, not greater than 7, invalid.",
            "C: $9+9=18>9$, valid. D: $4+4=8$, not greater than 9, invalid.",
            "E: $10+11=21>12$, valid.",
            "Valid sets: A, C, and E."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "A triangle has sides 5, 5, and 8. Which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"The triangle is isosceles."}, {key:"B", text:"The triangle is scalene."}, {key:"C", text:"The two angles opposite the sides of length 5 are equal."}, {key:"D", text:"The triangle's area, by Heron's formula, is 12."}, {key:"E", text:"The triangle is equilateral."} ],
          correct: ["A", "C", "D"],
          steps: [
            "Two sides are equal (5 and 5), so the triangle is isosceles (A true, B false), and the base angles opposite those equal sides are equal (C true).",
            "It is not equilateral since the third side (8) differs (E false).",
            "$s = \\frac{5+5+8}{2}=9$. Area $= \\sqrt{9(9-5)(9-5)(9-8)} = \\sqrt{9\\cdot4\\cdot4\\cdot1} = \\sqrt{144}=12$ (D true)."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "For each triangle with the given sides, is the claimed area (by Heron's formula) correct? Select all that apply.",
          options: [ {key:"A", text:"Sides 9, 10, 17: claimed area 36"}, {key:"B", text:"Sides 7, 24, 25: claimed area 84"}, {key:"C", text:"Sides 10, 13, 13: claimed area 60"}, {key:"D", text:"Sides 5, 5, 6: claimed area 10"}, {key:"E", text:"Sides 12, 17, 25: claimed area 90"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Check $\\sqrt{s(s-a)(s-b)(s-c)}$ for each.",
            "A: $s=18$, $\\sqrt{18\\cdot9\\cdot8\\cdot1}=\\sqrt{1296}=36$, valid.",
            "B: $s=28$, $\\sqrt{28\\cdot21\\cdot4\\cdot3}=\\sqrt{7056}=84$, valid.",
            "C: $s=18$, $\\sqrt{18\\cdot8\\cdot5\\cdot5}=\\sqrt{3600}=60$, valid.",
            "D: $s=8$, $\\sqrt{8\\cdot3\\cdot3\\cdot2}=\\sqrt{144}=12$, not 10, invalid.",
            "E: $s=27$, $\\sqrt{27\\cdot15\\cdot10\\cdot2}=\\sqrt{8100}=90$, valid."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "For a triangle with given information, which area formula from the lesson can be applied directly, without first solving for additional information? Select all that apply.",
          options: [ {key:"A", text:"Base 10 and height 6 are known: use $\\frac12 \\times \\text{base} \\times \\text{height}$."}, {key:"B", text:"All three sides are known: use Heron's Formula."}, {key:"C", text:"Two sides and the included angle are known: use $\\frac12 ab\\sin C$."}, {key:"D", text:"Only one side length is known, with no other information: use Heron's Formula."}, {key:"E", text:"All three sides and the inradius are known: use $rs$, where $s$ is the semiperimeter."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Each of A, B, C, and E states a formula that matches exactly the information given, straight from the lesson's table.",
            "D is false: Heron's Formula requires all three side lengths, not just one, so it cannot be applied with insufficient information."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "For each triangle, an exterior angle and one remote interior angle are given. Which pairs correctly give a second remote interior angle that is consistent with the exterior angle theorem, assuming the claimed sum works out? Select all that apply.",
          options: [ {key:"A", text:"Exterior angle 120°, remote angles 50° and 70°"}, {key:"B", text:"Exterior angle 100°, remote angles 45° and 55°"}, {key:"C", text:"Exterior angle 150°, remote angles 80° and 60°"}, {key:"D", text:"Exterior angle 95°, remote angles 40° and 55°"}, {key:"E", text:"Exterior angle 130°, remote angles 60° and 80°"} ],
          correct: ["A", "B", "D"],
          steps: [
            "The exterior angle theorem requires the exterior angle to equal the sum of the two remote interior angles.",
            "A: $50+70=120$, matches. B: $45+55=100$, matches.",
            "C: $80+60=140 \\ne 150$, does not match. D: $40+55=95$, matches.",
            "E: $60+80=140 \\ne 130$, does not match.",
            "Valid: A, B, and D."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following are true about triangle classification? Select all that apply.",
          options: [ {key:"A", text:"A triangle with angles 50°, 60°, 70° is acute."}, {key:"B", text:"A triangle with sides 3, 4, 5 is a right triangle."}, {key:"C", text:"A triangle with angles 30°, 40°, 110° is obtuse."}, {key:"D", text:"A scalene triangle can never be a right triangle."}, {key:"E", text:"An equilateral triangle is always acute, since every angle is exactly 60°."} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "All three angles of 50°, 60°, 70° are under 90°, so it's acute (A true).",
            "Since $3^2+4^2=5^2$, this is a right triangle (B true).",
            "The angle 110° exceeds 90°, so this triangle is obtuse (C true).",
            "D is false: a right triangle with legs of different lengths, like 3-4-5, is both scalene and right.",
            "Every equilateral triangle has all angles equal to $60°<90°$, so it is always acute (E true)."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "A triangle has sides 10, 17, and 21.",
          quantityA: "The triangle's area, by Heron's Formula",
          quantityB: "84",
          correct: "C",
          steps: ["$s = \\frac{10+17+21}{2} = 24$.", "Area $= \\sqrt{24(24-10)(24-17)(24-21)} = \\sqrt{24\\cdot14\\cdot7\\cdot3} = \\sqrt{7056} = 84$.", "Both quantities equal 84."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "A triangle has two sides of length 10 each, with an included angle of 60°.",
          quantityA: "The triangle's area",
          quantityB: "$25\\sqrt3$",
          correct: "C",
          steps: ["Area $= \\frac12(10)(10)\\sin(60°) = 50 \\times \\frac{\\sqrt3}{2} = 25\\sqrt3$.", "Both quantities equal $25\\sqrt3$."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A triangle has two sides of length 5 and 11.",
          quantityA: "The greatest possible integer length of the third side",
          quantityB: "15",
          correct: "C",
          steps: ["By the triangle inequality, the third side must be less than $5+11=16$.", "The largest integer strictly less than 16 is 15.", "Both quantities equal 15."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "An equilateral triangle has side length 6.",
          quantityA: "Its circumradius $R$",
          quantityB: "Twice its inradius $r$",
          correct: "C",
          steps: ["For any equilateral triangle, the circumradius is always exactly double the inradius, a special property of equilateral triangles noted in the lesson.", "So $R = 2r$ always holds, meaning both quantities are equal by definition, regardless of the specific side length."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "In a triangle, an exterior angle measures 110°, and it is formed by extending a side past a vertex where the interior angle is 70°.",
          quantityA: "The remote interior angle closest in measure to the exterior angle",
          quantityB: "The exterior angle itself",
          correct: "B",
          steps: ["The exterior angle equals the sum of the two remote (non-adjacent) interior angles, so each remote angle alone is smaller than the exterior angle.", "The two remote angles sum to 110°, so each individually is less than 110°.", "Quantity B (the full exterior angle, 110°) is greater than Quantity A (any single remote angle)."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "Triangle P has sides 6, 7, and 9 (scalene). Triangle Q has sides 6, 6, and 9 (isosceles). Both have the same base of 9.",
          quantityA: "The number of distinct angle measures in Triangle P",
          quantityB: "The number of distinct angle measures in Triangle Q",
          correct: "A",
          steps: ["Triangle P is scalene: no two sides are equal, so no two angles are equal, giving 3 distinct angle measures.", "Triangle Q is isosceles: two sides are equal, so two angles are equal, giving only 2 distinct angle measures.", "Quantity A (3) is greater than Quantity B (2)."]
        }

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
      ],
      practiceBank: [
        {
          kind: "MC", title: "Practice 1 · Problem Solving",
          context: "In a right triangle, an angle measures 30° and the side opposite it has length 5. What is the length of the hypotenuse?",
          options: [ {key:"A", text:"5"}, {key:"B", text:"8"}, {key:"C", text:"10"}, {key:"D", text:"12"}, {key:"E", text:"15"} ],
          correct: "C",
          steps: ["$\\sin(30°)=\\frac{\\text{opposite}}{\\text{hypotenuse}}=\\frac{5}{\\text{hyp}}$.", "$\\sin(30°)=\\frac12$, so $\\frac12=\\frac{5}{\\text{hyp}} \\Rightarrow \\text{hyp}=10$."]
        },
        {
          kind: "MC", title: "Practice 2 · Problem Solving",
          context: "A 45-45-90 triangle has a hypotenuse of $8\\sqrt2$. What is the length of one leg?",
          options: [ {key:"A", text:"4"}, {key:"B", text:"$4\\sqrt2$"}, {key:"C", text:"8"}, {key:"D", text:"$8\\sqrt2$"}, {key:"E", text:"16"} ],
          correct: "C",
          steps: ["In a 45-45-90 triangle, hypotenuse $=$ leg $\\times \\sqrt2$.", "leg $=\\frac{8\\sqrt2}{\\sqrt2}=8$."]
        },
        {
          kind: "MC", title: "Practice 3 · Problem Solving",
          context: "If $\\sin(\\theta)=\\frac35$ and $\\theta$ is acute, what is $\\cos(\\theta)$?",
          options: [ {key:"A", text:"1/5"}, {key:"B", text:"2/5"}, {key:"C", text:"3/5"}, {key:"D", text:"4/5"}, {key:"E", text:"1"} ],
          correct: "D",
          steps: ["Use $\\sin^2\\theta+\\cos^2\\theta=1$: $\\left(\\frac35\\right)^2+\\cos^2\\theta=1$.", "$\\frac{9}{25}+\\cos^2\\theta=1 \\Rightarrow \\cos^2\\theta=\\frac{16}{25}$.", "Since $\\theta$ is acute, $\\cos\\theta>0$, so $\\cos\\theta=\\frac45$."]
        },
        {
          kind: "MC", title: "Practice 4 · Problem Solving",
          context: "What is $\\tan(60°)$?",
          options: [ {key:"A", text:"$1/\\sqrt3$"}, {key:"B", text:"1"}, {key:"C", text:"$\\sqrt2$"}, {key:"D", text:"$\\sqrt3$"}, {key:"E", text:"2"} ],
          correct: "D",
          steps: ["From the standard values table, $\\tan(60°)=\\sqrt3$."]
        },
        {
          kind: "MC", title: "Practice 5 · Problem Solving",
          context: "A right triangle has legs 7 and 24. What is $\\sin$ of the angle opposite the leg of length 7?",
          options: [ {key:"A", text:"7/24"}, {key:"B", text:"7/25"}, {key:"C", text:"24/25"}, {key:"D", text:"24/7"}, {key:"E", text:"25/7"} ],
          correct: "B",
          steps: ["Verify it's a right triangle setup: $7^2+24^2=49+576=625=25^2$, so the hypotenuse is 25.", "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}=\\frac{7}{25}$."]
        },
        {
          kind: "MC", title: "Practice 6 · Problem Solving",
          context: "If $\\cos(\\theta)=\\frac23$, what is $\\sec(\\theta)$?",
          options: [ {key:"A", text:"2/3"}, {key:"B", text:"3/2"}, {key:"C", text:"2"}, {key:"D", text:"3"}, {key:"E", text:"1"} ],
          correct: "B",
          steps: ["$\\sec\\theta=\\frac{1}{\\cos\\theta}=\\frac{1}{2/3}=\\frac32$."]
        },
        {
          kind: "MC", title: "Practice 7 · Problem Solving",
          context: "A triangle has two sides of length 10 and 14 with an included angle of 60°. What is its area?",
          options: [ {key:"A", text:"35"}, {key:"B", text:"$35\\sqrt3$"}, {key:"C", text:"70"}, {key:"D", text:"$70\\sqrt3$"}, {key:"E", text:"140"} ],
          correct: "B",
          steps: ["Area $=\\frac12ab\\sin C=\\frac12(10)(14)\\sin(60°)$.", "$\\sin(60°)=\\frac{\\sqrt3}{2}$, so Area $=70 \\times \\frac{\\sqrt3}{2}=35\\sqrt3$."]
        },
        {
          kind: "MC", title: "Practice 8 · Problem Solving",
          context: "If $\\cos(\\theta)=\\frac12$ and $0°<\\theta<90°$, what is $\\theta$?",
          options: [ {key:"A", text:"30°"}, {key:"B", text:"45°"}, {key:"C", text:"60°"}, {key:"D", text:"75°"}, {key:"E", text:"90°"} ],
          correct: "C",
          steps: ["From the standard values table, $\\cos(60°)=\\frac12$.", "Since $\\theta$ is between 0° and 90°, $\\theta=60°$."]
        },
        {
          kind: "MC", title: "Practice 9 · Problem Solving",
          context: "A triangle has sides $a=8$ and $b=8$ with an included angle of $C=90°$. What is side $c$?",
          options: [ {key:"A", text:"8"}, {key:"B", text:"$8\\sqrt2$"}, {key:"C", text:"16"}, {key:"D", text:"$4\\sqrt2$"}, {key:"E", text:"12"} ],
          correct: "B",
          steps: ["Law of Cosines: $c^2=a^2+b^2-2ab\\cos C=64+64-2(8)(8)\\cos(90°)$.", "$\\cos(90°)=0$, so $c^2=128$.", "$c=\\sqrt{128}=8\\sqrt2$."]
        },
        {
          kind: "MC", title: "Practice 10 · Problem Solving",
          context: "What is $\\cot(45°)$?",
          options: [ {key:"A", text:"0"}, {key:"B", text:"1/2"}, {key:"C", text:"1"}, {key:"D", text:"$\\sqrt2$"}, {key:"E", text:"2"} ],
          correct: "C",
          steps: ["$\\tan(45°)=1$, so $\\cot(45°)=\\frac{1}{\\tan(45°)}=1$."]
        },
        {
          kind: "NE", title: "Practice 11 · Numeric Entry",
          context: "In a right triangle, an angle measures 30° and the side adjacent to it has length $9\\sqrt3$. What is the length of the opposite side?",
          correct: 9,
          steps: ["$\\tan(30°)=\\frac{\\text{opposite}}{\\text{adjacent}}=\\frac{1}{\\sqrt3}$.", "$\\frac{1}{\\sqrt3}=\\frac{\\text{opp}}{9\\sqrt3} \\Rightarrow \\text{opp}=\\frac{9\\sqrt3}{\\sqrt3}=9$."]
        },
        {
          kind: "NE", title: "Practice 12 · Numeric Entry",
          context: "If $\\sin(\\theta)=0.6$, what is $\\cos^2(\\theta)$, expressed as a decimal?",
          correct: 0.64,
          steps: ["$\\cos^2\\theta=1-\\sin^2\\theta=1-0.36=0.64$."]
        },
        {
          kind: "NE", title: "Practice 13 · Numeric Entry",
          context: "A right triangle has a hypotenuse of 13 and one leg of length 5. What is the length of the other leg?",
          correct: 12,
          steps: ["$\\text{leg}^2=13^2-5^2=169-25=144$.", "$\\sqrt{144}=12$."]
        },
        {
          kind: "NE", title: "Practice 14 · Numeric Entry",
          context: "Two sides of a triangle are 6 and 8 with an included angle of 90°. What is the area?",
          correct: 24,
          steps: ["Area $=\\frac12(6)(8)\\sin(90°)=\\frac12(48)(1)=24$."]
        },
        {
          kind: "NE", title: "Practice 15 · Numeric Entry",
          context: "If $\\tan(\\theta)=\\frac34$ and $\\theta$ is acute, what is $\\sin(\\theta)$, expressed as a decimal?",
          correct: 0.6,
          steps: ["Since $\\tan\\theta=\\frac34$, treat this as a right triangle with opposite 3 and adjacent 4.", "By the Pythagorean theorem, the hypotenuse is $\\sqrt{3^2+4^2}=5$.", "$\\sin\\theta=\\frac35=0.6$."]
        },
        {
          kind: "NE", title: "Practice 16 · Numeric Entry",
          context: "What is $\\csc(30°)$?",
          correct: 2,
          steps: ["$\\sin(30°)=\\frac12$, so $\\csc(30°)=\\frac{1}{\\sin(30°)}=2$."]
        },
        {
          kind: "NE", title: "Practice 17 · Numeric Entry",
          context: "A triangle has sides $a=5$ and $b=8$ with an included angle of $C=60°$. What is side $c$?",
          correct: 7,
          steps: ["Law of Cosines: $c^2=a^2+b^2-2ab\\cos C=25+64-2(5)(8)\\cos(60°)$.", "$\\cos(60°)=0.5$, so $c^2=89-40=49$.", "$c=\\sqrt{49}=7$."]
        },
        {
          kind: "NE", title: "Practice 18 · Numeric Entry",
          context: "If $\\cos(\\theta)=\\frac{\\sqrt3}{2}$ and $0°<\\theta<90°$, what is $\\theta$, in degrees?",
          correct: 30,
          steps: ["From the standard values table, $\\cos(30°)=\\frac{\\sqrt3}{2}$.", "So $\\theta=30°$."]
        },
        {
          kind: "MS", title: "Practice 19 · Multiple Answer Choice",
          context: "Which of the following equal $\\frac12$? Select all that apply.",
          options: [ {key:"A", text:"$\\sin(30°)$"}, {key:"B", text:"$\\cos(60°)$"}, {key:"C", text:"$\\tan(45°)$"}, {key:"D", text:"$\\sin(45°)$"}, {key:"E", text:"$\\cos(30°)$"} ],
          correct: ["A", "B"],
          steps: [
            "$\\sin(30°)=\\frac12$, true.",
            "$\\cos(60°)=\\frac12$, true.",
            "$\\tan(45°)=1$, not $\\frac12$. $\\sin(45°)=\\frac{\\sqrt2}{2}\\approx0.71$, not $\\frac12$. $\\cos(30°)=\\frac{\\sqrt3}{2}\\approx0.87$, not $\\frac12$.",
            "Only A and B equal $\\frac12$."
          ]
        },
        {
          kind: "MS", title: "Practice 20 · Multiple Answer Choice",
          context: "Which of the following are true for every acute angle $\\theta$? Select all that apply.",
          options: [ {key:"A", text:"$\\sin^2\\theta+\\cos^2\\theta=1$"}, {key:"B", text:"$\\sin\\theta<1$"}, {key:"C", text:"$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$"}, {key:"D", text:"$\\sin\\theta>\\cos\\theta$"}, {key:"E", text:"$0<\\sin\\theta<1$"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "A is the Pythagorean identity, true for every angle.",
            "For an acute angle, $0°<\\theta<90°$, so $\\sin\\theta$ is strictly between 0 and 1 (B and E both true).",
            "C is the definition of tangent, always true.",
            "D is not always true: for $\\theta=30°$, $\\sin\\theta=0.5<\\cos\\theta\\approx0.87$, so D fails."
          ]
        },
        {
          kind: "MS", title: "Practice 21 · Multiple Answer Choice",
          context: "In a right triangle with acute angle $\\theta$, which of the following are correct? Select all that apply.",
          options: [ {key:"A", text:"$\\sin\\theta=\\cos(90°-\\theta)$"}, {key:"B", text:"$\\tan\\theta \\cdot \\cot\\theta = 1$"}, {key:"C", text:"$\\sec\\theta=\\frac{1}{\\sin\\theta}$"}, {key:"D", text:"$\\csc\\theta=\\frac{1}{\\sin\\theta}$"}, {key:"E", text:"The two acute angles of the triangle sum to 90°."} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "A is the co-function identity: an angle's sine equals its complement's cosine, always true.",
            "B is true since $\\tan\\theta$ and $\\cot\\theta$ are reciprocals.",
            "C is false: $\\sec\\theta=\\frac{1}{\\cos\\theta}$, not $\\frac{1}{\\sin\\theta}$, a classic mix-up with D, which correctly defines $\\csc\\theta$.",
            "E is true: the interior angles of a right triangle sum to 180°, and one is already 90°, so the other two sum to 90°."
          ]
        },
        {
          kind: "MS", title: "Practice 22 · Multiple Answer Choice",
          context: "Which of the following sets of side lengths form a right triangle? Select all that apply.",
          options: [ {key:"A", text:"9, 12, 15"}, {key:"B", text:"7, 24, 25"}, {key:"C", text:"6, 8, 9"}, {key:"D", text:"10, 24, 26"}, {key:"E", text:"5, 5, $5\\sqrt2$"} ],
          correct: ["A", "B", "D", "E"],
          steps: [
            "A: $9^2+12^2=81+144=225=15^2$, valid.",
            "B: $7^2+24^2=49+576=625=25^2$, valid.",
            "C: $6^2+8^2=36+64=100 \\neq 9^2=81$, invalid.",
            "D: $10^2+24^2=100+576=676=26^2$, valid.",
            "E: $5^2+5^2=50=(5\\sqrt2)^2$, valid."
          ]
        },
        {
          kind: "MS", title: "Practice 23 · Multiple Answer Choice",
          context: "For an acute angle $\\theta$ with $\\sin\\theta=\\cos\\theta$, which of the following must be true? Select all that apply.",
          options: [ {key:"A", text:"$\\theta=45°$"}, {key:"B", text:"$\\tan\\theta=1$"}, {key:"C", text:"The triangle is a 45-45-90 triangle."}, {key:"D", text:"$\\theta=60°$"}, {key:"E", text:"$\\sin\\theta=\\frac{\\sqrt2}{2}$"} ],
          correct: ["A", "B", "C", "E"],
          steps: [
            "Dividing both sides of $\\sin\\theta=\\cos\\theta$ by $\\cos\\theta$ gives $\\tan\\theta=1$ (B true).",
            "Within $0°<\\theta<90°$, $\\tan\\theta=1$ only at $\\theta=45°$ (A true), which corresponds to a 45-45-90 triangle (C true) with $\\sin(45°)=\\frac{\\sqrt2}{2}$ (E true).",
            "D is false: $\\sin(60°)=\\frac{\\sqrt3}{2}\\neq\\cos(60°)=\\frac12$."
          ]
        },
        {
          kind: "MS", title: "Practice 24 · Multiple Answer Choice",
          context: "Which of the following equal $\\sqrt3$? Select all that apply.",
          options: [ {key:"A", text:"$\\tan(60°)$"}, {key:"B", text:"$\\frac{\\sin(60°)}{\\cos(60°)}$"}, {key:"C", text:"$\\cot(30°)$"}, {key:"D", text:"$\\tan(30°)$"}, {key:"E", text:"$2\\sin(60°)-1$"} ],
          correct: ["A", "B", "C"],
          steps: [
            "$\\tan(60°)=\\sqrt3$ (A true), and $\\frac{\\sin(60°)}{\\cos(60°)}$ is exactly the definition of $\\tan(60°)$, so it also equals $\\sqrt3$ (B true).",
            "$\\cot(30°)=\\frac{1}{\\tan(30°)}=\\frac{1}{1/\\sqrt3}=\\sqrt3$ (C true).",
            "$\\tan(30°)=\\frac{1}{\\sqrt3}\\approx0.577$, not $\\sqrt3$ (D false). $2\\sin(60°)-1=\\sqrt3-1\\approx0.73$, not $\\sqrt3$ (E false)."
          ]
        },
        {
          kind: "QC", title: "Practice 25 · Quantitative Comparison",
          context: "In a right triangle, angle $\\theta=40°$.",
          quantityA: "$\\sin(\\theta)$",
          quantityB: "$\\cos(\\theta)$",
          correct: "B",
          steps: ["For any angle between 0° and 45°, $\\cos\\theta>\\sin\\theta$, since the angle is smaller than its complement.", "Since $\\theta=40°<45°$, Quantity B ($\\cos(40°)\\approx0.766$) is greater than Quantity A ($\\sin(40°)\\approx0.643$)."]
        },
        {
          kind: "QC", title: "Practice 26 · Quantitative Comparison",
          context: "θ is any angle.",
          quantityA: "$\\sin^2(35°) + \\cos^2(35°)$",
          quantityB: "$1$",
          correct: "C",
          steps: ["The Pythagorean identity $\\sin^2\\theta+\\cos^2\\theta=1$ holds for every angle.", "Both quantities equal 1."]
        },
        {
          kind: "QC", title: "Practice 27 · Quantitative Comparison",
          context: "A right triangle has one acute angle measuring 50°.",
          quantityA: "The measure of the other acute angle",
          quantityB: "$50°$",
          correct: "B",
          steps: ["The two acute angles of a right triangle sum to 90°.", "$90°-50°=40°$.", "Quantity B (50°) is greater than Quantity A (40°)."]
        },
        {
          kind: "QC", title: "Practice 28 · Quantitative Comparison",
          context: "A triangle has two sides of length 6 with an included angle $C$ between them.",
          quantityA: "The area when $C=90°$",
          quantityB: "The area when $C=30°$",
          correct: "A",
          steps: ["Area $=\\frac12(6)(6)\\sin C=18\\sin C$.", "At $C=90°$: Area $=18(1)=18$. At $C=30°$: Area $=18(0.5)=9$.", "Quantity A (18) is greater than Quantity B (9)."]
        },
        {
          kind: "QC", title: "Practice 29 · Quantitative Comparison",
          context: "$\\theta$ is an angle with $0°<\\theta<90°$ and $\\tan(\\theta)=1$.",
          quantityA: "$\\theta$",
          quantityB: "$45°$",
          correct: "C",
          steps: ["$\\tan\\theta=1$ within $0°<\\theta<90°$ only at $\\theta=45°$.", "Both quantities equal 45°."]
        },
        {
          kind: "QC", title: "Practice 30 · Quantitative Comparison",
          context: "A right triangle has legs 9 and 12.",
          quantityA: "The length of the hypotenuse",
          quantityB: "Half the triangle's perimeter",
          correct: "B",
          steps: ["Hypotenuse $=\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15$.", "Perimeter $=9+12+15=36$; half of that is 18.", "Quantity B (18) is greater than Quantity A (15)."]
        }

      ]
    
    }
  ]
},

];

if (typeof window !== "undefined") window.GRE_MATH_CHAPTERS = GRE_MATH_CHAPTERS;
if (typeof module !== "undefined") module.exports = { GRE_MATH_CHAPTERS };
