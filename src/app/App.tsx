import { Header } from "widgets/Header/ui/Header";
import AppRouter from "./router/AppRouter";
import "./styles/index.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";

export function App() {
  
const {theme}= useTheme()

  useEffect(() => {
    // set theme
    document.body.className = theme;
  }, [])

    return (
      <div className="app dark">
        <Header />
        <main className={classNames('main container')}>
          <AppLink to={'/'}>Главная</AppLink>
          <AppLink to={'/about'}>О сайте</AppLink>
          <AppRouter />
        </main>
      </div>
    );
}
