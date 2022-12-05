import React, { useState } from "react";
import "./login.scss";
export const Error = () => {
  const [mostrar, setMostrar] = useState(false);
  const [result, setResult] = useState({
    error: 0,
    errorRelativo: 0,
    errorAbsoluto: 0,
  });
  const [Form, setForm] = useState({
    valueTrue: "",
    valueFalse: "",
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
    console.log(Form);
    let error = parseFloat(Form.valueTrue) - parseFloat(Form.valueFalse);
    let errorRelativo = error / parseFloat(Form.valueTrue);
    let errorAbsoluto = errorRelativo * 100;
    setResult({
      error,
      errorRelativo,
      errorAbsoluto,
    });
    setMostrar(true);
  };

  return (
    <div className="login">
      <h1>Error</h1>
      <div className="contenedor"></div>
      <form className="form-register" onSubmit={onSubmit}>
        <input
          name="valueTrue"
          value={Form.valueTrue}
          onChange={onChange}
          type="text"
          placeholder="Valor Verdadero"
        />
        <input
          name="valueFalse"
          value={Form.valueFalse}
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
              Error:
            </p>
            <p>{result.error}</p>
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
              Error Absoluto:
            </p>
            <p>{result.errorAbsoluto}</p>
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
              Error Relativo:
            </p>
            <p>{result.errorRelativo}</p>
          </div>
        </div>
      )}
    </div>
  );
};
