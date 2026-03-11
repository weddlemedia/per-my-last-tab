const quotes = [
  {
    text: "Per my last email, which you clearly did not read.",
  },
  {
    text: "Let's circle back to this after we've had a chance to not think about it at all.",
  },
  {
    text: "We don't have the bandwidth, but we do have the audacity.",
  },
  {
    text: "This could have been an email. That email could have been silence.",
  },
  {
    text: "Synergy is just a word we use when no one knows whose job this is.",
  },
  {
    text: "Please unmute yourself. Actually, never mind. Stay muted. Forever.",
  },
  {
    text: "Let's take this offline and never speak of it again.",
  },
  {
    text: "I'm not micromanaging. I'm just macro-concerned with micro-details.",
  },
  {
    text: "We're not firing people. We're optimizing our human resource allocation.",
  },
  {
    text: "I don't have an opinion, but I do have several strong concerns.",
  },
  {
    text: "Let's put a pin in it. Then lose the pin. Then forget the 'it.'",
  },
  {
    text: "Moving forward, let's pretend this never happened.",
  },
  {
    text: "Great question. Let's table it until it becomes someone else's problem.",
  },
  {
    text: "I'll follow up on this, by which I mean I will absolutely not follow up on this.",
  },
  {
    text: "We need to be more proactive about being reactive.",
  },
  {
    text: "Let's leverage our core competencies to achieve a net-zero outcome.",
  },
  {
    text: "I think we're aligned. I have no idea what we're aligned on, but the vibes are right.",
  },
  {
    text: "Can everyone see my screen? No? Perfect. I'll describe it poorly.",
  },
  {
    text: "We're pivoting. Again. Think of it as corporate ballet.",
  },
  {
    text: "That's a great idea. We should definitely not do it.",
  },
  {
    text: "I'm looping in Karen. Karen will know what to do. Karen always knows.",
  },
  {
    text: "Our open-door policy is very much a closed-door situation.",
  },
  {
    text: "The deadline was yesterday, so technically we're already in the future.",
  },
  {
    text: "We don't have problems. We have 'opportunities for improvement' that are on fire.",
  },
  {
    text: "I appreciate your transparency. Please stop being transparent.",
  },
  {
    text: "This is a judgment-free zone. I am, however, taking notes.",
  },
  {
    text: "You're on mute. That's the most productive you've been all week.",
  },
  {
    text: "Let's think outside the box. Not that far outside. Get back in the box.",
  },
  {
    text: "Collaboration means doing other people's work while they're in meetings about collaboration.",
  },
  {
    text: "I don't want to point fingers, but I've prepared a slide deck of fingers.",
  },
  {
    text: "We're a family here. A deeply dysfunctional, meeting-addicted family.",
  },
  {
    text: "Happy Friday! See you at the mandatory fun event on Saturday.",
  },
  {
    text: "Let's workshop this. And by 'workshop,' I mean argue politely for two hours.",
  },
  {
    text: "Failure is not an option. It's a recurring calendar event.",
  },
  {
    text: "I'm just thinking out loud. Please do not hold me accountable for thinking.",
  },
  {
    text: "Our values are on the wall. Literally. That's where they live. Just on the wall.",
  },
  {
    text: "Thanks for your patience, which I have decided you are exhibiting whether you are or not.",
  },
  {
    text: "As per the agenda no one read, let's begin.",
  },
  {
    text: "I'll keep this brief. Narrator: He did not keep this brief.",
  },
  {
    text: "Work-life balance is very important to us. That's why we email you at 11 PM.",
  },
  {
    text: "We value your feedback. We will now place it gently in the void.",
  },
  {
    text: "This quarter's goal is to exceed last quarter's goal, which we also did not meet.",
  },
  {
    text: "I'm going to push back on this. Gently. Like a revolving door of dissent.",
  },
  {
    text: "Can we streamline this process? By 'streamline,' I mean add four more approvals.",
  },
  {
    text: "Let's be solution-oriented. Step one: admit the solution is coffee.",
  },
  {
    text: "The org chart is more of an org suggestion.",
  },
  {
    text: "I have another hard stop in five minutes. All my stops are hard. My life is hard stops.",
  },
  {
    text: "We need to do more with less. And by less, I mean significantly less. Like, nothing.",
  },
  {
    text: "That's above my pay grade. Everything is above my pay grade.",
  },
  {
    text: "Let's not reinvent the wheel. Let's just have a meeting about the wheel.",
  },
  {
    text: "Your email found me well. It did not. But here we are.",
  },
  {
    text: "We should sync up. And by sync, I mean stare at each other on Zoom.",
  },
  {
    text: "There's no 'I' in team, but there are four in 'platitude-driven initiatives.'",
  },
  {
    text: "I'll take that as an action item. It will live in my notes, undisturbed, forever.",
  },
  {
    text: "To be frank, I'd rather be anyone other than Frank right now.",
  },
  {
    text: "We should align on the deliverables. Which is corporate for 'who's actually doing this?'",
  },
  {
    text: "New policy: all ideas must be submitted via a form no one can find.",
  },
  {
    text: "The printer is jammed. Much like my career.",
  },
  {
    text: "Let's double-click on that. Not literally. We've been over this, Steve.",
  },
  {
    text: "I'm cautiously optimistic. Heavy on the cautious. Light on the optimistic.",
  },
  {
    text: "You're the reason the 'Are you sure?' button exists.",
  },
  {
    text: "If confidence were skill, you'd be unstoppable.",
  },
  {
    text: "You bring a very unique energy to bad ideas.",
  },
  {
    text: "You're not lost — you're aggressively exploring the wrong direction.",
  },
  {
    text: "You make chaos look like a strategic plan.",
  },
  {
    text: "You're the human equivalent of clicking 'remind me later.'",
  },
  {
    text: "You approach problems the way a cat approaches keyboards.",
  },
  {
    text: "You're the reason meetings could have been emails.",
  },
  {
    text: "You make 'winging it' look like a full-time job.",
  },
  {
    text: "You're like a GPS that confidently leads into a lake.",
  },
  {
    text: "You're proof that enthusiasm and accuracy are unrelated.",
  },
  {
    text: "I'd love to help, but I'm at capacity. My capacity is zero.",
  },
  {
    text: "Let me check my calendar. Oh look, it's full of regret.",
  },
  {
    text: "The WiFi is down. Productivity has never been higher.",
  },
  {
    text: "I survived another meeting that should have been a Slack message.",
  },
  {
    text: "My out-of-office reply is my personality now.",
  },
  {
    text: "Please refer to the documentation. There is no documentation.",
  },
  {
    text: "The sprint is over. We are still running.",
  },
  {
    text: "I've been 'looped in' so many times I'm basically a knot.",
  },
  {
    text: "The stakeholders have spoken. Nobody understood them.",
  },
  {
    text: "We're agile. We pivot so fast we're basically spinning.",
  },
  {
    text: "Just following up on my follow-up to my follow-up.",
  },
  {
    text: "I put the 'pro' in procrastination and the 'con' in conference call.",
  },
  {
    text: "Our roadmap is more of a road suggestion.",
  },
  {
    text: "The team-building exercise built nothing but resentment.",
  },
  {
    text: "I'm not arguing. I'm passionately presenting alternative facts.",
  },
  {
    text: "We need to have a meeting to discuss why we have so many meetings.",
  },
  {
    text: "The only thing we ship on time is the blame.",
  },
  {
    text: "I've CC'd everyone because misery loves company.",
  },
  {
    text: "My job title changes quarterly. My job doesn't.",
  },
  {
    text: "We're disrupting the industry. The industry hasn't noticed.",
  },
  {
    text: "The budget was cut. The expectations were not.",
  },
  {
    text: "I have a degree for this. It has not helped.",
  },
  {
    text: "The all-hands meeting was neither all nor hands.",
  },
  {
    text: "Our culture deck is a work of fiction.",
  },
  {
    text: "I didn't choose the spreadsheet life. The spreadsheet life chose me.",
  },
  {
    text: "We're data-driven. The data says we should stop.",
  },
  {
    text: "Please do the needful. No one knows what the needful is.",
  },
  {
    text: "The Q4 forecast is optimistic. The Q4 reality is not.",
  },
  {
    text: "I've been voluntold for this project.",
  },
  {
    text: "My inbox is a graveyard of good intentions.",
  },
  {
    text: "We're leaning in. We've been leaning so long we're horizontal.",
  },
  {
    text: "The open floor plan was designed by someone who hates concentration.",
  },
  {
    text: "I'm on a call. I'm always on a call. The call never ends.",
  },
  {
    text: "Our mission statement has more buzzwords than meaning.",
  },
  {
    text: "The reorg will fix everything. Just like the last four reorgs.",
  },
  {
    text: "I peaked at 'employee of the month' in 2019. It's been downhill since.",
  },
  {
    text: "The Slack channel has 47 unread messages. None of them matter.",
  },
  {
    text: "We're building the plane while flying it. The passengers are screaming.",
  },
  {
    text: "Casual Friday is the only thing keeping morale above zero.",
  },
  {
    text: "The company retreat was neither a retreat nor relaxing.",
  },
  {
    text: "My laptop has more meetings than I do.",
  },
  {
    text: "We've replaced strategy with vibes. The vibes are concerning.",
  },
  {
    text: "The intern asked a question no VP could answer. We promoted the intern. Just kidding. We ignored the question.",
  },
  {
    text: "Our competitive advantage is that we're too confused to quit.",
  },
  {
    text: "I've been 'empowered' to do more work for the same pay.",
  },
  {
    text: "The town hall raised more questions than it answered. As is tradition.",
  },
  {
    text: "We don't have silos. We have 'centers of excellence' that don't talk to each other.",
  },
  {
    text: "The only KPI I'm hitting is caffeine consumption.",
  },
  {
    text: "I was told there would be growth opportunities. They meant the workload.",
  },
  {
    text: "The CEO's LinkedIn post got more engagement than our product launch.",
  },
  {
    text: "We're customer-obsessed. The customers are unaware.",
  },
  {
    text: "My five-year plan is to survive the next five meetings.",
  },
  {
    text: "The suggestion box has been replaced by a recycling bin. Same energy.",
  },
  {
    text: "I'm not quiet quitting. I'm loud staying.",
  },
  {
    text: "Our 'quick sync' is now in its second hour.",
  },
  {
    text: "The only thing transparent around here is the glass conference room.",
  },
  {
    text: "We've achieved inbox zero. By deleting everything unread.",
  },
  {
    text: "The performance review reviewed nothing and improved less.",
  },
  {
    text: "I was today years old when I realized 'ASAP' means 'whenever.'",
  },
  {
    text: "The free snacks are the most honest part of our compensation package.",
  },
  {
    text: "We put the 'fun' in 'no funding.'",
  },
];
