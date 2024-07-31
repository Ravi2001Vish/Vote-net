import express from 'express';
import { addCandidate, getCandidateById,getCandidates } from '../Contorllers/candidate.Controller';


const router = express.Router();

router.post('/add-candidate', addCandidate);
router.get('/candidates', getCandidates);
router.get('/candidates/:candidate_id', getCandidateById);

export default router;
