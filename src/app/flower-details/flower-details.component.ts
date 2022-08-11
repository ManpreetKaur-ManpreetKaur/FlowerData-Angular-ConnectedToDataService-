import {Component, OnInit} from '@angular/core';
import {Flower} from '../flower';
import {ActivatedRoute} from '@angular/router';
import {FlowerDataService} from '../flower-data.service';

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent implements OnInit {

  flower?: Flower;

  constructor(
    private flowerDataService: FlowerDataService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id != null) {
        this.flowerDataService.getFlower(id).subscribe(flower => {
          this.flower = flower;
        });
      }
    });
  }
}
