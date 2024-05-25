require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;
mongoose.set('strict', true);

mongoose
	.connect(url)
	.then(() => console.log('Database Connected ✅'))
	.catch((err) => console.log(`Failed to connect to database ⛔ ${err}`));

const postSchema = new mongoose.Schema({
	'id': String,
	'content': String,
	'createdAt': String,
	'votes': [],
	'poster': {
		'profile': String,
		'username': String,
	},
	replies: [],
	ReplyInputShown: Boolean,
});

const Post = mongoose.model('Post', postSchema);
module.exports = { Post };
