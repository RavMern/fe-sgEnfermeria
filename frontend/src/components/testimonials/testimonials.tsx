export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Morales",
      role: "Product Designer",
      rating: 5,
      text: "El cuidado humanizado de este equipo fue un faro de luz. Transformaron mi habitación en un verdadero hogar, con una calidez y empatía que me hicieron sentir acompañada. Su apoyo fue vital para mí y mi familia en los momentos más difíciles. Realmente, pura alma y voluntad de servicio.",
      img: "/enfermera (1).png", 
    },
    {
      name: "Carlos Gimenez",
      role: "Product Designer",
      rating: 5,
      text: "La atención fue de primera. Su profesionalismo es impresionante; reaccionaron con rapidez y precisión en una situación crítica, demostrando una habilidad que me dio total confianza. Sabes que estás en las mejores manos, y eso te da la tranquilidad necesaria para enfocarte en tu recuperación.",
      img: "/enfermera (2).png", 
    },
    {
      name: "Sofía Mendoza",
      role: "Product Designer",
      rating: 5,
      text: "No hay palabras para describir el apoyo emocional que recibí. El equipo de enfermería me escuchó activamente y se convirtió en un pilar fundamental. Crearon un vínculo tan fuerte que me ayudó a no sentirme sola, incluso en los momentos de mayor incertidumbre. Su vocación de servicio es verdaderamente admirable.",
      img: "/enfermera (1).png",
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-violeta" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.071 3.292a1 1 0 00.95.691h3.461c.971 0 1.366 1.25.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.071 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.033a1 1 0 00-1.176 0l-2.8 2.033c-.784.57-1.839-.197-1.539-1.118l1.071-3.292a1 1 0 00-.364-1.118l-2.8-2.033c-.778-.567-.383-1.81.588-1.81h3.461a1 1 0 00.95-.691l1.071-3.292z" />
        </svg>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <section className="bg-blanco py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-azul mb-4">
          Testimonios de Pacientes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Resaltan nuestro profesionalismo, la importancia del cuidado humanizado, la empatía del personal y la atención integral que reciben en situaciones difíciles
        </p>

        {/* Carrusel de Testimonios */}
        <div className="relative flex items-center">
          {/* Flecha de Navegación Izquierda */}
          <button className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full hidden lg:block">
            <svg
              className="w-12 h-12 text-azul"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-left shadow-lg relative"
              >
                {/* Ícono de Comillas */}
                <div className="absolute -top-3 right-6">
                    <svg
                      className="w-8 h-8 text-lila opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12-2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-6 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                    </svg>
                </div>
                {/* Encabezado del Testimonio */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-azul">{testimonial.name}</h3>
                    <p className="text-sm text-lila">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Texto del Testimonio */}
                <div className="mb-4">
                  <p className="text-azul font-bold mb-2">{testimonial.text.split('.')[0]}.</p>
                  <p className="text-azul">{testimonial.text.split('.')[1]}.</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha de Navegación Derecha */}
          <button className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full hidden lg:block">
            <svg
              className="w-12 h-12 text-celeste"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}