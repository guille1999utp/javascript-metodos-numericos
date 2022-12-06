import React, { useState } from "react";
import {  calcGaussSeidel } from "../utils/opeMatematicas";
import "./login.scss";
export const Gauss = () => {
  const [mostrar, setMostrar] = useState(false);
  const [result, setResult] = useState(0);
  const [Form, setForm] = useState({
    primera: "",
    segunda: "",
    tercera: "",
    iniciales: "",
    iteraciones: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...Form,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result =  calcGaussSeidel(Form.primera,Form.segunda,Form.tercera,Form.iniciales,parseInt(Form.iteraciones));
    console.log(result)
    setResult(result);
    setMostrar(true);
  };

  return (
    <div className="login">
      <h1>Gauss Seidel</h1>
      <div className="contenedor"></div>
      <form className="form-register" onSubmit={onSubmit}>
        <input
          name="primera"
          value={Form.primera}
          onChange={onChange}
          type="text"
          placeholder="primer polinomio"
        />
        <input
          name="segunda"
          value={Form.segunda}
          onChange={onChange}
          type="text"
          placeholder="segundo polinomio"
        />
        <input
          name="tercera"
          value={Form.tercera}
          onChange={onChange}
          type="text"
          placeholder="tercer polinomio"
        />
        <input
          name="iniciales"
          value={Form.iniciales}
          onChange={onChange}
          type="text"
          placeholder="valores iniciales"
        />
        <input
          name="iteraciones"
          value={Form.iteraciones}
          onChange={onChange}
          type="text"
          placeholder="cantidad de iteraciones"
        />
        <button>Calcular</button>
      </form>

      {mostrar && (
        <div
          style={{
            flexDirection: "column",
            marginTop: 20,
            paddingBottom: "60px"
          }}
        >
          {result.sumX.map((_,i)=>{
            return <div
            style={{
              flexDirection: "row",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginRight: 10,
                fontSize: 17,
              }}
            >
              iteracion # {i+1}:
            </p>
            <p>x:{result.sumX[i]}</p>
            <p>y:{result.sumY[i]},</p>
            <p>z:{result.sumZ[i]}</p>
          </div>
          }) 
          }

     
        </div>
      )}
    </div>
  );
};
