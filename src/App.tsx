import "./App.scss";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { SelectedPost } from "./page/SelectedPost/SelectedPost";

export const App = () => {
  return (
    <div className="app">
      <PageTemlate>
        <SelectedPost />
      </PageTemlate>
    </div>
  );
};
