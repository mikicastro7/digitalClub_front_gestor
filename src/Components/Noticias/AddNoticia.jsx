/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const AddNoticia = () => {
  const [img, setImg] = useState("/img_muestra.jpg");

  const changeImgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <section>
      <h2>Crear noticia</h2>
      <form className="form-crear-noticia">
        <TextareaAutosize name="titulo" className="input-noticia input-titular-noticia" placeholder="Titular de la noticia" />
        <TextareaAutosize name="cuerpo" className="input-noticia" placeholder="texto de la noticia" />
        <img className="crear-noticia-img" src={img} alt="" />
        <label className="label-img-noticia" htmlFor="imagen">
          <span><FontAwesomeIcon icon={faUpload} /></span>
        </label>
        <input className="input-img-noticia" id="imagen" onChange={(e) => changeImgHandler(e)} name="imagen" accept="image/png,image/jpeg" type="file" />
        <TextareaAutosize name="alt" className="input-noticia" placeholder="pequeña descripcion de la foto ej: niño montado a caballo" />
      </form>
    </section>
  );
};

export default AddNoticia;
