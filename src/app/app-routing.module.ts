import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
},
{
    path: 'about',
    component: AboutComponent
},
{
  path: 'resume',
  component: ResumeComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'projects',
  component: ProjectsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
