import {lazy, LazyExoticComponent} from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXElement = () => JSX.Element;

interface Route  {
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXElement> | JSXElement ,
    name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: "lazyload/*",
        to: "/lazyload",
        Component: LazyLayout,
        name: "Lazy Layout - Dash",
    },
    {
        path: "no-lazy",
        to: "/no-lazy",
        Component: NoLazy,
        name: "No Lazy",
    },
]
