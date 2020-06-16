import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Radio, InputNumber } from 'antd';

const { Search } = Input;

const style = { padding: '2rem 0' };

// @ts-ignore
export default function SearchHospital({ getSearch, getRadius }) {

    const [searchValue, setSeachValue] = useState('');

    const [radius, setRadius] = useState(5000)

    function handleSearchChange(value: string){
      setSeachValue(value);
      getSearch(searchValue);
    }

    function handleRadiusChange(value: number){
      setRadius(value);
      getRadius(searchValue);
    }

    function onChange(value: string) {
        console.log('changed', value);
    }    

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
            <Col className="gutter-row" span={10} style={{ margin: '2rem 0' }}>
                <div>
                    <Search value={searchValue} placeholder="Search for hospitals near you" onSearch={value => console.log(value)} enterButton />
                </div>
                <div style={style}>
                    <Radio.Group name="radiogroup" defaultValue={radius} onChange={value => console.log(value)}>
                        <Radio value={5000}>5km</Radio>
                        <Radio value={10000}>10km</Radio>
                        <Radio value={15000}>15km</Radio>
                        <Radio value={20000}>20km</Radio>
                    </Radio.Group>
                    
                </div>
            </Col>
        </Row>
    );
}
