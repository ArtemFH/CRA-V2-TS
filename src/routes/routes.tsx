import {IndexPage} from "./pages";
import {LayoutUi} from "./components";
import {RouteObject} from "react-router-dom";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <LayoutUi/>,
        children: [
            {
                path: "",
                element: <IndexPage/>
            }
        ]
    }
]