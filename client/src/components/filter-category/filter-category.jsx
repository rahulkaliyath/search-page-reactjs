import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Form  from 'react-bootstrap/Form';
import FilterItem from '../filter-item/filter-item';
import './filter-category.styles.scss';

const FilterCategory = ({eventKey,filterData}) => {

    const {category, filterItems} =filterData; 
    const [filterSearch, setFilterSearch] = useState("");
    const [categoryClicked, setCategoryClicked] = useState(false);
    const handleChange = event => {
        setFilterSearch(event.target.value);
    }
    
    const itemKeys = Object.keys(filterItems);
    const searchKeys = itemKeys.filter(key => 
        key.toLowerCase().includes(filterSearch.toLowerCase()));
    
    return(
            <Card className='filter-category'>
                <Accordion.Toggle
                    as={Card.Header} 
                    eventKey={eventKey} 
                    className='title'
                    onClick={() => setCategoryClicked(!categoryClicked)}>

                        <span>{category}</span>  
                        <span >{categoryClicked? '-' : '+'}</span> 
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={eventKey}>
                    <Card.Body>
                    
                        <Form.Group>
                            <Form.Control
                            type="text"
                            placeholder={`Search ${category}`}
                            onChange={handleChange}/>
                        </Form.Group>

                        <div className='filters'>
                            {searchKeys.map(
                                key => 
                                <FilterItem filterCount={filterItems} filterName={key} filterCategory={category}/>
                            )}
                        </div>                               
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default FilterCategory;