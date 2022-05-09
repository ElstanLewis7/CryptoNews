import React, { useState } from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar, Select } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangeRateQuery } from '../services/exchangeRateApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;
const { Option } = Select;

const Exchanges = () => {
  const [cryptocurrency, setCryptocurrency] = useState('Cryptocurrency');

  const { data: exchangeRate, isFetching } =
    useGetExchangeRateQuery(cryptocurrency);
  const { data } = useGetCryptosQuery(100);

  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setCryptocurrency(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase())
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin, i) => (
                <Option value={coin.name} key={i}>
                  {coin.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Col>
        <Col span={6}>US Dollar Exchange Rate</Col>
        <Col span={6}></Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default Exchanges;
