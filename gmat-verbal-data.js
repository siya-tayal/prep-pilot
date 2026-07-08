// GMAT Focus Edition: Verbal Reasoning curriculum.
// The Focus Edition tests Critical Reasoning and Reading Comprehension.
// Sentence Correction is no longer a separately scored question type, but
// a short grammar refresher is included since strong grammar instincts
// still make both CR and RC faster to read.

const GMAT_VERBAL_CHAPTERS = [

// ================= CHAPTER 1 =================
{
  id: "gv1", number: 1, title: "Critical Reasoning",
  blurb: "Reading a short argument the way the test wants you to: question first, then structure, then answer.",
  lessons: [
    {
      id: "gv1-l1", title: "Argument Structure and Question Types",
      widget: "crLogicTree",
      blocks: [
        { type: "html", content: "<p>Click through the process tree above. This is the order experienced test takers actually work in, not the order the question is printed in.</p><h4>Read the Question Stem First</h4><p>Knowing you are looking for a weakener before you read the argument changes how you read it. Common CR question types: strengthen, weaken, assumption, flaw, inference, and method of reasoning.</p>" },
        { type: "html", content: "<h4>Isolate the Conclusion</h4><p>Every argument has a conclusion (what the author wants you to believe) and premises (the evidence given for it). Ask yourself \"why does the author think the conclusion follows from the premises?\" The gap between the two is usually where the assumption, flaw, or weakness lives.</p>" },
        { type: "html", content: "<h4>Common Fallacies to Watch For</h4><ul><li><strong>Correlation vs. causation:</strong> two things happening together does not mean one caused the other.</li><li><strong>Hasty generalization:</strong> drawing a broad conclusion from a small or unusual sample.</li><li><strong>Percentage vs. absolute numbers:</strong> a rising percentage does not always mean a rising total, and vice versa.</li></ul>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Critical Reasoning",
            context: "A city council reported that downtown traffic congestion fell 15% in the six months after a new bus line opened. The council concluded that the new bus line caused the drop in congestion. Which of the following, if true, would most weaken the council's conclusion?",
            options: [
              {key:"A", text:"The bus line has been popular with commuters since it opened."},
              {key:"B", text:"During the same six months, a major downtown employer relocated its office to the suburbs, reducing the number of commuters overall."},
              {key:"C", text:"The city operates several other bus lines that were not included in the study."},
              {key:"D", text:"Traffic congestion is measured using automated sensors at major intersections."},
              {key:"E", text:"The bus line cost less to build than the city originally budgeted."}
            ],
            correct: "B",
            steps: [
              "The council's argument assumes the bus line is the reason congestion dropped, but it never rules out other explanations.",
              "Option B introduces a completely separate cause (fewer commuters overall due to an employer relocating) that could explain the drop in congestion on its own, weakening the claim that the bus line was responsible.",
              "The other options are either irrelevant to the cause of the drop or simply background detail."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 2 =================
{
  id: "gv2", number: 2, title: "Reading Comprehension",
  blurb: "Mapping a passage as you read it so the questions become a lookup, not a re-read.",
  lessons: [
    {
      id: "gv2-l1", title: "Passage Mapping",
      blocks: [
        { type: "html", content: "<h4>Map While You Read</h4><p>For each paragraph, jot a short note (mentally or on your scratch pad) capturing its main idea and the author's tone. Pay close attention to the first and last sentence of each paragraph and to transition words like \"however\" and \"thus,\" which usually mark a shift in the argument.</p>" },
        { type: "html", content: "<h4>Answering by Type</h4><ul><li><strong>Detail questions:</strong> go back and locate the exact sentence, do not rely on memory.</li><li><strong>Inference questions:</strong> the correct answer must be directly supported by the passage, not just plausible. If an answer adds outside information, eliminate it.</li><li><strong>Main idea questions:</strong> the correct answer covers the whole passage, not just one paragraph.</li></ul>" },
        { type: "html", content: "<h4>Elimination</h4><p>Wrong RC answers usually distort a detail from the passage or introduce something the passage never said. Cross out anything that falls outside the passage's scope before you compare the remaining choices.</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Reading Comprehension",
            context: "\"Although solar power generation costs have fallen sharply over the past decade, many utility companies remain hesitant to expand solar capacity. This reluctance stems not from solar's price, but from the intermittency problem: solar panels produce no electricity at night and reduced amounts on cloudy days, requiring utilities to maintain expensive backup generation capacity that sits idle much of the time.\" The passage suggests that the primary obstacle to utility companies adopting solar power is:",
            options: [
              {key:"A", text:"The high upfront cost of installing solar panels"},
              {key:"B", text:"Public opposition to large solar farms"},
              {key:"C", text:"The inconsistent availability of sunlight"},
              {key:"D", text:"Restrictive government regulations"},
              {key:"E", text:"Competition from wind power companies"}
            ],
            correct: "C",
            steps: [
              "The passage explicitly says the reluctance \"stems not from solar's price, but from the intermittency problem,\" ruling out option A.",
              "It defines that problem as panels producing \"no electricity at night and reduced amounts on cloudy days,\" which is a direct description of inconsistent sunlight availability.",
              "Options B, D, and E are never mentioned in the passage."
            ]
          }
        ]}
      ]
    }
  ]
},

// ================= CHAPTER 3 =================
{
  id: "gv3", number: 3, title: "Grammar Fundamentals",
  blurb: "The GMAT Focus Edition does not test Sentence Correction directly, but sharp grammar instincts make Critical Reasoning and Reading Comprehension faster to read.",
  lessons: [
    {
      id: "gv3-l1", title: "The Rules That Matter Most",
      blocks: [
        { type: "html", content: "<h4>Subject-Verb Agreement</h4><p>Match the verb to the true subject, not to a noun sitting inside a prepositional phrase in between. \"The list of items <em>is</em> long\" is correct because the subject is \"list,\" not \"items.\"</p>" },
        { type: "html", content: "<h4>Modifier Placement</h4><p>An opening modifier must describe the very next noun that follows it. \"Having finished the marathon, a wave of exhaustion swept over the runner\" is wrong because a wave of exhaustion cannot finish a marathon. It should read: \"Having finished the marathon, the runner felt a wave of exhaustion.\"</p>" },
        { type: "html", content: "<h4>Parallelism</h4><p>Items in a list or comparison should share the same grammatical form: \"She enjoys reading, writing, and to paint\" should be \"reading, writing, and painting.\"</p>" },
        { type: "practice", questions: [
          {
            kind: "MC", title: "Grammar",
            context: "Which version of the sentence is most grammatically correct?",
            options: [
              {key:"A", text:"Having finished the marathon, a wave of exhaustion swept over the runner."},
              {key:"B", text:"Having finished the marathon, the runner was swept over by a wave of exhaustion."},
              {key:"C", text:"A wave of exhaustion, having finished the marathon, swept over the runner."},
              {key:"D", text:"The runner, a wave of exhaustion sweeping over him, had finished the marathon."},
              {key:"E", text:"Finishing the marathon, a wave of exhaustion swept over the runner."}
            ],
            correct: "B",
            steps: [
              "The opening phrase \"Having finished the marathon\" must modify the person who finished the race, so the noun right after the comma should be \"the runner.\"",
              "Options A, C, and E all place \"a wave of exhaustion\" as the thing that finished the marathon, which does not make sense.",
              "Option B correctly places \"the runner\" immediately after the modifier."
            ]
          }
        ]}
      ]
    }
  ]
}

];

if (typeof window !== "undefined") window.GMAT_VERBAL_CHAPTERS = GMAT_VERBAL_CHAPTERS;
