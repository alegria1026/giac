import AppLayout from "@/layouts/app-layout";
import { Head, useForm, router } from "@inertiajs/react";
import { useState } from "react";
import { type BreadcrumbItem } from "@/types";

export default function CreateService() {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Servicios", href: "/services" },
        { title: "Crear servicio", href: "/services/create" },
    ];

    const { data, setData, post } = useForm({
        name: "",
        description: "",
        category: "",
        attached_file: null,
    });

    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState(["Completa todos los campos antes de enviar.", true]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("attached_file", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const removeImage = () => {
        setPreview(null);
        setData("attached_file", null);
        const input = document.getElementById("attached_file") as HTMLInputElement;
        if (input) input.value = "";
    };

    const handleSubmit = () => {
        if (
            data.name.trim() === "" ||
            data.description.trim() === "" ||
            data.category === ""
        ) {
            setMessage(["Todos los campos son obligatorios.", false]);
            return;
        }

        post("/services", {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Crear servicio" />

            <div className="bg-white w-full h-full flex items-center justify-center">
                <div className="lg:w-5/12 w-11/12 bg-white rounded-lg">
                    <h2 className="font-bold text-center text-2xl">Crear nuevo servicio</h2>

                    {/* Nombre */}
                    <div className="mt-2">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Ej. Servicio eléctrico"
                            className="w-full outline-0 px-2 py-2 border border-gray-400 rounded-sm"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </div>

                    {/* Descripción */}
                    <div className="mt-2">
                        <label htmlFor="description">Descripción</label>
                        <textarea
                            id="description"
                            placeholder="Describe el servicio..."
                            className="w-full outline-0 px-2 py-2 border border-gray-400 rounded-sm h-28"
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                        ></textarea>
                    </div>

                    {/* category */}
                    <div className="mt-2">
                        <label htmlFor="category">Área</label>
                        <select
                            id="category"
                            className="w-full outline-0 px-2 py-2 border border-gray-400 rounded-sm"
                            value={data.category}
                            onChange={(e) => setData("category", e.target.value)}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="Ingeniería">Ingeniería</option>
                            <option value="Construcción">Construcción</option>
                        </select>
                    </div>

                    {/* Archivo */}
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
                    <div className="flex justify-end gap-2 mt-2">
                        <button
                            onClick={() => router.visit("/services")}
                            className="px-3 py-2 rounded cursor-pointer border border-gray-400 bg-white"
                        >
                            Cancelar
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="px-3 py-2 rounded cursor-pointer bg-[#00326D] hover:bg-[#002956] text-white"
                        >
                            Crear servicio
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
