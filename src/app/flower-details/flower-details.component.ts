import {Component, OnDestroy} from '@angular/core';
import {Flower} from '../flower';
import {ActivatedRoute} from '@angular/router';
import {FlowerDataService} from '../flower-data.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent implements OnDestroy {

  flower: Flower | undefined;

  private flowerSub: Subscription | undefined;

  constructor(flowerDataService: FlowerDataService, activatedRoute: ActivatedRoute) {

    const id: string | null =  activatedRoute.snapshot.paramMap.get('id');
    if(id != null){
      this.flowerSub =
        flowerDataService.getFlowerById(id).subscribe(flower => this.flower = flower);
    }
  }

  ngOnDestroy(){
    this.flowerSub?.unsubscribe();
  }
}
