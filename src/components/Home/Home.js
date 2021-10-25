import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import img from '../../images/cheaf-room.jpg';
import img2 from '../../images/meal-2.jpg';
import img3 from '../../images/meal-3.jpg';
import Cuisine from '../Cuisine/Cuisine';


const Home = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch("./food4.JSON")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <Carousel className=" my-5">
                <Carousel.Item>
                    <img
                        className="d-block mx-auto img-fluids w-50"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto img-fluids w-50"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto img-fluids w-50"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* service */}
            <div>
                <Row xs={1} md={2} className="g-4 my-5 mx-5">
                    {
                        foods.map(food => <Cuisine
                            key={food.key}
                            food={food}></Cuisine>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Home;