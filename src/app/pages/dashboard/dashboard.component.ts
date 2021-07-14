import { Component, OnInit } from "@angular/core";

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

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    code: 1139,
    Date: "6-7-2021",
    name: "Test Match Demo",
    Time: "11:30 PM",
    matchType: "Test Match",
    Declare: "No",
    Won: "No",
  },
  {
    position: 2,
    code: 1180,
    Date: "6-7-2021",
    name: "Match Demo",
    Time: "11:30 PM",
    matchType: "One day Match",
    Declare: "Yes",
    Won: "Draw",
  },
  {
    position: 3,
    code: 894,
    Date: "6-7-2021",
    name: "Test Demo",
    Time: "11:30 PM",
    matchType: "T20",
    Declare: "No",
    Won: "No",
  },
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    "action",
    "position",
    "code",
    "Date",
    "name",
    "Time",
    "matchType",
    "Declare",
    "Won",
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
  ActionIcon() {}
}
