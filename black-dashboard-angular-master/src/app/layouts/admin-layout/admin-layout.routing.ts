import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { UserComponent } from "../../pages/user/user.component";
import { TiendaComponent } from 'src/app/pages/tienda/tienda.component';
import { HistoriaComponent } from 'src/app/pages/historia/historia.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "user", component: UserComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "historia", component: HistoriaComponent },
];
