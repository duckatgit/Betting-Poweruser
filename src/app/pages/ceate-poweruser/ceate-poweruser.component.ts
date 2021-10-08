import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-ceate-poweruser",
  templateUrl: "./ceate-poweruser.component.html",
  styleUrls: ["./ceate-poweruser.component.scss"],
})
export class CeatePoweruserComponent implements OnInit {
  Createuserform;
  constructor(private fb: FormBuilder) {
    this.Createuserform = this.fb.group({
      username: ["", [Validators.required]],
      Password: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const userobj = this.Createuserform.value;
    if (this.Createuserform.valid) {
      console.log(this.Createuserform.value);
    } else {
      this.Createuserform.markAllAsTouched();
    }
  }
}
