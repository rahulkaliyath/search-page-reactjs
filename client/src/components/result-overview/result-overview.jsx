
import FilterSidebar from '../filter-sidebar/filter-sidebar';
import Results from '../results/results';
import WithSpinner from '../spinner/spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import {createStructuredSelector} from 'reselect';
import { selectResultAfterFilter,selectFilters ,selectLoading} from '../../redux/data/data.selectors';
const ResultOverview = ({loading,filters,results}) => {
    return (

        <Fragment >
            {
            loading ? <WithSpinner/> :
            <Row>
                <Col >
                { filters.length>1 ? <label style={{"paddingLeft":"25%","paddingTop":"10px", fontWeight:"500"}}>
                    Refine your Search
                    </label> : '' }
                    <FilterSidebar/> 
                </Col>
                <Col  xs={8}>
                    Found {results.length} results
                    <Results/>
                </Col>
            </Row>
            }
        </Fragment>
    )
};

const mapStateToProps = createStructuredSelector({
    filters : selectFilters,
    results : selectResultAfterFilter,
    loading : selectLoading
})
export default connect(mapStateToProps)(ResultOverview);