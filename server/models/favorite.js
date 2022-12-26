/* import mongoose from 'mongoose'


const favoriteSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: 'Post Message',
    },
})

const favorite = mongoose.model("Favorite", favoriteSchema)

export default favorite ;
 */