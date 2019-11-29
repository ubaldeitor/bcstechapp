import React from 'react';
import { Component } from "react";
import { Grid, TextField, Button } from '@material-ui/core';

const style={
    contactTitle:{
        fontFamily: "Raleway"
    },
    textContent: {
        fontFamily: "Lato"
    }
}

class Contacto extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img src="/images/contacto.jpg" alt="Contacto" width='100%'></img>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <div>
                            <h3 style={style.contactTitle}>Contacto</h3>
                        </div>
                        <div><p style={style.textContent}>Paseo de la reforma #1055
                                        Col. Lomas del Marqués
                                        Querétaro, Qro. C.P.76146<br />
                                Tel.: (442) 243 5036 <br />
                                Cel.: (442) 186 0075 <br />
                                bcstech.com.mx <br />
                                info@bcstech.com.mx<br />
                            </p></div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                            <div>
                                <form>
                                    <div>
                                        <TextField
                                        required
                                        id="nombretxt"
                                        label="Nombre"
                                        defaultValue="Nombre"
                                        margin="normal"/>
                                        <TextField 
                                        id="numerotxt"
                                        label="Número"
                                        defaultValue="Teléfono"
                                        margin="normal"/>
                                        <TextField 
                                        id="correotxt"
                                        label="Correo Electrónico"
                                        defaultValue="Correo Electrónico"
                                        margin="normal"/>
                                        <TextField 
                                        id="titulotxt"
                                        label="Título"
                                        defaultValue="Asunto"
                                        margin="normal"/>
                                        <TextField 
                                        id="msgtxt"
                                        label="Mensaje"
                                        defaultValue="Mensaje"
                                        margin="normal"/>
                                        <Button>Enviar</Button>
                                    </div>
                                </form>
                            </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Contacto;