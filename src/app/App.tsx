import Header from "widgets/Header/ui/Header";
import AppRouter from "./router/AppRouter";
import "./styles/index.scss";
import { Suspense } from "react";
import { AppLink } from "shared/ui/AppLink/AppLink";

export function App() {
    return (
      <div className="app dark">
         <Header />
        <Suspense fallback="">
          <AppLink to={"/"}>Главная</AppLink>
          <AppLink to={"/about"}>О сайте</AppLink>
          <AppRouter />
        </Suspense>
      </div>
    );
}
