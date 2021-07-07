import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getLocation();
  }
  title = 'angular-maps';
  url: string = '';

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log('here')
        this.callApi(longitude, latitude);
      });
    } else {
      console.log("No support for geolocation")
    }
  }

  callApi(Longitude: number, Latitude: number) {
    this.url = `https://gps-coordinates.org/my-location.php?lat=${Latitude}&lng=${Longitude}`;
  }
}
