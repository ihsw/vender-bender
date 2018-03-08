import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ProductListing from '../containers/ProductListing';

export class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} xsOffset={3}>
            <h1>Virtual Vendor Machine</h1>
            <ProductListing />
          </Col>
        </Row>
      </Grid>
    );
  }
}
