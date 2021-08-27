import { Component, OnInit } from "@angular/core";
import { SessionService } from "src/app/modules/auth/_services/session.service";

@Component({
  selector: "app-update-score",
  templateUrl: "./update-score.component.html",
  styleUrls: ["./update-score.component.scss"],
})
export class UpdateScoreComponent implements OnInit {
  obj: any = "";
  constructor(private sessionsvc: SessionService) {}

  ngOnInit(): void {}
  getsession() {
    // const obj = id;
    this.sessionsvc.createsession(this.obj).subscribe(
      (response) => {
        if (response) {
          console.log("response", response);
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

  Updatesession() {
    this.sessionsvc.sessionupdate(this.obj).subscribe(
      (response) => {
        console.log("response", response);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
}
