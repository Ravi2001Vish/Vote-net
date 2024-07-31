import CandidateModel from "../Models/Candidate.model";

// Add a new candidate
export const addCandidate = async (req, res) => {
    try {
        const { name } = req.body;

        const newCandidate = new CandidateModel({ name });
        const savedCandidate = await newCandidate.save();

        return res.status(201).json({
            data: savedCandidate,
            message: "Candidate added successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

// Get all candidates
export const getCandidates = async (req, res) => {
    try {
        const candidates = await CandidateModel.find();
        return res.status(200).json({
            data: candidates,
            message: "All candidates fetched"
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

// Get a specific candidate by ID
export const getCandidateById = async (req, res) => {
    try {
        const candidateId = req.params.candidate_id;
        const candidate = await CandidateModel.findById(candidateId);
        if (candidate) {
            return res.status(200).json({
                data: candidate,
                message: "Candidate fetched successfully"
            });
        } else {
            return res.status(404).json({
                message: "Candidate not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
