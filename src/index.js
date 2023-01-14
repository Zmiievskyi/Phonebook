import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { store } from "./redux/store";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { theme } from "./theme";


const container = document.getElementById("root");
const root = createRoot(container);

const contactsDemo = [
  {
    id: 1,
    name: 'Олександр Репета',
    number: 111,
  },
  {
    id: 2,
    name: 'Рустам Асланов',
    number: 911,
  },
  {
    id: 3,
    name: 'GoIT',
    number: '050 366 17 77',
  },
];



root.render(
  <React.StrictMode>
    <BrowserRouter
    basename="/goit-react-hw-08-phonebook"
    >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
