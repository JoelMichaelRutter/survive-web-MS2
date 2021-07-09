let questions = [
    {
    numb: 1,
    situation: "BREAKING NEWS! There is an outbreak of a new deadly virus that kills the infected and reanimates the body. All major cities are in chaos and teeming with the undead. Law and order has gone out the window – looting and destruction is rife.",
    question: "How would you react!?",
    options: {
        forty: 'Listen to the news carefully and make a plan of action',
        thirty: 'Join in the looting and embrace the chaos',
        twenty: 'Panic and lock yourself in a cupboard – no one will find me here',
        ten: 'Get drunk as a skunk and hope for the best',
    }
  },
  {
    numb: 2,
    situation: "You know deep down that you need to leave, so you grab a bag and get ready to face your fears.",
    question: "What do you pack?",
    options: {
        forty: 'The essentials - water, food, first aid kit and a torch',
        thirty: 'Your pet',
        twenty: 'Nothing',
        ten: 'Your favourite clothes',
    }
  },
  {
    numb: 3,
    situation: "You narrowly escape. You came closer to the hoards of the undead than you were comfortable with but you’re safe - for now...",
    question: "Where are you heading?",
    options: {
        forty: 'The closest military base',
        thirty: 'The Isle of Wight',
        twenty: 'The countryside',
        ten: 'The coast',
    }
  },
  {
    numb: 4,
    situation: "You learn that the only way make the undead dead again is to destroy the brain.",
    question: "What would be your weapon of choice?",
    options: {
        forty: 'Cricket bat',
        thirty: 'Hunting rifle',
        twenty: 'Umbrella',
        ten: 'Garden strimmer',
    }
  },
  {
    numb: 5,
    situation: "You have run out of food.",
    question: "What is your preferred plan of action?",
    options: {
        forty: 'Scavenge for food',
        thirty: 'Lay traps',
        twenty: 'Cut off your arm and eat it',
        ten: 'Eat a zombie',
    }
  },
  {
    numb: 6,
    situation: "One of your group has a bite on their arm, no one else knows other than you.",
    question: "What do you do?",
    options: {
        forty: 'End them...',
        thirty: 'Banish them from your group',
        twenty: 'Call a group meeting',
        ten: 'Ignore it and hope it was a dog',
    }
  },
  {
    numb: 7,
    situation: "Your camp is attacked by bandits in the middle of the night, they are firing automatic weapons - attracting the undead.",
    question: "What is your course of action?",
    options: {
        forty: 'Get out and run',
        thirty: 'Fight back',
        twenty: 'Surrender',
        ten: 'Challenge them to a dance off',
    }
  },
  {
    numb: 8,
    situation: " You lose one of your group whilst looking for shelter for the night. You are losing light fast and your torch battery is dead.",
    question: "What do you do?",
    options: {
        forty: 'Take shelter for the night and go looking the following day',
        thirty: 'Leave them, they shouldn’t have got lost',
        twenty: 'Look for them',
        ten: 'Call their name whist looking for them',
    }
  },
  {
    numb: 9,
    situation: "You are trapped with another member of your group, the undead are closing in on all sides.",
    question: "What do you choose?",
    options: {
        forty: 'Use the other member of the group as a human shield',
        thirty: 'Fight your way out',
        twenty: 'Hope for a miracle',
        ten: 'Lie down and accept your fate',
    }
  },
  {
    numb: 10,
    situation: "You almost made it but you’ve been bitten by a zombie, your time is running out.",
    question: "What do you do?",
    options: {
        forty: 'Offer yourself as bait',
        thirty: 'End yourself so there is one less zombie to deal with',
        twenty: 'Tell the group and let them decide',
        ten: 'Turn and take the rest of the group with you',
    }
  },
  {
    numb: 11,
    situation: "",
    question: "",
    options: {
        forty: '',
        thirty: '',
        twenty: '',
        ten: '',
    }
  },
];

export {questions};

/* More questions can be added to the quiz by inserting additional objects into the array and icrementing the "numb" sequentially by one.
It is worth noting that if further questions should be added, a blank question (excluding the number value) should always be left at the end of the array.
The changeQuestionAndOptions function contains an if statement which checks the question number, you must change the value inside the argument of the if statement
to the "numb" value of the blank question at the end of the array so that quiz does not cut off early and miss questions but also to prevent the system returning
questions into the HTML that are undefined.

You can find the if statement in question in the script.js file, the if statement is on the 14th line of the changeQuestionsAndOptions function. Below is a template 
for adding new questions into the array.
{
    numb: ,
    situation: "",
    question: "",
    options: {
        forty: '',
        thirty: '',
        twenty: '',
        ten: '',
    }
  },
*/
