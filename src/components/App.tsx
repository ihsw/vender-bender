import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h1>Virtual Vendor Machine</h1>
            <p>Hello, world!</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
