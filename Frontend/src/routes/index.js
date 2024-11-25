import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp"
import Chat from "../pages/Chat";
import Game from "../pages/Game";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "chat",
                element : <Chat/>
            },
            {
                path : "game",
                element : <Game/>
            }
        ]
    }
])

export default router