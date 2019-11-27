import React from 'react';
import { Component } from "react";
import { Grid } from "@material-ui/core";

class Productos extends Component{
    render(){
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img src="/images/productos_img.png" alt="Productos" width="100%"/>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>Nuestros Productos</h3>
                        <p>A menudo, la decisión de instalar un sistema de vigilancia suele producirse tras haber vivido una experiencia desagradable. Cuando en un comercio desaparece mercancía constantemente o la seguridad personal está amenazada por actos violentos, surge el deseo de protegerse mejor y se instala un sistema de videovigilancia.
Es la mejor opción para la protección y seguridad, ya que se adapta perfectamente al problema planteado in situ. No solo se beneficiará del esclarecimiento de los hechos, sino también del efecto disuasorio que tiene contra ladrones potenciales. En caso de que suceda algo, el sistema le ayuda a mantener la perspectiva y pedir auxilio rápidamente.
Los sistemas de vídeo también son adecuados, por ejemplo, para controlar los procesos automáticos de producción o vigilar paquetes en la cadena de envío, ya que contribuyen valiosamente a la optimización del proceso y a asegurar la calidad.</p>
Conozca nuestros productos para estas problemáticas <a href="/#">aquí</a>.
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Productos;