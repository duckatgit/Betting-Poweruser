import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatchService } from "../modules/auth/_services/creatematch.service";
import { AssignRoleComponent } from "./assign-role/assign-role.component";
import { CeatePoweruserComponent } from "./ceate-poweruser/ceate-poweruser.component";
import { PowerUserComponent } from "./power-user/power-user.component";
import { PowerUser1Component } from "./power-user1/power-user1.component";
import { UpdateMatchScoreComponent } from "./update-match-score/update-match-score.component";
import { UpdateSessionComponent } from "./update-session/update-session.component";
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
        resolve: {
          matchList: MatchService,
        },
      },
      {
        path: "builder",
        loadChildren: () =>
          import("./builder/builder.module").then((m) => m.BuilderModule),
      },
      {
        path: "match-bet/:id",
        component: PowerUserComponent,
        resolve: {
          matchList: MatchService,
        },
      },
      {
        path: "assign-role",
        component: AssignRoleComponent,
      },
      {
        path: "create-poweruser",
        component: CeatePoweruserComponent,
      },
      {
        path: "poweruser1",
        component: PowerUser1Component,
      },
      {
        path: "updatesession/:id",
        component: UpdateSessionComponent,
        resolve: {
          matchList: MatchService,
        },
      },
      {
        path: "updatescore/:id",
        component: UpdateMatchScoreComponent,
        resolve: {
          matchList: MatchService,
        },
      },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "user-profile",
        loadChildren: () =>
          import("../modules/user-profile/user-profile.module").then(
            (m) => m.UserProfileModule
          ),
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
