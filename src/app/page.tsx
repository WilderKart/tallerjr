import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
    return (
        <main className="min-h-screen bg-white overflow-hidden relative font-sans selection:bg-orange-100 selection:text-orange-900">
            <Header />

            {/* Fondo Decorativo Minimalista y Premium */}
            <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-b from-slate-50 to-blue-50/50 -z-10 rounded-l-[120px] lg:rounded-l-[200px] transform translate-x-12 opacity-80"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col lg:flex-row items-center pt-24 pb-12 lg:pt-0 lg:pb-0 gap-16 lg:gap-8">

                {/* Columna Izquierda: Contenido en Español */}
                <div className="w-full lg:w-[50%] space-y-10 lg:space-y-12 animate-in fade-in slide-in-from-left duration-1000">
                    <div className="space-y-4 lg:space-y-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-1 w-12 bg-orange-600 rounded-full"></span>
                            <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                                JR Taller de Motos
                            </span>
                        </div>

                        <h1 className="text-7xl lg:text-[120px] font-black text-[#2d3663] tracking-tighter leading-[0.85] mb-2 uppercase">
                            Hola
                        </h1>
                        <h2 className="text-5xl lg:text-7xl font-black text-orange-600 tracking-tight leading-tight uppercase">
                            Jhonatan
                        </h2>

                        <div className="max-w-md pt-6">
                            <p className="text-slate-500 text-lg lg:text-xl font-medium leading-relaxed">
                                Ante todo, bienvenido a tu
                                <span className="text-slate-900 font-bold"> "Smart Dashboard"</span>. <br />
                                Eficiencia y potencia combinadas para tu taller de motos.
                            </p>
                            <p className="text-slate-400 text-sm mt-6 font-medium italic">
                                Espero que estés feliz con mi trabajo. ¡Construyamos algo grande!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Link
                            href="/login"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#2d3663] hover:bg-[#1a2040] text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/20 transform hover:-translate-y-1 active:scale-95 transition-all duration-300 group"
                        >
                            Iniciar Sesi&oacute;n
                            <svg
                                className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <div className="hidden sm:flex items-center gap-3 px-6 py-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                                        <Image
                                            src={`https://i.pravatar.cc/100?u=${i}`}
                                            alt="Usuario"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">+2.5k Usuarios</span>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Imagen del Mecánico Integrada con Marco Natural */}
                <div className="w-full lg:w-[50%] relative flex justify-center items-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-200">
                    <div className="relative w-full aspect-square max-w-[550px] lg:max-w-none group">
                        {/* Círculo decorativo de fondo */}
                        <div className="absolute inset-4 bg-gradient-to-br from-orange-100/40 to-blue-100/20 rounded-full scale-90 group-hover:scale-100 transition-transform duration-700"></div>

                        {/* Contenedor de la Imagen con Marco Suavizado */}
                        <div className="relative w-full h-full p-4 lg:p-8 transform hover:scale-[1.02] transition-transform duration-500 ease-out">
                            <div className="relative w-full h-full rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl border-white border-4 lg:border-8 bg-white">
                                <Image
                                    src="/hero/mecanico_hero.png"
                                    alt="Mecánico JR Taller"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Elementos Flotantes Abstractos */}
                        <div className="absolute top-0 -right-4 w-12 h-12 bg-orange-500 rounded-2xl rotate-12 animate-bounce duration-[3000ms] shadow-lg shadow-orange-500/20 z-10"></div>
                        <div className="absolute bottom-10 -left-6 w-8 h-8 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/20 z-10"></div>
                    </div>
                </div>
            </div>

            {/* Pie de página decorativo */}
            <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-6 opacity-30">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Plataforma SaaS Premium</span>
                <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                </div>
            </div>
        </main>
    );
}
