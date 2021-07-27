/**
 * Structure file requried
 */
import { PageRouteConfigProps } from 'app/router/types';
import Entry from './containers';

// Config
export const PageRouteConfig: PageRouteConfigProps = {
    path: '/_template_',
    key: '_template_',
    hasLayout: true,
    entry: Entry,
};
