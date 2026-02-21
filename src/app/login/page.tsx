'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { ShieldCheck, Eye, EyeOff, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const { login, isLoading, isAuthenticated, checkAuth } = useAuthStore();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/dashboard');
        }
    }, [isAuthenticated, router]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data: any) => {
        try {
            await login(data);
            toast.success('Bienvenido a JR Taller');
            router.push('/dashboard');
        } catch (error: any) {
            const message = error.response?.data?.message || 'Error al iniciar sesión';
            toast.error(message);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>

                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700">
                        <ShieldCheck className="w-8 h-8 text-orange-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">Iniciar Sesión</h1>
                    <p className="text-slate-400 text-sm mt-1">Acceso administrativo al sistema</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Correo Electrónico</label>
                        <input
                            {...register('email', { required: 'El correo es requerido' })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-600"
                            placeholder="admin@tallerjr.com"
                            type="email"
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Contraseña</label>
                        <div className="relative">
                            <input
                                {...register('password', { required: 'La contraseña es requerida' })}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-600 pr-10"
                                placeholder="••••••••"
                                type={showPassword ? "text" : "password"}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition-all transform active:scale-95 flex items-center justify-center"
                    >
                        {isLoading ? <Loader2 className="animate-spin mr-2" /> : 'Ingresar al Sistema'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-xs text-slate-500">
                        JR Taller de Motos &copy; {new Date().getFullYear()} <br />
                        <span className="opacity-50">Secure Enclave v1.1 - Next.js Powered</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
