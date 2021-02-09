import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
  return (
    <>
      <Navbar bg='dark' expand='lg' variant='dark' className='mb-5'>
        <Navbar.Brand href='../' className='pl-3'>
          AU Rec Center
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='pl-3'>
          <Nav className='ml-auto pr-3'>
            <Nav.Link href='../#Calendar'>Calendar</Nav.Link>
            <Nav.Link href='../#Reservation'>Reservation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
