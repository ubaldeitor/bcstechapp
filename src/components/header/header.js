import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Grid, ButtonGroup, Button } from '@material-ui/core';

const style = {
    headerStyle: {
        boxShadow: 'none'
    },
    toolbarStyle: {
        minHeight: 'auto'
    },
    buttonStyle: {
        color: "#ffffff",
        backgroundColor: "#757575",
        "&:hover": {
            background: '#00b7f5',
        }
    }
}

//const MyButton = React.forwardRef((props, ref) => <div role="button" {...props} ref={ref} />);
const HomeLink = React.forwardRef((props, ref) => <Link to="/" {...props} />);
const NosotrosLink = React.forwardRef((props, ref) => <Link to="/nosotros" {...props} />);
const ServiciosLink = React.forwardRef((props, ref) => <Link to="/servicios" {...props} />);
const ProductosLink = React.forwardRef((props, ref) => <Link to="/productos" {...props} />);
const GaleriaLink = React.forwardRef((props, ref) => <Link to="/galeria" {...props} />);
const NoticiasLink = React.forwardRef((props, ref) => <Link to="/noticias" {...props} />);
const ContactoLink = React.forwardRef((props, ref) => <Link to="/contacto" {...props} />);

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }
    render() {
        return (
            <div>
                <AppBar position="sticky" style={style.headerStyle}>
                    <Toolbar style={style.toolbarStyle}>
                    <ButtonGroup fullWidth>
                            <Button component={HomeLink} style={style.buttonStyle}>Inicio</Button>
                            <Button component={NosotrosLink} style={style.buttonStyle}>Nosotros</Button>
                            <Button component={ServiciosLink} style={style.buttonStyle}>Servicios</Button>
                            <Button component={ProductosLink} style={style.buttonStyle}>Productos</Button>
                            <Button component={GaleriaLink} style={style.buttonStyle}>Galería</Button>
                            <Button component={ContactoLink} style={style.buttonStyle}>Contacto</Button>
                            <Button component={NoticiasLink} style={style.buttonStyle}>Noticias</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <img src='/images/logo.png' alt="bcstech_logo" height="150px" />
                    </Grid>
                </Grid>
            </div>

        );
    }
}
export default Header;