import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashboardsModule } from "../../_metronic/partials/content/dashboards/dashboards.module";
import { SharedModule } from "src/app/modules/shared/shared.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent,
      },
    ]),
    DashboardsModule,
  ],
})
export class DashboardModule {}
