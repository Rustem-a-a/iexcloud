import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Header(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar style={{backgroundColor:'#abbac7',color:'black'}}>
                    <Toolbar >
                        <Typography  variant="h4" component="div">
                            <h3>Sectors and companies report</h3>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>

            </Container>
        </React.Fragment>
    );
}
