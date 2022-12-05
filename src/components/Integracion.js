import React, { useState } from "react";
import { calcIntegracion } from "../utils/opeMatematicas";
import "./login.scss";
export const Integracion = () => {
  const [mostrar, setMostrar] = useState(false);
  const [result, setResult] = useState(0);
  const [Form, setForm] = useState({
    funcion: "",
    inferior: "",
    superior:"",
    subIntervalos:""
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
    const result =  calcIntegracion(parseInt(Form.inferior),parseInt(Form.superior),parseInt(Form.subIntervalos),Form.funcion);
    setResult(result);
    setMostrar(true);
  };

  return (
    <div className="login">
      <h1>Integracion Numerica</h1>
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
          name="inferior"
          value={Form.inferior}
          onChange={onChange}
          type="number"
          placeholder="Limite Inferior"
        />
        <input
          name="superior"
          value={Form.superior}
          onChange={onChange}
          type="number"
          placeholder="Limite Superior"
        />
        <input
          name="subIntervalos"
          value={Form.subIntervalos}
          onChange={onChange}
          type="number"
          placeholder="Numbero De SubIntervalos"
        />
        <button type="submit">Calcular</button>
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
            <p>La integral aproximada es: {result}</p>
          </div>
        </div>
      )}
    </div>
  );
};
