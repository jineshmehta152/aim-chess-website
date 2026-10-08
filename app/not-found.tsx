"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-16 font-sans">
      <div className="w-full max-w-lg text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
        <div className="flex justify-center mb-4">
          <Image 
            src="/logo-espludic.jpg" 
            alt="Esplúdic" 
            width={180} 
            height={74} 
            className="h-12 w-auto object-contain rounded-md"
          />
        </div>

        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#00aeef]/10 text-[#00aeef] text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Error 404</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
          Pàgina no trobada
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          La pàgina que cerques no existeix o s'ha mogut. Torna a la pàgina principal per seguir explorant Esplúdic.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#ffe80a] hover:bg-[#fed100] text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm shadow-md transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Tornar a l'Inici</span>
          </Link>
        </div>
      </div>
    </section>
  );
}