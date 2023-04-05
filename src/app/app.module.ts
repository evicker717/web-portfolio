import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import{ NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import { ContactComponent } from './contact/contact.component'
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CipherComponent } from './cipher/cipher.component';
import { rsaComponent } from './rsa/rsa.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponent,
    CipherComponent,
    rsaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    TimelineModule,
    NgbModule,
    AppRoutingModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent, ResumeComponent]
})
export class AppModule { }