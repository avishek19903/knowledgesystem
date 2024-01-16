
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/admin";
import Staff from "./pages/staff";
import ProjectTeam from "./pages/projectTeam";
import Client from "./pages/client";

function App() {
  const queryClient = new QueryClient();

  return (
    <MantineProvider>
      <Notifications />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/admin" element={<Admin />} />
          <Route path="/dashboard/staff" element={<Staff />} />
          <Route path="/dashboard/projectteam" element={<ProjectTeam />} />
          <Route path="/dashboard/client" element={<Client />} />
          <Route
            path="*"  
            element={
              <>
                <h1 className="text-white">Page Not found!</h1>
              </>
            }
          />
        </Routes>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
