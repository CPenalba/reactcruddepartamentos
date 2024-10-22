import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import loadingImage from "./../assets/images/loading.jpg";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default class DeleteDepartamentos extends Component {
  state = {
    departamento: null,
    status: false,
    modal: false,
  };

  findDepartamento = () => {
    let id = this.props.id;
    let request = "api/departamentos/" + id;
    var url = Global.apiDepartamentos + request;
    axios.get(url).then((response) => {
      this.setState({
        departamento: response.data,
      });
    });
  };

  deleteDepartamento = () => {
    let id = this.props.id;
    let request = "api/departamentos/" + id;
    let url = Global.apiDepartamentos + request;
    axios.delete(url).then((response) => {
      console.log("Delete...");
      this.setState({
        status: true,
      });
    });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  // Cierra el modal sin eliminar
  hideModal = () => {
    this.setState({ showModal: false });
  };

  // Confirma la eliminación
  confirmDelete = () => {
    this.setState({ showModal: false });
    this.deleteDepartamento();
  };
  componentDidMount = () => {
    this.findDepartamento();
  };
  render() {
    return (
      <div>
        <NavLink to="/">Back to list</NavLink>
        {this.state.status == true && <Navigate to="/" />}
        {this.state.departamento ? (
          <ul className="list-group">
            <li className="list-group-item">
              Numero: {this.state.departamento.numero}
            </li>
            <li className="list-group-item">
              Nombre: {this.state.departamento.nombre}
            </li>
            <li className="list-group-item">
              Localidad: {this.state.departamento.localidad}
            </li>
          </ul>
        ) : (
          <img
            src={loadingImage}
            alt="Loading..."
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5%",
            }}
          />
        )}
        <button onClick={this.showModal}>Delete departamento</button>

        {this.state.showModal && (
          <div>
            <h4>Are you sure you want to delete this departamento?</h4>
            <button onClick={this.confirmDelete} className="btn btn-dark">Yes</button>
            <button onClick={this.hideModal} className="btn btn-danger">No</button>
          </div>
        )}
      </div>
    );
  }
}
