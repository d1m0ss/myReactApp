import "./App.scss";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { Blog } from "./page/Blog/Blog";

export const App = () => {
  return (
    <div className="app">
      <PageTemlate>
        <Blog />
      </PageTemlate>
    </div>
  );
};
