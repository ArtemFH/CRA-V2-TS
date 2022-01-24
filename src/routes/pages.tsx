import {FC, lazy} from "react";

const Loader = (Component: FC) => (props: any) => (
    <Component {...props} />
);

export const IndexPage = Loader(lazy(() => import('../pages/IndexPage')));