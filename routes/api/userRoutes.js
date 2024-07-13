const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../controllers/userController');
const {
    getFriends,
    getSingleFriend,
    addFriend,
    removeFriend
} = require('../../controllers/friendController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// friends routes
router.route('/:userId/friends').get(getFriends).post(addFriend);
router.route('/:userId/friends/:friendId').get(getSingleFriend).delete(removeFriend);

module.exports = router;