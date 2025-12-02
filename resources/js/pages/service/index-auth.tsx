import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage, router } from '@inertiajs/react';
import ServicesTable from '@/components/services-table';

interface Service {
    id: number | string;
    name: string;
    description: string;
}

interface PaginatedServices {
    data: Service[];
    links: Array<{ url: string | null; label: string; active: boolean }>;
}

interface Props {
    engineering: PaginatedServices;
    construction: PaginatedServices;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Servicios',
        href: '/services',
    },
];

export default function Index({ engineering, construction }: Props) {
    const { auth } = usePage<SharedData>().props;
    const name = auth.user.name;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Servicios" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-6">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground m-0 leading-none">Servicios</h1>
                        <h3 className="text-1 font-light text-foreground m-0 leading-none mb-3">
                            Bienvenido de nuevo, {name}
                        </h3>
                    </div>

                    <button
                        className="text-sm px-3 py-2 rounded-md cursor-pointer font-semibold bg-[#00326D] transition-all hover:bg-[#002956] text-white flex items-center gap-1"
                        onClick={() => router.visit('/services/create')}
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
                            className="lucide lucide-plus"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>
                        Nuevo servicio
                    </button>
                </div>

                <ServicesTable title="Servicios de Ingeniería" services={engineering} />
                <ServicesTable title="Servicios de Construcción" services={construction} />
            </div>
        </AppLayout>
    );
}
