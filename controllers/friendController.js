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
             const user = await User.findOne({ _id: req.params.userId });
             const friend = await User.findOne({ _id: req.params.friendId });
            
            if (!friend || !user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            let friendsArray = user.friends.map(el => el.toString());
            let friendString = friend._id.toString();

            for (let i = 0; i < user.friends; i++) {
                if(user.friends[i] === friendString){
                   return res.json(friend);
                }
            }
            console.log(friendsArray, friendString );

            res.status(404).json({ message: 'That user is not your friend' });

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

            res.json('Friend added!');

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

            res.json('Friend removed!');

        } catch (err) {
            res.status(500).json(err);
        }
    }
}


