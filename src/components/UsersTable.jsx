import { useEffect, useState } from "react";
import { getTotalUsers } from "../api";

const UsersTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getTotalUsers().then(data => setUsers(data.users));
    }, []);

    return (
        <div className="card table-container">
            <h2>📋 Tabla de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><a href={`http://localhost:3000${user.detail}`} target="_blank">Ver</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
