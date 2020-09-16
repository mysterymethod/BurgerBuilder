import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => {
    return (
        <div
            onClick = {props.clicked}
            className = {classes.DrawerToggle}
        >
            MENU
        </div>
    );
}

export default drawerToggle; 