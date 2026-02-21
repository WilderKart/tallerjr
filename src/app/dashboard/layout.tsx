'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { LogOut, LayoutDashboard, User, Package, ShoppingCart, Settings, Loader2, DollarSign, Tag, TrendingUp, ArrowDownLeft, Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { logout, user, isAuthenticated, isLoading, checkAuth } = useAuthStore();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isLoading, isAuthenticated, router]);

    const handleLogout = async () => {
        await logout();
        router.push('/login');
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-slate-950">
                <Loader2 className="animate-spin text-orange-500 w-12 h-12" />
            </div>
        );
    }

    if (!isAuthenticated) return null;

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 flex-shrink-0 flex flex-col fixed h-full z-10">
                <div className="p-6 border-b border-slate-800">
                    <h2 className="text-xl font-bold text-white tracking-widest uppercase">JR Taller</h2>
                    <p className="text-orange-500 text-[10px] font-bold tracking-widest mt-1">SISTEMA DE GESTIÓN</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <NavItem href="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard Principal" active={pathname === '/dashboard'} />
                    <NavItem href="/dashboard/alertas" icon={<Bell size={20} />} label="Centro de Alertas" active={pathname === '/dashboard/alertas'} />
                    <NavItem href="/dashboard/inventario" icon={<Package size={20} />} label="Inventario Pro" active={pathname === '/dashboard/inventario'} />
                    <NavItem href="/dashboard/entradas" icon={<ArrowDownLeft size={20} />} label="Entradas Mercancía" active={pathname === '/dashboard/entradas'} />
                    <NavItem href="/dashboard/ventas" icon={<ShoppingCart size={20} />} label="Ventas & Facturas" active={pathname === '/dashboard/ventas'} />
                    <NavItem href="/dashboard/comisiones" icon={<DollarSign size={20} />} label="Comisiones Mecánicos" active={pathname === '/dashboard/comisiones'} />
                    <NavItem href="/dashboard/clientes" icon={<User size={20} />} label="Clientes" active={pathname === '/dashboard/clientes'} />
                    <NavItem href="/dashboard/reportes" icon={<TrendingUp size={20} />} label="Reportes & Análisis" active={pathname === '/dashboard/reportes'} />
                    <NavItem href="/dashboard/etiquetas" icon={<Tag size={20} />} label="Gestión Etiquetas" active={pathname === '/dashboard/etiquetas'} />
                    <NavItem href="/dashboard/configuracion" icon={<Settings size={20} />} label="Configuración" active={pathname === '/dashboard/configuracion'} />
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
                            {user?.name?.charAt(0) || 'U'}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm text-white font-medium truncate">{user?.name}</p>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider">{user?.role}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 text-slate-400 hover:text-red-400 hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-colors text-xs font-medium"
                    >
                        <LogOut size={14} /> Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 min-h-screen">
                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: any, label: string, active?: boolean }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${active
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
        >
            {icon}
            {label}
        </Link>
    );
}
