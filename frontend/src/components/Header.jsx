import React,{  useRef } from 'react';
import styled from 'styled-components';
export default function Header(props) {
  const {focus}=props

  function changeFocus(){
    focus.current.focus()
  }

  const StyledHeader = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:#414141;
  height:80px;

  .logo{
    border-radius:20px;
    height:fit-content;
    padding-left:10px;
    padding-right:10px;
    color:white;
    font-family:Monoton;
    font-size:45px;
    letter-spacing:3px;
  }
  .new-tweet{
    border-radius:15px;
    height:fit-content;
    padding:7px;
    margin-right:60px;
  }
  .new-tweet a{
    color:white;
    font-size:28px;
  }
`;
  return (
    
    <StyledHeader>
        <div style={{marginLeft:"60px"}}>
          <a href='' className='logo'id='log'>TWOOTR</a>
        </div>
        <div className='new-tweet'id="bnt">
        <button onClick={changeFocus}  className='btn-nostyle' style={{fontSize:"25px"}}>Write a new tweet</button> 
        </div>
    </StyledHeader>
  )
}
