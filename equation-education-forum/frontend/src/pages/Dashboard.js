import React, { useEffect, useState } from 'react';
import { fetchUsers, getDonations } from '../api'; // Import API functions

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        // Fetch users
        fetchUsers()
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error));

        // Fetch donations
        getDonations()
            .then((data) => setDonations(data))
            .catch((error) => console.error('Error fetching donations:', error));
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <h2>Donations</h2>
            <ul>
                {donations.map((donation) => (
                    <li key={donation.id}>
                        {donation.amount} from {donation.donor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
