import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Nav({id}){
    const navigate= useNavigate();
    return(
        <div style={{display: 'flex', flexDirection: 'row', textDecoration: 'none', margin: '5rem'}}>
            <button onClick={()=>{
                if(id !== 1){
                    navigate(`/pages/${id-1}`);
                }
            }}
            style={{border: 'none', backgroundColor: 'lightgray'}}><AiOutlineArrowLeft style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}}/></button>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/1'>1</Link>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/2'>2</Link>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/3'>3</Link>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/4'>4</Link>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/5'>5</Link>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/6'>6</Link>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/7'>7</Link>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/8'>8</Link>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/9'>9</Link>
            <Link style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}} to='/pages/10'>10</Link>
            <button onClick={()=>{
                if(id !== 10){
                    navigate(`/pages/${id+1}`);
                }
            }}
            style={{border: 'none', backgroundColor: 'lightgray'}}><AiOutlineArrowRight style={{textDecoration: 'none', color: 'black', border: '.1rem solid' , backgroundColor: 'white', marginLeft: '.3rem', padding: '.4rem', borderRadius: '.4rem'}}/></button>
        </div>
    );
}

export default Nav;