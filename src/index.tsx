import React from 'react';
import { SnackbarProvider } from 'notistack'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
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
            <Provider store={store}>
                <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <App/>
                </SnackbarProvider>
            </Provider>
            <ReactQueryDevtools initialIsOpen={true}/>
        </QueryClientProvider>
    </BrowserRouter>
);

reportWebVitals();
