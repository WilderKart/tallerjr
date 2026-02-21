'use client';

import {
    DollarSign,
    Users,
    Calendar,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Clock,
    Wrench,
    Filter,
    Download
} from 'lucide-react';
import { useState } from 'react';

export default function ComisionesPage() {
    const [mechanics, setMechanics] = useState([
        { id: 1, name: 'Luis Herrera', role: 'Mecánico Líder', pending: '$450,000', paid: '$1,200,000', services: 12 },
        { id: 2, name: 'Pedro Ruiz', role: 'Técnico Especialista', pending: '$180,000', paid: '$950,000', services: 8 },
        { id: 3, name: 'Andrés Castro', role: 'Asistente', pending: '$65,000', paid: '$400,000', services: 5 },
    ]);

    return (
        <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
            {/* Header Operativo */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-900/20">
                        <TrendingUp size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Comisiones & Productividad</h1>
                        <p className="text-slate-500 text-sm mt-1">Cálculo automático de pagos por servicios realizados por técnico.</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl font-bold transition-all text-sm">
                        <Download size={18} />
                        Exportar Corte
                    </button>
                    <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-orange-900/20 text-sm">
                        <Calendar size={18} />
                        Corte de Pagos
                    </button>
                </div>
            </div>

            {/* KPIs de Comisiones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ComisionStat title="Total Pendiente" value="$695,000" icon={<DollarSign size={24} />} color="orange" />
                <ComisionStat title="Cortes Realizados (Mes)" value="14" icon={<CheckCircle2 size={24} />} color="emerald" />
                <ComisionStat title="Porcentaje Promedio" value="30%" icon={<Users size={24} />} color="blue" />
            </div>

            {/* Directorio de Mecánicos (Requisito 5) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Listado de Personal */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Users className="text-orange-600" size={24} />
                            Fuerza Técnica
                        </h2>
                        <div className="flex gap-2">
                            <button className="p-2 bg-slate-50 rounded-lg text-slate-400"><Filter size={16} /></button>
                        </div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {mechanics.map((mech) => (
                            <MechanicItem key={mech.id} mech={mech} />
                        ))}
                    </div>
                </div>

                {/* Detalle de Últimos Trabajos */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-lg font-bold mb-6 flex items-center justify-between">
                        Últimos Servicios
                        <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full uppercase tracking-widest text-slate-400">Hoy</span>
                    </h2>

                    <div className="space-y-6">
                        <RecentService
                            mechanic="Luis Herrera"
                            service="Sincronización KTM 390"
                            comision="$36,000"
                            time="Hace 15 min"
                        />
                        <RecentService
                            mechanic="Pedro Ruiz"
                            service="Cambio de Kit Pulsar"
                            comision="$15,000"
                            time="Hace 45 min"
                        />
                        <RecentService
                            mechanic="Luis Herrera"
                            service="Frenos Nmax"
                            comision="$12,000"
                            time="Hace 1 h"
                        />
                    </div>

                    <button className="w-full mt-8 py-4 border border-white/10 hover:bg-white/5 rounded-2xl font-bold transition-all text-sm flex items-center justify-center gap-2">
                        Ver Historial Completo
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function ComisionStat({ title, value, icon, color }: any) {
    const colors: any = {
        orange: 'bg-orange-50 text-orange-600 border-orange-100',
        emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        blue: 'bg-blue-50 text-blue-600 border-blue-100',
    };

    return (
        <div className={`bg-white rounded-3xl p-6 border shadow-sm ${colors[color]}`}>
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                    {icon}
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest opacity-60">{title}</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900">{value}</h3>
        </div>
    );
}

function MechanicItem({ mech }: any) {
    return (
        <div className="p-8 flex items-center justify-between group hover:bg-slate-50 transition-all cursor-pointer">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-slate-900/20">
                    {mech.name.split(' ').map((n: any) => n[0]).join('')}
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors">{mech.name}</h4>
                    <p className="text-slate-500 text-xs font-medium">{mech.role} • <span className="text-orange-600 font-bold">{mech.services} servicios</span></p>
                </div>
            </div>

            <div className="flex items-center gap-12">
                <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pagado</p>
                    <p className="text-slate-900 font-bold">{mech.paid}</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Por Pagar</p>
                    <p className="text-orange-600 font-black text-lg">{mech.pending}</p>
                </div>
                <div className="p-3 bg-slate-100 rounded-xl text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                </div>
            </div>
        </div>
    );
}

function RecentService({ mechanic, service, comision, time }: any) {
    return (
        <div className="flex gap-4">
            <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></div>
                <div className="w-px h-12 bg-white/10 mx-auto mt-2"></div>
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h5 className="text-sm font-bold text-slate-200">{mechanic}</h5>
                    <span className="text-emerald-400 font-black text-sm">{comision}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{service}</p>
                <div className="flex items-center gap-2 mt-2">
                    <Clock size={10} className="text-slate-600" />
                    <span className="text-[10px] text-slate-600 uppercase font-bold">{time}</span>
                </div>
            </div>
        </div>
    );
}
