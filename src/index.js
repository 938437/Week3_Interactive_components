import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import stories from "../data/sample_news_stories.json";
import React, { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Headline headline="My News Feed" />
      <Activity>
        <Event
          heading="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          author="Steve Hanley"
          summary="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
        />
        <Event
          heading="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
          link="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares"
          author="Milenio Digital"
          summary="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares, aproximadamente tres veces el tamaño de toda la economía de ..."
        />
        <Event
          heading="Tesla recall for heater and defroster systems issued by Transport Canada"
          link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
          author="Maria Merano"
          summary="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles. Transport Canada reported that a little over ..."
        />
        <Event
          heading="China representó la mitad de las ventas globales de coches eléctricos en 2021"
          link="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/"
          author="Newsroom Infobae"
          summary="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo los totalmente eléctricos ..."
        />
      </Activity>
    </div>
  );
}

function Headline(props) {
  return (
    <div className="headline">
      <h1>{props.headline}</h1>
    </div>
  );
}

function Activity(props) {
  return (
    <div className="event-container">
      <ul>{props.children}</ul>
    </div>
  );
}

function Event(props) {
  function handleDelete(e) {
    if (e.target !== e.currentTarget) {
      e.currentTarget.remove();
    }
  }

  let image;
  if (!props.image) {
    image = "https://picsum.photos/250/100";
  } else {
    image = props.image;
  }

  return (
    <ul className="event" onClick={handleDelete}>
      <div className="event-title">
        <img src={image} alt="" />
        <div className="heading_author">
          <span className="heading">
            <a href={props.link}>
              <h2>{props.heading}</h2>
            </a>
          </span>
          <span className="author">
            <h4>By: {props.author}</h4>
          </span>
        </div>
        <span onClick={handleDelete} className="x">
          x
        </span>
      </div>
      <div className="summary">{props.summary}</div>
    </ul>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
