import { Head } from "@inertiajs/react";
import ServiceCard from "@/components/service-card";

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
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-center mb-10">Construction Services</h1>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    Ofrecemos soluciones de ingeniería integral para el desarrollo de proyectos en el sector energético,
                    petroquímico y de transporte de fluidos. Nuestro enfoque combina innivación tecnológica con
                    rigurosos estándares de diseñp y normatividad nacional e internacional.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
