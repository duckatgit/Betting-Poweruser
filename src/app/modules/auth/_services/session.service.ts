import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  constructor(private http: HttpClient) {}
  // /game-power-user
  // Url: string = environment.base_url + "/game-power-user" + "/api/sessions";
  Url: string = environment.base_url + "/game-power-user";

  createsession(data: any) {
    return this.http.put(this.Url + "/api/sessions", data);
  }

  sessionupdate(data: any) {
    return this.http.put(this.Url + "/api/sessions", data);
  }
}
