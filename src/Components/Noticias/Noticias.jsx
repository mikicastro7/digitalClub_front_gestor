import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Noticias = () => {
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      img: {
        link: "https://fondosmil.com/fondo/29366.jpg",
        alt: "foto molona"
      },
      created_at: "26-11-2000",
      titulo: "noticia1",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quod quia sunt nobis optio, harum voluptatum corporis architecto perspiciatis qui officia reiciendis. Et, sit similique porro harum inventore quidem iure."
    }
  ]);
  return (
    <section>
      <h2>Noticias</h2>
      <div className="add-noticia">
        <Link to="/noticias/crear-noticia">
          Añadir noticia
          {" "}
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>

    </section>
  );
};

export default Noticias;
