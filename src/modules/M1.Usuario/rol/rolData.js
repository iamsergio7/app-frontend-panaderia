import { useEffect, useState } from "react";
import axios from "axios";


export const GetRoles = () => {
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        axios.get("https://app-backend-panaderia-production.up.railway.app/api/roles").then((response) => { 
            setRoles(response.data.body);
        });
    }, []);
    return roles;
}

