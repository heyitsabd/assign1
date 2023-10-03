import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { card_data } from './data';
import { LuUsers2 } from "react-icons/lu";
import { BsFuelPump,BsSpeedometer } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { Carousel } from 'react-bootstrap';
function Cards() {

  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        {card_data.map((item,idx)=>{
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
            )
        })}
        </div>
  );
}

export default Cards;