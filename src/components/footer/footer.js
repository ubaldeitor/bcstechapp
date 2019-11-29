import React from 'react';
import { Component } from "react";
import { Grid } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const style = {
    footerMain:{
        backgroundColor:'#424242',
        color:'#ffffff'
    },
    footerAlert:{
        backgroundColor: '#FDC300',
        color:'#ffffff',
        fontFamily: "Raleway"
    },
    footerTitle:{
        fontFamily: "Raleway"
    },
    footerItem: {
        fontFamily: "Lato"
    }
}
class Footer extends Component {    
    render() {
        return (
            <Grid container style={style.footerMain} spacing={2}>
                <Grid item xs={4}>
                    <h3 style={style.footerTitle}>Dirección</h3>
                    <p style={style.footerItem}>Paseo de la Reforma #1055<br />
                        Col. Lomas del Marqués<br />
                        Querétaro, Qro. C. P. 76146</p>
                    <p style={style.footerItem}>Tel.: (442) 243 5036</p>
                    <p style={style.footerItem}>Cel.: (442) 186 0075</p>
                </Grid>
                <Grid item xs={4}>
                    <h3 style={style.footerTitle}>Menú de Navegación</h3>
                    <ul>
                        <li style={style.footerItem}>Inicio</li>
                        <li style={style.footerItem}>Nosotros</li>
                        <li style={style.footerItem}>Servicios</li>
                        <li style={style.footerItem}>Galería</li>
                        <li style={style.footerItem}>Productos</li>
                        <li style={style.footerItem}>Contacto</li>
                    </ul>
                </Grid>
                <Grid item xs={4}>
                    <h3 style={style.footerTitle}>Compartir en ...</h3>
                    <FacebookIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                    <InstagramIcon />
                </Grid>
                <Grid item xs={12} style={style.footerAlert}>
                    <p>@2019 BCStech. Todos los derechos reservados. Powered by Ubainternet.com</p>
                </Grid>
            </Grid>
        );
    }
}

export default Footer;