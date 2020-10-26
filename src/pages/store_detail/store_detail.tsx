// src/components/main.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Link, match } from 'react-router-dom';
import { Parallax } from './parallax';
import { details } from './details';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';

import './store_detail.scss';

interface DetailParams {
  name: string;
}

interface DetailsProps {
  required: string;
  match?: match<DetailParams>;
}

class Detail extends React.Component<DetailsProps, any> {
  render() {
    const match = this.props.match;

    if (match) {
      const name = match.params.name;
      let detail = {'root_url':'', 'root_text':'', 'title': '', 'slides': ['str'], 'image':'', 'text1':'', 'text2':'', };
      detail = details[name]
      return (
        <div>
        <Parallax title={detail.title} image={detail.image} />
        <Container style={{marginTop:'1em'}}>
          { detail.root_text != '' &&
            <>
            <a href={detail.root_url} className="store-detail-link">{detail.root_text}</a>
            <span className="store-detail-link"> &gt; {detail.title}</span>
            </>
          }

          <div style={{marginTop:'2em', textAlign:'center'}}>
            <h2 style={{color:'white'}}>{detail.title}</h2>
            <p style={{color:'white', fontSize:'1.4em'}}>{detail.text1}</p>
          </div>
          <Row style={{marginTop:'3em', marginBottom:'1.5em'}}>
            <Col md={5} style={{textAlign:'center'}}>
              <p style={{color:'white', textAlign:'justify', fontSize:'16px'}} dangerouslySetInnerHTML={{__html: detail.text2}}/>
              <Button variant="outline-light" size="lg" className='store-detail-demande-btn'>Demande de devis</Button>
            </Col>
            <Col md={7} style={{paddingRight:'2em', paddingLeft:'2em'}}>
              <div className="lambrequin-carousel-section" >
                <Carousel controls={false}>
                  {detail.slides.map( image => (

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt="First slide"
                      width="100%" height="400em"
                    />
                  </Carousel.Item>

                  ))}

                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return <></>
}
}
export const StoreDetail = Detail;