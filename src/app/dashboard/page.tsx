'use client';

import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';
import {
    DollarSign,
    Package,
    Users,
    TrendingUp,
    AlertTriangle,
    ShoppingCart,
    ArrowDownLeft,
    Plus,
    Activity,
    Calendar,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header con Bienvenida */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        ¡Hola, <span className="text-orange-600">Jhonatan</span>! 👋
                    </h1>
                    <p className="text-slate-500 mt-2 font-medium">
                        Aquí tienes el resumen operativo de <span className="text-slate-900">JR Taller de Motos</span> para hoy.
                    </p>
                </div>

                {/* Botones Grandes "One-Click" */}
                <div className="flex flex-wrap gap-3">
                    <Link href="/dashboard/ventas" className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold transition-all transform active:scale-95 shadow-xl shadow-orange-900/20 group">
                        <ShoppingCart size={24} className="group-hover:rotate-12 transition-transform" />
                        <span className="text-lg">Nueva Venta</span>
                    </Link>
                    <Link href="/dashboard/entradas" className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all transform active:scale-95 shadow-xl shadow-slate-900/20 group">
                        <ArrowDownLeft size={24} className="group-hover:-translate-y-1 transition-transform" />
                        <span className="text-lg">Entrada Stock</span>
                    </Link>
                </div>
            </div>

            {/* KPI Grid Dinámico (Verde/Rojo/Azul) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICardV2
                    title="Ganancias Mes"
                    value="$18,450"
                    icon={<DollarSign size={24} />}
                    trend="+15%"
                    color="green"
                    description="Flujo de caja positivo"
                    href="/dashboard/reportes"
                />
                <KPICardV2
                    title="Alertas Activas"
                    value="12"
                    icon={<AlertTriangle size={24} />}
                    trend="Crítico"
                    color="red"
                    description="Stock bajo y pagos"
                    href="/dashboard/alertas"
                />
                <KPICardV2
                    title="Servicios Activos"
                    value="8"
                    icon={<Activity size={24} />}
                    trend="En Taller"
                    color="blue"
                    description="Motos en proceso"
                    href="/dashboard/comisiones"
                />
                <KPICardV2
                    title="Clientes Nuevos"
                    value="24"
                    icon={<Users size={24} />}
                    trend="+8 hoy"
                    color="blue"
                    description="Crecimiento semanal"
                    href="/dashboard/clientes"
                />
            </div>

            {/* Fila de Gráficos y Tablas Mixtas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Gráfico / Estado Operativo (Visualización Mixta) */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <span className="w-2 h-7 bg-orange-600 rounded-full"></span>
                                Análisis de Ventas Mensuales
                            </h2>
                            <p className="text-slate-400 text-sm mt-1">Comparativa de ingresos por categoría</p>
                        </div>
                        <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-500 outline-none">
                            <option>Últimos 30 días</option>
                            <option>Últimos 6 meses</option>
                        </select>
                    </div>

                    {/* Placeholder para Gráfico de Barras */}
                    <div className="h-64 flex items-end gap-4 px-4">
                        <Bar height="40%" label="Sem 1" />
                        <Bar height="65%" label="Sem 2" />
                        <Bar height="85%" label="Sem 3" color="orange" />
                        <Bar height="50%" label="Sem 4" />
                        <Bar height="95%" label="Sem 5" />
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-slate-50">
                        <div className="text-center">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Repuestos</p>
                            <p className="text-lg font-bold text-slate-900 mt-1">65%</p>
                        </div>
                        <div className="text-center border-x border-slate-100">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mano de Obra</p>
                            <p className="text-lg font-bold text-slate-900 mt-1">28%</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Otros</p>
                            <p className="text-lg font-bold text-slate-900 mt-1">7%</p>
                        </div>
                    </div>
                </div>

                {/* Lista de Alertas / Próximos Pagos */}
                <div className="bg-slate-900 rounded-3xl shadow-xl p-8 text-white">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold">Alertas Prioritarias</h2>
                        <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                            Urgente
                        </span>
                    </div>

                    <div className="space-y-4">
                        <AlertItem
                            title="Stock Crítico: Aceite Motul"
                            time="Hace 2 horas"
                            type="stock"
                        />
                        <AlertItem
                            title="Pago Mecánico: Pedro R."
                            time="Vence hoy"
                            type="payment"
                        />
                        <AlertItem
                            title="Baja Rotación: Llantas 17'"
                            time="Análisis Semanal"
                            type="info"
                        />
                    </div>

                    <Link href="/dashboard/alertas" className="w-full mt-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-2xl font-bold transition-all text-sm flex items-center justify-center gap-2 group">
                        Ver Centro de Notificaciones
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Tabla de Inventario Rápida (Requisito 2 & Extras) */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-7 bg-orange-600 rounded-full"></span>
                        Estado del Inventario Crítico
                    </h2>
                    <Link href="/dashboard/inventario" className="text-orange-600 font-bold hover:underline text-sm flex items-center gap-1 group">
                        Ir al Inventario Pro
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Producto</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ubicación</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Stock</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mínimo</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <DashboardInventoryRow name="Bujía Iridium" location="Pasillo A-2" stock={2} min={10} />
                            <DashboardInventoryRow name="Kit Arrastre NS200" location="Bodega 1" stock={0} min={5} />
                            <DashboardInventoryRow name="Filtro Aire Nmax" location="Estante 4" stock={4} min={15} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function KPICardV2({ title, value, icon, trend, color, description, href }: any) {
    const config: any = {
        green: { bg: 'bg-emerald-50', icon: 'text-emerald-600', trend: 'text-emerald-600', ring: 'ring-emerald-500/20' },
        red: { bg: 'bg-rose-50', icon: 'text-rose-600', trend: 'text-rose-600', ring: 'ring-rose-500/20' },
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', trend: 'text-blue-600', ring: 'ring-blue-500/20' },
    };

    const style = config[color];

    const Content = (
        <div className={`bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group h-full cursor-pointer`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${style.bg} ${style.icon} transition-transform group-hover:scale-110`}>
                    {icon}
                </div>
                <div className={`px-2.5 py-1 rounded-full ${style.bg} ${style.trend} text-[10px] font-bold uppercase tracking-widest`}>
                    {trend}
                </div>
            </div>
            <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{title}</p>
                <h3 className="text-3xl font-extrabold text-slate-900 mt-1">{value}</h3>
                <p className="text-slate-500 text-[11px] mt-2 font-medium">{description}</p>
            </div>
        </div>
    );

    if (href) {
        return <Link href={href}>{Content}</Link>;
    }

    return Content;
}

function Bar({ height, label, color = 'slate' }: any) {
    const colorClass = color === 'orange' ? 'bg-orange-500' : 'bg-slate-200 hover:bg-slate-300';
    return (
        <div className="flex-1 flex flex-col items-center gap-3 h-full">
            <div className="flex-1 w-full flex items-end">
                <div
                    className={`w-full ${colorClass} rounded-t-lg transition-all duration-500 cursor-pointer`}
                    style={{ height }}
                ></div>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase truncate w-full text-center">{label}</span>
        </div>
    );
}

function AlertItem({ title, time, type }: any) {
    return (
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
            <div className={`w-2 h-2 rounded-full ${type === 'stock' ? 'bg-red-500' : type === 'payment' ? 'bg-orange-500' : 'bg-blue-500 animate-pulse'}`}></div>
            <div className="flex-1">
                <p className="text-sm font-bold text-slate-100 group-hover:text-orange-400 transition-colors">{title}</p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">{time}</p>
            </div>
            <ChevronRight size={14} className="text-slate-600 group-hover:translate-x-1 transition-transform" />
        </div>
    );
}

function DashboardInventoryRow({ name, location, stock, min }: any) {
    const isOut = stock === 0;
    const isLow = stock > 0 && stock <= min;

    return (
        <tr className="hover:bg-slate-50/50 transition-colors pointer-cursor">
            <td className="px-8 py-5">
                <p className="font-bold text-slate-900 text-sm">{name}</p>
            </td>
            <td className="px-8 py-5">
                <p className="text-slate-500 text-xs font-medium">{location}</p>
            </td>
            <td className="px-8 py-5">
                <p className={`font-extrabold text-sm ${isOut ? 'text-red-600' : isLow ? 'text-orange-600' : 'text-slate-900'}`}>{stock}</p>
            </td>
            <td className="px-8 py-5 text-slate-400 font-bold text-xs">{min}</td>
            <td className="px-8 py-5">
                <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${isOut ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                    {isOut ? 'Agotado' : 'Reordenar'}
                </span>
            </td>
        </tr>
    );
}
