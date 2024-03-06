import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Filters({ setPlantList }) {
    const [formData, setFormData] = useState({
        search: '',
        order: '',
        edible: null,
        poisonous: null,
        cycle: '',
        watering: '',
        sunlight: '',
        indoor: '',
        hardiness: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    async function handleSearch(evt) {
        evt.preventDefault();
        const params = {
            "q": formData.search,
            "order": formData.order,
            "edible": formData.edible,
            "poisonous": formData.poisonous,
            "cycle": formData.cycle,
            "watering": formData.watering,
            "sunlight": formData.sunlight,
            "indoor": formData.indoor,
            "hardiness": formData.hardiness,
            "key": API_KEY,
        };
        const apiBaseUrl = 'https://perenual.com/api';
        const plantResult = await axios.get(`${apiBaseUrl}/species-list`, { params });
        setPlantList(plantResult.data.data);
    }

    return (
        <div className='form-container'>
            <Form autoComplete="off" onSubmit={handleSearch} className='filter-form '>
                <Row>
                    <Col className='col-12'>
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" name="search" value={formData.search} onChange={handleChange} />
                    </Col>
                    <Col className='col-2'>
                        <Form.Label>Order</Form.Label>
                        <Form.Control as="select" name="order" onChange={handleChange}>
                            <option value="">---</option>
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>
                        </Form.Control>
                    </Col>
                    <Col className='col-2'>
                        <Form.Label>Edible</Form.Label>
                        <Form.Control as="select" name="edible" onChange={handleChange}>
                            <option value="">---</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </Form.Control>
                    </Col>
                    <Col className='col-3'>
                        <Form.Label>Poisonous</Form.Label>
                        <Form.Control as="select" name="poisonous" onChange={handleChange}>
                            <option value="">---</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </Form.Control>
                    </Col>

                    <Col className='col-3'>
                        <Form.Label>Cycle</Form.Label>
                        <Form.Control as="select" name="cycle" onChange={handleChange}>
                            <option value="">---</option>
                            <option value="perennial">Perennial</option>
                            <option value="annual">Annual</option>
                            <option value="biennial">Biennial</option>
                            <option value="biannual">Biannual</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-3'>
                        <Form.Label>Watering</Form.Label>
                        <Form.Control as="select" name="watering" onChange={handleChange}>
                            <option value="">---</option>
                            <option value="frequent">Frequent</option>
                            <option value="average">Average</option>
                            <option value="minimum">Minimum</option>
                            <option value="none">None</option>
                        </Form.Control>
                    </Col>
                    <Col className='col-4'>
                        <Form.Label>Sunlight</Form.Label>
                        <Form.Control as="select" name="sunlight" onChange={handleChange}>
                            <option value="">---</option>
                            <option value="full_shade">Full Shade</option>
                            <option value="part_shade">Part Shade</option>
                            <option value="sun-part_shade">Sun-Part Shade</option>
                            <option value="full_sun">Full Sun</option>
                        </Form.Control>
                    </Col>
                    <Col className='col-2'>
                        <Form.Label>Indoor</Form.Label>
                        <Form.Control as="select" name="indoor" onChange={handleChange}>
                            <option value="">---</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </Form.Control>
                    </Col>
                    <Col className='col-2'>
                        <Form.Label>Hardiness</Form.Label>
                        <Form.Control as="select" name="hardiness" onChange={handleChange}>
                            <option value="">---</option>
                            {[...Array(13)].map((_, index) => (
                                <option key={index} value={index + 1}>{index + 1}</option>
                            ))}
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-2'>
                        <Button variant="secondary" type="reset">Reset</Button>
                    </Col>
                    <Col className='col-2'>
                        <Button variant="primary" type="submit">FILTER</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
