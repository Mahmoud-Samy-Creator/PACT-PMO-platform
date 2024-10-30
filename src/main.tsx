// import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import App from './App.tsx'
import 'leaflet/dist/leaflet.css';
import './index.css'


const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <MantineProvider>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      </BrowserRouter>
    </MantineProvider>
  // </StrictMode>,
)
