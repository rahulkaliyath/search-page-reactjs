import React,{useState} from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import './result-card.styles.scss';

const ResultCard = ({data}) => {

    const [open, setOpen] = useState(false);
    const {Title,Unit,Frequency,Source,Description} = data;
    return(
        <Card style={{ width: '100%' }} className='result-card'>
            <Card.Body>

                <Card.Title style={{ color: 'rgb(30, 116, 214)' }}>
                    {Title}
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                    {Unit},{Frequency},{Source}
                </Card.Subtitle>

                <Card.Text>
                    <Collapse in={open}>
                        <div id="example-fade-text">
                        {Description}
                        </div>
                    </Collapse>
                    <Card.Link
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        href="#">
                        {open ? "- Show Less" : "+ Show More"}
                    </Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ResultCard;