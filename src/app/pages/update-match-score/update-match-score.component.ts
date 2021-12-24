import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/modules/auth";
import { MatchService } from "src/app/modules/auth/_services/creatematch.service";

@Component({
  selector: "app-update-match-score",
  templateUrl: "./update-match-score.component.html",
  styleUrls: ["./update-match-score.component.scss"],
})
export class UpdateMatchScoreComponent implements OnInit {
  currentMatch: any;
  constructor(
    private matchService: MatchService,
    private activatedParam: ActivatedRoute,
    private toastR: ToastrService,
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedParam.paramMap.subscribe((params: any) => {
      if (params?.params?.id) {
        this.currentMatch = this.matchService.getMatchById(params?.params?.id);
      }
    });
  }
}
