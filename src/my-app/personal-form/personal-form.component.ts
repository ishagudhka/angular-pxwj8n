import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css'],
})
export class PersonalFormComponent implements OnInit {
  // personalForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  constructor(private fb: FormBuilder, private appService: MyServiceService) {}
  data;
  personalForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: [''],
    contacts: this.fb.group({
      email: [''],
      contactType: ['-1'],
      phone: [''],
    }),
    skills: this.fb.array([]),
  });
  ngOnInit() {}
  get skillsArr() {
    return this.personalForm.get('skills') as FormArray;
  }

  addSkills() {
    this.skillsArr.push(
      this.fb.group({
        program: [''],
        experience: [0],
      })
    );
    console.log(this.skillsArr);
  }
  deleteSkills(pos) {
    this.skillsArr.removeAt(pos);
  }
  onSubmit() {
    console.log(this.personalForm.value);
  }
  getData() {
    this.appService.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.personalForm.setValue(this.data);
    });
  }
  updatePartialValue() {
    this.personalForm.patchValue({
      lastName: 'Shah',
    });
  }
}
