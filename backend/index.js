const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Post } = require('./mongo');

//recieve all data
app.get('/posts', (req, res) => {
	Post.find({})
		.sort({ createdAt: -1 })
		.then((posts) => res.json(posts))
		.catch((err) => res.status(500).json({ error: err.message }));
});

//add new post
app.post('/posts', (req, res) => {
	console.log(req.body);
	const newPost = new Post(req.body);
	newPost.save().then((response) => res.json(response));
});

//update post
app.put('/posts/:id', async (req, res) => {
	try {
		const postId = req.params.id;
		const updateData = req.body;
		console.log(updateData);
		const updatedPost = await Post.findByIdAndUpdate(postId, updateData);
		if (!updatedPost) {
			return res.status(404).send('Post not found');
		}
		console.log('update successful');
		res.json(updatedPost);
	} catch (error) {
		console.log(error);
		res.status(500).send('Error updating post: ' + error.message);
	}
});

app.delete('/posts/:id', async (req, res) => {
	try {
		const postID = req.params.id;
		const response = await Post.findByIdAndDelete(postID);
		console.log('deleted: ' + postID);
		res.json(response);
	} catch (error) {
		console.log(error);
		res.status(500).send('Error updating post: ' + error.message);
	}
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
