import {Index} from "./pages";
import {Layout} from "./components";
import {RouteObject} from "react-router-dom";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Index/>
            }
        ]
    }
]