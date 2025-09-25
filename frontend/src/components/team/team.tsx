export default function Team() {
    const members = [
        {
            name: "Sonia Lazarte",
            role: "Licenciada en Enfermería",
            img: "/enfermera (1).png",
        },
        {
            name: "Gladys Sanchez Riquelme",
            role: "Licenciada en Enfermería",
            img: "/enfermera (2).png",
        },
    ];

    return (
        <section className="bg-blanco py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-azul mb-4 md:mb-2">
                    Nuestros Profesionales
                </h2>
                <p className="text-gray-600 text-2xl mb-12">
                    Nuestro equipo cuenta con diversas disciplinas, liderado por dos
                    Licenciadas en Enfermería.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* Tarjeta de los miembros */}
                    {members.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-blanco shadow-md rounded-xl overflow-hidden border border-gray-200"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-azul">
                                    {member.name}
                                </h3>
                                <p className="text-lila font-semibold">{member.role}</p>
                            </div>
                        </div>
                    ))}

                    {/* Tarjeta de "Súmate" */}
                    <div
                        className="p-8 rounded-xl flex flex-col items-center justify-center text-center border-2"
                        style={{ backgroundColor: "var(--color-lila)", borderColor: "var(--color-lila)" }}
                    >
                        <h3 className="text-3xl font-bold text-blanco mb-2">Sumate</h3>
                        <p className="text-blanco text-2xl text-center mb-4">
                            Si querés ser parte <br /> escríbenos, te esperamos
                        </p>
                        <a
                            href="mailto:sgenfermeras@gmail.com"
                            className="w-12 h-12 flex justify-center items-center rounded-full"
                            style={{ backgroundColor: "var(--color-violeta)" }}>
                        {/* <button
                            className="w-12 h-12 flex justify-center items-center rounded-full"
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