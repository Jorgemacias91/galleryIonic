import { Injectable } from '@angular/core';
import {Place} from '../places/place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places : Place[] = [
    {
      id: "1",
      title:"Eiffe Tower",
      imageURL: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg",
      comments: ["Awesome place", "wonderful place"]
    },
    {
      id: "2",
      title:"Statue of Liberty",
      imageURL: "https://www.turismonuevayork.com/wp-content/uploads/2012/08/Estatua-de-la-Libertad-02-681x1024.jpg",
      comments: ["Awesome place", "wonderful place"]
    },
    {
      id: "3",
      title:"Eiffe Tower",
      imageURL: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg",
      comments: []
    }
  ]

  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  getPlace(placeId:string){
   return {
    ...this.places.find(place =>{
      return place.id === placeId
    })
   }
   }

  addPlace(title:string, imageURL:string) {
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: this.places.length + 1 + ""
    })
   }

  deletePlace(placeId:string){
    this.places = this.places.filter(place => place.id !== placeId)
   }


}
