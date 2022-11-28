import BSON, { Binary } from 'bson';
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    label: String,
    address: String,
    description: String,
    primaryPhoto: String,
    secondaryPhoto: String,
    thirdPhoto: String,
    fourthPhoto: String,
    fifthPhoto: String,
    sixthPhoto: String,
    seventhPhoto: String,
    locationLongitude: String,
    locationLatitude:String,
    phoneNumber: String,
    website: String,
    instagramLink: String,
    discountCode: String,
    reviewLink: String,
    rating: Number,
    tags: [String],
    active: String,
    customURL: String
});

const postMessage = mongoose.model('Post Message', postSchema);

export default postMessage;