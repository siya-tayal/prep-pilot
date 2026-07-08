// GMAT Focus Edition — Quantitative Reasoning curriculum.
// Same block schema as GRE_MATH_CHAPTERS. Practice questions use kind "MC" (Problem
// Solving, 5 options) or "DS" (Data Sufficiency, standard A-E answer choices auto-injected).

const GMAT_QUANT_CHAPTERS = [

// ================= CHAPTER 1 =================
{
  id: "gm1", number: 1, title: "Number Properties",
  blurb: "Integers, primes, divisibility, and remainders — the GMAT's favorite building blocks.",
  lessons: [
    {
      id: "gm1-l1", title: "Integers, Primes & Divisibility",
      blocks: [
        { type: "html", content: "<h4>Core Definitions</h4><ul><li><strong>Integers:</strong> $\\{..., -2,-1,0,1,2,...\\}$ — no fractions or decimals.</li><li><strong>Prime numbers:</strong> exactly two positive factors (1 and itself). 2 is the only even prime.</li><li><strong>Consecutive integers:</strong> always alternate even/odd.</li></ul>" },
        { type: "html", content: "<h4>LCM and GCF</h4><p>For two integers, prime-factorize both:</p><ul><li><strong>GCF</strong> takes the <em>lowest</em> shared power of each common prime.</li><li><strong>LCM</strong> takes the <em>highest</em> power of every prime that appears in either number.</li><li><strong>Identity:</strong> $\\text{GCF}(x,y) \\times \\text{LCM}(x,y) = x \\times y$</li></ul>" },
        { type: "html", content: "<h4>Remainders</h4><p>$A = D \\cdot Q + R$, with $0 \\le R < D$. Remainders add and multiply just like normal numbers, then get reduced mod $D$ again.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "What is the greatest common factor of 84 and 126?",
            options: [ {key:"A", text:"6"}, {key:"B", text:"14"}, {key:"C", text:"21"}, {key:"D", text:"42"}, {key:"E", text:"84"} ],
            correct: "D",
            steps: [
              "$84 = 2^2 \\times 3 \\times 7$, $\\quad 126 = 2 \\times 3^2 \\times 7$.",
              "GCF takes the lowest shared power of each common prime: $2^1 \\times 3^1 \\times 7^1 = 42$."
            ]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "Is the integer $n$ divisible by 6?",
            statements: ["(1) $n$ is divisible by 12.", "(2) $n$ is divisible by 9."],
            correct: "A",
            steps: [
              "Statement (1): any multiple of 12 is automatically a multiple of both 2 and 3 (since $12 = 2^2 \\times 3$), so it's always divisible by 6. <strong>Sufficient.</strong>",
              "Statement (2): a multiple of 9 (e.g. $n=9$) is not always even, so it isn't always divisible by 6 (9 itself isn't, but 18 is). <strong>Not sufficient.</strong>",
              "Statement (1) alone is sufficient, statement (2) alone is not — answer A."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 2 =================
{
  id: "gm2", number: 2, title: "Fractions, Decimals & Percents",
  blurb: "Converting between forms and handling successive percent changes.",
  lessons: [
    {
      id: "gm2-l1", title: "Percent Change & Conversions",
      blocks: [
        { type: "html", content: "<h4>Successive Percent Changes</h4><p>Chain the multipliers — never just add/subtract the percentages:</p>$$\\text{Final} = \\text{Initial} \\times (1 \\pm r_1) \\times (1 \\pm r_2) \\times \\cdots$$" },
        { type: "html", content: "<h4>Quick Conversions</h4><p>$x\\%$ of $y$ is $\\dfrac{xy}{100}$ — and notably, <strong>$x\\%$ of $y$ always equals $y\\%$ of $x$</strong>, since both reduce to $\\frac{xy}{100}$.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "A shirt originally priced \\$80 is discounted 25%, then an additional 10% off the sale price. What is the final price?",
            options: [ {key:"A", text:"\\$48"}, {key:"B", text:"\\$52"}, {key:"C", text:"\\$54"}, {key:"D", text:"\\$56"}, {key:"E", text:"\\$60"} ],
            correct: "C",
            steps: [
              "$80 \\times 0.75 = 60$ after the first discount.",
              "$60 \\times 0.90 = 54$ after the second discount."
            ]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "What is the value of $x$?",
            statements: ["(1) $x$ is 20% of $y$.", "(2) $y = 40$."],
            correct: "C",
            steps: [
              "Statement (1) alone: $x = 0.2y$, but $y$ is unknown. <strong>Not sufficient.</strong>",
              "Statement (2) alone: gives $y$, but no relationship to $x$. <strong>Not sufficient.</strong>",
              "Together: $x = 0.2 \\times 40 = 8$. <strong>Sufficient.</strong>",
              "Answer: C."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 3 =================
{
  id: "gm3", number: 3, title: "Ratios, Rates & Proportions",
  blurb: "Splitting quantities by ratio and combining rates.",
  lessons: [
    {
      id: "gm3-l1", title: "Ratios and Rates",
      blocks: [
        { type: "html", content: "<h4>Part-to-Whole from a Ratio</h4><p>If $A:B = m:n$, split the total into $m+n$ equal \"parts\" — each part is worth $\\frac{\\text{total}}{m+n}$.</p>" },
        { type: "html", content: "<h4>Rate = Distance / Time</h4><p>You need <em>two</em> of the three quantities (distance, rate, time) to find the third — one alone is never enough.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "The ratio of boys to girls in a class is 3:4. If there are 35 students total, how many girls are there?",
            options: [ {key:"A", text:"15"}, {key:"B", text:"18"}, {key:"C", text:"20"}, {key:"D", text:"21"}, {key:"E", text:"24"} ],
            correct: "C",
            steps: [
              "Total parts $= 3+4 = 7$. Each part $= 35/7 = 5$.",
              "Girls $= 4 \\times 5 = 20$."
            ]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "A car travels from Town A to Town B at a constant speed. What is its average speed?",
            statements: ["(1) The distance between the towns is 240 miles.", "(2) The trip takes 4 hours."],
            correct: "C",
            steps: [
              "Statement (1) alone: distance only, no time. <strong>Not sufficient.</strong>",
              "Statement (2) alone: time only, no distance. <strong>Not sufficient.</strong>",
              "Together: speed $= 240/4 = 60$ mph. <strong>Sufficient.</strong> Answer: C."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 4 =================
{
  id: "gm4", number: 4, title: "Exponents & Roots",
  blurb: "Base rules, even vs. odd roots, and the traps hiding in each.",
  lessons: [
    {
      id: "gm4-l1", title: "Exponent & Root Rules",
      blocks: [
        { type: "html", content: "<h4>Core Rules</h4><ul><li>$x^a \\cdot x^b = x^{a+b}$, &nbsp; $\\dfrac{x^a}{x^b}=x^{a-b}$, &nbsp; $(x^a)^b = x^{ab}$</li><li>$\\sqrt{x^2}=|x|$ — even roots only return the non-negative value.</li><li>Odd roots (like $\\sqrt[3]{\\cdot}$) preserve sign and are always unique: $\\sqrt[3]{x^3}=x$ for any real $x$.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "If $2^x = 32$, what is $x$?",
            options: [ {key:"A", text:"3"}, {key:"B", text:"4"}, {key:"C", text:"5"}, {key:"D", text:"6"}, {key:"E", text:"7"} ],
            correct: "C",
            steps: ["$32 = 2^5$, so $x = 5$."]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "Is $x > 0$?",
            statements: ["(1) $x^2 = 16$.", "(2) $x^3 = 64$."],
            correct: "B",
            steps: [
              "Statement (1): $x^2=16 \\Rightarrow x = 4$ or $x=-4$ — two possibilities. <strong>Not sufficient.</strong>",
              "Statement (2): odd powers preserve a unique real root, so $x^3=64 \\Rightarrow x=4$ only. <strong>Sufficient.</strong>",
              "Answer: B."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 5 =================
{
  id: "gm5", number: 5, title: "Algebraic Expressions, Equations & Inequalities",
  blurb: "Solving for unknowns and manipulating inequalities without flipping signs by accident.",
  lessons: [
    {
      id: "gm5-l1", title: "Equations and Inequalities",
      blocks: [
        { type: "html", content: "<h4>Solving Linear Equations</h4><p>Isolate the variable by performing the same operation to both sides. Distribute carefully before combining like terms.</p>" },
        { type: "html", content: "<h4>Inequality Rule</h4><p>Multiplying or dividing both sides by a <strong>negative</strong> number flips the inequality sign. Adding/subtracting never flips it.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "If $3(x - 2) = x + 8$, what is $x$?",
            options: [ {key:"A", text:"5"}, {key:"B", text:"6"}, {key:"C", text:"7"}, {key:"D", text:"8"}, {key:"E", text:"9"} ],
            correct: "C",
            steps: ["$3x - 6 = x + 8 \\Rightarrow 2x = 14 \\Rightarrow x = 7$."]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "Is $x > y$?",
            statements: ["(1) $x + 3 > y + 3$.", "(2) $x - y > 0$."],
            correct: "D",
            steps: [
              "Statement (1): subtract 3 from both sides $\\Rightarrow x > y$ directly. <strong>Sufficient.</strong>",
              "Statement (2): $x - y > 0 \\Rightarrow x > y$ directly. <strong>Sufficient.</strong>",
              "Each statement alone is sufficient — answer D."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 6 =================
{
  id: "gm6", number: 6, title: "Linear & Quadratic Equations",
  blurb: "Factoring, the discriminant, and reading a parabola.",
  lessons: [
    {
      id: "gm6-l1", title: "Quadratics",
      widget: "quadraticGrapher",
      blocks: [
        { type: "html", content: "<p>Use the grapher above to see how $a$, $b$, and $c$ shape the parabola, its roots, and its vertex.</p><h4>Factoring a Quadratic</h4><p>To solve $x^2 - 5x + 6 = 0$, find two numbers that multiply to $6$ and add to $-5$: $-2$ and $-3$.</p>$$(x-2)(x-3) = 0 \\implies x = 2 \\text{ or } x = 3$$" },
        { type: "html", content: "<h4>The Discriminant</h4><p>For $ax^2+bx+c=0$: $\\Delta = b^2-4ac$ tells you the number of real roots (2 if positive, 1 if zero, 0 if negative) without solving.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "What are the roots of $x^2 - 5x + 6 = 0$?",
            options: [ {key:"A", text:"1 and 6"}, {key:"B", text:"2 and 3"}, {key:"C", text:"-2 and -3"}, {key:"D", text:"1 and -6"}, {key:"E", text:"-1 and 6"} ],
            correct: "B",
            steps: ["$(x-2)(x-3)=0 \\Rightarrow x=2$ or $x=3$."]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "Does the equation $x^2 + bx + c = 0$ have two distinct real roots?",
            statements: ["(1) $b^2 - 4c > 0$.", "(2) $c < 0$."],
            correct: "D",
            steps: [
              "Statement (1) is literally the discriminant condition for two distinct real roots. <strong>Sufficient.</strong>",
              "Statement (2): if $c<0$, then $-4c>0$, so $b^2 - 4c = b^2 + (\\text{positive}) > 0$ for <em>any</em> $b$. <strong>Sufficient.</strong>",
              "Each statement alone is sufficient — answer D."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 7 =================
{
  id: "gm7", number: 7, title: "Functions & Sequences",
  blurb: "Evaluating functions and finding terms in a sequence.",
  lessons: [
    {
      id: "gm7-l1", title: "Sequences",
      widget: "sequenceExplorer",
      blocks: [
        { type: "html", content: "<p>Build your own sequence above and check the term/sum formulas instantly.</p><h4>Arithmetic Sequences</h4>$$a_n = a_1 + (n-1)d$$<h4>Geometric Sequences</h4>$$a_n = a_1 \\cdot r^{(n-1)}$$" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "In the sequence where $a_1 = 5$ and $a_n = a_{n-1} + 3$, what is $a_4$?",
            options: [ {key:"A", text:"8"}, {key:"B", text:"11"}, {key:"C", text:"14"}, {key:"D", text:"17"}, {key:"E", text:"20"} ],
            correct: "C",
            steps: ["$a_1=5, a_2=8, a_3=11, a_4=14$."]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "What is the 10th term of an arithmetic sequence?",
            statements: ["(1) The first term is 4.", "(2) The common difference is 6."],
            correct: "C",
            steps: [
              "You need both the first term <em>and</em> the common difference to find any specific term.",
              "Statement (1) alone: missing $d$. <strong>Not sufficient.</strong> Statement (2) alone: missing $a_1$. <strong>Not sufficient.</strong>",
              "Together: $a_{10} = 4 + 9(6) = 58$. <strong>Sufficient.</strong> Answer: C."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 8 =================
{
  id: "gm8", number: 8, title: "Word Problems",
  blurb: "Work rate, mixtures, and revenue problems — translating words into equations.",
  lessons: [
    {
      id: "gm8-l1", title: "Work, Mixture & Revenue Problems",
      blocks: [
        { type: "html", content: "<h4>Work Rate</h4><p>Individual rates add:</p>$$\\frac{1}{T_{\\text{combined}}} = \\frac{1}{t_1} + \\frac{1}{t_2}$$" },
        { type: "html", content: "<h4>Mixture Balance</h4>$$C_1V_1 + C_2V_2 = C_{\\text{final}}(V_1+V_2)$$" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "Pump A can fill a tank alone in 6 hours; Pump B can fill it alone in 3 hours. How long will it take both pumps together?",
            options: [ {key:"A", text:"1 hour"}, {key:"B", text:"1.5 hours"}, {key:"C", text:"2 hours"}, {key:"D", text:"2.5 hours"}, {key:"E", text:"4.5 hours"} ],
            correct: "C",
            steps: [
              "Combined rate $= \\frac16 + \\frac13 = \\frac16+\\frac26 = \\frac36 = \\frac12$ tank/hour.",
              "Time $= 1 \\div \\frac12 = 2$ hours."
            ]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "A store sells only pens and pencils. Yesterday's total revenue was \\$100. How many pens were sold?",
            statements: ["(1) Pens cost \\$2 each and pencils cost \\$1 each.", "(2) 60 pencils were sold."],
            correct: "C",
            steps: [
              "Statement (1) alone: gives prices but not quantities of each — two unknowns, one equation. <strong>Not sufficient.</strong>",
              "Statement (2) alone: gives pencil count but no prices, can't isolate pens. <strong>Not sufficient.</strong>",
              "Together: $2P + 60(1) = 100 \\Rightarrow P = 20$. <strong>Sufficient.</strong> Answer: C."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 9 =================
{
  id: "gm9", number: 9, title: "Statistics & Data",
  blurb: "Mean, median, and standard deviation — and what actually changes them.",
  lessons: [
    {
      id: "gm9-l1", title: "Central Tendency & Spread",
      blocks: [
        { type: "html", content: "<h4>Mean vs. Median</h4><p>Mean is pulled by outliers; median is not. For an even-sized set, the median is the average of the two middle values.</p>" },
        { type: "html", content: "<h4>Standard Deviation Shortcuts</h4><ul><li>Adding/subtracting a constant to every term: mean shifts, <strong>SD unchanged</strong>.</li><li>Multiplying every term by $k$: both mean and SD scale by $|k|$.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "What is the median of the data set {4, 8, 15, 16, 23, 42}?",
            options: [ {key:"A", text:"14"}, {key:"B", text:"15"}, {key:"C", text:"15.5"}, {key:"D", text:"16"}, {key:"E", text:"19.5"} ],
            correct: "C",
            steps: ["Even count (6 values), so median $= \\frac{15+16}{2} = 15.5$."]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "What is the standard deviation of set $S$?",
            statements: ["(1) Every element of $S$ is 5 more than the corresponding element of set $T$.", "(2) $S = \\{2, 4, 6, 8, 10\\}$."],
            correct: "B",
            steps: [
              "Statement (1) alone: describes a relationship to an unknown set $T$, giving no actual values. <strong>Not sufficient.</strong>",
              "Statement (2) alone: gives the explicit set — standard deviation is directly computable. <strong>Sufficient.</strong>",
              "Answer: B."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 10 =================
{
  id: "gm10", number: 10, title: "Probability & Combinatorics",
  blurb: "Counting outcomes and computing probability without listing everything out.",
  lessons: [
    {
      id: "gm10-l1", title: "Counting & Probability",
      widget: "combinatoricsCalculator",
      blocks: [
        { type: "html", content: "<p>Use the calculator above to check $P(n,r)$ and $C(n,r)$ for any values.</p><h4>Permutations vs. Combinations</h4><ul><li><strong>Order matters</strong> (arranging): $P(n,r) = \\dfrac{n!}{(n-r)!}$</li><li><strong>Order doesn't matter</strong> (selecting): $C(n,r) = \\dfrac{n!}{r!(n-r)!}$</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "In how many ways can a committee of 3 be chosen from 8 people?",
            options: [ {key:"A", text:"24"}, {key:"B", text:"56"}, {key:"C", text:"112"}, {key:"D", text:"336"}, {key:"E", text:"512"} ],
            correct: "B",
            steps: ["Order doesn't matter for a committee, so use $C(8,3) = \\dfrac{8!}{3!5!} = 56$."]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "A bag contains only red and blue marbles. What is the probability of drawing a red marble at random?",
            statements: ["(1) There are 12 red marbles.", "(2) There are 8 blue marbles."],
            correct: "C",
            steps: [
              "Statement (1) alone: red count known, but total (need blue count too) unknown. <strong>Not sufficient.</strong>",
              "Statement (2) alone: blue count known, red unknown. <strong>Not sufficient.</strong>",
              "Together: total $=20$, $P(\\text{red}) = 12/20 = 3/5$. <strong>Sufficient.</strong> Answer: C."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 11 =================
{
  id: "gm11", number: 11, title: "Geometry Essentials",
  blurb: "A lighter geometry pass — the GMAT Focus Edition tests it less than the old GMAT, but it still shows up.",
  lessons: [
    {
      id: "gm11-l1", title: "Triangles & the Coordinate Plane",
      widget: "triangleExplorer",
      blocks: [
        { type: "html", content: "<p>Drag the triangle above to explore how side lengths and angles relate.</p><h4>Pythagorean Theorem</h4>$$a^2+b^2=c^2$$<p>Know the common triples: 3-4-5, 5-12-13, 8-15-17 (and their multiples).</p>" },
        { type: "html", content: "<h4>Coordinate Geometry Basics</h4><ul><li><strong>Distance</strong> between $(x_1,y_1)$ and $(x_2,y_2)$: $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$</li><li><strong>Slope:</strong> $\\dfrac{y_2-y_1}{x_2-x_1}$</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "A rectangle has length 12 and width 5. What is the length of its diagonal?",
            options: [ {key:"A", text:"12"}, {key:"B", text:"12.5"}, {key:"C", text:"13"}, {key:"D", text:"17"}, {key:"E", text:"60"} ],
            correct: "C",
            steps: ["The diagonal splits the rectangle into two right triangles with legs 12 and 5: $\\sqrt{144+25}=\\sqrt{169}=13$ — the 5-12-13 triple."]
          },
          {
            kind: "DS", title: "Data Sufficiency",
            context: "What is the area of triangle $ABC$?",
            statements: ["(1) Triangle $ABC$ is a right triangle with legs 6 and 8.", "(2) Triangle $ABC$ has a perimeter of 24."],
            correct: "A",
            steps: [
              "Statement (1) alone: area $= \\frac12(6)(8) = 24$, directly computable. <strong>Sufficient.</strong>",
              "Statement (2) alone: many different triangles share the same perimeter but have different areas. <strong>Not sufficient.</strong>",
              "Answer: A."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 12 =================
{
  id: "gm12", number: 12, title: "Data Sufficiency Mastery",
  blurb: "The GMAT's signature question format — a strategy chapter, not a math chapter.",
  lessons: [
    {
      id: "gm12-l1", title: "The AD/BCE Method",
      widget: "dataSufficiencyCoach",
      blocks: [
        { type: "html", content: "<p>Use the coach above to practice the elimination logic before you even look at the math.</p><h4>The Golden Rule</h4><p>Data Sufficiency never asks you to <em>solve</em> — only to decide whether you have <strong>enough information to solve</strong>. Evaluate each statement completely independently; once you've used information from Statement (1), <strong>forget it</strong> before you look at Statement (2).</p>" },
        { type: "html", content: "<h4>The Five Answer Choices, Memorized as \"AD / BCE\"</h4><ul><li><strong>A</strong> — Statement (1) alone works, (2) alone does not.</li><li><strong>B</strong> — Statement (2) alone works, (1) alone does not.</li><li><strong>C</strong> — Neither alone works, but together they do.</li><li><strong>D</strong> — Each statement alone works.</li><li><strong>E</strong> — Not even both statements together are enough.</li></ul>" },
        { type: "html", content: "<h4>Two Question Types</h4><ul><li><strong>Value questions</strong> (\"What is $x$?\"): a statement is sufficient only if it pins down <em>exactly one</em> possible value.</li><li><strong>Yes/No questions</strong> (\"Is $x$ even?\"): a statement is sufficient if it gives a <em>definite</em> always-yes or always-no answer — even \"always no\" counts as sufficient!</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "DS", title: "Data Sufficiency",
            context: "Is the integer $n$ even?",
            statements: ["(1) $n/2$ is an integer.", "(2) $3n$ is an even integer."],
            correct: "D",
            steps: [
              "Statement (1): $n/2$ being an integer means $n$ divides evenly by 2 — that's the definition of even. <strong>Sufficient.</strong>",
              "Statement (2): since 3 is odd, $3n$ is even if and only if $n$ is even (odd × odd = odd, odd × even = even). <strong>Sufficient.</strong>",
              "Each statement alone is sufficient — answer D. Notice both statements led to the same guaranteed \"yes,\" just via different logic."
            ]
          }
        ]}
      ]
    }
  ]
}

];

if (typeof window !== "undefined") window.GMAT_QUANT_CHAPTERS = GMAT_QUANT_CHAPTERS;
if (typeof module !== "undefined") module.exports = { GMAT_QUANT_CHAPTERS };
