import { Head } from "@inertiajs/react";
import CertificationCard  from '@/components/ui/card-certification';
import Header from "@/components/layout/Header";
import HeaderSections from '@/components/layout/HeaderSections';

interface Certification {
    id: number;
    name: string;
    attached_file: string;
}

interface Props {
    certifications: Certification[];
}

export default function CertificationsIndex({ certifications }: Props) {
    return (
        <>
            <Head title="Certificaciones" />
            <HeaderSections />

            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* TÍTULO */}
                <h1 className="text-4xl font-extrabold text-center mb-4">
                    Certificaciones
                </h1>

                {/* DESCRIPCIÓN */}
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    Somos una empresa especializada en soluciones tecnológicas, respaldada por
                    certificaciones ISO que garantizan la calidad, seguridad y eficiencia de
                    nuestros procesos.
                </p>

                {/* GRID DE CERTIFICACIONES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* ✔ CERTIFICACIONES MANUALES */}
                    <div className="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition">
                        <CertificationCard
                            name="ISO 9001:2015"
                            image="/storage/certifications/iso9001.png"
                        />
                    </div>

                    <div className="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition">
                        <CertificationCard
                            name="ISO 14001:2015"
                            image="/storage/certifications/iso14001.png"
                        />
                    </div>

                    <div className="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition">
                        <CertificationCard
                            name="ISO 45001:2018"
                            image="/storage/certifications/iso45001.png"
                        />
                    </div>

                    {/* ✔ CERTIFICACIONES DEL BACKEND */}
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition"
                        >
                            <CertificationCard
                                name={cert.name}
                                image={cert.attached_file}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}
