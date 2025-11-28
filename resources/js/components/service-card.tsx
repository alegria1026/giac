interface Props {
    name: string;
    description: string;
    image: string;
}

export default function ServiceCard({ name, description, image }: Props) {
    return (
        <div className="rounded-lg overflow-hidden bg-white shadow-[0px_0px_8px_rgba(103,103,103,0.2)] transition hover:scale-[1.01] hover:shadow-md">
            <img
                src={`${image}`}
                alt={name}
                className="w-full h-52 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                <p>{image}</p>
            </div>
        </div>
    );
}
