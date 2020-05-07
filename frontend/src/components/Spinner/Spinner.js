import React from 'react';
import Loader from 'react-loader-spinner';
import classes from './Spinner.module.css';
const spinner = () => (
    <div className={classes.loader}>
        <Loader
            type="ThreeDots"
            color="#626369"
            height={60}
            width={80}
        />
    </div>
);
export default spinner;

