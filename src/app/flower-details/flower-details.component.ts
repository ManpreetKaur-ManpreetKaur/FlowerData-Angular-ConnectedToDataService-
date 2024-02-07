import {Component} from '@angular/core';
import {Flower} from '../flower';
import {ActivatedRoute} from '@angular/router';
import {FlowerDataService} from '../flower-data.service';

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent {

  flower?: Flower;

  constructor(
    private flowerDataService: FlowerDataService,
    private activatedRoute: ActivatedRoute) {

    const id: string | null =  this.activatedRoute.snapshot.paramMap.get('id');
    if(id != null){
      this.flower = flowerDataService.getFlower(id);
    }
  }
}
