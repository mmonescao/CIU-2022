import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import './components/estilos.css';

function App() {

  //Creamos hooks para guardarnos la info del JSON
  const [imagen, pic] = useState("");
  const [nombre, first] = useState("");
  const [apellido, last] = useState("");
  const [nacimiento, birth] = useState("");
  const [edad, age] = useState("");
  const [pais, country] = useState("");
  const [ciudad, city] = useState("");
  const [correo, mail] = useState("");

  //Funcion para consultar la API 
  const consultarAPI = async() => {
    try {
      //Nuestro codigo

      const api = await fetch('https://randomuser.me/api/');
      const datos = await api.json();
      pic(datos.results[0].picture.large);
      first(datos.results[0].name.first);
      last(datos.results[0].name.last);
      birth(datos.results[0].dob.date);
      age(datos.results[0].dob.age);
      country(datos.results[0].location.country);
      city(datos.results[0].location.city);
      mail(datos.results[0].email);
    } catch (error) {
      //Logica para atrapar el error
      console.log(error);
    };
  };

  //Funcion para consultar la API y solo traer usuarios femeninos
  const consultarAPIFemale = async() => {
    try {
      const api = await fetch('https://randomuser.me/api/?gender=female');
      const datos = await api.json();
      pic(datos.results[0].picture.large);
      first(datos.results[0].name.first);
      last(datos.results[0].name.last);
      birth(datos.results[0].dob.date);
      age(datos.results[0].dob.age);
      country(datos.results[0].location.country);
      mail(datos.results[0].email);
    } catch (error) {
      console.log(error);
    };
  };

  //Funcion para consultar la API y solo traer usuarios masculinos
  const consultarAPIMale = async() => {
    try {
      const api = await fetch('https://randomuser.me/api/?gender=male');
      const datos = await api.json();
      pic(datos.results[0].picture.large);
      first(datos.results[0].name.first);
      last(datos.results[0].name.last);
      birth(datos.results[0].dob.date);
      age(datos.results[0].dob.age);
      country(datos.results[0].location.country);
      mail(datos.results[0].email);
    } catch (error) {
      console.log(error);
    };
  };
  
  return (
    <Fragment>
      <div className='body'>
        <Header titulo="Personajes"/>
        <Card className="text-center">
          <Card.Header>
            <h2>La pagina que crea personajes para inspirarte en tu proxima historia</h2>
          </Card.Header>
          <tr>
            <td>
              <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                  <img
                    width={1000} height={500}
                    className="d-block w-100"
                    src='https://images.generated.photos/20YKHt06yizNRV6zxnQlbY8g7qeXmher8c56wt9Wc3g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM5ODgzLmpwZw.jpg'
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={50} height={500}
                    className="d-block w-100"
                    src='https://images.generated.photos/HoZrppQaRuMyNmlBbMrWtbsFOIBmyyk77KovBK5KwQM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTUwMTQzLmpwZw.jpg'
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={50} height={500}
                    className="d-block w-100"
                    src='https://images.generated.photos/Qkeld21Vprhid0AukWmV3lupwbT8U9GVrGx6IYTtulw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjA2MDY1LmpwZw.jpg'
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </td>
            <td>
              <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                  <img
                    width={50} height={500}
                    className="d-block w-100"
                    src='https://images.generated.photos/xFdh6sRUu9EST8yJAzpgTmnzbr_TmHaEE1xYyTRZoyw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njc2Mjk0LmpwZw.jpg'
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={50} height={500}
                    className="d-block w-100"
                    src='https://images.generated.photos/OIm35IAzkUN6bdT8C1WHLzqox3TyLZPGe7Mcj--qJME/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA3NTk2LmpwZw.jpg'
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={50} height={500}
                    className="d-block w-100"
                    src='https://images.generated.photos/T_kjkL_AyektS7-G8QQ2E6OzAIl0-aN1aFnhuNumgMU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjUxNjk0LmpwZw.jpg'
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </td>
            <td>
              <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                  <img
                    width={50} height={500}
                    className="d-block w-100"
                    src='https://images.generated.photos/sNjMw8F7KTPwuehf2f9zQzd_H3LVVIWfw1hupm0mQ8c/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/MTkxNTQyLmpwZw.jpg'
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={50} height={500}
                    className="d-block w-100"
                    src='https://images.generated.photos/2zgLIyjAvHAkbmzDHtJgijolNgYqIpmBQW1HYEPVZNk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wOTE3/NDY1LmpwZw.jpg'
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={50} height={500}
                    className="d-block w-100"
                    src='https://images.generated.photos/OABiTodzRzRcU66Lysn1IWUmFcWGa4XXZ3xOWWbRw_M/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNzk2/NTE0LmpwZw.jpg'
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </td>
          </tr>
          <Card.Body>
            <Card.Title>Ficha de personaje</Card.Title>
            <Card.Text>
                    {nombre.length ===  0 ? (
                      <p>Pulse Crear Individuo para obtener informacion</p>
                      ) : (
                        <>
                          <br/>
                          <img src={imagen}></img>
                          <br/>
                          <p>Nombre y Apellido: {nombre} {apellido}</p>
                          <p>Fecha de nacimiento (AA/MM/DD): {nacimiento.slice(0,10)}</p>
                          <p>Edad: {edad}</p>
                          <p>Pais de origen: {pais}</p>
                          <p>Ciudad: {ciudad}</p>
                          <p>Email: {correo}</p>
                        </>
                    )}
            </Card.Text>
            <ButtonGroup className="mb-2">
              <Button variant="primary" onClick={consultarAPIFemale}>Crear Individuo Femenino</Button>
              <Button variant="primary" onClick={consultarAPI}>Crear Individuo</Button>
              <Button variant="primary" onClick={consultarAPIMale}>Crear Individuo Masculino</Button>
            </ButtonGroup>
            
          </Card.Body>
        </Card>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;