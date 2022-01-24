import {FC, lazy, Suspense} from "react";

const Loader = (Component: FC) => (props: any) => (
    <Suspense fallback={<></>}>
        <Component {...props} />
    </Suspense>
);

export const Index = Loader(lazy(() => import('../pages/index.page')));