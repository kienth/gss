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
import { MakeStyle } from "./utils";
import RequestList from "./pages/Janitorial/RequestList";
import Billing from "./pages/Billing";
import RequestForm from "./pages/Janitorial/RequestForm";
import Test from "./pages/Test";

function App() {
  const classes = MakeStyle();
  return (
    <>
      <Router>
        <Stack
          spacing={{ lg: 5, md: 3 }}
          p={{ md: 3, xs: 1 }}
          height={1}
          m="auto"
        >
          <CssBaseline />
          <Grid2 container spacing={2} py={3}>
            <Grid2 size={{ lg: 3 }} display={{ lg: "flex", xs: "none" }}>
              <Sidebar />
            </Grid2>
            <Grid2
              className={classes.scrollableContent}
              size={{ lg: 9, xs: 12 }}
              px={{ md: 10, xs: 1 }}
              pt={3}
            >
              <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route
                  path="/janitorial/request-form"
                  element={<RequestForm />}
                />
                <Route
                  path="/janitorial/request-list"
                  element={<RequestList />}
                />
                <Route
                  path="/security/request-list"
                  element={<RequestList />}
                />
                <Route
                  path="/transportation/request-list"
                  element={<RequestList />}
                />
                <Route path="/billing" element={<Billing />} />
                <Route path="/test" element={<Test />} />
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
