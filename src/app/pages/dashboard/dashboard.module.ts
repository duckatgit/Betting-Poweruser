import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { DashboardsModule } from "../../_metronic/partials/content/dashboards/dashboards.module";
import { DashboardComponent } from "./dashboard.component";

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
