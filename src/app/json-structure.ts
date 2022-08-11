export interface PictureJson {
  small: string;
  large: string;
}

export interface FlowerJson {
  id: string;
  label: string;
  price: number;
  description: string;
  picture: PictureJson;
}

export interface CatalogJson {
  flowers: FlowerJson[];
}
