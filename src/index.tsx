import ReactDOM from "react-dom/client";
import { App } from "./reduxPractic/App";
import { AppProvider } from "./components/AppContext/AppContext";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);
