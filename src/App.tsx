import { PageTemlate } from "./components/PageTemlate/PageTemlate";
// import { BlogPage } from "./page/BlogPage/BlogPage";
// import { RegistrationConfirmPage } from "./page/RegistrationConfirmPage/RegistrationConfirmPage";
// import { SelectedPostPage } from "./page/SelectedPostPage/SelectedPostPage";
// import { SignInPost } from "./page/SignInPost/SignInPost";
// import { SignUpPage } from "./page/SignUpPage/SignUpPage";
// import { SuccessPage } from "./page/SuccessPage/SuccessPage";
import "./App.scss";
import { SearchPage } from "./page/SearckPage/SearchPage";

export const App = () => {
  return (
    <div className="app">
      <PageTemlate>
        {/* <BlogPage />
        <RegistrationConfirmPage />
        <SelectedPostPage />
        <SignInPost />
        <SignUpPage />
        <SuccessPage /> */}
        <SearchPage />
      </PageTemlate>
    </div>
  );
};
