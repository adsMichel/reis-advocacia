import { Scale, Users, Gavel, Building2 } from 'lucide-react';

const services = [
  {
    title: "Direito Civil",
    description: "Resolução de conflitos contratuais, responsabilidade civil e direitos de propriedade.",
    icon: <Scale className="w-8 h-8 text-amber-600" />
  },
  {
    title: "Direito de Família",
    description: "Consultoria humanizada em divórcios, inventários, guarda e pensão alimentícia.",
    icon: <Users className="w-8 h-8 text-amber-600" />
  },
  {
    title: "Causas Trabalhistas",
    description: "Defesa dos direitos do trabalhador e consultoria preventiva para empresas.",
    icon: <Gavel className="w-8 h-8 text-amber-600" />
  },
  {
    title: "Direito Imobiliário",
    description: "Regularização de imóveis, contratos de compra e venda e reintegração de posse.",
    icon: <Building2 className="w-8 h-8 text-amber-600" />
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Áreas de Atuação</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-slate-100 rounded-xl hover:shadow-xl transition-shadow bg-slate-50 group">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}