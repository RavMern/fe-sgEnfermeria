import { BsHeadset } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonCheck } from "react-icons/bs";

export default function CallToAction() {
  return (
    <section className="flex items-center bg-blue-700 px-6 md:px-6 py-12 md:py-24 min-h-[80vh]" style={{ backgroundImage: 'url("/wave-pattern.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex md:flex-row flex-col items-center md:items-start gap-8 mx-auto max-w-7xl">
        {/* Contenedor Izquierdo */}
        <div className="flex flex-col justify-between items-center bg-blanco shadow-lg p-6 md:p-8 rounded-xl w-full md:w-1/2 h-full text-center">
          <h2 className="mb-8 font-bold text-azul text-3xl md:text-4xl lg:text-5xl">
            Siempre listos para <br /> acompañar cada <br /> necesidad.
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <span className="bg-indigo-500 hover:bg-indigo-900 p-4 md:p-5 rounded-full duration-300" >
                <BsHeadset className="w-8 md:w-10 h-8 md:h-10 text-blanco" />
              </span>
              <span className="font-bold text-blue-600 text-xl md:text-3xl lg:text-4xl">11 2499 - 4669</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold text-blue-600 md:text-md text-sm lg:text-xl text-wrap">sgenfermeras@gmail.com</span>
              <span className="bg-indigo-500 hover:bg-indigo-900 p-4 md:p-5 rounded-full duration-300" >
                <HiOutlineMail className="w-8 md:w-10 h-8 md:h-10 text-blanco" />
              </span>
            </div>
          </div>
        </div>

        {/* Contenedor Derecho */}
        <div className="flex flex-col justify-between p-6 md:p-8 w-full md:w-1/2 text-blanco md:text-left text-center">
          <p className="opacity-80 mb-6 font-bold text-lg md:text-xl">
            Desde 2013 brindamos atención con compromiso, calidez y profesionalismo.
            Nuestros años de experiencia son el reflejo de la confianza que los pacientes
            depositan en nosotros.
          </p>
          <p className="opacity-80 mb-8 md:text-[22px] text-sm italic">
            Creemos que cada paciente merece un cuidado único. Por eso escuchamos,
            acompañamos y nos adaptamos a las necesidades de cada persona y su familia,
            brindando un trato cercano y humano en cada atención.
          </p>
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <BsPersonCheck className="w-12 md:w-16 h-12 md:h-16 text-blanco" />
            <div className="text-left">
              <span className="font-bold text-3xl">+1500</span>
              <p className="font-extrabold text-sm">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}