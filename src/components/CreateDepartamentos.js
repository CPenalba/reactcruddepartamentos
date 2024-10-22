import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CreateDepartamentos extends Component {
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    status: false,
  };

  inserDepartamento = (e) => {
    e.preventDefault();
    let request = "api/departamentos";
    let url = Global.apiDepartamentos + request;
    //debemos respetar los tipos de dato del servicio
    let id = parseInt(this.cajaId.current.value);
    let nombre = this.cajaNombre.current.value;
    let localidad = this.cajaLocalidad.current.value;
    //necesitamos un objeto react con el mismo nombre de propiedades que el servicio
    let departamento = {
      numero: id,
      nombre: nombre,
      localidad: localidad,
    };
    axios.post(url, departamento).then((response) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.status == true && <Navigate to="/" />}
        <h1>New departamento</h1>
        <form>
          <label>Id departamento: </label>
          <input type="text" ref={this.cajaId} className="form-control" />
          <label>Nombre departamento: </label>
          <input type="text" ref={this.cajaNombre} className="form-control" />
          <label>Localidad departamento: </label>
          <input
            type="text"
            ref={this.cajaLocalidad}
            className="form-control"
          />
          <button onClick={this.inserDepartamento} className="btn btn-danger">
            Insertar departamento
          </button>
        </form>
      </div>
    );
  }
}
