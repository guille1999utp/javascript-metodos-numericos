import React, { useState } from "react";
import { calcBiseccion } from "../utils/opeMatematicas";
import "./login.scss";
export const Biseccion = () => {
  const [mostrar, setMostrar] = useState(false);
  const [result, setResult] = useState(0);
  const [Form, setForm] = useState({
    funcion: "",
    Superior: "",
    Inferior: "",
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
    const result =  calcBiseccion(parseInt(Form.Inferior),parseInt(Form.Superior),Form.funcion);
    setResult(result);
    setMostrar(true);
  };

  return (
    <div className="login">
      <h1>Biseccion</h1>
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
          name="Inferior"
          value={Form.Inferior}
          onChange={onChange}
          type="text"
          placeholder="Valor Aproximado"
        />
        <input
          name="Superior"
          value={Form.Superior}
          onChange={onChange}
          type="text"
          placeholder="Valor Aproximado"
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
              Resultado:
            </p>
            <p>{result === 0?"no existe raiz en ese intervalo":result}</p>
          </div>
        </div>
      )}
    </div>
  );
};
