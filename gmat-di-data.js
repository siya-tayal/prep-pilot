// GMAT Focus Edition: Data Insights curriculum.
// Covers all five official DI question types: Data Sufficiency, Graphics
// Interpretation, Table Analysis, Two-Part Analysis, and Multi-Source Reasoning.

const GMAT_DI_CHAPTERS = [

// ================= CHAPTER 1 =================
{
  id: "di1", number: 1, title: "Data Sufficiency in Data Insights",
  blurb: "The same sufficiency logic from Quant, now sometimes wrapped in charts, tables, or short passages.",
  lessons: [
    {
      id: "di1-l1", title: "Sufficiency With Context",
      video: { id: "YPb38wBdhJM", title: "Data Insights Ep. 9: How to Approach Data Sufficiency", channel: "GMAT Ninja" },
      blocks: [
        { type: "html", content: "<h4>The Core Approach</h4><p>Data Sufficiency in the Data Insights section works exactly like Quant DS: you get a question and two statements, and you decide whether each statement, alone or together, pins down exactly one answer. The only difference is that the surrounding context can now include a short passage, chart, or table instead of a plain equation.</p>" },
        { type: "html", content: "<h4>Two Fast Shortcuts</h4><ul><li>If a statement never mentions the target variable at all, it is immediately insufficient. You do not need to read it twice.</li><li>You almost never need to compute an exact value. You only need to know whether a unique value or a definite yes/no is guaranteed.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "DS", title: "Data Sufficiency",
            context: "A company's revenue this year is $R$. What is $R$?",
            statements: ["(1) Revenue grew 12% from last year's $R_0$.", "(2) Last year's revenue $R_0$ was $2,500,000."],
            correct: "C",
            steps: [
              "Statement (1) alone: gives a growth rate but not a starting value, so $R$ could be anything. <strong>Not sufficient.</strong>",
              "Statement (2) alone: gives last year's revenue but no growth rate, so this year's $R$ is unknown. <strong>Not sufficient.</strong>",
              "Together: $R = 2{,}500{,}000 \\times 1.12 = 2{,}800{,}000$. <strong>Sufficient.</strong> Answer: C."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 2 =================
{
  id: "di2", number: 2, title: "Graphics Interpretation",
  blurb: "Reading charts accurately and estimating instead of over-calculating.",
  lessons: [
    {
      id: "di2-l1", title: "Reading Charts Under Time Pressure",
      widget: "diChartExplorer",
      blocks: [
        { type: "html", content: "<p>Hover over the bars above to see the exact values behind the chart. Graphics Interpretation questions ask you to read a chart like this and fill in a blank or pick an answer, often about a percent change or a comparison.</p><h4>Strategy</h4><ul><li>Read the title and axis labels before anything else. A surprising number of wrong answers come from misreading what is actually being measured.</li><li>Estimate rather than calculate exactly whenever the answer choices are spread out. If the choices are 20%, 50%, 100%, and 200%, you rarely need a calculator to tell them apart.</li><li>Round the way the question tells you to, usually to the nearest 10%.</li></ul>" },
        { type: "html", content: "<h4>Common Pitfall</h4><p>Do not assume one variable causes another just because they moved together on the chart. Graphics Interpretation only tests what the data shows, not why it happened.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "Using the chart above, between 2009 and 2023, City A's visitor count increased by approximately what percent?",
            options: [ {key:"A", text:"80%"}, {key:"B", text:"100%"}, {key:"C", text:"120%"}, {key:"D", text:"150%"}, {key:"E", text:"220%"} ],
            correct: "C",
            steps: [
              "City A went from 10,000 to 22,000 visitors.",
              "Percent increase $= \\dfrac{22{,}000 - 10{,}000}{10{,}000} \\times 100 = 120\\%$."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 3 =================
{
  id: "di3", number: 3, title: "Table Analysis",
  blurb: "Sorting a table in your head and checking statements against it.",
  lessons: [
    {
      id: "di3-l1", title: "Working a Sortable Table",
      blocks: [
        { type: "html", content: "<p>Table Analysis gives you a data table (sortable on the real exam) and a set of statements to mark true or false. Before reading the statements, scan the table to see which columns exist. When you read each statement, decide which column or combination of columns actually answers it.</p>" },
        { type: "table", headers: ["Rep", "Region", "Q1 Sales", "Q2 Sales"], rows: [
          ["Alice", "East", "$42,000", "$51,000"],
          ["Ben", "West", "$38,000", "$36,000"],
          ["Carla", "East", "$55,000", "$60,000"],
          ["Dan", "South", "$47,000", "$44,000"]
        ]},
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "Using the table above: \"More than half of the reps had higher Q2 sales than Q1 sales.\" Is this statement true or false?",
            options: [ {key:"A", text:"True"}, {key:"B", text:"False"} ],
            correct: "B",
            steps: [
              "Compare each rep: Alice increased, Ben decreased, Carla increased, Dan decreased.",
              "Only 2 of the 4 reps (50%) increased, which is not more than half.",
              "The statement is false."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 4 =================
{
  id: "di4", number: 4, title: "Two-Part Analysis",
  blurb: "Two connected answers that have to agree with each other, quantitative or verbal.",
  lessons: [
    {
      id: "di4-l1", title: "Quantitative and Verbal Two-Part Analysis",
      blocks: [
        { type: "html", content: "<h4>Quantitative TPA</h4><p>Treat it as a system of two equations in two unknowns. Identify the two variables first, write an equation for each piece of information, then solve them together, exactly like the simultaneous equations you already know from Quant.</p>" },
        { type: "html", content: "<h4>Verbal TPA</h4><p>Often shown as one column for an assumption and one for supporting evidence. Isolate the conclusion first, then find the single answer that must be true for the argument to work (the assumption) and the single answer that best supports it (the evidence). The two picks must be consistent with each other, an answer that fits only in isolation is not valid.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving (Quantitative TPA)",
            context: "A company's $50,000 marketing budget is split between online ads and print ads. The online ads cost is $8,000 more than twice the print ads cost. What is spent on print ads, and what is spent on online ads?",
            options: [ {key:"A", text:"Print $12,000 / Online $38,000"}, {key:"B", text:"Print $14,000 / Online $36,000"}, {key:"C", text:"Print $16,000 / Online $34,000"}, {key:"D", text:"Print $18,000 / Online $32,000"}, {key:"E", text:"Print $20,000 / Online $30,000"} ],
            correct: "B",
            steps: [
              "Let print $= p$ and online $= 2p + 8000$.",
              "$p + (2p + 8000) = 50{,}000 \\Rightarrow 3p = 42{,}000 \\Rightarrow p = 14{,}000$.",
              "Online $= 2(14{,}000) + 8{,}000 = 36{,}000$."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 5 =================
{
  id: "di5", number: 5, title: "Multi-Source Reasoning",
  blurb: "Combining information spread across two or three tabs.",
  lessons: [
    {
      id: "di5-l1", title: "Reading Across Multiple Tabs",
      blocks: [
        { type: "html", content: "<p>Multi-Source Reasoning spreads information across two or three tabs, often a mix of text, a table, and a chart. Read each tab on its own first so you understand what it says by itself, then bring the tabs together only when a question requires it. For inference questions, your conclusion must be supported by the combined information, not by either tab alone.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Problem Solving",
            context: "Tab 1 (Company Policy): Employees with more than 5 years of tenure receive 20 vacation days per year; all others receive 15. Tab 2 (Employee Roster): Employee X has 6 years of tenure. Employee Y has 3 years of tenure. How many total vacation days do X and Y receive combined?",
            options: [ {key:"A", text:"30"}, {key:"B", text:"32"}, {key:"C", text:"35"}, {key:"D", text:"38"}, {key:"E", text:"40"} ],
            correct: "C",
            steps: [
              "X has 6 years (more than 5), so X gets 20 days.",
              "Y has 3 years (not more than 5), so Y gets 15 days.",
              "Combined: $20 + 15 = 35$ days."
            ]
          }
        ]}
      ]
    }
  ]
}

];

if (typeof window !== "undefined") window.GMAT_DI_CHAPTERS = GMAT_DI_CHAPTERS;
