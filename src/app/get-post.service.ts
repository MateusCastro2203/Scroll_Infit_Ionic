import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetPostService {

  constructor(private http: HttpClient) { }

  async getPosts(){
    let response = await this.http.get("https://jsonplaceholder.typicode.com/posts").toPromise();
    return response;
  }
}
