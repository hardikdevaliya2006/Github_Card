import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { InputDataProvider } from "./Context/InputDataContext";
import { EmojiApiProvider } from "./Context/EmojiApiContext.jsx";
import { GithubApiProvider } from "./Context/GithubApiContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GithubApiProvider>
      <EmojiApiProvider>
        <InputDataProvider>
          <App />
        </InputDataProvider>
      </EmojiApiProvider>
    </GithubApiProvider>
  </BrowserRouter>
);
