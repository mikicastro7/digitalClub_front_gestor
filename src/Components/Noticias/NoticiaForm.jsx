/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const NoticiaForm = ({ titulo: tituloProp, texto: textoProp }) => {
  const [titulo, setTitulo] = useState(tituloProp);
  const [text, setText] = useState(textoProp);
  return (
    <form className="form-crear-noticia">
      <TextareaAutosize name="titulo" className="input-noticia input-titular-noticia" placeholder="Titular de la noticia" />
      <TextareaAutosize name="text" className="input-noticia" placeholder="texto de la noticia" />
      <label className="label-img-noticia" htmlFor="imagen">
        <span><FontAwesomeIcon icon={faUpload} /></span>
        <input className="input-img-noticia" id="imagen" name="imagen" accept="image/png,image/jpeg" type="file" />
      </label>
      <TextareaAutosize name="alt" className="input-noticia" placeholder="pequeña descripcion de la foto ej: niño montado a caballo" />
      <button type="submit" className="btn btn-primary">Publicar noticia</button>
    </form>
  );
};

export default NoticiaForm;
