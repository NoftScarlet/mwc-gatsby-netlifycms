import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import DOMPurify from 'dompurify'
import HomeCarousel from '../components/HomeCarousel'


import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'


export const IndexPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      description,
                                      intro,
                                      heading2,
                                      description2
                                  }) => (

    <div>

        <HomeCarousel/>
        <section className="section section--gradient">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-12">
                            <div className="content">
                                <div className="columns">
                                    <div className="column is-12">
                                        <h3 style={{textAlign: 'center'}}
                                            className="has-text-weight-semibold is-size-2">
                                            {heading}
                                        </h3>

                                        <div style={{textAlign: 'left', fontSize: '1.15rem', }}
                                             dangerouslySetInnerHTML={{__html: description}}/>

                                    </div>
                                </div>
                                <Features gridItems={intro.blurbs}/>




                                <div className="column is-12">
                                    <h3 style={{textAlign: 'center'}} className="has-text-weight-semibold is-size-2">
                                        Recent updates
                                    </h3>
                                    <BlogRoll/>
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/blog">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-12">
                                        <h3 style={{textAlign: 'center'}}
                                            className="has-text-weight-semibold is-size-2">
                                            {heading2}
                                        </h3>

                                        <div style={{textAlign: 'justify', fontSize: '1.15rem'}}
                                             dangerouslySetInnerHTML={{__html: description2}}/>

                                    </div>
                                </div>
                                <div className="gallery" id="gallery">
                                    <div className="all animation mb-3 pics 2"><img alt="Card image cap"
                                                                                    className="img-fluid"
                                                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"/>
                                    </div>
                                    <div className="all animation mb-3 pics 1"><img alt="Card image cap"
                                                                                    className="img-fluid"
                                                                                    src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"/>
                                    </div>
                                    <div className="all animation mb-3 pics 1"><img alt="Card image cap"
                                                                                    className="img-fluid"
                                                                                    src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"/>
                                    </div>
                                    <div className="all animation mb-3 pics 2"><img alt="Card image cap"
                                                                                    className="img-fluid"
                                                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"/>
                                    </div>
                                    <div className="all animation mb-3 pics 2"><img alt="Card image cap"
                                                                                    className="img-fluid"
                                                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"/>
                                    </div>
                                    <div className="all animation mb-3 pics 1"><img alt="Card image cap"
                                                                                    className="img-fluid"
                                                                                    src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div
            className="full-width-image margin-top-0"
            style={{
                backgroundImage: `url(${
                    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`,
            }}
        >

            <div
                style={{
                    display: 'flex',
                    height: '150px',
                    lineHeight: '1',
                    justifyContent: 'space-around',
                    alignItems: 'left',
                    flexDirection: 'column',
                }}
            >

                <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{

                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        color: 'white',
                        lineHeight: '1.2',
                        padding: '0.5em',
                    }}
                >
                    Still have questions?
                </h1>

                <p
                    className=""
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        color: 'white',
                        lineHeight: '0.5',
                        padding: '0.25em',
                        fontSize: '25pt'
                    }}
                >
                    Visit our FAQs page our contact us at xxxx
                </p>
            </div>


        </div>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    heading2: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
};

const IndexPage = ({data}) => {

    const {frontmatter} = data.markdownRemark;


    let htmlDescription = remark().use(recommended).use(remarkHtml).processSync(data.markdownRemark.frontmatter.description).toString();
    /*
    let sanitizedString =  DOMPurify.sanitize(htmlDescription)
    console.log(sanitizedString)*/

    //Read markdown as HTML from frontmatter. ref - https://github.com/gatsbyjs/gatsby/issues/5021
    // after we get HTML string, we sanitize the string with DOMPurify and them pass to innerHTML. This way we can prevent XSS

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                heading2={frontmatter.heading2}
                description2={frontmatter.description2}
                description={htmlDescription}
                intro={frontmatter.intro}
            />
        </Layout>
    )
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
            text
            link
          }
          heading
          description
        }
        heading2
        description2
      }
    }
  }
`
