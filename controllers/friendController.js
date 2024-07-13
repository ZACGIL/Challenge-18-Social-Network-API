const { User } = require('../models');

module.exports = {
    async getFriends(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user.friends);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleFriend(req, res) {
        try {
            const userFriend = await User.findOne({ _id: req.params.friendId });

            if (!userFriend) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(userFriend);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.body._id } },
                { new: true }
            );

            res.json(user.friends);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );

            res.json(user.friends);

        } catch (err) {
            res.status(500).json(err);
        }
    }
}


