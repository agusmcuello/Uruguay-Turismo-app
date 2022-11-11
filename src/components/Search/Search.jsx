import React from "react";
import "./search.css";
import Gold from "../../assets/gold.png";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>VACACIONES DE LUJO INCLUIDO PARA DOS PERSONAS</h2>
          <p>
            Venga a experimentar de la experiencia, unas vacaciones de lujo en
            Cabo Polonio con todo incluido para una pareja.
            Nuestros ranchos con playa de lujo, ubicados a lo largo de los
            escenarios costeros más hermosos y las playas exquisitas en Aguas Dulces, Valizas, Punta del Diablo y La Pedrera
            cuentan con comidas gourmet ilimitadas, bares exclusivos que sirven
            licores y vinos de primera calidad, y cada tierra y agua. Si está
            planeando una boda, Valizas es el líder en bodas y paquetes de luna
            de miel en Rocha.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>LIDERES MUNDIALES</h3>
                <p>Premiados por MSP y la mesa turística uruguaya</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NADIE TE OFRECE MÁS</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>Paquetes disponibles</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">OBTÉN UN DESCUENTO</h4>
            <p className="timer">QUEDAN 7 HORAS!</p>
            <p className="offers">VEA NUESTRO CATÁLOGO DE OFERTAS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destino</label>
              <select>
                <option value="1">Colonia de Sacramento</option>
                <option value="1">Punta del Este</option>
                <option value="1">Casa Pueblo</option>
                <option value="1">Valizas</option>
                <option value="1">Punta del Diablo</option>
                <option value="1">Piriápolis</option>
                <option value="1">San José de Mayo</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Entrada</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Salida</label>
                <input type="date" />
              </div>
            </div>
            <button>Precios y disponibilidad</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
