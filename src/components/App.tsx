import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ProductListing from '../containers/ProductListing';
import ProductSelector from '../containers/ProductSelector';
import RefundDisplay from '../containers/RefundDisplay';
import DeliveredProductDisplay from '../containers/DeliveredProductDisplay';

export class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} xsOffset={2}>
            <h1>Virtual Vendor Machine</h1>
            <ProductListing />
            <ProductSelector />
            <DeliveredProductDisplay />
            <RefundDisplay />
          </Col>
        </Row>
      </Grid>
    );
  }
}
