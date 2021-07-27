import React from 'react';
import {
    Route, Switch, BrowserRouter, RouteProps,
} from 'react-router-dom';
import RootRoute from './masterpages';
import RootNotFoundPage from './root-notfoundpage';

// Root not found page route
const rootNotfoundRoute = React.createElement(
    Route,
    {
        path: '*',
        key: 'root-notfound',
    } as RouteProps,
    RootNotFoundPage,
);
RootRoute.push(rootNotfoundRoute);

// Root route
export default React.createElement(
    BrowserRouter,
    {},
    React.createElement(Switch, {}, RootRoute),
);
