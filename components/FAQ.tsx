'use client'; // Necessário pois teremos interação (abrir/fechar)
import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer: "A primeira consulta serve para analisarmos os detalhes do seu caso, avaliar a viabilidade jurídica e traçar a melhor estratégia. Pode ser realizada presencialmente ou por videoconferência."
  },
  {
    question: "Quais são os documentos necessários?",
    answer: "Isso varia conforme o caso, mas geralmente documentos de identificação (RG/CPF), comprovante de residência e todos os documentos relacionados ao conflito (contratos, prints, e-mails) são essenciais."
  },
  {
    question: "Quanto custa um processo judicial?",
    answer: "Os custos envolvem honorários advocatícios e, em alguns casos, custas processuais do Estado. Trabalhamos com transparência e apresentamos um orçamento detalhado após a análise do caso."
  },
  {
    question: "Atendem em outras cidades ou estados?",
    answer: "Sim. Graças ao processo digital, conseguimos atuar em todo o território nacional, representando nossos clientes em tribunais de qualquer estado via peticionamento eletrônico."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageCircleQuestion className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Dúvidas Frequentes</h2>
          <p className="text-slate-500 mt-4">Encontre respostas rápidas para os principais questionamentos.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-800">{faq.question}</span>
                <ChevronDown 
                  className={`text-amber-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 text-slate-600 bg-white border-t border-slate-200 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}