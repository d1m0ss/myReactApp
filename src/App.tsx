import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { RegistrationConfirm } from "./page/RegistrationConfirm/RegistrationConfirm";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <PageTemlate>
        <RegistrationConfirm />
      </PageTemlate>
    </div>
  );
};
