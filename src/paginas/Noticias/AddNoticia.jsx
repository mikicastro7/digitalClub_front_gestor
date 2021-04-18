/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
import ContextoNoticias from "../../Contextos/ContextoNoticias";

const AddNoticia = () => {
  const { addNoticiaHandler } = useContext(ContextoNoticias);
  const [img, setImg] = useState("");
  const [titulo, setTitulo] = useState("");
  const [text, setText] = useState("");
  const [alt, setAlt] = useState("");

  const enteredTitleIsValid = titulo.trim() !== "";

  let formIsValid = false;

  if (enteredTitleIsValid) {
    formIsValid = true;
  }

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

  const tituloInputChangeHandler = (e) => {
    setTitulo(e.target.value);
  };

  const textInputChangeHandler = (e) => {
    setText(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      addNoticiaHandler(titulo, text);
    }
    return <Redirect to="/" />;
  };

  return (
    <section>
      <h2>Crear noticia</h2>
      <form onSubmit={formSubmissionHandler} className="form-crear-noticia">

        <TextareaAutosize onChange={tituloInputChangeHandler} value={titulo} name="titulo" className="input-noticia input-titular-noticia" placeholder="Titular de la noticia" />
        <TextareaAutosize onChange={textInputChangeHandler} value={text} name="text" className="input-noticia" placeholder="texto de la noticia" />
        <label className="label-img-noticia" htmlFor="imagen">
          {img ? <img className="crear-noticia-img" src={img} alt="" /> : <span><FontAwesomeIcon icon={faUpload} /></span>}
        </label>
        <input className="input-img-noticia" id="imagen" onChange={(e) => changeImgHandler(e)} name="imagen" accept="image/png,image/jpeg" type="file" />
        <TextareaAutosize value={alt} disabled={!img} name="alt" className="input-noticia" placeholder="pequeña descripcion de la foto ej: niño montado a caballo" />
        <button type="submit" className="btn btn-primary">Publicar noticia</button>
      </form>
    </section>
  );
};

export default AddNoticia;
