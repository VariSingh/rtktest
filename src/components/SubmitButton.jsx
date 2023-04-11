import { Button } from '@mui/material';
import * as React from 'react';
const SubmitButton = ({color="success",children}) => {
    return (
        <Button variant="contained" color={color}>{children}</Button>
    );
};

export default SubmitButton;