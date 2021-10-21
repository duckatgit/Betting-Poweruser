import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MatchService } from "src/app/modules/auth/_services/creatematch.service";

@Component({
  selector: "app-power-user",
  templateUrl: "./power-user.component.html",
  styleUrls: ["./power-user.component.scss"],
})
export class PowerUserComponent implements OnInit {
  displayedColumns: string[] = [
    "action",
    "khai",
    "Lagai",
    "updatebtn",
    // "lockallbtn",
    // "unlockallbtn",
    "matchstatus",
  ];
  dataSource: any[];
  constructor(
    private matchService: MatchService,
    private activatedParam: ActivatedRoute,
    private toastR: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activatedParam.paramMap.subscribe((params: any) => {
      if (params?.params?.id) {
        const currentMatch = this.matchService.getMatchById(params?.params?.id);
        this.handleMatchData(currentMatch);
      }
    });
  }
  handleMatchData(currentMatch: any) {
    this.dataSource = [
      {
        teams: [],
        teamId: -1,
        locked: false,
        matchId: currentMatch.matchId,
        khai: null,
        lagai: null,
      },
    ];
    this.dataSource.push(...currentMatch.matchTeamBets);
    this.dataSource.map((data) => {
      data.teams = currentMatch.teams;
    });
  }

  update(element) {
    if (
      element.khai &&
      element.lagai &&
      element.matchId &&
      element.teamId &&
      element.khai > element.lagai
    ) {
      const data = {
        khai: Number(element.khai),
        lagai: Number(element.lagai),
        matchId: element.matchId,
        teamId: element.teamId,
      };
      this.matchService.updateMatchBet(data).subscribe(
        (response) => {
          this.handleMatchData(response);
          this.cdr.detectChanges();
          this.toastR.success("Rate updated Successfully");
        },
        (error) => {
          this.toastR.error("Something Went Wrong! Please try again");
        }
      );
    } else {
      element.error = true;
    }
  }
  lockall() {}
  unlockall() {}
  upateStatus(element, status) {
    const data = {
      matchId: element.matchId,
      teamId: element.teamId,
      locked: status,
    };
    this.matchService.loackMatchBet(data).subscribe((response) => {
      this.toastR.success("Status updated Successfully");
    });
  }
}
