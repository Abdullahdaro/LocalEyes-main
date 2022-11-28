import mongoose from 'mongoose';

const hostSchema = mongoose.Schema({
    contactName: String,
    businessName: String,
    email: String,
    mailingAddress: String,
    stage: String,
    update: String
});

const hostMessage = mongoose.model('Host Message', hostSchema);

export default hostMessage;