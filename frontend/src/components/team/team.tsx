export default function Team() {
    const members = [

        {
            name: "Sonia Lazarte",
            role: "Licenciada en Enfermería",
            img: "/enfermera (2).png",
        },
        {
            name: "Gladys Sanchez Riquelme",
            role: "Licenciada en Enfermería",
            img: "/enfermera (1).png",
        },
    ];

    return (
        <section className="flex items-center bg-blanco py-16 min-h-[80vh]">
            <div className="mx-auto px-6 max-w-6xl text-center">
                <h2 className="mb-4 md:mb-2 font-bold text-indigo-800 text-4xl">
                    Nuestros Profesionales
                </h2>
                <br />
                <p className="mb-12 text-indigo-600 text-2xl">
                    Nuestro equipo cuenta con diversas disciplinas, liderado por dos
                    Licenciadas en Enfermería.
                </p>

                <div className="items-stretch gap-8 grid grid-cols-1 md:grid-cols-3">
                    {/* Tarjeta de los miembros */}
                    {members.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-blanco border border-gray-200 rounded-xl overflow-hidden"
                            style={{
                                boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.25), 4px 4px 12px rgba(0, 0, 0, 0.15)'
                            }}
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-azul text-2xl">
                                    {member.name}
                                </h3>
                                <p className="font-semibold text-indigo-600 text-lg">{member.role}</p>
                            </div>
                        </div>
                    ))}

                    {/* Tarjeta de "Súmate" */}
                    <div
                        className="flex flex-col justify-center items-center bg-blue-700 p-8 rounded-xl text-center"
                        style={{ 
                            boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.25), 4px 4px 12px rgba(0, 0, 0, 0.15)'
                        }}
                    >
                        <h3 className="mb-2 font-bold text-blanco text-3xl">Sumate</h3>
                        <p className="mb-4 text-blanco text-2xl text-center">
                            Si querés ser parte <br /> escríbenos, te esperamos
                        </p>
                        <a
                            href="mailto:sgenfermeras@gmail.com"
                            className="flex justify-center items-center bg-indigo-500 hover:bg-indigo-900 rounded-full w-12 h-12 duration-300"
                            >
                        {/* <button
                            className="flex justify-center items-center rounded-full w-12 h-12"
                            style={{ backgroundColor: "var(--color-violeta)" }}
                            > */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            </a>
                        {/* </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}