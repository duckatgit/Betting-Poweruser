import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class MatchscoreService {
  Url = environment.base_url + "/game-power-user" + "/api/match_score";
  constructor(private http: HttpClient) {}

  updatematchscore(data: any) {
    return this.http.put(this.Url, data);
  }
}
