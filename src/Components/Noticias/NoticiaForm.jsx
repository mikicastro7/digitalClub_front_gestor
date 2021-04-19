/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const NoticiaForm = ({
  datosNoticia: {
    _id: id, titulo: tituloProp, texto: textoProp, img: imgProps
  }, tipo, formAction
}) => {
  const [titulo, setTitulo] = useState(tituloProp || "");
  const [text, setText] = useState(textoProp || "");
  const [img, setImg] = useState(imgProps ? imgProps.link : "");
  const [alt, setAlt] = useState(imgProps ? imgProps.alt : "");

  const enteredTitleIsValid = titulo.trim() !== "";
  const enteredAltIsValid = alt.trim().length > 5 || img === "";

  let formIsValid = false;

  if (enteredTitleIsValid && enteredAltIsValid) {
    formIsValid = true;
  }

  const tituloInputChangeHandler = (e) => {
    setTitulo(e.target.value);
  };

  const textInputChangeHandler = (e) => {
    setText(e.target.value);
  };

  const changeImgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    formAction(titulo, text, id);
  };

  return (
    <form onSubmit={formSubmissionHandler} className="form-crear-noticia">
      <TextareaAutosize value={titulo} onChange={tituloInputChangeHandler} name="titulo" className="input-noticia input-titular-noticia" placeholder="Titular de la noticia" />
      <TextareaAutosize value={text} onChange={textInputChangeHandler} name="text" className="input-noticia" placeholder="texto de la noticia" />
      <label className="label-img-noticia" htmlFor="imagen">
        {img ? <img className="crear-noticia-img" src={img} alt="" /> : <span><FontAwesomeIcon icon={faUpload} /></span>}
      </label>
      <input onChange={(e) => changeImgHandler(e)} className="input-img-noticia" id="imagen" name="imagen" accept="image/png,image/jpeg" type="file" />
      <TextareaAutosize disabled={img === ""} name="alt" className="input-noticia" placeholder="pequeña descripcion de la foto ej: niño montado a caballo" />
      <button type="submit" className="btn btn-primary">
        {tipo === "Edit" ? "Editar " : "Publicar "}
        noticia
      </button>
    </form>
  );
};

export default NoticiaForm;
