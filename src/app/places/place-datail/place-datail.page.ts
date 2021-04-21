import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Place } from '../place.model';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-place-datail',
  templateUrl: './place-datail.page.html',
  styleUrls: ['./place-datail.page.scss'],
})
export class PlaceDatailPage implements OnInit {
  place:Place;
  constructor(private placeService:PlacesService, private activatedRoute:ActivatedRoute, private router:Router, private alertController:AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMAp => {
      const id = paramMAp.get('placeId')
    this.place = this.placeService.getPlace(id)
    })

  }

 async handleDelete(){

   const alertElement = await this.alertController.create({
      header: 'Estás seguro de querer eliminar?',
      message: 'Sé cuidadoso',
      buttons: [
        {
          text: 'Cancelar',
          role:'cancel'
        },
        {
          text: 'Eliminar',
          handler: () =>{
            this.placeService.deletePlace(this.place.id);
            this.router.navigate(['/places'])
          }
        }
      ]
    });
    await alertElement.present();


    }

  handleBack(){
    this.router.navigate(['/places'])
  }

}
