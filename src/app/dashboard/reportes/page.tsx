'use client';

import {
    BarChart3,
    PieChart,
    TrendingUp,
    TrendingDown,
    Calendar,
    Download,
    FileSpreadsheet,
    FileText,
    Target,
    Zap,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

export default function ReportesPage() {
    return (
        <div className="space-y-8 animate-in zoom-in duration-500">
            {/* Header de Inteligencia */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-900/20">
                        <BarChart3 size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Reportes & Análisis</h1>
                        <p className="text-slate-500 text-sm mt-1">Monitorea la salud financiera y el rendimiento técnico de tu taller.</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3">
                        <Calendar size={18} className="text-slate-400" />
                        <span className="text-sm font-bold text-slate-700">Año 2026</span>
                    </div>
                    <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-orange-900/20">
                        <Download size={18} />
                        Exportar Todo
                    </button>
                </div>
            </div>

            {/* KPIs de Rendimiento Anual (Requisito 7) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnalyticCard title="Ingresos Totales" value="$125.4M" trend="+12.5%" positive />
                <AnalyticCard title="Gastos Operativos" value="$42.1M" trend="+2.4%" positive={false} />
                <AnalyticCard title="Utilidad Neta" value="$83.3M" trend="+18.2%" positive />
                <AnalyticCard title="Ticket Promedio" value="$185,000" trend="-1.5%" positive={false} />
            </div>

            {/* Gráficos y Desgloses */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Comparativa Mensual */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <TrendingUp className="text-emerald-500" size={20} />
                            Crecimiento Mensual de Ventas
                        </h3>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">Barras</button>
                            <button className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-xs font-bold text-slate-400">Líneas</button>
                        </div>
                    </div>

                    <div className="h-72 flex items-end gap-3 px-4">
                        <ReportBar height="30%" label="Ene" />
                        <ReportBar height="45%" label="Feb" />
                        <ReportBar height="60%" label="Mar" />
                        <ReportBar height="55%" label="Abr" />
                        <ReportBar height="80%" label="May" color="orange" />
                        <ReportBar height="95%" label="Jun" color="orange" />
                        <ReportBar height="70%" label="Jul" />
                        <ReportBar height="65%" label="Ago" />
                        <ReportBar height="85%" label="Sep" />
                        <ReportBar height="90%" label="Oct" />
                        <ReportBar height="100%" label="Nov" />
                        <ReportBar height="85%" label="Dic" />
                    </div>
                </div>

                {/* Ventas por Categoría */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
                        <PieChart className="text-blue-500" size={20} />
                        Ventas por Categoría
                    </h3>
                    <div className="space-y-6">
                        <CategoryProgress label="Repuestos Originales" percent={45} color="bg-orange-500" />
                        <CategoryProgress label="Mano de Obra" percent={30} color="bg-blue-500" />
                        <CategoryProgress label="Lubricantes" percent={15} color="bg-emerald-500" />
                        <CategoryProgress label="Accesorios" percent={10} color="bg-slate-400" />
                    </div>

                    <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-2">
                            <Target className="text-orange-500" size={18} />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Meta de Ventas</span>
                        </div>
                        <p className="text-2xl font-black">$150,000,000</p>
                        <div className="w-full h-1.5 bg-white/10 rounded-full mt-4">
                            <div className="w-[83%] h-full bg-orange-600 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exportación y Reportes Específicos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ReportActionCard
                    title="Ventas por Mecánico"
                    description="Detalle de comisiones y productividad por técnico."
                    icon={<Users size={24} />}
                    type="excel"
                />
                <ReportActionCard
                    title="Inventario Valorizado"
                    description="Costo total de stock actual y activos líquidos."
                    icon={<Zap size={24} />}
                    type="pdf"
                />
                <ReportActionCard
                    title="Productos Estrella"
                    description="Top 10 repuestos con mayor rotación mensual."
                    icon={<Star size={24} />}
                    type="excel"
                />
            </div>
        </div>
    );
}

function AnalyticCard({ title, value, trend, positive }: any) {
    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
            <div className="flex items-end justify-between">
                <h3 className="text-2xl font-black text-slate-900">{value}</h3>
                <div className={`flex items-center gap-1 text-[11px] font-bold ${positive ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {trend}
                </div>
            </div>
        </div>
    );
}

function ReportBar({ height, label, color = 'slate' }: any) {
    const bgColor = color === 'orange' ? 'bg-orange-500' : 'bg-slate-100 hover:bg-slate-200';
    return (
        <div className="flex-1 flex flex-col items-center gap-2 group h-full">
            <div className="flex-1 w-full flex items-end">
                <div
                    className={`w-full ${bgColor} rounded-md transition-all duration-300 relative group-hover:shadow-lg`}
                    style={{ height }}
                >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {height}
                    </div>
                </div>
            </div>
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter truncate w-full text-center">{label}</span>
        </div>
    );
}

function CategoryProgress({ label, percent, color }: any) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
                <span className="text-slate-600">{label}</span>
                <span className="text-slate-900">{percent}%</span>
            </div>
            <div className="w-full h-1 bg-slate-50 rounded-full">
                <div className={`h-full ${color} rounded-full`} style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    );
}

function ReportActionCard({ title, description, icon, type }: any) {
    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:border-orange-200 transition-all cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-orange-50 group-hover:text-orange-600 transition-all">
                    {icon}
                </div>
                {type === 'excel' ? (
                    <FileSpreadsheet className="text-emerald-500" size={20} />
                ) : (
                    <FileText className="text-rose-500" size={20} />
                )}
            </div>
            <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors uppercase text-xs tracking-widest">{title}</h4>
            <p className="text-slate-500 text-[11px] mt-2 font-medium leading-relaxed">{description}</p>
        </div>
    );
}

function Users({ size, className }: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    );
}

function Star({ size, className }: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    );
}
