import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { BlogPage } from "../page/BlogPage/BlogPage";
import { SelectedPostPage } from "../page/SelectedPostPage/SelectedPostPage";
import { SearchPage } from "../page/SearckPage/SearchPage";
import { SignInPost } from "../page/SignInPost/SignInPost";
import { SignUpPage } from "../page/SignUpPage/SignUpPage";
import { RegistrationConfirmPage } from "../page/RegistrationConfirmPage/RegistrationConfirmPage";
import { SuccessPage } from "../page/SuccessPage/SuccessPage";

export const Router: FC = () => (
  <Routes>
    <Route path="/posts" element={<BlogPage />} />
    <Route path="/posts/:id" element={<SelectedPostPage />} />
    <Route path="/posts/search" element={<SearchPage />} />
    <Route path="/posts/sign-in" element={<SignInPost />} />
    <Route path="/posts/sign-up" element={<SignUpPage />} />
    <Route path="/posts/registration-confirm" element={<RegistrationConfirmPage />} />
    <Route path="/posts/success" element={<SuccessPage />} />
    <Route path="/*" element={<h1>Такой страницы не существует</h1>} />
  </Routes>
);
