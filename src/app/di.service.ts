import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DIService {

  constructor() { }

  titleModifier() {
    return "Oussama App !"
  }
}
