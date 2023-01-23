import { Box, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar, GridToolbarExport } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../../components/Header";
import { getDatos, deleteDato, createDato, getDato, updateDato } from "./empleadoData";
import { useEffect, useState } from "react";
import FormularioEmpleado from "./FormularioEmpleado";
import { useSnackbar } from 'notistack';

const Empleado = () => {
  const [datos, setDatos] = useState([]);
  const [datosActualizado, setDatosActualizado] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant, message) => {
    // variant : success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const handleDeleteEmpleado = id => {
    getDato(id).then(dato => {
      deleteDato(datos[0]);
      setDatosActualizado(true);
      handleClickVariant('success', 'Eliminado con éxito');
    });
  };

  const handleDataFormulario = (values) => {
    if (values.id === 0) {
      createDato(values);
      handleClickVariant('success', 'Creado con éxito');
    } else {
      handleClickVariant('success', 'Actualizado con éxito');
      updateDato(values);
    }
    setDatosActualizado(true);
  }
  const cargos = [
    { id: 1, nombre: "Administrador" },
    { id: 2, nombre: "Secretaria" },
    { id: 3, nombre: "Empleado" }
  ];

  useEffect(() => {
    (async () => {
      const tabla = await getDatos();
      setDatos(tabla.reverse());
      setDatosActualizado(false);
    })();
  }, [datosActualizado]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      headerAlign: "left",
      align: "left",
      flex: 1,

      cellClassName: "name-column--cell",
    },
    {
      field: "apellido",
      headerName: "Apellido",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "ci",
      headerName: "Nro Carnet",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "direccion",
      headerName: "Direccion",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
    {
      field: "sexo",
      headerName: "Sexo",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "fechaNacimiento",
      headerName: "Fecha Nacimiento",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "idCargo",
      headerName: "Cargo",
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderCell: ({ row: { idCargo } }) => {
        const cargo = cargos.find(c => c.id === idCargo);
        return cargo ? cargo.nombre : "Cargo no encontrado";
      },
    },
    {
      field: null,
      headerName: "Acciones",
      headerAlign: "center",
      align: "center",
      flex: 2,
      alignItems: "center",
      renderCell: ({ row: { id } }) => {
        return (

          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridAutoRows="140px"
            gap="5px"
          >
            {/* ROW 1 */}
            <Box
              gridColumn="span 1"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FormularioEmpleado
                id={id}
                sxButton={{
                  backgroundColor: colors.greenAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "5px 10px",
                  borderRadius: "20px",
                }}
                titleButton="Editar"
                handleDataFormulario={handleDataFormulario}
              />
            </Box>
            <Box
              gridColumn="span 1"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                sx={{
                  backgroundColor: colors.redAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "5px 10px",
                  borderRadius: "20px",
                }}
                onClick={() => { handleDeleteEmpleado(id) }}
              // onClick={() => { getEmpleado(id).then(empleado => deleteEmpleado(empleado[0])) }}
              >
                Eliminar
              </Button>
            </Box>
          </Box>

        );

      },
    }
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EMPLEADOS" subtitle="Control de empleados" />

        <FormularioEmpleado
          sxButton={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          titleButton="Agregar Empleado"
          handleDataFormulario={handleDataFormulario}
        />

      </Box>
      <Box
        m="0px 0 0 0"
        height="72vh"
        sx={{
          '@media print': {
            '.MuiDataGrid-main': { color: 'rgba(0, 0, 0, 0.87)' },
          },
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },

          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },

          '@media (max-width:600px)': {
            //Propiedades para dispositivos moviles
            '& .MuiDataGrid-root': {
              fontSize: '12px',
            },
            '& .MuiDataGrid-row': {
              padding: '8px',
            },

          },
        }}
      >
        <DataGrid
          rows={datos}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          
        />
      </Box>
    </Box >
  );
};

export default Empleado;