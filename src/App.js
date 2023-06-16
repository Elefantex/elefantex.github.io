import React, { useState } from 'react';
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import "./App.css"

function App() {
  const cartas = [
    {
      titulo: "9 Segundos",
      descripcion: "Empezando con las manos en la espalda,debes tardar menos de <b> 9 segundos</b>  en sacar una ficha de la torre y colocarla en la cima",
      imagen: "https://i.imgur.com/wjbYGNv1.jpg"
    },
    {
      titulo: "A ciegas",
      descripcion: "<b> Saca una ficha con losojos cerrados </b> siguiendo las indicaciones un jugar elegido por ti. Si se cae la torre perdeis los dos. <b> Una vez sacada la ficha, abre los ojos y colocala </b>",
      imagen: "https://i.imgur.com/wjbYGNv2.jpg"
    },
    {
      titulo: "A ciegas completo",
      descripcion: "<b>  Saca una ficha con los ojos cerrados</b>   siguiendo las indicaciones un jugar elegido por ti y <b> colocala en la torre con los ojos cerrados </b> . Si se cae la torre perdeis los dos.",
      imagen: "https://i.imgur.com/wjbYGNv3.jpg"
    },
    {
      titulo: "Indices amigos",
      descripcion: "Elige a un compañero,<b>  debereis sacar y colocar en la cima una ficha entre los dos y cada uno solo podra un dedo indice </b>, si se cae la torre perdeis los dos",
      imagen: "https://i.imgur.com/wjbYGNv4.jpg"
    },
    {
      titulo: "Dos meñiques",
      descripcion: "Utiliza solo <b>  los dos dedos meñiques para sacar una ficha y colocarla en la cima </b>. Si apoyas la ficha en otro sitio que no sea la cima o se te cae no habras superado la prueba",
      imagen: "https://i.imgur.com/wjbYGNv5.jpg"
    },
    {
      titulo: "5 Segundos",
      descripcion: "Empezando con las manos en la espalda,debes tardar menos de<b>  5 segundos</b> en sacar una ficha de la torre y colocarla en la cima",
      imagen: "https://i.imgur.com/wjbYGNv6.jpg"
    },
    {
      titulo: "Constructor",
      descripcion: "<b> Coge una ficha de la cimda y colocara en un huevo que haya en la torre </b>",
      imagen: "https://i.imgur.com/wjbYGNv7.jpg"
    },
    {
      titulo: "Mano Mala",
      descripcion: "Utiliza <b>  la mano no dominante </b> para sacar una ficha y colocarla en la cima",
      imagen: "https://i.imgur.com/wjbYGNv8.jpg"
    },
    {
      titulo: "A soplar",
      descripcion: "<b> Sopla a la torre mientras sacas una ficha </b>",
      imagen: "https://i.imgur.com/wjbYGNv9.jpg"
    },
    {
      titulo: "El izquierdo molesto",
      descripcion: "Mientras sacas una ficha y la colocas,<b>  el jugador de tu izquierda puede molestarte </b>",
      imagen: "https://i.imgur.com/wjbYGNv10.jpg"
    },
    {
      titulo: "El derecho molesto",
      descripcion: "Mientras sacas una ficha y la colocas,<b>  el jugador de tu derecha puede molestarte </b>",
      imagen: "https://i.imgur.com/wjbYGNv11.jpg"
    },
    {
      titulo: "Comodin",
      descripcion: "<b> Juega normal </b>",
      imagen: "https://i.imgur.com/wjbYGNv12.jpg"
    },
  ];

  const [backgroundImage, setBackgroundImage] = useState(cartas[0].imagen);
  const [lastRandomIndex, setLastRandomIndex] = useState(null); // Keep track of the last random index


  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  function obtenerCartaAleatoria() {
    let indiceAleatorio;

    do {
      indiceAleatorio = random(0, cartas.length - 1); // Generate a new random index
    } while (indiceAleatorio === lastRandomIndex); // Repeat if the new index is the same as the last one

    const cartaAleatoria = cartas[indiceAleatorio];
    setBackgroundImage(cartaAleatoria.imagen);
    setLastRandomIndex(indiceAleatorio); // Update the last random index
    console.log("Carta aleatoria:", cartaAleatoria.titulo);
  }

  return (
    <div className="App">
      <FlippingCard
        style={{
          width: '90%',
          height: '120%',
          border: '1px solid black'
        }}>
        <FlippingCardBack

        ><div

          style={{

            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(${backgroundImage})`,
          }}>

            <h2 style={{ marginLeft: "10px" }}>
              {cartas.find(carta => carta.imagen === backgroundImage)?.titulo}
            </h2>
            <div style={{ marginLeft: '10px' }}>
          {/* Utiliza dangerouslySetInnerHTML para renderizar HTML */}
          <span dangerouslySetInnerHTML={{ __html: cartas.find(carta => carta.imagen === backgroundImage)?.descripcion }} />
        </div>
          </div>

        </FlippingCardBack>
        <FlippingCardFront>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundImage: 'url(https://i.imgur.com/3sKjY8V.jpg)'
            }}
          >

          </div>
        </FlippingCardFront>
      </FlippingCard>

      <div className='boton'>
        <button onClick={obtenerCartaAleatoria}>Nueva carta</button>

      </div>
    </div>
  );
}

export default App;
