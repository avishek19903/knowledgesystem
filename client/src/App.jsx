import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import Login from './pages/Login';


function App() {
  return <MantineProvider>
    <Login />
  </MantineProvider>
}

export default App
