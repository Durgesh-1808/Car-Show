import '../App.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsFillPeopleFill, BsSpeedometer} from 'react-icons/bs';
import {BiGasPump} from 'react-icons/bi';
import {PiSteeringWheelDuotone} from 'react-icons/pi';
import { data } from '../utils/data';
import Nav from '../Nav';

function Page7(){
    return(<>
        <div className="mainview">
        {data.cars.slice(37, 43).map((car)=>{
            return(<>
              <div className='Card'>
                  <img style={{height: '10rem', width: '15rem', borderRadius: '.4rem'}} src={car.img} alt="nothing"/>
                  <div className='first-row'>
                      <div style={{marginRight: '2.5rem'}}><p>{car.name}</p></div>
                      <div style={{marginLeft: '2.5rem'}}><p>{car.year}</p></div>
                  </div>
                  <div className='second-row'>
                      <p style={{marginRight: '2.5rem'}}><BsFillPeopleFill color='lightskyblue'/> {car.seating}</p>
                      <p style={{marginLeft: '2.5rem'}}><BiGasPump color='lightskyblue'/> {car.fuel_type}</p>
                  </div>
                  <div className='third-row'>
                      <p style={{marginRight: '2.5rem'}}><BsSpeedometer color='lightskyblue'/> {car.mileage}</p>
                      <p style={{marginLeft: '2.5rem'}}><PiSteeringWheelDuotone color='lightskyblue'/> {car.transmission}</p>
                  </div>
                  <hr/>
                  <div className='fourth-row'>
                      <p style={{marginRight: '2.5rem'}}>${car.rent_price}/month</p>
                      <button style={{marginLeft: '2.5rem', backgroundColor:'rgba(211,211,211,0.4)', border: 'none', height:'1.3rem', width:'1.3rem'}}>
                          <AiOutlineHeart color='lightskyblue'/>
                      </button>
                      <button style={{marginLeft: '.5rem', width: 'max-content', backgroundColor:'lightskyblue', borderRadius: '.3rem', color:' white', border: 'none'}}>Rent now</button>
                  </div>
              </div>
            </>)
        })}
    </div>
    <Nav id={7}/>
    </>)
}

export default Page7;