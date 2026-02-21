'use client';

import {
    Tag,
    Printer,
    Layout,
    Type,
    Barcode as BarcodeIcon,
    Plus,
    History,
    Search,
    Eye,
    Save,
    Settings
} from 'lucide-react';
import { useState } from 'react';

export default function EtiquetasPage() {
    return (
        <div className="space-y-8 animate-in slide-in-from-top duration-500">
            {/* Header de Etiquetado */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-lg">
                        <Tag size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gestión de Etiquetas</h1>
                        <p className="text-slate-500 text-sm mt-1">Diseña e imprime etiquetas personalizadas para tus productos.</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-600 px-5 py-3 rounded-2xl font-bold transition-all text-sm border border-slate-200">
                        <History size={18} />
                        Historial
                    </button>
                    <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-orange-900/20 text-sm">
                        <Printer size={18} />
                        Imprimir Lote
                    </button>
                </div>
            </div>

            {/* Editor de Etiquetas (Requisito 9) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Herramientas de Diseño */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Layout size={14} />
                            Configuración de Diseño
                        </h3>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-700">Producto a Etiquetar</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Buscar en inventario..."
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ancho (mm)</label>
                                    <input type="number" defaultValue={50} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold outline-orange-500" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Alto (mm)</label>
                                    <input type="number" defaultValue={25} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold outline-orange-500" />
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-50">
                                <label className="text-sm font-bold text-slate-700">Elementos Visibles</label>
                                <ToggleItem label="Nombre del Producto" active />
                                <ToggleItem label="Código de Barras" active />
                                <ToggleItem label="Categoría" active />
                                <ToggleItem label="Precio de Venta" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-600 rounded-3xl p-8 text-white shadow-xl shadow-orange-900/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Settings size={20} className="text-orange-200" />
                            <h3 className="font-bold">Ajustes de Impresora</h3>
                        </div>
                        <p className="text-orange-100 text-xs leading-relaxed mb-4">
                            Configura tu impresora térmica para un corte preciso y alineación perfecta.
                        </p>
                        <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold uppercase tracking-wider transition-all">
                            Calibrar Impresora
                        </button>
                    </div>
                </div>

                {/* Lienzo de Vista Previa */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-slate-900 rounded-3xl p-12 flex items-center justify-center min-h-[400px] border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-6 left-6 flex items-center gap-2 text-slate-500">
                            <Eye size={16} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Vista Previa Real</span>
                        </div>

                        {/* Etiqueta Simulada */}
                        <div className="bg-white w-[380px] h-[190px] rounded shadow-2xl p-6 flex flex-col justify-between border-[0.5px] border-slate-100 animate-in zoom-in-95 duration-700">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">JR Taller de Motos</p>
                                <h3 className="text-xl font-black text-slate-900 leading-tight">Pastillas Freno Nmax Delanteras</h3>
                                <p className="text-[10px] font-bold text-orange-600 uppercase mt-1">Frenos / Repuestos Originales</p>
                            </div>

                            <div className="flex items-end justify-between self-stretch">
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-[1px]">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => (
                                            <div key={i} className="bg-black" style={{ width: i % 3 === 0 ? '1px' : i % 5 === 0 ? '3px' : '2px', height: '40px' }}></div>
                                        ))}
                                    </div>
                                    <p className="text-[8px] font-mono font-bold text-center tracking-[4px]">745998877665</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[8px] font-bold text-slate-400 uppercase">Precio Sugerido</p>
                                    <p className="text-lg font-black text-slate-900">$45,000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                                <Layout size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Plantilla: Estándar Térmica 50x25</h4>
                                <p className="text-slate-500 text-xs">Optimizada para Zebra y Epson TM-T20.</p>
                            </div>
                        </div>
                        <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-xs hover:bg-slate-800 transition-all flex items-center gap-2">
                            <Save size={16} />
                            Guardar Plantilla
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ToggleItem({ label, active = false }: any) {
    return (
        <div className="flex items-center justify-between cursor-pointer group">
            <span className={`text-xs font-bold transition-colors ${active ? 'text-slate-900' : 'text-slate-400'}`}>{label}</span>
            <div className={`w-8 h-4 rounded-full relative p-0.5 flex items-center transition-all ${active ? 'bg-orange-500' : 'bg-slate-200'}`}>
                <div className={`w-3 h-3 bg-white rounded-full transition-all ${active ? 'translate-x-4' : 'translate-x-0'}`}></div>
            </div>
        </div>
    );
}
