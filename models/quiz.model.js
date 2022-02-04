const mongoose = require('mongoose');
const { Schema } = mongoose;

const OptionSchema = new Schema({
  text: {
    type: String,
    required: "Option is Required"
  },
  isRight: {
    type: Boolean,
    required: "Right answer is requires"
  },
});


const QuestionSchema = new Schema({
  question: {
    type: String,
    required: 'Question is Required'
  },
  points: {
    type: Number,
    required: 'Points are required for a Question'
  },
  negativePoints: {
    type: Number,
    default: 0
  },
  options: [OptionSchema]
});

const QuizSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  quizName: {
    type: String,
    required: "Quiz Name is Required",
    unique: "QuizName should be unique"
  },
  _id: String,
  questions: [QuestionSchema]

}, {
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

const Quiz = mongoose.model('Quiz', QuizSchema);

const addQuizData = async () => {
  quizdb.forEach(async (quiz) => {
    const NewQuiz = new Quiz(quiz);
    const savedQuiz = await NewQuiz.save();
    console.log(savedQuiz);
  })
}

module.exports = { Quiz, addQuizData };
