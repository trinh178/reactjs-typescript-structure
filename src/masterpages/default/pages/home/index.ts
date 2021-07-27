/**
 * Structure file requried
 */
import { PageRouteConfigProps } from 'app/router/types';
import Entry from './containers';

// Config
export const PageRouteConfig: PageRouteConfigProps = {
    path: '/home',
    key: 'home',
    hasLayout: true,
    entry: Entry,
};
