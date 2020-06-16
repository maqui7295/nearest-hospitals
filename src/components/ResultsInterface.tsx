export interface ILocation {
  lat: number,
  lng: number
}

export interface IPhoto {
  height: number,
  html_attributions: string[],
  photo_reference: string;
  width: number
}

export interface IResult {
  geometry: {
    location: ILocation;
  },
  icon: string;
  id: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  },
  photos: IPhoto[],
  place_id: string;
  reference: string;
  types: string[];
  vicinity: string;
}

export default interface IResponse {
  html_attributions: string[],
  results: IResult[],
  status: string;
}