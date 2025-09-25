import { FaWhatsapp } from 'react-icons/fa';
import { LogoNaranja } from '../../assets/SVG/logonaranja';

export default function Footer() {
    return (
        <footer className="bg-lila py-12 px-6" style={{ backgroundImage: 'url("/wave-pattern-footer.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Mantenemos items-start para que la alineación inicie arriba */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-blanco lg:items-start">

                {/* Columna 1: SG Enfermería */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">

                    {/* Fila del Logo y Título (Define la altura superior) */}
                    <div className="flex items-center mb-4">
                        <LogoNaranja width='64' height='64' />
                        <span className="text-3xl font-bold ml-2">SG Enfermería</span>
                    </div>

                    {/* Descripción */}
                    <p className="text-md font-semibold mb-6 max-w-lg">
                        Una enfermera siempre <br /> nos dará esperanza <br /> es un ángel <br /> con estetoscopio
                    </p>

                    {/* Contenedor de Contacto (WhatsApp y Número) */}
                    <div className="flex flex-col items-center md:items-start space-y-2">

                        {/* WhatsApp e "Atención 24 hs" */}
                        <div className="flex items-center space-x-3">
                            <a
                                href="https://wa.me/5491124994669"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-violeta-footer flex items-center justify-center flex-shrink-0"
                            >
                                <FaWhatsapp className="w-7 h-7 text-blanco" />
                            </a>
                            <p className="text-lg font-semibold">Atención 24 hs</p>
                        </div>

                        {/* Número de teléfono debajo, alineado con el texto "Atención 24 hs" */}
                        <p className="text-lg font-bold ml-[3.75rem] md:ml-16">11 2499 4669</p>
                    </div>
                </div>

                {/* Columna 2: Asociados (CORRECCIÓN: Margen Superior para alinear con el texto del logo) */}
                {/* El "mt-4" compensa la altura extra del logo de 64px para alinear con "SG Enfermería" */}
                <div className="text-center md:text-left mt-4 lg:mt-5">
                    <h4 className="text-xl font-semibold mb-4">Asociados</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm hover:underline">Planes</a></li>
                        <li><a href="#" className="text-sm hover:underline">Medios de Pago</a></li>
                        <li><a href="#" className="text-sm hover:underline">Preguntas frecuentes</a></li>
                    </ul>
                </div>

                {/* Columna 3: Institucional (CORRECCIÓN: Margen Superior) */}
                <div className="text-center md:text-left mt-4 lg:mt-5">
                    <h4 className="text-xl font-semibold mb-4">Institucional</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm hover:underline">Sobre SG Enfermería</a></li>
                        <li><a href="#" className="text-sm hover:underline">Urgencias</a></li>
                        <li><a href="#" className="text-sm hover:underline">Staff</a></li>
                        <li><a href="#" className="text-sm hover:underline">Servicios</a></li>
                        <li><a href="#" className="text-sm hover:underline">Contacto</a></li>
                    </ul>
                </div>

                {/* Columna 4: Servicios y Especialidades */}
                <div className="text-center md:text-left mt-4 lg:mt-5">
                    <h4 className="text-xl font-semibold mb-4">Servicios a domicilio</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm hover:underline">Enfermería</a></li>
                        <li><a href="#" className="text-sm hover:underline">Cuidados paliativos</a></li>
                        <li><a href="#" className="text-sm hover:underline">Pacientes oncológicos</a></li>
                        <li><a href="#" className="text-sm hover:underline">Cuidados posoperatorios</a></li>
                        <li>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Sección de créditos */}
            <div className="mt-8 pt-4 border-t border-gray-400 text-center text-sm opacity-70">
                <a className='group font-semibold text-subTitle'>Desarrollado por
                    <span className='px-1 font-bold group-hover:text-purple-700/40 duration-200'>
                        Ravmern
                    </span>
                </a>
            </div>
        </footer>
    );
}