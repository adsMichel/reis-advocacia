import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Identidade */}
          <div>
            <h3 className="text-white text-xl font-serif font-bold mb-4">
              Alan <span className="text-amber-500">Reis</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Compromisso com a justiça e excelência na defesa dos seus direitos. 
              Atendimento consultivo e contencioso com transparência total.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Coluna 2: Contato Rápido */}
          <div>
            <h4 className="text-white font-bold mb-4 italic">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-amber-500" />
                (61) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-amber-500" />
                contato@seusite.com.br
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-amber-500" />
                Av. Paulista, 1000 - Brasília, DF
              </li>
            </ul>
          </div>

          {/* Coluna 3: Informações Legais */}
          <div>
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        {/* Linha Final: Copyright e OAB */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p className="mb-2">
            © {year} Alan Reis - Todos os direitos reservados. 
            <span className="mx-2">|</span> OAB/SP 000.000
          </p>
          <p>
            Desenvolvido com foco em performance jurídica.
          </p>
        </div>
      </div>
    </footer>
  );
}