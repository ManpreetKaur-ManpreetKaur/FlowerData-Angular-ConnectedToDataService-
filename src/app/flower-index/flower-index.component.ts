import { Component } from '@angular/core';
import {Flower} from "../flower";
import {FlowerDataService} from "../flower-data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-flower-index',
  templateUrl: './flower-index.component.html',
  styleUrls: ['./flower-index.component.css']
})
export class FlowerIndexComponent {

  flowers: Observable<Flower[]>;

  constructor(flowerDataService: FlowerDataService) {
    this.flowers = flowerDataService.getAllFlowers();
  }
}
