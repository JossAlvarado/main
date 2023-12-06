import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
})
export class AppTooltipsComponent {
  // Existing properties...

  // Add the following properties for the user table
  displayedColumns: string[] = ['profileImage', 'firstName', 'lastName', 'isEmployee'];

  // Replace the following data with your actual user data
  userData: any[] = [
    {
      profileImage: 'path-to-image-1.jpg',
      firstName: 'Jose Luis',
      lastName: 'Galindo Picazo',
      isEmployee: true,
    },
    {
      profileImage: 'path-to-image-2.jpg',
      firstName: 'Maria',
      lastName: 'Rodriguez',
      isEmployee: false,
    },
    {
      profileImage: 'path-to-image-3.jpg',
      firstName: 'John',
      lastName: 'Smith',
      isEmployee: true,
    },
    {
      profileImage: 'path-to-image-3.jpg',
      firstName: 'Josse',
      lastName: 'Alvarado',
      isEmployee: true,
    },
    {
      profileImage: 'path-to-image-3.jpg',
      firstName: 'Lesly',
      lastName: 'Bonilla',
      isEmployee: true,
    },
    // Add more users as needed
  ];
}
