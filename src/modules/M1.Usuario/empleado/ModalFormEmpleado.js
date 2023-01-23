import * as React from 'react';
import { Box, Button, Modal, TextField, Dialog, DialogTitle, DialogActions, DialogContentText, DialogContent } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createEmpleado } from "./empleadoData";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 100,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Open Child Modal</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default function ModalFormEmpleado() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log("paso")
        createEmpleado(values);
    };







    return (
        <Box>
            <Button onClick={handleOpen}>Crear Empleado</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 800 }}>
                    <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={checkoutSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="repeat(6, minmax(0, 1fr))"
                                    sx={{
                                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                    }}
                                >

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Nombre"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.nombre}
                                        name="nombre"
                                        error={!!touched.nombre && !!errors.nombre}
                                        helperText={touched.nombre && errors.nombre}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Apellido"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.apellido}
                                        name="apellido"
                                        error={!!touched.apellido && !!errors.apellido}
                                        helperText={touched.apellido && errors.apellido}
                                        sx={{ gridColumn: "span 2" }}
                                    />


                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Nro. Documento Identidad"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.ci}
                                        name="ci"
                                        error={!!touched.ci && !!errors.ci}
                                        helperText={touched.ci && errors.ci}
                                        sx={{ gridColumn: "span 2" }}
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}

                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Direccion"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.direccion}
                                        name="direccion"
                                        error={!!touched.direccion && !!errors.direccion}
                                        helperText={touched.direccion && errors.direccion}
                                        sx={{ gridColumn: "span 3" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Sexo"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.sexo}
                                        name="sexo"
                                        error={!!touched.sexo && !!errors.sexo}
                                        helperText={touched.sexo && errors.sexo}
                                        sx={{ gridColumn: "span 3" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="date"
                                        label="Fecha de Nacimiento"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fechaNacimiento}
                                        name="fechaNacimiento"
                                        InputLabelProps={{ shrink: true, }}
                                        error={!!touched.fechaNacimiento && !!errors.fechaNacimiento}
                                        helperText={touched.fechaNacimiento && errors.fechaNacimiento}
                                        sx={{ gridColumn: "span 3" }}
                                    />



                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Nro. Cargo"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.idCargo}
                                        name="idCargo"
                                        error={!!touched.idCargo && !!errors.idCargo}
                                        helperText={touched.idCargo && errors.idCargo}
                                        sx={{ gridColumn: "span 3" }}
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    />


                                </Box>

                                <DialogActions >
                                    <Button type="submit" color="success" variant="contained">Registrar</Button>
                                    <Button onClick={handleClose} color="error" variant="contained">Cancel</Button>
                                </DialogActions>
                                {/* <Box display="flex" justifyContent="end" mt="20px">
                                        <Button type="submit" color="secondary" variant="contained">
                                            Crear Empleado
                                        </Button>
                                    </Box> */}
                            </form>
                        )}
                    </Formik>


                    <ChildModal />
                </Box>
            </Modal>
        </Box>
    );
}



const checkoutSchema = yup.object().shape({
    nombre: yup.string().required("requerido"),
    apellido: yup.string().required("requerido"),

    ci: yup.number().required("requerido"),
    direccion: yup.string().required("requerido"),
    sexo: yup.string().required("requerido"),
    fechaNacimiento: yup.date().required("requerido"),


    idCargo: yup.number().required("requerido"),

});
const initialValues = {

    nombre: "",
    apellido: "",
    ci: "",
    direccion: "",
    sexo: "",
    fechaNacimiento: "",
    idCargo: ""
};


