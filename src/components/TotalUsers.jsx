import { useEffect, useState } from "react";
import { getTotalUsers } from "../api";

const TotalUsers = () => {
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        getTotalUsers().then(data => setTotalUsers(data.count));
    }, []);

    return (
        <div className="card">
            <h2>👥 Usuarios en Base</h2>
            <p>{totalUsers}</p>
        </div>
    );
};

export default TotalUsers;
