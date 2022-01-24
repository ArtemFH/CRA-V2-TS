import {FC, lazy, Suspense} from "react";

const Loader = (Component: FC) => (props: any) => (
    <Suspense fallback={<></>}>
        <Component {...props} />
    </Suspense>
);

export const LayoutUi = Loader(lazy(() => import('../ui-components/LayoutUi')));