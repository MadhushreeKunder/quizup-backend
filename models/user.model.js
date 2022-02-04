const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  _id: { type: Schema.Types.ObjectId, ref: 'Auth' },
  solvedQuizzes: [{
    quizId: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz',
      required: "Quiz Id is required"
    },
    score: {
      type: Number,
      default: 0,
      required: "Score of a quiz is required"
    }
  }],
  totalScore: { type: Number, default: 0 },
}, {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
  });

const User = mongoose.model('User', UserSchema);

module.exports = { User };