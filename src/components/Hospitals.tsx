import React, {useState, useEffect} from 'react';
import { Input, Row, Col,  Radio, Card, Rate } from 'antd';
import ImportScript from '../ImportScript';
import {IResult, TestDat} from './ResultsInterface';
import SearchHospital from './Search';

const { Search } = Input;

const style = { padding: '2rem 0' };


export default function Hospitals(props:object) {
  
  const [location, setLocation] = useState({});

  const [errors, setErrors] = useState({message: ''});

  const [results, setResults] = useState(() => {
    const initArray: IResult[] = [];
    return TestDat || initArray;
  });

  const [radius, setRadius] = useState(5000)
  
  // const url = 'https://maps.googleapis.com/maps/api/js';
  // ImportScript(`${url}?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`, getPlaces);

  function getPlaces() {
    // @ts-ignore
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    // Perform a nearby search.
    service.nearbySearch({ location, radius, type: ['hospital']},
    function (results: IResult[], status: string) {
      if (status !== 'OK') {
        return;
      }
      setResults(results);
    });
  }

  useEffect(() => {
    getLocation()
  });

 
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setLocation({ lat: coords.latitude, lng: coords.longitude });
      }, error => {
        setErrors(error);
      });
    }
  }

  function displayResults(results: IResult[]) {
    return results.map(res => (
      <Col key={res.id} className="gutter-row" xs={12} sm={12} md={4}>
        <Card title={res.name} bordered={false} style={{marginBottom: "2rem"}}>
           <img src={res.icon} alt={res.name} />
          <p>business status: {res.business_status}</p>
          <p>vicinity: {res.vicinity}</p>
          <Rate disabled defaultValue={res.rating} />
        </Card>
      </Col>));
  }

  function displayError() {
    return (
      <div>{errors.message}</div>
    )
  }

  return (
    <>
    <SearchHospital getSearch={console.log} getRadius={console.log} />    
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      { results.length > 0 && displayResults(results) }
    </Row>    
    </>
  );
}
