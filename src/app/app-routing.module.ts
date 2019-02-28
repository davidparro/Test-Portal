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
import { ProcedimientosComponent } from './componentes/procedimientos/procedimientos.component';
import { SuscripcionesComponent } from './componentes/suscripciones/suscripciones.component';
import { TestGuardGuard } from './guards/test-guard.guard';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'notificaciones',
        data: {
            title: 'Notificaciones'
        },
        children: [
            {
                path: '',
                component: NotificacionesListadoComponent,
                canActivate: [TestGuardGuard]
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
                component: ComunicacionesListadoComponent,
                canActivate: [TestGuardGuard]
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
        component: ProcedimientosComponent
    },
    {
        path: 'suscripciones',
        component: SuscripcionesComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
