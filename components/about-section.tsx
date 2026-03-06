export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="px-6 py-24"
      aria-labelledby="titulo-sobre-mi"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="titulo-sobre-mi"
          className="mb-8 font-mono text-sm font-medium text-muted-foreground"
        >
          Sobre mí
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Soy Frander Carrillo, apasionado por la tecnología y el desarrollo web.
          Me gusta aprender, crear proyectos y aportar valor con código. Este
          portafolio es el espacio donde muestro mi trabajo y mi evolución. Si
          quieres conocerme mejor o trabajar juntos, escríbeme.
        </p>
      </div>
    </section>
  );
}
