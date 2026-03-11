const quotes = [
  {
    text: "Per my last email, which you clearly did not read.",
    attribution: "Director of Circular Conversations"
  },
  {
    text: "Let's circle back to this after we've had a chance to not think about it at all.",
    attribution: "Vice President of Strategic Postponement"
  },
  {
    text: "We don't have the bandwidth, but we do have the audacity.",
    attribution: "Chief Capacity Illusionist"
  },
  {
    text: "This could have been an email. That email could have been silence.",
    attribution: "Senior Analyst of Meeting Futility"
  },
  {
    text: "Synergy is just a word we use when no one knows whose job this is.",
    attribution: "Head of Collaborative Ambiguity"
  },
  {
    text: "Please unmute yourself. Actually, never mind. Stay muted. Forever.",
    attribution: "Director of Audio Governance"
  },
  {
    text: "Let's take this offline and never speak of it again.",
    attribution: "Senior Vice President of Avoidance"
  },
  {
    text: "I'm not micromanaging. I'm just macro-concerned with micro-details.",
    attribution: "Chief Oversight Enthusiast"
  },
  {
    text: "We're not firing people. We're optimizing our human resource allocation.",
    attribution: "VP of Compassionate Restructuring"
  },
  {
    text: "I don't have an opinion, but I do have several strong concerns.",
    attribution: "Director of Passive Escalation"
  },
  {
    text: "Let's put a pin in it. Then lose the pin. Then forget the 'it.'",
    attribution: "Manager of Deferred Accountability"
  },
  {
    text: "Moving forward, let's pretend this never happened.",
    attribution: "Head of Selective Memory"
  },
  {
    text: "Great question. Let's table it until it becomes someone else's problem.",
    attribution: "Senior Director of Strategic Delegation"
  },
  {
    text: "I'll follow up on this, by which I mean I will absolutely not follow up on this.",
    attribution: "Coordinator of Empty Promises"
  },
  {
    text: "We need to be more proactive about being reactive.",
    attribution: "Chief Paradox Officer"
  },
  {
    text: "Let's leverage our core competencies to achieve a net-zero outcome.",
    attribution: "VP of Impressive-Sounding Nothingness"
  },
  {
    text: "I think we're aligned. I have no idea what we're aligned on, but the vibes are right.",
    attribution: "Director of Vague Agreement"
  },
  {
    text: "Can everyone see my screen? No? Perfect. I'll describe it poorly.",
    attribution: "Head of Presentation Mishaps"
  },
  {
    text: "We're pivoting. Again. Think of it as corporate ballet.",
    attribution: "Chief Choreographer of Strategy"
  },
  {
    text: "That's a great idea. We should definitely not do it.",
    attribution: "Senior Vice President of Polite Rejection"
  },
  {
    text: "I'm looping in Karen. Karen will know what to do. Karen always knows.",
    attribution: "Specialist in Strategic Karen Deployment"
  },
  {
    text: "Our open-door policy is very much a closed-door situation.",
    attribution: "Director of Accessible Inaccessibility"
  },
  {
    text: "The deadline was yesterday, so technically we're already in the future.",
    attribution: "VP of Temporal Reframing"
  },
  {
    text: "We don't have problems. We have 'opportunities for improvement' that are on fire.",
    attribution: "Chief Optimism Enforcer"
  },
  {
    text: "I appreciate your transparency. Please stop being transparent.",
    attribution: "Head of Comfortable Delusion"
  },
  {
    text: "This is a judgment-free zone. I am, however, taking notes.",
    attribution: "Director of Documented Non-Judgment"
  },
  {
    text: "You're on mute. That's the most productive you've been all week.",
    attribution: "Senior Manager of Unfiltered Observation"
  },
  {
    text: "Let's think outside the box. Not that far outside. Get back in the box.",
    attribution: "VP of Controlled Innovation"
  },
  {
    text: "Collaboration means doing other people's work while they're in meetings about collaboration.",
    attribution: "Director of Ironic Teamwork"
  },
  {
    text: "I don't want to point fingers, but I've prepared a slide deck of fingers.",
    attribution: "Head of Diplomatic Blame"
  },
  {
    text: "We're a family here. A deeply dysfunctional, meeting-addicted family.",
    attribution: "Chief Culture Embellisher"
  },
  {
    text: "Happy Friday! See you at the mandatory fun event on Saturday.",
    attribution: "VP of Involuntary Joy"
  },
  {
    text: "Let's workshop this. And by 'workshop,' I mean argue politely for two hours.",
    attribution: "Director of Structured Disagreement"
  },
  {
    text: "Failure is not an option. It's a recurring calendar event.",
    attribution: "Senior Strategist of Lowered Expectations"
  },
  {
    text: "I'm just thinking out loud. Please do not hold me accountable for thinking.",
    attribution: "Manager of Verbal Disclaimers"
  },
  {
    text: "Our values are on the wall. Literally. That's where they live. Just on the wall.",
    attribution: "Head of Decorative Ethics"
  },
  {
    text: "Thanks for your patience, which I have decided you are exhibiting whether you are or not.",
    attribution: "Director of Unilateral Gratitude"
  },
  {
    text: "As per the agenda no one read, let's begin.",
    attribution: "Chief Facilitator of Futile Preparation"
  },
  {
    text: "I'll keep this brief. Narrator: He did not keep this brief.",
    attribution: "VP of False Brevity"
  },
  {
    text: "Work-life balance is very important to us. That's why we email you at 11 PM.",
    attribution: "Director of Aspirational Boundaries"
  },
  {
    text: "We value your feedback. We will now place it gently in the void.",
    attribution: "Head of Feedback Absorption"
  },
  {
    text: "This quarter's goal is to exceed last quarter's goal, which we also did not meet.",
    attribution: "Senior Analyst of Aspirational Math"
  },
  {
    text: "I'm going to push back on this. Gently. Like a revolving door of dissent.",
    attribution: "Chief of Soft Resistance"
  },
  {
    text: "Can we streamline this process? By 'streamline,' I mean add four more approvals.",
    attribution: "VP of Efficient Bureaucracy"
  },
  {
    text: "Let's be solution-oriented. Step one: admit the solution is coffee.",
    attribution: "Director of Caffeinated Strategy"
  },
  {
    text: "The org chart is more of an org suggestion.",
    attribution: "Head of Structural Ambiguity"
  },
  {
    text: "I have another hard stop in five minutes. All my stops are hard. My life is hard stops.",
    attribution: "Senior Director of Calendar Tetris"
  },
  {
    text: "We need to do more with less. And by less, I mean significantly less. Like, nothing.",
    attribution: "VP of Resourceful Deprivation"
  },
  {
    text: "That's above my pay grade. Everything is above my pay grade.",
    attribution: "Coordinator of Underpaid Awareness"
  },
  {
    text: "Let's not reinvent the wheel. Let's just have a meeting about the wheel.",
    attribution: "Director of Redundant Innovation"
  },
  {
    text: "Your email found me well. It did not. But here we are.",
    attribution: "Manager of Compulsory Pleasantries"
  },
  {
    text: "We should sync up. And by sync, I mean stare at each other on Zoom.",
    attribution: "Head of Digital Eye Contact"
  },
  {
    text: "There's no 'I' in team, but there are four in 'platitude-driven initiatives.'",
    attribution: "Chief Morale Arithmetician"
  },
  {
    text: "I'll take that as an action item. It will live in my notes, undisturbed, forever.",
    attribution: "Senior Custodian of Inaction"
  },
  {
    text: "To be frank, I'd rather be anyone other than Frank right now.",
    attribution: "VP of Existential Candor"
  },
  {
    text: "We should align on the deliverables. Which is corporate for 'who's actually doing this?'",
    attribution: "Director of Translating Jargon into Despair"
  },
  {
    text: "New policy: all ideas must be submitted via a form no one can find.",
    attribution: "Head of Bureaucratic Innovation"
  },
  {
    text: "The printer is jammed. Much like my career.",
    attribution: "Technician of Metaphorical Hardware"
  },
  {
    text: "Let's double-click on that. Not literally. We've been over this, Steve.",
    attribution: "Manager of Figurative Language Compliance"
  },
  {
    text: "I'm cautiously optimistic. Heavy on the cautious. Light on the optimistic.",
    attribution: "Director of Measured Disappointment"
  }
];
