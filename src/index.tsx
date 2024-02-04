import React from 'react';
import { SnackbarProvider } from 'notistack'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools";

export const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
                <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <App/>
                </SnackbarProvider>
            <ReactQueryDevtools initialIsOpen={true}/>
        </QueryClientProvider>
    </BrowserRouter>
);

reportWebVitals();
