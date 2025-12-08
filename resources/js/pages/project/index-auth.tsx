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
    projects: PaginatedServices;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Proyectos',
        href: '/projects',
    },
];

export default function Index({ projects }: Props) {
    const { auth } = usePage<SharedData>().props;
    const name = auth.user.name;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Proyectos" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-6">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground m-0 leading-none">Proyectos</h1>
                        <h3 className="text-1 font-light text-foreground m-0 leading-none mb-3">
                            Bienvenido de nuevo, {name}
                        </h3>
                    </div>

                    <button
                        className="text-sm px-3 py-2 rounded-md cursor-pointer font-semibold bg-[#00326D] transition-all hover:bg-[#002956] text-white flex items-center gap-1"
                        onClick={() => router.visit('/projects/create')}
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
                        Nuevo proyecto
                    </button>
                </div>

                <ServicesTable title="Lista de proyectos" services={projects} />
            </div>
        </AppLayout>
    );
}
