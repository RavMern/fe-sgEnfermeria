import { BsHeadset } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonCheck } from "react-icons/bs";

export default function CallToAction() {
  return (
    <section className="bg-lila py-12 px-6 md:py-24 md:px-6" style={{ backgroundImage: 'url("/wave-pattern.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Contenedor Izquierdo */}
        <div className="bg-blanco rounded-xl shadow-lg p-6 md:p-8 h-full w-full md:w-1/2 flex flex-col justify-between items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-azul mb-8">
            Siempre listos para <br /> acompañar cada <br /> necesidad.
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <span className="p-4 md:p-5 rounded-full" style={{ backgroundColor: 'var(--color-violeta)' }}>
                <BsHeadset className="w-8 h-8 md:w-10 md:h-10 text-blanco" />
              </span>
              <span className="text-xl md:text-3xl lg:text-4xl text-lila font-bold">11 2499 - 4669</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm md:text-md lg:text-xl text-lila font-bold text-wrap">sgenfermeras@gmail.com</span>
              <span className="p-4 md:p-5 rounded-full" style={{ backgroundColor: 'var(--color-violeta)' }}>
                <HiOutlineMail className="w-8 h-8 md:w-10 md:h-10 text-blanco" />
              </span>
            </div>
          </div>
        </div>

        {/* Contenedor Derecho */}
        <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-between text-blanco text-center md:text-left">
          <p className="text-lg md:text-xl font-bold mb-6 opacity-80">
            Desde 2013 brindamos atención con compromiso, calidez y profesionalismo.
            Nuestros años de experiencia son el reflejo de la confianza que los pacientes
            depositan en nosotros.
          </p>
          <p className="mb-8 text-sm md:text-[22px] italic opacity-80">
            Creemos que cada paciente merece un cuidado único. Por eso escuchamos,
            acompañamos y nos adaptamos a las necesidades de cada persona y su familia,
            brindando un trato cercano y humano en cada atención.
          </p>
          <div className="flex items-center justify-center space-x-4 md:justify-start">
            <BsPersonCheck className="w-12 h-12 md:w-16 md:h-16 text-blanco" />
            <div className="text-left">
              <span className="text-3xl font-bold">+1500</span>
              <p className="text-sm font-extrabold">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}