import { useEffect, useState } from "react";
import axios from "axios";


export const GetCargos = () => {
    const [cargos, setCargos] = useState([]);
    useEffect(() => {
        axios.get("https://app-backend-panaderia-production.up.railway.app/api/cargos").then((response) => { 
            setCargos(response.data.body);
        });
    }, []);
    return cargos;
}