// frontend/src/components/DonationCard.js
import React from 'react';

function DonationCard({ donation }) {
  const { photo, reason, amountNeeded, amountReceived } = donation;
  const percentage = (amountReceived / amountNeeded) * 100;

  let progressColor = 'bg-red-500';
  if (percentage > 70) progressColor = 'bg-green-500';
  else if (percentage > 30) progressColor = 'bg-yellow-500';

  return (
    <div className="bg-white shadow rounded p-4">
      <img src={`http://localhost/backend/uploads/${donation.photo}`} alt="Donation" className="w-full h-40 object-cover mb-4 rounded" />
      <p className="mb-2">{reason}</p>
      <div className="mb-2">
        <span>Needed: ${amountNeeded}</span> | <span>Received: ${amountReceived}</span>
      </div>
      <div className="w-full bg-gray-200 h-4 rounded">
        <div className={`${progressColor} h-4 rounded`} style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{percentage.toFixed(2)}% funded</p>
    </div>
  );
}

export default DonationCard;
