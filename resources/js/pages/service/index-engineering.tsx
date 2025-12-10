import { Head } from "@inertiajs/react";
import ServiceCard from "@/components/service-card";
import HeaderSections from '@/components/layout/HeaderSections';

interface Service {
    id: number | string;
    name: string;
    description: string;
    attached_file: string;
}

interface Props {
    engineering: Service[]; // ✅ Cambiar a Service[] directo
}

export default function IndexEngineering({ engineering }: Props) {
    return (
        <>
            <Head title="Ingeniería" />

            <HeaderSections />
            <br />

            <div className="mx-auto max-w-7xl px-5 py-10">
                <h1 className="mb-10 text-center text-3xl font-bold">
                    Servicios de Ingeniería
                </h1>
                <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">
                    Desarrollamos proyectos industriales y de energía con los
                    más altos estándares de calidad, seguridad y eficiencia,
                    asegurando el cumplimiento normativo y la confiabilidad
                    operativa de cada instalación.
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {engineering.map(
                        (
                            service, // ✅ Quitar .data
                        ) => (
                            <ServiceCard
                                key={service.id}
                                name={service.name}
                                description={service.description}
                                image={service.attached_file}
                            />
                        ),
                    )}
                </div>
            </div>
        </>
    );
}
