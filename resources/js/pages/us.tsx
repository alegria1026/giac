export default function Us() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        ¡Hola Mundo! 👋
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Bienvenido a tu componente US
                    </p>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg">
                        <p className="font-semibold">
                            Este es tu primer componente en us.tsx
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
