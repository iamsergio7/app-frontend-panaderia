import { useEffect, useState } from "react";
import axios from "axios";


export const GetDatos = () => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        axios.get("https://app-backend-panaderia-production.up.railway.app/api/empleadomaquinas").then((response) => {
            setDatos(response.data.body);
        });
    }, []);
    return datos;
}

