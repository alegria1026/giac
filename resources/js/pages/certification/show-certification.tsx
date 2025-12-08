import AppLayout from "@/layouts/app-layout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { type BreadcrumbItem } from "@/types";

interface Certification {
    id: number;
    name: string;
    attached_file: string | null;
}

interface Props {
    certification: Certification;
}

export default function ShowCertification({ certification }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Certificaciones", href: "/certifications" },
        { title: `Editar certificación #${certification.id}`, href: `/certifications/${certification.id}` },
    ];

    const { data, setData, patch, delete: destroy } = useForm({
        name: certification.name,
        attached_file: null,
    });

    const [preview, setPreview] = useState<string | null>(certification.attached_file ?? null);
    const [hasImage, setHasImage] = useState<boolean>(!!certification.attached_file);
    const [message, setMessage] = useState(["Actualiza los datos necesarios de la certificación.", true]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("attached_file", file);
            setPreview(URL.createObjectURL(file));
            setHasImage(true);
        }
    };

    const removeImage = () => {
        setPreview(null);
        setData("attached_file", null);
        setHasImage(false);

        const input = document.getElementById("attached_file") as HTMLInputElement;
        if (input) input.value = "";
    };

    const handleSubmit = () => {
        if (data.name.trim() === "" || !hasImage) {
            setMessage(["El nombre y la imagen son obligatorios.", false]);
            return;
        }

        patch(`/certifications/${certification.id}`, { forceFormData: true });
    };

    const handleDelete = () => {
        if (confirm("¿Estás seguro de eliminar esta certificación?")) {
            destroy(`/certifications/${certification.id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Editar certificación" />

            <div className="bg-white w-full h-full flex items-center justify-center">
                <div className="lg:w-5/12 w-11/12 bg-white rounded-lg">
                    <h2 className="font-bold text-center text-2xl">Editar certificación</h2>

                    {/* Nombre */}
                    <div className="mt-2">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full outline-0 px-2 py-2 border border-gray-400 rounded-sm"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </div>

                    {/* Imagen */}
                    <div className="mt-2">
                        <label>Imagen</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 transition relative">
                            <input
                                id="attached_file"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />

                            {!preview && (
                                <label htmlFor="attached_file" className="cursor-pointer block">
                                    <span className="text-[#00326D] underline">Sube una imagen</span> o arrastra y suelta
                                    <br />
                                    <span className="text-gray-400 text-xs">PNG, JPG (hasta 5MB)</span>
                                </label>
                            )}

                            {preview && (
                                <div className="relative flex justify-center">
                                    <img
                                        src={preview}
                                        className="max-h-40 object-contain rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:bg-red-700"
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mensaje */}
                    <div className="mt-2">
                        <small className={message[1] ? "text-gray-600" : "text-red-600"}>
                            {message[0]}
                        </small>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            onClick={handleDelete}
                            className="px-3 py-2 rounded cursor-pointer bg-red-600 text-white hover:bg-red-700"
                        >
                            Eliminar
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-3 py-2 rounded cursor-pointer bg-[#00326D] hover:bg-[#002956] text-white"
                        >
                            Actualizar
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
