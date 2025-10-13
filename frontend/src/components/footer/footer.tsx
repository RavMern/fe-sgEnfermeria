import { FaWhatsapp } from 'react-icons/fa';
import { Logo } from '../../assets/SVG/logo';

export default function Footer() {
    return (
        <footer className="bg-blue-700 px-6 py-12" style={{ backgroundImage: 'url("/wave-pattern-footer.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Mantenemos items-start para que la alineación inicie arriba */}
            <div className="lg:items-start gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl text-blanco">

                {/* Columna 1: SG Enfermería */}
                <div className="flex flex-col items-center md:items-start md:text-left text-center">

                    {/* Fila del Logo y Título (Define la altura superior) */}
                    <div className="flex items-center mb-4">
                        <Logo />
                        <span className="ml-2 font-bold text-3xl">SG Enfermería</span>
                    </div>

                    {/* Descripción */}
                    <p className="mb-6 max-w-lg font-semibold text-md">
                    </p>

                    {/* Contenedor de Contacto (WhatsApp y Número) */}
                    <div className="flex flex-col items-center md:items-start space-y-2">

                        {/* WhatsApp e "Atención 24 hs" */}
                        <div className="flex items-center space-x-3">
                            <a
                                href="https://wa.me/5491124994669"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-shrink-0 justify-center items-center bg-violeta-footer rounded-full w-12 h-12"
                            >
                                <FaWhatsapp className="w-7 h-7 text-blanco" />
                            </a>
                            <p className="font-semibold text-l">Atención 24 hs 11 2499 4669</p>
                        </div>

                        {/* Número de teléfono debajo, alineado con el texto "Atención 24 hs" */}
                    </div>
                </div>

                {/* Columna 2: Asociados (CORRECCIÓN: Margen Superior para alinear con el texto del logo) */}
                {/* El "mt-4" compensa la altura extra del logo de 64px para alinear con "SG Enfermería" */}
                <div className="mt-4 lg:mt-5 md:text-left text-center">
                    <h4 className="mb-4 font-semibold text-xl">Asociados</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm hover:underline">Planes</a></li>
                        <li><a href="#" className="text-sm hover:underline">Medios de Pago</a></li>
                        <li><a href="#" className="text-sm hover:underline">Preguntas frecuentes</a></li>
                    </ul>
                </div>

                {/* Columna 3: Institucional (CORRECCIÓN: Margen Superior) */}
                <div className="mt-4 lg:mt-5 md:text-left text-center">
                    <h4 className="mb-4 font-semibold text-xl">Institucional</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm hover:underline">Sobre SG Enfermería</a></li>
                        <li><a href="#" className="text-sm hover:underline">Urgencias</a></li>
                        <li><a href="#" className="text-sm hover:underline">Staff</a></li>
                        <li><a href="#" className="text-sm hover:underline">Servicios</a></li>
                        <li><a href="#" className="text-sm hover:underline">Contacto</a></li>
                    </ul>
                </div>

                {/* Columna 4: Servicios y Especialidades */}
                <div className="mt-4 lg:mt-5 md:text-left text-center">
                    <h4 className="mb-4 font-semibold text-xl">Servicios a domicilio</h4>
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
            <div className="opacity-70 mt-8 pt-4 border-gray-400 border-t text-sm text-center">
                <a className='group font-semibold text-subTitle'>Desarrollado por
                    <span className='px-1 font-bold group-hover:text-purple-700/40 duration-200'>
                        Ravmern
                    </span>
                </a>
            </div>
        </footer>
    );
}