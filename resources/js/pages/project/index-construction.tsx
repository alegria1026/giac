import { Head } from "@inertiajs/react";
import ServiceCard from "@/components/service-card";
import Header from '@/components/layout/Header';

interface Project {
    id: number;
    user_id: number;
    name: string;
    description: string;
    category: "Ingeniería" | "Construcción";
    attached_file: string;
}

interface Props {
    construction: Project[];
}

export default function IndexConstruction({ construction }: Props) {
    return (
        <>
            <Head title="Portafolio - Construcción" />
            <Header />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-4">Portafolio</h1>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    Presentamos una selección de nuestros proyectos en construcción e ingeniería,
                    desarrollados con altos estándares de calidad, seguridad y eficiencia. Cada trabajo
                    refleja nuestra experiencia en soluciones industriales confiables y ajustadas a las
                    necesidades de nuestros clientes.
                </p>
                <div className="flex justify-center gap-4 mb-12">
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">
                        Construcción
                    </button>
                    <button className="px-5 py-2 bg-gray-200 rounded-md shadow hover:bg-gray-300">
                        Ingeniería
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {construction.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition"
                        >
                            <ServiceCard
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                image={project.attached_file}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
