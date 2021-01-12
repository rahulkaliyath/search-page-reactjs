import Spinner from 'react-bootstrap/Spinner';
import './spinner.styles.scss';
const WithSpinner = () => {
    return (
        <div className='spinner'>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
};

export default WithSpinner;