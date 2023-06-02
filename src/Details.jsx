import React from 'react';


const UserDetails = ({ info }) => {
    console.log(info);
    return (
        <div>
            <h2>User Details</h2>
            <p>Username: {info?.userName}</p>
            <p>Email: {info?.email}</p>
            <p>Phone: {info?.phone}</p>
        </div>
    );
};

export default UserDetails;