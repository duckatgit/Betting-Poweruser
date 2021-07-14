import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PowerUserComponent } from "./power-user/power-user.component";
import { PowerUser1Component } from "./power-user1/power-user1.component";
import { UpdateScoreComponent } from "./update-score/update-score.component";
import { LayoutComponent } from "./_layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "builder",
        loadChildren: () =>
          import("./builder/builder.module").then((m) => m.BuilderModule),
      },
      {
        path: "poweruser",
        component: PowerUserComponent,
      },
      {
        path: "poweruser1",
        component: PowerUser1Component,
      },
      {
        path: "updatescore",
        component: UpdateScoreComponent,
      },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "error/404",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
