

import { useState } from "react";
import { router } from "@inertiajs/react";

type Project = {
    id: number | string;
    name: string;
    description: string;
    category: string;
    attached_file?: string | null;
};

type PaginatedProjects = {
    data: Project[];
    links: Array<{ url: string | null; label: string; active: boolean }>;
};

export default function ProjectsTable({ projects, title }: { projects: PaginatedProjects; title: string }) {
    const [search, setSearch] = useState("");

    const filteredProjects = projects.data.filter(project =>
        Object.values(project)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center mt-6 w-full">
                <h2 className="text-2xl font-bold text-foreground leading-none">{title}</h2>

                <div className="lg:w-9/12 w-7/12 flex items-center border border-gray-300 dark:border-sidebar-border rounded-md p-2 text-sm focus-within:ring-2 focus-within:ring-[#00326D] transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                    </svg>

                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full px-2 outline-0 bg-transparent"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="relative rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-[#F7F7F7]">
                <div className="overflow-auto">
                    {filteredProjects.length === 0 ? (
                        <div className="px-4 py-6 text-sm text-muted-foreground">No hay proyectos aún.</div>
                    ) : (
                        <table className="min-w-full text-sm text-left border-collapse">
                            <thead className="sticky top-0 bg-[#F7F7F7] z-10">
                                <tr className="border-b border-sidebar-border/70 dark:border-sidebar-border">
                                    <th className="px-4 py-3 font-semibold">Nombre</th>
                                    <th className="px-4 py-3 font-semibold">Descripción</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-sidebar-border/70 dark:divide-sidebar-border">
                                {filteredProjects.map((p) => (
                                    <tr
                                        key={p.id}
                                        className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                                        onClick={() => router.visit(`/projects/${p.id}`)}
                                    >
                                        <td className="px-4 py-3 truncate max-w-xs">{p.name}</td>
                                        <td className="px-4 py-3">{p.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            <div className="flex justify-end items-end gap-1 px-4 text-sm">
                {projects.links.map((link, index) => {
                    const isDisabled = link.url === null;
                    const isActive = link.active;
                    const label = link.label.replace(/&laquo;|&raquo;/g, '').trim();

                    return (
                        <button
                            key={index}
                            onClick={() => link.url && router.visit(link.url, { preserveScroll: true, preserveState: true })}
                            disabled={isDisabled}
                            className={`min-w-[32px] px-2 py-1 rounded-md text-sm font-medium transition-all
                                ${isActive
                                    ? 'bg-[#00326D] text-white'
                                    : isDisabled
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-gray-700 hover:bg-[#F1F5F9]'
                                }`}
                        >
                            {label === 'Previous' ? '‹' : label === 'Next' ? '›' : label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
