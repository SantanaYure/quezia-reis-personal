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
  { id: 1, image: "/depoimento1.jpeg" },
  { id: 2, image: "/depoimento2.jpeg" },
  { id: 3, image: "/depoimento3.jpeg" },
  { id: 4, image: "/depoimento4.jpeg" },
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
    message: "Gostaria%20de%20contratar%20o%20plano%20trimestral",
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
    message: "Gostaria%20de%20contratar%20o%20plano%20anual",
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
          <div className="flex items-center gap-1 font-bold text-2xl">
            <span className="text-[#ffc2ce]">QUEZIA</span>
            <span className="text-[#f0f0d8]">REIS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium"
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
            className="md:hidden text-[#f0f0d8]"
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
                className="block w-full text-left text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium py-2"
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
          />
          <img
            src="/quezia-about.png"
            alt="Quezia Reis Personal Trainer em ação"
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforme seu corpo e mente
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light">
              Com o Método Rica de Saúde: treino personalizado, segurança e eficiência
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffc2ce] text-[#0b110d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
            >
              Comece agora
            </a>
          </div>
        </section>

        <section id="metodo" className="py-16 md:py-24 bg-[#f0f0d8]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b110d] mb-4">
                Método Exclusivo Rica de Saúde
              </h2>
              <p className="text-lg text-[#0b110d] max-w-2xl mx-auto">
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
                  <h3 className="text-2xl font-bold text-[#0b110d] mb-3">{card.title}</h3>
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
                  className="bg-white rounded-xl shadow-lg border border-[#ffc2ce] p-2 flex items-center justify-center"
                >
                  <img
                    src={testimonial.image}
                    alt={`Depoimento ${testimonial.id}`}
                    className="rounded-lg max-h-96 w-auto"
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0d8] mb-3">
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
                    href={`${WHATSAPP_URL}?text=${plan.message}`}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0d8] mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg text-[#f0f0d8] mb-8 max-w-2xl mx-auto">
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

      <footer className="bg-[#0b110d] text-[#f0f0d8] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-1 font-bold text-xl mb-4">
                <span className="text-[#ffc2ce]">QUEZIA</span>
                <span className="text-[#f0f0d8]">REIS</span>
              </div>
              <p className="text-sm opacity-75">
                Método Rica de Saúde - Treino Personalizado para Mulheres
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links rápidos</h4>
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
              <h4 className="font-bold mb-4">Conecte-se</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/queziareisrs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
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
