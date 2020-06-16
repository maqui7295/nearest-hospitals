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
  business_status: string;
  geometry: {
    location: ILocation;
  },
  icon: string;
  id: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  },
  photos?: IPhoto[],
  place_id: string;
  rating: number;
  reference?: string;
  types?: string[];
  user_ratings_total: number;
  vicinity: string;
}

export interface IResponse {
  html_attributions: string[],
  results: IResult[],
  status: string;
}

const objs: IResult = {
  business_status: 'string',
  geometry: {
    location: { lat: 1, lng: 2 },
  },
  icon: 'string',
  id: 'string',
  name: 'string',
  opening_hours: {
    open_now: true,
  },
  place_id: 'string',
  rating: 4,
  reference: 'string',
  user_ratings_total: 1,
  vicinity: 'string',
}


export const TestDat: IResult[] = [
  objs, 
  { ...objs, id: "string 2"}, 
  { ...objs, id: "string 3" },
  { ...objs, id: "string 4" },
  { ...objs, id: "string 5" },
  { ...objs, id: "string 6" },
] ;