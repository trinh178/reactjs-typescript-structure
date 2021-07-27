import React from 'react';
import {
    Switch, Route, RouteProps, Redirect,
} from 'react-router-dom';
import { MasterpageRouteConfigs } from '../../masterpages';

const masterpagesRoutes: any = [];

// Sort !isRoot up to the top
const sortedMasterpageRouteConfigs = MasterpageRouteConfigs.sort(
    // eslint-disable-next-line no-nested-ternary
    (a, b) => ((a.isRoot === b.isRoot) ? 0 : a.isRoot ? 1 : -1),
);

sortedMasterpageRouteConfigs.forEach((masterpageRouteConfig) => {
    // Not found page
    const notfoundpageRoute = React.createElement(
        Route,
        {
            path: '*',
            key: `${masterpageRouteConfig.key}_notfound`,
        } as RouteProps,
        React.createElement(masterpageRouteConfig.notFoundPage, null),
    );

    // PageRoute
    const pagesRoutes: any[] = [];

    // Group by layout
    const nonLayoutPageRouteConfigs = masterpageRouteConfig.pageRouteConfigs
        .filter((config) => !config.hasLayout);
    const hasLayoutPageRouteConfigs = masterpageRouteConfig.pageRouteConfigs
        .filter((config) => config.hasLayout);

    nonLayoutPageRouteConfigs.forEach((config) => {
        // Create route as react node
        const pageRoute = React.createElement(
            Route,
            {
                path: masterpageRouteConfig.isRoot
                    ? config.path
                    : masterpageRouteConfig.path + config.path,
                key: `${masterpageRouteConfig.key}_${config.key}`,
                exact: true,
            } as RouteProps,
            React.createElement(config.entry, null),
        );
        // Add to pagesRoutes
        pagesRoutes.push(pageRoute);
    });

    const hasLayoutPagesRoutes: any[] = [];
    hasLayoutPageRouteConfigs.forEach((config) => {
        // Create route as react node
        const pageRoute = React.createElement(
            Route,
            {
                path: masterpageRouteConfig.isRoot
                    ? config.path
                    : masterpageRouteConfig.path + config.path,
                key: `${masterpageRouteConfig.key}_${config.key}`,
                exact: true,
            } as RouteProps,
            React.createElement(config.entry, null),
        );
        // Add to pagesRoutes
        hasLayoutPagesRoutes.push(pageRoute);
    });
    // Layout
    if (masterpageRouteConfig.layout && hasLayoutPagesRoutes.length > 0) {
        // Add not found page to hasLayoutPagesRoutes
        hasLayoutPagesRoutes.push(notfoundpageRoute);

        // Switch wapper
        const switchWapper = React.createElement(
            Switch,
            {
                key: `${masterpageRouteConfig.key}_switch_layout`,
            },
            hasLayoutPagesRoutes,
        );

        // Layout wapper
        const pageRoute = React.createElement(
            masterpageRouteConfig.layout,
            {
                key: `${masterpageRouteConfig.key}_layout`,
            },
            switchWapper,
        );

        // Add to pagesRoutes
        pagesRoutes.push(pageRoute);
    }

    // Add not found page to pagesRoutes
    pagesRoutes.push(notfoundpageRoute);

    // Default
    const defaultPageRouteConfig = masterpageRouteConfig.pageRouteConfigs
        .find((pageRouteConfig) => pageRouteConfig.key === masterpageRouteConfig.defaultPageRouteConfigKey);
    if (defaultPageRouteConfig) {
        const defaultPageRoute = React.createElement(
            Route,
            {
                path: masterpageRouteConfig.isRoot ? '/' : `${masterpageRouteConfig.path}/`,
                key: `${masterpageRouteConfig.key}_redirect`,
                exact: true,
            } as RouteProps,
            React.createElement(
                Redirect,
                {
                    to: masterpageRouteConfig.isRoot ? defaultPageRouteConfig.path
                        : masterpageRouteConfig.path + defaultPageRouteConfig.path,
                },
            ),
        );
        pagesRoutes.unshift(defaultPageRoute);
    } else {
        throw new Error("Default of masterpage hasn't found.");
    }

    // Switch wapper
    const switchWapper = React.createElement(
        Switch, {
            key: `${masterpageRouteConfig.key}_switch_root`,
        },
        pagesRoutes,
    );

    // MasterpageRoute - Route wapper
    if (masterpageRouteConfig.isRoot) {
        masterpagesRoutes.push(switchWapper);
    } else {
        const masterpageRoute = React.createElement(
            Route,
            {
                path: masterpageRouteConfig.path,
                key: masterpageRouteConfig.key,
                // exact: true,
            } as RouteProps,
            switchWapper,
        );
        masterpagesRoutes.push(masterpageRoute);
    }
});

export default masterpagesRoutes;

/**
 * TODO: Log error/warning when
 * - Default key
 * - IsRoot
 */
