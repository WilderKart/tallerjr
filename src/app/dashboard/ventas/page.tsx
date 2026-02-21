'use client';

import {
    ShoppingCart,
    User,
    Search,
    Plus,
    Trash2,
    FileText,
    CreditCard,
    Banknote,
    Wrench,
    Barcode,
    ChevronDown,
    Printer,
    Package
} from 'lucide-react';
import { useState } from 'react';

export default function VentasProPage() {
    const [cart, setCart] = useState([
        { id: 1, name: 'Sincronización General', type: 'Servicio', qty: 1, price: '$120,000', total: '$120,000' },
        { id: 2, name: 'Aceite Motul 7100', type: 'Producto', qty: 2, price: '$65,000', total: '$130,000' },
    ]);

    return (
        <div className="flex flex-col xl:flex-row gap-8 animate-in fade-in duration-700">
            {/* Sección de Selección de Items (Izquierda) */}
            <div className="flex-1 space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                            <ShoppingCart className="text-orange-600" size={28} />
                            Punto de Venta (POS)
                        </h1>
                        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-xs font-bold text-slate-500">
                            No. Factura: <span className="text-slate-900 font-extrabold text-sm">#F-00104</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Buscar repuesto o servicio..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-orange-500 transition-all font-medium"
                            />
                        </div>
                        <div className="relative">
                            <Barcode className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
                            <input
                                type="text"
                                placeholder="Escanear producto..."
                                className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-all font-mono tracking-widest text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Grid de Categorías Rápidas */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <CategoryButton icon={<Wrench size={18} />} label="Servicios" active />
                    <CategoryButton icon={<Package size={18} />} label="Repuestos" />
                    <CategoryButton icon={<Users size={18} />} label="Lubricantes" />
                    <CategoryButton icon={<Plus size={18} />} label="Otros" />
                </div>

                {/* Tabla de Items de Venta */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-50 font-bold text-slate-900 uppercase text-xs tracking-widest">
                        Detalle de la Venta
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Tipo</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Descripción</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Cant.</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Unitario</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Total</th>
                                    <th className="px-8 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {cart.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50/20 transition-colors">
                                        <td className="px-8 py-5 text-center">
                                            {item.type === 'Servicio' ?
                                                <Wrench size={16} className="text-blue-500 mx-auto" /> :
                                                <Package size={16} className="text-orange-500 mx-auto" />
                                            }
                                        </td>
                                        <td className="px-8 py-5">
                                            <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                                        </td>
                                        <td className="px-8 py-5 text-center">
                                            <span className="font-extrabold text-slate-900 border border-slate-200 px-3 py-1 rounded-lg bg-slate-50">{item.qty}</span>
                                        </td>
                                        <td className="px-8 py-5 text-right font-bold text-slate-600 font-mono text-xs">{item.price}</td>
                                        <td className="px-8 py-5 text-right font-extrabold text-slate-900 font-mono">{item.total}</td>
                                        <td className="px-8 py-5 text-right">
                                            <button className="text-slate-100 hover:text-red-500 transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Panel de Checkout (Derecha) */}
            <div className="w-full xl:w-96 space-y-6">
                {/* Selección de Cliente / Mecánico */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <User className="text-orange-500" size={20} />
                        Asignación
                    </h3>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Cliente</label>
                            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3 cursor-pointer hover:bg-white/10 transition-all">
                                <span className="text-sm font-medium">Carlos Mario G.</span>
                                <ChevronDown size={14} className="text-slate-600" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mecánico (Comisión)</label>
                            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3 cursor-pointer hover:bg-white/10 transition-all">
                                <span className="text-sm font-medium">Luis Herrera</span>
                                <ChevronDown size={14} className="text-slate-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Totales y Facturación */}
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                            <span>Subtotal</span>
                            <span className="font-mono">$250,000</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                            <span>Impuestos (0%)</span>
                            <span className="font-mono">$0</span>
                        </div>
                        <div className="h-px bg-slate-100 my-4"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-900 font-extrabold text-lg">Total a Pagar</span>
                            <span className="text-3xl font-black text-orange-600 font-mono tracking-tighter">$250,000</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 border-slate-100 hover:border-orange-500 hover:bg-orange-50 transition-all group">
                            <Banknote size={24} className="text-slate-400 group-hover:text-orange-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-orange-950">Efectivo</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 border-orange-500 bg-orange-50 transition-all group">
                            <CreditCard size={24} className="text-orange-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-950">Tarjeta / Transf</span>
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-sm active:scale-95 transform">
                            <Printer size={18} />
                            Ticket
                        </button>
                        <button className="flex-[2] py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-lg shadow-lg shadow-orange-900/20 active:scale-95 transform">
                            <FileText size={20} />
                            Facturar Venta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CategoryButton({ icon, label, active = false }: any) {
    return (
        <button className={`flex flex-col items-center justify-center gap-2 p-4 rounded-3xl transition-all border shadow-sm ${active
            ? 'bg-orange-600 border-orange-500 text-white shadow-orange-900/20'
            : 'bg-white border-slate-100 text-slate-400 hover:bg-slate-50 hover:text-slate-900'
            }`}>
            {icon}
            <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
        </button>
    );
}

function Users({ size, className }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
