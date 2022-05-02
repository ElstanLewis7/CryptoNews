import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangeRateQuery } from '../services/exchangeRateApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangeRateQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>CryptoCurrency</Col>
        <Col span={6}>US Dollar Exchange Rate</Col>
        <Col span={6}></Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default Exchanges;
