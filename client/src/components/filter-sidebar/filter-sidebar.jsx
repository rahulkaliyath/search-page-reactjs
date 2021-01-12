import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import FilterCategory from '../filter-category/filter-category';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectFilters} from '../../redux/data/data.selectors';

const FilterSidebar = ({filters}) => {
    return(
            
           <Accordion>
                {filters.map((filter,idx) => 
                    <FilterCategory eventKey={(idx+1).toString()} filterData={filter}/>)}
            </Accordion>
    )
}

const mapStateToProps = createStructuredSelector({
    filters : selectFilters
})

export default connect(mapStateToProps)(FilterSidebar);