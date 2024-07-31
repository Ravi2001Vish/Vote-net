import express from 'express';
import auth from '../Middleware/auth.middleware';
import { voteForCandidate } from '../Contorllers/vote.Controller';
// import { getCandidates } from '../Contorllers/candidate.Controller';

const router = express.Router();

router.post('/vote', auth, voteForCandidate);
// router.get('/candidates', getCandidates);

export default router;
