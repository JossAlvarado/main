import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html'
})
export class AppBadgeComponent implements OnInit {
  hidden = false;
  shoeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.shoeForm = this.formBuilder.group({
      brand: '',
      model: '',
      color: '',
      number: '',
      price: ''
    });
  }

  ngOnInit(): void {
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  onSubmit() {
    console.log(this.shoeForm.value);
    this.shoeForm.reset();
  }
}
