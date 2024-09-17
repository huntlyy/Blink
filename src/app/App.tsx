import { Header } from "widgets/Header";
import AppRouter from "./router/AppRouter";
import "./styles/index.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";

export function App() {

    return (
      <div className={classNames('app', {}, [])}>
        <Header />
        <main className={classNames('main container')}>
          <AppRouter />
        </main>
      </div>
    );
}
