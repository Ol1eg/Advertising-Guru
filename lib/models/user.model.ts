import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    direction: { type: String, required: true },
    image: String,
    bio: String,
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }
    ],
    onboarded: {
        type: Boolean,
        default: false
    },
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User