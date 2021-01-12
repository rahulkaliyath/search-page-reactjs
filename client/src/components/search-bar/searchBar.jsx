import React ,{useState}from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import {connect} from 'react-redux';
import {searchData} from '../../redux/data/data.actions';

const SearchBar = ({searchData}) => {

    const [open, setOpen] = useState(false);
    const handleSubmit = event =>{
        event.preventDefault();
        searchData(open);
    }

    const handleChange = event => {
        setOpen(event.target.value);
    }

    return(
        <div>
            <InputGroup size="lg">
                <FormControl 
                 aria-label="Large" 
                 aria-describedby="inputGroup-sizing-sm"
                 onChange={handleChange} 
                 placeholder="Search something"/>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={handleSubmit}>
                            Search
                        </Button>
                    </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default connect(null,{searchData})(SearchBar);