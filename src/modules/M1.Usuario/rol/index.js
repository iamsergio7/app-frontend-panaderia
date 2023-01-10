import { Box, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";

import Header from "../../../components/Header";

import {GetRoles} from "./rolData";

const Rol = () => {

const getRoles = GetRoles();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nombre",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "descripcion",
      headerName: "Descripcion",
      flex: 2,
      headerAlign: "left",
      align: "left",
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
      <Header title="ROLES" subtitle="Control de roles" />
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
            Registrar Rol 
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
          rows={getRoles}
          columns={columns}
          components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

export default Rol;