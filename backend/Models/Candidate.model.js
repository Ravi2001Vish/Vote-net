import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
});

const CandidateModel = mongoose.model('Candidate', candidateSchema);

export default CandidateModel;
