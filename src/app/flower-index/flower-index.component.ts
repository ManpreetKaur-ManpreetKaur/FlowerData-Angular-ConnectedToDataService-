import { Component, OnInit } from '@angular/core';
import {Flower} from "../flower";
import {FlowerDataService} from "../flower-data.service";

@Component({
  selector: 'app-flower-index',
  templateUrl: './flower-index.component.html',
  styleUrls: ['./flower-index.component.css']
})
export class FlowerIndexComponent implements OnInit {
  public flowers: Flower[];
  constructor(private flowerDataService: FlowerDataService) {
    this.flowers = [];
  }
  ngOnInit(): void {
    this.flowerDataService.getFlowerList().subscribe(
      flowers => {
        console.log(flowers);
        this.flowers = flowers;
      }
    );
  }
}
