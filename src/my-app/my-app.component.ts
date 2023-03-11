import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css'],
})
export class MyAppComponent implements OnInit {
  public personal: boolean = false;
  public professional: boolean = false;
  constructor() {}

  ngOnInit() {}
  clickPersonal() {
    this.personal = true;
    this.professional = false;
  }
  clickProfessional() {
    this.personal = false;
    this.professional = true;
  }
}
