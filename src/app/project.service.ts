import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Project } from './project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private programsUrl = 'https://byamugishaprojects.herokuapp.com/programs'
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }
  getProjects (): Observable<Project[]> {
    return this.http.get<Project[]>(this.programsUrl)
  }
  getProject(id: number): Observable<Project> {
    const url = `${this.programsUrl}/${id}`
    return this.http.get<Project>(url)
  }  
}
