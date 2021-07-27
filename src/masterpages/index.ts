/**
 * Structure file requried
 */
/**
 * Router tree
 *
 * RootRoute - MasterpagesRoutes
 * |- MasterpageRoute1
 *    |- PageRoute1
 *    |- PageRoute2
 * |- MasterpageRoute2
 *    |- PageRoute1
 *    |- PageRoute2
 *
 */

import { MasterpageRouteConfig as DefaultMasterpageRouteConfig } from './default';
import { MasterpageRouteConfig as ExampleMasterpageRouteConfig } from './example';

// Register masterpage route here
export const MasterpageRouteConfigs = [
    DefaultMasterpageRouteConfig,
    ExampleMasterpageRouteConfig,
    // ..
];
