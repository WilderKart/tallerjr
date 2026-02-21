'use client';

import {
    Package,
    Search,
    Filter,
    Plus,
    Barcode,
    History,
    AlertCircle,
    MoreVertical,
    ArrowUpDown,
    MapPin,
    Tag
} from 'lucide-react';
import { useState } from 'react';

export default function InventarioProPage() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                        <Package className="text-orange-600" size={28} />
                        Inventario Maestro
                    </h1>
                    <p className="text-slate-500 text-sm mt-1 font-medium">Gestión total de repuestos, lubricantes y accesorios.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl font-bold transition-all text-sm group">
                        <History size={18} className="group-hover:rotate-12 transition-transform" />
                        Histórico
                    </button>
                    <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg shadow-orange-900/10 text-sm">
                        <Plus size={20} />
                        Nuevo Producto
                    </button>
                </div>
            </div>

            {/* Búsqueda y Filtros Rápidos (Requisito 2) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2 relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400">
                        <Search size={20} />
                        <span className="w-px h-4 bg-slate-200 ml-1"></span>
                    </div>
                    <input
                        type="text"
                        placeholder="Busca por referencia, nombre o escanea código de barras..."
                        className="w-full bg-white border border-slate-200 rounded-2xl pl-16 pr-4 py-4 text-sm focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                        <Barcode size={20} />
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex-1 relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <select className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-4 text-xs font-bold text-slate-600 appearance-none focus:outline-none cursor-pointer">
                            <option>Todas las Categorías</option>
                            <option>Lubricantes</option>
                            <option>Frenos</option>
                            <option>Motor</option>
                            <option>Llantas</option>
                        </select>
                    </div>
                    <div className="flex-1 relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <select className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-4 text-xs font-bold text-slate-600 appearance-none focus:outline-none cursor-pointer">
                            <option>Ubicación: Todas</option>
                            <option>Bodega Principal</option>
                            <option>Mostrador</option>
                            <option>Estante A-4</option>
                        </select>
                    </div>
                </div>

                <div className="relative">
                    <AlertCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <select className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-4 text-xs font-bold text-slate-600 appearance-none focus:outline-none cursor-pointer">
                        <option>Stock: Todos</option>
                        <option className="text-red-500 font-bold">Bajo Stock Mínimo</option>
                        <option className="text-orange-500 font-bold">Stock por Agotar</option>
                    </select>
                </div>
            </div>

            {/* Listado Principal de Inventario */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-slate-600 transition-colors">
                                        Producto & Barcode <ArrowUpDown size={12} />
                                    </div>
                                </th>
                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Categoría</th>
                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ubicación</th>
                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Precio Venta</th>
                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Stock Real</th>
                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Estado</th>
                                <th className="px-8 py-5"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <InventoryRow
                                name="Aceite Motul 7100 4T 10W40"
                                barcode="745123568901"
                                category="Lubricantes"
                                location="Estante A-1"
                                price="$65,000"
                                stock={42}
                                min={10}
                            />
                            <InventoryRow
                                name="Batería Bosch 12V 7Ah"
                                barcode="745001122334"
                                category="Eléctrico"
                                location="Bodega Central"
                                price="$185,000"
                                stock={5}
                                min={5}
                            />
                            <InventoryRow
                                name="Pastillas Freno Nmax Del."
                                barcode="745998877665"
                                category="Frenos"
                                location="Mostrador"
                                price="$45,000"
                                stock={2}
                                min={12}
                            />
                            <InventoryRow
                                name="Kit Arrastre Pulsar 200 NS"
                                barcode="745887766554"
                                category="Repuestos"
                                location="Bodega Central"
                                price="$320,000"
                                stock={0}
                                min={5}
                            />
                            <InventoryRow
                                name="Llantas Pirelli Angel City"
                                barcode="745776655443"
                                category="Llantas"
                                location="Estante C-2"
                                price="$250,000"
                                stock={15}
                                min={4}
                            />
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
                    <p className="text-xs text-slate-500">Mostrando <span className="font-bold">5</span> de <span className="font-bold">248</span> productos</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-400 bg-white cursor-not-allowed">Anterior</button>
                        <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 transition-colors shadow-sm">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InventoryRow({ name, barcode, category, location, price, stock, min }: any) {
    const isOut = stock === 0;
    const isLow = stock > 0 && stock <= min;

    return (
        <tr className="group hover:bg-slate-50/50 transition-colors">
            <td className="px-8 py-5">
                <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-[14px] group-hover:text-orange-600 transition-colors cursor-pointer">{name}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 flex items-center gap-1.5">
                        <Barcode size={10} className="text-slate-300" />
                        {barcode}
                    </span>
                </div>
            </td>
            <td className="px-8 py-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-tighter">
                    <Tag size={12} className="text-slate-400" />
                    {category}
                </span>
            </td>
            <td className="px-8 py-5">
                <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                    <MapPin size={12} className="text-orange-400" />
                    {location}
                </span>
            </td>
            <td className="px-8 py-5 text-right">
                <span className="font-bold text-slate-900">{price}</span>
            </td>
            <td className="px-8 py-5 text-center">
                <div className="flex flex-col items-center">
                    <span className={`text-base font-extrabold ${isOut ? 'text-red-600' : isLow ? 'text-orange-600' : 'text-slate-700'}`}>
                        {stock}
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Unidades</span>
                </div>
            </td>
            <td className="px-8 py-5 text-center">
                <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${isOut ? 'bg-red-100 text-red-700' :
                        isLow ? 'bg-orange-100 text-orange-700' :
                            'bg-emerald-100 text-emerald-700'
                    }`}>
                    {isOut ? 'Sin Stock' : isLow ? 'Stock Bajo' : 'Normal'}
                </span>
            </td>
            <td className="px-8 py-5 text-right">
                <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                    <MoreVertical size={20} />
                </button>
            </td>
        </tr>
    );
}
