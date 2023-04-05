import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(  private route: ActivatedRoute,) { }
  projects: any[] = [];
  name: any;
  ngOnInit(): void { 
    this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
    this.projects = [
      {
        title:"parK @ K",
        origin:"CS490",
        description:"An app developed with the purpose of ",
        image:"/assets/parKicon.jpg",
        link:""
      },
      {
        title:"RSA & Ceaser Cipher Decoder ",
        origin:"Math 250 - Discreet Mathmatics",
        description:"",
        image:"",
        link:""


      },
      {
        title:"Dungeons & Dragons Character Randomizer",
        origin:"Personal Use",
        description:"",
        image:"",
        link:""
      },
      {
        title:"Personal Website",
        origin:"Personal Use",
        description:"The website you are currently looking at! It was created from scratch using Angular with Bootstrap utilities to show off my personal work",
        image:"",
        link:""
      }
    ]
  }
}
  


