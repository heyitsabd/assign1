import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { card_data } from './data';
import { LuUsers2 } from "react-icons/lu";
import { BsFuelPump,BsSpeedometer } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { Carousel } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { GrFormPreviousLink,GrFormNextLink } from "react-icons/gr";


function NavScroll() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(card_data.slice(0,60));
  const [pagenumber,setPagenumber]=useState(0)
  const userPerPage=6;
  const pagesVisited = pagenumber * userPerPage;


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredResults = card_data.filter((item) =>
      item.carname.toLowerCase().includes(value.toLowerCase())
    );
    
    
    setSearchResults(filteredResults);
  };

  const displayUser = searchResults.slice(pagesVisited,pagesVisited+userPerPage).map((item,idx)=>{
    return(
     
      <Card key={idx} style={{ width: '25rem',margin:'5vh 0',marginLeft:'auto',marginRight:'auto',background:'#F2F6FC',border:'1px white', boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img
          src={item.imageSource1}
          alt="First slide"
          style={{width:'80%',height:'150px',marginLeft:'auto',marginRight:'auto',padding:'10px',borderRadius:'15px'}}
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={item.imageSource2}
          alt="First slide"
          style={{width:'80%',height:'150px',marginLeft:'auto',marginRight:'auto',padding:'10px',borderRadius:'15px'}}
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={item.imageSource2}
          alt="First slide"
          style={{width:'80%',height:'150px',marginLeft:'auto',marginRight:'auto',padding:'10px',borderRadius:'15px'}}
      />
      </Carousel.Item>
      </Carousel>

      <Card.Body>
      <div style={{ display: 'flex', flexWrap: 'wrap', color: '#4999ED', justifyContent: 'space-between' }}>
      {item.carname}
      <div style={{ border: '2px dashed #4999ED', padding: '1px 5px',borderRadius:'5px',color:'black' }}>{item.year}</div>
      </div>

        <Card.Text style={{display:'flex',flexWrap:'wrap',color:'#4999ED',}}>
          <div className="d-flex align-items-center" style={{marginRight:'10vh'}}>
              <LuUsers2 className="mr-1"/> {item.capacity} people
          </div>
          <div className="d-flex align-items-center" style={{marginRight:'6vh'}}>
              <BsFuelPump className="mr-1"/> {item.fuel}
          </div>
          <div className="d-flex align-items-center" style={{marginRight:'10vh'}}>
              <BsSpeedometer className="mr-1"/> {item.milage}
          </div>
          <div className="d-flex align-items-center" style={{marginRight:'10vh'}}>
              <PiSteeringWheelBold className="mr-1"/> {item.driver}
          </div>
          </Card.Text>
          <hr/>
          <div style={{display:'flex',flexWrap:'wrap',color:'black',justifyContent:'space-between'}}>
              <h4>{item.EMI}</h4>
              <div style={{ position: 'relative', width: '30px', height: '35px', background: '#DBEAFA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center',left:'10%' }}>
              <AiOutlineHeart style={{ fontSize: '20px',color:'#4999ED' }} />
              </div>

        <Button variant="primary">Rent now</Button>
        </div>
      </Card.Body>
    </Card>
  )} 
  )
  const pageCount = Math.ceil(searchResults.length / userPerPage);

  const changePage = ({ selected }) => {
    setPagenumber(selected);
    if((selected+1)>pageCount){
      setPagenumber(pageCount-1)
    }
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar_style"
        style={{ borderRadius: '20px', width: '98%', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              aria-label="Search"
              style={{ width: '50vh', color: 'gray', borderRadius: '40px' }}
            />

            <AiOutlineSearch
              style={{
                color: 'gray',
                fontSize: '25px',
                position: 'relative',
                marginTop: '5px',
                left: '-5vh',
              }}
            />
          </Form>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Relevance"></NavDropdown>
              <NavDropdown title="All brands"></NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {displayUser}
      
      </div>
      <div style={{marginLeft:'25px',marginBottom:'-30px'}}>{pagenumber+1} from {pageCount}</div>
      
      <div className='navbar_style' style={{borderRadius: '20px', width: '98%', marginLeft: 'auto', marginRight: 'auto'}}>
      
      <ReactPaginate
        previousLabel={<GrFormPreviousLink style={{fontSize: '45px', backgroundColor: '#FDFDFD', transition: 'background-color 0.3s',borderRadius:'15px'}} />}
        nextLabel={<GrFormNextLink style={{ fontSize: '45px', backgroundColor: '#FDFDFD', marginTop: '0px', transition: 'background-color 0.3s',borderRadius:'15px'}} />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      
      </div>
      
    </>
  );
}

export default NavScroll;
