import React from 'react'; 
import { Component } from 'react';
import { Grid, 
    Divider, 
    CardContent, 
    Typography, Card, CardMedia, CardHeader }  from '@material-ui/core';

    const style = {
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
          }
    };


class Home extends Component {
    render() {
        return (
            <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src="/images/main_img.png" width="100%" alt="main_img" />
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Bienvenido a Bcstech</h1>
                        <p>BCSTech es su aliado en el diseño e implementación de soluciones de seguridad para <br/>
                        su hogar o empresa. Además ejecutamos proyectos que requieren la instalación de páneles y<br />
                        calentadores solares.</p>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card>
                        <CardHeader title="Videovigilancia" />
                        <CardMedia style={style.media} image="../images/video_img.png" title="Videovigilancia" />
                        <CardContent>
                        <Typography component="p">¡Que la delincuencia no te sorprenda! Utiliza la tecnología en sistemas de seguridad que te ofrecemos para monitorear 
                            los movimientos que hay en las áreas que más te preocupa salvaguardar, con nuestras cámaras de vigilancia y grabadores 
                            (DVR) para circuito cerrado de televisión (CCTV).</Typography>
                            <Typography component="p">Vigila en todo momento tu casa o negocio a través de Internet, 
                            desde tu Smartphone, Tablet o laptop.</Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}  lg={3}>
                    <Card>
                        <CardHeader title="Paneles Solares" />
                        <CardMedia style={style.media} image="images/solar_img.png" title="Energía Solar"/>
                        <CardContent>
                        <Typography componet="p">La energía del sol es captada por los paneles solares y convertida para ser utilizada en tu casa, negocio o industria. 
                            Además, se generan excedentes los cuales son enviados a la red de CFE, la cual será contabilizada a tu favor a través 
                            de un medidor bi-direccional. </Typography><Typography>
                            Estos excedentes son devueltos por la CFE en las horas de la noche, sin ningún costo, como compensación por la energía 
                            inyectada durante el día. Este esquema permite obtener ahorros de hasta 98% en tu recibo de luz.</Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}  lg={3}>
                        <Card>
                            <CardHeader title="Redes de Datos"/>
                        <CardMedia style={style.media} image="images/red_datos_img.png" title="Redes de datos" />
                        <CardContent><Typography component="p">Una red de datos es un proceso de comunicación electrónica que permite la transmisión ordenada y la recepción de datos, 
                            tales como cartas, hojas de cálculo y otros tipos de documentos. Lo que diferencia a este tipo de red, aparte de otras 
                            formas de comunicación, tales como una red de audio, es que está configurada para transmitir sólo datos. Esto es en 
                            contraste con el audio o red de voz, que se emplea a menudo tanto para las comunicaciones de voz y la transmisión de datos, 
                            tales como una transmisión de facsímil.</Typography></CardContent> 
                        </Card>     
                    </Grid>
                    <Grid item xs={12}  lg={3}>
                        <Card>
                        <CardHeader title="Redes de Telefonía y Voz"/>
                        <CardMedia style={style.media} image="images/red_voz_img.png" title="Redes de voz"/>
                        <CardContent>
                        <Typography component="p">Hoy en día, la convergencia de las comunicaciones de empresa - voz, datos y video - en una única red IP es una 
                            tendencia imparable. Esto es debido a que las soluciones que integran voz y datos, aportan importantes beneficios 
                            para las empresas y sus usuarios.
                            </Typography>
                            <Typography component="p">
                             Sin embargo, una red convergente multiservicio debe estar correctamente diseñada y gestionada, puesto que 
                             se convierte en un elemento mucho más crítico al soportar todas las comunicaciones de empresa.
                             </Typography>
                        </CardContent>    
                        </Card>
                        </Grid>
                </Grid>
        );
    }
}

export default Home;
