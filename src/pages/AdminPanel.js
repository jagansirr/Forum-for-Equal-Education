// frontend/src/pages/AdminPanel.js
import React, { useEffect, useState } from 'react';
import API from '../utils/api';

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchDonations();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get('/users');
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchDonations = async () => {
    try {
      const res = await API.get('/donations');
      setDonations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyDonation = async (id) => {
    try {
      await API.put(`/donations/${id}/verify`);
      alert('Donation verified.');
      fetchDonations();
    } catch (err) {
      console.error(err);
      alert('Error verifying donation.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Admin Panel</h1>

      {/* Users Management */}
      <section className="mb-8">
        <h2 className="text-2xl mb-2">Users</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="text-center">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Donations Management */}
      <section>
        <h2 className="text-2xl mb-2">Donation Requests</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Reason</th>
              <th className="px-4 py-2">Amount Needed</th>
              <th className="px-4 py-2">Amount Received</th>
              <th className="px-4 py-2">Verified</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map(donation => (
              <tr key={donation.id} className="text-center">
                <td className="border px-4 py-2">{donation.id}</td>
                <td className="border px-4 py-2">{donation.reason}</td>
                <td className="border px-4 py-2">${donation.amountNeeded}</td>
                <td className="border px-4 py-2">${donation.amountReceived}</td>
                <td className="border px-4 py-2">{donation.isVerified ? 'Yes' : 'No'}</td>
                <td className="border px-4 py-2">
                  {!donation.isVerified && (
                    <button 
                      onClick={() => verifyDonation(donation.id)} 
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Verify
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminPanel;
