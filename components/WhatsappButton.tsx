'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsappButton() {
  const phoneNumber = "5561998860874";
  const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta jurídica.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
      aria-label="Contato via WhatsApp"
    >
      {/* Efeito de Ondulação (Pulse) */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:hidden"></span>
      
      {/* Ícone */}
      <MessageCircle size={32} className="relative z-10" fill="currentColor" />
      
      {/* Tooltip opcional (aparece no hover) */}
      <span className="absolute right-20 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Fale conosco agora
      </span>
    </a>
  );
}