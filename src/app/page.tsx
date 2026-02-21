export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold">JR Taller de Motos</h1>
            <p className="mt-4 text-xl">Bienvenido a tu plataforma SaaS corporativa.</p>
            <div className="mt-8 flex gap-4">
                <a href="/login" className="rounded-lg bg-orange-600 px-6 py-3 text-white">Iniciar Sesión</a>
            </div>
        </main>
    );
}
