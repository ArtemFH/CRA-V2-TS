import {Index, Feed} from "./pages";
import {Layout} from "./components";
import {RouteObject} from "react-router-dom";

export const routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Index/>
            }
        ]
    }, {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "feed",
                element: <Feed/>,
                children: [
                    {
                        path: ":id",
                        element: <Feed/>,
                    }
                ]
            }
        ]
    }
]

