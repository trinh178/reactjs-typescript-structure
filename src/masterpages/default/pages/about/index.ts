/**
 * Structure file requried
 */
import { PageRouteConfigProps } from 'app/router/types';
import Entry from './containers';

// Config
export const PageRouteConfig: PageRouteConfigProps = {
    path: '/about',
    key: 'about',
    hasLayout: true,
    entry: Entry,
};
