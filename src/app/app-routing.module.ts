import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'detail/:id', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
