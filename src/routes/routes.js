import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import { Biseccion } from "../components/Biseccion";
import { Diferenciacion } from "../components/Diferenciacion";
import { Error } from "../components/Error";
import { Gauss } from "../components/GaussSeidel";
import Header  from "../components/header";
import { Home } from "../components/Home";
import { Integracion } from "../components/Integracion";
import { Netwon } from "../components/Netwon";
import { PolinomioLagrange } from "../components/PolinomioLagrange";
import { PuntoFijo } from "../components/PuntoFIjo";


export default function RoutesPage() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
            <Route path="/error" element={<Error />} />
            <Route path="/biseccion" element={<Biseccion />} />
            <Route path="/lagrange" element={<PolinomioLagrange />} />
            <Route path="/netwon" element={<Netwon />} />
            <Route path="/puntofijo" element={<PuntoFijo />} />
            <Route path="/integracion" element={<Integracion />} />
            <Route path="/diferenciacion" element={<Diferenciacion />} />
            <Route path="/gauss" element={<Gauss />} />
            <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}