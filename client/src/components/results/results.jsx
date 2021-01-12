import React from 'react';
import { connect } from 'react-redux';
import ResultCard from '../result-card/result-card';
import {createStructuredSelector} from 'reselect';
import {selectResultAfterFilter} from '../../redux/data/data.selectors';

const Results = ({results}) => {
    return(
       <div>
           {results.map(result => <ResultCard data={result} />)}
       </div>
    )
}

const mapStateToProps = createStructuredSelector({
    results : selectResultAfterFilter
})

export default connect(mapStateToProps)(Results);