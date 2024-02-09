import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  submit() {
    console.log(this.outline.value);
  }

  outline: FormGroup = new FormGroup({
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    }),
    address: new FormGroup({
      permanentaddress: new FormControl(''),
      currentaddress: new FormControl(''),
    }),
    country: new FormGroup({
      state: new FormControl(''),
      city: new FormControl(''),
      district: new FormControl(''),
    }),
  });
}

// name: new FormGroup({
//   firstname:new FormControl(''),
//   lastname:new FormControl(''),
//  )}
//   address: new FormGroup({
//          permanentaddress:new FormControl(''),
//          currentaddress:new FormControl(''),
//   })
// country:new FormGroup({
//   state :new FormControl(''),
//      city:new FormControl(''),
//       district:new FormControl(''),

//     })
// })

//
