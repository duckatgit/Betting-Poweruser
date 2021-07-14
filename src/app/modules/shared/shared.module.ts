import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { NgxStripeModule } from "ngx-stripe";
import { environment } from "../../../environments/environment";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSortModule } from "@angular/material/sort";
import { CRUDTableModule } from "../../_metronic/shared/crud-table";
import { InlineSVGModule } from "ng-inline-svg";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatMenuModule } from "@angular/material/menu";
// import { NgxMaskModule, IConfig } from "ngx-mask";
import { DragDropModule } from "@angular/cdk/drag-drop";
// import { ChartsModule } from "ng2-charts";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
// import { NgxSliderModule } from "@angular-slider/ngx-slider";

// const stripeKey = environment.stripeKey;
// export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    MatMenuModule,
    // NgxStripeModule.forRoot(stripeKey),
    // NgxMaskModule.forRoot(),
    DragDropModule,
    // ChartsModule,
    // NgxSliderModule,
  ],
  exports: [
    MatDialogModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRippleModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxStripeModule,
    InlineSVGModule,
    CRUDTableModule,
    MatMenuModule,
    // NgxMaskModule,
    DragDropModule,
    // ChartsModule,
    // NgxSliderModule,
  ],
})
export class SharedModule {}
