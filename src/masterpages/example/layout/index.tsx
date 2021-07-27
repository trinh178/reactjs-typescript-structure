/**
 * Structure file requried
 */
import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
/*
import {
    // ..
} from './components';
*/

const MasterpageLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
    <div>
        Example layout
        <br />
        {children}
    </div>
);

MasterpageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MasterpageLayout;
