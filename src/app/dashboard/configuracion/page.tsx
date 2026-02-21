'use client';

import {
    Settings,
    Shield,
    Bell,
    DollarSign,
    Database,
    Info,
    LogOut,
    ChevronRight,
    User,
    Key,
    Percent,
    Globe,
    Printer,
    Monitor,
    Plus,
    Barcode as BarcodeIcon
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useState } from 'react';

export default function ConfiguracionProPage() {
    const { user, logout } = useAuthStore();
    const [activeTab, setActiveTab] = useState('negocio');

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in slide-in-from-right duration-500">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Panel de Control Maestro</h1>
                <p className="text-slate-500 mt-2 font-medium">Gestiona los parámetros críticos, permisos y hardware del sistema JR.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Menú de Navegación Lateral */}
                <div className="space-y-1">
                    <ConfigTab
                        icon={<Globe size={18} />}
                        label="Negocio & Moneda"
                        active={activeTab === 'negocio'}
                        onClick={() => setActiveTab('negocio')}
                    />
                    <ConfigTab
                        icon={<Percent size={18} />}
                        label="Comisiones & Reglas"
                        active={activeTab === 'comisiones'}
                        onClick={() => setActiveTab('comisiones')}
                    />
                    <ConfigTab
                        icon={<Key size={18} />}
                        label="Usuarios & Permisos"
                        active={activeTab === 'usuarios'}
                        onClick={() => setActiveTab('usuarios')}
                    />
                    <ConfigTab
                        icon={<Printer size={18} />}
                        label="Hardware & Lector"
                        active={activeTab === 'hardware'}
                        onClick={() => setActiveTab('hardware')}
                    />
                    <ConfigTab
                        icon={<Shield size={18} />}
                        label="Seguridad Avanzada"
                        active={activeTab === 'seguridad'}
                        onClick={() => setActiveTab('seguridad')}
                    />

                    <div className="pt-8">
                        <button
                            onClick={() => logout()}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-red-400 hover:bg-red-50 transition-all group"
                        >
                            <LogOut size={18} className="group-hover:rotate-12 transition-transform" />
                            Cerrar Sesión Segura
                        </button>
                    </div>
                </div>

                {/* Área de Configuración Dinámica (Requisito 8) */}
                <div className="lg:col-span-3 space-y-6">
                    {activeTab === 'negocio' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <ConfigSection title="Parámetros de Facturación" description="Configura monedas, impuestos y datos legales.">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField label="Nombre de Moneda" value="Pesos Colombianos (COP)" />
                                    <InputField label="Símbolo de Moneda" value="$" />
                                    <InputField label="Impuesto Base (IVA %)" value="0" />
                                    <InputField label="Prefijo de Factura" value="JR-" />
                                </div>
                            </ConfigSection>
                            <ConfigSection title="Sincronización Cloud" description="Estado de la base de datos en tiempo real.">
                                <div className="p-6 bg-slate-900 rounded-2xl flex items-center justify-between text-white">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500">
                                            <Database size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Base de Datos Conectada</p>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Sincronización Activa</p>
                                        </div>
                                    </div>
                                    <button className="text-[10px] font-black uppercase text-orange-500 hover:text-orange-400 transition-colors">Refrescar Ahora</button>
                                </div>
                            </ConfigSection>
                        </div>
                    )}

                    {activeTab === 'comisiones' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <ConfigSection title="Criterios de Comisión" description="Define cuánto ganan tus mecánicos por cada tipo de trabajo.">
                                <div className="space-y-4">
                                    <CommissionRule label="Mano de Obra (Sincronización)" percent={30} />
                                    <CommissionRule label="Mano de Obra (Mecánica Rápida)" percent={25} />
                                    <CommissionRule label="Venta de Repuestos (Incentivo)" percent={5} />
                                    <button className="flex items-center gap-2 text-orange-600 font-bold text-sm mt-4 hover:underline">
                                        <Plus size={16} /> Añadir Nueva Regla
                                    </button>
                                </div>
                            </ConfigSection>
                            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 italic text-sm text-orange-950">
                                Tip: Las comisiones se calculan automáticamente en el módulo de Ventas al asignar un mecánico a un servicio.
                            </div>
                        </div>
                    )}

                    {activeTab === 'hardware' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <ConfigSection title="Integración de Periféricos" description="Configura tus dispositivos de entrada y salida física.">
                                <div className="space-y-4">
                                    <HardwareItem label="Lector de Códigos de Barras" status="Conectado" icon={<BarcodeIcon size={20} />} active />
                                    <HardwareItem label="Impresora Térmica (Tickets)" status="Pendiente" icon={<Printer size={20} />} />
                                    <HardwareItem label="Monitor Secundario" status="Desconectado" icon={<Monitor size={20} />} />
                                </div>
                            </ConfigSection>
                        </div>
                    )}

                    {activeTab === 'seguridad' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <ConfigSection title="Protección de Acceso" description="Gestiona contraseñas y doble factor de autenticación.">
                                <div className="space-y-4">
                                    <SecurityAction label="Doble Factor (2FA)" description="Añade seguridad por código de celular." toggle />
                                    <SecurityAction label="Sesiones Activas" description="3 dispositivos conectados actualmente." />
                                    <SecurityAction label="Historial de Auditoría" description="Log de cambios realizados en el sistema." />
                                </div>
                            </ConfigSection>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function ConfigTab({ icon, label, active, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${active
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20'
                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'
                }`}
        >
            {icon}
            {label}
        </button>
    );
}

function ConfigSection({ title, description, children }: any) {
    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50">
                <h3 className="font-bold text-slate-900 text-lg tracking-tight">{title}</h3>
                <p className="text-slate-400 text-sm mt-1">{description}</p>
            </div>
            <div className="p-8">
                {children}
            </div>
        </div>
    );
}

function InputField({ label, value }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
            <input
                type="text"
                defaultValue={value}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:border-orange-500"
            />
        </div>
    );
}

function CommissionRule({ label, percent }: any) {
    return (
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-sm font-bold text-slate-800">{label}</span>
            <div className="flex items-center gap-3">
                <input
                    type="number"
                    defaultValue={percent}
                    className="w-16 bg-white border border-slate-200 rounded-lg px-2 py-1 text-center font-black text-orange-600"
                />
                <span className="text-xs font-bold text-slate-400">%</span>
            </div>
        </div>
    );
}

function HardwareItem({ label, status, icon, active = false }: any) {
    return (
        <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${active ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20' : 'bg-slate-100 text-slate-400'}`}>
                    {icon}
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-sm">{label}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${active ? 'text-emerald-500' : 'text-slate-400'}`}>{status}</p>
                </div>
            </div>
            <button className="text-xs font-bold text-slate-400 group-hover:text-orange-600 transition-colors uppercase">Configurar</button>
        </div>
    );
}

function SecurityAction({ label, description, toggle = false }: any) {
    return (
        <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-pointer">
            <div>
                <p className="font-bold text-slate-900 text-sm">{label}</p>
                <p className="text-[10px] font-medium text-slate-400">{description}</p>
            </div>
            {toggle ? (
                <div className="w-10 h-5 bg-orange-500 rounded-full relative p-0.5 flex items-center">
                    <div className="w-4 h-4 bg-white rounded-full translate-x-5 shadow-sm"></div>
                </div>
            ) : (
                <ChevronRight size={18} className="text-slate-400" />
            )}
        </div>
    );
}
