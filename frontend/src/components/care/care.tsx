// src/components/Servicios.tsx
import React, { useState } from "react";
import { GiKneeCap } from "react-icons/gi";
import { MdOutlineCable, MdWater } from "react-icons/md";
import { IoBandageOutline } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa";
import { CiMedicalClipboard } from "react-icons/ci";
import { TbDropletCode } from "react-icons/tb";
import { FaBroom, FaUtensils, FaPills } from "react-icons/fa"; // nuevos para "limpieza", "comida" y "píldora"

type Item = {
  icon: React.ReactNode;
  title: string;
};

const Servicios: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"servicios" | "cuidados">(
    "servicios"
  );

  const servicios: Item[] = [
    { icon: <IoBandageOutline size={40} className="text-blue-500" />, title: "Curaciones" },
    { icon: <IoBandageOutline size={40} className="text-blue-500" />, title: "Cuidados posoperatorios" },
    { icon: <MdOutlineCable size={40} className="text-blue-500" />, title: "Sonda Vesical" },
    // { icon: <GiKneeCap size={40} className="text-blue-500" />, title: "Kinesiología" },
    { icon: <MdWater size={40} className="text-blue-500" />, title: "Enemas evacuantes" },
    { icon: <TbDropletCode size={40} className="text-blue-500" />, title: "Acceso Venoso Periférico" },
    { icon: <CiMedicalClipboard size={40} className="text-blue-500" />, title: "Seguimiento continuo" },
    { icon: <FaHandHoldingMedical size={40} className="text-blue-500" />, title: "Cuidados paliativos" },
    { icon: <IoBandageOutline size={40} className="text-blue-500" />, title: "Y otros" },
    //cuidados posoperatorios
    //curaciones
   
    //administracion de medicamentos
  ];

  const cuidados: Item[] = [
    { icon: <FaUtensils size={40} className="text-indigo-800" />, title: "Comida" },//quitar
    { icon: <FaBroom size={40} className="text-indigo-800" />, title: "Limpieza" },
    { icon: <FaPills size={40} className="text-indigo-800" />, title: "Control de medicación" },
    { icon: <IoBandageOutline size={40} className="text-indigo-800" />, title: "Apoyo personal" },
    { icon: <MdWater size={40} className="text-indigo-800" />, title: "Hidratación" },//quitar
    { icon: <GiKneeCap size={40} className="text-indigo-800" />, title: "Movilización" },
    { icon: <FaHandHoldingMedical size={40} className="text-indigo-800" />, title: "Acompañamiento" },
    { icon: <TbDropletCode size={40} className="text-indigo-800" />, title: "Higiene" }, //Cambiar por Estimulacion cognitiva
  ];
 //otro item para kinesiologia
 //cosas que pueden hacer los kinesiologos en casas particulares
 //rehabilitacion postoperatorio
 //mantenimiento funcional



 // otro item para higiene y confort
 // uñas, corte de pelos, tinturas
  const items = activeTab === "servicios" ? servicios : cuidados;

  return (
    <section className="flex items-center bg-blue-700 py-12 w-full min-h-[80vh]" id="servicios" style={{ backgroundImage: 'url("/wave-pattern.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="mx-auto px-4 max-w-6xl">
        {/* Título */}
        <h2 className="mb-2 font-bold text-blanco text-3xl text-center">
          Lo que ofrecemos
        </h2>
        <br />
        <p className="opacity-80 mb-8 text-blanco text-center">
          Estos son algunos de los servicios que ofrecemos. Si tenes dudas sobre alguno de ellos, no dudes en contactarnos.
        </p>
        <br />
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
              activeTab === "servicios"
                ? "border-blanco text-azul font-semibold bg-blanco"
                : "border-blanco border-opacity-30 text-blanco opacity-60 hover:opacity-100 hover:bg-blanco hover:text-azul"
            }`}
            onClick={() => setActiveTab("servicios")}
          >
            Servicios
          </button>
          <button
            className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
              activeTab === "cuidados"
                ? "border-blanco text-azul font-semibold bg-blanco"
                : "border-blanco border-opacity-30 text-blanco opacity-60 hover:opacity-100 hover:bg-blanco hover:text-azul"
            }`}
            onClick={() => setActiveTab("cuidados")}
          >
            Cuidados
          </button>
        </div>

        {/* Grid */}
        <div className="gap-4 md:gap-8 grid grid-cols-2 md:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center bg-blanco shadow-lg shadow-transparent hover:shadow-black/30 p-3 md:p-6 rounded-lg w-full md:w-70 min-h-[80px] md:min-h-[100px] hover:scale-105 transition duration-200 cursor-pointer"

            >
  <div className="mb-2 md:mb-4">{item.icon}</div>
  <h3 className="font-semibold text-azul text-sm md:text-base text-center">{item.title}</h3>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
