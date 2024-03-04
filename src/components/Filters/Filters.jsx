import axios from 'axios';

import './Filters.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Filters({ setPlantList }) {
    const [formData, setFormData] = useState({
        search: '',
        test: '',
    });

    // useEffect({

    // }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };



    async function handleSearch(evt) {
        evt.preventDefault();
        const params = {
            "q": formData.search,
            "key": API_KEY,
        };
        const apiBaseUrl = 'https://perenual.com/api';
        const plantResult = await axios.get(`${apiBaseUrl}/species-list`, { params });
        setPlantList(plantResult.data.data);
    }

    return (
        <div >
            <Form onSubmit={handleSearch}>
                <Form.Group as={Row} className="p-2 plant-form-filter">
                    <Form.Group as={Col} className="mb-3" >
                        <Form.Label>Plant Name </Form.Label>
                        <Form.Control
                            type="text"
                            name="search"
                            value={formData.search}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" >
                        <Form.Label>Plant Name </Form.Label>
                        <Form.Control
                            as="select"
                            name="action"
                            required={false}
                            value={formData.action}
                            onChange={(event) => handleChange(event)}
                        >
                            <option value="">Select Hardiness</option>
                            <option value="a">1</option>
                            <option value="b">2</option>
                            <option value="c">3</option>
                            <option value="d">4</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" >
                        <Button type="submit">FILTER</Button>
                    </Form.Group>

                </Form.Group>
            </Form>
        </div>
    );
}