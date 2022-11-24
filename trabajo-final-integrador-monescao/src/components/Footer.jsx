import React from "react";
import './estilos.css';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

const Footer = () => {
    return (
        <>
        <CDBFooter className="shadow">
        <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <span className="ml-4 h5 mb-0 font-weight-bold">CIU</span>
          </a>
          <small className="ml-2">&copy; Construcción de Interfaces de Usuario, 2022. Todos los derechos reservados.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
            {/* <div className="footer">
                <h2>Todos los derechos reservados</h2>
                <h2>Las imagenes no  son de mi autoria</h2>
            </div> */}
        </>
    );
}

export default Footer;