import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createEmpleado } from "../../../modules/M1.Usuario/empleado/empleadoData";
const FormularioEmpleado = () => {
 



  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
        createEmpleado(values);
  };

  


  return (
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
                type="number"
                label="Nro. Documento Identidad"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ci}
                name="ci"
                error={!!touched.ci && !!errors.ci}
                helperText={touched.ci && errors.ci}
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
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
                error={!!touched.fechaNacimiento && !!errors.fechaNacimiento}
                helperText={touched.fechaNacimiento && errors.fechaNacimiento}
                sx={{ gridColumn: "span 2" }}
              />



              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Nro. Cargo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.idCargo}
                name="idCargo"
                error={!!touched.idCargo && !!errors.idCargo}
                helperText={touched.idCargo && errors.idCargo}
                sx={{ gridColumn: "span 2" }}
              />


            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear Empleado
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

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
  ci: 0,
  direccion: "",
  sexo: "",
  fechaNacimiento: "",
  idCargo: 0
};

export default FormularioEmpleado;