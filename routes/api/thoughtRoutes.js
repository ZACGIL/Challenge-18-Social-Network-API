const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    getSingleUserThoughts,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts);

router.route('/:thoughtId').get(getSingleThought);

router.route('/user/:userId').get(getSingleUserThoughts).post(createThought);

router.route('/:userId/:thoughtId').put(updateThought).delete(deleteThought);

router.route('/react/:userId/:thoughtId').post(addReaction);

router.route('/react/:thoughtId/:reactId').delete(removeReaction);

module.exports = router;