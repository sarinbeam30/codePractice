import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class PostService {
  private api = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    console.log('PostService initialized');
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }
}
