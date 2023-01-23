import * as React from 'react';
import { useTheme, Box, Button, TextField, MenuItem, Dialog, DialogTitle, DialogActions, DialogContentText, DialogContent } from "@mui/material";
import { tokens } from "../../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FormularioEmpleado({ id = 0, sxButton, titleButton, handleDataFormulario }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        values.id = id; //veo actualziar el ID, no probe borrarlo aún
        handleDataFormulario(values); //los datos van a "index"
        setOpen(false);
        // setEmpleadosActualizados(async () => { return await getEmpleados() });
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Box>
                <Button
                    sx={sxButton}
                    variant="contained" onClick={handleClickOpen}>
                    {titleButton}
                </Button>
                <Dialog
                    open={open} onClose={handleClose}>
                    <DialogTitle align='center' fontSize={25} >REGISTRO DE DATOS</DialogTitle>
                    <DialogContent>
                        
                        <Box m="20px">
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
                                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
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
                                                select
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
                                                sx={{ gridColumn: "span 2" }}
                                            >
                                                {generos.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
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
                                                sx={{ gridColumn: "span 2" }}
                                            />

                                            <TextField
                                                select
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Cargo"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.idCargo}
                                                name="idCargo"
                                                error={!!touched.idCargo && !!errors.idCargo}
                                                helperText={touched.idCargo && errors.idCargo}
                                                sx={{ gridColumn: "span 2" }}
                                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                            >

                                                {cargos.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}

                                            </TextField >
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
                                        </Box>

                                        <DialogActions >
                                            <Button
                                                sx={{
                                                    backgroundColor: colors.greenAccent[700],
                                                    color: colors.grey[100],
                                                    fontSize: "14px",
                                                    fontWeight: "bold",
                                                    padding: "5px 10px",
                                                    borderRadius: "20px",
                                                    marginTop: "20px"   
                                                }}
                                                type="submit" color="success" variant="contained">Registrar</Button>
                                            <Button
                                                sx={{
                                                    backgroundColor: colors.redAccent[600],
                                                    color: colors.grey[100],
                                                    fontSize: "14px",
                                                    fontWeight: "bold",
                                                    padding: "5px 10px",
                                                    borderRadius: "20px",
                                                    marginTop: "20px",
                                                }}
                                                onClick={handleClose} color="error" variant="contained">Cancel</Button>
                                        </DialogActions>
                                    </form>
                                )}
                            </Formik>
                        </Box>
                    </DialogContent>
                </Dialog>
            </Box>
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
    id: 0,
    nombre: "",
    apellido: "",
    ci: "",
    direccion: "",
    sexo: "",
    fechaNacimiento: "",
    idCargo: ""
};

const generos = [
    {
        value: 'M',
        label: 'Hombre',
    },
    {
        value: 'F',
        label: 'Mujer',
    },
];


const cargos = [
    {
        value: '1',
        label: 'Administrador',
    },
    {
        value: '2',
        label: 'Secretaria',
    },
    {
        value: '3',
        label: 'Supervisor de Inventario',
    },
    {
        value: '4',
        label: 'Maestro de panaderia',
    },
    {
        value: '5',
        label: 'Ayudante',
    },

];