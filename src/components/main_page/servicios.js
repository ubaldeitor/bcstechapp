import React from 'react';
import { Component } from "react";
import { Grid } from "@material-ui/core";

const style={
    contactTitle:{
        fontFamily: "Raleway"
    },
    textContent: {
        fontFamily: "Lato"
    }
}


class Servicios extends Component{
    render(){
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img src="/images/servicios_img.png" alt="Servicios" width="100%"/>
                    </Grid>
                    <Grid item xs={12}>
                        <h3 style={style.contactTitle}>Servicios</h3>
                        <h4 style={style.contactTitle}>Instalación</h4>
                        <p style={style.textContent}>Realizamos la instalación de sistemas de video vigilancia en hogar, oficina e industria, sin embargo
                            esta instalación no solo es a nivel físico (cableado), sino también realizamos la configuración 
                            del software necesario para realizar la videovigilancia de manera local y remota a traves de su red de 
                            datos.
                        </p>
                        <h4 style={style.contactTitle}>Diseño</h4>
                        <p style={style.textContent}>Escuchamos su necesidad y podemos planear su proyecto, olvídese de cables colgados como un
                            tendedero y obtenga una verdadera red de datos, bien planteada y bien montada. </p>
                        <h4 style={style.contactTitle}>Consultoria</h4>
                        <p style={style.textContent}>Acérquese a nosotros y háblemos de su proyecto, para que podamos recomendarle el producto 
                            adecuado a su necesidad o que se ajuste mejor a su presupuesto. 
                        </p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Servicios;