// frontend/src/pages/DonationList.js
import React, { useEffect, useState } from 'react';
import API from '../utils/api';

function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const res = await API.get('/donations');
      setDonations(res.data.filter(d => d.isVerified));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Helped Donation Requests</h1>
      <ul>
        {donations.map(donation => (
          <li key={donation.id} className="mb-2 p-4 bg-white rounded shadow">
            <h2 className="text-xl">{donation.reason}</h2>
            <p>Amount Received: ${donation.amountReceived} / ${donation.amountNeeded}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonationList;
