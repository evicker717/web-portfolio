
import {Component,OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    events: any[] = [];
    
    ngOnInit() {
      this.events = [
        {
          company: "Virtual Music Ensemble Technologies",
          title:"Software Development Intern",
          date: "April 2022 - November 2022",
          description:"Designed & built a desktop application using React JS & Electron. Implemented an account feature using AWS Cognito. Implemented a system for tracking data points each user was associated with using AWS DynamoDB. Implemented features for retrieving specific JPG and MP4 files from S3 buckets based on other user information. Collaborated with others to debug problems in the mobile application. Created a website to allow users to link accounts.",
          icon: PrimeIcons.SHOPPING_CART,
          color: "#9C27B0",
          image:"\assets\vmetLogo.png"
        },
        {
          company: "Kalamazoo College",
          title:"Media Technician",
          date: "January 2019 - Current",
          description:"Facilitated college staff & faculty with setup and operations of various multimedia devices, such as projectors, desktop computers, speakers, cameras, & microphones. Installed upgraded Epson projectors in rooms on campus. Soldered and assembled XLR cables. Applied interpersonal skills to explain technologies to people with less experience. Operated video cameras, soundboards, and livestreaming equipment for various campus events.",
          icon: PrimeIcons.SHOPPING_CART,
          color: "#9C27B0",
        }
      ]
    }
}