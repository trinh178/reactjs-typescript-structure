/**
 * Structure file requried
 */
import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import {
    LayoutWrapper, LayoutMenuWrapper, LayoutMenuItem, LayoutContentWrapper,
} from './components';

interface MenuItemProps {
    name: string,
    key: string,
    path: string,
    selected: boolean,
}
const menuItems: MenuItemProps[] = [
    {
        name: 'Home',
        key: 'home',
        path: '/home',
        selected: false,
    },
    {
        name: 'About',
        key: 'about',
        path: '/about',
        selected: false,
    },
];

const MasterpageLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    // Set selected for menu item
    const location = useLocation();
    menuItems.forEach((menuItem) => {
        if (menuItem.path === location.pathname) {
            // eslint-disable-next-line no-param-reassign
            menuItem.selected = true;
        } else {
            // eslint-disable-next-line no-param-reassign
            menuItem.selected = false;
        }
    });

    const history = useHistory();
    return (
        <LayoutWrapper>
            <LayoutMenuWrapper>
                {
                    menuItems.map(({
                        name, key, path, selected,
                    }) => (
                        <LayoutMenuItem
                            key={key}
                            onClick={() => {
                                history.push(path);
                            }}
                            disabled={selected}
                        >
                            {name}
                        </LayoutMenuItem>
                    ))
                }
            </LayoutMenuWrapper>
            <LayoutContentWrapper>
                {children}
            </LayoutContentWrapper>
        </LayoutWrapper>
    );
};

MasterpageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MasterpageLayout;
