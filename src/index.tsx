import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppProvider } from "./components/AppContext/AppContext";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
