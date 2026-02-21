'use client';

import { Users, Search, UserPlus, Mail, Phone, ExternalLink, Calendar, MapPin } from 'lucide-react';

export default function ClientesPage() {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Directorio de Clientes</h1>
                    <p className="text-slate-500 mt-2">Gestión de datos de contacto y fidelización de motociclistas.</p>
                </div>
                <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg shadow-orange-900/20 flex items-center gap-2">
                    <UserPlus size={20} />
                    Nuevo Cliente
                </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar por nombre, placa de moto, cédula o teléfono..."
                        className="bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 transition-all w-full shadow-sm"
                    />
                </div>
                <div className="flex gap-2">
                    <select className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-orange-500 shadow-sm">
                        <option>Todos los niveles</option>
                        <option>Frecuente</option>
                        <option>Nuevo</option>
                        <option>Inactivo</option>
                    </select>
                </div>
            </div>

            {/* Customers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <CustomerCard
                    name="Juan Sebastián Rivas"
                    phone="+57 321 456 7890"
                    email="juan.rivas@email.com"
                    moto="KTM Duke 390 (ABC-12D)"
                    lastService="15 Feb 2026"
                    tag="Frecuente"
                />
                <CustomerCard
                    name="Valentina Moreno"
                    phone="+57 300 987 6543"
                    email="v.moreno@email.com"
                    moto="Yamaha Nmax 155 (XYZ-98F)"
                    lastService="Hoy"
                    tag="Nuevo"
                />
                <CustomerCard
                    name="Ricardo Méndez"
                    phone="+57 315 222 3344"
                    email="rmendez@email.com"
                    moto="Suzuki V-Strom 650 (GHJ-45G)"
                    lastService="10 Ene 2026"
                    tag="Inactivo"
                />
                <CustomerCard
                    name="Laura Sofía Correa"
                    phone="+57 310 555 6677"
                    email="laura.c@email.com"
                    moto="Honda CB190R (KLM-32A)"
                    lastService="22 Feb 2026"
                    tag="Frecuente"
                />
            </div>
        </div>
    );
}

function CustomerCard({ name, phone, email, moto, lastService, tag }: any) {
    const tagColors: any = {
        Frecuente: 'bg-emerald-100 text-emerald-700',
        Nuevo: 'bg-blue-100 text-blue-700',
        Inactivo: 'bg-slate-100 text-slate-600',
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                    {name.split(' ').map((n: any) => n[0]).join('')}
                </div>
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${tagColors[tag]}`}>
                    {tag}
                </span>
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors">{name}</h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                        <MapPin size={14} className="text-orange-500" />
                        Bogotá, Colombia
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pb-4 border-b border-slate-50">
                    <div className="flex items-center gap-2 text-slate-600">
                        <Phone size={14} className="text-slate-400" />
                        <span className="text-xs font-medium">{phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                        <Mail size={14} className="text-slate-400" />
                        <span className="text-xs font-medium truncate">{email}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Motocicleta</p>
                        <p className="text-sm font-bold text-slate-800 mt-1">{moto}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Último Servicio</p>
                        <p className="text-sm font-bold text-slate-800 mt-1 text-right">{lastService}</p>
                    </div>
                </div>

                <div className="pt-2 flex gap-2">
                    <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2">
                        <ExternalLink size={14} /> Historial
                    </button>
                    <button className="flex-1 bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2">
                        <Calendar size={14} /> Agendar
                    </button>
                </div>
            </div>
        </div>
    );
}
