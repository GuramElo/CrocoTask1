import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({ providedIn: 'root' })

export class ProvidersService {
  gamesCount = new Subject();

  constructor(private http: HttpClient) {}

  getData(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl);
    this.gamesCount.next(14);
  }
}
