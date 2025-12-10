import { Head, Link, usePage } from "@inertiajs/react";
import ServiceCard from "@/components/service-card";
import Header from '@/components/layout/Header';
import HeaderSections from '@/components/layout/HeaderSections';

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
    const { url } = usePage(); // Detecta la ruta actual

    const isConstruction = url.startsWith("/projects/construction");
    const isEngineering = url.startsWith("projects/engineering");

    return (
        <>
            <Head title="Portafolio - Construcción" />
            <HeaderSections />

            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-4">Portafolio</h1>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    Presentamos una selección de nuestros proyectos en construcción e ingeniería,
                    desarrollados con altos estándares de calidad, seguridad y eficiencia. Cada trabajo
                    refleja nuestra experiencia en soluciones industriales confiables y ajustadas a las
                    necesidades de nuestros clientes.
                </p>

                {/* BOTONES DE FILTRO */}
                <div className="flex justify-center gap-4 mb-12">

                    {/* Botón Construcción */}
                    <Link
                        href="/projects/construction"
                        className={`px-5 py-2 rounded-md shadow transition
                        ${isConstruction ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                    >
                        Construcción
                    </Link>

                    {/* Botón Ingeniería */}
                    <Link
                        href="/projects/engineering"
                        className={`px-5 py-2 rounded-md shadow transition
                        ${isEngineering ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                    >
                        Ingeniería
                    </Link>

                </div>

                {/* GRID DE PROYECTOS */}
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
