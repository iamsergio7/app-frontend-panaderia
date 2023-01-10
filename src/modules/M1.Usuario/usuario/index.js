import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../../components/Header";



import { GetUsuarios } from "./usuarioData";

const Usuario = () => {

  const getUsuarios = GetUsuarios();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "username",
      headerName: "Usuario",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "password",
      headerName: "Contraseña",
      headerAlign: "left",
      flex: 1,
      align: "left",
    },
    {
      field: "idEmpleado",
      headerName: "Codigo Empleado",
      headerAlign: "left",
      alignItems: "center",
      // type: "number",
      flex: 1,
    },
    {
      field: "idRol",
      headerName: "Rol",
      headerAlign: "center",
      alignItems: "center",
      flex: 1,
      renderCell: ({ row: { idRol } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"

            // {idRol === 1 ? "Hola 1" : idRol === 2 ? "Hola 2" : idRol === 3 ? "Hola 3" : idRol === 4 ? "Hola 4" : idRol === 5 ? "Hola 5" : idRol === 6 ? "Hola 6" : "Hola 7"}
            title={
              idRol === 1
                ? "Admi"
                : idRol === 2
                  ? "Usuario"
                  : idRol === 3
                    ? "Secretaria"
                    : idRol === 4
                      ? "Encargado de ventas"
                      : idRol === 5
                        ? "Encargado de almacen"
                        : idRol === 6
                          ? "Encargado de produccion"
                          : "Maestro de produccion"
            }
            backgroundColor=
            {
              idRol === 1
                ? colors.greenAccent[600]
                : idRol === 2
                  ? colors.greenAccent[700]
                  : idRol === 3
                    ? colors.greenAccent[700]
                    : idRol === 4
                      ? colors.greenAccent[700]
                      : idRol === 5
                        ? colors.greenAccent[700]
                        : idRol === 6
                          ? colors.greenAccent[700]
                          : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {idRol === 1 && <AdminPanelSettingsOutlinedIcon />}
            {idRol === 2 && <SecurityOutlinedIcon />}
            {idRol === 3 && <LockOpenOutlinedIcon />}
            {idRol === 4 && <LockOpenOutlinedIcon />}
            {idRol === 5 && <LockOpenOutlinedIcon />}
            {idRol === 6 && <LockOpenOutlinedIcon />}
            {idRol === 7 && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {idRol}
            </Typography>
          </Box >
        );
      },
    },

    {
      headerName: "Acciones",
      headerAlign: "center",
      flex: 1,
      alignItems: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            display="grid"
            gridTemplateColumns="repeat(8, 1fr)"
            gridAutoRows="140px"
            gap="5px"
          >
            {/* ROW 1 */}
            <Box
              gridColumn="span 4"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                sx={{
                  backgroundColor: colors.greenAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "5px 10px",
                }}
              >
                Editar
              </Button>
            </Box>
            <Box
              gridColumn="span 4"
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
                }}
              >
                Eliminar
              </Button>
            </Box>

          </Box>

        );
      },
    },

  ];

  return (
    <Box m="20px">
      <Header title="USUARIOS" subtitle="Control de usuarios" />
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[400],
            color: colors.grey[900],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          Registrar Usuario
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
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
        }}
      >
        <DataGrid
          rows={getUsuarios}
          columns={columns}
          components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

export default Usuario;