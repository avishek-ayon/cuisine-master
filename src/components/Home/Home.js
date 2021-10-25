import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import img from '../../images/cheaf-room.jpg';
import img2 from '../../images/meal-2.jpg';
import img3 from '../../images/meal-3.jpg';
import Cuisine from '../Cuisine/Cuisine';


const Home = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const url = "./food.JSON";
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    // from json take 4 value using slice 
    const course = foods.slice(0, 4);
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
                        <h3 className="text-danger fw-bold fs-2">Group Practical</h3>
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
                        <h3 className="text-danger fw-bold fs-2">Vegatable Tranning</h3>
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
                        <h3 className="text-danger fw-bold fs-2">Indivual Exam</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <div>
                <h1 className="text-warning">Our Course</h1>
                <Row xs={1} md={2} className="g-4 my-5 mx-5">
                    {/* data send */}
                    {
                        course.map(food => <Cuisine
                            key={food.key}
                            food={food} ></Cuisine>)
                    }
                </Row>
            </div>

        </div >
    );
};

export default Home;