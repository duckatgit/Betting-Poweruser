import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/modules/auth/_services/user.service";
import { ROLES } from "src/app/modules/shared/enums/roles";
@Component({
  selector: "app-assign-role",
  templateUrl: "./assign-role.component.html",
  styleUrls: ["./assign-role.component.scss"],
})
export class AssignRoleComponent implements OnInit {
  user: any = -1;
  role: any = [-1];
  roles = ROLES;
  constructor(
    private toastR: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  assignRole() {
    if (this.user < 0) {
      this.toastR.error("Please Select any user");
      return;
    }
    if (this.role < 0) {
      this.toastR.error("Please Select any role");
      return;
    } else {
      const roleObj = {
        userId: this.user,
        roles: this.role,
      };
      this.userService.assignRoles(roleObj).subscribe(
        (response) => {
          this.user = -1;
          this.role = [-1];
          this.toastR.success("Session Status updated Successfully");
        },
        (error) => {
          this.toastR.error("Something Went Wrong! Please try again");
        }
      );
    }
  }
}
