import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/modules/auth";
import { MatchService } from "src/app/modules/auth/_services/creatematch.service";

@Component({
  selector: "app-update-score",
  templateUrl: "./update-score.component.html",
  styleUrls: ["./update-score.component.scss"],
})
export class UpdateScoreComponent implements OnInit {
  sessionName: any;
  currentMatch: any;
  sessionTeamId: number = -1;
  sessionId: number = -1;
  betResult: string = "-1";
  sessionComment: string = "";
  sessions: any;
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
        this.matchService
          .getSessionList(this.currentMatch.matchId)
          .subscribe((response) => {
            this.sessions = response;
            this.cdr.detectChanges();
          });
      }
    });
  }

  Updatesession(sessionData) {
    if (sessionData.yesRate <= sessionData.noRate) {
      this.toastR.error("Yes Rate must be greater than No rate");
      return;
    } else {
      const session = {
        sessionId: sessionData.sessionId,
        noRate: Number(sessionData.noRate),
        yesRate: Number(sessionData.yesRate),
      };
      this.matchService.sessionupdate(session).subscribe(
        (response) => {
          this.toastR.success("Session Updated Successfully");
        },
        (error) => {
          this.toastR.error("Something Went Wrong! Please try again");
        }
      );
    }
  }
  lockSession(status) {
    if (this.sessionId < 0) {
      this.toastR.error("Please Select any session");
      return;
    } else {
      const session = {
        sessionId: this.sessionId,
        locked: status,
        status: true,
      };
      this.matchService.lockSession(session).subscribe(
        (response) => {
          this.sessionId = -1;
          this.toastR.success("Session Status updated Successfully");
        },
        (error) => {
          this.toastR.error("Something Went Wrong! Please try again");
        }
      );
    }
  }

  declareSession() {
    if (this.sessionId < 0) {
      this.toastR.error("Please Select any session");
      return;
    } else {
      const session = {
        sessionId: this.sessionId,
        betResult: this.betResult,
        resultComment: this.sessionComment,
      };
      this.matchService.declareSession(session).subscribe(
        (response) => {
          this.sessionId = -1;
          this.toastR.success("Session Declared Successfully");
        },
        (error) => {
          this.toastR.error("Something Went Wrong! Please try again");
        }
      );
    }
  }
  createSession() {
    if (!this.sessionName) {
      this.toastR.error("Please Enter Session Name");
      return;
    } else if (this.sessionTeamId < 0) {
      this.toastR.error("Please Select any team");
      return;
    } else {
      const session = {
        createdBy: this.authService.currentUserValue.userId,
        sessionName: this.sessionName,
        matchId: this.currentMatch.matchId,
        teamId: this.sessionTeamId,
      };
      this.matchService.createSession(session).subscribe(
        (response) => {
          this.toastR.success("Session Created Successfully");
        },
        (error) => {
          this.toastR.error("Something Went Wrong! Please try again");
        }
      );
    }
  }
}
