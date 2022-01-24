import {FC, lazy} from "react";

const Loader = (Component: FC) => (props: any) => (
    <Component {...props} />
);

export const Layout = Loader(lazy(() => import('../ui-components/LayoutUI')));