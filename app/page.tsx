import Services from '@/components/Services';
import Footer from '@/components/Footer';
import About from '@/components/About';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Cores Escuras para Autoridade */}
      <section className="relative py-24 px-6 bg-[#0f172a] text-white overflow-hidden">
        {/* Detalhe visual de fundo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/5 skew-x-12 transform translate-x-20" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-amber-500 font-semibold tracking-widest uppercase text-sm">Escritório de Advocacia Especializado</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mt-4 mb-6 leading-tight">
              Soluções Jurídicas <br />
              <span className="text-amber-500">Estratégicas e Éticas.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Protegemos seus interesses com rigor técnico e atendimento personalizado. Agende uma consulta jurídica especializada hoje mesmo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/61998860874" 
                 className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-bold text-center transition-all shadow-lg hover:shadow-amber-600/20">
                Falar com Especialista
              </a>
              <a href="#servicos" 
                 className="border border-slate-500 hover:border-white text-white px-8 py-4 rounded-md font-bold text-center transition-all">
                Ver Áreas de Atuação
              </a>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Componente de Serviços */}
      <Services />

      < FAQ />

      {/* Seção de Chamada Final (CTA) */}
      <section className="py-16 bg-slate-900 text-center">
        <h2 className="text-2xl text-white mb-6">Precisa de auxílio jurídico imediato?</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-full font-bold transition-transform hover:scale-105">
          Chamar no WhatsApp
        </button>
      </section>

      <Footer />

    </main>
  );
}