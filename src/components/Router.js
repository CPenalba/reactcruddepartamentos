import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuDepartamentos from "./MenuDepartamentos";
import HomeDepartamentos from "./HomeDepartamentos";
import CreateDepartamentos from "./CreateDepartamentos";
import DetalleDepartamento from "./DetalleDepartamento";

export default class Router extends Component {
  render() {
    function DetalleDepartamentoElement() {
      let { iddepartamento } = useParams();
      return <DetalleDepartamento id={iddepartamento} />;
    }
    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Routes>
          <Route path="/" element={<HomeDepartamentos />} />
          <Route path="/create" element={<CreateDepartamentos />} />
          <Route
            path="/detalle/:iddepartamento"
            element={<DetalleDepartamentoElement />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
