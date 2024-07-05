const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, 
            //validate
            //match
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    }
);

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;