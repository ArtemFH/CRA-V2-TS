import {lazy, Suspense} from "react";

const Loader = (Component) => (props) => (
    <Suspense fallback={<></>}>
        <Component {...props}/>
    </Suspense>
)

export const Index = Loader(lazy(() => import('../pages/index.page')));
export const Feed = Loader(lazy(() => import('../pages/feed.page')));

