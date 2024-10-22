import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default class UpdateDepartamento extends Component {
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    status: false,
  };

  updateDepartamento = (e) => {
    e.preventDefault();
    let request = "api/departamentos";
    let url = Global.apiDepartamentos + request;
    let id = parseInt(this.cajaId.current.value);
    let nombre = this.cajaNombre.current.value;
    let localidad = this.cajaLocalidad.current.value;
    let departamento = {
      numero: id,
      nombre: nombre,
      localidad: localidad,
    };
    axios.put(url, departamento).then((response) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.status == true && <Navigate to="/" />}
        <h1>Update departamento</h1>
        <NavLink to="/">Back to index</NavLink>
        <form>
          <label>Id departamento: </label>
          <input
            type="text"
            ref={this.cajaId}
            className="form-control"
            defaultValue={this.props.id}
            disabled
          />
          <label>Nombre departamento: </label>
          <input
            type="text"
            ref={this.cajaNombre}
            className="form-control"
            defaultValue={this.props.nombre}
          />
          <label>Localidad departamento: </label>
          <input
            type="text"
            ref={this.cajaLocalidad}
            className="form-control"
            defaultValue={this.props.localidad}
          />
          <button onClick={this.updateDepartamento} className="btn btn-danger">
            Actualizar departamento
          </button>
        </form>
      </div>
    );
  }
}
