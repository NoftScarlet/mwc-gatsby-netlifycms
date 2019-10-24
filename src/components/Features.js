import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Button } from 'reactstrap';


const FeatureGrid = ({ gridItems }) => (
  <div className="columns flex-wrap">

    {gridItems.map(item => (

      <div key={item.text} className="column d-sm-flex">
          <Button href={item.link} color="light">
        <section className="section" style={{textAlign:"center"}}>

          <div className="has-text-centered">
            <div
              style={{
                width: 'auto',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>

          </div>

          <p>{item.text}</p>
        </section>
      </Button>
      </div>

    ))}

  </div>
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
