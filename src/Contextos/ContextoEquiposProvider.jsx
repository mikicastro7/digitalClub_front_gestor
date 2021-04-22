import React, { useEffect } from "react";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";
import ContextoEquipos from "./ContextoEquipos";
import useHttp from "../hooks/useHttp";

const ContextoEquiposProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const { datos: datosEquipos, pedirDatos: pedirEquipos, setDatos: setEquipos } = useFetch();
  const { sendRequest: sendEquipoRequest } = useHttp();
  const { sendRequest: eliminarEquipoRequest } = useHttp();

  useEffect(() => {
    pedirEquipos("https://digitalclub.herokuapp.com/equipos");
  }, [pedirEquipos]);

  const addEquipo = (nombre, alt, jugadores, staff, equipoData) => {
    toast("Equipo creado");
    console.log(datosEquipos);
    let nuevoEquipo = {};
    if (equipoData.equipo.img) {
      nuevoEquipo = {
        _id: equipoData.equipo._id,
        nombre,
        created_at: new Date().toString(),
        staff: staff.map((miembro, i) => ({
          _id: equipoData.equipo.staff[i],
          nombre: miembro.nombre,
          rol: miembro.rol,
          fecha_nacimiento: miembro.nacimiento.split("-").reverse().join("/"),
        })),
        jugadores: jugadores.map((jugador, i) => ({
          _id: equipoData.equipo.jugadores[i],
          nombre: jugador.nombre,
          dorsal: jugador.dorsal,
          fecha_nacimiento: jugador.nacimiento.split("-").reverse().join("/"),
          rol: jugador.rol
        })),
        img: {
          link: equipoData.equipo.img.link,
          alt
        }
      };
    } else {
      nuevoEquipo = {
        _id: equipoData.equipo._id,
        nombre,
        created_at: new Date().toString(),
        staff: equipoData.equipo.staff,
        jugadores: jugadores.map((jugador, i) => ({
          _id: equipoData.equipo.jugadores[i],
          nombre: jugador.nombre,
          dorsal: jugador.dorsal,
          fecha_nacimiento: jugador.nacimiento.split("-").reverse().join("/"),
          rol: jugador.rol
        })),
      };
    }
    setEquipos((prevState) => ({ ...prevState, datos: [nuevoEquipo, ...datosEquipos.datos] }));
  };

  const enterEquipoHandler = async (nombre, foto, alt, jugadores, staff) => {
    const jugadoresNuevo = [...jugadores];
    jugadoresNuevo.splice(jugadores.length - 1, 1);
    const jugadoresString = JSON.stringify(jugadoresNuevo);
    const staffNuevo = [...staff];
    staffNuevo.splice(staff.length - 1, 1);
    const staffString = JSON.stringify(staffNuevo);
    const datos = new FormData();
    datos.append("foto", foto);
    datos.append("nombre", nombre);
    datos.append("alt", alt);
    if (jugadoresNuevo.length) {
      datos.append("jugadores", jugadoresString);
    }
    if (staffNuevo.length) {
      datos.append("staff", staffString);
    }

    sendEquipoRequest(
      {
        url: "https://digitalclub.herokuapp.com/equipos",
        method: "POST",
        body: datos
      },
      addEquipo.bind(null, nombre, alt, jugadoresNuevo, staffNuevo)
    );
  };

  const eliminarEquipo = (id) => {
    toast("Equipo eliminado");
    setEquipos({ total: datosEquipos.total, datos: datosEquipos.datos.filter(equipo => equipo._id !== id) });
  };

  const eliminarEquipoHandler = (id) => {
    eliminarEquipoRequest(
      {
        url: `https://digitalclub.herokuapp.com/equipos/${id}`,
        method: "DELETE"
      },
      eliminarEquipo.bind(null, id)
    );
  };

  return (
    <ContextoEquipos.Provider value={{
      datosEquipos, enterEquipoHandler, eliminarEquipoHandler
    }}
    >
      { children}
    </ContextoEquipos.Provider>
  );
};

export default ContextoEquiposProvider;
