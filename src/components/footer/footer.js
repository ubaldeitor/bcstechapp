import React from 'react';
import { Component } from "react";
import { Grid } from "@material-ui/core";

const style = {
    footerMain:{
        backgroundColor:'#424242',
        color:'#ffffff'
    },
    footerAlert:{
        backgroundColor: '#FDC300',
        color:'#ffffff'
    }
}
class Footer extends Component {    
    render() {
        return (
            <Grid container style={style.footerMain} spacing={2}>
                <Grid item xs={4}>
                    <h2>Dirección</h2>
                    <p>Paseo de la Reforma #1055<br />
                        Col. Lomas del Marqués<br />
                        Querétaro, Qro. C. P. 76146</p>
                    <p>Tel.: (442) 243 5036</p>
                    <p>Cel.: (442) 186 0075</p>
                </Grid>
                <Grid item xs={4}>
                    <h2>Menú de Navegación</h2>
                    <ul>
                        <li>Inicio</li>
                        <li>Nosotros</li>
                        <li>Servicios</li>
                        <li>Galería</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                    </ul>
                </Grid>
                <Grid item xs={4}>
                    <h2>Compartir en ...</h2>
                    <p>f in tw i wsapp</p>
                </Grid>
                <Grid item xs={12} style={style.footerAlert}>
                    <p>@2019 BCStech. Todos los derechos reservados. Powered by Ubainternet.com</p>
                </Grid>
            </Grid>
        );
    }
}

export default Footer;