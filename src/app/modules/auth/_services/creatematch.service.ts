import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CreatematchService {
  Url = environment.base_url + "/game-power-user" + "/api/matches";

  constructor(private http: HttpClient) {}

  creatematch(data: any) {
    return this.http.post(this.Url, data);
  }
}
