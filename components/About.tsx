import { Award, CheckCircle, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Lado da Imagem/Destaque */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative z-10">
              {/* Substitua a URL abaixo pela foto real do advogado */}
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
                alt="Advogado Responsável"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Elemento Decorativo (Quadrado Dourado atrás da foto) */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-amber-500/10 rounded-2xl -z-0"></div>
          </div>

          {/* Lado do Texto */}
          <div className="w-full md:w-1/2">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Trajetória e Ética</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6 font-serif">
              Dedicado a oferecer defesa jurídica de alta performance.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Com mais de 12 anos de experiência no mercado jurídico, nosso escritório nasceu com o propósito de humanizar o atendimento legal, sem abrir mão do rigor técnico e da estratégia agressiva em prol do cliente.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <GraduationCap className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Formação Acadêmica</h4>
                  <p className="text-sm text-slate-500">Graduado pela USP com Especialização em Direito Civil.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Award className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Reconhecimento</h4>
                  <p className="text-sm text-slate-500">Membro da comissão de ética da OAB por 4 anos consecutivos.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <CheckCircle className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Missão</h4>
                  <p className="text-sm text-slate-500">Garantir que cada cliente receba uma defesa personalizada e transparente.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}