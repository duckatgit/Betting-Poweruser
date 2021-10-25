import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  // /game-power-user
  // Url: string = environment.base_url + "/game-power-user" + "/api/sessions";
  Url: string = environment.base_url + "/user-service";

  createUser(data: any) {
    return this.http.post(this.Url + "/api/users", data);
  }

  assignRoles(data: any) {
    return this.http.put(this.Url + "/api/users/updateAdditionalRoles", data);
  }
}
