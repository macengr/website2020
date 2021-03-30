import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  bio = {
    "name" : "Karlie McWilliams",
    "role" : "Front End Web Developer",
    "welcomeMessage" : "Welcome to my Resume!",
    "contactInfo" : {
      "email" : "scottymac64@hotmail.com",
      "twitter" : "@karliechronicle",
      "twitterUrl": "https://twitter.com/KarlieChronicle",
      "blog" : "The Karlie Chronicles",
      "blogURL": "http://thekarliechronicles.wordpress.com",
      "portfolio" : "codepen.io",
      "github" : "macengr",
      "githubUrl": "https://github.com/macengr",
      "linkedin": "Karlie McWilliams",
      "linkedInUrl": "https://www.linkedin.com/in/karliemcwilliams/",
    },
    "location" : "Pittsburgh, PA",
    "biopic" : "assets/8150967.gif",
    "skills" : ["HTML5", "CSS3", "JavaScript", "Angular 9", "SQL", "TypeScript", "Node", "Github"]	
  }

  jobs = [ 
    {
      "employer" : "Sngular (at PNC Bank)",
      "title" : "Front End Developer",
      "location" : "Pittsburgh, PA",
      "dates" : "Oct 2020 - present",
      "description" : "Sngular is a consulting firm. We are working on internal websites for PNC. I am developing new features, fixing bugs, and refactoring code.",
      "url": "https://symbiotries.com/",    
    },
    {
      "employer" : "Highmark via TEKSystems (Temp. Position)",
      "title" : "Front End Developer",
      "location" : "Pittsburgh, PA",
      "dates" : "Dec 2019 - Jun 2020",
      "description" : "https://www.highmarkhealth.org/hmk/index.shtml",
      "url": "",
    },
    {
      "employer" : "UPMC via Beacon Hill Staffing (Temp. Position)",
      "title" : "Front End Developer",
      "location" : "Pittsburgh, PA",
      "dates" : "Apr 2019 - Sep 2019",
      "description" : "",
      "url": "https://www.upmc.com/",
    },
    {
      "employer" : "Symbiotries, Inc.",
      "title" : "Front End Developer / QA Developer",
      "location" : "Pittsburgh, PA",
      "dates" : "Dec 2017 - Feb 2019",
      "description" : "",
      "url": "https://symbiotries.com/",
    },
  ]
  
  schools = [
    {
      "name": "FreeCodeCamp",
      "degree": "Certificate",
      "majors": "Front End Developer",
      "location": "Online",
      "degreeDates": "2016",
      "url": "http://freecodecamp.org"
    },
    {
      "name": "Community College of Allegheny County",
      "degree": "Certificate",
      "majors": "Software Development",
      "location": "Monroeville, PA",
      "degreeDates": "Dec 2014",
      "url" : "https://www.ccac.edu/"
    }, {
      "name": "University of Pittsburgh",
      "degree": "Masters (MBA)",
      "majors": "Business Administration",
      "location": "Pittsburgh, PA",
      // "degreeDates": "Jun 2000",
      "url" : "https://www.katz.business.pitt.edu/"
    }, {
      "name": "State University of New York at Buffalo",
      "degree": "Bachelor of Science (BSME)",
      "majors": "Mechanical Engineering",
      "location": "Buffalo, NY",
      // "degreeDates": "Jun 1994",
      "url" : "https://engineering.buffalo.edu/"
    }]

  
  projects = []


  constructor() { }

  ngOnInit(): void {
  }

}
