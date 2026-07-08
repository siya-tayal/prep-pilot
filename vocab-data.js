// Manhattan Prep GRE vocabulary list, sourced from the public Quizlet-format PDF export.
// Each word has a full definition and a short "gloss" used as the correct flashcard answer;
// distractor options are drawn from other words' glosses at quiz time.

const VOCAB_WORDS = [
 {
  "word": "abase",
  "definition": "Degrade or humble; to lower in rank, status, or esteem",
  "gloss": "Degrade or humble"
 },
 {
  "word": "abate",
  "definition": "Reduce, diminish",
  "gloss": "Reduce, diminish"
 },
 {
  "word": "abdicate",
  "definition": "Formally give up the throne (or some other power or responsibility)",
  "gloss": "Formally give up the throne (or some other power or responsibility)"
 },
 {
  "word": "aberrant",
  "definition": "Abnormal, deviant",
  "gloss": "Abnormal, deviant"
 },
 {
  "word": "abeyance",
  "definition": "Temporary suspension, inactivity",
  "gloss": "Temporary suspension, inactivity"
 },
 {
  "word": "abhor",
  "definition": "Detest, regard with disgust",
  "gloss": "Detest, regard with disgust"
 },
 {
  "word": "abjure",
  "definition": "Give up, renounce; repudiate, recant, or shun (especially formally or under oath)",
  "gloss": "Give up, renounce"
 },
 {
  "word": "abrasive",
  "definition": "Rough, suitable for grinding or polishing (such as sandpaper); causing irritation or annoyance",
  "gloss": "Rough, suitable for grinding or polishing (such as sandpaper)"
 },
 {
  "word": "abreast",
  "definition": "Side-by-side. The more common \"abreast of\" means keeping up with, staying aware of, or remaining equal in progress with.",
  "gloss": "Side-by-side. The more common \"abreast of\" means keeping up with"
 },
 {
  "word": "abridge",
  "definition": "Reduce or lessen; shorten by omitting parts throughout while retaining the main idea",
  "gloss": "Reduce or lessen"
 },
 {
  "word": "abscission",
  "definition": "Cutting off; sudden termination; the separation of leaves, petals, or other parts from a plant or animal",
  "gloss": "Cutting off"
 },
 {
  "word": "abscond",
  "definition": "Depart suddenly and secretively",
  "gloss": "Depart suddenly and secretively"
 },
 {
  "word": "abstain",
  "definition": "Hold back, refrain (especially from something bad or unhealthy); decline to vote",
  "gloss": "Hold back, refrain (especially from something bad or unhealthy)"
 },
 {
  "word": "abyss",
  "definition": "A deep and vast space or cavity; anything profound or infinite",
  "gloss": "A deep and vast space or cavity"
 },
 {
  "word": "accede",
  "definition": "Agree, give consent; assume power (usually as \"accede to\")",
  "gloss": "Agree, give consent"
 },
 {
  "word": "accretion",
  "definition": "Gradual increase; an added part or addition",
  "gloss": "Gradual increase"
 },
 {
  "word": "acerbic",
  "definition": "Sour; harsh or severe",
  "gloss": "Sour"
 },
 {
  "word": "acidulous",
  "definition": "Slightly acid or sour; sharp or caustic",
  "gloss": "Slightly acid or sour"
 },
 {
  "word": "acme",
  "definition": "Summit, peak, highest point",
  "gloss": "Summit, peak, highest point"
 },
 {
  "word": "activism",
  "definition": "The practice of pursuing political or other goals through vigorous action, often including protests and demonstrations",
  "gloss": "The practice of pursuing political or other goals through vigorous action"
 },
 {
  "word": "acumen",
  "definition": "Keen, quick, accurate insight or judgment",
  "gloss": "Keen, quick, accurate insight or judgment"
 },
 {
  "word": "adhere",
  "definition": "Stick (to), such as with glue, or to a plan or belief",
  "gloss": "Stick (to), such as with glue, or to a plan or belief"
 },
 {
  "word": "admonish",
  "definition": "Mildly scold; caution, advise, or remind to do something",
  "gloss": "Mildly scold"
 },
 {
  "word": "adulterate",
  "definition": "Make impure by adding inappropriate or inferior ingredients",
  "gloss": "Make impure by adding inappropriate or inferior ingredients"
 },
 {
  "word": "adumbrate",
  "definition": "Give a rough outline of; foreshadow; reveal only partially; obscure",
  "gloss": "Give a rough outline of"
 },
 {
  "word": "adverse",
  "definition": "Opposing, harmful",
  "gloss": "Opposing, harmful"
 },
 {
  "word": "advocate",
  "definition": "Speak or argue in favor of (verb); a person who pleads for a cause or on behalf of another person (noun)",
  "gloss": "Speak or argue in favor of"
 },
 {
  "word": "aerie",
  "definition": "Dwelling or fortress built on a high place; the nest of a bird of prey, such as an eagle or hawk, built on a mountain or cliff",
  "gloss": "Dwelling or fortress built on a high place"
 },
 {
  "word": "aesthetic",
  "definition": "Concerning the appreciation of beauty or good taste, pertaining to the science of what is beautiful (adj); a sense of beauty and taste of a particular time and place (noun)",
  "gloss": "Concerning the appreciation of beauty or good taste"
 },
 {
  "word": "affable",
  "definition": "Warm and friendly, pleasant, approachable",
  "gloss": "Warm and friendly, pleasant, approachable"
 },
 {
  "word": "affectation",
  "definition": "Fake behavior (such as in speech or dress) adopted to give a certain impression",
  "gloss": "Fake behavior (such as in speech or dress) adopted to give a certain impression"
 },
 {
  "word": "aggrandize",
  "definition": "Make greater; exaggerate",
  "gloss": "Make greater"
 },
 {
  "word": "aggregate",
  "definition": "Gather together, amount to (verb); constituting a whole made up of constituent parts (adj)",
  "gloss": "Gather together, amount to"
 },
 {
  "word": "alacrity",
  "definition": "Cheerful or speedy willingness",
  "gloss": "Cheerful or speedy willingness"
 },
 {
  "word": "albeit",
  "definition": "Although, even though",
  "gloss": "Although, even though"
 },
 {
  "word": "alienate",
  "definition": "Cause to become unfriendly, hostile, or distant",
  "gloss": "Cause to become unfriendly, hostile, or distant"
 },
 {
  "word": "alleviate",
  "definition": "Lessen, make easier to endure",
  "gloss": "Lessen, make easier to endure"
 },
 {
  "word": "aloof",
  "definition": "Distant physically or emotionally; reserved; indifferent",
  "gloss": "Distant physically or emotionally"
 },
 {
  "word": "amalgamate",
  "definition": "Blend, merge, or unite",
  "gloss": "Blend, merge, or unite"
 },
 {
  "word": "ambiguous",
  "definition": "Not clear, hard to understand, open to having several meanings or interpretations",
  "gloss": "Not clear"
 },
 {
  "word": "ambivalent",
  "definition": "Uncertain; unable to decide, or wanting to do two contradictory things at once",
  "gloss": "Uncertain"
 },
 {
  "word": "ameliorate",
  "definition": "Improve; make better or more bearable",
  "gloss": "Improve"
 },
 {
  "word": "amortize",
  "definition": "Gradually pay off a debt, or gradually write off an asset",
  "gloss": "Gradually pay off a debt, or gradually write off an asset"
 },
 {
  "word": "anachronism",
  "definition": "Something that is not in its correct historical time; a mistake in chronology, such as by assigning a person or event to the wrong time period",
  "gloss": "Something that is not in its correct historical time"
 },
 {
  "word": "analgesia",
  "definition": "Pain relief; inability to feel pain",
  "gloss": "Pain relief"
 },
 {
  "word": "analogous",
  "definition": "Comparable, corresponding in some particular way (making a good analogy)",
  "gloss": "Comparable"
 },
 {
  "word": "anarchy",
  "definition": "Absence of law or government; chaos, disorder",
  "gloss": "Absence of law or government"
 },
 {
  "word": "annul",
  "definition": "Make void or null, cancel, abolish (usually of laws or other established rules)",
  "gloss": "Make void or null"
 },
 {
  "word": "anodyne",
  "definition": "Medicine that relieves pain (noun); soothing, relieving pain (adj)",
  "gloss": "Medicine that relieves pain"
 },
 {
  "word": "anoint",
  "definition": "Rub or sprinkle oil on; make sacred, such as by a ceremony that includes applying oil to someone",
  "gloss": "Rub or sprinkle oil on"
 },
 {
  "word": "anomaly",
  "definition": "Deviation from what is common; inconsistency",
  "gloss": "Deviation from what is common"
 },
 {
  "word": "antagonize",
  "definition": "Make hostile or unfriendly",
  "gloss": "Make hostile or unfriendly"
 },
 {
  "word": "antedate",
  "definition": "Be older than, precede in time; assign to an earlier date",
  "gloss": "Be older than, precede in time"
 },
 {
  "word": "antithetical",
  "definition": "Directly opposed, opposite; involving antithesis (the rhetorical act of placing two phrases opposite one another for contrast, as in love me or hate me)",
  "gloss": "Directly opposed, opposite"
 },
 {
  "word": "apathy",
  "definition": "Not caring; absence of feeling; lack of interest or concern",
  "gloss": "Not caring"
 },
 {
  "word": "apocryphal",
  "definition": "Of questionable authenticity; false",
  "gloss": "Of questionable authenticity"
 },
 {
  "word": "apostate",
  "definition": "Person who deserts a party, cause, religion, etc.",
  "gloss": "Person who deserts a party, cause, religion, etc"
 },
 {
  "word": "apostle",
  "definition": "Pioneer of a reform movement (originally, an early follower of Jesus)",
  "gloss": "Pioneer of a reform movement (originally, an early follower of Jesus)"
 },
 {
  "word": "apposite",
  "definition": "Highly appropriate, suitable, or relevant",
  "gloss": "Highly appropriate, suitable, or relevant"
 },
 {
  "word": "apprise",
  "definition": "Inform, give notice to",
  "gloss": "Inform, give notice to"
 },
 {
  "word": "approbation",
  "definition": "Praise or approval, especially formal approval",
  "gloss": "Praise or approval, especially formal approval"
 },
 {
  "word": "appropriate",
  "definition": "Set aside or authorize (such as money) for a particular purpose; take for one's own use",
  "gloss": "Set aside or authorize (such as money) for a particular purpose"
 },
 {
  "word": "arbiter",
  "definition": "Judge, umpire, person empowered to decide matters at hand",
  "gloss": "Judge, umpire, person empowered to decide matters at hand"
 },
 {
  "word": "arcane",
  "definition": "Known or understood by only a few; obscure, secret",
  "gloss": "Known or understood by only a few"
 },
 {
  "word": "archaic",
  "definition": "Characteristic of an earlier period, ancient, primitive",
  "gloss": "Characteristic of an earlier period, ancient, primitive"
 },
 {
  "word": "ardent",
  "definition": "Very passionate, devoted, or enthusiastic",
  "gloss": "Very passionate, devoted, or enthusiastic"
 },
 {
  "word": "arduous",
  "definition": "Very difficult, strenuous; severe, hard to endure",
  "gloss": "Very difficult, strenuous"
 },
 {
  "word": "arrogate",
  "definition": "Claim or take presumptuously or without the right to do so",
  "gloss": "Claim or take presumptuously or without the right to do so"
 },
 {
  "word": "articulate",
  "definition": "Using language in a clear, fluent way (adj); speak distinctly or give clarity to an idea (verb)",
  "gloss": "Using language in a clear, fluent way"
 },
 {
  "word": "artifact",
  "definition": "Any object made by humans, especially those from an earlier time, such as those excavated by archaeologists",
  "gloss": "Any object made by humans"
 },
 {
  "word": "artless",
  "definition": "Free of deceit or craftiness, natural, genuine; lacking skill or knowledge, crude, uncultured",
  "gloss": "Free of deceit or craftiness, natural, genuine"
 },
 {
  "word": "ascertain",
  "definition": "Find out with certainty",
  "gloss": "Find out with certainty"
 },
 {
  "word": "ascetic",
  "definition": "abstinent or austere in lifestyle (adj); a person who leads an austere and simple life without material pleasures, esp. someone who does this for religious reasons",
  "gloss": "Abstinent or austere in lifestyle"
 },
 {
  "word": "ascribe",
  "definition": "Assign or credit to a certain cause or source",
  "gloss": "Assign or credit to a certain cause or source"
 },
 {
  "word": "aseptic",
  "definition": "Free from germs",
  "gloss": "Free from germs"
 },
 {
  "word": "asperity",
  "definition": "Rigor, severity; harshness or sharpness of tone; roughness of surface",
  "gloss": "Rigor, severity"
 },
 {
  "word": "aspersions",
  "definition": "Damaging remarks, defamation, slander",
  "gloss": "Damaging remarks, defamation, slander"
 },
 {
  "word": "assail",
  "definition": "Attack violently, assault",
  "gloss": "Attack violently, assault"
 },
 {
  "word": "assiduous",
  "definition": "Persevering, diligent, constant",
  "gloss": "Persevering, diligent, constant"
 },
 {
  "word": "assuage",
  "definition": "Make milder, relieve; soothe, pacify, or calm",
  "gloss": "Make milder, relieve"
 },
 {
  "word": "attenuate",
  "definition": "Weaken or thin out",
  "gloss": "Weaken or thin out"
 },
 {
  "word": "attuned",
  "definition": "In harmony; in sympathetic relationship",
  "gloss": "In harmony"
 },
 {
  "word": "audacious",
  "definition": "Very bold or brave, often in a rude or reckless way; extremely original",
  "gloss": "Very bold or brave, often in a rude or reckless way"
 },
 {
  "word": "augment",
  "definition": "Make larger",
  "gloss": "Make larger"
 },
 {
  "word": "augury",
  "definition": "Telling the future, such as through supernatural means",
  "gloss": "Telling the future, such as through supernatural means"
 },
 {
  "word": "august",
  "definition": "Venerable, majestic; inspiring admiration",
  "gloss": "Venerable, majestic"
 },
 {
  "word": "austere",
  "definition": "Severe in manner or appearance; very self- disciplined, ascetic; without luxury or ease; sober or serious",
  "gloss": "Severe in manner or appearance"
 },
 {
  "word": "autonomous",
  "definition": "Self-governing, independent",
  "gloss": "Self-governing, independent"
 },
 {
  "word": "avarice",
  "definition": "Insatiable greed; a miserly desire to hoard wealth",
  "gloss": "Insatiable greed"
 },
 {
  "word": "aver",
  "definition": "Declare or affirm with confidence",
  "gloss": "Declare or affirm with confidence"
 },
 {
  "word": "avid",
  "definition": "Enthusiastic, dedicated, passionate; excessively desirous",
  "gloss": "Enthusiastic, dedicated, passionate"
 },
 {
  "word": "axiom",
  "definition": "Self-evident truth requiring no proof; universally or generally accepted principle",
  "gloss": "Self-evident truth requiring no proof"
 },
 {
  "word": "balk",
  "definition": "Refuse to proceed or to do something",
  "gloss": "Refuse to proceed or to do something"
 },
 {
  "word": "balloon",
  "definition": "Swell or puff out; increase rapidly",
  "gloss": "Swell or puff out"
 },
 {
  "word": "banal",
  "definition": "Lacking freshness and originality; cliché",
  "gloss": "Lacking freshness and originality"
 },
 {
  "word": "bane",
  "definition": "Something that ruins or spoils",
  "gloss": "Something that ruins or spoils"
 },
 {
  "word": "base",
  "definition": "Morally low, mean, dishonorable; of little or no value; crude and unrefined; counterfeit",
  "gloss": "Morally low, mean, dishonorable"
 },
 {
  "word": "baying",
  "definition": "Howling in a deep way, like a dog or wolf",
  "gloss": "Howling in a deep way, like a dog or wolf"
 },
 {
  "word": "belie",
  "definition": "Contradict or misrepresent",
  "gloss": "Contradict or misrepresent"
 },
 {
  "word": "beneficent",
  "definition": "Doing good",
  "gloss": "Doing good"
 },
 {
  "word": "benign",
  "definition": "Harmless; favorable; kindly, gentle, or beneficial; not cancerous",
  "gloss": "Harmless"
 },
 {
  "word": "bent",
  "definition": "Personal inclination or tendency",
  "gloss": "Personal inclination or tendency"
 },
 {
  "word": "besiege",
  "definition": "Attack, overwhelm, crowd in on or surround",
  "gloss": "Attack, overwhelm, crowd in on or surround"
 },
 {
  "word": "bevy",
  "definition": "Group of birds or other animals that stay close together; any large group",
  "gloss": "Group of birds or other animals that stay close together"
 },
 {
  "word": "bifurcate",
  "definition": "To fork into two branches or divide into two halves",
  "gloss": "To fork into two branches or divide into two halves"
 },
 {
  "word": "bilk",
  "definition": "Cheat or defraud",
  "gloss": "Cheat or defraud"
 },
 {
  "word": "blight",
  "definition": "Disease that kills plants rapidly, or any cause of decay or destruction (noun); ruin or cause to wither (verb)",
  "gloss": "Disease that kills plants rapidly"
 },
 {
  "word": "blithe",
  "definition": "Joyous, merry; excessively carefree (so as to ignore more important concerns)",
  "gloss": "Joyous, merry"
 },
 {
  "word": "bogus",
  "definition": "Fake, fraudulent",
  "gloss": "Fake, fraudulent"
 },
 {
  "word": "bolster",
  "definition": "Strengthen or support",
  "gloss": "Strengthen or support"
 },
 {
  "word": "bombastic",
  "definition": "(Of speech or writing) far too showy or dramatic than is appropriate; pretentious",
  "gloss": "(Of speech or writing) far too showy or dramatic than is appropriate"
 },
 {
  "word": "bonhomie",
  "definition": "Friendliness, open and simple good heartedness",
  "gloss": "Friendliness, open and simple good heartedness"
 },
 {
  "word": "boor",
  "definition": "Rude, ill-mannered, or insensitive person; a peasant or country bumpkin",
  "gloss": "Rude, ill-mannered, or insensitive person"
 },
 {
  "word": "brandish",
  "definition": "Shake, wave, or flourish, as a weapon",
  "gloss": "Shake, wave, or flourish, as a weapon"
 },
 {
  "word": "brook",
  "definition": "Suffer or tolerate",
  "gloss": "Suffer or tolerate"
 },
 {
  "word": "bucolic",
  "definition": "Pertaining to shepherds; suggesting a peaceful and pleasant view of rural life",
  "gloss": "Pertaining to shepherds"
 },
 {
  "word": "buffer",
  "definition": "Something that shields, protects, absorbs shock, or cushions",
  "gloss": "Something that shields, protects, absorbs shock, or cushions"
 },
 {
  "word": "bureaucracy",
  "definition": "Government characterized by many bureaus and petty administrators or by excessive, seemingly meaningless requirements",
  "gloss": "Government characterized by many bureaus and petty administrators or by excessive"
 },
 {
  "word": "burgeon",
  "definition": "Grow or flourish rapidly; put forth buds or shoots (of a plant)",
  "gloss": "Grow or flourish rapidly"
 },
 {
  "word": "burnish",
  "definition": "Polish, make smooth and lustrous",
  "gloss": "Polish, make smooth and lustrous"
 },
 {
  "word": "buttress",
  "definition": "Support or encourage (verb); a support or prop, esp. projecting from and supporting the wall of a building (noun)",
  "gloss": "Support or encourage"
 },
 {
  "word": "bygone",
  "definition": "Past, former (adj); that which is in the past (usually plural noun)",
  "gloss": "Past, former"
 },
 {
  "word": "cacophony",
  "definition": "Harsh, discordant, or meaningless mixture of sounds",
  "gloss": "Harsh, discordant, or meaningless mixture of sounds"
 },
 {
  "word": "calumny",
  "definition": "Malicious lie intended to hurt someone's reputation; the act of telling such lies",
  "gloss": "Malicious lie intended to hurt someone's reputation"
 },
 {
  "word": "canard",
  "definition": "Rumor, a false or baseless story",
  "gloss": "Rumor, a false or baseless story"
 },
 {
  "word": "candid",
  "definition": "Open, sincere, honest",
  "gloss": "Open, sincere, honest"
 },
 {
  "word": "canonical",
  "definition": "Authorized, recognized; pertaining to the canon, or body of accepted rules, standards or artistic works",
  "gloss": "Authorized, recognized"
 },
 {
  "word": "capricious",
  "definition": "Acting on impulse, erratic",
  "gloss": "Acting on impulse, erratic"
 },
 {
  "word": "cardinal",
  "definition": "Chief, most important",
  "gloss": "Chief, most important"
 },
 {
  "word": "cartography",
  "definition": "Mapmaking",
  "gloss": "Mapmaking"
 },
 {
  "word": "castigate",
  "definition": "Criticize severely; punish in order to correct",
  "gloss": "Criticize severely"
 },
 {
  "word": "catalyst",
  "definition": "Causer of change",
  "gloss": "Causer of change"
 },
 {
  "word": "catholic",
  "definition": "Universal, broad-minded",
  "gloss": "Universal, broad-minded"
 },
 {
  "word": "caustic",
  "definition": "Capable of corroding metal or burning the skin; very critical or sarcastic",
  "gloss": "Capable of corroding metal or burning the skin"
 },
 {
  "word": "censure",
  "definition": "Strong disapproval or official reprimand (noun); to issue such disapproval or reprimand (verb)",
  "gloss": "Strong disapproval or official reprimand"
 },
 {
  "word": "chauvinism",
  "definition": "Fanatical patriotism or blind enthusiasm for military glory; undue or biased devotion to any group, cause, etc.",
  "gloss": "Fanatical patriotism or blind enthusiasm for military glory"
 },
 {
  "word": "chicanery",
  "definition": "Trickery, deception by knowingly false arguments",
  "gloss": "Trickery, deception by knowingly false arguments"
 },
 {
  "word": "chronological",
  "definition": "Arranged in or relating to time order",
  "gloss": "Arranged in or relating to time order"
 },
 {
  "word": "circumscribe",
  "definition": "Strictly limit a role, range of activity, or area; in math, to be constructed around so as to touch as many points as possible",
  "gloss": "Strictly limit a role, range of activity, or area"
 },
 {
  "word": "circumspect",
  "definition": "Cautious, prudent; careful to consider the circumstances and consequences",
  "gloss": "Cautious, prudent"
 },
 {
  "word": "clamber",
  "definition": "Climb awkwardly or with difficulty, scramble",
  "gloss": "Climb awkwardly or with difficulty, scramble"
 },
 {
  "word": "clamor",
  "definition": "Noisy uproar or protest, as from a crowd; a loud, continuous noise",
  "gloss": "Noisy uproar or protest, as from a crowd"
 },
 {
  "word": "clinch",
  "definition": "Make final or settle conclusively; to fasten or hold together",
  "gloss": "Make final or settle conclusively"
 },
 {
  "word": "cloying",
  "definition": "Disgustingly or distastefully sweet",
  "gloss": "Disgustingly or distastefully sweet"
 },
 {
  "word": "coagulate",
  "definition": "Cause a liquid to become solid or semisolid",
  "gloss": "Cause a liquid to become solid or semisolid"
 },
 {
  "word": "coalesce",
  "definition": "Come together, unite; fuse together",
  "gloss": "Come together, unite"
 },
 {
  "word": "coda",
  "definition": "Final part of a musical composition; an ending, esp. one that sums up what has come before",
  "gloss": "Final part of a musical composition"
 },
 {
  "word": "coffer",
  "definition": "Chest for storing valuables; financial resources, a treasury",
  "gloss": "Chest for storing valuables"
 },
 {
  "word": "cogent",
  "definition": "Very convincing, logical",
  "gloss": "Very convincing, logical"
 },
 {
  "word": "collude",
  "definition": "Conspire; cooperate for illegal or fraudulent purposes",
  "gloss": "Conspire"
 },
 {
  "word": "commensurate",
  "definition": "The same in size, extent, etc., equivalent; proportional",
  "gloss": "The same in size, extent, etc., equivalent"
 },
 {
  "word": "compendium",
  "definition": "Concise but complete summary; a list or collection",
  "gloss": "Concise but complete summary"
 },
 {
  "word": "complacent",
  "definition": "Self-satisfied, smug; overly content (and therefore lazy, neglectful, or some other bad quality)",
  "gloss": "Self-satisfied, smug"
 },
 {
  "word": "complaisant",
  "definition": "Eager to please; cheerfully complying",
  "gloss": "Eager to please"
 },
 {
  "word": "complementary",
  "definition": "Completing; fitting together well; filling mutual needs",
  "gloss": "Completing"
 },
 {
  "word": "compliant",
  "definition": "Obeying, submissive; following the requirements",
  "gloss": "Obeying, submissive"
 },
 {
  "word": "concede",
  "definition": "Give in, admit, yield; acknowledge reluctantly; grant or give up (such as giving up land after losing a war)",
  "gloss": "Give in, admit, yield"
 },
 {
  "word": "conciliatory",
  "definition": "Reconciling, appeasing, attempting to make the peace",
  "gloss": "Reconciling, appeasing, attempting to make the peace"
 },
 {
  "word": "concur",
  "definition": "Approve, agree",
  "gloss": "Approve, agree"
 },
 {
  "word": "condone",
  "definition": "Overlook, tolerate, regard as harmless",
  "gloss": "Overlook, tolerate, regard as harmless"
 },
 {
  "word": "confer",
  "definition": "Consult, compare views; bestow or give",
  "gloss": "Consult, compare views"
 },
 {
  "word": "confound",
  "definition": "Confuse, frustrate; mix up or make worse",
  "gloss": "Confuse, frustrate"
 },
 {
  "word": "connoisseur",
  "definition": "Expert, especially in the fine arts; person of educated, refined tastes",
  "gloss": "Expert, especially in the fine arts"
 },
 {
  "word": "connote",
  "definition": "Suggest or imply in addition to the precise, literal meaning",
  "gloss": "Suggest or imply in addition to the precise, literal meaning"
 },
 {
  "word": "console",
  "definition": "Lessen the suffering or grief of (verb); a control panel, or small table or cabinet (noun)",
  "gloss": "Lessen the suffering or grief of"
 },
 {
  "word": "consolidate",
  "definition": "Unite, combine, solidify, make coherent",
  "gloss": "Unite, combine, solidify, make coherent"
 },
 {
  "word": "constrict",
  "definition": "Squeeze, compress; restrict the freedom of",
  "gloss": "Squeeze, compress"
 },
 {
  "word": "construe",
  "definition": "Interpret or translate",
  "gloss": "Interpret or translate"
 },
 {
  "word": "contentious",
  "definition": "Controversial; prone to causing arguments, especially gratuitous or petty ones",
  "gloss": "Controversial"
 },
 {
  "word": "contextualize",
  "definition": "Place in context, such as by giving the background or circumstances",
  "gloss": "Place in context, such as by giving the background or circumstances"
 },
 {
  "word": "contraries",
  "definition": "Things that are opposing; either of two opposite things",
  "gloss": "Things that are opposing"
 },
 {
  "word": "contrite",
  "definition": "Remorseful; feeling sorry for one's offenses or sins",
  "gloss": "Remorseful"
 },
 {
  "word": "contumacious",
  "definition": "Rebellious; stubbornly disobedient",
  "gloss": "Rebellious"
 },
 {
  "word": "conundrum",
  "definition": "Riddle, the answer to which involves a play on words; any mystery",
  "gloss": "Riddle, the answer to which involves a play on words"
 },
 {
  "word": "converge",
  "definition": "Move towards one another or towards a point; unite",
  "gloss": "Move towards one another or towards a point"
 },
 {
  "word": "conversant",
  "definition": "Knowledgeable about or experienced with",
  "gloss": "Knowledgeable about or experienced with"
 },
 {
  "word": "conversely",
  "definition": "In an opposite way; on the other hand",
  "gloss": "In an opposite way"
 },
 {
  "word": "convoke",
  "definition": "Call together, as to a meeting",
  "gloss": "Call together, as to a meeting"
 },
 {
  "word": "convoluted",
  "definition": "Twisted; very complicated",
  "gloss": "Twisted"
 },
 {
  "word": "copious",
  "definition": "Plentiful, bountiful",
  "gloss": "Plentiful, bountiful"
 },
 {
  "word": "corroborate",
  "definition": "Support, add evidence to",
  "gloss": "Support, add evidence to"
 },
 {
  "word": "cosmopolitan",
  "definition": "Belonging to the entire world, at home globally; free from local or national prejudices or attachments",
  "gloss": "Belonging to the entire world, at home globally"
 },
 {
  "word": "cosset",
  "definition": "Treat as a pet, pamper",
  "gloss": "Treat as a pet, pamper"
 },
 {
  "word": "coterie",
  "definition": "Close or exclusive group, clique",
  "gloss": "Close or exclusive group, clique"
 },
 {
  "word": "countenance",
  "definition": "Facial expression or face (noun); approve or tolerate (verb)",
  "gloss": "Facial expression or face"
 },
 {
  "word": "counterintuitive",
  "definition": "Against what one would intuitively expect",
  "gloss": "Against what one would intuitively expect"
 },
 {
  "word": "counterpoint",
  "definition": "Contrasting item, opposite; a complement; the use of contrast or interplay in a work of art",
  "gloss": "Contrasting item, opposite"
 },
 {
  "word": "counterproductive",
  "definition": "Defeating the purpose; preventing the intended goal",
  "gloss": "Defeating the purpose"
 },
 {
  "word": "covert",
  "definition": "Secret, veiled, undercover",
  "gloss": "Secret, veiled, undercover"
 },
 {
  "word": "crafty",
  "definition": "Cunning, skillful in deception or underhanded schemes",
  "gloss": "Cunning, skillful in deception or underhanded schemes"
 },
 {
  "word": "craven",
  "definition": "Very cowardly, lacking courage",
  "gloss": "Very cowardly, lacking courage"
 },
 {
  "word": "credibility",
  "definition": "Believability, trustworthiness",
  "gloss": "Believability, trustworthiness"
 },
 {
  "word": "credulous",
  "definition": "Gullible; prone to believing or trusting too easily or without enough evidence",
  "gloss": "Gullible"
 },
 {
  "word": "crescendo",
  "definition": "Steady increase in force, intensity, or the loudness of a musical passage; a climactic moment or peak",
  "gloss": "Steady increase in force"
 },
 {
  "word": "culminate",
  "definition": "Reach the highest point or final stage",
  "gloss": "Reach the highest point or final stage"
 },
 {
  "word": "cupidity",
  "definition": "Greed, great or excessive desire",
  "gloss": "Greed, great or excessive desire"
 },
 {
  "word": "curmudgeon",
  "definition": "Bad-tempered, difficult person; grouch",
  "gloss": "Bad-tempered, difficult person"
 },
 {
  "word": "cynical",
  "definition": "Thinking the worst of others' motivations; bitterly pessimistic",
  "gloss": "Thinking the worst of others' motivations"
 },
 {
  "word": "daunt",
  "definition": "Discourage, dishearten, lessen the courage of",
  "gloss": "Discourage, dishearten, lessen the courage of"
 },
 {
  "word": "debase",
  "definition": "Degrade; lower in quality, value, rank, etc.; lower in moral quality",
  "gloss": "Degrade"
 },
 {
  "word": "debunk",
  "definition": "Expose, ridicule, or disprove false or exaggerated claims",
  "gloss": "Expose, ridicule, or disprove false or exaggerated claims"
 },
 {
  "word": "declaim",
  "definition": "Speak in an impassioned, pompous, or oratorical manner; give a formal speech",
  "gloss": "Speak in an impassioned, pompous, or oratorical manner"
 },
 {
  "word": "declivity",
  "definition": "Downward slope",
  "gloss": "Downward slope"
 },
 {
  "word": "decorous",
  "definition": "Behaving with propriety and good taste; polite",
  "gloss": "Behaving with propriety and good taste"
 },
 {
  "word": "deem",
  "definition": "Judge; consider",
  "gloss": "Judge"
 },
 {
  "word": "deface",
  "definition": "Vandalize, mar the appearance of",
  "gloss": "Vandalize, mar the appearance of"
 },
 {
  "word": "default",
  "definition": "Failure to act, neglect (noun); fail to fulfill an obligation, especially a financial one (verb)",
  "gloss": "Failure to act, neglect"
 },
 {
  "word": "deference",
  "definition": "Respectful submission; yielding to the authority or opinion of another",
  "gloss": "Respectful submission"
 },
 {
  "word": "deflect",
  "definition": "Cause to curve; turn aside, esp. from a straight course; avoid",
  "gloss": "Cause to curve"
 },
 {
  "word": "deleterious",
  "definition": "Harmful, unhealthful",
  "gloss": "Harmful, unhealthful"
 },
 {
  "word": "delimit",
  "definition": "Fix, mark, or define the boundaries of",
  "gloss": "Fix, mark, or define the boundaries of"
 },
 {
  "word": "delineate",
  "definition": "Mark the outline of; sketch; describe in detail",
  "gloss": "Mark the outline of"
 },
 {
  "word": "demagogue",
  "definition": "A leader who lies and gains power by arousing the passions and especially prejudices of the people",
  "gloss": "A leader who lies and gains power by arousing the passions and especially prejudices of the people"
 },
 {
  "word": "demur",
  "definition": "Show reluctance or object, especially for moral reasons",
  "gloss": "Show reluctance or object, especially for moral reasons"
 },
 {
  "word": "denigrate",
  "definition": "Belittle, attack the reputation of",
  "gloss": "Belittle, attack the reputation of"
 },
 {
  "word": "denote",
  "definition": "Be a name or symbol for",
  "gloss": "Be a name or symbol for"
 },
 {
  "word": "deride",
  "definition": "Mock, scoff at, laugh at contemptuously",
  "gloss": "Mock, scoff at, laugh at contemptuously"
 },
 {
  "word": "derivative",
  "definition": "Derived from something else; not original",
  "gloss": "Derived from something else"
 },
 {
  "word": "desiccate",
  "definition": "Thoroughly dried up, dehydrated",
  "gloss": "Thoroughly dried up, dehydrated"
 },
 {
  "word": "desultory",
  "definition": "Lacking consistency or order, disconnected, sporadic; going off topic",
  "gloss": "Lacking consistency or order, disconnected, sporadic"
 },
 {
  "word": "detached",
  "definition": "Impartial, disinterested; unconcerned, distant, aloof",
  "gloss": "Impartial, disinterested"
 },
 {
  "word": "deterrent",
  "definition": "Something that restrains or discourages",
  "gloss": "Something that restrains or discourages"
 },
 {
  "word": "diaphanous",
  "definition": "Very sheer, fine, translucent",
  "gloss": "Very sheer, fine, translucent"
 },
 {
  "word": "diatribe",
  "definition": "Bitter, abusive attack or criticism; rant",
  "gloss": "Bitter, abusive attack or criticism"
 },
 {
  "word": "dichotomy",
  "definition": "Division into two parts or into two contradictory groups",
  "gloss": "Division into two parts or into two contradictory groups"
 },
 {
  "word": "dictum",
  "definition": "Formal or authoritative pronouncement; saying or proverb",
  "gloss": "Formal or authoritative pronouncement"
 },
 {
  "word": "didactic",
  "definition": "Intended to instruct; teaching, or teaching a moral lesson",
  "gloss": "Intended to instruct"
 },
 {
  "word": "diffident",
  "definition": "Lacking confidence, shy",
  "gloss": "Lacking confidence, shy"
 },
 {
  "word": "diffuse",
  "definition": "Spread widely, disseminate (verb); dispersed, widely spread out, or wordy and going off- topic (adj)",
  "gloss": "Spread widely, disseminate"
 },
 {
  "word": "digress",
  "definition": "Go off-topic when speaking or writing",
  "gloss": "Go off-topic when speaking or writing"
 },
 {
  "word": "dilate",
  "definition": "To become wider or make wider, cause to expand; to speak or write at length, elaborate upon",
  "gloss": "To become wider or make wider, cause to expand"
 },
 {
  "word": "dilatory",
  "definition": "Slow, late; procrastinating or stalling for time",
  "gloss": "Slow, late"
 },
 {
  "word": "dilettante",
  "definition": "Person who takes up an art or activity for amusement only or in a superficial way",
  "gloss": "Person who takes up an art or activity for amusement only or in a superficial way"
 },
 {
  "word": "din",
  "definition": "Loud, confused noise, esp. for a long period of time",
  "gloss": "Loud, confused noise, esp. for a long period of time"
 },
 {
  "word": "dirge",
  "definition": "A funeral or mourning song or poem",
  "gloss": "A funeral or mourning song or poem"
 },
 {
  "word": "disabuse",
  "definition": "Free someone from a mistake in thinking",
  "gloss": "Free someone from a mistake in thinking"
 },
 {
  "word": "discerning",
  "definition": "Having good judgment or insight; able to distinguish mentally",
  "gloss": "Having good judgment or insight"
 },
 {
  "word": "discomfiting",
  "definition": "Disconcerting, confusing, frustrating",
  "gloss": "Disconcerting, confusing, frustrating"
 },
 {
  "word": "discordant",
  "definition": "Harsh or inharmonious in sound; disagreeing, incongruous",
  "gloss": "Harsh or inharmonious in sound"
 },
 {
  "word": "discredit",
  "definition": "Injure the reputation of, destroy credibility of or confidence in",
  "gloss": "Injure the reputation of, destroy credibility of or confidence in"
 },
 {
  "word": "discrepancy",
  "definition": "Difference or inconsistency",
  "gloss": "Difference or inconsistency"
 },
 {
  "word": "discrete",
  "definition": "Separate, distinct, detached, existing as individual parts",
  "gloss": "Separate, distinct, detached, existing as individual parts"
 },
 {
  "word": "discriminating",
  "definition": "Judicious, discerning, having good judgment or insight",
  "gloss": "Judicious, discerning, having good judgment or insight"
 },
 {
  "word": "disingenuous",
  "definition": "Insincere, not genuine",
  "gloss": "Insincere, not genuine"
 },
 {
  "word": "disinterested",
  "definition": "Unbiased, impartial; not interested",
  "gloss": "Unbiased, impartial"
 },
 {
  "word": "disjointed",
  "definition": "Disconnected, not coherent, jerky; having the joints separated",
  "gloss": "Disconnected, not coherent, jerky"
 },
 {
  "word": "dismiss",
  "definition": "Allow to disperse or leave; fire from a job; put aside or reject, especially after only a brief consideration",
  "gloss": "Allow to disperse or leave"
 },
 {
  "word": "disparage",
  "definition": "Belittle, put down; bring shame upon, discredit",
  "gloss": "Belittle, put down"
 },
 {
  "word": "disparate",
  "definition": "Distinct, different",
  "gloss": "Distinct, different"
 },
 {
  "word": "dispassionate",
  "definition": "Unbiased, not having a selfish or personal motivation; calm, lacking emotion",
  "gloss": "Unbiased, not having a selfish or personal motivation"
 },
 {
  "word": "dispatch",
  "definition": "Speed, promptness; send off or deal with in a speedy way",
  "gloss": "Speed, promptness"
 },
 {
  "word": "disperse",
  "definition": "Scatter, spread widely, cause to vanish",
  "gloss": "Scatter, spread widely, cause to vanish"
 },
 {
  "word": "disposition",
  "definition": "A person's general or natural mood; tendency",
  "gloss": "A person's general or natural mood"
 },
 {
  "word": "disquieting",
  "definition": "Disturbing, causing anxiety",
  "gloss": "Disturbing, causing anxiety"
 },
 {
  "word": "dissemble",
  "definition": "Mislead, conceal the truth, put on a false appearance of",
  "gloss": "Mislead, conceal the truth, put on a false appearance of"
 },
 {
  "word": "disseminate",
  "definition": "Scatter, spread about, broadcast",
  "gloss": "Scatter, spread about, broadcast"
 },
 {
  "word": "dissent",
  "definition": "Disagree or take an opposing view, esp. in relation to a formal body such as a government, political party, or church; such a view",
  "gloss": "Disagree or take an opposing view"
 },
 {
  "word": "dissolution",
  "definition": "Dissolving, the state of having been dissolved; breaking bonds or breaking up of a group of people; death, disintegration; sinking into extreme hedonism, vice, and degradation",
  "gloss": "Dissolving, the state of having been dissolved"
 },
 {
  "word": "dissonance",
  "definition": "Harsh, inharmonious sound; cacophony; disagreement",
  "gloss": "Harsh, inharmonious sound"
 },
 {
  "word": "distaff",
  "definition": "Female, esp. relating to the maternal side of the family; women or women's work; a staff that holds wool or flax for spinning",
  "gloss": "Female, esp. relating to the maternal side of the family"
 },
 {
  "word": "distend",
  "definition": "Swell, expand, stretch, bloat",
  "gloss": "Swell, expand, stretch, bloat"
 },
 {
  "word": "distill",
  "definition": "Purify; extract the essential elements of",
  "gloss": "Purify"
 },
 {
  "word": "dither",
  "definition": "Act indecisively (verb); a state of fear or trembling excitement",
  "gloss": "Act indecisively"
 },
 {
  "word": "diurnal",
  "definition": "Occurring every day; happening in the daytime (rather than at night)",
  "gloss": "Occurring every day"
 },
 {
  "word": "diverge",
  "definition": "Differ, deviate; branch off or turn aside, as from a path",
  "gloss": "Differ, deviate"
 },
 {
  "word": "divest",
  "definition": "Deprive or strip of a rank, title, etc., or of clothing or gear; to sell off holdings (opposite of invest)",
  "gloss": "Deprive or strip of a rank, title, etc., or of clothing or gear"
 },
 {
  "word": "divine",
  "definition": "Discover through divination or supernatural means; perceive by insight",
  "gloss": "Discover through divination or supernatural means"
 },
 {
  "word": "doctrinaire",
  "definition": "Person who applies doctrine in an impractical or rigid and close-minded way (noun); merely theoretical, impractical, or fanatical about other people accepting one's ideas (adj)",
  "gloss": "Person who applies doctrine in an impractical or rigid and close-minded way"
 },
 {
  "word": "document",
  "definition": "Support with evidence, cite sources in a detailed way, create documentary evidence of",
  "gloss": "Support with evidence"
 },
 {
  "word": "doff",
  "definition": "Take off (such as clothes), put aside; remove one's hat as a gesture",
  "gloss": "Take off (such as clothes), put aside"
 },
 {
  "word": "dogma",
  "definition": "A system of principles laid down by an authority; established belief",
  "gloss": "A system of principles laid down by an authority"
 },
 {
  "word": "dormant",
  "definition": "Asleep, inactive, on a break",
  "gloss": "Asleep, inactive, on a break"
 },
 {
  "word": "dovetail",
  "definition": "Join or fit together",
  "gloss": "Join or fit together"
 },
 {
  "word": "droll",
  "definition": "Funny in an odd way",
  "gloss": "Funny in an odd way"
 },
 {
  "word": "dubious",
  "definition": "Doubtful, questionable, suspect",
  "gloss": "Doubtful, questionable, suspect"
 },
 {
  "word": "dupe",
  "definition": "Person who is easily fooled or used (noun); to fool or exploit (verb)",
  "gloss": "Person who is easily fooled or used"
 },
 {
  "word": "duplicity",
  "definition": "Deceit, double-dealing, acting in two different ways for the purpose of deception",
  "gloss": "Deceit"
 },
 {
  "word": "dyspeptic",
  "definition": "Grumpy, pessimistic, irritable; suffering from dyspepsia (indigestion)",
  "gloss": "Grumpy, pessimistic, irritable"
 },
 {
  "word": "e.g.",
  "definition": "For example, such as",
  "gloss": "For example, such as"
 },
 {
  "word": "ebullient",
  "definition": "Very enthusiastic, lively, excited; bubbling as though being boiled",
  "gloss": "Very enthusiastic, lively, excited"
 },
 {
  "word": "eccentric",
  "definition": "Peculiar, odd, deviating from the norm esp. in a whimsical way",
  "gloss": "Peculiar, odd, deviating from the norm esp. in a whimsical way"
 },
 {
  "word": "echelon",
  "definition": "A level, rank or grade; the people at that level",
  "gloss": "A level, rank or grade"
 },
 {
  "word": "eclectic",
  "definition": "Selecting the best of everything or from many diverse sources",
  "gloss": "Selecting the best of everything or from many diverse sources"
 },
 {
  "word": "eclipse",
  "definition": "The obscuring of one thing by another, such as the sun by the moon or a person by a more famous or talented person (noun); to obscure, darken, make less important (verb)",
  "gloss": "The obscuring of one thing by another"
 },
 {
  "word": "edify",
  "definition": "Uplift, enlighten, instruct or improve in a spiritual or moral way",
  "gloss": "Uplift, enlighten, instruct or improve in a spiritual or moral way"
 },
 {
  "word": "efficacy",
  "definition": "The quality of being able to produce the intended effect",
  "gloss": "The quality of being able to produce the intended effect"
 },
 {
  "word": "effigy",
  "definition": "Representation or image of a person, esp. a crude facsimile used to mock a hated person",
  "gloss": "Representation or image of a person"
 },
 {
  "word": "effrontery",
  "definition": "Shameless boldness",
  "gloss": "Shameless boldness"
 },
 {
  "word": "egalitarian",
  "definition": "Related to belief in the equality of all people, esp. in political, economic, or social spheres",
  "gloss": "Related to belief in the equality of all people"
 },
 {
  "word": "egregious",
  "definition": "Extraordinarily or conspicuously bad; glaring",
  "gloss": "Extraordinarily or conspicuously bad"
 },
 {
  "word": "egress",
  "definition": "An exit or the action of exiting",
  "gloss": "An exit or the action of exiting"
 },
 {
  "word": "elated",
  "definition": "Very happy, in high spirits",
  "gloss": "Very happy, in high spirits"
 },
 {
  "word": "elegy",
  "definition": "Song or poem of sorrow, esp. for a deceased person",
  "gloss": "Song or poem of sorrow, esp. for a deceased person"
 },
 {
  "word": "elevate",
  "definition": "Raise, lift up; lift the spirits of; move up to a higher rank or status or raise up to a higher spiritual or intellectual plane",
  "gloss": "Raise, lift up"
 },
 {
  "word": "elicit",
  "definition": "Call forth, bring out, evoke",
  "gloss": "Call forth, bring out, evoke"
 },
 {
  "word": "eloquent",
  "definition": "Marked by forceful, fluid, apt speech; expressive, emotionally moving",
  "gloss": "Marked by forceful, fluid, apt speech"
 },
 {
  "word": "emaciate",
  "definition": "Make abnormally thin, cause to physically waste away",
  "gloss": "Make abnormally thin, cause to physically waste away"
 },
 {
  "word": "embellish",
  "definition": "Decorate, add ornamentation; enhance (a story) with fictional or fanciful details",
  "gloss": "Decorate, add ornamentation"
 },
 {
  "word": "eminent",
  "definition": "Prominent, distinguished, of high rank",
  "gloss": "Prominent, distinguished, of high rank"
 },
 {
  "word": "empirical",
  "definition": "Coming from, based on, or able to be verified by experience or experimentation; not purely based on theory",
  "gloss": "Coming from"
 },
 {
  "word": "emulate",
  "definition": "Copy in an attempt to equal or be better than",
  "gloss": "Copy in an attempt to equal or be better than"
 },
 {
  "word": "encomium",
  "definition": "Warm, glowing praise, esp. a formal expression of praise",
  "gloss": "Warm, glowing praise, esp. a formal expression of praise"
 },
 {
  "word": "endemic",
  "definition": "Native, local; natural, specific to, or confined to a particular place",
  "gloss": "Native, local"
 },
 {
  "word": "enervate",
  "definition": "Weaken, tire",
  "gloss": "Weaken, tire"
 },
 {
  "word": "engender",
  "definition": "Produce, give rise to, cause to exist; procreate",
  "gloss": "Produce, give rise to, cause to exist"
 },
 {
  "word": "enhance",
  "definition": "Raise to a higher value, desirability, etc.",
  "gloss": "Raise to a higher value, desirability, etc"
 },
 {
  "word": "enigma",
  "definition": "Puzzle, mystery, riddle; mysterious or contradictory person",
  "gloss": "Puzzle, mystery, riddle"
 },
 {
  "word": "entitlement",
  "definition": "Having the right to certain privileges; believing, sometimes without cause, that one deserves or has a right to certain privileges",
  "gloss": "Having the right to certain privileges"
 },
 {
  "word": "enumerate",
  "definition": "Count or list; specify one-by-one",
  "gloss": "Count or list"
 },
 {
  "word": "ephemeral",
  "definition": "Lasting only a short time, fleeting",
  "gloss": "Lasting only a short time, fleeting"
 },
 {
  "word": "epicure",
  "definition": "Person with cultivated, refined tastes, esp. in food and wine",
  "gloss": "Person with cultivated, refined tastes, esp. in food and wine"
 },
 {
  "word": "equanimity",
  "definition": "Composure, evenness of mind; mental or emotional stability, esp. under stress",
  "gloss": "Composure, evenness of mind"
 },
 {
  "word": "equitable",
  "definition": "Fair, equal, just",
  "gloss": "Fair, equal, just"
 },
 {
  "word": "equivocate",
  "definition": "Use unclear language to deceive or avoid committing to a position",
  "gloss": "Use unclear language to deceive or avoid committing to a position"
 },
 {
  "word": "erratic",
  "definition": "Inconsistent, wandering, having no fixed course",
  "gloss": "Inconsistent, wandering, having no fixed course"
 },
 {
  "word": "erroneous",
  "definition": "Mistaken, in error; improper, morally incorrect",
  "gloss": "Mistaken, in error"
 },
 {
  "word": "ersatz",
  "definition": "Artificial, synthetic; being an inferior substitute",
  "gloss": "Artificial, synthetic"
 },
 {
  "word": "erstwhile",
  "definition": "Former, previous (adj); in the past, formerly (adv)",
  "gloss": "Former, previous"
 },
 {
  "word": "erudite",
  "definition": "Scholarly, knowledgeable; possessing deep, often systematic, knowledge",
  "gloss": "Scholarly, knowledgeable"
 },
 {
  "word": "eschew",
  "definition": "Shun, avoid, abstain from",
  "gloss": "Shun, avoid, abstain from"
 },
 {
  "word": "esoteric",
  "definition": "Understood by or intended for only a few; secret",
  "gloss": "Understood by or intended for only a few"
 },
 {
  "word": "estimable",
  "definition": "Worthy of esteem, admirable; able to be estimated",
  "gloss": "Worthy of esteem, admirable"
 },
 {
  "word": "ethos",
  "definition": "The character, personality, or moral values specific to a person, group, time period, etc.",
  "gloss": "The character"
 },
 {
  "word": "eulogy",
  "definition": "Speech of praise or written work of praise, esp. a speech given at a funeral",
  "gloss": "Speech of praise or written work of praise"
 },
 {
  "word": "euphemism",
  "definition": "Substitution of a mild, inoffensive, or indirect expression for one that is considered offensive or too direct",
  "gloss": "Substitution of a mild"
 },
 {
  "word": "euphony",
  "definition": "Pleasing or sweet sound, especially as formed by a harmonious use of words",
  "gloss": "Pleasing or sweet sound"
 },
 {
  "word": "exacerbate",
  "definition": "Make worse (more violent, severe, etc.), inflame; irritate or embitter (a person)",
  "gloss": "Make worse (more violent, severe, etc.), inflame"
 },
 {
  "word": "exacting",
  "definition": "Very severe in making demands; requiring precise attention",
  "gloss": "Very severe in making demands"
 },
 {
  "word": "exculpate",
  "definition": "Clear from guilt or blame",
  "gloss": "Clear from guilt or blame"
 },
 {
  "word": "exhaustive",
  "definition": "Comprehensive, thorough, exhausting a topic or subject, accounting for all possibilities; draining, tending to exhaust",
  "gloss": "Comprehensive"
 },
 {
  "word": "exigent",
  "definition": "Requiring immediate attention, action, or aid; excessively demanding",
  "gloss": "Requiring immediate attention, action, or aid"
 },
 {
  "word": "exonerate",
  "definition": "Clear from blame or accusation; free from a responsibility",
  "gloss": "Clear from blame or accusation"
 },
 {
  "word": "expedient",
  "definition": "Suitable, proper; effective, often at the expense of ethics or other considerations",
  "gloss": "Suitable, proper"
 },
 {
  "word": "explicit",
  "definition": "Direct, clear, fully revealed; clearly depicting sex or nudity",
  "gloss": "Direct, clear, fully revealed"
 },
 {
  "word": "exponent",
  "definition": "Person who expounds or explains; champion, advocate, or representative",
  "gloss": "Person who expounds or explains"
 },
 {
  "word": "expurgate",
  "definition": "Censor; remove objectionable or offensive parts",
  "gloss": "Censor"
 },
 {
  "word": "extemporaneous",
  "definition": "Done without preparation (esp. of a speech), or with some preparation but no notes; improvised, done on the spur of the moment",
  "gloss": "Done without preparation (esp. of a speech)"
 },
 {
  "word": "extraneous",
  "definition": "Irrelevant; foreign, coming from without, not belonging",
  "gloss": "Irrelevant"
 },
 {
  "word": "extrapolate",
  "definition": "Conjecture about an unknown by projecting information about something known; predict by projecting past experience",
  "gloss": "Conjecture about an unknown by projecting information about something known"
 },
 {
  "word": "facetious",
  "definition": "Joking, humorous, esp. inappropriately; not serious, concerned with frivolous things",
  "gloss": "Joking, humorous, esp. inappropriately"
 },
 {
  "word": "facilitate",
  "definition": "Make easier, help the progress of",
  "gloss": "Make easier, help the progress of"
 },
 {
  "word": "faction",
  "definition": "Group or clique within a larger organization; party strife and dissension",
  "gloss": "Group or clique within a larger organization"
 },
 {
  "word": "fallacious",
  "definition": "Containing a fallacy, or mistake in logic; logically unsound; deceptive",
  "gloss": "Containing a fallacy, or mistake in logic"
 },
 {
  "word": "fallow",
  "definition": "Left unplanted (of land); not in use",
  "gloss": "Left unplanted (of land)"
 },
 {
  "word": "fanatical",
  "definition": "Excessively devoted, enthusiastic, or zealous in an uncritical way",
  "gloss": "Excessively devoted, enthusiastic, or zealous in an uncritical way"
 },
 {
  "word": "fanciful",
  "definition": "Whimsical, capricious; imaginary; freely imaginative rather than based on reason or reality",
  "gloss": "Whimsical, capricious"
 },
 {
  "word": "fastidious",
  "definition": "Excessively particular, difficult to please; painstaking, meticulous, requiring excessive attention to detail",
  "gloss": "Excessively particular, difficult to please"
 },
 {
  "word": "fathom",
  "definition": "Measure the depth of (usually of water) as with a sounding line; penetrate and discover the meaning of, understand",
  "gloss": "Measure the depth of (usually of water) as with a sounding line"
 },
 {
  "word": "fatuous",
  "definition": "Foolish, silly, esp. in a smug or complacent manner",
  "gloss": "Foolish, silly, esp. in a smug or complacent manner"
 },
 {
  "word": "fawn",
  "definition": "Show affection or try to please in the manner of a dog; try to win favor through flattery and submissive behavior",
  "gloss": "Show affection or try to please in the manner of a dog"
 },
 {
  "word": "feasible",
  "definition": "Possible; logical or likely; suitable",
  "gloss": "Possible"
 },
 {
  "word": "fecund",
  "definition": "Fruitful, fertile; capable of abundantly producing offspring, vegetation, or creative or intellectual work",
  "gloss": "Fruitful, fertile"
 },
 {
  "word": "felicitous",
  "definition": "Admirably appropriate, very well-suited for the occasion; pleasant, fortunate, marked by happiness",
  "gloss": "Admirably appropriate, very well-suited for the occasion"
 },
 {
  "word": "fervid",
  "definition": "Very hot; heated in passion or enthusiasm",
  "gloss": "Very hot"
 },
 {
  "word": "fetid",
  "definition": "Stinking; having an offensive smell",
  "gloss": "Stinking"
 },
 {
  "word": "fidelity",
  "definition": "Faithfulness, loyalty; strict observance of duty; accuracy in reproducing a sound or image",
  "gloss": "Faithfulness, loyalty"
 },
 {
  "word": "figurative",
  "definition": "Metaphorical, based on figures of speech; containing many figures of speech (as fancy- sounding writing); related to portraying human or animal figures",
  "gloss": "Metaphorical, based on figures of speech"
 },
 {
  "word": "finesse",
  "definition": "Extreme delicacy, subtlety, or diplomacy in handling a sensitive situation or in a performance or skill (noun); use tact or diplomacy; employ a deceptive strategy (verb)",
  "gloss": "Extreme delicacy"
 },
 {
  "word": "flag",
  "definition": "Get tired, lose enthusiasm; hang limply or droop",
  "gloss": "Get tired, lose enthusiasm"
 },
 {
  "word": "fledgling",
  "definition": "A young bird that has just recently gotten its feathers, an inexperienced person (noun); new or inexperienced (adj)",
  "gloss": "A young bird that has just recently gotten its feathers"
 },
 {
  "word": "fleeting",
  "definition": "Passing quickly, transitory",
  "gloss": "Passing quickly, transitory"
 },
 {
  "word": "florid",
  "definition": "Reddish or rosy; flowery, showy, or excessively fancy",
  "gloss": "Reddish or rosy"
 },
 {
  "word": "flout",
  "definition": "Treat with disdain, contempt, or scorn (usually of rules)",
  "gloss": "Treat with disdain, contempt, or scorn (usually of rules)"
 },
 {
  "word": "fluke",
  "definition": "Stroke of luck, something accidentally successful",
  "gloss": "Stroke of luck, something accidentally successful"
 },
 {
  "word": "foment",
  "definition": "Incite, instigate, stir up, promote the growth of; apply medicated liquid to a body part",
  "gloss": "Incite, instigate, stir up, promote the growth of"
 },
 {
  "word": "forage",
  "definition": "Wander in search of; rummage, hunt, make a raid",
  "gloss": "Wander in search of"
 },
 {
  "word": "ford",
  "definition": "Place where a river or similar body of water is shallow enough to walk or ride a vehicle across (noun); to cross at such a place (verb)",
  "gloss": "Place where a river or similar body of water is shallow enough to walk or ride a vehicle across"
 },
 {
  "word": "foreshadow",
  "definition": "Indicate or suggest beforehand, presage",
  "gloss": "Indicate or suggest beforehand, presage"
 },
 {
  "word": "forestall",
  "definition": "Delay, hinder, prevent by taking action beforehand",
  "gloss": "Delay, hinder, prevent by taking action beforehand"
 },
 {
  "word": "forfeit",
  "definition": "Surrender or lose as a result of an error, crime, or failure to fulfill an obligation",
  "gloss": "Surrender or lose as a result of an error"
 },
 {
  "word": "fortify",
  "definition": "Strengthen, invigorate, encourage",
  "gloss": "Strengthen, invigorate, encourage"
 },
 {
  "word": "fortuitous",
  "definition": "Happening by chance; lucky",
  "gloss": "Happening by chance"
 },
 {
  "word": "fracas",
  "definition": "Noisy disturbance or fight; brawl",
  "gloss": "Noisy disturbance or fight"
 },
 {
  "word": "fractious",
  "definition": "Unruly, troublemaking; irritable",
  "gloss": "Unruly, troublemaking"
 },
 {
  "word": "frenetic",
  "definition": "Wildly excited, frantic, distracted",
  "gloss": "Wildly excited, frantic, distracted"
 },
 {
  "word": "fringe",
  "definition": "On the margin, periphery (adj); the people in a group who hold the most extreme views (noun)",
  "gloss": "On the margin, periphery"
 },
 {
  "word": "frugal",
  "definition": "Economical, thrifty, not wasteful with money; inexpensive",
  "gloss": "Economical, thrifty, not wasteful with money"
 },
 {
  "word": "fulminate",
  "definition": "Explode, detonate; attack verbally in a vehement, thunderous way",
  "gloss": "Explode, detonate"
 },
 {
  "word": "furtive",
  "definition": "Done secretly; stealthy, sly, shifty",
  "gloss": "Done secretly"
 },
 {
  "word": "futile",
  "definition": "Producing no useful result, ineffective; trivial or unimportant",
  "gloss": "Producing no useful result, ineffective"
 },
 {
  "word": "gainsay",
  "definition": "Declare false, deny; oppose",
  "gloss": "Declare false, deny"
 },
 {
  "word": "gambol",
  "definition": "Frolic; skip or leap playfully",
  "gloss": "Frolic"
 },
 {
  "word": "garner",
  "definition": "Gather and store; amass, collect",
  "gloss": "Gather and store"
 },
 {
  "word": "garrulous",
  "definition": "Talkative, wordy, rambling",
  "gloss": "Talkative, wordy, rambling"
 },
 {
  "word": "gauche",
  "definition": "Tactless, lacking social grace, awkward, crude",
  "gloss": "Tactless, lacking social grace, awkward, crude"
 },
 {
  "word": "gawky",
  "definition": "Physically awkward (esp. of a tall, skinny person, often used to describe teenagers)",
  "gloss": "Physically awkward (esp. of a tall"
 },
 {
  "word": "germane",
  "definition": "Relevant and appropriate, on-topic",
  "gloss": "Relevant and appropriate, on-topic"
 },
 {
  "word": "gestation",
  "definition": "Pregnancy; the period from conception until birth of an animal or (metaphorically) of an idea or plan",
  "gloss": "Pregnancy"
 },
 {
  "word": "gist",
  "definition": "Main idea, essence",
  "gloss": "Main idea, essence"
 },
 {
  "word": "glacial",
  "definition": "Pertaining to glaciers; cold, icy, slow, unsympathetic",
  "gloss": "Pertaining to glaciers"
 },
 {
  "word": "glib",
  "definition": "Fluent and easy in a way that suggests superficiality or insincerity",
  "gloss": "Fluent and easy in a way that suggests superficiality or insincerity"
 },
 {
  "word": "glower",
  "definition": "Stare in an angry, sullen way",
  "gloss": "Stare in an angry, sullen way"
 },
 {
  "word": "goad",
  "definition": "Urge on (as cattle) with a pointed or electrically charged stick; spur on, stimulate, encourage",
  "gloss": "Urge on (as cattle) with a pointed or electrically charged stick"
 },
 {
  "word": "goosebumps",
  "definition": "The \"bumps\" created by hairs standing up on the skin in response to cold, fear, etc.",
  "gloss": "The \"bumps\" created by hairs standing up on the skin in response to cold"
 },
 {
  "word": "gouge",
  "definition": "Scooping or digging tool, like a chisel, or a hole made with such a tool (noun); cut or scoop out; force out a person's eye with one's thumb; swindle, extort money from (verb)",
  "gloss": "Scooping or digging tool"
 },
 {
  "word": "gradation",
  "definition": "A progression, a process taking place gradually, in stages; one of these stages",
  "gloss": "A progression, a process taking place gradually, in stages"
 },
 {
  "word": "graft",
  "definition": "Insert part of a plant into another plant, where it continues to grow; join living tissue (such as skin) to part of the body where it will continue to live and grow; attach as if by grafting (verb); the part so grafted (as in a graft of skin); the act of acquiring money or other benefits through illegal means, esp. by abusing one's power (noun)",
  "gloss": "Insert part of a plant into another plant, where it continues to grow"
 },
 {
  "word": "grandiloquent",
  "definition": "Relating to lofty speech, esp. to the point of being pompous, overblown, bombastic",
  "gloss": "Relating to lofty speech"
 },
 {
  "word": "grandstand",
  "definition": "Perform showily in an attempt to impress onlookers",
  "gloss": "Perform showily in an attempt to impress onlookers"
 },
 {
  "word": "grating",
  "definition": "Irritating; harsh or discordant (of a noise); scraping",
  "gloss": "Irritating"
 },
 {
  "word": "gregarious",
  "definition": "Sociable, pertaining to a flock or crowd",
  "gloss": "Sociable, pertaining to a flock or crowd"
 },
 {
  "word": "grievous",
  "definition": "Causing grief or suffering; very serious, grave; flagrant, outrageous",
  "gloss": "Causing grief or suffering"
 },
 {
  "word": "grouse",
  "definition": "Complain or grumble (verb); a reason for complaint (noun)",
  "gloss": "Complain or grumble"
 },
 {
  "word": "grovel",
  "definition": "Creep or crawl with one's face to the ground, prostrate oneself as a token of subservience, degrade or abase oneself",
  "gloss": "Creep or crawl with one's face to the ground"
 },
 {
  "word": "guile",
  "definition": "Clever deceit, cunning, craftiness",
  "gloss": "Clever deceit, cunning, craftiness"
 },
 {
  "word": "hackneyed",
  "definition": "So commonplace as to be stale; not fresh or original",
  "gloss": "So commonplace as to be stale"
 },
 {
  "word": "halcyon",
  "definition": "Calm and peaceful, carefree; prosperous, successful, happy",
  "gloss": "Calm and peaceful, carefree"
 },
 {
  "word": "hallmark",
  "definition": "A mark indicating quality, purity, genuineness, etc.; any distinguishing characteristic",
  "gloss": "A mark indicating quality, purity, genuineness, etc"
 },
 {
  "word": "hand-",
  "definition": "Grasping, squeezing, etc. of the hands as wringing an expression of nervousness, guilt, etc.; extend debate over what to do about an issue",
  "gloss": "Grasping"
 },
 {
  "word": "hapless",
  "definition": "Unlucky, unfortunate",
  "gloss": "Unlucky, unfortunate"
 },
 {
  "word": "harangue",
  "definition": "Long, intense verbal attack, esp. when delivered publicly",
  "gloss": "Long, intense verbal attack, esp. when delivered publicly"
 },
 {
  "word": "hardy",
  "definition": "Bold, brave, capable of withstanding hardship, fatigue, cold, etc.",
  "gloss": "Bold, brave, capable of withstanding hardship, fatigue, cold, etc"
 },
 {
  "word": "harrow",
  "definition": "Farming tool that breaks up soil (noun); painfully disturb or distress (verb)",
  "gloss": "Farming tool that breaks up soil"
 },
 {
  "word": "haven",
  "definition": "Harbor or port; refuge, safe place",
  "gloss": "Harbor or port"
 },
 {
  "word": "hearken",
  "definition": "Listen, pay attention to",
  "gloss": "Listen, pay attention to"
 },
 {
  "word": "hedge",
  "definition": "Avoid commitment by leaving provisions for withdrawal or changing one's mind; protect a bet by also betting on the other side",
  "gloss": "Avoid commitment by leaving provisions for withdrawal or changing one's mind"
 },
 {
  "word": "hedonist",
  "definition": "Person devoted to pleasure",
  "gloss": "Person devoted to pleasure"
 },
 {
  "word": "hegemony",
  "definition": "Domination, authority; influence by one country over others socially, culturally, economically, etc.",
  "gloss": "Domination, authority"
 },
 {
  "word": "hermetic",
  "definition": "Airtight, sealed, isolated; reclusive; pertaining to alchemy, occult",
  "gloss": "Airtight, sealed, isolated"
 },
 {
  "word": "heterogeneous",
  "definition": "Different in type, incongruous; composed of different types of elements",
  "gloss": "Different in type, incongruous"
 },
 {
  "word": "hew",
  "definition": "Strike, chop, or hack (as with an axe, sword. etc.); make or shape something (such as a statue) with a cutting tool",
  "gloss": "Strike, chop, or hack (as with an axe, sword. etc.)"
 },
 {
  "word": "hierarchy",
  "definition": "A ranked series; a classification of people according to rank, ability, etc.; a ruling body",
  "gloss": "A ranked series"
 },
 {
  "word": "hoary",
  "definition": "Very old, gray or white as from old age",
  "gloss": "Very old, gray or white as from old age"
 },
 {
  "word": "hodgepodge",
  "definition": "Mixture of different kinds of things, jumble",
  "gloss": "Mixture of different kinds of things, jumble"
 },
 {
  "word": "homage",
  "definition": "Honor or respect demonstrated publicly",
  "gloss": "Honor or respect demonstrated publicly"
 },
 {
  "word": "homogeneous",
  "definition": "Of the same kind; uniform throughout",
  "gloss": "Of the same kind"
 },
 {
  "word": "hoodwink",
  "definition": "Trick, deceive",
  "gloss": "Trick, deceive"
 },
 {
  "word": "hotly",
  "definition": "In an intense, fiery, or heated way",
  "gloss": "In an intense, fiery, or heated way"
 },
 {
  "word": "husband",
  "definition": "Manage prudently, sparingly, or economically; conserve",
  "gloss": "Manage prudently, sparingly, or economically"
 },
 {
  "word": "hyberbole",
  "definition": "Deliberate exaggeration for effect",
  "gloss": "Deliberate exaggeration for effect"
 },
 {
  "word": "iconoclast",
  "definition": "Attacker of cherished beliefs or institutions",
  "gloss": "Attacker of cherished beliefs or institutions"
 },
 {
  "word": "idiosyncrasy",
  "definition": "Characteristic or habit peculiar to an individual; peculiar quality, quirk",
  "gloss": "Characteristic or habit peculiar to an individual"
 },
 {
  "word": "idolatry",
  "definition": "Idol worship; excessive or unthinking devotion or adoration",
  "gloss": "Idol worship"
 },
 {
  "word": "idyllic",
  "definition": "Presenting a positive, peaceful view of rural life (as poetry or prose); pleasant in a natural, simple way",
  "gloss": "Presenting a positive"
 },
 {
  "word": "ignoble",
  "definition": "Not noble; having mean, base, low motives; low quality",
  "gloss": "Not noble"
 },
 {
  "word": "illiberality",
  "definition": "Narrow-mindedness, bigotry; strictness or lack of generosity",
  "gloss": "Narrow-mindedness, bigotry"
 },
 {
  "word": "imbue",
  "definition": "Permeate or saturate, as dye in a fabric; influence throughout",
  "gloss": "Permeate or saturate, as dye in a fabric"
 },
 {
  "word": "imminent",
  "definition": "Ready to occur, impending",
  "gloss": "Ready to occur, impending"
 },
 {
  "word": "immutable",
  "definition": "Unchangeable",
  "gloss": "Unchangeable"
 },
 {
  "word": "impair",
  "definition": "Make worse, weaken",
  "gloss": "Make worse, weaken"
 },
 {
  "word": "impartial",
  "definition": "Unbiased, fair",
  "gloss": "Unbiased, fair"
 },
 {
  "word": "impasse",
  "definition": "Position or road from which there is no escape; deadlock",
  "gloss": "Position or road from which there is no escape"
 },
 {
  "word": "impassive",
  "definition": "Not having or not showing physical feeling or emotion",
  "gloss": "Not having or not showing physical feeling or emotion"
 },
 {
  "word": "impecunious",
  "definition": "Poor, without money",
  "gloss": "Poor, without money"
 },
 {
  "word": "impede",
  "definition": "Hold back, obstruct the progress of",
  "gloss": "Hold back, obstruct the progress of"
 },
 {
  "word": "imperious",
  "definition": "Commanding, domineering; acting like a high-ranking person; urgent",
  "gloss": "Commanding, domineering"
 },
 {
  "word": "impermeable",
  "definition": "Impassable, not allowing passage through (such as by a liquid)",
  "gloss": "Impassable, not allowing passage through (such as by a liquid)"
 },
 {
  "word": "imperturbable",
  "definition": "Calm, not able to be upset or agitated",
  "gloss": "Calm, not able to be upset or agitated"
 },
 {
  "word": "impervious",
  "definition": "Impenetrable, not able to be harmed or emotionally disturbed",
  "gloss": "Impenetrable, not able to be harmed or emotionally disturbed"
 },
 {
  "word": "impetuous",
  "definition": "Passionately impulsive, marked by sudden, hasty emotion; forceful, violent",
  "gloss": "Passionately impulsive, marked by sudden, hasty emotion"
 },
 {
  "word": "impious",
  "definition": "Not religious, lacking reverence, ungodly",
  "gloss": "Not religious, lacking reverence, ungodly"
 },
 {
  "word": "implacable",
  "definition": "Not able to be appeased, calmed, or satisfied",
  "gloss": "Not able to be appeased, calmed, or satisfied"
 },
 {
  "word": "implication",
  "definition": "Act of implying or that which is implied; close connection, esp. in an incriminating way",
  "gloss": "Act of implying or that which is implied"
 },
 {
  "word": "implicit",
  "definition": "Implied, not stated directly; involved in the very essence of something, unquestionable",
  "gloss": "Implied, not stated directly"
 },
 {
  "word": "implode",
  "definition": "Burst inward",
  "gloss": "Burst inward"
 },
 {
  "word": "imprecation",
  "definition": "Curse; prayer for harm to come to someone",
  "gloss": "Curse"
 },
 {
  "word": "impugn",
  "definition": "Attack the truth or integrity of",
  "gloss": "Attack the truth or integrity of"
 },
 {
  "word": "impute",
  "definition": "Credit, attribute; lay blame or responsibility for (sometimes falsely)",
  "gloss": "Credit, attribute"
 },
 {
  "word": "inadvertent",
  "definition": "Unintentional; characterized by a lack of attention, careless",
  "gloss": "Unintentional"
 },
 {
  "word": "inasmuch",
  "definition": "In like manner, considering that (contraction of \"in as much,\" generally followed by \"as\")",
  "gloss": "In like manner"
 },
 {
  "word": "incarnadine",
  "definition": "Blood red or flesh-colored",
  "gloss": "Blood red or flesh-colored"
 },
 {
  "word": "incendiary",
  "definition": "Setting on fire, pertaining to arson; arousing strife, rebellion, etc.; \"inflaming\" the senses",
  "gloss": "Setting on fire, pertaining to arson"
 },
 {
  "word": "incentive",
  "definition": "Something that encourages greater action or effort, such as a reward",
  "gloss": "Something that encourages greater action or effort, such as a reward"
 },
 {
  "word": "inchoate",
  "definition": "Just begun, undeveloped, unorganized",
  "gloss": "Just begun, undeveloped, unorganized"
 },
 {
  "word": "incipient",
  "definition": "Just beginning; in a very early stage",
  "gloss": "Just beginning"
 },
 {
  "word": "incongruous",
  "definition": "Out of place, inappropriate, not harmonious",
  "gloss": "Out of place, inappropriate, not harmonious"
 },
 {
  "word": "inconsequential",
  "definition": "Insignificant, unimportant; illogical",
  "gloss": "Insignificant, unimportant"
 },
 {
  "word": "inconstancy",
  "definition": "Fickleness, unreliability; the state of changing without good reason",
  "gloss": "Fickleness, unreliability"
 },
 {
  "word": "incorporate",
  "definition": "Combine, unite; form a legal corporation; embody, give physical form to",
  "gloss": "Combine, unite"
 },
 {
  "word": "inculcate",
  "definition": "Teach persistently, implant (an idea) in a person",
  "gloss": "Teach persistently, implant (an idea) in a person"
 },
 {
  "word": "indefatigable",
  "definition": "Untiring, not able to become fatigued",
  "gloss": "Untiring, not able to become fatigued"
 },
 {
  "word": "indeterminate",
  "definition": "Not fixed or determined, indefinite; vague",
  "gloss": "Not fixed or determined, indefinite"
 },
 {
  "word": "indifferent",
  "definition": "Not caring, having no interest; unbiased, impartial",
  "gloss": "Not caring, having no interest"
 },
 {
  "word": "indigence",
  "definition": "Extreme poverty",
  "gloss": "Extreme poverty"
 },
 {
  "word": "indolent",
  "definition": "Lazy, slothful",
  "gloss": "Lazy, slothful"
 },
 {
  "word": "inert",
  "definition": "Inactive; having little or no power to move",
  "gloss": "Inactive"
 },
 {
  "word": "inexorable",
  "definition": "Relentless, unyielding; not moved by pleading",
  "gloss": "Relentless, unyielding"
 },
 {
  "word": "infallible",
  "definition": "Incapable of error; certain",
  "gloss": "Incapable of error"
 },
 {
  "word": "inform",
  "definition": "Inspire, animate; give substance, essence, or context to; be the characteristic quality of",
  "gloss": "Inspire, animate"
 },
 {
  "word": "ingenuous",
  "definition": "Genuine, sincere, not holding back; naive",
  "gloss": "Genuine, sincere, not holding back"
 },
 {
  "word": "ingrained",
  "definition": "Deep-rooted, forming part of the very essence; worked into the fiber",
  "gloss": "Deep-rooted, forming part of the very essence"
 },
 {
  "word": "ingrate",
  "definition": "Ungrateful person",
  "gloss": "Ungrateful person"
 },
 {
  "word": "ingratiate",
  "definition": "Make an effort to gain favor with",
  "gloss": "Make an effort to gain favor with"
 },
 {
  "word": "inherent",
  "definition": "Existing as a permanent, essential quality; intrinsic",
  "gloss": "Existing as a permanent, essential quality"
 },
 {
  "word": "inimical",
  "definition": "Hostile, adverse, harmful",
  "gloss": "Hostile, adverse, harmful"
 },
 {
  "word": "iniquity",
  "definition": "Injustice, wickedness, sin",
  "gloss": "Injustice, wickedness, sin"
 },
 {
  "word": "innocuous",
  "definition": "Harmless, inoffensive",
  "gloss": "Harmless, inoffensive"
 },
 {
  "word": "inordinate",
  "definition": "Excessive, not within proper limits, unrestrained",
  "gloss": "Excessive, not within proper limits, unrestrained"
 },
 {
  "word": "inquest",
  "definition": "Legal or judicial inquiry, especially before a jury and especially made by a coroner into the cause of someone's death; the results of such an inquiry",
  "gloss": "Legal or judicial inquiry"
 },
 {
  "word": "insensible",
  "definition": "Incapable of feeling; unconscious, unaware",
  "gloss": "Incapable of feeling"
 },
 {
  "word": "insinuate",
  "definition": "Hint, suggest slyly; introduce (an idea) into someone's mind in a subtle, artful way",
  "gloss": "Hint, suggest slyly"
 },
 {
  "word": "insipid",
  "definition": "Dull, stale, lacking taste or interest",
  "gloss": "Dull, stale, lacking taste or interest"
 },
 {
  "word": "insular",
  "definition": "Pertaining to an island; detached, standing alone; narrow-minded, provincial",
  "gloss": "Pertaining to an island"
 },
 {
  "word": "insurrection",
  "definition": "Rebellion or revolt against a government or similarly established authority",
  "gloss": "Rebellion or revolt against a government or similarly established authority"
 },
 {
  "word": "intelligible",
  "definition": "Able to be understood, clear",
  "gloss": "Able to be understood, clear"
 },
 {
  "word": "inter",
  "definition": "Bury (a dead body) or place in a tomb",
  "gloss": "Bury (a dead body) or place in a tomb"
 },
 {
  "word": "interplay",
  "definition": "Interaction, reciprocal relationship or influence",
  "gloss": "Interaction, reciprocal relationship or influence"
 },
 {
  "word": "interregnum",
  "definition": "A time in between two reigns or regimes during which there is no ruler; a period during which government does not function; any period of freedom from authority or break or interruption in a series",
  "gloss": "A time in between two reigns or regimes during which there is no ruler"
 },
 {
  "word": "intractable",
  "definition": "Difficult to control, manage, or manipulate; hard to cure; stubborn",
  "gloss": "Difficult to control, manage, or manipulate"
 },
 {
  "word": "intransigent",
  "definition": "Refusing to compromise, inflexible, having extreme attitudes",
  "gloss": "Refusing to compromise, inflexible, having extreme attitudes"
 },
 {
  "word": "intrepid",
  "definition": "Fearless, brave, enduring in the face of adversity",
  "gloss": "Fearless, brave, enduring in the face of adversity"
 },
 {
  "word": "intrinsic",
  "definition": "Belonging to the essential nature of a thing",
  "gloss": "Belonging to the essential nature of a thing"
 },
 {
  "word": "inundate",
  "definition": "Flood, cover with water, overwhelm",
  "gloss": "Flood, cover with water, overwhelm"
 },
 {
  "word": "inure",
  "definition": "Toughen up; accustom or habituate to pain, hardship, etc.",
  "gloss": "Toughen up"
 },
 {
  "word": "invective",
  "definition": "Violent denunciation; accusations, insults, or verbal abuse",
  "gloss": "Violent denunciation"
 },
 {
  "word": "inveigle",
  "definition": "Entice, lure; get something by flattery, cleverness, or offering incentives",
  "gloss": "Entice, lure"
 },
 {
  "word": "investiture",
  "definition": "Investing; formally giving someone a right or title",
  "gloss": "Investing"
 },
 {
  "word": "invidious",
  "definition": "Hateful, offensive, injurious",
  "gloss": "Hateful, offensive, injurious"
 },
 {
  "word": "irascible",
  "definition": "Irritable, easily angered",
  "gloss": "Irritable, easily angered"
 },
 {
  "word": "irresolute",
  "definition": "Wavering, not sure how to proceed, not firm in one's decision-making",
  "gloss": "Wavering, not sure how to proceed, not firm in one's decision-making"
 },
 {
  "word": "itinerant",
  "definition": "Traveling from place to place, esp. as part of a job",
  "gloss": "Traveling from place to place, esp. as part of a job"
 },
 {
  "word": "itinerary",
  "definition": "Travel schedule; detailed plan for a journey",
  "gloss": "Travel schedule"
 },
 {
  "word": "jargon",
  "definition": "Vocabulary specific to a group or occupation; convoluted or unintelligible language",
  "gloss": "Vocabulary specific to a group or occupation"
 },
 {
  "word": "jettison",
  "definition": "Discard, cast off; throw items overboard in order to lighten a ship in an emergency",
  "gloss": "Discard, cast off"
 },
 {
  "word": "jingoism",
  "definition": "Excessive, loud patriotism and aggressive, warlike foreign policy",
  "gloss": "Excessive, loud patriotism and aggressive, warlike foreign policy"
 },
 {
  "word": "jocular",
  "definition": "Joking or given to joking all the time; jolly, playful",
  "gloss": "Joking or given to joking all the time"
 },
 {
  "word": "judicious",
  "definition": "Using good judgment; wise, sensible",
  "gloss": "Using good judgment"
 },
 {
  "word": "juncture",
  "definition": "Critical point in time, such as a crisis or a time when a decision is necessary; a place where two things are joined together",
  "gloss": "Critical point in time"
 },
 {
  "word": "juxtapose",
  "definition": "Place side by side (either physically or in a metaphorical way, such as to make a comparison)",
  "gloss": "Place side by side (either physically or in a metaphorical way"
 },
 {
  "word": "keen",
  "definition": "Sharp, piercing; very perceptive or mentally sharp; intense (of a feeling)",
  "gloss": "Sharp, piercing"
 },
 {
  "word": "kindle",
  "definition": "Ignite, cause to begin burning; incite, arouse, inflame",
  "gloss": "Ignite, cause to begin burning"
 },
 {
  "word": "kinetic",
  "definition": "Pertaining to motion",
  "gloss": "Pertaining to motion"
 },
 {
  "word": "knell",
  "definition": "The sound made by a bell for a funeral, or any sad sound or signal of a failure, death, ending, etc. (noun); to make such a sound (verb)",
  "gloss": "The sound made by a bell for a funeral"
 },
 {
  "word": "kudos",
  "definition": "Praise, honor, congratulations",
  "gloss": "Praise, honor, congratulations"
 },
 {
  "word": "lachrymose",
  "definition": "Tearful, mournful",
  "gloss": "Tearful, mournful"
 },
 {
  "word": "lackluster",
  "definition": "Not shiny; dull, mediocre; lacking brilliance or vitality",
  "gloss": "Not shiny"
 },
 {
  "word": "laconic",
  "definition": "Using few words, concise",
  "gloss": "Using few words, concise"
 },
 {
  "word": "lament",
  "definition": "Mourn; express grief, sorrow, or regret (verb); an expression of grief, esp. as a song or poem (noun)",
  "gloss": "Mourn"
 },
 {
  "word": "lampoon",
  "definition": "A harsh satire (noun); ridicule or satirize (verb)",
  "gloss": "A harsh satire"
 },
 {
  "word": "landmark",
  "definition": "Object (such as a building) that stands out and can be used to navigate by; a very important place, event, etc.",
  "gloss": "Object (such as a building) that stands out and can be used to navigate by"
 },
 {
  "word": "languid",
  "definition": "Drooping from exhaustion, sluggish, slow; lacking in spirit",
  "gloss": "Drooping from exhaustion, sluggish, slow"
 },
 {
  "word": "larceny",
  "definition": "Theft",
  "gloss": "Theft"
 },
 {
  "word": "largess",
  "definition": "or Generosity, the giving of money or gifts (esp. largesse with the implication that the giver is a bit superior to the recipient)",
  "gloss": "Or Generosity"
 },
 {
  "word": "lassitude",
  "definition": "Tiredness, weariness; lazy indifference",
  "gloss": "Tiredness, weariness"
 },
 {
  "word": "latent",
  "definition": "Potential; existing but not visible or active",
  "gloss": "Potential"
 },
 {
  "word": "laudable",
  "definition": "Worthy of praise",
  "gloss": "Worthy of praise"
 },
 {
  "word": "lavish",
  "definition": "Abundant or giving in abundance; marked by excess (adj); give very generously (verb)",
  "gloss": "Abundant or giving in abundance"
 },
 {
  "word": "lax",
  "definition": "Not strict; careless, loose, slack",
  "gloss": "Not strict"
 },
 {
  "word": "layperson",
  "definition": "A person who is not a member of the clergy or not a member of a particular profession (such as medicine, law, etc.)",
  "gloss": "A person who is not a member of the clergy or not a member of a particular profession (such as medicine"
 },
 {
  "word": "leery",
  "definition": "Suspicious or wary",
  "gloss": "Suspicious or wary"
 },
 {
  "word": "legerdemain",
  "definition": "Slight-of-hand (magic as performed by a magician); trickery or deception",
  "gloss": "Slight-of-hand (magic as performed by a magician)"
 },
 {
  "word": "lethargic",
  "definition": "Lazy, drowsy, or sluggish",
  "gloss": "Lazy, drowsy, or sluggish"
 },
 {
  "word": "levity",
  "definition": "Lightness (of mind, spirit, or mood) or lack of seriousness, sometimes in an inappropriate way",
  "gloss": "Lightness (of mind"
 },
 {
  "word": "levy",
  "definition": "Collect tax from, wage war on, or enlist for military service; (verb); act of colleting tax or amount owed, or the drafting of troops into military service (noun)",
  "gloss": "Collect tax from, wage war on, or enlist for military service"
 },
 {
  "word": "liberal",
  "definition": "Favorable to progress or reform; believing in maximum possible individual freedom; tolerant, open-minded; generous (adj); a person with such beliefs or practices (noun)",
  "gloss": "Favorable to progress or reform"
 },
 {
  "word": "libertine",
  "definition": "Morally or sexually unrestrained person; freethinker (regarding religion)",
  "gloss": "Morally or sexually unrestrained person"
 },
 {
  "word": "licentious",
  "definition": "Sexually unrestrained; immoral; ignoring the rules",
  "gloss": "Sexually unrestrained"
 },
 {
  "word": "likewise",
  "definition": "Also, in addition to; similarly, in the same way",
  "gloss": "Also, in addition to"
 },
 {
  "word": "limpid",
  "definition": "Clear, transparent; completely calm",
  "gloss": "Clear, transparent"
 },
 {
  "word": "lionize",
  "definition": "Treat like a celebrity",
  "gloss": "Treat like a celebrity"
 },
 {
  "word": "lissome",
  "definition": "Flexible, supple, agile",
  "gloss": "Flexible, supple, agile"
 },
 {
  "word": "listless",
  "definition": "Spiritless, lacking interest or energy",
  "gloss": "Spiritless, lacking interest or energy"
 },
 {
  "word": "livid",
  "definition": "Furiously angry, enraged",
  "gloss": "Furiously angry, enraged"
 },
 {
  "word": "log",
  "definition": "Keep a record of, write down; travel for or at a certain distance or speed (verb); a written record (noun)",
  "gloss": "Keep a record of, write down"
 },
 {
  "word": "loquacious",
  "definition": "Talkative, wordy",
  "gloss": "Talkative, wordy"
 },
 {
  "word": "lucid",
  "definition": "Clear, easy to understand; rational, sane",
  "gloss": "Clear, easy to understand"
 },
 {
  "word": "lugubrious",
  "definition": "Mournful, gloomy (sometimes in an exaggerated way)",
  "gloss": "Mournful, gloomy (sometimes in an exaggerated way)"
 },
 {
  "word": "lull",
  "definition": "Soothe or cause to fall asleep (as in a lullaby); quiet down; make to feel secure, sometimes falsely (verb); a period of calm or quiet (noun)",
  "gloss": "Soothe or cause to fall asleep (as in a lullaby)"
 },
 {
  "word": "lumber",
  "definition": "Walk in a heavy or clumsy way, sometimes due to being weighed down",
  "gloss": "Walk in a heavy or clumsy way, sometimes due to being weighed down"
 },
 {
  "word": "luminous",
  "definition": "Shining, radiant, well-lit; brilliant or enlightening",
  "gloss": "Shining, radiant, well-lit"
 },
 {
  "word": "lurid",
  "definition": "Gruesome or excessively vivid; sensational, shocking, unrestrained",
  "gloss": "Gruesome or excessively vivid"
 },
 {
  "word": "machination",
  "definition": "or Crafty schemes or plots machinations",
  "gloss": "Or Crafty schemes or plots machinations"
 },
 {
  "word": "maelstrom",
  "definition": "Violent whirlpool; any chaotic, turbulent situation",
  "gloss": "Violent whirlpool"
 },
 {
  "word": "magnanimous",
  "definition": "High-minded, noble, lofty; generous in forgiving others, free of resentment",
  "gloss": "High-minded, noble, lofty"
 },
 {
  "word": "magnate",
  "definition": "Very important or influential person, esp. in business",
  "gloss": "Very important or influential person, esp. in business"
 },
 {
  "word": "makeshift",
  "definition": "A temporary, often improvised, substitute (noun); improvised for temporary use (adj)",
  "gloss": "A temporary, often improvised, substitute"
 },
 {
  "word": "malediction",
  "definition": "A curse",
  "gloss": "A curse"
 },
 {
  "word": "malinger",
  "definition": "Pretend to be sick, esp. to get out of work, duties, etc.",
  "gloss": "Pretend to be sick, esp. to get out of work, duties, etc"
 },
 {
  "word": "malleable",
  "definition": "Able to be bent, shaped, or adapted",
  "gloss": "Able to be bent, shaped, or adapted"
 },
 {
  "word": "manifest",
  "definition": "Obvious, apparent, perceptible to the eye (adj); to show, make clear, or prove (verb)",
  "gloss": "Obvious, apparent, perceptible to the eye"
 },
 {
  "word": "mannered",
  "definition": "Having a particular manner, esp. an artificial one",
  "gloss": "Having a particular manner, esp. an artificial one"
 },
 {
  "word": "mar",
  "definition": "Damage, spoil, ruin",
  "gloss": "Damage, spoil, ruin"
 },
 {
  "word": "martinet",
  "definition": "Person who adheres to rules extremely closely; strict disciplinarian",
  "gloss": "Person who adheres to rules extremely closely"
 },
 {
  "word": "maudlin",
  "definition": "Excessively sentimental, showing sadness or some other emotion in a foolish or silly way",
  "gloss": "Excessively sentimental"
 },
 {
  "word": "maverick",
  "definition": "Rebel, individualist, dissenter",
  "gloss": "Rebel, individualist, dissenter"
 },
 {
  "word": "maxim",
  "definition": "A general truth or fundamental principle, esp. expressed as a proverb or saying",
  "gloss": "A general truth or fundamental principle"
 },
 {
  "word": "mendacious",
  "definition": "Lying, habitually dishonest",
  "gloss": "Lying, habitually dishonest"
 },
 {
  "word": "mendicant",
  "definition": "Beggar, or religious follower who lives by begging",
  "gloss": "Beggar, or religious follower who lives by begging"
 },
 {
  "word": "mercurial",
  "definition": "Quickly and unpredictably changing moods; fickle, flighty",
  "gloss": "Quickly and unpredictably changing moods"
 },
 {
  "word": "meretricious",
  "definition": "Attractive in a vulgar or flashy way, tawdry; deceptive",
  "gloss": "Attractive in a vulgar or flashy way, tawdry"
 },
 {
  "word": "metamorphosis",
  "definition": "A complete change or transformation (in biology, a change such as a caterpillar becoming a pupa and then a butterfly)",
  "gloss": "A complete change or transformation (in biology"
 },
 {
  "word": "metaphysical",
  "definition": "Concerned with abstract thought, related to metaphysics (branch of philosophy concerned with explaining the nature of being and of the world); very subtle or abstruse",
  "gloss": "Concerned with abstract thought"
 },
 {
  "word": "meticulous",
  "definition": "Taking extreme care in regards to details; precise, fussy",
  "gloss": "Taking extreme care in regards to details"
 },
 {
  "word": "milieu",
  "definition": "Environment, atmosphere; the environmental setting in which something happens or develops",
  "gloss": "Environment, atmosphere"
 },
 {
  "word": "militate",
  "definition": "Have a great effect, weigh heavily (often as militate against)",
  "gloss": "Have a great effect, weigh heavily (often as militate against)"
 },
 {
  "word": "mired",
  "definition": "Stuck, entangled (in something, like a swamp or muddy area), soiled",
  "gloss": "Stuck, entangled (in something, like a swamp or muddy area), soiled"
 },
 {
  "word": "mirth",
  "definition": "Jollity, merriment; amusement or laughter",
  "gloss": "Jollity, merriment"
 },
 {
  "word": "misanthrope",
  "definition": "Hater of humankind or misanthropist",
  "gloss": "Hater of humankind or misanthropist"
 },
 {
  "word": "missive",
  "definition": "Letter, written message",
  "gloss": "Letter, written message"
 },
 {
  "word": "mitigate",
  "definition": "Make less severe; lessen or moderate (damage, grief, pain, etc.)",
  "gloss": "Make less severe"
 },
 {
  "word": "modest",
  "definition": "Humble; simple rather than showy; decent (esp. \"covering up\" in terms of dress); small, limited",
  "gloss": "Humble"
 },
 {
  "word": "modicum",
  "definition": "A little bit or limited quantity",
  "gloss": "A little bit or limited quantity"
 },
 {
  "word": "modish",
  "definition": "Stylish, contemporary",
  "gloss": "Stylish, contemporary"
 },
 {
  "word": "mollify",
  "definition": "Calm or soothe (an angry person); lessen or soften",
  "gloss": "Calm or soothe (an angry person)"
 },
 {
  "word": "molt",
  "definition": "Shed or cast off, esp. to regularly shed skin, feathers, etc. (as a snake)",
  "gloss": "Shed or cast off"
 },
 {
  "word": "monastic",
  "definition": "Relating to or resembling a monastery (where monks or nuns live), esp. by being quiet, secluded, contemplative, strict, and/or lacking luxuries",
  "gloss": "Relating to or resembling a monastery (where monks or nuns live)"
 },
 {
  "word": "monotony",
  "definition": "Sameness or repetitiousness to the point of being boring; lack of variation, uniformity, esp. repetition in sound",
  "gloss": "Sameness or repetitiousness to the point of being boring"
 },
 {
  "word": "moreover",
  "definition": "Besides; in addition to what was just stated",
  "gloss": "Besides"
 },
 {
  "word": "mores",
  "definition": "Customs, manners, or morals of a particular group",
  "gloss": "Customs, manners, or morals of a particular group"
 },
 {
  "word": "morose",
  "definition": "Gloomy, sullen",
  "gloss": "Gloomy, sullen"
 },
 {
  "word": "multifarious",
  "definition": "Diverse, having a lot of variety",
  "gloss": "Diverse, having a lot of variety"
 },
 {
  "word": "mundane",
  "definition": "Common, ordinary, everyday",
  "gloss": "Common, ordinary, everyday"
 },
 {
  "word": "munificent",
  "definition": "Generous, giving liberally",
  "gloss": "Generous, giving liberally"
 },
 {
  "word": "myopic",
  "definition": "Near-sighted; lacking long-term thinking, short-sighted",
  "gloss": "Near-sighted"
 },
 {
  "word": "nadir",
  "definition": "Lowest point",
  "gloss": "Lowest point"
 },
 {
  "word": "naïve",
  "definition": "Simple and unsophisticated, unsuspecting, lacking worldly experience and critical judgment",
  "gloss": "Simple and unsophisticated"
 },
 {
  "word": "nascent",
  "definition": "Coming into existence, still developing",
  "gloss": "Coming into existence, still developing"
 },
 {
  "word": "negate",
  "definition": "Deny or refute; make void or cause to be ineffective",
  "gloss": "Deny or refute"
 },
 {
  "word": "neologism",
  "definition": "New word or phrase (or a new meaning applied to an existing word or phrase)",
  "gloss": "New word or phrase (or a new meaning applied to an existing word or phrase)"
 },
 {
  "word": "neophyte",
  "definition": "Beginner, novice; person newly converted to a religion",
  "gloss": "Beginner, novice"
 },
 {
  "word": "net",
  "definition": "Remaining after expenses or other factors have been deducted; ultimate (adj); to bring in as profit, or to catch as in a net (verb)",
  "gloss": "Remaining after expenses or other factors have been deducted"
 },
 {
  "word": "nettle",
  "definition": "Irritate, sting, or annoy",
  "gloss": "Irritate, sting, or annoy"
 },
 {
  "word": "nevertheless",
  "definition": "However, even so, despite that or nonetheless",
  "gloss": "However, even so, despite that or nonetheless"
 },
 {
  "word": "noisome",
  "definition": "Offensive, disgusting; harmful",
  "gloss": "Offensive, disgusting"
 },
 {
  "word": "nominal",
  "definition": "Trivial, so small as to be unimportant; in name only, so-called",
  "gloss": "Trivial, so small as to be unimportant"
 },
 {
  "word": "nontrivial",
  "definition": "Important or big enough to matter",
  "gloss": "Important or big enough to matter"
 },
 {
  "word": "normative",
  "definition": "Implying or attempting to establish a norm; expressing value judgments or telling people what to do (rather than merely describing that which is happening)",
  "gloss": "Implying or attempting to establish a norm"
 },
 {
  "word": "notoriety",
  "definition": "Ill fame; the state of being well-known for a disgraceful reason",
  "gloss": "Ill fame"
 },
 {
  "word": "novel",
  "definition": "New, fresh, original",
  "gloss": "New, fresh, original"
 },
 {
  "word": "nuance",
  "definition": "A subtle difference in tone, meaning, expression, etc.",
  "gloss": "A subtle difference in tone, meaning, expression, etc"
 },
 {
  "word": "obdurate",
  "definition": "Stubborn, hardhearted, hardened in wrongdoing",
  "gloss": "Stubborn, hardhearted, hardened in wrongdoing"
 },
 {
  "word": "objective",
  "definition": "Factual, related to reality or physical objects; not influenced by emotions, unbiased",
  "gloss": "Factual, related to reality or physical objects"
 },
 {
  "word": "oblique",
  "definition": "Slanting or sloping; indirect, misleading, or evasive",
  "gloss": "Slanting or sloping"
 },
 {
  "word": "obsequious",
  "definition": "Servile, very compliant, fawning",
  "gloss": "Servile, very compliant, fawning"
 },
 {
  "word": "obsolete",
  "definition": "Out of date, no longer in use",
  "gloss": "Out of date, no longer in use"
 },
 {
  "word": "obstinate",
  "definition": "Stubborn or hard to control",
  "gloss": "Stubborn or hard to control"
 },
 {
  "word": "obviate",
  "definition": "Prevent, eliminate, or make unnecessary",
  "gloss": "Prevent, eliminate, or make unnecessary"
 },
 {
  "word": "occlude",
  "definition": "Stop up, close, shut in or shut off",
  "gloss": "Stop up, close, shut in or shut off"
 },
 {
  "word": "occult",
  "definition": "The supernatural (noun); pertaining to magic, astrology, etc.; mysterious, secret or hidden (adj); to hide, to shut off from view (verb)",
  "gloss": "The supernatural"
 },
 {
  "word": "offhand",
  "definition": "Casual, informal; done without preparation or forethought; rude in a short way, brusque",
  "gloss": "Casual, informal"
 },
 {
  "word": "officious",
  "definition": "Excessively eager in giving unwanted advice or intruding where one is not wanted; meddlesome, pushy",
  "gloss": "Excessively eager in giving unwanted advice or intruding where one is not wanted"
 },
 {
  "word": "offset",
  "definition": "Counteract, compensate for (verb); a counterbalance (noun)",
  "gloss": "Counteract, compensate for"
 },
 {
  "word": "onerous",
  "definition": "Burdensome, oppressive, hard to endure",
  "gloss": "Burdensome, oppressive, hard to endure"
 },
 {
  "word": "opaque",
  "definition": "Not translucent; not allowing light, heat, etc. to pass through; dark, dull, unclear or stupid",
  "gloss": "Not translucent"
 },
 {
  "word": "opine",
  "definition": "Express an opinion",
  "gloss": "Express an opinion"
 },
 {
  "word": "opprobrium",
  "definition": "Disgrace and disapproval that result from outrageously shameful actions",
  "gloss": "Disgrace and disapproval that result from outrageously shameful actions"
 },
 {
  "word": "optimal",
  "definition": "Best, most desirable or favorable",
  "gloss": "Best, most desirable or favorable"
 },
 {
  "word": "optimum",
  "definition": "most favorable condition or greatest degree or amount possible under given circumstances",
  "gloss": "Most favorable condition or greatest degree or amount possible under given circumstances"
 },
 {
  "word": "orotund",
  "definition": "Full, rich, and clear (of the voice or speaking); pompous, bombastic",
  "gloss": "Full, rich, and clear (of the voice or speaking)"
 },
 {
  "word": "orthodox",
  "definition": "Adhering to a traditional, established faith, or to anything customary or commonly accepted",
  "gloss": "Adhering to a traditional"
 },
 {
  "word": "oscillate",
  "definition": "Swing back and forth; waver, change one's mind",
  "gloss": "Swing back and forth"
 },
 {
  "word": "ossify",
  "definition": "Become bone or become hard like bone; become inflexible in attitudes, opinions, etc.",
  "gloss": "Become bone or become hard like bone"
 },
 {
  "word": "ostensible",
  "definition": "or Professed, evident, or pretended; outwardly ostensive appearing in a certain way",
  "gloss": "Or Professed, evident, or pretended"
 },
 {
  "word": "ostentatious",
  "definition": "Pretentious, boastful showiness",
  "gloss": "Pretentious, boastful showiness"
 },
 {
  "word": "outstrip",
  "definition": "Surpass, exceed; be larger or better than; leave behind",
  "gloss": "Surpass, exceed"
 },
 {
  "word": "overshadow",
  "definition": "Cast a shadow over, darken; dominate, make to seem less important",
  "gloss": "Cast a shadow over, darken"
 },
 {
  "word": "overwrought",
  "definition": "Overly nervous, agitated, or excited; too ornate, elaborate, or fussy; overdone",
  "gloss": "Overly nervous, agitated, or excited"
 },
 {
  "word": "palatial",
  "definition": "Suitable for or resembling a palace, magnificent",
  "gloss": "Suitable for or resembling a palace, magnificent"
 },
 {
  "word": "palliate",
  "definition": "Make less serious or severe; relieve symptoms of an illness",
  "gloss": "Make less serious or severe"
 },
 {
  "word": "pallid",
  "definition": "Abnormally pale (as skin); lacking color or vitality",
  "gloss": "Abnormally pale (as skin)"
 },
 {
  "word": "panache",
  "definition": "Flair, style, swagger; a flamboyant or grand way of acting",
  "gloss": "Flair, style, swagger"
 },
 {
  "word": "panegyric",
  "definition": "Formal or lofty expression of praise",
  "gloss": "Formal or lofty expression of praise"
 },
 {
  "word": "panoply",
  "definition": "Splendid, wide-ranging, impressive display or array",
  "gloss": "Splendid, wide-ranging, impressive display or array"
 },
 {
  "word": "paradigm",
  "definition": "Model or pattern; worldview, set of shared assumptions, values, etc.",
  "gloss": "Model or pattern"
 },
 {
  "word": "paradox",
  "definition": "Contradiction, or seeming contradiction that is actually true",
  "gloss": "Contradiction, or seeming contradiction that is actually true"
 },
 {
  "word": "paragon",
  "definition": "Model of excellence, perfect example",
  "gloss": "Model of excellence, perfect example"
 },
 {
  "word": "pare",
  "definition": "Peel or cut off the outer layer (such as peeling fruit with a knife), reduce or trim as if cutting off the outer parts",
  "gloss": "Peel or cut off the outer layer (such as peeling fruit with a knife)"
 },
 {
  "word": "pariah",
  "definition": "Social outcast, untouchable",
  "gloss": "Social outcast, untouchable"
 },
 {
  "word": "parley",
  "definition": "Discussion, negotiation, esp. between enemies (noun); to have such a discussion (verb)",
  "gloss": "Discussion, negotiation, esp. between enemies"
 },
 {
  "word": "parry",
  "definition": "Deflect or avoid (esp. a blow or attack); skillfully evade (a question)",
  "gloss": "Deflect or avoid (esp. a blow or attack)"
 },
 {
  "word": "partial",
  "definition": "Biased, prejudiced, favoring one over others; having a special liking for something or someone (usually partial to)",
  "gloss": "Biased, prejudiced, favoring one over others"
 },
 {
  "word": "partisan",
  "definition": "Devoted to a particular group, cause, etc. (adj.); fervent supporter of a group, party, idea, etc.; guerilla fighter (noun)",
  "gloss": "Devoted to a particular group, cause, etc. (adj.)"
 },
 {
  "word": "pastiche",
  "definition": "Mix of incongruous parts; artistic work imitating the work of other artists, often satirically",
  "gloss": "Mix of incongruous parts"
 },
 {
  "word": "patent",
  "definition": "Obvious, apparent, plain to see (adj); a letter from a government guaranteeing an inventor the rights to his or her invention (noun)",
  "gloss": "Obvious, apparent, plain to see"
 },
 {
  "word": "pathogenic",
  "definition": "Capable of producing disease",
  "gloss": "Capable of producing disease"
 },
 {
  "word": "pathological",
  "definition": "Relating to or caused by disease; relating to compulsive bad behavior",
  "gloss": "Relating to or caused by disease"
 },
 {
  "word": "patronizing",
  "definition": "Condescending, having a superior manner, treating as an inferior",
  "gloss": "Condescending, having a superior manner, treating as an inferior"
 },
 {
  "word": "paucity",
  "definition": "Scarcity, the state of being small in number",
  "gloss": "Scarcity, the state of being small in number"
 },
 {
  "word": "peccadillo",
  "definition": "Small sin or fault",
  "gloss": "Small sin or fault"
 },
 {
  "word": "pedant",
  "definition": "Person who pays excessive attention to book learning and rules, or who uses his or her learning to show off",
  "gloss": "Person who pays excessive attention to book learning and rules"
 },
 {
  "word": "peddle",
  "definition": "Travel around while selling; sell illegally; give out or disseminate",
  "gloss": "Travel around while selling"
 },
 {
  "word": "pedestrian",
  "definition": "Ordinary, dull, commonplace",
  "gloss": "Ordinary, dull, commonplace"
 },
 {
  "word": "pejorative",
  "definition": "Disparaging, derogatory, belittling (adj); a name or word that is disparaging (noun)",
  "gloss": "Disparaging, derogatory, belittling"
 },
 {
  "word": "pellucid",
  "definition": "Transparent, translucent; clear, easy to understand",
  "gloss": "Transparent, translucent"
 },
 {
  "word": "penchant",
  "definition": "Liking or inclination (usually penchant for)",
  "gloss": "Liking or inclination (usually penchant for)"
 },
 {
  "word": "penitent",
  "definition": "Regretful, feeling remorse for one's sins or misdeeds (adj); a person who feels this way (noun)",
  "gloss": "Regretful, feeling remorse for one's sins or misdeeds"
 },
 {
  "word": "penumbra",
  "definition": "Outer part of a shadow from an eclipse; any surrounding region, fringe, periphery; any area where something \"sort of\" exists",
  "gloss": "Outer part of a shadow from an eclipse"
 },
 {
  "word": "penury",
  "definition": "Extreme poverty or scarcity",
  "gloss": "Extreme poverty or scarcity"
 },
 {
  "word": "per",
  "definition": "se Intrinsically; by itself; in itself",
  "gloss": "Se Intrinsically"
 },
 {
  "word": "peregrinate",
  "definition": "Travel from place to place, esp. on foot",
  "gloss": "Travel from place to place, esp. on foot"
 },
 {
  "word": "perennial",
  "definition": "Lasting through the years or indefinitely, enduring; recurring",
  "gloss": "Lasting through the years or indefinitely, enduring"
 },
 {
  "word": "perfidious",
  "definition": "Disloyal, treacherous, violating one's trust",
  "gloss": "Disloyal, treacherous, violating one's trust"
 },
 {
  "word": "perfunctory",
  "definition": "Done superficially, without much care, or merely as routine",
  "gloss": "Done superficially, without much care, or merely as routine"
 },
 {
  "word": "peripatetic",
  "definition": "Journeying from place to place; traveling on foot",
  "gloss": "Journeying from place to place"
 },
 {
  "word": "peripheral",
  "definition": "Relating to or making up an outer boundary or region; not of primary importance, fringe",
  "gloss": "Relating to or making up an outer boundary or region"
 },
 {
  "word": "permeate",
  "definition": "Spread or penetrate throughout",
  "gloss": "Spread or penetrate throughout"
 },
 {
  "word": "pernicious",
  "definition": "Very harmful or destructive, deadly",
  "gloss": "Very harmful or destructive, deadly"
 },
 {
  "word": "perspicacious",
  "definition": "Having penetrating insight or good discernment",
  "gloss": "Having penetrating insight or good discernment"
 },
 {
  "word": "pervasive",
  "definition": "Tending to spread throughout",
  "gloss": "Tending to spread throughout"
 },
 {
  "word": "phalanx",
  "definition": "Formation of soldiers carrying shields close together for defense; any very close group of people",
  "gloss": "Formation of soldiers carrying shields close together for defense"
 },
 {
  "word": "philanthropy",
  "definition": "Efforts to improve the well-being of humankind, generally through giving money",
  "gloss": "Efforts to improve the well-being of humankind"
 },
 {
  "word": "philistine",
  "definition": "Person deficient in or hostile to culture",
  "gloss": "Person deficient in or hostile to culture"
 },
 {
  "word": "phlegmatic",
  "definition": "Apathetic, sluggish, not easily excited or made emotional",
  "gloss": "Apathetic, sluggish, not easily excited or made emotional"
 },
 {
  "word": "phony",
  "definition": "Fake, counterfeit; insincere, not genuine",
  "gloss": "Fake, counterfeit"
 },
 {
  "word": "pious",
  "definition": "Devout; religiously reverent and dutiful",
  "gloss": "Devout"
 },
 {
  "word": "pith",
  "definition": "Core, essence; significance or weight",
  "gloss": "Core, essence"
 },
 {
  "word": "placate",
  "definition": "Satisfy or calm down (an angry or dissatisfied person), esp. by conciliatory gestures",
  "gloss": "Satisfy or calm down (an angry or dissatisfied person)"
 },
 {
  "word": "placid",
  "definition": "Peaceful, calm, tranquil",
  "gloss": "Peaceful, calm, tranquil"
 },
 {
  "word": "plastic",
  "definition": "Able to be shaped or formed; easily influenced",
  "gloss": "Able to be shaped or formed"
 },
 {
  "word": "platitude",
  "definition": "A shallow, overused statement; cliche",
  "gloss": "A shallow, overused statement"
 },
 {
  "word": "plausible",
  "definition": "Believable; having the appearance of truth",
  "gloss": "Believable"
 },
 {
  "word": "plebian",
  "definition": "Of the common people",
  "gloss": "Of the common people"
 },
 {
  "word": "plethora",
  "definition": "Excess; excessive amount",
  "gloss": "Excess"
 },
 {
  "word": "plucky",
  "definition": "Brave, spirited",
  "gloss": "Brave, spirited"
 },
 {
  "word": "plummet",
  "definition": "Plunge, fall straight down",
  "gloss": "Plunge, fall straight down"
 },
 {
  "word": "plutocracy",
  "definition": "Rule by the wealthy",
  "gloss": "Rule by the wealthy"
 },
 {
  "word": "polarized",
  "definition": "Divided into sharply opposed groups",
  "gloss": "Divided into sharply opposed groups"
 },
 {
  "word": "polemic",
  "definition": "Controversial argument, esp. one attacking a specific idea",
  "gloss": "Controversial argument, esp. one attacking a specific idea"
 },
 {
  "word": "politic",
  "definition": "Shrewd, pragmatic; tactful or diplomatic",
  "gloss": "Shrewd, pragmatic"
 },
 {
  "word": "polyglot",
  "definition": "Speaking or composed of many languages (of a person, book, etc.); a person who knows several languages",
  "gloss": "Speaking or composed of many languages (of a person, book, etc.)"
 },
 {
  "word": "ponderous",
  "definition": "Heavy; bulky and unwieldy; dull, labored",
  "gloss": "Heavy"
 },
 {
  "word": "posit",
  "definition": "Presume, suggest, put forward (an idea)",
  "gloss": "Presume, suggest, put forward (an idea)"
 },
 {
  "word": "posthumous",
  "definition": "Happening or continuing after death",
  "gloss": "Happening or continuing after death"
 },
 {
  "word": "potentate",
  "definition": "Ruler, person of great power",
  "gloss": "Ruler, person of great power"
 },
 {
  "word": "pragmatic",
  "definition": "Practical; dealing with actual facts and reality",
  "gloss": "Practical"
 },
 {
  "word": "prattle",
  "definition": "Talk in an idle, simple-minded, meaningless, or foolish way; chatter, babble",
  "gloss": "Talk in an idle, simple-minded, meaningless, or foolish way"
 },
 {
  "word": "pre-empt",
  "definition": "Prevent; take the place of, supplant; take before someone else can",
  "gloss": "Prevent"
 },
 {
  "word": "preamble",
  "definition": "Introductory statement, preface",
  "gloss": "Introductory statement, preface"
 },
 {
  "word": "precarious",
  "definition": "Unstable, insecure, dangerous",
  "gloss": "Unstable, insecure, dangerous"
 },
 {
  "word": "precipitate",
  "definition": "Cause to happen suddenly or prematurely; fling, plunge, or hurl down",
  "gloss": "Cause to happen suddenly or prematurely"
 },
 {
  "word": "précis",
  "definition": "Concise summary, abstract",
  "gloss": "Concise summary, abstract"
 },
 {
  "word": "precursor",
  "definition": "Something that comes before, esp. something that also announces or suggests something on its way",
  "gloss": "Something that comes before"
 },
 {
  "word": "predilection",
  "definition": "Preference, tendency or favorability towards",
  "gloss": "Preference, tendency or favorability towards"
 },
 {
  "word": "predisposed",
  "definition": "Having an inclination or tendency beforehand; susceptible",
  "gloss": "Having an inclination or tendency beforehand"
 },
 {
  "word": "prescient",
  "definition": "Having foreknowledge or foresight, seeing the future",
  "gloss": "Having foreknowledge or foresight, seeing the future"
 },
 {
  "word": "presumptive",
  "definition": "Based on inference or assumption; providing reasonable grounds for belief",
  "gloss": "Based on inference or assumption"
 },
 {
  "word": "presumptuous",
  "definition": "Too bold or forward; going beyond that which is proper",
  "gloss": "Too bold or forward"
 },
 {
  "word": "pretentious",
  "definition": "Claiming or demanding a position of importance or dignity, esp. when unjustified; showing off, creating a deceptive, false show of worth",
  "gloss": "Claiming or demanding a position of importance or dignity"
 },
 {
  "word": "preternatural",
  "definition": "Supernatural, exceptional",
  "gloss": "Supernatural, exceptional"
 },
 {
  "word": "prevaricate",
  "definition": "Stray from the truth, mislead, lie",
  "gloss": "Stray from the truth, mislead, lie"
 },
 {
  "word": "primacy",
  "definition": "The state of being first or most important",
  "gloss": "The state of being first or most important"
 },
 {
  "word": "principled",
  "definition": "Having high moral standards",
  "gloss": "Having high moral standards"
 },
 {
  "word": "pristine",
  "definition": "In an original, pure state; uncorrupted",
  "gloss": "In an original, pure state"
 },
 {
  "word": "probity",
  "definition": "Honesty, integrity",
  "gloss": "Honesty, integrity"
 },
 {
  "word": "proclivity",
  "definition": "Inclination, natural tendency",
  "gloss": "Inclination, natural tendency"
 },
 {
  "word": "prodigal",
  "definition": "Wasteful, extravagant; giving abundantly, lavish",
  "gloss": "Wasteful, extravagant"
 },
 {
  "word": "prodigious",
  "definition": "Extraordinarily large, impressive, etc.",
  "gloss": "Extraordinarily large, impressive, etc"
 },
 {
  "word": "profligate",
  "definition": "Completely and shamelessly immoral, or extremely wasteful",
  "gloss": "Completely and shamelessly immoral, or extremely wasteful"
 },
 {
  "word": "profound",
  "definition": "Very insightful, penetrating deeply into a subject; pervasive, intense, \"down to the very bottom\"; at the very bottom",
  "gloss": "Very insightful, penetrating deeply into a subject"
 },
 {
  "word": "profuse",
  "definition": "Abundant, extravagant, giving or given freely",
  "gloss": "Abundant, extravagant, giving or given freely"
 },
 {
  "word": "prohibitive",
  "definition": "Tending to forbid something, or serving to prevent something",
  "gloss": "Tending to forbid something, or serving to prevent something"
 },
 {
  "word": "proliferate",
  "definition": "Increase or spread rapidly or excessively",
  "gloss": "Increase or spread rapidly or excessively"
 },
 {
  "word": "prolix",
  "definition": "Excessively long and wordy (of a person, piece of writing, etc.)",
  "gloss": "Excessively long and wordy (of a person, piece of writing, etc.)"
 },
 {
  "word": "prologue",
  "definition": "Introductory part to a book, play, etc.",
  "gloss": "Introductory part to a book, play, etc"
 },
 {
  "word": "pronounced",
  "definition": "Distinct, strong, clearly indicated",
  "gloss": "Distinct, strong, clearly indicated"
 },
 {
  "word": "propagate",
  "definition": "Reproduce, spread, increase",
  "gloss": "Reproduce, spread, increase"
 },
 {
  "word": "propensity",
  "definition": "Natural inclination or tendency",
  "gloss": "Natural inclination or tendency"
 },
 {
  "word": "prophetic",
  "definition": "Relating to prophesy, predicting, ominous",
  "gloss": "Relating to prophesy, predicting, ominous"
 },
 {
  "word": "propitiate",
  "definition": "Attempt to reconcile with, satisfy, or reduce the animosity of (a person who is angry, offended, etc.)",
  "gloss": "Attempt to reconcile with"
 },
 {
  "word": "propitious",
  "definition": "Favorable, giving good signs for the future, likely to work out; kind or forgiving",
  "gloss": "Favorable, giving good signs for the future, likely to work out"
 },
 {
  "word": "propriety",
  "definition": "Conforming to good manners or appropriate behavior; justness",
  "gloss": "Conforming to good manners or appropriate behavior"
 },
 {
  "word": "prosaic",
  "definition": "Dull, ordinary",
  "gloss": "Dull, ordinary"
 },
 {
  "word": "proscribe",
  "definition": "Prohibit, outlaw; denounce; exile or banish",
  "gloss": "Prohibit, outlaw"
 },
 {
  "word": "prospective",
  "definition": "Potential, in the future",
  "gloss": "Potential, in the future"
 },
 {
  "word": "providential",
  "definition": "Lucky, fortunate, or relating to divine care (the idea that a deity has helped or cared for a person)",
  "gloss": "Lucky"
 },
 {
  "word": "proxy",
  "definition": "Agent, substitute, person authorized to act on behalf of another",
  "gloss": "Agent, substitute, person authorized to act on behalf of another"
 },
 {
  "word": "prudent",
  "definition": "Wise in practical matters, carefully providing for the future",
  "gloss": "Wise in practical matters, carefully providing for the future"
 },
 {
  "word": "puerile",
  "definition": "Juvenile, immature",
  "gloss": "Juvenile, immature"
 },
 {
  "word": "pugilism",
  "definition": "boxing, fighting with the fists",
  "gloss": "Boxing, fighting with the fists"
 },
 {
  "word": "pugnacious",
  "definition": "Inclined to fight, combative",
  "gloss": "Inclined to fight, combative"
 },
 {
  "word": "puissance",
  "definition": "Power, might",
  "gloss": "Power, might"
 },
 {
  "word": "pulchritude",
  "definition": "Physical beauty",
  "gloss": "Physical beauty"
 },
 {
  "word": "pungent",
  "definition": "Having a sharp taste or smell; biting, stimulating, sharp",
  "gloss": "Having a sharp taste or smell"
 },
 {
  "word": "pusillanimous",
  "definition": "Cowardly, timid",
  "gloss": "Cowardly, timid"
 },
 {
  "word": "qualified",
  "definition": "Modified, limited, conditional on something else",
  "gloss": "Modified, limited, conditional on something else"
 },
 {
  "word": "quandary",
  "definition": "Uncertainty or confusion about what to do, dilemma",
  "gloss": "Uncertainty or confusion about what to do, dilemma"
 },
 {
  "word": "querulous",
  "definition": "Given to complaining, grumbling",
  "gloss": "Given to complaining, grumbling"
 },
 {
  "word": "quibble",
  "definition": "Make trivial arguments or criticisms, find faults in a petty way, esp. to evade something more important",
  "gloss": "Make trivial arguments or criticisms"
 },
 {
  "word": "quiescent",
  "definition": "Quiet, still",
  "gloss": "Quiet, still"
 },
 {
  "word": "quixotic",
  "definition": "Extremely impractical but very romantic, chivalrous, or idealistic; impulsive",
  "gloss": "Extremely impractical but very romantic, chivalrous, or idealistic"
 },
 {
  "word": "quotidian",
  "definition": "Daily; everyday, ordinary",
  "gloss": "Daily"
 },
 {
  "word": "raconteur",
  "definition": "Witty storyteller",
  "gloss": "Witty storyteller"
 },
 {
  "word": "ranks",
  "definition": "Personnel; a group of people considered all together",
  "gloss": "Personnel"
 },
 {
  "word": "rarefied",
  "definition": "Lofty, very high up or elevated (in a metaphorical way); exclusive, select; thin, pure, or less dense (as air at the top of a mountain)",
  "gloss": "Lofty, very high up or elevated (in a metaphorical way)"
 },
 {
  "word": "reactant",
  "definition": "Something that reacts; a substance that undergoes a change in a chemical reaction",
  "gloss": "Something that reacts"
 },
 {
  "word": "reap",
  "definition": "Harvest, such as by cutting; gather; get as a result of one's effort",
  "gloss": "Harvest, such as by cutting"
 },
 {
  "word": "recalcitrant",
  "definition": "Not obedient, resisting authority, hard to manage",
  "gloss": "Not obedient, resisting authority, hard to manage"
 },
 {
  "word": "recant",
  "definition": "Withdraw, retract, or disavow something one has previously said, esp. formally",
  "gloss": "Withdraw"
 },
 {
  "word": "recapitulate",
  "definition": "Summarize, repeat in a concise way",
  "gloss": "Summarize, repeat in a concise way"
 },
 {
  "word": "recluse",
  "definition": "Person who lives in seclusion",
  "gloss": "Person who lives in seclusion"
 },
 {
  "word": "recondite",
  "definition": "Not easily understood, hidden, dealing with an obscure topic",
  "gloss": "Not easily understood, hidden, dealing with an obscure topic"
 },
 {
  "word": "recrudescent",
  "definition": "Revival, breaking out into renewed activity",
  "gloss": "Revival, breaking out into renewed activity"
 },
 {
  "word": "redound",
  "definition": "To have a good or bad effect, esp. as a result of a person's efforts or actions (usually used with to, on, or upon)",
  "gloss": "To have a good or bad effect"
 },
 {
  "word": "redress",
  "definition": "Setting something right after a misdeed, compensation or relief for injury or wrongdoing (noun); correct, set right, remedy (verb)",
  "gloss": "Setting something right after a misdeed"
 },
 {
  "word": "refractory",
  "definition": "Stubbornly disobedient, hard to manage",
  "gloss": "Stubbornly disobedient, hard to manage"
 },
 {
  "word": "refulgent",
  "definition": "Shining, radiant",
  "gloss": "Shining, radiant"
 },
 {
  "word": "refute",
  "definition": "Prove to be false",
  "gloss": "Prove to be false"
 },
 {
  "word": "rejoinder",
  "definition": "Response or reply, esp. a witty comeback",
  "gloss": "Response or reply, esp. a witty comeback"
 },
 {
  "word": "relegate",
  "definition": "Send or commit to an inferior place, rank, condition, etc.; exile, banish; assign (a task) to someone else",
  "gloss": "Send or commit to an inferior place, rank, condition, etc"
 },
 {
  "word": "remedial",
  "definition": "Providing a remedy, curative; correcting a deficient skill",
  "gloss": "Providing a remedy, curative"
 },
 {
  "word": "rend",
  "definition": "Tear violently, esp. to tear one's clothing or hair out of grief; pull apart, split, or tear away",
  "gloss": "Tear violently, esp. to tear one's clothing or hair out of grief"
 },
 {
  "word": "render",
  "definition": "Give, submit, surrender; translate; declare formally; cause to become",
  "gloss": "Give, submit, surrender"
 },
 {
  "word": "repast",
  "definition": "A meal (noun); to eat or feast (verb)",
  "gloss": "A meal"
 },
 {
  "word": "repertorial",
  "definition": "Pertaining to a repertory or repertoire, a stock of available things or a number of theatrical performances presented regularly or in sequence",
  "gloss": "Pertaining to a repertory or repertoire"
 },
 {
  "word": "replete",
  "definition": "Supplied in abundance, filled, gorged (used with with)",
  "gloss": "Supplied in abundance, filled, gorged (used with with)"
 },
 {
  "word": "repose",
  "definition": "The act or state of resting; peacefulness, tranquility; lying dead in a grave",
  "gloss": "The act or state of resting"
 },
 {
  "word": "reproach",
  "definition": "Blame, disgrace (noun); criticize, express disappointment in (verb)",
  "gloss": "Blame, disgrace"
 },
 {
  "word": "reprobate",
  "definition": "Disreputable, unprincipled, or damned person (noun); shameless, depraved (adj)",
  "gloss": "Disreputable, unprincipled, or damned person"
 },
 {
  "word": "repudiate",
  "definition": "Reject, cast off, deny that something has authority",
  "gloss": "Reject, cast off, deny that something has authority"
 },
 {
  "word": "requite",
  "definition": "Reciprocate, repay, or revenge",
  "gloss": "Reciprocate, repay, or revenge"
 },
 {
  "word": "rescind",
  "definition": "Annul, repeal, make void",
  "gloss": "Annul, repeal, make void"
 },
 {
  "word": "resolution",
  "definition": "The quality of being firmly determined; resolving to do something; a formal judgment, esp. decided by a vote",
  "gloss": "The quality of being firmly determined"
 },
 {
  "word": "resolve",
  "definition": "Find a solution to; firmly decide to do something; decide by formal vote (verb); firmness of purpose (noun)",
  "gloss": "Find a solution to"
 },
 {
  "word": "respectively",
  "definition": "In the order given",
  "gloss": "In the order given"
 },
 {
  "word": "restive",
  "definition": "Impatient or uneasy under the control of another; resisting being controlled",
  "gloss": "Impatient or uneasy under the control of another"
 },
 {
  "word": "resurgent",
  "definition": "Having a revival, renewing, rising or surging again",
  "gloss": "Having a revival, renewing, rising or surging again"
 },
 {
  "word": "reticent",
  "definition": "Not talking much; private (of a person), restrained, reserved",
  "gloss": "Not talking much"
 },
 {
  "word": "retrospective",
  "definition": "Looking to the past or backward; applying to the past, retroactive (adj); an art exhibit of an artist's work over a long period of time (noun)",
  "gloss": "Looking to the past or backward"
 },
 {
  "word": "revamp",
  "definition": "Renovate, redo, revise (verb); a restructuring, upgrade, etc. (noun)",
  "gloss": "Renovate, redo, revise"
 },
 {
  "word": "reverent",
  "definition": "Feeling or expressing very deep respect and awe",
  "gloss": "Feeling or expressing very deep respect and awe"
 },
 {
  "word": "rhetoric",
  "definition": "The art or study of persuasion through speaking or writing; language that is elaborate or pretentious but actually empty, meaning little",
  "gloss": "The art or study of persuasion through speaking or writing"
 },
 {
  "word": "ribald",
  "definition": "Using or relating to obscene or vulgar humor",
  "gloss": "Using or relating to obscene or vulgar humor"
 },
 {
  "word": "ridden",
  "definition": "Dominated or burdened by",
  "gloss": "Dominated or burdened by"
 },
 {
  "word": "rife",
  "definition": "Happening frequently, abundant, currently being reported",
  "gloss": "Happening frequently, abundant, currently being reported"
 },
 {
  "word": "rift",
  "definition": "A gap or fissure (such as in rock), a break in friendly relations",
  "gloss": "A gap or fissure (such as in rock), a break in friendly relations"
 },
 {
  "word": "rococo",
  "definition": "Very elaborate and ornate (in decorating or metaphorically, as in speech and writing); relating to a highly ornate style of art and architecture in 18th-century France",
  "gloss": "Very elaborate and ornate (in decorating or metaphorically"
 },
 {
  "word": "rudimentary",
  "definition": "Elementary, relating to the basics; undeveloped, primitive",
  "gloss": "Elementary, relating to the basics"
 },
 {
  "word": "rue",
  "definition": "Regret, remorse (noun); to feel regret or remorse (verb)",
  "gloss": "Regret, remorse"
 },
 {
  "word": "ruminate",
  "definition": "Turn over in the mind, reflect on; chew cud (as a cow)",
  "gloss": "Turn over in the mind, reflect on"
 },
 {
  "word": "rustic",
  "definition": "Relating to country life, unsophisticated; primitive; made of rough wood (adj); a rural or uncultured person (noun)",
  "gloss": "Relating to country life, unsophisticated"
 },
 {
  "word": "sacrosanct",
  "definition": "Sacred, inviolable, not to be trespassed on or violated; above any criticism",
  "gloss": "Sacred, inviolable, not to be trespassed on or violated"
 },
 {
  "word": "sagacious",
  "definition": "Wise; showing good judgment and foresight",
  "gloss": "Wise"
 },
 {
  "word": "salient",
  "definition": "Obvious, standing out; projecting, protruding, jutting out",
  "gloss": "Obvious, standing out"
 },
 {
  "word": "salubrious",
  "definition": "Healthful, promoting health",
  "gloss": "Healthful, promoting health"
 },
 {
  "word": "sanction",
  "definition": "Permission or approval, something that gives support or authority to something else (noun); to allow, confirm, ratify (verb); OR a legal action by one or more countries against another country to get it to comply (noun); to place sanctions or penalties on (verb)",
  "gloss": "Permission or approval"
 },
 {
  "word": "sanguine",
  "definition": "Cheerfully optimistic, hopeful; reddish, ruddy (as in rosy-red cheeks indicting health or vitality)",
  "gloss": "Cheerfully optimistic, hopeful"
 },
 {
  "word": "sap",
  "definition": "The inner fluid of a plant or any essential body fluid; energy, vitality; a person taken advantage of (noun); undermine, weaken, tire out (verb)",
  "gloss": "The inner fluid of a plant or any essential body fluid"
 },
 {
  "word": "sardonic",
  "definition": "Scornfully or ironically mocking, cynically derisive",
  "gloss": "Scornfully or ironically mocking, cynically derisive"
 },
 {
  "word": "satiate",
  "definition": "or To fully satisfy; to go beyond satisfying to the sate point of excess (possibly inducing disgust, tiredness, etc.)",
  "gloss": "Or To fully satisfy"
 },
 {
  "word": "saturate",
  "definition": "Soak or imbue thoroughly; cause a substance to unite with the greatest possible amount of another substance",
  "gloss": "Soak or imbue thoroughly"
 },
 {
  "word": "savant",
  "definition": "Learned person, scholar, someone admitted to membership in a scholarly field; a person with amazing mental abilities despite having a cognitive difference or disability",
  "gloss": "Learned person"
 },
 {
  "word": "savor",
  "definition": "Appreciate fully, taste or smell with pleasure",
  "gloss": "Appreciate fully, taste or smell with pleasure"
 },
 {
  "word": "scant",
  "definition": "Not enough or barely enough",
  "gloss": "Not enough or barely enough"
 },
 {
  "word": "scathing",
  "definition": "Severe, injurious; bitterly harsh or critical (as a remark)",
  "gloss": "Severe, injurious"
 },
 {
  "word": "scintilla",
  "definition": "A tiny bit or trace",
  "gloss": "A tiny bit or trace"
 },
 {
  "word": "scurvy",
  "definition": "Contemptible, mean",
  "gloss": "Contemptible, mean"
 },
 {
  "word": "searchingly",
  "definition": "In a searching or penetrating manner; while examining closely or probing for answers",
  "gloss": "In a searching or penetrating manner"
 },
 {
  "word": "secrete",
  "definition": "Produce and release a substance from a cell or gland of the body for a functional purpose",
  "gloss": "Produce and release a substance from a cell or gland of the body for a functional purpose"
 },
 {
  "word": "secular",
  "definition": "Not religious or holy; pertaining to worldly things",
  "gloss": "Not religious or holy"
 },
 {
  "word": "sedition",
  "definition": "Inciting rebellion against a government, esp. speech or writing that does this",
  "gloss": "Inciting rebellion against a government"
 },
 {
  "word": "sedulous",
  "definition": "Persevering, persistent, diligent in one's efforts",
  "gloss": "Persevering, persistent, diligent in one's efforts"
 },
 {
  "word": "semantic",
  "definition": "Relating to the different meanings of words or other symbols",
  "gloss": "Relating to the different meanings of words or other symbols"
 },
 {
  "word": "sentient",
  "definition": "Conscious; experiencing sensation or perceiving with the senses",
  "gloss": "Conscious"
 },
 {
  "word": "seraphic",
  "definition": "Like an angel; serene, spiritually carried off or transported",
  "gloss": "Like an angel"
 },
 {
  "word": "shard",
  "definition": "Fragment of some brittle substance, esp. a sharp fragment of pottery, glass, etc.",
  "gloss": "Fragment of some brittle substance"
 },
 {
  "word": "simultaneous",
  "definition": "At the same time",
  "gloss": "At the same time"
 },
 {
  "word": "sinecure",
  "definition": "A job or position that pays while requiring little or no work",
  "gloss": "A job or position that pays while requiring little or no work"
 },
 {
  "word": "skeptic",
  "definition": "Person inclined to doubting or questioning generally accepted beliefs",
  "gloss": "Person inclined to doubting or questioning generally accepted beliefs"
 },
 {
  "word": "skirt",
  "definition": "Border, lie along the edge of, go around; evade",
  "gloss": "Border, lie along the edge of, go around"
 },
 {
  "word": "skittish",
  "definition": "Shy, fickle, uncertain, or prone to act suddenly due to nervousness; lively in a restless or excessive way",
  "gloss": "Shy, fickle, uncertain, or prone to act suddenly due to nervousness"
 },
 {
  "word": "slack",
  "definition": "Loose, negligent, lazy, weak (adj); neglect to do one's duties; loosen up, relax (verb); period of little work (noun)",
  "gloss": "Loose, negligent, lazy, weak"
 },
 {
  "word": "slake",
  "definition": "Satisfy (esp. thirst), cool, or refresh; make less active",
  "gloss": "Satisfy (esp. thirst), cool, or refresh"
 },
 {
  "word": "slew",
  "definition": "A large number or quantity",
  "gloss": "A large number or quantity"
 },
 {
  "word": "slight",
  "definition": "Small, not very important, slender or delicate (adj); treat as though not very important; snub, ignore (verb); an act of treating in this way, a discourtesy (noun)",
  "gloss": "Small, not very important, slender or delicate"
 },
 {
  "word": "sobriquet",
  "definition": "A nickname",
  "gloss": "A nickname"
 },
 {
  "word": "solecism",
  "definition": "Nonstandard use of grammar or words; mistake, esp. in etiquette",
  "gloss": "Nonstandard use of grammar or words"
 },
 {
  "word": "solicitous",
  "definition": "Concerned or anxious (about another person), expressing care; eager or desirous; very careful",
  "gloss": "Concerned or anxious (about another person), expressing care"
 },
 {
  "word": "solidarity",
  "definition": "Fellowship in interests, feelings, responsibilities, etc., such as among a group of people or among classes, nations, etc.",
  "gloss": "Fellowship in interests"
 },
 {
  "word": "somatic",
  "definition": "Of the body",
  "gloss": "Of the body"
 },
 {
  "word": "soporific",
  "definition": "Causing sleep; sleepy, drowsy (adj); something that causes sleep (noun)",
  "gloss": "Causing sleep"
 },
 {
  "word": "sound",
  "definition": "Measure the depth of (usually of water) as with a sounding line; penetrate and discover the meaning of, understand (usually as sound the depths)",
  "gloss": "Measure the depth of (usually of water) as with a sounding line"
 },
 {
  "word": "spartan",
  "definition": "Very disciplined and stern; frugal, living simply, austere; suggestive of the ancient Spartans",
  "gloss": "Very disciplined and stern"
 },
 {
  "word": "spate",
  "definition": "Sudden outpouring or rush; flood",
  "gloss": "Sudden outpouring or rush"
 },
 {
  "word": "spearhead",
  "definition": "Be the leader of",
  "gloss": "Be the leader of"
 },
 {
  "word": "specious",
  "definition": "Seemingly true but actually false; deceptively attractive",
  "gloss": "Seemingly true but actually false"
 },
 {
  "word": "spectrum",
  "definition": "A broad range of nevertheless related qualities or ideas, esp. those that overlap to create a continuous series (as in a color spectrum, where each color blends into the next in a continuous way)",
  "gloss": "A broad range of nevertheless related qualities or ideas"
 },
 {
  "word": "speculate",
  "definition": "Contemplate; make a guess or educated guess about; engage in a risky business transaction, gamble",
  "gloss": "Contemplate"
 },
 {
  "word": "sporadic",
  "definition": "Occasional, happening irregularly or in scattered locations",
  "gloss": "Occasional, happening irregularly or in scattered locations"
 },
 {
  "word": "sportive",
  "definition": "Playful, merry, joking around, done \"in sport\" (rather than intended seriously)",
  "gloss": "Playful"
 },
 {
  "word": "squalid",
  "definition": "Disgusting, filthy, foul, extremely neglected",
  "gloss": "Disgusting, filthy, foul, extremely neglected"
 },
 {
  "word": "squelch",
  "definition": "Crush, squash; suppress or silence; walk through ooze or in wet shoes, making a smacking or sucking sound",
  "gloss": "Crush, squash"
 },
 {
  "word": "standing",
  "definition": "Status, rank, reputation (noun); existing indefinitely, not movable (adj)",
  "gloss": "Status, rank, reputation"
 },
 {
  "word": "stark",
  "definition": "Complete, total, utter; harsh or grim; extremely simple, severe, blunt, or plain",
  "gloss": "Complete, total, utter"
 },
 {
  "word": "stasis",
  "definition": "Equilibrium, a state of balance or inactivity, esp. caused by equal but opposing forces",
  "gloss": "Equilibrium"
 },
 {
  "word": "static",
  "definition": "Fixed, not moving or changing, lacking vitality",
  "gloss": "Fixed, not moving or changing, lacking vitality"
 },
 {
  "word": "status",
  "definition": "quo Existing state or condition",
  "gloss": "Quo Existing state or condition"
 },
 {
  "word": "steeped",
  "definition": "Immersed (in), saturated (with)",
  "gloss": "Immersed (in), saturated (with)"
 },
 {
  "word": "stentorian",
  "definition": "Very loud and powerful (generally of a human voice)",
  "gloss": "Very loud and powerful (generally of a human voice)"
 },
 {
  "word": "stigma",
  "definition": "Mark of disgrace, a figurative stain or mark on someone's reputation",
  "gloss": "Mark of disgrace, a figurative stain or mark on someone's reputation"
 },
 {
  "word": "stingy",
  "definition": "Not generous with money, reluctant to spend or give",
  "gloss": "Not generous with money, reluctant to spend or give"
 },
 {
  "word": "stint",
  "definition": "Period of time spent doing something, or a specific, limited amount of work (noun); to be frugal, to get by on little (verb)",
  "gloss": "Period of time spent doing something"
 },
 {
  "word": "stipulate",
  "definition": "Specify; make an open demand, esp. as a condition of agreement",
  "gloss": "Specify"
 },
 {
  "word": "stoic",
  "definition": "or Indifferent to pleasure or pain, enduring stoical without complaint; person indifferent to pleasure or pain (noun)",
  "gloss": "Or Indifferent to pleasure or pain, enduring stoical without complaint"
 },
 {
  "word": "stolid",
  "definition": "Unemotional, showing little emotion, not easily moved",
  "gloss": "Unemotional, showing little emotion, not easily moved"
 },
 {
  "word": "stratagem",
  "definition": "Military maneuver to deceive or surprise; crafty scheme",
  "gloss": "Military maneuver to deceive or surprise"
 },
 {
  "word": "stratum",
  "definition": "One of many layers (such as in a rock formation or in the classes of a society)",
  "gloss": "One of many layers (such as in a rock formation or in the classes of a society)"
 },
 {
  "word": "strut",
  "definition": "A structural support or brace",
  "gloss": "A structural support or brace"
 },
 {
  "word": "stymie",
  "definition": "or Block, hinder, or thwart (verb); an obstacle stymy (noun)",
  "gloss": "Or Block, hinder, or thwart"
 },
 {
  "word": "subjective",
  "definition": "Existing in the mind or relating to one's own thoughts, opinions, emotions, etc.; personal, individual, based on feelings",
  "gloss": "Existing in the mind or relating to one's own thoughts"
 },
 {
  "word": "sublime",
  "definition": "Lofty or elevated, inspiring reverence or awe; excellent, majestic; complete, utter",
  "gloss": "Lofty or elevated, inspiring reverence or awe"
 },
 {
  "word": "subpoena",
  "definition": "A court order requiring a person to appear in court and give testimony",
  "gloss": "A court order requiring a person to appear in court and give testimony"
 },
 {
  "word": "subside",
  "definition": "Sink, settle down, become less active; return to a normal level",
  "gloss": "Sink, settle down, become less active"
 },
 {
  "word": "substantiate",
  "definition": "Support with evidence or proof; give a material existence to",
  "gloss": "Support with evidence or proof"
 },
 {
  "word": "succeeding",
  "definition": "Coming after or following",
  "gloss": "Coming after or following"
 },
 {
  "word": "sully",
  "definition": "Make dirty, stain, tarnish, defile",
  "gloss": "Make dirty, stain, tarnish, defile"
 },
 {
  "word": "supersede",
  "definition": "Replace, take the position of, cause to be disregarded as void or obsolete",
  "gloss": "Replace"
 },
 {
  "word": "supplant",
  "definition": "Take the place of, displace, especially through sneaky tactics",
  "gloss": "Take the place of, displace, especially through sneaky tactics"
 },
 {
  "word": "supplicate",
  "definition": "Pray humbly; ask, beg, or seek in a humble way",
  "gloss": "Pray humbly"
 },
 {
  "word": "supposition",
  "definition": "Assumption, hypothesis, something that has been supposed",
  "gloss": "Assumption, hypothesis, something that has been supposed"
 },
 {
  "word": "surfeit",
  "definition": "Excess, excessive amount, overindulgence",
  "gloss": "Excess, excessive amount, overindulgence"
 },
 {
  "word": "surly",
  "definition": "Bad-tempered, hostile, unfriendly, or rude",
  "gloss": "Bad-tempered, hostile, unfriendly, or rude"
 },
 {
  "word": "surmise",
  "definition": "Guess, infer, think, or make an opinion with incomplete information",
  "gloss": "Guess, infer, think, or make an opinion with incomplete information"
 },
 {
  "word": "surrogate",
  "definition": "Substitute, person who acts for another (noun); acting as a replacement (adj)",
  "gloss": "Substitute, person who acts for another"
 },
 {
  "word": "sybarite",
  "definition": "Person devoted to pleasure and luxury",
  "gloss": "Person devoted to pleasure and luxury"
 },
 {
  "word": "sycophant",
  "definition": "Servile flatterer, parasitic person who fawns in order to get ahead",
  "gloss": "Servile flatterer, parasitic person who fawns in order to get ahead"
 },
 {
  "word": "symbiosis",
  "definition": "Mutually dependent relationship between two organisms, people, groups, etc.",
  "gloss": "Mutually dependent relationship between two organisms"
 },
 {
  "word": "synchronous",
  "definition": "Happening at the same time; occurring at the same rate and thus happening together repeatedly",
  "gloss": "Happening at the same time"
 },
 {
  "word": "synoptic",
  "definition": "Relating to a synopsis or summary; giving a general view",
  "gloss": "Relating to a synopsis or summary"
 },
 {
  "word": "syntax",
  "definition": "The rules governing grammar and how words join to make sentences (or how words and symbols join in writing computer code), the study of these rules, or any system or orderly arrangement",
  "gloss": "The rules governing grammar and how words join to make sentences (or how words and symbols join in writing computer code)"
 },
 {
  "word": "table",
  "definition": "Lay aside to discuss later, often as a way to postpone discussion indefinitely",
  "gloss": "Lay aside to discuss later"
 },
 {
  "word": "tacit",
  "definition": "Understood without being said; implied, not stated directly; silent",
  "gloss": "Understood without being said"
 },
 {
  "word": "taciturn",
  "definition": "Not talking much, reserved; silent, holding back in conversation",
  "gloss": "Not talking much, reserved"
 },
 {
  "word": "tangential",
  "definition": "Only slightly relevant, going off-topic",
  "gloss": "Only slightly relevant, going off-topic"
 },
 {
  "word": "tawdry",
  "definition": "Gaudy, cheap or cheap-looking; indecent",
  "gloss": "Gaudy, cheap or cheap-looking"
 },
 {
  "word": "temperance",
  "definition": "Moderation, self-control, esp. regarding alcohol or other desires or pleasures; total abstinence from alcohol",
  "gloss": "Moderation"
 },
 {
  "word": "tendentious",
  "definition": "Marked by a strong point of view, biased",
  "gloss": "Marked by a strong point of view, biased"
 },
 {
  "word": "tenuous",
  "definition": "Long and thin, slender; flimsy, having little substance",
  "gloss": "Long and thin, slender"
 },
 {
  "word": "terrestrial",
  "definition": "Relating to the Earth or to land; worldly",
  "gloss": "Relating to the Earth or to land"
 },
 {
  "word": "terse",
  "definition": "Concise, brief and to the point (sometimes to the point of rudeness)",
  "gloss": "Concise, brief and to the point (sometimes to the point of rudeness)"
 },
 {
  "word": "timely",
  "definition": "Well-timed, happening at a suitable time",
  "gloss": "Well-timed, happening at a suitable time"
 },
 {
  "word": "timorous",
  "definition": "Fearful, timid",
  "gloss": "Fearful, timid"
 },
 {
  "word": "tirade",
  "definition": "Bitter, abusive criticism or verbal attack",
  "gloss": "Bitter, abusive criticism or verbal attack"
 },
 {
  "word": "toady",
  "definition": "Someone who flatters or acts in a servile manner for self-serving reasons",
  "gloss": "Someone who flatters or acts in a servile manner for self-serving reasons"
 },
 {
  "word": "token",
  "definition": "Sign, symbol, mark, badge; souvenir, memento; coin-like disk used as currency for subways, arcade games, etc.; sample, or person, thing, idea taken to represent an entire group (noun); of very little or merely symbolic value (adj)",
  "gloss": "Sign, symbol, mark, badge"
 },
 {
  "word": "tome",
  "definition": "Large or scholarly book; one of the volumes in a set of several books",
  "gloss": "Large or scholarly book"
 },
 {
  "word": "torpor",
  "definition": "Sluggishness, lethargy, or apathy; a period of inactivity",
  "gloss": "Sluggishness, lethargy, or apathy"
 },
 {
  "word": "torrid",
  "definition": "Very hot, parching, burning; passionate",
  "gloss": "Very hot, parching, burning"
 },
 {
  "word": "tortuous",
  "definition": "Twisting, winding, complex; devious, not straightforward",
  "gloss": "Twisting, winding, complex"
 },
 {
  "word": "tractable",
  "definition": "Easily controlled or managed, docile; easily shaped or molded",
  "gloss": "Easily controlled or managed, docile"
 },
 {
  "word": "transgression",
  "definition": "Violation of a law, moral rule, order, etc.; sin",
  "gloss": "Violation of a law, moral rule, order, etc"
 },
 {
  "word": "transitory",
  "definition": "Temporary, short-lived, not lasting",
  "gloss": "Temporary, short-lived, not lasting"
 },
 {
  "word": "travesty",
  "definition": "Exaggerated, debased, or grotesque imitation",
  "gloss": "Exaggerated, debased, or grotesque imitation"
 },
 {
  "word": "treacherous",
  "definition": "Betraying trust, not faithful or trustworthy; not dependable; dangerous or deceptive",
  "gloss": "Betraying trust, not faithful or trustworthy"
 },
 {
  "word": "trenchant",
  "definition": "forceful or vigorous, effective, keen; caustic, sharp",
  "gloss": "Forceful or vigorous, effective, keen"
 },
 {
  "word": "trifling",
  "definition": "Trivial, not very important; so small as to be unimportant; frivolous, shallow",
  "gloss": "Trivial, not very important"
 },
 {
  "word": "trite",
  "definition": "Lacking freshness and originality, lacking effectiveness due to overuse, cliché",
  "gloss": "Lacking freshness and originality"
 },
 {
  "word": "truculent",
  "definition": "Fierce, cruel, savage; belligerent",
  "gloss": "Fierce, cruel, savage"
 },
 {
  "word": "tumultuous",
  "definition": "Riotous, violently agitated, marked by disturbance or uproar; noisy, chaotic",
  "gloss": "Riotous, violently agitated, marked by disturbance or uproar"
 },
 {
  "word": "turgid",
  "definition": "Swollen, inflated; or, metaphorically \"inflated,\" such as in overblown, pompous speech",
  "gloss": "Swollen, inflated"
 },
 {
  "word": "turpitude",
  "definition": "Depravity, baseness of character, corrupt or depraved acts",
  "gloss": "Depravity, baseness of character, corrupt or depraved acts"
 },
 {
  "word": "tyro",
  "definition": "Beginner",
  "gloss": "Beginner"
 },
 {
  "word": "ubiquitous",
  "definition": "Existing everywhere at the same time",
  "gloss": "Existing everywhere at the same time"
 },
 {
  "word": "umbrage",
  "definition": "Offense or annoyance (usually as take umbrage, meaning become offended or annoyed)",
  "gloss": "Offense or annoyance (usually as take umbrage"
 },
 {
  "word": "unconscionable",
  "definition": "Not guided by conscience; morally wrong, unjust, unreasonable",
  "gloss": "Not guided by conscience"
 },
 {
  "word": "undermine",
  "definition": "Weaken, cause to collapse by digging away at the foundation (of a building or an argument); injure or attack in a secretive or underhanded way",
  "gloss": "Weaken"
 },
 {
  "word": "underscore",
  "definition": "Emphasize (or, literally, to underline text)",
  "gloss": "Emphasize (or, literally, to underline text)"
 },
 {
  "word": "unearth",
  "definition": "Dig up, uncover, expose",
  "gloss": "Dig up, uncover, expose"
 },
 {
  "word": "unequivocal",
  "definition": "Unambiguous, clear, absolute; having only one possible meaning",
  "gloss": "Unambiguous, clear, absolute"
 },
 {
  "word": "unprecedented",
  "definition": "Never before known or seen, without having happened previously",
  "gloss": "Never before known or seen, without having happened previously"
 },
 {
  "word": "unseemly",
  "definition": "Improper, inappropriate, against the rules of taste or politeness",
  "gloss": "Improper, inappropriate, against the rules of taste or politeness"
 },
 {
  "word": "unsparing",
  "definition": "Generous, lavish (as in not sparing any help or gifts to others); unmerciful, harsh (as in not sparing any criticism)",
  "gloss": "Generous, lavish (as in not sparing any help or gifts to others)"
 },
 {
  "word": "untempered",
  "definition": "Not toned down; not moderated, controlled, or counterbalanced",
  "gloss": "Not toned down"
 },
 {
  "word": "upbraid",
  "definition": "Find fault with, criticize or scold severely",
  "gloss": "Find fault with, criticize or scold severely"
 },
 {
  "word": "usury",
  "definition": "Charging interest on a loan, esp. charging illegally high or excessive interest",
  "gloss": "Charging interest on a loan"
 },
 {
  "word": "vacillate",
  "definition": "Waver in one's mind or opinions, be indecisive",
  "gloss": "Waver in one's mind or opinions, be indecisive"
 },
 {
  "word": "vanguard",
  "definition": "Leading units at the front of an army; leaders in a trend or movement, people on the \"cutting edge\"; the forefront of a trend or movement",
  "gloss": "Leading units at the front of an army"
 },
 {
  "word": "variegated",
  "definition": "Varied in color, having multicolored patches or spots; diverse",
  "gloss": "Varied in color, having multicolored patches or spots"
 },
 {
  "word": "venerate",
  "definition": "Revere, regard with deep respect and awe",
  "gloss": "Revere, regard with deep respect and awe"
 },
 {
  "word": "veracity",
  "definition": "Truthfulness, accuracy; habitual adherence to the truth",
  "gloss": "Truthfulness, accuracy"
 },
 {
  "word": "verbose",
  "definition": "Wordy",
  "gloss": "Wordy"
 },
 {
  "word": "verdant",
  "definition": "Green, such as with vegetation, plants, grass, etc.; young and inexperienced",
  "gloss": "Green, such as with vegetation, plants, grass, etc"
 },
 {
  "word": "verisimilar",
  "definition": "Having the appearance of truth, probable",
  "gloss": "Having the appearance of truth, probable"
 },
 {
  "word": "vernal",
  "definition": "Relating to the spring; fresh, youthful",
  "gloss": "Relating to the spring"
 },
 {
  "word": "vestige",
  "definition": "Trace or sign of something that once existed",
  "gloss": "Trace or sign of something that once existed"
 },
 {
  "word": "vex",
  "definition": "annoy or bother; puzzle or distress",
  "gloss": "Annoy or bother"
 },
 {
  "word": "via",
  "definition": "Through, by means of, by way of (by a route that goes through or touches)",
  "gloss": "Through"
 },
 {
  "word": "viable",
  "definition": "Capable of living (or growing, developing, etc.); practical, workable",
  "gloss": "Capable of living (or growing, developing, etc.)"
 },
 {
  "word": "vicissitude",
  "definition": "Changes or variations over time, esp. regular changes from one thing to another",
  "gloss": "Changes or variations over time"
 },
 {
  "word": "vim",
  "definition": "Pep, enthusiasm, vitality, lively spirit",
  "gloss": "Pep, enthusiasm, vitality, lively spirit"
 },
 {
  "word": "vintage",
  "definition": "Related to items of high quality from a previous era, old-fashioned, antique (adj); the wine of a particular year (noun)",
  "gloss": "Related to items of high quality from a previous era"
 },
 {
  "word": "virtual",
  "definition": "Existing only in the mind or by means of a computer network; existing in results or in essence but not officially or in name",
  "gloss": "Existing only in the mind or by means of a computer network"
 },
 {
  "word": "virulent",
  "definition": "Extremely infectious, poisonous, etc.; hateful, bitterly hostile",
  "gloss": "Extremely infectious, poisonous, etc"
 },
 {
  "word": "viscid",
  "definition": "or Thick, adhesive, or covered in something sticky viscous",
  "gloss": "Or Thick, adhesive, or covered in something sticky viscous"
 },
 {
  "word": "vitriol",
  "definition": "Something highly caustic, such as criticism (literally, one of a number of chemicals including sulfuric acid)",
  "gloss": "Something highly caustic"
 },
 {
  "word": "vituperate",
  "definition": "Verbally abuse, rebuke or criticize harshly",
  "gloss": "Verbally abuse, rebuke or criticize harshly"
 },
 {
  "word": "vociferous",
  "definition": "Noisily crying out, as in protest",
  "gloss": "Noisily crying out, as in protest"
 },
 {
  "word": "volatile",
  "definition": "Varying, inconstant, fleeting; tending to violence, explosive",
  "gloss": "Varying, inconstant, fleeting"
 },
 {
  "word": "voluble",
  "definition": "Easily fluent in regards to speech",
  "gloss": "Easily fluent in regards to speech"
 },
 {
  "word": "wan",
  "definition": "Unnaturally pale, or showing some other indication of sickness, unhappiness, etc.; weak, lacking forcefulness",
  "gloss": "Unnaturally pale"
 },
 {
  "word": "wanton",
  "definition": "Reckless, vicious, without regard for what is right; unjustifiable, deliberately done for no reason at all; sexually unrestrained or excessively luxurious",
  "gloss": "Reckless, vicious, without regard for what is right"
 },
 {
  "word": "warranted",
  "definition": "Justified, authorized (warrant can mean to justify or a justification, but can also mean to vouch for or guarantee)",
  "gloss": "Justified"
 },
 {
  "word": "wary",
  "definition": "Watchful, motivated by caution, on guard against danger",
  "gloss": "Watchful, motivated by caution, on guard against danger"
 },
 {
  "word": "welter",
  "definition": "Confused mass or pile, jumble; confusion or turmoil (noun); roll around, wallow, toss about, writhe (verb)",
  "gloss": "Confused mass or pile, jumble"
 },
 {
  "word": "whereas",
  "definition": "While on the contrary, considering that",
  "gloss": "While on the contrary, considering that"
 },
 {
  "word": "whet",
  "definition": "Stimulate, make keen or eager (esp. of an appetite)",
  "gloss": "Stimulate, make keen or eager (esp. of an appetite)"
 },
 {
  "word": "whimsical",
  "definition": "Marked or motivated by whims (odd, fanciful ideas); erratic, unpredictable",
  "gloss": "Marked or motivated by whims (odd, fanciful ideas)"
 },
 {
  "word": "whitewash",
  "definition": "A substance used to whiten walls, wood, etc. (noun); deception, covering up of wrongs, errors, misdeeds, etc. (verb)",
  "gloss": "A substance used to whiten walls, wood, etc"
 },
 {
  "word": "wily",
  "definition": "Crafty, cunning, characterized by tricks or artifice",
  "gloss": "Crafty, cunning, characterized by tricks or artifice"
 },
 {
  "word": "winnow",
  "definition": "Sift, analyze critically, separate the useful part from the worthless part",
  "gloss": "Sift"
 },
 {
  "word": "winsome",
  "definition": "Charming, engaging, esp. in a sweet and innocent way",
  "gloss": "Charming, engaging, esp. in a sweet and innocent way"
 },
 {
  "word": "wizened",
  "definition": "Withered, shriveled",
  "gloss": "Withered, shriveled"
 },
 {
  "word": "xenophobia",
  "definition": "Fear or hatred of foreigners or that which is foreign",
  "gloss": "Fear or hatred of foreigners or that which is foreign"
 },
 {
  "word": "yoke",
  "definition": "A burden or something that oppresses; a frame for attaching animals (such as oxen) to each other and to a plow or other equipment to be pulled, or a bar across a person's shoulders to help carry buckets of water, etc. (noun); to unite together or to burden (verb)",
  "gloss": "A burden or something that oppresses"
 },
 {
  "word": "zeal",
  "definition": "Great fervor or enthusiasm for a cause, person, etc.; tireless diligence in furthering that cause; passion, ardor",
  "gloss": "Great fervor or enthusiasm for a cause, person, etc"
 },
 {
  "word": "zenith",
  "definition": "High point, culmination",
  "gloss": "High point, culmination"
 }
];

if (typeof window !== "undefined") window.VOCAB_WORDS = VOCAB_WORDS;
