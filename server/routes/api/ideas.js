const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Post
router.get('/', async (req, res) => {
    const posts = await loadIdeas();
    res.send(await posts.find({}).toArray());
})

// Add Post

// Delete Post

async function loadIdeas() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:uCVj0XFQwbJGuKRl@cluster0.6awr7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    , { useNewUrlParser: true});

    return client.db('idea_sharing').collection('ideas');
}

module.exports = router;
