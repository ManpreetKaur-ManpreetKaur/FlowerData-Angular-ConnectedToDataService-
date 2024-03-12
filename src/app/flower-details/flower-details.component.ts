import {Component, OnDestroy} from '@angular/core';
import {Flower} from '../flower';
import {ActivatedRoute} from '@angular/router';
import {FlowerDataService} from '../flower-data.service';
import {Subscription} from "rxjs";
import {LoadingState} from "../loading-state";

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent implements OnDestroy {

  flower: Flower | undefined;
  loadingState: LoadingState = LoadingState.LOADING;

  private flowerSub: Subscription | undefined;

  constructor(flowerDataService: FlowerDataService, activatedRoute: ActivatedRoute) {

    const id: string | null =  activatedRoute.snapshot.paramMap.get('id');
    if(id != null){
      this.flowerSub =
        flowerDataService.getFlowerById(id).subscribe({
          next: (flower) => {
            if (flower !== undefined) {
              this.flower = flower;
              this.loadingState = LoadingState.SUCCESS;
            }
          },
          error: (error) => {
            this.loadingState = LoadingState.ERROR;
          }
    });
    }
  }

  ngOnDestroy(){
    this.flowerSub?.unsubscribe();
  }

  protected readonly LoadingState = LoadingState;
}
