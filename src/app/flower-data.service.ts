import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import {Flower} from "./flower";
import {CatalogJson, FlowerJson} from "./json-structure";

@Injectable({
  providedIn: 'root'
})
export class FlowerDataService {

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private static imageFolderUri = 'http://localhost:8080/images/flowers/';
  private jsonDataUri = 'http://localhost:8080/api/flowers/';

  private static json2Flower(flowerJson: FlowerJson): Flower {
    const flower = new Flower();
    flower.id = flowerJson.id;
    flower.label = flowerJson.label;
    flower.price = flowerJson.price;
    flower.description = flowerJson.description;
    flower.largeImgSrc = FlowerDataService.imageFolderUri + flowerJson.picture.large;
    flower.smallImgSrc = FlowerDataService.imageFolderUri + flowerJson.picture.small;
    return flower;
  }

  public getFlowerList(): Observable<Flower[]> {
    const flowers: Flower[] = [];
    const subject: BehaviorSubject<Flower[]> = new BehaviorSubject<Flower[]>(flowers);
    this.httpClient
      .get(this.jsonDataUri)
      .subscribe(
        (dataJson: any) => {
          const catalogJson: CatalogJson = dataJson._embedded;
          const items: FlowerJson[] = catalogJson.flowers;
          console.log(items);
          items.forEach(
            (flowerJson: FlowerJson) => flowers.push(FlowerDataService.json2Flower(flowerJson)));
          subject.next(flowers);
        })
    return subject;
  }

  public getFlower(id: String): Observable<Flower> {
    let subject: ReplaySubject<Flower> = new ReplaySubject<Flower>();
    this.httpClient
      .get(this.jsonDataUri + id)
      .subscribe(
        (flowerJson: any) => {
          console.log(flowerJson);
          subject.next(FlowerDataService.json2Flower(flowerJson));
        })
    return subject;
  }

}
