import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Button } from 'reactstrap';
import {
    Container,
    Row,
    Col
} from "reactstrap";



const FeatureGrid = ({ gridItems }) => (
  <Container className={"home-block"}>
      <Row>

    {gridItems.map(item => (
      <Col key={item.text} xs="12" sm="12" md="12" lg={"4"} xl={"4"} className="d-md-flex grid-items" >

          <Button href={item.link} className="btn-primary">
        <section className="section">

          <div className="has-text-centered">
            <div
              style={{
                width: 'auto',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
              <p><br/></p>
          </div>

          <p>{item.text}</p>
        </section>
      </Button>
      </Col>

    ))}
      </Row>
  </Container>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
        link: PropTypes.string,
    })
  ),
}

export default FeatureGrid
