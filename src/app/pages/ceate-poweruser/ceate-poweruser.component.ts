import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/modules/auth/_services/user.service";

@Component({
  selector: "app-ceate-poweruser",
  templateUrl: "./ceate-poweruser.component.html",
  styleUrls: ["./ceate-poweruser.component.scss"],
})
export class CeatePoweruserComponent implements OnInit {
  Createuserform;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastR: ToastrService
  ) {
    this.Createuserform = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const userobj = this.Createuserform.value;
    userobj.role = {
      roleId: 6,
      roleName: "POWER_USER",
    };
    if (this.Createuserform.valid) {
      this.userService.createUser(userobj).subscribe(
        (response) => {
          this.toastR.success("User Created Successfully");
          this.Createuserform.reset();
        },
        (error) => {
          this.toastR.error("Something Went Wrong! Please try again");
        }
      );
    } else {
      this.Createuserform.markAllAsTouched();
    }
  }
}
