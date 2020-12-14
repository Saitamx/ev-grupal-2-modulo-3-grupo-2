import { useState } from "react";
import Swal from "sweetalert2";

export default function Cliente() {
  const [form, setForm] = useState({
    nombreCliente: "",
    fNacCliente: "",
    direccionCliente: "",
    telefonoCliente: "",
    mailCliente: "",
    nombreEvento: "",
    servicioEvento: "",
    estadoEvento: "",
    direccionEvento: "",
    fechaEvento: "",
  });

  const {
    nombreCliente,
    fNacCliente,
    direccionCliente,
    telefonoCliente,
    mailCliente,
    nombreEvento,
    servicioEvento,
    estadoEvento,
    direccionEvento,
    fechaEvento,
  } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (nombreCliente.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "El nombre del cliente es obligatorio",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (fNacCliente.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "La fecha de nacimiento del cliente es obligatoria",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (direccionCliente.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "La dirección del cliente es obligatoria",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (telefonoCliente.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "El teléfono del cliente es obligatorio",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (mailCliente.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "El mail del cliente es obligatorio",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (nombreEvento.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "El nombre del evento es obligatorio",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (
      servicioEvento.trim() === "" ||
      estadoEvento.trim() === "" ||
      direccionEvento.trim() === "" ||
      fechaEvento.trim() === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "El servicio del evento es obligatorio",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (
      estadoEvento.trim() === "" ||
      direccionEvento.trim() === "" ||
      fechaEvento.trim() === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "El estado del evento es obligatorio",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (direccionEvento.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "La dirección del evento es obligatoria",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (fechaEvento.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "La fecha del evento es obligatoria",
        footer: "este mensaje se cerrará automáticamente",
        timer: 3000,
      });
      return;
    }

    if (!/^[A-Za-z0-9\s]+$/g.test(nombreEvento)) {
      Swal.fire({
        icon: "error",
        title: "El nombre del evento solo debe contener letras y números",
        text: "Esta mensaje se cerrará automáticamente",
        timer: 2000,
        button: false,
      });
      return;
    }

    // Validar email
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(mailCliente)) {
      Swal.fire({
        icon: "error",
        title: "Debe ingresar un correo válido",
        text: "Esta mensaje se cerrará automáticamente",
        timer: 2000,
        button: false,
      });
      return;
    }

    // Validar nombre cliente
    if (!/^[^!-\\/:-@\\[-`{-~]+$/.test(nombreCliente)) {
      Swal.fire({
        icon: "error",
        title: "Debe ingresar un nombre de cliente válido",
        text: "Esta mensaje se cerrará automáticamente",
        timer: 2000,
        button: false,
      });
      return;
    }

    if (!/^([0-9])*$/.test(telefonoCliente) || telefonoCliente.length !== 8) {
      Swal.fire({
        icon: "error",
        title: "Debe ingresar un celular válido (8 dígitos).",
        text: "Esta mensaje se cerrará automáticamente",
        timer: 2000,
        button: false,
      });
      return;
    }

    Swal.fire({
      icon: "info",
      title: "Información del evento",
      html: `
      <p>Nombre cliente: ${nombreCliente}</p>
      <p>Fecha nacimiento cliente: ${fNacCliente}</p>
      <p>Dirección cliente: ${direccionCliente}</p>
      <p>Celular cliente: ${telefonoCliente}</p>
      <p>Mail cliente: ${mailCliente}</p>
      <p>Nombre evento: ${nombreEvento}</p>
      <p>Servicio evento: ${
        servicioEvento === 1
          ? "Fotografía"
          : servicioEvento === 2
          ? "Música en vivo"
          : "Banquetería"
      }</p>
      <p>Estado evento: ${
        estadoEvento === 1
          ? "En proceso"
          : estadoEvento === 2
          ? "Pausado"
          : "Terminado"
      }</p>
      <p>Dirección evento: ${direccionEvento}</p>
      <p>Fecha evento: ${fechaEvento}</p>
      <p>Total NETO $${new Intl.NumberFormat("de-DE").format(
        Math.trunc(
          servicioEvento === 1 ? 50000 : servicioEvento === 2 ? 100000 : 150000
        )
      )}</p>
      <p>Total a pagar (IVA incluido) $${new Intl.NumberFormat("de-DE").format(
        Math.trunc(
          servicioEvento === 1
            ? 50000 * 1.19
            : servicioEvento === 2
            ? 100000 * 1.19
            : 150000 * 1.19
        )
      )}</p>
      `,
      showCancelButton: false,
      showConfirmButton: true,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Formulario evento</h2>
          <br />
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group col-md-12">
            <h4>Datos del cliente</h4>
            <label htmlFor="nombreCliente">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombreCliente"
              placeholder="Ingrese nombre y apellido"
              name="nombreCliente"
              onChange={onChange}
              value={nombreCliente}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="fNacCliente">Fecha nacimiento</label>
            <input
              type="date"
              className="form-control"
              id="fecNac"
              label="Ingrese su fecha de nacimiento"
              name="fNacCliente"
              onChange={onChange}
              value={fNacCliente}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="direccionCliente">Dirección</label>
            <input
              type="text"
              className="form-control"
              id="direccionCliente"
              placeholder="Ingrese dirección"
              name="direccionCliente"
              onChange={onChange}
              value={direccionCliente}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="telefonoCliente">Celular</label>
            <input
              type="text"
              className="form-control"
              id="telefonoCliente"
              placeholder="Ingrese teléfono"
              name="telefonoCliente"
              onChange={onChange}
              value={telefonoCliente}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="mailCliente">Mail</label>
            <input
              type="text"
              className="form-control"
              id="correo"
              placeholder="Ingrese su correo electrónico"
              name="mailCliente"
              onChange={onChange}
              value={mailCliente}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-12">
            <h4>Datos del evento</h4>
            <label htmlFor="nombreEvento">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombreEvento"
              placeholder="Ingrese nombre del evento"
              name="nombreEvento"
              onChange={onChange}
              value={nombreEvento}
              minLength="10"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="servicioEvento">Tipo de servicio</label>
            <select
              id="tipoEvento"
              className="form-control"
              name="servicioEvento"
              onChange={onChange}
              value={servicioEvento}
            >
              <option value="0" selected>
                Seleccionar
              </option>
              <option value="1">Fotografía ($ 50.000)</option>
              <option value="2">Música en vivo ($ 100.000)</option>
              <option value="3">Banquetería ($ 150.000)</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="estadoEvento">Estado</label>
            <select
              id="estadoEvento"
              className="form-control"
              name="estadoEvento"
              onChange={onChange}
              value={estadoEvento}
            >
              <option value="0" selected>
                Seleccionar
              </option>
              <option value="1">En proceso</option>
              <option value="2">Pausado</option>
              <option value="3">Terminado</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="direccionEvento">Dirección</label>
            <input
              type="mail"
              className="form-control"
              id="direccionEvento"
              placeholder="Ingrese dirección del evento"
              name="direccionEvento"
              onChange={onChange}
              value={direccionEvento}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="fechaEvento">Fecha ejecución</label>
            <input
              type="date"
              className="form-control"
              id="fechaEvento"
              label="Ingrese la fecha del evento"
              name="fechaEvento"
              onChange={onChange}
              value={fechaEvento}
              min="2020-12-15"
              max="2021-12-31"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <button
              type="submit"
              id="enviar"
              className="btn btn-primary col-md-4 offset-md-4"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
