import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Login from "./pages/Login";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="*"
          element={
            <>
              <h1 className="text-white">Page Not found!</h1>
            </>
          }
        />
      </Routes>
  
    </MantineProvider>
  );
}

export default App;
