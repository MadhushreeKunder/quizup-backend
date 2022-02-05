const mongoose = require('mongoose');
const { Schema } = mongoose;
const {quizOne, quizTwo} = require('./../data');
const { quizzesDB} = require('./../data');


const OptionSchema = new Schema({
  text: {
    type: String,
    required: "Option is Required"
  },
  isRight: {
    type: Boolean,
    required: "Right answer is required"
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

const HighScoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Auth',
      required: 'UserId required for high score'
  }, 
  score: {
    type: Number,
    required: 'Score is required for high score'
  }
})

const QuizSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  quizName: {
    type: String,
    required: "Quiz Name is Required",
    unique: "QuizName should be unique"
  },
  categoryId:{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: 'Category Id is required'
  }, 

  highScore: [HighScoreSchema],
  questions: [QuestionSchema]

}, {
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

const Quiz = mongoose.model('Quiz', QuizSchema);

const addQuizData = async () => {
  quizzesDB.forEach(async (quiz) => {
    const NewQuiz = new Quiz(quiz);
    const savedQuiz = await NewQuiz.save();
    console.log(savedQuiz);
  })
}

module.exports = { Quiz, addQuizData };
