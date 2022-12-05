import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { calcNewtonRaphson } from '../utils/opeMatematicas';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const PolinomioLagrange = () => {
  const [value, setValue] = React.useState(0);
  const [mostrar, setMostrar] = React.useState(false);
  const [result, setResult] = React.useState(0);
  const [Form, setForm] = React.useState({
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
    const result =  calcNewtonRaphson(parseInt(Form.Inicial),Form.funcion);
    setResult(result);
    setMostrar(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="login" style={{maxWidth:"800px"}}>
        <h1 style={{marginBottom:"20px"}}>Polinomio de Lagrange</h1>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Primer Orden" {...a11yProps(0)} />
          <Tab label="Segundo Orden" {...a11yProps(1)} />
          <Tab label="Tercer Orden" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="contenedor"></div>
      <form className="form-register" onSubmit={onSubmit} style={{maxWidth:"600px",margin:"auto"}}>
        <input
          name="funcion"
          value={Form.funcion}
          onChange={onChange}
          type="text"
          placeholder="coeficientes del primer polinomio"
        />
        <input
          name="Inicial"
          value={Form.Inicial}
          onChange={onChange}
          type="text"
          placeholder="coeficientes del segundo polinomio"
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
            <p>Resultado: {result}</p>
          </div>
        </div>
      )}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="contenedor"></div>
      <form className="form-register" onSubmit={onSubmit} style={{maxWidth:"600px",margin:"auto"}}>
        <input
          name="funcion"
          value={Form.funcion}
          onChange={onChange}
          type="text"
          placeholder="coeficientes del primer polinomio"
        />
        <input
          name="Inicial"
          value={Form.Inicial}
          onChange={onChange}
          type="text"
          placeholder="coeficientes del segundo polinomio"
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
            <p>Resultado: {result}</p>
          </div>
        </div>
      )}
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="contenedor"></div>
      <form className="form-register" onSubmit={onSubmit} style={{maxWidth:"600px",margin:"auto"}}>
        <input
          name="funcion"
          value={Form.funcion}
          onChange={onChange}
          type="text"
          placeholder="coeficientes del primer polinomio"
        />
        <input
          name="Inicial"
          value={Form.Inicial}
          onChange={onChange}
          type="text"
          placeholder="coeficientes del segundo polinomio"
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
            <p>Resultado: {result}</p>
          </div>
        </div>
      )}
      </TabPanel>
    </Box>
  );
}
