import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [nombreUsuario, setNombreUsuario] = useState();
  const [nombreContacto, setNombreContacto] = useState();
  const [nombreEmpresaCliente, setNombreEmpresaCliente] = useState();
  const [precioVenta, setPrecioVenta] = useState();
  const [nombreEmpresa, setNombreEmpresa] = useState();
  const [costo, setCosto] = useState();
  const [margen, setMargen] = useState();

  const calcularPrecio = () => {
    if (
      nombreUsuario &&
      nombreContacto &&
      nombreEmpresaCliente &&
      nombreEmpresa &&
      costo &&
      margen
    ) {
      const PV = Math.ceil(costo / (1 - margen / 100));
      setPrecioVenta(PV);
    }
    if (!nombreUsuario) {
      alert(
        "<No pudimos procesar el precio ya que no tenemos dato de el empleado"
      );
    }
    else if (!nombreEmpresa) {
      alert(
        "No pudimos procesar el precio ya que no tenemos el dato de la empresa"
      );
    }
    else if (!nombreContacto) {
      alert(
        "No pudimos procesar el precio ya que no tenemos el dato del cliente"
      );
    }
    else if (!nombreEmpresaCliente) {
      alert(
        "No pudimos procesar el precio ya que no tenemos el dato de la empresa del cliente"
      );
    }
    else if (!costo) {
      alert(
        "No pudimos procesar el precio ya que no tenemos el dato del costo"
      );
    }
    else if (!margen) {
      alert(
        "No pudimos procesar el precio ya que no tenemos el dato del margen"
      );
    }
  };
  return (
    <div>
      <div class="formData">
        <div class="titulo">
          <h2>Calculo del precio de venta</h2>
        </div>
        <form action="resultados.html" method="GET">
          <div>
            <label for="nombreUsuario">Nombre empleado: </label>
            <input
              type="text"
              name="nombreUsuario"
              id="nombreUsuario"
              placeholder="Escriba su nombre"
              required
              onChange={(e) => {
                setNombreUsuario(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label for="nombreEmpresa">Nombre empresa: </label>
            <input
              type="text"
              name="nombreEmpresa"
              id="nombreEmpresa"
              placeholder="Escriba el nombre de su empresa"
              required
              onChange={(e) => {
                setNombreEmpresa(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label for="nombreContacto">Nombre contacto cliente: </label>
            <input
              type="text"
              name="nombreContacto"
              id="nombreContacto"
              placeholder="Escriba el nombre del contacto del cliente"
              required
              onChange={(e) => {
                setNombreContacto(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label for="nombreEmpresaCliente">Nombre empresa cliente: </label>
            <input
              type="text"
              name="nombreEmpresaCliente"
              id="nombreEmpresaCliente"
              placeholder="Escriba el nombre de la empresa cliente"
              required
              onChange={(e) => {
                setNombreEmpresaCliente(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label for="costo">Costo del producto: </label>
            <input
              type="number"
              name="costo"
              id="costo"
              placeholder="Escriba el nombre del producto"
              required
              onChange={(e) => {
                setCosto(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label for="margen">Margen estimado: </label>
            <input
              type="number"
              name="margen"
              id="margen"
              placeholder="Escriba el margen del producto en numero. Ejemplo: 10"
              required
              onChange={(e) => {
                setMargen(e.target.value);
              }}
            />
          </div>
          <br />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              calcularPrecio();
            }}
          >
            Calcular
          </button>
          <ToastContainer />
        </form>
      </div>
      <div class="resultados">
        <div class="respuestas">
          <div>
            <p>Hola {nombreUsuario}</p>
          </div>
          <div>
            <p>
              El precio de venta del producto que deseas entregar a{" "}
              {nombreContacto} de la compañía {nombreEmpresaCliente} es de $
              {precioVenta}
            </p>
          </div>
          <div>
            <p>
              Con esta venta {nombreEmpresa} tendrá un margen de {margen}%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
