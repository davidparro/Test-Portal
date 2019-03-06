import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/generales/menu/menu.component';
import { FooterComponent } from './componentes/generales/footer/footer.component';
import { ElementScrollPercentageDirective } from './directivas/element-scroll-percentage.directive';
import { ComunicacionesListadoComponent } from './componentes/comunicaciones/listado/comunicaciones.component';
import { NotificacionesListadoComponent } from './componentes/notificaciones/listado/notificaciones.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NotificacionesNuevaComponent } from './componentes/notificaciones/nueva/nueva.component';
import { NotifiacionesEditarComponent } from './componentes/notificaciones/editar/editar.component';
import { ComunicacionesNuevaComponent } from './componentes/comunicaciones/nueva/nueva.component';
import { ComunicacionesEditarComponent } from './componentes/comunicaciones/editar/editar.component';
import { GestionNotificacionesComponent } from './componentes/gestion/notificaciones/notificaciones.component';
import { GestionComunicacionesComponent } from './componentes/gestion/comunicaciones/comunicaciones.component';
import { GestionEstadisticasComponent } from './componentes/gestion/estadisticas/estadisticas.component';
import { GestionProcedimientosComponent } from './componentes/gestion/procedimientos/procedimientos.component';
import { ProcedimientosComponent } from './componentes/procedimientos/consulta/procedimientos.component';
import { SuscripcionesComponent } from './componentes/suscripciones/suscripciones.component';
import { BecComponent } from './componentes/bec/bec.component';
import { BecCrearComponent } from './componentes/bec/crear/crear.component';
import { BecBorrarComponent } from './componentes/bec/borrar/borrar.component';
import { BecEditarComponent } from './componentes/bec/editar/editar.component';
import { ProcedimientosCondicionesComponent } from './componentes/procedimientos/condiciones/condiciones.component';
import { ProcedimientosSuscripcionesComponent } from './componentes/procedimientos/suscripciones/suscripciones.component';
import { ProcedimientossAltaComponent } from './componentes/procedimientos/alta/alta.component';
import { ProcedimientosBajaComponent } from './componentes/procedimientos/baja/baja.component';

@NgModule({
    declarations: [
        AppComponent,
        ElementScrollPercentageDirective,
        MenuComponent,
        FooterComponent,
        ComunicacionesListadoComponent,
        NotificacionesListadoComponent,
        NotificacionesNuevaComponent,
        NotifiacionesEditarComponent,
        NotFoundComponent,
        InicioComponent,
        ComunicacionesNuevaComponent,
        ComunicacionesEditarComponent,
        GestionNotificacionesComponent,
        GestionComunicacionesComponent,
        GestionEstadisticasComponent,
        GestionProcedimientosComponent,
        ProcedimientosComponent,
        SuscripcionesComponent,
        BecComponent,
        BecCrearComponent,
        BecBorrarComponent,
        BecEditarComponent,
        ProcedimientosCondicionesComponent,
        ProcedimientosSuscripcionesComponent,
        ProcedimientossAltaComponent,
        ProcedimientosBajaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
