import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { CssBaseline, Grid2, Stack } from "@mui/material";

import Dashboard from "./pages/Dashboard";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Stack spacing={5} p={3} minHeight="100vh" height={1} m="auto">
          <CssBaseline />
          <Grid2 container spacing={2} py={3}>
            <Grid2 size={{ md: 2.5 }}>
              <Sidebar />
            </Grid2>
            <Grid2 size={{ md: 9.5 }} px={10}>
              <Routes>
                <Route path="*" element={<Dashboard />} />
              </Routes>
              <Outlet />
            </Grid2>
          </Grid2>
        </Stack>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
