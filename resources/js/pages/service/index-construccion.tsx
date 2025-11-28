import { Head } from "@inertiajs/react";
import ServiceCard from "@/components/service-card";

interface Service {
    id: number | string;
    name: string;
    description: string;
    attached_file: string;
}

interface PaginatedServices {
    data: Service[];
}

interface Props {
    construccion: PaginatedServices;
}

export default function IndexConstruccion({ construccion }: Props) {
    return (
        <>
            <Head title="Construcción" />
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-center mb-10">Servicios de Construcción</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {construccion.data.map((service) => (
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
