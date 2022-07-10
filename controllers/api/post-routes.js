const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// Create post
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    
    try {
        const newPost = await Post.create({ ...body, userId: req.session.userId });

        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const [changedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (changedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [changedRows] = Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (changedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
