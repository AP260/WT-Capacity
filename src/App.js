import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const firstflooreastper = 10;
  return (
    <div className="App">
      <Button class="btn text-primary bg-transparent" onClick={handleShow}>
          Wait Times
      </Button>
      <Modal show={show} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Wait Times</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Geisel Library</Accordion.Header>
                <Accordion.Body>
                  <h5>
                    1st Floor East
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 150</p>
                  {firstflooreastper < 20 ? <p className='text-success'> Not Busy({firstflooreastper}%)</p> :
                   firstflooreastper < 80 ? <p className='text-warning'> Busy({firstflooreastper}%)</p> : 
                   <p className='text-danger'> Very Busy({firstflooreastper}%)</p>}
                  {firstflooreastper < 20 ? <ProgressBar animated='true' striped variant='success' now={firstflooreastper} label={`${firstflooreastper}%`} /> : 
                   firstflooreastper < 80 ? <ProgressBar animated='true' striped variant='warning' now={firstflooreastper} label={`${firstflooreastper}%`} /> : 
                   <ProgressBar animated='true' striped variant='danger' now={firstflooreastper} label={`${firstflooreastper}%`} />}
                </Accordion.Body>
                <Accordion.Body>
                  <h5>
                    1st Floor West                    
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 520</p>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
                <Accordion.Body>
                  <h5>
                    2nd Floor East                    
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 620</p>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
                <Accordion.Body>
                  <h5>
                    2nd Floor West                    
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 460</p>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
                <Accordion.Body>
                  <h5>
                    4th Floor                    
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 80</p>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
                <Accordion.Body>
                  <h5>
                    5th Floor                    
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 155</p>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
                <Accordion.Body>
                  <h5>
                    6th Floor                    
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 440</p>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
                <Accordion.Body>
                  <h5>
                    7th Floor                    
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 195</p>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
                <Accordion.Body>
                  <h5>
                    8th Floor                    
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 165</p>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
                <Accordion.Body>
                  <h5>
                    Teaching and Learning Commons                    
                  </h5>
                  <p className='fw-light fs-6 text-muted'>Capacity: 195</p>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>RIMAC Fitness Gym</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Main Gym</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='3'>
                <Accordion.Header>Cafe Ventanas</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='4'>
                <Accordion.Header>6th Restaurants</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='5'>
                <Accordion.Header>The Bistro</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='6'>
                <Accordion.Header>Canyon Vista</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='7'>
                <Accordion.Header>64 Degrees</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='8'>
                <Accordion.Header>Foodworx</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='9'>
                <Accordion.Header>Pines</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='10'>
                <Accordion.Header>OceanView Terrace</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='11'>
                <Accordion.Header>Club Med</Accordion.Header>
                <Accordion.Body>
                  <p className='text-success'> Not Busy(10%)</p>
                  <ProgressBar animated='true' striped variant='success' now={10} label={`${10}%`} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
