import React from 'react';
import { Input, Row, Col,  Radio, List, Card } from 'antd';

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


  function getPlaces() {
    // Create the places service.
    // ts-nocheck
    var service = new google.maps.places.PlacesService(map);

    // Perform a nearby search.
    service.nearbySearch({
      location: pyrmont,
      radius: 4000,
      type: ['hospital']
    },
      function (results, status, pagination) {
        if (status !== 'OK') return;

        displayResults(results);
        getNextPage = pagination.hasNextPage && function () {
          pagination.nextPage();
        };
      });
  }

  function getPosition(): object {
    var pyrmont = {
      lat: 23.8701334,
      lng: 90.2713944
    };
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pyrmont = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      } catch (err) {
        displayError(err);
      }
      return pyrmont;
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
        <Col className="gutter-row" span={6}>
            <Card title={d.title} bordered={false} style={{ width: 300 }}>
              <p>{d.content}</p>
            </Card>
        </Col>
      ))}
    </Row>    
    </>
  );
}