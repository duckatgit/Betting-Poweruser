import { Component, OnInit } from "@angular/core";
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
  Role: Role[] = [
    { value: "0", viewValue: "Update Match Bets" },
    { value: "1", viewValue: "Update Session Bets " },
    { value: "2", viewValue: "Update Score" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
