'use client';

import {
    Bell,
    AlertTriangle,
    AlertCircle,
    Zap,
    Check,
    Trash2,
    Filter,
    Mail,
    Smartphone,
    Clock,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';
import { useState } from 'react';

export default function AlertasPage() {
    return (
        <div className="space-y-8 animate-in slide-in-from-left duration-500">
            {/* Header de Alertas */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-orange-600 text-white rounded-2xl shadow-lg shadow-orange-900/20">
                        <Bell size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Centro de Alertas</h1>
                        <p className="text-slate-500 text-sm mt-1">Notificaciones críticas del sistema sobre stock, pagos y rotación.</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="bg-slate-50 hover:bg-slate-100 text-slate-600 px-5 py-3 rounded-2xl font-bold transition-all text-xs border border-slate-200">
                        Marcar todo como leído
                    </button>
                    <button className="bg-slate-900 text-white px-5 py-3 rounded-2xl font-bold transition-all text-xs shadow-lg">
                        Ajustes de Alerta
                    </button>
                </div>
            </div>

            {/* Configuración de Notificaciones (Requisito 6) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Canales Activos */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Canales de Alerta</h3>
                        <div className="space-y-4">
                            <ChannelToggle icon={<Mail size={18} />} label="Correo Electrónico" active />
                            <ChannelToggle icon={<Smartphone size={18} />} label="App Móvil / Push" active />
                            <ChannelToggle icon={<Zap size={18} />} label="Alertas Dashboard" active />
                        </div>

                        <div className="h-px bg-slate-50 my-8"></div>

                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Filtrar por Tipo</h3>
                        <div className="space-y-2">
                            <TypeFilter label="Stock Bajo" count={12} color="red" active />
                            <TypeFilter label="Pagos Pendientes" count={3} color="orange" />
                            <TypeFilter label="Baja Rotación" count={34} color="blue" />
                        </div>
                    </div>
                </div>

                {/* Listado de Notificaciones */}
                <div className="lg:col-span-3 space-y-4">
                    <NotificationItem
                        title="Stock Crítico: Aceite Motul 7100"
                        message="Quedan solo 2 unidades. El stock mínimo sugerido es de 10."
                        time="Hace 15 min"
                        type="critical"
                    />
                    <NotificationItem
                        title="Pago de Comisión Pendiente: Luis Herrera"
                        message="El corte de pago semanal vence hoy a las 6:00 PM."
                        time="Hace 2 horas"
                        type="warning"
                    />
                    <NotificationItem
                        title="Producto de Baja Rotación Detectado"
                        message="Las Llantas Pirelli Angel City no han tenido ventas en 30 días."
                        time="Ayer, 4:30 PM"
                        type="info"
                    />
                    <NotificationItem
                        title="Factura #F-00103 Generada"
                        message="Se ha procesado una nueva venta por $250,000 COP."
                        time="Ayer, 2:15 PM"
                        type="success"
                    />

                    <button className="w-full py-4 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-600 transition-colors">
                        Cargar notificaciones anteriores
                    </button>
                </div>
            </div>
        </div>
    );
}

function ChannelToggle({ icon, label, active = false }: any) {
    return (
        <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${active ? 'bg-orange-50 text-orange-600' : 'bg-slate-50 text-slate-400'}`}>
                    {icon}
                </div>
                <span className={`text-xs font-bold ${active ? 'text-slate-900' : 'text-slate-400'}`}>{label}</span>
            </div>
            <div className={`w-8 h-4 rounded-full relative p-0.5 flex items-center transition-all ${active ? 'bg-orange-500' : 'bg-slate-200'}`}>
                <div className={`w-3 h-3 bg-white rounded-full transition-all ${active ? 'translate-x-4' : 'translate-x-0'}`}></div>
            </div>
        </div>
    );
}

function TypeFilter({ label, count, color, active = false }: any) {
    const colorClasses: any = {
        red: 'bg-red-500',
        orange: 'bg-orange-500',
        blue: 'bg-blue-500',
    };

    return (
        <div className={`flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${active ? 'bg-slate-50' : 'hover:bg-slate-50/50'}`}>
            <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${colorClasses[color]}`}></div>
                <span className="text-xs font-bold text-slate-700">{label}</span>
            </div>
            <span className="text-[10px] font-black text-slate-400">{count}</span>
        </div>
    );
}

function NotificationItem({ title, message, time, type }: any) {
    const config: any = {
        critical: { icon: <AlertCircle className="text-red-500" />, bg: 'bg-red-50 border-red-100', accent: 'bg-red-500' },
        warning: { icon: <AlertTriangle className="text-orange-500" />, bg: 'bg-orange-50 border-orange-100', accent: 'bg-orange-500' },
        info: { icon: <Bell className="text-blue-500" />, bg: 'bg-blue-50 border-blue-100', accent: 'bg-blue-500' },
        success: { icon: <Check className="text-emerald-500" />, bg: 'bg-emerald-50 border-emerald-100', accent: 'bg-emerald-500' },
    };

    const style = config[type];

    return (
        <div className={`flex items-start gap-5 p-6 rounded-3xl border transition-all hover:shadow-md cursor-pointer group ${style.bg}`}>
            <div className="p-3 bg-white rounded-2xl shadow-sm">
                {style.icon}
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-black text-slate-900 group-hover:text-orange-950">{title}</h4>
                    <div className="flex items-center gap-2">
                        <Clock size={12} className="text-slate-400" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{time}</span>
                    </div>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{message}</p>
            </div>
            <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                <Trash2 size={16} />
            </button>
        </div>
    );
}
