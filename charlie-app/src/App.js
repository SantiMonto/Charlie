function App() {
  //const[]
  return (
    <div class="formData">
      <div class="titulo">
      <h2>Calculo del precio de venta</h2>
      </div>
      <form action="resultados.html" method="GET">
        <div>
          <label for="nombreUsuario">Nombre empleado: </label>
          <input type="text" name="nombreUsuario" id="nombreUsuario" required />
        </div>
        <br />
        <div>
          <label for="nombreEmpresa">Nombre empresa: </label>
          <input type="text" name="nombreEmpresa" id="nombreEmpresa" required />
        </div>
        <br />
        <div>
          <label for="nombreContacto">Nombre contacto cliente: </label>
          <input
            type="text"
            name="nombreContacto"
            id="nombreContacto"
            required
          />
        </div>
        <br />
        <div>
          <label for="nombreEmpresaCliente">Nombre empresa cliente: </label>
          <input
            type="text"
            name="nombreEmpresaCliente"
            id="nombreEmpresaCliente"
            required
          />
        </div>
        <br />
        <div>
          <label for="costo">Costo del producto: </label>
          <input
            type="number"
            name="costo"
            id="costo"
            required
          />
        </div>
        <br />
        <div>
          <label for="margen">Margen estimado: </label>
          <input
            type="number"
            name="margen"
            id="margen"
            required
          />
        </div>
        <br />
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
}

export default App;
