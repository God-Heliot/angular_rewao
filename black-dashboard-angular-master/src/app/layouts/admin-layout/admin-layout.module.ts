import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { UserComponent } from "../../pages/user/user.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TiendaComponent } from 'src/app/pages/tienda/tienda.component';
import { HistoriaComponent } from 'src/app/pages/historia/historia.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    IconsComponent,
    TiendaComponent,
    HistoriaComponent,
  ]
})
export class AdminLayoutModule {}
