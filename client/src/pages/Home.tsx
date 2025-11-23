import { useState } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0b110d]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0b110d] shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1 font-bold text-2xl">
            <span className="text-[#ffc2ce]">QUEZIA</span>
            <span className="text-[#f0f0d8]">REIS</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("metodo")}
              className="text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium"
            >
              Sobre
            </button>
            <a
              href="https://wa.me/5571991408574"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffc2ce] text-[#0b110d] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f0f0d8]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0b110d] px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("metodo")}
              className="block w-full text-left text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium py-2"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="block w-full text-left text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium py-2"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="block w-full text-left text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium py-2"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-[#f0f0d8] hover:text-[#ffc2ce] transition-colors font-medium py-2"
            >
              Sobre
            </button>
            <a
              href="https://wa.me/5571991408574"
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
        {/* Hero Section */}
        <section className="relative h-screen min-h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden">
          <img
            src="/quezia-about.png"
            alt="Quezia Reis Personal Trainer em ação"
            className="absolute inset-0 w-full h-full object-cover"
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
              href="https://wa.me/5571991408574"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffc2ce] text-[#0b110d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
            >
              Comece agora
            </a>
          </div>
        </section>

        {/* Método Section */}
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

            {/* Method Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <article className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-[#0b110d] mb-3">Treino personalizado</h3>
                <p className="text-[#0b110d]">
                  Cada treino é adaptado ao seu corpo, rotina e objetivos. Sem genéricos, sem desperdício de tempo.
                </p>
              </article>

              {/* Card 2 */}
              <article className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-[#0b110d] mb-3">Segurança em primeiro lugar</h3>
                <p className="text-[#0b110d]">
                  Técnica refinada e acompanhamento constante para evitar lesões e garantir resultados duradouros.
                </p>
              </article>

              {/* Card 3 */}
              <article className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-[#0b110d] mb-3">Eficiência garantida</h3>
                <p className="text-[#0b110d]">
                  Máximo resultado no menor tempo possível. Planejamento que se encaixa na sua vida real.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b110d] text-center mb-12">
              O que minhas alunas dizem
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <article className="bg-[#f0f0d8] rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#ffc2ce] rounded-full mr-4 flex items-center justify-center font-bold text-[#0b110d]">
                    R
                  </div>
                  <div>
                    <p className="font-bold text-[#0b110d]">Renilda</p>
                  </div>
                </div>
                <p className="text-[#0b110d] italic">
                  "Eliminei 9 quilos, não sinto mais dores na coluna e estou passando pelo climatério de uma forma muito mais tranquila do que antes. Obrigada."
                </p>
                <div className="flex mt-4 text-[#ffc2ce]">★★★★★</div>
              </article>

              {/* Testimonial 2 */}
              <article className="bg-[#f0f0d8] rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#ffc2ce] rounded-full mr-4 flex items-center justify-center font-bold text-[#0b110d]">
                    C
                  </div>
                  <div>
                    <p className="font-bold text-[#0b110d]">Carla</p>
                  </div>
                </div>
                <p className="text-[#0b110d] italic">
                  "Fiz minha última quimio na sexta. Correu tudo bem. Muito feliz pelo processo ter sido tão leve pra mim, e você foi muito importante nesse processo, com os exercícios, apoio, incentivo, atenção e preocupação. Muito obrigada. E vamos que vamos para a próxima etapa."
                </p>
                <div className="flex mt-4 text-[#ffc2ce]">★★★★★</div>
              </article>

              {/* Testimonial 3 */}
              <article className="bg-[#f0f0d8] rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#ffc2ce] rounded-full mr-4 flex items-center justify-center font-bold text-[#0b110d]">
                    EF
                  </div>
                  <div>
                    <p className="font-bold text-[#0b110d]">Elaine Fraga</p>
                  </div>
                </div>
                <p className="text-[#0b110d] italic">
                  "Quel, melhor profissional que já conheci. Os treinos são maravilhosos e seguem o objetivo de cada pessoa. Tudo é personalizado em um aplicativo didático e simples, com muitos vídeos para cada exercício, o que ajuda a tirar dúvidas com facilidade. Faço online, mas o acompanhamento parece presencial. Ela realmente acompanha, responde, orienta e cobra. Tirei minhas dúvidas e tive ótimos resultados com a Quel. Estou amando."
                </p>
                <div className="flex mt-4 text-[#ffc2ce]">★★★★★</div>
              </article>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="planos" className="py-16 md:py-24 bg-[#0b110d]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0d8] text-center mb-12">
              Escolha seu plano
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Plan 1 - Trimestral */}
              <article className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#ffc2ce] flex flex-col">
                <h3 className="text-2xl font-bold text-[#0b110d] mb-2">Plano trimestral</h3>
                <p className="text-[#ffc2ce] text-4xl font-bold mb-6">R$ 700</p>
                <ul className="space-y-3 mb-8 text-[#0b110d] flex-grow">
                  <li className="flex items-center gap-2">
                    <span className="text-[#ffc2ce] font-bold">✓</span> Treino personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ffc2ce] font-bold">✓</span> Assinatura Prime
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ffc2ce] font-bold">✓</span> 3 encontros online
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ffc2ce] font-bold">✓</span> Acompanhamento WhatsApp
                  </li>
                </ul>
                <a
                  href="https://wa.me/5571991408574?text=Gostaria%20de%20contratar%20o%20plano%20trimestral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#ffc2ce] text-[#0b110d] py-3 rounded-lg font-bold text-center hover:bg-opacity-90 transition-all mt-auto"
                >
                  Contratar agora
                </a>
              </article>

              {/* Plan 2 - Anual */}
              <article className="bg-[#ffc2ce] rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#ffc2ce] relative flex flex-col">
                <div className="absolute top-4 right-4 bg-[#0b110d] text-[#f0f0d8] px-4 py-1 rounded-full text-sm font-bold">
                  Melhor custo-beneficio
                </div>
                <h3 className="text-2xl font-bold text-[#0b110d] mb-2">Plano anual</h3>
                <p className="text-[#0b110d] text-4xl font-bold mb-6">R$ 1.500</p>
                <ul className="space-y-3 mb-8 text-[#0b110d] flex-grow">
                  <li className="flex items-center gap-2">
                    <span className="font-bold">✓</span> Treino personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold">✓</span> Assinatura Prime Gourmet
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold">✓</span> Mini band inclusa
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold">✓</span> 20 encontros online (videochamada)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold">✓</span> Acompanhamento WhatsApp
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold">✓</span> Ebook digital exclusivo
                  </li>
                </ul>
                <a
                  href="https://wa.me/5571991408574?text=Gostaria%20de%20contratar%20o%20plano%20anual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0b110d] text-[#f0f0d8] py-3 rounded-lg font-bold text-center hover:bg-opacity-90 transition-all mt-auto"
                >
                  Contratar agora
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 md:py-24 bg-[#f0f0d8]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 md:order-1">
                <img
                  src="/quezia-hero.jpg"
                  alt="Quezia Reis Personal Trainer"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>

              {/* Content */}
              <article className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b110d] mb-6">
                  Conheça sua treinadora
                </h2>

                <h3 className="text-2xl font-bold text-[#ffc2ce] mb-4">Quezia Reis</h3>

                <p className="text-[#0b110d] mb-4 leading-relaxed">
                  A mente por trás do Método Rica de Saúde, Quezia Reis transforma a vida de mulheres que buscam resultados reais sem sacrificar a rotina.
                </p>

                <div className="space-y-4 text-[#0b110d]">
                  <div>
                    <h4 className="font-bold text-[#ffc2ce] mb-1">Mãe e profissional</h4>
                    <p>
                      Vive na prática o malabarismo entre casa, filhos e trabalho, trazendo soluções reais para mulheres reais.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#ffc2ce] mb-1">Especialista em você</h4>
                    <p>
                      Bacharel em Educação Física com Especialização em Saúde da Mulher.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#ffc2ce] mb-1">Formação de elite</h4>
                    <p>
                      Base técnica refinada pela Dança (Byla Dança), Pilates e certificação internacional NASM (National Academy of Sports Medicine).
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/5571991408574"
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#0b110d]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0d8] mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg text-[#f0f0d8] mb-8 max-w-2xl mx-auto">
              Não espere mais. Seu corpo e mente agradecem. Comece sua transformação com o Método Rica de Saúde.
            </p>
            <a
              href="https://wa.me/5571991408574"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffc2ce] text-[#0b110d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
            >
              Envie uma mensagem
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b110d] text-[#f0f0d8] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-1 font-bold text-xl mb-4">
                <span className="text-[#ffc2ce]">QUEZIA</span>
                <span className="text-[#f0f0d8]">REIS</span>
              </div>
              <p className="text-sm opacity-75">
                Método Rica de Saúde - Treino Personalizado para Mulheres
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Links rápidos</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <button
                    onClick={() => scrollToSection("metodo")}
                    className="hover:text-[#ffc2ce] transition-colors"
                  >
                    Método
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("planos")}
                    className="hover:text-[#ffc2ce] transition-colors"
                  >
                    Planos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="hover:text-[#ffc2ce] transition-colors"
                  >
                    Sobre
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold mb-4">Conecte-se</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffc2ce] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/5571991408574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffc2ce] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 pt-8 text-center text-sm opacity-75">
            <p className="mb-2">
              © 2025 Quezia Reis Personal Trainer. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://wa.me/5571991408574"
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
    </div>
  );
}
