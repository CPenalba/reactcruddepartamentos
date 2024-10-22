import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "./Global";

export default class MenuDepartamentos extends Component {
  state = {
    departamentos: [],
  };

  loadDepartamentos = () => {
    let request = "api/departamentos";
    let url = Global.apiDepartamentos + request;
    axios.get(url).then((response) => {
      console.log("leyendo departamentos");
      this.setState({
        departamentos: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark"
          aria-label="Third navbar example"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Departamentos
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create">
                    Create
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/detalle">
                    Detalles
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/delete">
                    Delete
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    {this.state.departamentos.map((dep, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            className="dropdown-item"
                            to={"/detalle/" + dep.numero}
                          >
                            {dep.nombre}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
