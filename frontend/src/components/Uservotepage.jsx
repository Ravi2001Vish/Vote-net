import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VotePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:2000/candidates');
        if (Array.isArray(response.data.data)) {
          setCandidates(response.data.data);
        } else {
          console.error('Unexpected response data format:', response.data);
        }
      } catch (error) {
        setMessage('Error fetching candidates');
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  const voteForCandidate = async () => {
    if (!selectedCandidate) {
      setMessage('Please select a candidate to vote for');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:2000/vote', { candidateId: selectedCandidate }, {
        headers: { Authorization: token }
      });
      setMessage(response.data.message);

      setCandidates(prevCandidates =>
        prevCandidates.map(candidate =>
          candidate._id === selectedCandidate
            ? { ...candidate, votes: candidate.votes + 1 }
            : candidate
        )
      );
    } catch (error) {
      setMessage(error.response?.data.message || 'Error voting for candidate');
    }
  };

  return (
    <div className="container">
      <h1>Vote for Your Candidate</h1>
      {message && <p className="message">{message}</p>}
      <ul>
        {candidates.map(candidate => (
          <li key={candidate._id}>
            <label>
              <input
                type="radio"
                name="candidate"
                value={candidate._id}
                onChange={() => setSelectedCandidate(candidate._id)}
                checked={selectedCandidate === candidate._id}
              />
              {candidate.name}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={voteForCandidate}>Vote</button>
    </div>
  );
};

export default VotePage;
