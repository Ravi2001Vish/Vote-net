import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Candidateslist = () => {
  const [candidates, setCandidates] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:2000/candidates');
        console.log('API response:', response.data);
        if (response.data.data && Array.isArray(response.data.data)) {
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

  return (
    <div className="container">
      <h1>Candidates List</h1>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      {message && <p className="message">{message}</p>}
      <ul>
        {Array.isArray(candidates) && candidates.map(candidate => (
          <li key={candidate._id}>
            <span>{candidate.name} = {candidate.votes} votes Counts</span>
          </li>
        ))}
      </ul>
      </div>
   
    </div>
  );
};

export default Candidateslist;
