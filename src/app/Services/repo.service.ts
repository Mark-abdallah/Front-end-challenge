import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Repo } from '../interfaces/repo';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http:HttpClient) { }
 
  baseUrl="https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc"

getAll():Observable<any> {
  return  this.http.get<any>(this.baseUrl);
}
getByPageNumber(pageNumber:number):Observable<any>{
  return this.http.get<any>(this.baseUrl+`&page=${pageNumber}`)
  
}
}

