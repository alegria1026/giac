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
    construction: Service[];
}

export default function IndexConstruction({ construction }: Props) {
    return (
        <>
            <Head title="Construction" />
            <HeaderSections />
            <br />
            <div className="mx-auto max-w-7xl px-4 py-10">
                <h1 className="mb-10 text-center text-3xl font-bold">
                    Servicios de construcción
                </h1>
                <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">
                    Ofrecemos soluciones de ingeniería integral para el
                    desarrollo de proyectos en el sector energético,
                    petroquímico y de transporte de fluidos. Nuestro enfoque
                    combina innivación tecnológica con rigurosos estándares de
                    diseñp y normatividad nacional e internacional.
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {construction.map((service) => (
                        <ServiceCard
                            key={service.id}
                            name={service.name}
                            description={service.description}
                            image={service.attached_file}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
