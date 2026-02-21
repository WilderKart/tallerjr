'use client';

import {
    Barcode,
    ArrowDownCircle,
    Plus,
    Trash2,
    Save,
    Package,
    List,
    Calculator,
    Zap
} from 'lucide-react';
import { useState } from 'react';

export default function EntradasPage() {
    const [scannedItems, setScannedItems] = useState([
        { id: 1, name: 'Aceite Motul 7100 10W40', barcode: '745123568901', qty: 12, cost: '$45,000', total: '$540,000' },
        { id: 2, name: 'Filtro Aire Nmax', barcode: '745998877665', qty: 5, cost: '$25,000', total: '$125,000' },
    ]);

    return (
        <div className="space-y-8 animate-in slide-in-from-right duration-500">
            {/* Header / Configuración de Entrada */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-orange-600 text-white rounded-2xl shadow-lg shadow-orange-900/20">
                        <ArrowDownCircle size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Registro de Entradas</h1>
                        <p className="text-slate-500 text-sm mt-1">Ingresa mercancía al stock mediante lectura de códigos.</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Proveedor</p>
                            <p className="text-sm font-bold text-slate-900">MotoRepuestos Bogotá</p>
                        </div>
                        <ChevronRight size={16} className="text-slate-300" />
                    </div>
                </div>
            </div>

            {/* Panel de Escaneo (Requisito 3) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Lector / Buscador */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl group-hover:bg-orange-600/30 transition-all duration-500"></div>

                        <div className="relative z-10">
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Zap className="text-orange-500 animate-pulse" size={20} />
                                Lectura Rápida
                            </h2>

                            <div className="space-y-4">
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Asegúrate de que el cursor esté aquí antes de usar el lector de barras.
                                </p>
                                <div className="relative">
                                    <Barcode className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={24} />
                                    <input
                                        type="text"
                                        placeholder="Código de barras..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-all text-xl font-mono tracking-widest"
                                        autoFocus
                                    />
                                </div>
                                <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 rounded-2xl font-bold transition-all shadow-lg shadow-orange-900/40 flex items-center justify-center gap-2">
                                    <Plus size={20} />
                                    Añadir Manualmente
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Resumen de Recepción */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase text-xs tracking-widest">
                            <Calculator className="text-slate-400" size={16} />
                            Resumen de Carga
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                <span className="text-slate-500 text-sm">Items Diferentes</span>
                                <span className="font-bold text-slate-900">{scannedItems.length}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                <span className="text-slate-500 text-sm">Cant. Total Unidades</span>
                                <span className="font-bold text-slate-900">17</span>
                            </div>
                            <div className="flex justify-between items-center py-4">
                                <span className="text-slate-800 font-bold">Inversión Total</span>
                                <span className="text-2xl font-extrabold text-slate-900">$665,000</span>
                            </div>
                        </div>
                        <button className="w-full mt-4 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                            <Save size={20} />
                            Procesar Entrada
                        </button>
                    </div>
                </div>

                {/* Lista Temporal de Recepción */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <List className="text-orange-600" size={24} />
                            Mercancía Escaneada
                        </h2>
                        <button className="text-red-500 text-xs font-bold hover:underline">Limpiar Lista</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Producto</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Cant.</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Costo Unit.</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Subtotal</th>
                                    <th className="px-8 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {scannedItems.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-5">
                                            <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{item.barcode}</p>
                                        </td>
                                        <td className="px-8 py-5 text-center">
                                            <div className="flex items-center justify-center gap-3">
                                                <button className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-colors">-</button>
                                                <span className="font-extrabold text-slate-900 w-8">{item.qty}</span>
                                                <button className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-colors">+</button>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-right font-bold text-slate-800">{item.cost}</td>
                                        <td className="px-8 py-5 text-right font-extrabold text-orange-600">{item.total}</td>
                                        <td className="px-8 py-5 text-right">
                                            <button className="p-2 text-slate-100 hover:text-red-500 transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {scannedItems.length === 0 && (
                        <div className="p-20 flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 mb-4">
                                <Barcode size={40} />
                            </div>
                            <p className="text-slate-400 font-medium">No hay productos escaneados todavía.</p>
                            <p className="text-slate-300 text-sm mt-1">Usa el lector de barras para comenzar la recepción.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function ChevronRight({ size, className }: any) {
    return <ArrowUpRight className={className} size={size} />;
}

// Icono placeholder para el header
function ArrowUpRight({ className, size }: any) {
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
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}
