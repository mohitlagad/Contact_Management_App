import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  openContactForm() {
    this.router.navigate(['/contactform']);
  }
   
}
