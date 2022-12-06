import React from 'react'
import { AiOutlineUserAdd,AiOutlinePercentage } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiErrorAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { TbArrowsMinimize,TbActivity,TbSum,TbMath,TbMathFunction,TbTournament } from "react-icons/tb";

export const Home = () => {

    const navigate = useNavigate();
  const onClick = (location) =>{
    navigate(`../${location}`);
  }


  return (
    <div className='homeAdmin' style={{paddingBottom:"90px"}}>

    <div className='panelAdmin' onClick={()=>onClick("error")}>
      <BiErrorAlt fontSize={90} className="iconHome"/>
      <p>Error</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("lagrange")}>
    <AiOutlinePercentage fontSize={90} className="iconHome"/>
      <p>lagrange</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("netwon")}>
    <TbMath fontSize={90} className="iconHome"/>
      <p>netwon raphsom</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("puntofijo")}>
    <TbArrowsMinimize fontSize={90} className="iconHome"/>
      <p>Punto Fijo</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("integracion")}>
    <TbActivity fontSize={90} className="iconHome"/>
      <p>Integracion</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("diferenciacion")}>
    <TbMathFunction fontSize={90} className="iconHome"/>
      <p>Diferenciacion</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("biseccion")}>
    <TbSum fontSize={90} className="iconHome"/>
      <p>Biseccion</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("gauss")}>
    <TbTournament fontSize={90} className="iconHome"/>
      <p>Gauss Seidel</p>
    </div>

    </div>
  )
}
