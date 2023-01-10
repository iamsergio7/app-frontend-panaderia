import { useEffect, useState } from "react";
import axios from "axios";


export const GetUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        axios.get("https://app-backend-panaderia-production.up.railway.app/api/usuarios").then((response) => {
            setUsuarios(response.data.body);
        });
    }, []);
    return usuarios;
}

