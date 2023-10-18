import React from "react";
import { Container,Row,Col } from "reactstrap";
import {motion} from 'framer-motion';
import './services.css';
import serviceData from '../assets/data/serviceData';

const Services = ()=>{
    return(
        <Container>
            <Row className="row">
                {
                    serviceData.map((item,index)=>(
                    <Col lg='3' md='4' key={index} style={{ background: `${item.bg}`}}>
                        <motion.div whileHover={{scale:1.1}} className="service__item">
                            <span>
                            <i class={item.icon}></i>
                            </span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </motion.div>
                    </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Services