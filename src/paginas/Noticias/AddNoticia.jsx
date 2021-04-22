/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import NoticiaForm from "../../Components/Noticias/NoticiaForm";
import ContextoNoticias from "../../Contextos/ContextoNoticias";

const AddNoticia = () => {
  const { enterNoticiaHandler } = useContext(ContextoNoticias);

  return (
    <section>
      <h2>Crear noticia</h2>
      <ToastContainer autoClose={2000} />
      <NoticiaForm formAction={enterNoticiaHandler} />
    </section>
  );
};

export default AddNoticia;
