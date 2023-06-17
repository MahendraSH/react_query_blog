import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { HashRouter } from 'react-router-dom'
import { QueryClientProvider ,QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </React.StrictMode>
    </QueryClientProvider>
  </HashRouter>
);
