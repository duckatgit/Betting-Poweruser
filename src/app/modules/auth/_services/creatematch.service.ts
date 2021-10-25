import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  Url = environment.base_url + "/game-power-user" + "/api/matches";
  matches: any[] = [];
  constructor(private http: HttpClient) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.getMatchList();
  }

  updateMatchBet(data) {
    return this.http
      .put(environment.apiUrl + "/api/matches/updateBetRates", data)
      .pipe(
        switchMap(() => this.getMatchList()),
        map((response) => this.getMatchById(data.matchId))
      );
  }

  sessionupdate(data) {
    return this.http.put(environment.apiUrl + "/api/sessions", data);
  }

  createSession(data) {
    return this.http.post(environment.apiUrl + "/api/sessions", data);
  }
  lockSession(data) {
    return this.http.put(environment.apiUrl + "/api/sessions/status", data);
  }
  declareSession(data) {
    return this.http.put(environment.apiUrl + "/api/sessions/close", data);
  }

  loackMatchBet(data) {
    return this.http.put(environment.apiUrl + "/api/matches/lockBet", data);
  }

  creatematch(data: any) {
    return this.http.post(this.Url, data);
  }

  getMatchList() {
    return this.http
      .get<any>(environment.apiUrl + "/api/matches?completion=live")
      .pipe(
        map((matches: any) => {
          matches.map((game: any) => {
            game.time = game?.dateTime.replace(/\s/g, "T");
          });
          this.matches = matches;
          return matches;
        })
      );
  }
  getSessionList(matchId) {
    return this.http.get<any>(
      environment.apiUrl + "/api/sessions?matchId=" + matchId + "&&status=true"
    );
  }

  getMatchById(id: number) {
    return this.matches?.find((match) => match.matchId == id);
  }
}
