/**
 * Structure file requried
 */
import { MasterpageRouteConfigProps } from '../../app/router/types';
import Layout from './layout';
import NotFoundPage from './notfoundpage';

import { PageRouteConfig as HomePageRouteConfig } from './pages/home';
import { PageRouteConfig as AboutPageRouteConfig } from './pages/about';

// Register page route here
const pageRouteConfigs = [
    HomePageRouteConfig,
    AboutPageRouteConfig,
    // ..
];

export const MasterpageRouteConfig: MasterpageRouteConfigProps = {
    path: '/default',
    key: 'default',
    notFoundPage: NotFoundPage,
    isRoot: true,
    layout: Layout,
    pageRouteConfigs,
    defaultPageRouteConfigKey: HomePageRouteConfig.key,
};
