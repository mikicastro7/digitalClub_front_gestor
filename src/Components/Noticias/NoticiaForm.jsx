/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import useForm from "../../hooks/useForm";

const NoticiaForm = (props) => {
  const {
    datosNoticia: {
      _id: id, titulo: tituloProp, texto: textoProp, img: imgProps
    } = {}, tipo, formAction
  } = props;

  const [img, setImg] = useState(imgProps ? imgProps.link : "");
  const [imgFile, setImgFile] = useState("");

  const { formDatos, modificarDatos } = useForm({
    titulo: tituloProp || "",
    text: textoProp || "",
    alt: imgProps ? imgProps.alt : ""
  });

  const enteredTitleIsValid = formDatos.titulo.trim() !== "";
  const enteredAltIsValid = formDatos.alt.trim().length > 5 || formDatos.img === "";

  let formIsValid = false;

  if (enteredTitleIsValid && enteredAltIsValid) {
    formIsValid = true;
  }

  const changeImgHandler = (e) => {
    setImgFile(e.target.files[0]);
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
    formAction(formDatos.titulo, formDatos.text, id);
  };

  return (
    <form onSubmit={formSubmissionHandler} className="form-crear-noticia">
      <TextareaAutosize value={formDatos.titulo} onChange={modificarDatos} name="titulo" className="input-noticia input-titular-noticia" placeholder="Titular de la noticia" />
      <TextareaAutosize value={formDatos.text} onChange={modificarDatos} name="text" className="input-noticia" placeholder="texto de la noticia" />
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
