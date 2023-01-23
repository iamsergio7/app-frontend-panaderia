import {API_URL} from "../../../tools/API";
import {ajax} from "../../../tools/ajax";


const URL = API_URL;


export const getDatos = async () => {
    const optionsRequest = {
        method: "GET",
        url: `${URL}/empleados`,
    };
    
    const response = await ajax(optionsRequest);
    return response.body;
}

export const getDato = async (id) => {
    const optionsRequest = {
        method: "GET",
        url: `${URL}/empleados/${id}`,
    };
    
    const response = await ajax(optionsRequest);
    return response.body;
}

export const createDato = async (empleado) => {
    const optionsRequest = {
        method: "POST",
        url: `${URL}/empleados`,
        data: empleado,
    };
    return await ajax(optionsRequest);
}

export const updateDato = async (empleado) => {
    const optionsRequest = {
        method: "POST",
        url: `${URL}/empleados`,
        data: empleado,
    };
    return await ajax(optionsRequest);  
}

export const deleteDato = async (empleado) => {
    const optionsRequest = {
        method: "PUT",
        url: `${URL}/empleados`,
        data: empleado,
    };
    console.log(empleado);
    return await ajax(optionsRequest);
    
}