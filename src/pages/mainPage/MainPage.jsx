import React from 'react';
import AboutPage from "../aboutPage/AboutPage";

function MainPage({users, onDeleteUser}) {
    return (
        <>
            {users.length === 0 ?(
            <p>The table is empty</p>
            ):(
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website || "N/A"}</td>
                        <td>
                            <button type="button" onClick={()=> onDeleteUser(index)}>Delete</button>
                        </td>
                    </tr>
                )))}
                </tbody>
            </table>
            )}
        </>
    );
}

export default MainPage;