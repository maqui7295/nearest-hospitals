import React, {useState, useEffect} from 'react';
import { Input, Row, Col,  Radio, Card } from 'antd';
import ImportScript from '../ImportScript';
import {IResult, TestDat} from './ResultsInterface';

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
      <Col key={res.id} className="gutter-row" span={6}>
        <Card title={res.name} bordered={false} style={{marginBottom: "2rem"}}>
           <img src={res.icon} alt={res.name} />
          <p>business status: {res.business_status}</p>
          <p>vicinity: {res.vicinity}</p>
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
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
      <Col className="gutter-row" span={10} style={{margin: '2rem 0'}}>
        <div>
          <Search placeholder="Search for hospitals near you" onSearch={value => console.log(value)} enterButton />
        </div>
        <div style={style}>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>5km</Radio>
            <Radio value={2}>10km</Radio>
            <Radio value={3}>15km</Radio>
            <Radio value={4}>20km</Radio>
          </Radio.Group>
        </div>
      </Col>
    </Row>    
    <Row gutter={[16, 16]}>
      { results.length > 0 && displayResults(results) }
    </Row>    
    </>
  );
}
