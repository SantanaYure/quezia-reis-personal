import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const PHONE_NUMBER = "5571988895613";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;

const MENU_ITEMS = [
  { id: "metodo", label: "Método" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "planos", label: "Planos" },
  { id: "sobre", label: "Sobre" },
];

const METHOD_CARDS = [
  {
    title: "Treino personalizado",
    description: "Cada treino é adaptado ao seu corpo, rotina e objetivos. Sem genéricos, sem desperdício de tempo.",
  },
  {
    title: "Segurança em primeiro lugar",
    description: "Técnica refinada e acompanhamento constante para evitar lesões e garantir resultados duradouros.",
  },
  {
    title: "Eficiência garantida",
    description: "Máximo resultado no menor tempo possível. Planejamento que se encaixa na sua vida real.",
  },
];

const TESTIMONIALS = [
  { id: 1, image: "/depoimento1.jpeg", alt: "Depoimento de cliente satisfeita com resultados do treino" },
  { id: 2, image: "/depoimento2.jpeg", alt: "Feedback positivo sobre o método Rica de Saúde" },
  { id: 3, image: "/depoimento3.jpeg", alt: "Cliente compartilhando sua transformação" },
  { id: 4, image: "/depoimento4.jpeg", alt: "Relato de experiência com treino personalizado" },
];

const PLANS = [
  {
    name: "Plano trimestral",
    discount: "-30% OFF",
    oldPrice: "R$ 1.000",
    price: "R$ 700",
    features: [
      "Treino personalizado",
      "Assinatura Prime Gourmet",
      "Acompanhamento WhatsApp",
      "3 encontros online",
    ],
    paymentLink: "https://mpago.li/2K7Gb9S",
    bgColor: "bg-white",
    textColor: "text-[#0b110d]",
    buttonColor: "bg-[#ffc2ce] text-[#0b110d]",
  },
  {
    name: "Plano anual",
    discount: "-50% OFF",
    oldPrice: "R$ 3.000",
    price: "R$ 1.500",
    features: [
      "Treino personalizado",
      "Assinatura Prime Gourmet",
      "Acompanhamento WhatsApp",
      "20 encontros online (videochamada)",
      "Mini band inclusa",
      "Ebook digital exclusivo",
    ],
    paymentLink: "https://mpago.la/1NRFg84",
    bgColor: "bg-[#ffc2ce]",
    textColor: "text-[#0b110d]",
    buttonColor: "bg-[#0b110d] text-[#f0f0d8]",
    badge: "Melhor custo-beneficio",
  },
];

const ABOUT_SECTIONS = [
  {
    title: "Mãe e profissional",
    description: "Vive na prática o malabarismo entre casa, filhos e trabalho, trazendo soluções reais para mulheres reais.",
  },
  {
    title: "Especialista em você",
    description: "Bacharel em Educação Física com Especialização em Saúde da Mulher.",
  },
  {
    title: "Formação de elite",
    description: "Base técnica refinada pela Dança (Byla Dança), Pilates e certificação internacional NASM (National Academy of Sports Medicine).",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowScrollTop(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0b110d]">
      <header className="bg-[#0b110d] shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="flex items-center gap-1 font-bold text-2xl">
            <span className="text-[#ffc2ce]">QUEZIA</span>
            <span className="text-white">REIS</span>
          </h1>

          <div className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#ffc2ce] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffc2ce] text-[#0b110d] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Contato
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0b110d] px-4 py-4 space-y-3">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white hover:text-[#ffc2ce] transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#ffc2ce] text-[#0b110d] px-6 py-2 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all"
            >
              Contato
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="relative h-screen min-h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden">
          <img
            src="/quezia-about-mobile.png"
            alt="Quezia Reis Personal Trainer em ação"
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            loading="eager"
            fetchPriority="high"
          />
          <img
            src="/quezia-about.png"
            alt="Quezia Reis Personal Trainer em ação"
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Transforme seu corpo e mente
            </h2>
            <p className="text-lg md:text-xl mb-8 font-light">
              Com o Método Rica de Saúde: treino personalizado, segurança e eficiência
            </p>
            <button
              onClick={() => scrollToSection("planos")}
              className="inline-block bg-[#ffc2ce] text-[#0b110d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all cursor-pointer"
            >
              Comece agora
            </button>
          </div>
        </section>

        <section id="metodo" className="py-16 md:py-24 bg-[#f0f0d8]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b110d] mb-4">
                Método Exclusivo Rica de Saúde
              </h2>
              <p className="text-lg text-[#0b110d] max-w-3xl mx-auto">
                Criadora do Método Rica de Saúde, focado em treino personalizado, segurança e eficiência.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8 mb-12">
              <p className="text-xl text-[#0b110d] italic font-semibold">
                "Minha meta é que você tenha constância e resultados, com um planejamento que funciona de verdade no seu dia a dia."
              </p>
              <p className="text-right text-[#0b110d] mt-4 font-semibold">— Quezia Reis</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {METHOD_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-2xl font-bold text-[#0b110d] mb-3">{card.title}</h4>
                  <p className="text-[#0b110d]">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b110d] text-center mb-12">
              Depoimentos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-lg border border-[#ffc2ce] p-2 flex items-center justify-center w-full max-w-[300px]"
                > 
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="rounded-lg max-h-96 w-full h-auto object-cover"
                    loading="lazy"
                    width="300"
                    height="400"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="planos" className="py-16 md:py-24 bg-[#0b110d] relative overflow-hidden">
          <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-10 w-[90%] md:w-auto flex justify-center">
            <div className="bg-[#ffc2ce] text-[#0b110d] px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-base shadow-lg animate-pulse whitespace-nowrap">
              🔥 OFERTA BLACK FRIDAY 🔥
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-6 mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Escolha seu plano
              </h2>
              <p className="text-[#ffc2ce] text-lg md:text-xl font-semibold">
                Preços especiais de Black Friday - Por tempo limitado!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {PLANS.slice().reverse().map((plan, index) => (
                <article
                  key={plan.name}
                  className={`${plan.bgColor} rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#ffc2ce] flex flex-col relative md:order-${index === 0 ? '2' : '1'}`}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                    {plan.discount}
                  </div>
                  {plan.badge && (
                    <div className="absolute top-4 right-4 bg-[#0b110d] text-[#f0f0d8] px-4 py-1 rounded-full text-sm font-bold">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>{plan.name}</h3>
                  <div className="mb-6">
                    <p className={`${plan.textColor} opacity-60 text-xl line-through mb-1`}>De {plan.oldPrice}</p>
                    <p className={`${plan.textColor} text-4xl font-bold`}>Por {plan.price}</p>
                  </div>
                  <ul className={`space-y-3 mb-8 ${plan.textColor} flex-grow`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="font-bold">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full ${plan.buttonColor} py-3 rounded-lg font-bold text-center hover:bg-opacity-90 transition-all mt-auto`}
                  >
                    Contratar agora
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="py-16 md:py-24 bg-[#f0f0d8]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/quezia-hero.jpg"
                  alt="Quezia Reis Personal Trainer"
                  className="rounded-lg shadow-lg w-full"
                  loading="lazy"
                />
              </div>

              <article className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b110d] mb-6">
                  Conheça sua treinadora
                </h2>

                <h3 className="text-2xl font-bold text-[#ffc2ce] mb-4">Quezia Reis</h3>

                <p className="text-[#0b110d] mb-4 leading-relaxed">
                  A mente por trás do Método Rica de Saúde, Quezia Reis transforma a vida de mulheres que buscam resultados reais sem sacrificar a rotina.
                </p>

                <div className="space-y-4 text-[#0b110d]">
                  {ABOUT_SECTIONS.map((section) => (
                    <div key={section.title}>
                      <h4 className="font-bold text-[#ffc2ce] mb-1">{section.title}</h4>
                      <p>{section.description}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 bg-[#ffc2ce] text-[#0b110d] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
                >
                  Fale com a Quezia
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#0b110d]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
              Não espere mais. Seu corpo e mente agradecem. Comece sua transformação com o Método Rica de Saúde.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffc2ce] text-[#0b110d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
            >
              Envie uma mensagem
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b110d] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-1 font-bold text-xl mb-4">
                <span className="text-[#ffc2ce]">QUEZIA</span>
                <span className="text-white">REIS</span>
              </div>
              <p className="text-sm opacity-75">
                Método Rica de Saúde - Treino Personalizado para Mulheres
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Links rápidos</h3>
              <ul className="space-y-2 text-sm opacity-75">
                {MENU_ITEMS.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-[#ffc2ce] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Conecte-se</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/queziareisrs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity text-white"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity text-white"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm opacity-75">
            <p className="mb-2">
              © 2025 Quezia Reis Personal Trainer. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://meu-portfolio-25xr9d90s-santanayures-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffc2ce] transition-colors font-semibold"
              >
                Yure Santana
              </a>
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#ffc2ce] text-[#0b110d] p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all z-50"
          aria-label="Voltar ao topo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}
