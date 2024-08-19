import { Link } from "react-router-dom"
import AppRouter from "./providers/provider/router/AppRouter"
import './styles/index.scss'
import { Suspense } from "react"

export function App () {
    return <div className='app'>
        <Suspense fallback=''>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <AppRouter />
        </Suspense>
    </div>
}