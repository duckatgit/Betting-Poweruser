import { Component, OnInit } from "@angular/core";
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
    "lockallbtn",
    "unlockallbtn",
    "matchstatus",
  ];
  dataSource = [];
  constructor(
    private matchService: MatchService,
    private activatedParam: ActivatedRoute,
    private toastR: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedParam.paramMap.subscribe((params: any) => {
      if (params?.params?.id) {
        this.dataSource = this.matchService.getMatchById(params?.params?.id);
      }
    });
  }

  update(element) {
    if (element.khai && element.lagai && element.matchId && element.teamId) {
      const data = {
        khai: Number(element.khai),
        lagai: Number(element.lagai),
        matchId: element.matchId,
        teamId: element.teamId,
      };
      this.matchService.updateMatchBet(data).subscribe((response) => {
        this.toastR.success("Rate updated Successfully");
      });
    } else {
      element.error = true;
    }
  }
  lockall() {}
  unlockall() {}
  upateStatus(element, status) {
    const data = {
      matchId: element.matchId,
      status: status,
    };
    // this.matchService.updateMatchStatus(data).subscribe((response) => {
    //   this.toastR.success("Status updated Successfully");
    // });
  }
}
