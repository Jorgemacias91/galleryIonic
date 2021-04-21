import { PhotosService } from './photos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  photos = []

  constructor(private router:Router, private photosService:PhotosService) {}

  handleBack(){
    this.router.navigate(['/places'])
  }

  ngOnInit(){
    this.photosService.getPhotos().subscribe(data => {
      this.photos = data

    })
  }

}
