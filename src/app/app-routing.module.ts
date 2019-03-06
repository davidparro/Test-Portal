import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificacionesListadoComponent } from './componentes/notificaciones/listado/notificaciones.component';
import { ComunicacionesListadoComponent } from './componentes/comunicaciones/listado/comunicaciones.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NotifiacionesEditarComponent } from './componentes/notificaciones/editar/editar.component';
import { NotificacionesNuevaComponent } from './componentes/notificaciones/nueva/nueva.component';
import { ComunicacionesNuevaComponent } from './componentes/comunicaciones/nueva/nueva.component';
import { ComunicacionesEditarComponent } from './componentes/comunicaciones/editar/editar.component';
import { GestionEstadisticasComponent } from './componentes/gestion/estadisticas/estadisticas.component';
import { GestionNotificacionesComponent } from './componentes/gestion/notificaciones/notificaciones.component';
import { GestionComunicacionesComponent } from './componentes/gestion/comunicaciones/comunicaciones.component';
import { GestionProcedimientosComponent } from './componentes/gestion/procedimientos/procedimientos.component';
import { ProcedimientosComponent } from './componentes/procedimientos/consulta/procedimientos.component';
import { BecComponent } from './componentes/bec/bec.component';
import { BecBorrarComponent } from './componentes/bec/borrar/borrar.component';
import { BecEditarComponent } from './componentes/bec/editar/editar.component';
import { BecCrearComponent } from './componentes/bec/crear/crear.component';
import { ProcedimientosBajaComponent } from './componentes/procedimientos/baja/baja.component';
import { ProcedimientossAltaComponent } from './componentes/procedimientos/alta/alta.component';
import { ProcedimientosCondicionesComponent } from './componentes/procedimientos/condiciones/condiciones.component';
import { ProcedimientosSuscripcionesComponent } from './componentes/procedimientos/suscripciones/suscripciones.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'bec',
        component: BecComponent,
        children: [
            {
                path: 'editar/:id',
                component: BecEditarComponent
            },
            {
                path: 'crear',
                component: BecCrearComponent
            },
            {
                path: 'borrar',
                component: BecBorrarComponent
            }
        ]
    },
    {
        path: 'notificaciones',
        data: {
            title: 'Notificaciones'
        },
        children: [
            {
                path: '',
                component: NotificacionesListadoComponent
            },
            {
                path: 'editar/:id',
                component: NotifiacionesEditarComponent
            },
            {
                path: 'nueva',
                component: NotificacionesNuevaComponent
            }
        ]
    },
    {
        path: 'comunicaciones',
        children: [
            {
                path: '',
                component: ComunicacionesListadoComponent
            },
            {
                path: 'editar/:id',
                component: ComunicacionesEditarComponent
            },
            {
                path: 'nueva',
                component: ComunicacionesNuevaComponent
            }
        ]
    },
    {
        path: 'gestion',
        children: [
            {
                path: 'notificaciones',
                component: GestionNotificacionesComponent,
            },
            {
                path: 'comunicaciones',
                component: GestionComunicacionesComponent
            },
            {
                path: 'procedimientos',
                component: GestionProcedimientosComponent
            },
            {
                path: 'estadisticas',
                component: GestionEstadisticasComponent
            }
        ]
    },
    {
        path: 'procedimientos',
        children: [
            {
                path: 'condiciones',
                component: ProcedimientosCondicionesComponent
            },
            {
                path: 'consulta',
                component: ProcedimientosComponent
            },
            {
                path: 'suscripciones',
                component: ProcedimientosSuscripcionesComponent
            },
            {
                path: 'alta',
                component: ProcedimientossAltaComponent
            },
            {
                path: 'baja',
                component: ProcedimientosBajaComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
