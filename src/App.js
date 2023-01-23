import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoces from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Calendar from "./scenes/calendar/calendar";
import Bar from "./scenes/bar";
// import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
// import Login from "./scenes/login";

// MODULO 1 - USUARIOS
import Empleado from "./modules/M1.Usuario/empleado";
import Usuario from "./modules/M1.Usuario/usuario";
import Cargo from "./modules/M1.Usuario/cargo";
import Rol from "./modules/M1.Usuario/rol";
// MODULO 2 - VENTAS
import Cliente from "./modules/M2.Venta/cliente";
import Producto from "./modules/M2.Venta/producto";
import DetalleVenta from "./modules/M2.Venta/detalleventa";
import NotaEntrega from "./modules/M2.Venta/notaentrega";
import Pedido from "./modules/M2.Venta/pedido";
// MODULO 3 - INVENTARIO
import DetalleCompra from "./modules/M3.Inventario/detallecompra";
import MateriaPrima from "./modules/M3.Inventario/materiaprima";
import Proveedor from "./modules/M3.Inventario/proveedor";
import NotaCompra from "./modules/M3.Inventario/notacompra";
import UnidadMedida from "./modules/M3.Inventario/unidadmedida";
// MODULO 4 - PROCESOS
import Proceso from "./modules/M4.Proceso/proceso";
import EmpleadoMaquina from "./modules/M4.Proceso/empleadomaquina";
import Maquina from "./modules/M4.Proceso/maquina";
import EmpleadoProceso from "./modules/M4.Proceso/empleadoproceso";
import Ingrediente from "./modules/M4.Proceso/ingrediente";
import ProcesoProducto from "./modules/M4.Proceso/procesoproducto";
import Receta from "./modules/M4.Proceso/receta";



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoces />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/form" element={<Form />} /> */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />

              {/* MODULO 1 - USUARIOS */}
              <Route path="/empleado" element={<Empleado />} />
              <Route path="/usuario" element={<Usuario />} />
              <Route path="/cargo" element={<Cargo />} />
              <Route path="/rol" element={<Rol />} />

              {/* MODULO 2 - VENTAS */}
              <Route path="/cliente" element={<Cliente />} />
              <Route path="/producto" element={<Producto />} />
              <Route path="/detalleventa" element={<DetalleVenta />} />
              <Route path="/notaentrega" element={<NotaEntrega />} />
              <Route path="/pedido" element={<Pedido />} />
              {/* MODULO 3 - INVENTARIO */}
              <Route path="/detallecompra" element={<DetalleCompra />} />
              <Route path="/materiaprima" element={<MateriaPrima />} />
              <Route path="/proveedor" element={<Proveedor />} />
              <Route path="/notacompra" element={<NotaCompra />} />
              <Route path="/unidadmedida" element={<UnidadMedida />} />
              {/* MODULO 4 - PROCESOS */}
              <Route path="/empleadomaquina" element={<EmpleadoMaquina />} />
              <Route path="/maquina" element={<Maquina />} />
              <Route path="/empleadoproceso" element={<EmpleadoProceso />} />
              <Route path="/proceso" element={<Proceso />} />
              <Route path="/procesoproducto" element={<ProcesoProducto />} />
              <Route path="/ingrediente" element={<Ingrediente />} />
              <Route path="/receta" element={<Receta />} />
















              <Route path="/line" element={<Line />} />


              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>


  );
}

export default App;
