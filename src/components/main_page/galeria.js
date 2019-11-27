import React from 'react';
import { Component } from "react";
import { Grid } from "@material-ui/core";

class Galeria extends Component{
    render(){
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img src="" alt="Galeria"/>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>Nuestros Productos</h3>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Galeria;