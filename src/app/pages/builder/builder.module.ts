import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { GeneralModule } from "../../_metronic/partials/content/general/general.module";
// import { BuilderComponent } from './builder.component';
import { BuilderComponent } from "../builder/builder.component";
import { FormsModule } from "@angular/forms";
import { NgbNavModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { HighlightModule } from "ngx-highlightjs";
import { SharedModule } from "src/app/modules/shared/shared.module";

@NgModule({
  declarations: [BuilderComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeneralModule,
    HighlightModule,
    NgbNavModule,
    SharedModule,
    NgbTooltipModule,
    RouterModule.forChild([
      {
        path: "",
        component: BuilderComponent,
      },
    ]),
  ],
})
export class BuilderModule {}
