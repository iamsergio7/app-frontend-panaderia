import { Box,  useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../../components/Header";
import { GetDatos } from "./clienteData";


const ProcesoProducto = () => {

  const getDatos = GetDatos();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "idProceso", headerName: "Codigo Proceso" },
    {
      field: "idProducto",
      headerName: "Codigo Producto",
      flex: 1,
      cellClassName: "name-column--cell",
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
      <Header title="PROCESOS DE PRODUCTOS" subtitle="Control de procesos de productos" />
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
          Registrar Proceso de Productos
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
          rows={getDatos}
          columns={columns}
          components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

export default ProcesoProducto;