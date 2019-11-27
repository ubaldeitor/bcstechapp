import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import ButtonAppBarCollapse from "../header/button-appbar-collapse";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from "@material-ui/core";

const style = {
    headerStyle: {
        boxShadow: 'none'
    },
    toolbarStyle: {
        minHeight:'auto'
    },
    buttonStyle: {
        color: "#ffffff",
        backgroundColor: "#757575",
        "&:hover": {
            background: '#00b7f5',
          }
    }
}

const styles = theme => ({
    root: {
    position: 'absolute',
    right: 0
    },
    wrapper: {
    [theme.breakpoints.down('md')] : {
    display: 'none'
    },
    margin:'10px',
    paddingLeft: '16px',
    right: 0,
    position: 'relative',
    width: '100%',
    background: 'transparent'
    },
    listContainer: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
    },
    listMenus: {
    float: 'left'
    },
    listItems: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '6px 8px'
    }
    });
   
const HomeLink = props => <Link to="/" {...props} />
const NosotrosLink = props => <Link to="/nosotros" {...props} />
const ServiciosLink = props => <Link to="/servicios" {...props} />
const ProductosLink = props => <Link to="/productos" {...props} />
const GaleriaLink = props => <Link to="/galeria" {...props} />
const NoticiasLink = props => <Link to="/noticias" {...props} />
const ContactoLink = props => <Link to="/contacto" {...props} />

class AppBarCollapse extends React.Component {
constructor(props){
super(props);
this.state = {
visible: false
}
}
render(){
const classes = this.props.classes;
return (

    <div className={this.props.classes.root}>
    <ButtonAppBarCollapse dataTarget="#appbar-collapse"/>
    <div className={this.props.classes.wrapper} id="appbar-collapse">
    <ButtonGroup fullWidth id="list-appbar-collapse">
    <Button component={HomeLink}>Inicio</Button>
    <Button component={NosotrosLink}>Nosotros</Button>
    <Button  component={ServiciosLink}>Servicios</Button>
    <Button  component={ProductosLink}>Productos</Button>
    <Button component={GaleriaLink}>Galería</Button>
    <Button  component={ContactoLink}>Contacto</Button>
    <Button  component={NoticiasLink}>Noticias</Button>
    </ButtonGroup>
    </div>
    </div>
);
}
}
AppBarCollapse.propTypes = {
classes: PropTypes.object.isRequired
}
export default withStyles(styles)(AppBarCollapse);