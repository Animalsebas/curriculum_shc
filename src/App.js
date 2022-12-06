import './App.css';
import { Helmet } from "react-helmet"
import Dropdown from "./Dropdown";
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

function App() {
  const items = [
    {
      slug: "#Inicio",
      anchor: "Inicio                                  "
    },
    {
      slug: "#Competencias",
      anchor: "Competencias                           "
    },
    {
      slug: "#Experiencia",
      anchor: "Experiencia                           "
    },
    {
      slug: "#Formacion",
      anchor: "Formación                           "
    },
    {
      slug: "#DatosPersonales",
      anchor: "Datos Personales                         "
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Helmet><script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script></Helmet>
      <br></br>
      <a id="Inicio"><img className="miFoto" alt="Mi Fotografía" src="foto.jpeg"/></a>
      <h1 className="miNombre">Sebastián Hernández Castro</h1>
      <h4 className='miTitulo'>Ingeniero Físico | Desarrollador Web y de Software</h4>
      </header>

      <body className="App-body">
      <div className="block">
        <p><i class="fa fa-envelope"></i>   <a href={"mailto:sebastianhc2020@gmail.com"} className="email-url">sebastianhc2020@gmail.com</a> | <a href={"mailto:a01236287@tec.mx"} className="email-url">a01236287@tec.mx</a></p>
        <p><i class='fas fa-map-marker-alt'></i>   Monterrey, Nuevo León. México</p>
        <p><a className="email-url" href="https://www.linkedin.com/in/sebasti%C3%A1n-hern%C3%A1ndez-castro-559581215" target="_blank">LinkedIn</a></p>
      </div>
      <Dropdown dropdownTitle="Apartados" items={items} />
      
      <br></br>
      <div className="block">
      <a id="Competencias"><h4 className='tituloTarjeta'>Competencias</h4></a>
        <p><strong>Desarrollo Web y Front End&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alto</strong></p>
        <p>CSS, JavaScript, HTML5, React, jQuery, CRM (Salesforce)</p>

        <p><strong>Desarrollo Android&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alto</strong></p>
        <p>Android Studio, Java, Kotlin</p>

        <p><strong>Programación general y Back End&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alto</strong></p>
        <p>Python, C, C++, Golang, Rust, Julia, Visual Studio Code</p>

        <p><strong>Administración de sistemas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alto</strong></p>
        <p>Linux, SQL, Windows</p>

        <p><strong>Idioma&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alto</strong></p>
        <p>Inglés (C1)</p>

      </div>
      <br></br>
      <div className="block">
      <a id="Experiencia"><h4 className='tituloTarjeta'>Experiencia y Proyectos</h4></a>
        <p><strong>Diseño Web y CRM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tecnológico de Monterrey</strong></p>
        <p>Diseño web y diseño de componentes y templates para el sistema de admisiones del Tecnológico de Monterrey. Uso de CSS, jQuery y la plataforma de Salesforce</p>
        <p>Jul 2022 - Actualmente</p>
        <br></br>

        <p><strong>Desarrollo Web &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Centro Virtual de Aprendizaje</strong></p>
        <p>Diseño de un curso web llamado "Curso preeliminar de estadística" con con componentes interactivos, mapa de progreso y exames. Uso de JavaScript, Bootstrap (CSS) y HTML5</p>
        <p>Jul 2022 - Dic 2022</p>
        <br></br>

        <p><strong>Android App&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IncluyeT</strong></p>
        <p className='longText'>IncluyeT: Lengua de Señas Mexicana y Braille, es una aplicación educativa que te ayudará a aprender lengua de señas mexicana y el sistema Braille español. Puedes consultar el abecedario en lengua de señas mexicana y en el sistema Braille, además, contiene un diccionario constantemente alimentado de palabras y su respectiva seña, en donde también puedes encontrar un texto descriptivo de como realizarla. <a href={ "https://play.google.com/store/apps/details?id=com.incluyet.incluyet&hl=es_MX&gl=US"} target="_blank">Descargala Aqui</a></p>
        <div className='video'>
        <ReactPlayer
          url='https://youtube.com/shorts/lMK5mZZa8CM?feature=share'
          className='react-player'
          controls="true"
          width='100%'
          height='100%'
        />
      </div>
        <br></br>
        
        <p><strong>Desarrollo Web&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Baskerville Inc.</strong></p>
        <p>Mi StartUp en desarrollo, visita la <a href={"https://baskerville-inc.000webhostapp.com/#/"} target="_blank">página</a></p>
        <img className='imagen1' alt="Baskerville Inc." src="desarrolloweb.jpg"/>
        <br></br>
        
        <p><strong>Programación general&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Image_colors_identifier</strong></p>
        <p>Python program to identify all the colors in an image. Results in HEX, RGB and CSS closest match<a href={"https://github.com/Animalsebas/Image_colors_identifier"} target="_blank"> Soruce Code</a></p>
        <img className='imagen1' alt="Image_colors_identifier" src="python.jpg"/>
        <br></br>
        <br></br>
        
      </div>
      <br></br>
      

      <div className="block">
      <a id="Formacion"><h4 className='tituloTarjeta'>Formación</h4></a>
        <p>Profesional&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ago 2021 - presente (2025)</p>
        <p>Tecnológico de Monterrey, Monterrey</p>
        <p><strong>Ingeniería Física Industrial</strong></p>
      </div>
      <br></br>
      <div className="block">
        <a id="DatosPersonales"><h4 className='tituloTarjeta'>Datos Personales</h4></a>
        <p><strong>Edad:</strong> 19 años</p> 
        <p><strong>Nacionalidad:</strong> mexicana</p>
      </div>
      <br></br>
        <br></br>
        <br></br>
        
      <div class="header-card">
        <h1>¿Te gusta mi currículum? Accede al <a className='urlBlanco' href={"https://github.com/Animalsebas/curriculum_shc"} target="_blank">código fuente</a></h1>
        </div>
      </body>
      </div>
      
  );
}

export default App;
