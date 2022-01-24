import {FC, lazy} from "react";

const Loader = (Component: FC) => (props: any) => (
    <Component {...props} />
);

export const Index = Loader(lazy(() => import('../pages/index.page')));