import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatchService } from "src/app/modules/auth/_services/creatematch.service";

export interface PeriodicElement {
  code: number;
  name: string;
  position: number;
  Time: string;
  matchType: string;
  Date: string;
  Declare: string;
  Won: string;
  // action:any;
}

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
    private activatedParam: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {this.activatedParam.paramMap.subscribe((params: any) => {
    if (params?.params?.id) {
      this.dataSource = this.matchService.getMatchById(params?.params?.id);
    }
  });}

  update() {
    const data={'khai':Number(this.dataSource[0].khai),'lagai':Number(this.dataSource[0].khai),'matchId':this.dataSource[0].matchId}
    this.matchService.updateMatchBet(data).subscribe((response)=>{
      console.log(response)
    })
  }
  lockall() {}
  unlockall() {}
  lock() {}
  open() {}
}
