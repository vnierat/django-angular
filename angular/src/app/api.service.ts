import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllVideoGames() : Observable<any> {
  return this.http.get(this.baseurl + '/VideoGames/', 
  {headers: this.httpHeaders});
  }
  getOneVideoGame(id) : Observable<any> {
    return this.http.get(this.baseurl + '/VideoGames/' + id + '/', 
    {headers: this.httpHeaders});
  }
  updateVideoGame(videoGame) : Observable<any> {
    const body = {title: videoGame.title , desc: videoGame.desc, console: videoGame.console, year: videoGame.year};
    return this.http.put(this.baseurl + '/VideoGames/' + videoGame.id + '/', body,
    {headers: this.httpHeaders});
  }
  createVideoGame(videoGame) : Observable<any> {
    const body = {title: videoGame.title , desc: videoGame.desc, console: videoGame.console, year: videoGame.year};
    return this.http.post(this.baseurl + '/VideoGames/', body,
    {headers: this.httpHeaders});
  }
  deleteVideoGame(id) : Observable<any> {
    return this.http.delete(this.baseurl + '/VideoGames/'+ id + '/',
    {headers: this.httpHeaders});
  }
}
