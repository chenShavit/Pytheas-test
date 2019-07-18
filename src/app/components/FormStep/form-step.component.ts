import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, Form, FormControl } from '@angular/forms';
import { TripService } from '../../trip.service';




@Component({

  selector: 'form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss']
})
export class FormStepComponent implements OnInit {
  rounds: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  stepNumber:any=1;
  profile:any={
    username:'Chen',
    profile_name:'',
    tags:['']
  }

  constructor(private _formBuilder: FormBuilder,private router: Router , public tripService: TripService) { }

  ngOnInit() {
   this.firstFormGroup = new FormGroup({
      gender: new FormControl('Male'),
    });
    this.secondFormGroup = new FormGroup({
      // gender: new FormControl('Male'),
    });
  }

  nextStep(val:any){
    this.profile.profile_name=val;
    if(val){
    this.stepNumber++;
    }
  }
  backStep(){
    this.stepNumber--;
  }
  submit(){
    this.profile.tags=this.tripService.selectedTags;
    this.tripService.updateUserDestails(this.profile);
    this.router.navigate(['/filter']);
  }
}
