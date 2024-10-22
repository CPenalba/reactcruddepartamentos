import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuDepartamentos from "./MenuDepartamentos";
import HomeDepartamentos from "./HomeDepartamentos";
import CreateDepartamentos from "./CreateDepartamentos";
import DetalleDepartamento from "./DetalleDepartamento";
import UpdateDepartamento from "./UpdateDepartamento";
import DeleteDepartamentos from "./DeleteDepartamentos";

export default class Router extends Component {
  render() {
    function DetalleDepartamentoElement() {
      let { iddepartamento } = useParams();
      return <DetalleDepartamento id={iddepartamento} />;
    }

    function UpdateDepartamentoElement() {
      let { id, nombre, localidad } = useParams();
      return (
        <UpdateDepartamento id={id} nombre={nombre} localidad={localidad} />
      );
    }
    function DeleteDepartamentoElement() {
      let { iddepartamento } = useParams();
      return <DeleteDepartamentos id={iddepartamento} />;
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
          <Route
            path="/update/:id/:nombre/:localidad"
            element={<UpdateDepartamentoElement />}
          />
          <Route
            path="/delete/:iddepartamento"
            element={<DeleteDepartamentoElement />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
