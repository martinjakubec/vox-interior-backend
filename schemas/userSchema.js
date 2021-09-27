const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  saves: [
    {
      eventsDoneId: [Schema.Types.ObjectId],
      currentEvent: [Schema.Types.ObjectId],
      commentsHeard: [Schema.Types.ObjectId],
      currentCharId: Schema.Types.ObjectId,
      ownedItems: [Schema.Types.ObjectId],
      statistics: {
        charactersKilled: Number,
        enemiesKilled: Number,
        timesWentInsane: Number
        // SOME OTHER THINGS TO PUT HERE
      }
    }
  ],
  settings: {
    // NO IDEA WHAT TO PUT HERE JUST YET
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User