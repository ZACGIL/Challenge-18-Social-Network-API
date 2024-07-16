const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    editUser,
    deleteUser
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
router.route('/:userId').get(getSingleUser).put(editUser).delete(deleteUser);

// friends routes
router.route('/:userId/friends').get(getFriends).post(addFriend);
router.route('/:userId/friends/:friendId').get(getSingleFriend).delete(removeFriend);

module.exports = router;
