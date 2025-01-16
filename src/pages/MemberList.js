// frontend/src/pages/MemberList.js
import React, { useEffect, useState } from 'react';
import API from '../utils/api';

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await API.get('/users');
      setMembers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Members</h1>
      <ul>
        {members.map(member => (
          <li key={member.id} className="mb-2 p-4 bg-white rounded shadow">
            <h2 className="text-xl">{member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemberList;
