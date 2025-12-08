import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import CertificationCard  from '@/components/ui/card-certification';
import { type BreadcrumbItem } from "@/types";

interface Certification {
    id: number;
    name: string;
    attached_file: string;
}

interface Props {
    certifications: Certification[];
}

export default function CertificationsIndex({ certifications }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Certificaciones", href: "/certifications/public" },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Certificaciones" />

            <div className="w-full flex flex-col items-center text-center py-12 px-6">

                {/* Título */}
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Certificaciones
                </h1>

                <p className="text-gray-600 max-w-3xl mb-12">
                    Somos una empresa especializada en soluciones tecnológicas, respaldada por el uso de software de vanguardia
                    y certificaciones ISO que garantizan la calidad, seguridad y eficiencia de nuestros procesos.
                </p>

                {/* Grid de certificaciones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {certifications.map((cert) => (
                        <CertificationCard
                            key={cert.id}
                            name={cert.name}
                            image={cert.attached_file}
                        />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
