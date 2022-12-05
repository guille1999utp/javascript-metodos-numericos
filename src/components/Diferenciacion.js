import React, { useState } from "react";
import { calcDiferenciacion } from "../utils/opeMatematicas";
import "./login.scss";
export const Diferenciacion = () => {
  const [mostrar, setMostrar] = useState(false);
  const [result, setResult] = useState(0);
  const [Form, setForm] = useState({
    funcion: "",
    ache: "",
    inicialValue: "",
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
    const result =  calcDiferenciacion(parseInt(Form.inicialValue),parseInt(Form.ache),Form.funcion);
    setResult(result);
    setMostrar(true);
  };

  return (
    <div className="login">
      <h1>Diferenciacion Numerica</h1>
      <div className="contenedor"></div>
      <form className="form-register" onSubmit={onSubmit}>
        <input
          name="funcion"
          value={Form.funcion}
          onChange={onChange}
          type="text"
          placeholder="ingrese la funcion"
        />
        <input
          name="inicialValue"
          value={Form.inicialValue}
          onChange={onChange}
          type="number"
          placeholder="Ingrese X0"
        />
        <input
          name="ache"
          value={Form.ache}
          onChange={onChange}
          type="number"
          placeholder="Ingrese h"
        />
        <button>Calcular</button>
      </form>

      {mostrar && (
        <div
          style={{
            flexDirection: "column",
            marginTop: 20,
          }}
        >
          <div
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
              M1:
            </p>
            <p>{result.M1}</p>
          </div>
          <div
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
              M2:
            </p>
            <p>{result.M2}</p>
          </div>
          <div
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
              M3:
            </p>
            <p>{result.M3}</p>
          </div>
        </div>
      )}
    </div>
  );
};
