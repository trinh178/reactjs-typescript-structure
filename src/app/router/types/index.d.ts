import React, { PropsWithChildren } from 'react';

export interface PageRouteConfigProps {
    path: string,
    key: string,
    hasLayout: boolean,
    entry: React.ComponentClass<PropsWithChildren<{}>, {}> | React.FC<PropsWithChildren<{}>>,
}

export interface MasterpageRouteConfigProps {
    path: string,
    key: string,
    notFoundPage: React.ComponentClass<PropsWithChildren<{}>, {}> | React.FC<PropsWithChildren<{}>>,
    isRoot: boolean,
    layout: React.ComponentClass<PropsWithChildren<{}>, {}> | React.FC<PropsWithChildren<{}>>,
    pageRouteConfigs: PageRouteConfigProps[],
    defaultPageRouteConfigKey: string
}
