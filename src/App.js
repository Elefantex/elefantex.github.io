import React, { useState } from 'react';
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';

function App() {
  const cartas = [
    {
      titulo: "9 Segundos",
      descripcion: "Empezando con las manos en la espalda,debes tardar menos de 9 segundos en sacar una ficha de la torre y colocarla en la cima",
      imagen: "https://i.imgur.com/wjbYGNv1.jpg"
    },
    {
      titulo: "A ciegas",
      descripcion: "Saca una ficha con los ojos cerrados siguiendo las indicaciones un jugar elegido por ti. Si se cae la torre perdeis los dos. Una vez sacada la ficha, abre los ojos y colocala",
      imagen: "https://i.imgur.com/wjbYGNv2.jpg"
    },
    {
      titulo: "A ciegas completo",
      descripcion: "Saca una ficha con los ojos cerrados siguiendo las indicaciones un jugar elegido por ti y colocala en la torre con los ojos cerrados. Si se cae la torre perdeis los dos.",
      imagen: "https://i.imgur.com/wjbYGNv3.jpg"
    },
    {
      titulo: "Indices amigos",
      descripcion: "Elige a un compañero, debereis sacar y colocar en la cima una ficha entre los dos y cada uno solo podra un dedo indice, si se cae la torre perdeis los dos",
      imagen: "https://i.imgur.com/wjbYGNv4.jpg"
    },

    {
      titulo: "Dos meñiques",
      descripcion: "Utiliza solo los dos dedos meñiques para sacar una ficha y colocarla en la cima. Si apoyas la ficha en otro sitio que no sea la cima o se te cae no habras superado la prueba",
      imagen: "https://i.imgur.com/wjbYGNv5.jpg"
    },
    {
      titulo: "5 Segundos",
      descripcion: "Empezando con las manos en la espalda,debes tardar menos de 5 segundos en sacar una ficha de la torre y colocarla en la cima",
      imagen: "https://i.imgur.com/wjbYGNv6.jpg"
    },
    {
      titulo: "Constructor",
      descripcion: "Coge una ficha de la cimda y colocara en un huevo que haya en la torre",
      imagen: "https://i.imgur.com/wjbYGNv7.jpg"
    },
    {
      titulo: "Mano Mala",
      descripcion: "Utiliza la mano no dominante para sacar una ficha y colocarla en la cima",
      imagen: "https://i.imgur.com/wjbYGNv8.jpg"
    },
    {
      titulo: "A soplar",
      descripcion: "Sopla a la torre mientras sacas una ficha",
      imagen: "https://i.imgur.com/wjbYGNv9.jpg"
    },
    {
      titulo: "El izquierdo molesto",
      descripcion: "Mientras sacas una ficha y la colocas, el jugador de tu izquierda puede molestarte",
      imagen: "https://i.imgur.com/wjbYGNv10.jpg"
    },
    {
      titulo: "El derecho molesto",
      descripcion: "Mientras sacas una ficha y la colocas, el jugador de tu derecha puede molestarte",
      imagen: "https://i.imgur.com/wjbYGNv11.jpg"
    },
    {
      titulo: "Dos meñiques",
      descripcion: "Utiliza solo los dos dedos meñiques para sacr una ficha y colocarla en la cima. SI apoyas la ficha en otro sitio que no sea la cima o se te cae no habras superado la prueba",
      imagen: "https://i.imgur.com/wjbYGNv12.jpg"
    },
    {
      titulo: "Comodin",
      descripcion: "Juega normal",
      imagen: "https://i.imgur.com/wjbYGNv13.jpg"
    },
  ];

  const [backgroundImage, setBackgroundImage] = useState(cartas[0].imagen);

  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  function obtenerCartaAleatoria() {
    const indiceAleatorio = random(0, cartas.length - 1);
    const cartaAleatoria = cartas[indiceAleatorio];
    setBackgroundImage(cartaAleatoria.imagen);
    console.log("Carta aleatoria:", cartaAleatoria.titulo);
  }

  return (
    <div className="App">
      <FlippingCard
        style={{
          width: '100%',
          height: '100%',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <FlippingCardBack

        ><div

          style={{
            
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(${backgroundImage})`,
          }}>

            <h2>
              {cartas.find(carta => carta.imagen === backgroundImage)?.titulo}
            </h2>

            {cartas.find(carta => carta.imagen === backgroundImage)?.descripcion}
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

      <button onClick={obtenerCartaAleatoria}>Nueva carta</button>
    </div>
  );
}

export default App;
