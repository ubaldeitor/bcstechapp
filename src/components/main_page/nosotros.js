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

class Nosotros extends Component{
    render(){
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img src="/images/nosotros_img.png" alt="Nosotros" width="100%"/>
                    </Grid>
                    <Grid item xs={12}>
                        <h3 style={style.contactTitle}>Nosotros</h3>
                        <p style={style.textContent}>En diversos países los sistemas de videovigilancia con dispositivos electrónicos son
una práctica que va en aumento. El incremento de la violencia y la inseguridad son
dos de los principales factores que impulsan el uso de videocámaras como apoyo a
la función de seguridad tanto en espacios públicos como privados.</p>
<p style={style.textContent}>
El mercado de la tecnología de seguridad ha crecido de manera exponencial,
se han creado nuevos y mejores dispositivos y otros se han ido perfeccionando.</p>
<p style={style.textContent}>Bcstech le ofrece el diseño y ejecución de sus proyectos de videovigilancia bajo los mejores estándares de calidad y 
funcionalidad. Podemos recomendarle soluciones y adaptarnos a su presupuesto. </p>
<p style={style.textContent}>Además de la instalación de equipos de seguridad y videovigilancia, también podemos ayudarle en la 
instalación de equipos solares para el ahorro de energía eléctrica en su hogar o empresa.  
</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Nosotros;