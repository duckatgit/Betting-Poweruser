import { Component, OnInit } from "@angular/core";
import { MatchscoreService } from "src/app/modules/auth/_services/matchscore.service";
interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-assign-role",
  templateUrl: "./assign-role.component.html",
  styleUrls: ["./assign-role.component.scss"],
})
export class AssignRoleComponent implements OnInit {
  matchscore: any = "";
  Role: Role[] = [
    { value: "0", viewValue: "Update Match Bets" },
    { value: "1", viewValue: "Update Session Bets " },
    { value: "2", viewValue: "Update Score" },
  ];
  constructor(private matchscoresvc: MatchscoreService) {}

  ngOnInit(): void {}

  updatematchscore() {
    const scoreobj = this.matchscore;
    this.matchscoresvc.updatematchscore(scoreobj).subscribe(
      (response) => {
        if (response) {
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
}
