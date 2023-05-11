import "./App.scss";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { SelectedPostPage } from "./page/SelectedPostPage/SelectedPostPage";

export const App = () => {
  return (
    <div className="app">
      <PageTemlate>
        <SelectedPostPage />
      </PageTemlate>
    </div>
  );
};
