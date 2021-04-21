import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private router:Router, private PlacesService:PlacesService) { }

  ngOnInit() {
  }

  handleBack(){
    this.router.navigate(['/places'])
  }

  handleSubmit(title:HTMLInputElement,imageURL:HTMLInputElement){
    this.PlacesService.addPlace(title.value, imageURL.value)
    this.router.navigate(['/places'])
  }
}
