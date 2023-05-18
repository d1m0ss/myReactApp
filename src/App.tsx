import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { Router } from "./routes/Router";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <PageTemlate>
        <Router />
      </PageTemlate>
    </div>
  );
};
