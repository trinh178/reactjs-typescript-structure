/**
 * Structure file requried
 */
import { MasterpageRouteConfigProps } from '../../app/router/types';
import Layout from './layout';
import NotFoundPage from './notfoundpage';

import { PageRouteConfig as HomePageRouteConfig } from './pages/home';

// Register page route here
const pageRouteConfigs = [
    HomePageRouteConfig,
    // ..
];

export const MasterpageRouteConfig: MasterpageRouteConfigProps = {
    path: '/example',
    key: 'example',
    notFoundPage: NotFoundPage,
    isRoot: false,
    layout: Layout,
    pageRouteConfigs,
    defaultPageRouteConfigKey: HomePageRouteConfig.key,
};
