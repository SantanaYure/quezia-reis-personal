import { useState, useEffect } from "react";
import { Menu, X, Diamond, Award, Shield, Sparkles, Crown, Star } from "lucide-react";

const PHONE_NUMBER = "5571988895613";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;

const MENU_ITEMS = [
  { id: "metodo", label: "O Método" },
  { id: "planos", label: "App MFIT" },
  { id: "planos", label: "Bônus Prime" },
  { id: "depoimentos", label: "Resultados" },
];

const METHOD_CARDS = [
  {
    icon: Diamond,
    title: "Treino Exclusivo",
    description: "Cada protocolo é meticulosamente desenhado para seu biótipo, rotina e aspirações. Experiência única e personalizada.",
  },
  {
    icon: Shield,
    title: "Excelência & Segurança",
    description: "Técnica refinada com acompanhamento premium para resultados duradouros e saúde impecável.",
  },
  {
    icon: Award,
    title: "Resultados de Elite",
    description: "Máxima eficiência com planejamento estratégico que respeita seu tempo e supera suas expectativas.",
  },
];

const TESTIMONIALS = [
  { id: 1, image: "https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/depoimento1.jpeg", alt: "Depoimento de cliente satisfeita com resultados do treino" },
  { id: 2, image: "https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/depoimento2.jpeg", alt: "Feedback positivo sobre o método Ricas de Saúde" },
  { id: 3, image: "https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/depoimento3.jpeg", alt: "Cliente compartilhando sua transformação" },
  { id: 4, image: "https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/depoimento4.jpeg", alt: "Relato de experiência com treino personalizado" },
];

const PLANS = [
  {
    name: "",
    subtitle: "Trimestral",
    discount: "30% OFF",
    oldPrice: "R$ 1.000",
    price: "R$ 700",
    features: [
      "Protocolo de treino exclusivo",
      "Assinatura Prime Gourmet",
      "Suporte prioritário via WhatsApp",
      "3 sessões de consultoria online",
    ],
    paymentLink: "https://mpago.li/2K7Gb9S",
    featured: false,
  },
  {
    name: "",
    subtitle: "Anual",
    discount: "50% OFF",
    oldPrice: "R$ 3.000",
    price: "R$ 1.500",
    features: [
      "Protocolo de treino exclusivo",
      "Assinatura Prime Gourmet",
      "Suporte VIP via WhatsApp",
      "20 sessões de consultoria em vídeo",
      "Kit premium com mini band",
      "Ebook digital exclusivo",
    ],
    paymentLink: "https://mpago.la/1NRFg84",
    featured: true,
    badge: "Mais Escolhido",
  },
];

const ABOUT_SECTIONS = [
  {
    icon: Crown,
    title: "Lifestyle & Equilíbrio",
    description: "Compreende na prática a arte de equilibrar família, carreira e bem-estar, oferecendo soluções reais para mulheres que exigem excelência.",
  },
  {
    icon: Award,
    title: "Especialização Premium",
    description: "Bacharel em Educação Física com Especialização em Saúde da Mulher e certificação internacional NASM.",
  },
  {
    icon: Star,
    title: "Formação de Elite",
    description: "Background refinado em Dança (Byla Dança) e Pilates, combinando arte, ciência e técnica em cada protocolo.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-light">
      {/* Header Premium */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between rounded-xl">
          <h1 className="flex items-center gap-2 text-2xl tracking-[0.2em] font-light">
            <span className="text-white font-cormorant">QUEZIA</span>
            <span className="text-[#ffc2ce] font-cormorant">REIS</span>
          </h1>

          <div className="hidden lg:flex items-center gap-12">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-[#ffc2ce] transition-all duration-300 text-sm tracking-[0.15em] uppercase font-light"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0a0a0a] px-8 py-3 text-sm tracking-[0.15em] hover:bg-white/90 transition-all duration-300 rounded-lg font-medium"
            >
              Começar Agora
            </a>
          </div>

          <button
            className="lg:hidden text-[#ffc2ce]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-md px-6 py-8 space-y-6 border-t border-[#ffc2ce]/20 rounded-xl">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white/80 hover:text-[#ffc2ce] transition-colors py-2 text-sm tracking-[0.15em] uppercase"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-[#0a0a0a] px-8 py-3 text-sm tracking-[0.15em] text-center hover:bg-white/90 transition-all duration-300 rounded-lg font-medium"
            >
              Começar Agora
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section - Full Screen Luxury */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <img
            src="/quezia-about-mobile.png"
            alt="Quezia Reis Personal Trainer"
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            loading="eager"
            fetchPriority="high"
          />
          <img
            src="/quezia-about.png"
            alt="Quezia Reis Personal Trainer"
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            loading="eager"
            fetchPriority="high"
          />
          
          {/* Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]"></div>
          
          {/* Gold accent lines */}
          <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-[#ffc2ce] to-transparent ml-8 md:ml-16 mt-24"></div>
          <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-[#ffc2ce] to-transparent mr-8 md:mr-16 mt-24"></div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="mb-8">
              <Sparkles className="w-8 h-8 text-[#ffc2ce] mx-auto mb-6" />
              <p className="text-[#ffc2ce] text-sm tracking-[0.3em] uppercase mb-4">Método Ricas de Saúde</p>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-wide whitespace-nowrap">
              Transforme seu corpo e mente
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 font-extralight tracking-wide max-w-2xl mx-auto leading-relaxed">
              Treino personalizado de alto padrão para mulheres que buscam excelência em cada aspecto da vida
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection("planos")}
                className="bg-[#ffc2ce] text-[#0a0a0a] px-12 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#ffd4dc] transition-all duration-300 rounded-xl"
              >
                Conhecer Planos
              </button>
              <button
                onClick={() => scrollToSection("metodo")}
                className="border border-white/30 text-white px-12 py-4 text-sm tracking-[0.2em] uppercase hover:border-[#ffc2ce] hover:text-[#ffc2ce] transition-all duration-300 rounded-xl"
              >
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-[#ffc2ce]/60 text-xs tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#ffc2ce]/60 to-transparent"></div>
          </div>
        </section>

        {/* Method Section - Premium Cards */}
        <section id="metodo" className="py-24 md:py-32 bg-[#0a0a0a]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
                Método <span className="text-[#ffc2ce] italic">Ricas de Saúde</span>
              </h2>
              <div className="w-24 h-px bg-[#ffc2ce] mx-auto mb-8"></div>
              <p className="text-lg text-white/60 max-w-2xl mx-auto font-extralight leading-relaxed">
                Um protocolo desenvolvido para mulheres que não aceitam menos que a excelência
              </p>
            </div>

            {/* Premium Quote */}
            <div className="relative max-w-4xl mx-auto mb-20 p-12 border border-[#ffc2ce]/20 rounded-xl">
              <div className="absolute -top-4 left-8 bg-[#0a0a0a] px-4 rounded-xl">
                <span className="text-[#ffc2ce] text-4xl">"</span>
              </div>
              <p className="text-xl md:text-2xl text-white/80 italic font-extralight leading-relaxed text-center">
                Minha meta é que você tenha constância e resultados, com um planejamento que funciona de verdade no seu dia a dia.
              </p>
              <p className="text-[#ffc2ce] mt-8 text-center tracking-[0.2em] text-sm">— QUEZIA REIS</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {METHOD_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="group p-10 bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-[#1a1a1a] hover:border-[#ffc2ce]/40 transition-all duration-500 rounded-xl"
                >
                  <card.icon className="w-10 h-10 text-[#ffc2ce] mb-8 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-light text-white mb-4 tracking-wide">{card.title}</h4>
                  <p className="text-white/50 font-extralight leading-relaxed">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Gallery Style */}
                {/* Truth Section - Highlighted Statement */}
                <section className="py-24 md:py-32 bg-[#f0efed] rounded-xl">
                  <div className="container mx-auto px-6 lg:px-12 rounded-xl">
                    <div className="max-w-3xl mx-auto text-center rounded-xl">
                      <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-8 text-[#0a0a0a]">A verdade é simples</h2>
                      <p className="text-lg md:text-xl text-[#2a2a2a] mb-8 font-extralight leading-relaxed">
                        nenhum treino genérico da internet vai entregar o resultado que você deseja, porque ele não entende sua rotina, sua história, suas dores, sua fase ou seus objetivos.
                      </p>
                      <p className="text-[#ffc2ce] text-base font-medium mb-8">Por que tantas mulheres estão trocando treinos prontos por um acompanhamento personalizado?</p>
                      <ul className="text-left inline-block mx-auto mb-8 text-[#0a0a0a] text-lg font-light space-y-3">
                        <li>✔ Porque personalização multiplica resultados</li>
                        <li>✔ Porque treinar sozinha te faz perder tempo (e às vezes piora as dores)</li>
                        <li>✔ Porque rotina corrida não é desculpa — é realidade</li>
                        <li>✔ Porque mulher precisa de um olhar específico</li>
                        <li>✔ Porque quem tem acompanhamento, mantém constância</li>
                      </ul>
                      <p className="text-[#ffc2ce] text-base font-medium mb-8">O que você recebe ao entrar (e o que ninguém te conta)</p>
                      <ul className="text-left inline-block mx-auto mb-8 text-[#0a0a0a] text-lg font-light space-y-3">
                        <li>→ Um programa que tira você do improviso e coloca no resultado</li>
                        <li>→ Periodização que faz seu corpo evoluir mês após mês</li>
                        <li>→ Ajustes frequentes para você nunca ficar travada</li>
                        <li>→ Execução correta para evitar dores e acelerar ganhos<br/>Eu cuido da técnica para você colher segurança, força e estética.</li>
                        <li>→ Um treino que acompanha sua vida — não o contrário</li>
                      </ul>
                      <p className="text-[#ffc2ce] text-base font-medium mb-8">Para quem é essa consultoria?</p>
                      <ul className="text-left inline-block mx-auto mb-8 text-[#0a0a0a] text-lg font-light space-y-3">
                        <li>🔥 sair do ciclo “começa e para”</li>
                        <li>🔥 saber exatamente o que fazer no treino</li>
                        <li>🔥 abandonar treinos prontos e aprender a treinar certo</li>
                        <li>🔥 fortalecer abdômen, lombar e corpo inteiro</li>
                        <li>🔥 recuperar confiança depois da gestação</li>
                        <li>🔥 ter disposição na rotina</li>
                        <li>🔥 ver mudança no corpo de forma sustentável</li>
                      </ul>
                      <p className="text-lg md:text-xl text-[#2a2a2a] font-extralight leading-relaxed mt-8">Se você se reconhece em pelo menos um desses pontos…<br/>você está no lugar certo.</p>
                    </div>
                  </div>
                </section>
        <section id="depoimentos" className="py-24 md:py-32 bg-[#080808]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <p className="text-[#ffc2ce] text-sm tracking-[0.3em] uppercase mb-4">Resultados Reais</p>
              <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
                Histórias de <span className="text-[#ffc2ce] italic">Sucesso</span>
              </h2>
              <div className="w-24 h-px bg-[#ffc2ce] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="relative overflow-hidden bg-[#111] aspect-3/4 rounded-xl"
                > 
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full object-cover opacity-90 transition-all duration-700"
                    loading="lazy"
                    width="300"
                    height="400"
                  />
                  <div className="absolute inset-0 border border-[#ffc2ce]/0 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section - Luxury Pricing */}
        <section id="planos" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#ffc2ce]/40 to-transparent"></div>
          
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-[#ffc2ce]/10 border border-[#ffc2ce]/30 px-6 py-3 mb-8">
                <Sparkles className="w-4 h-4 text-[#ffc2ce]" />
                <span className="text-[#ffc2ce] text-sm tracking-[0.2em] uppercase">Oferta Exclusiva Black Friday</span>
                <Sparkles className="w-4 h-4 text-[#ffc2ce]" />
              </div>
            </div>

            <div className="text-center mb-20">
              <p className="text-[#ffc2ce] text-sm tracking-[0.3em] uppercase mb-4">Investimento</p>
              <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
                Planos <span className="text-[#ffc2ce] italic">Exclusivos</span>
              </h2>
              <div className="w-24 h-px bg-[#ffc2ce] mx-auto mb-8"></div>
              <p className="text-lg text-white/60 max-w-xl mx-auto font-extralight">
                Escolha o plano que melhor se adapta ao seu estilo de vida
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {PLANS.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative p-10 lg:p-12 transition-all duration-500 rounded-xl ${
                    plan.featured 
                      ? 'bg-gradient-to-b from-[#ffc2ce]/10 to-[#0a0a0a] border-2 border-[#ffc2ce]' 
                      : 'bg-[#111] border border-[#1a1a1a] hover:border-[#ffc2ce]/40'
                  }`}
                >
                  {/* Discount Badge */}
                  <div className="absolute -top-4 left-8 bg-[#ffc2ce] text-[#0a0a0a] px-4 py-1 text-xs font-semibold tracking-wider">
                    {plan.discount}
                  </div>
                  
                  {plan.badge && (
                    <div className="absolute -top-4 right-8 bg-[#0a0a0a] border border-[#ffc2ce] text-[#ffc2ce] px-4 py-1 text-xs tracking-wider rounded-xl">
                      {plan.badge}
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <p className="text-[#ffc2ce] text-sm tracking-[0.2em] uppercase mb-2">{plan.subtitle}</p>
                    {/* Nome removido */}
                  </div>
                  
                  <div className="mb-10">
                    <p className="text-white/40 text-lg line-through mb-2">De {plan.oldPrice}</p>
                    <p className="text-4xl lg:text-5xl font-light text-white">
                      Por <span className="text-[#ffc2ce]">{plan.price}</span>
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-white/70 font-extralight">
                        <Diamond className="w-4 h-4 text-[#ffc2ce] mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={plan.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 text-center text-sm tracking-[0.2em] uppercase transition-all duration-300 rounded-xl ${
                      plan.featured
                        ? 'bg-[#ffc2ce] text-[#0a0a0a] hover:bg-[#ffd4dc]'
                        : 'border border-[#ffc2ce] text-[#ffc2ce] hover:bg-[#ffc2ce] hover:text-[#0a0a0a]'
                    }`}
                  >
                    Começar Agora
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Elegant Biography */}
        <section id="sobre" className="py-24 md:py-32 bg-[#080808]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 border border-[#ffc2ce]/20 rounded-xl"></div>
                <img
                  src="/quezia-hero.jpg"
                  alt="Quezia Reis Personal Trainer"
                  className="w-full transition-all duration-700 rounded-xl"
                  loading="lazy"
                />
              </div>

              <article className="order-1 lg:order-2">
                <p className="text-[#ffc2ce] text-sm tracking-[0.3em] uppercase mb-4">Sua Treinadora</p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4">
                  Quezia <span className="text-[#ffc2ce] italic">Reis</span>
                </h2>
                <div className="w-24 h-px bg-[#ffc2ce] mb-8"></div>

                <p className="text-white/60 mb-10 font-extralight leading-relaxed text-lg">
                  Criadora do Método Ricas de Saúde, Quezia Reis é a referência para mulheres que buscam transformação real sem comprometer sua rotina de excelência.
                </p>

                <div className="space-y-8">
                  {ABOUT_SECTIONS.map((section) => (
                    <div key={section.title} className="flex gap-6">
                      <section.icon className="w-8 h-8 text-[#ffc2ce] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-light tracking-wide mb-2">{section.title}</h4>
                        <p className="text-white/50 font-extralight leading-relaxed">{section.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-12 bg-[#ffc2ce] text-[#0a0a0a] px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#ffd4dc] transition-all duration-300"
                >
                  Agendar Consultoria
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Closing */}
        <section className="py-24 md:py-32 bg-[#0a0a0a] relative">
          <div className="absolute inset-0 bg-[url('/quezia-gym.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
          
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <Sparkles className="w-8 h-8 text-[#ffc2ce] mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
              Pronta para sua <span className="text-[#ffc2ce] italic">Transformação</span>?
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto font-extralight leading-relaxed">
              Dê o primeiro passo rumo à versão mais extraordinária de si mesma. Sua jornada de excelência começa agora.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffc2ce] text-[#0a0a0a] px-16 py-5 text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#ffd4dc] transition-all duration-300"
            >
              Iniciar Jornada
            </a>
          </div>
        </section>
      </main>

      {/* Footer Premium */}
      <footer className="bg-[#050505] py-16 border-t border-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xl tracking-[0.2em] font-light mb-6">
                <span className="text-[#ffc2ce]">QUEZIA</span>
                <span className="text-white">REIS</span>
              </div>
              <p className="text-white/40 font-extralight leading-relaxed">
                Método Ricas de Saúde — Treino personalizado de alto padrão para mulheres de excelência.
              </p>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-white/60 mb-6">Navegação</h3>
              <ul className="space-y-3">
                {MENU_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-white/40 hover:text-[#ffc2ce] transition-colors font-extralight"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-white/60 mb-6">Redes Sociais</h3>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/queziareisrs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#ffc2ce] transition-colors"
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
                  className="text-white/40 hover:text-[#ffc2ce] transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1a1a1a] pt-8 text-center">
            <p className="text-white/30 text-sm font-extralight mb-2">
              © 2025 Quezia Reis Personal Trainer. Todos os direitos reservados.
            </p>
            <p className="text-white/20 text-sm font-extralight">
              Desenvolvido por{" "}
              <a
                href="https://meu-portfolio-25xr9d90s-santanayures-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffc2ce] transition-colors"
              >
                Yure Santana
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top - Luxury */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#ffc2ce] text-[#0a0a0a] p-4 shadow-lg shadow-[#ffc2ce]/20 hover:bg-[#ffd4dc] transition-all z-50"
          aria-label="Voltar ao topo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
