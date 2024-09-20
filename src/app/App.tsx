import { Header } from "widgets/Header";
import AppRouter from "./router/AppRouter";
import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";

export function App() {

  const {theme} = useTheme()

  useEffect(() => {
    // set theme
    document.body.className = theme;
  },[theme])

    return (
      <div className={classNames('app', {}, [])}>
        <Header />
        <main className={classNames('main container')}>
          <AppRouter />
        </main>
      </div>
    );
}
