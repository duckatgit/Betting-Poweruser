import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  NgbDropdownModule,
  NgbProgressbarModule,
} from "@ng-bootstrap/ng-bootstrap";
import { InlineSVGModule } from "ng-inline-svg";
import { TranslationModule } from "../modules/i18n/translation.module";
import { SharedModule } from "../modules/shared/shared.module";
import { CoreModule } from "../_metronic/core";
import { ExtrasModule } from "../_metronic/partials/layout/extras/extras.module";
import { SubheaderModule } from "../_metronic/partials/layout/subheader/subheader.module";
import { AssignRoleComponent } from "./assign-role/assign-role.component";
import { CeatePoweruserComponent } from "./ceate-poweruser/ceate-poweruser.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { PowerUserComponent } from "./power-user/power-user.component";
import { PowerUser1Component } from "./power-user1/power-user1.component";
import { UpdateScoreComponent } from "./update-score/update-score.component";
import { AsideDynamicComponent } from "./_layout/components/aside-dynamic/aside-dynamic.component";
import { AsideComponent } from "./_layout/components/aside/aside.component";
import { FooterComponent } from "./_layout/components/footer/footer.component";
import { HeaderMobileComponent } from "./_layout/components/header-mobile/header-mobile.component";
import { HeaderMenuDynamicComponent } from "./_layout/components/header/header-menu-dynamic/header-menu-dynamic.component";
import { HeaderMenuComponent } from "./_layout/components/header/header-menu/header-menu.component";
import { HeaderComponent } from "./_layout/components/header/header.component";
import { LanguageSelectorComponent } from "./_layout/components/topbar/language-selector/language-selector.component";
import { TopbarComponent } from "./_layout/components/topbar/topbar.component";
import { ScriptsInitComponent } from "./_layout/init/scipts-init/scripts-init.component";
import { LayoutComponent } from "./_layout/layout.component";
import { UpdateMatchScoreComponent } from './update-match-score/update-match-score.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ScriptsInitComponent,
    HeaderMobileComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    TopbarComponent,
    LanguageSelectorComponent,
    AsideDynamicComponent,
    HeaderMenuDynamicComponent,
    PowerUserComponent,
    PowerUser1Component,
    UpdateScoreComponent,
    AssignRoleComponent,
    CeatePoweruserComponent,
    UpdateMatchScoreComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslationModule,
    InlineSVGModule,
    ExtrasModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    CoreModule,
    SubheaderModule,
    SharedModule,
  ],
})
export class LayoutModule {}
