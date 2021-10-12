import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = [
    "action",
    "position",
    "code",
    "name",
    "Time",
    "matchType",
    "Declare",
    "Won",
  ];

  constructor(private activatedParam: ActivatedRoute) {
    this.activatedParam.data.subscribe((data: any) => {
      this.dataSource = data.matchList;
    });
  }

  ngOnInit(): void {}
  getMatchType(type) {
    switch (type) {
      case 1:
        return "One Day";
      case 2:
        return "Test Match";
      case 3:
        return "T20";
    }
  }
}
