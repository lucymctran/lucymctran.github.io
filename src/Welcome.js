import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './components/App.css';
import Link from './components/Link';

const Welcome = () => {
    return (
        <Container>
            <Row className="centerBox"> 
                <div className="categoryWrapper">
                    <h1 className="flex-item">
                        Welcome!
                     </h1>
                    <Link href="/Main">
                        <button>
                            <span>
                                <span>
                                    <span data-attr-span="Check out the website"> 
                                        Check out the website <i className='arrow right icon'></i>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </div>
            </Row>
      </Container>
    );
};

export default Welcome;