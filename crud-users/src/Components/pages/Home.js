import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users")
        setUsers(result.data.reverse())
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers()
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table table-dark table-striped border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {users.map((user, index) => (
                           <tr>
                               <th scope="row">{index+1}</th>
                               <td scope="row">{user.name}</td>
                               <td scope="row">{user.username}</td>
                               <td scope="row">{user.email}</td>
                               <td>
                                   <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                   <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                   <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                               </td>
                           </tr>
                       ))

                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;