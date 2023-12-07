import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';  // Ajusta la ruta según la estructura de tu proyecto


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Spike Angular Admin Template';
  shoes: any[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getShoes().subscribe((data) => {
      this.shoes = data;
    });
  }
}
