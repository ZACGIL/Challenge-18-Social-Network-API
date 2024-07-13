const router = require('express').Router();
const {
    getThoughts,
    getSingleUserThoughts,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController')
module.exports = router;

router.route('/').get(getThoughts);

router.route('/:userId').get(getSingleUserThoughts).post(createThought);

router.route('/:userId/:thoughtId').put(updateThought).delete(deleteThought);
