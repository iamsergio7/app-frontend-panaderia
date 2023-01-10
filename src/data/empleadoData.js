import { useEffect, useState } from "react";
import axios from "axios";


export const GetEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);
    useEffect(() => {
        axios.get("https://app-backend-panaderia-production.up.railway.app/api/empleados").then((response) => { 
        setEmpleados(response.data.body);
        });
    }, []);
    return empleados;
}