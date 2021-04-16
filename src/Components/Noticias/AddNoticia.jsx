import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const AddNoticia = () => (
  <>
    <h1>Crear noticia</h1>
    <form className="form-crear-noticia">
      <TextareaAutosize name="titulo" className="input-noticia input-titular-noticia" placeholder="Titular de la noticia" />
      <TextareaAutosize name="cuerpo" className="input-noticia" placeholder="texto de la noticia" />
      <input name="imagen" accept="image/png,image/jpeg" type="file" />
    </form>
  </>
);

export default AddNoticia;
