import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import loadingImage from "./../assets/images/loading.jpg";
import { NavLink } from "react-router-dom";

export default class HomeDepartamentos extends Component {
  state = {
    status: false,
    departamentos: [],
  };

  loadDepartamentos = () => {
    let request = "api/departamentos";
    let url = Global.apiDepartamentos + request;
    axios.get(url).then((response) => {
      console.log("leyendo departamentos");
      this.setState({
        departamentos: response.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {
    if (this.state.status == false) {
      return (
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
      );
    } else {
      return (
        <div>
          <h1>Home departamentos</h1>
          <table className="table table-bordered table-secondary">
            <thead>
              <tr>
                <th>Id departamentos</th>
                <th>Nombre</th>
                <th>Localidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.departamentos.map((dep, index) => {
                return (
                  <tr key={index}>
                    <td>{dep.numero}</td>
                    <td>{dep.nombre}</td>
                    <td>{dep.localidad}</td>
                    <td><NavLink to={"/detalle/" + dep.numero}>Detalles</NavLink></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
