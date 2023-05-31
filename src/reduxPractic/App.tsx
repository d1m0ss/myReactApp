import { Provider } from "react-redux";
import { store } from "./store/store";
import { Counter } from "./Counter";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TodoList } from "./TodoList";

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Counter />
      <TodoList />
      <Footer />
    </Provider>
  );
};
