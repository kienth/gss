import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { CssBaseline, Grid2, Stack } from "@mui/material";

import { MakeStyle } from "./utils";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Billing from "./pages/Billing";
import Test from "./pages/Test";
import RequestForm from "./pages/RequestForm";
import ConferenceRoom from "./pages/RequestForm/forms/ConferenceRoom";
import JanitorialService from "./pages/RequestForm/forms/JanitorialService";
import EntryPremises from "./pages/RequestForm/forms/EntryPremises";
import Janitorial from "./pages/Janitorial";
import Security from "./pages/Security";
import Transportation from "./pages/Transportation";
import "./App.css";
import EmployeeVehicleEntryPass from "./pages/RequestForm/forms/EmployeeVehicleEntryPass";

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
                <Route path="/request-form" element={<RequestForm />} />
                <Route
                  path="/request-form/janitorial"
                  element={<JanitorialService />}
                />
                <Route
                  path="/request-form/conference-room"
                  element={<ConferenceRoom />}
                />
                <Route
                  path="/request-form/entry-premises"
                  element={<EntryPremises />}
                />
                <Route
                  path="/request-form/employee-vehicle-entry-premises"
                  element={<EmployeeVehicleEntryPass />}
                />
                <Route
                  path="/janitorial/request-list"
                  element={<Janitorial />}
                />
                <Route path="/security/request-list" element={<Security />} />
                <Route
                  path="/transportation/request-list"
                  element={<Transportation />}
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
