const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: { type: Schema.Types.ObjectId },
        reactionBody: { type: String, required: true, maxLength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }
);

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, maxLength: 280 },
        createdAt: { type: Date, default: Date.now },
        username: { type: String, required: true },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    }
    );

const Thought = model('thought', thoughtSchema);

module.exports = Thought;