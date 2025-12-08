import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage, router } from '@inertiajs/react';
import CertificationsTable  from '@/components/certifications-table';

interface Certification {
    id: number | string;
    name: string;
    image_url: string;
}

interface PaginatedCertifications {
    data: Certification[];
    links: Array<{ url: string | null; label: string; active: boolean }>;
}

interface Props {
    certifications: PaginatedCertifications;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Certificaciones',
        href: '/certifications',
    },
];

export default function Index({ certifications }: Props) {
    const { auth } = usePage<SharedData>().props;
    const name = auth.user.name;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Certificaciones" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-6">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground m-0 leading-none">
                            Certificaciones
                        </h1>
                        <h3 className="text-1 font-light text-foreground m-0 leading-none mb-3">
                            Bienvenido de nuevo, {name}
                        </h3>
                    </div>

                    <button
                        className="text-sm px-3 py-2 rounded-md cursor-pointer font-semibold bg-[#00326D] transition-all hover:bg-[#002956] text-white flex items-center gap-1"
                        onClick={() => router.visit('/certifications/create')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>
                        Nueva certificación
                    </button>
                </div>

                {/* Tabla principal */}
                <CertificationsTable title="Listado de certificaciones" certifications={certifications} />
            </div>
        </AppLayout>
    );
}
