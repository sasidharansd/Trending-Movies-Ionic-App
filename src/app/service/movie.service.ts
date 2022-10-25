import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult{
  page: number;
  results: any[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_pages: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }


  public getTopRatedMovies(page = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }


  public getMovieDetails(id: string): Observable<object>{
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }
}
