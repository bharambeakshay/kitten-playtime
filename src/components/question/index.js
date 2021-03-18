const qBank = [
  {
    question: "THREE kittens are playing and THREE more joins",
    answers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    correct: "6",
    questionId: "099099",
    playingKitttens: 3,
    wakingKitten: 3
  },
  {
    question: "THREE kittens are playing and SIX more joins",
    answers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    correct: "9",
    questionId: "093909",
    playingKitttens: 3,
    wakingKitten: 3
  },
  {
    question: "THREE kittens are playing and ONE more joins",
    answers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    correct: "4",
    questionId: "009039",
    playingKitttens: 3,
    wakingKitten: 3
  },
  {
    question: "THREE kittens are playing and FIVE more joins",
    answers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    correct: "8",
    questionId: "090089",
    playingKitttens: 3,
    wakingKitten: 3
  },
  {
    question: "THREE kittens are playing and TWO more joins",
    answers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    correct: "5",
    questionId: "01010101",
    playingKitttens: 3,
    wakingKitten: 3
  },
  {
    question: "THREE kittens is playing and FOUR more joins",
    answers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    correct: "7",
    questionId: "092299",
    playingKitttens: 3,
    wakingKitten: 3
  },
];

const qBankDetails = (n = 1) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
export default qBankDetails;
