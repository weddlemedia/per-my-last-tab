const quotes = [
  {
    text: "If confidence were skill, you'd be unstoppable.",
  },
  {
    text: "I admire how wrong you are with such enthusiasm.",
  },
  {
    text: "You're not a problem solver… you're a problem explorer.",
  },
  {
    text: "You make simple things… impressively complicated.",
  },
  {
    text: "You're living proof that trial and error mostly involves error.",
  },
  {
    text: "You didn't think that through, but you did say it confidently.",
  },
  {
    text: "You bring a very unique energy to bad ideas.",
  },
  {
    text: "You're like a beta test for common sense.",
  },
  {
    text: "You've mastered the art of being confidently mistaken.",
  },
  {
    text: "You're not lost — you're aggressively exploring the wrong direction.",
  },
  {
    text: "If effort counted more than results, you'd be legendary.",
  },
  {
    text: "You make chaos look like a strategic plan.",
  },
  {
    text: "Your ideas are… memorable. For all the wrong reasons.",
  },
  {
    text: "You're the human equivalent of clicking 'remind me later.'",
  },
  {
    text: "You're not making mistakes — you're building a collection.",
  },
  {
    text: "You approach problems the way a cat approaches keyboards.",
  },
  {
    text: "You've turned guessing into a lifestyle.",
  },
  {
    text: "You're the reason meetings could have been emails.",
  },
  {
    text: "You make 'winging it' look like a full-time job.",
  },
  {
    text: "You have a rare talent for missing the point.",
  },
  {
    text: "You're not inefficient — you're creatively unproductive.",
  },
  {
    text: "You're the reason warning labels exist.",
  },
  {
    text: "You've really committed to that bad decision.",
  },
  {
    text: "You make confusion look effortless.",
  },
  {
    text: "You've achieved new levels of 'close enough.'",
  },
  {
    text: "You're like a GPS that confidently leads into a lake.",
  },
  {
    text: "You didn't fail — you just explored every wrong option first.",
  },
  {
    text: "You're the motivational poster for what not to do.",
  },
  {
    text: "You're proof that enthusiasm and accuracy are unrelated.",
  },
  {
    text: "You're not making mistakes. You're making content.",
  },
  {
    text: "You've turned guessing into a professional skill.",
  },
  {
    text: "I appreciate the confidence. The reasoning… less so.",
  },
  {
    text: "You're not confused — you're creatively misunderstanding.",
  },
  {
    text: "You make 'close enough' look like a strategy.",
  },
  {
    text: "You're the reason the undo button works overtime.",
  },
  {
    text: "You didn't miss the point — you launched past it.",
  },
  {
    text: "You're boldly going where logic refuses to follow.",
  },
  {
    text: "You've managed to complicate something impressively simple.",
  },
  {
    text: "You're like a progress bar that never quite finishes.",
  },
  {
    text: "You've brought a refreshing lack of accuracy to the situation.",
  },
  {
    text: "You're not wrong often, but when you are… it's spectacular.",
  },
  {
    text: "You're the human version of 'skip tutorial.'",
  },
  {
    text: "You have a real gift for almost getting it.",
  },
  {
    text: "You're not lost — you're aggressively improvising.",
  },
  {
    text: "You're operating on pure vibes at this point.",
  },
  {
    text: "You're the reason step two has to be explained twice.",
  },
  {
    text: "You're doing your best, which is… statistically interesting.",
  },
  {
    text: "You've found a way to miss the obvious with style.",
  },
  {
    text: "You make chaos look intentional.",
  },
  {
    text: "You're not inefficient — you're exploring alternatives nobody asked for.",
  },
  {
    text: "You've reached a new level of 'technically trying.'",
  },
  {
    text: "You approach plans the way toddlers approach walls.",
  },
  {
    text: "You're proof that determination doesn't require direction.",
  },
  {
    text: "You've got big 'figure it out later' energy.",
  },
  {
    text: "You're running on pure confidence and zero diagnostics.",
  },
  {
    text: "You're like a shortcut that takes longer.",
  },
  {
    text: "You didn't break it — you just introduced… complications.",
  },
  {
    text: "You're not improvising — you're inventing new problems.",
  },
  {
    text: "You've really leaned into the wrong answer.",
  },
  {
    text: "You're the reason common sense occasionally calls in sick.",
  },
  {
    text: "You're giving 100%… of something.",
  },
  {
    text: "You've got a talent for solving the wrong problem.",
  },
  {
    text: "You're moving fast and misunderstanding things.",
  },
  {
    text: "You're like a search result from page 12.",
  },
  {
    text: "You're doing exactly what nobody suggested.",
  },
  {
    text: "You've turned overthinking into an extreme sport.",
  },
  {
    text: "You're not behind — you're creatively off schedule.",
  },
  {
    text: "You're not confused. You're exploring alternative realities.",
  },
  {
    text: "You're the reason the 'try again' button exists.",
  },
  {
    text: "Go ahead. Prove everyone right.",
  },
  {
    text: "Today's a great day to disappoint fewer people.",
  },
  {
    text: "Dream big. Fail publicly.",
  },
  {
    text: "You've got this. Probably not, but go ahead.",
  },
  {
    text: "Believe in yourself. Nobody else does.",
  },
  {
    text: "If you can't succeed, at least fail memorably.",
  },
  {
    text: "The only thing standing between you and success is… you.",
  },
  {
    text: "Try your best. We're all curious how that'll go.",
  },
  {
    text: "Great things never come from comfort zones. Neither do your ideas.",
  },
  {
    text: "Today's goal: lower expectations gently.",
  },
  {
    text: "You can do anything… just not well.",
  },
  {
    text: "Push yourself. Nobody else is pushing you.",
  },
  {
    text: "Don't give up. It's entertaining.",
  },
  {
    text: "Aim for the stars. Missing them is kind of your thing.",
  },
  {
    text: "The journey of a thousand miles begins with you messing up step one.",
  },
  {
    text: "Failure builds character. You must be full of it by now.",
  },
  {
    text: "Be the best version of yourself. We're all waiting.",
  },
  {
    text: "Your potential is… technically still potential.",
  },
  {
    text: "Chase your dreams. They're running for a reason.",
  },
  {
    text: "You're closer to success than yesterday. Still far, but closer.",
  },
  {
    text: "Work hard in silence. Mostly so nobody sees the mistakes.",
  },
  {
    text: "Every expert was once a beginner. Some stayed there longer.",
  },
  {
    text: "You miss 100% of the chances you misunderstand.",
  },
  {
    text: "Don't stop until you're proud. So… maybe keep going.",
  },
  {
    text: "Success is a journey. You're currently sightseeing.",
  },
  {
    text: "You're capable of great things. Statistically speaking.",
  },
  {
    text: "Your breakthrough is coming. Eventually. Probably.",
  },
  {
    text: "Small steps lead to big results. Try taking one.",
  },
  {
    text: "If at first you don't succeed, you're right on schedule.",
  },
  {
    text: "Hard work beats talent. Luckily talent isn't the issue.",
  },
  {
    text: "Stay focused. Disappointment takes effort.",
  },
  {
    text: "Be fearless. You've ignored good advice before.",
  },
  {
    text: "One day or day one. Either way you'll complain.",
  },
  {
    text: "Rise and grind. Or just rise. Baby steps.",
  },
  {
    text: "Progress is progress. Even yours.",
  },
  {
    text: "Greatness takes time. In your case… a lot of time.",
  },
  {
    text: "Start where you are. That explains a lot.",
  },
  {
    text: "Your future self is watching. Probably concerned.",
  },
  {
    text: "Motivation gets you started. Confusion keeps you going.",
  },
  {
    text: "You're doing amazing. Statistically someone has to.",
  },
];
