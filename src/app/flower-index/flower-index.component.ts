import { Component, OnInit } from '@angular/core';
import {Flower} from "../flower";
import {FlowerDataService} from "../flower-data.service";

@Component({
  selector: 'app-flower-index',
  templateUrl: './flower-index.component.html',
  styleUrls: ['./flower-index.component.css']
})
export class FlowerIndexComponent {

  flowers: Flower[];

  constructor(flowerDataService: FlowerDataService) {
    this.flowers = flowerDataService.getFlowerList();
  }
}
