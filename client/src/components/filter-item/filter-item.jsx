import React, {useEffect, useState} from 'react';
import {addFilter,removeFilter} from '../../redux/data/data.actions';
import { connect } from 'react-redux';
import './filter-item.styles.scss';

const FilterItem = ({filterCount, filterName, filterCategory,addFilter,removeFilter}) => {

    const [selected, setSelected] = useState(false);
    const [alreadySelected, setAlreadySelected] = useState(false);

    useEffect( () =>{
        if(selected){
            addFilter(filterCategory,filterName)
            setAlreadySelected(!alreadySelected)
        }
        else if(alreadySelected){
            removeFilter(filterCategory,filterName)
            setAlreadySelected(!alreadySelected)
        }
        
      
    },[selected] )

    const handleChange = event =>{
        setSelected(!selected);
        
    } 

    return(
       <div 
            className={selected ?'filter-item selected' :'filter-item'}
            onClick={handleChange}>
                {filterName}      
            <span className='result-count'>({filterCount[filterName]})</span>
       </div>
    )
}

export default connect(null,{addFilter,removeFilter})(FilterItem);