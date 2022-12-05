import React, { useState } from "react";
import { calcPuntoFijo } from "../utils/opeMatematicas";
import "./login.scss";
export const PuntoFijo = () => {
  const [mostrar, setMostrar] = useState(false);
  const [result, setResult] = useState(0);
  const [Form, setForm] = useState({
    funcion: "",
    Inicial: "",
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
    const result =  calcPuntoFijo(parseInt(Form.Inicial),Form.funcion);
    setResult(result);
    setMostrar(true);
  };

  return (
    <div className="login">
      <h1>Punto Fijo</h1>
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
          name="Inicial"
          value={Form.Inicial}
          onChange={onChange}
          type="text"
          placeholder="Valor inicial"
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
            <p>{result?.converge?"Los errores no convergen":"Los errores tienden a convergir"}</p>
            
            <p>{result?.Error}</p>
          </div>
        </div>
      )}
    </div>
  );
};
