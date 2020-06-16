import React, {useState, useEffect} from 'react';
import { Input, Row, Col,  Radio, Card } from 'antd';
import useImportScript from '../ImportScript';
import IResponse, {IResult} from './ResultsInterface';

const { Search } = Input;

const style = { padding: '2rem 0' };

const data = [
  {
    title: 'Ant Design Title 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sint'
  },
  {
    title: 'Ant Design Title 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sint'
  },
  {
    title: 'Ant Design Title 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sint'
  },
  {
    title: 'Ant Design Title 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sint'
  },
];


export default function Hospitals(props:object) {

  const [location, setLocation] = useState({ lat: 23.8701334, lng: 90.2713944 })
  const [errors, setErrors] = useState({})
  const [results, setResults] = useState({})
  const [radius, setRadius] = useState(5000)
  
  const url = 'https://maps.googleapis.com/maps/api/js';
  useImportScript(`${url}?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`, getPlaces);

  function getPlaces() {
    // @ts-ignore
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    // Perform a nearby search.
    service.nearbySearch({
      location,
      radius,
      type: ['hospital']
    },
    function (results: object, status: string) {
      if (status !== 'OK') return;
      // @ts-ignore
      
      displayResults(results);
      console.log(results);
      // getNextPage = pagination.hasNextPage && function () {
      //   pagination.nextPage();
      // };
    });
  }

 
  function getLocation() {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
      } catch (err) {
        setErrors(err);
      }
    }
  }

  function displayResults(results: object) {
    console.log(results);
  }

  function displayError(err: object) {
    console.log(err)
  }

  return (
    <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6} style={{margin: '2rem 0'}}>
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
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      { data.map(d => (
        <Col key={d.title} className="gutter-row" span={6}>
            <Card title={d.title} bordered={false} style={{ width: 300 }}>
              <p>{d.content}</p>
            </Card>
        </Col>
      ))}
    </Row>    
    </>
  );
}




// function getPlaces() {
//   // @ts-ignore
//   var service = new google.maps.places.PlacesService(document.createElement('div'));
//   // Perform a nearby search.
//   service.nearbySearch({
//     location,
//     radius: 4000,
//     type: ['hospital']
//   },
//     function (results: object, status: string) {
//       if (status !== 'OK') return;
//       // @ts-ignore
//       displayResults(results);
//       // getNextPage = pagination.hasNextPage && function () {
//       //   pagination.nextPage();
//       // };
//     });
// }