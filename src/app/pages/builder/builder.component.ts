import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/modules/auth";
import { MatchService } from "src/app/modules/auth/_services/creatematch.service";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.scss"],
})
export class BuilderComponent implements OnInit {
  Creatematchform: FormGroup;
  teams: any[] = [
    { teamName: "Team 1", teamControl: "team01" },
    { teamName: "Team 2", teamControl: "team02" },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private creatematchsvc: MatchService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.Creatematchform = this.fb.group({
      matchName: ["", [Validators.required]],
      dateTime: ["", [Validators.required]],
      team01: ["", [Validators.required]],
      team02: ["", [Validators.required]],
      team03: [""],
      team04: [""],
      team05: [""],
      team06: [""],
      team07: [""],
      team08: [""],
      team09: [""],
      team10: [""],
      team11: [""],
      team12: [""],
      matchType: [0, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(["/dashboard"]);
  }

  addTeam() {
    let count = this.teams.length;
    if (count < 12) {
      count = count + 1;
      this.teams.push({
        teamName: "Team " + count,
        teamControl: "team" + (count < 10 ? "0" : "") + count,
      });
    } else {
      this.toastr.error("Max 12 team can be selected");
    }
  }

  removeTeam() {
    this.teams.pop();
  }

  onSubmit() {
    const matchobj = this.Creatematchform.value;
    if (this.Creatematchform.valid) {
      const matchObj = this.Creatematchform.value;
      matchObj.dateTime = new Date(
        this.Creatematchform.controls.dateTime.value
      ).toISOString();
      matchObj.createdBy = this.authService.currentUserValue.userId;
      matchObj.matchMaxAmount = 5000;
      matchObj.sessionMaxAmount = 1000;
      matchObj.streamId = 1;
      matchObj.status = true;
      matchObj.matchDelayTime = 5;
      matchObj.sessionDelayTime = 5;
      matchObj.matchCast = 1;
      this.creatematchsvc.creatematch(matchobj).subscribe(
        (response) => {
          this.toastr.success("Match Created Successfully");
          this.Creatematchform.reset();
        },
        (error) => {
          console.log("error", error);
        }
      );
    } else {
      this.Creatematchform.markAllAsTouched();
    }
  }
}
