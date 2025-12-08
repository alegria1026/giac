type CertificationCardProps = {
    name: string;
    image: string;
};

export default function CertificationCard({ name, image }: CertificationCardProps) {
    return (
        <div className="w-full max-w-xs bg-white rounded-xl shadow-md border border-gray-200 p-5 flex flex-col items-center text-center transition hover:shadow-lg">

            <div className="w-full flex justify-center mb-4">
                <img
                    src={image}
                    alt={name}
                    className="w-40 h-auto object-contain rounded-md"
                />
            </div>

            <h3 className="text-lg font-bold text-gray-800">
                {name}
            </h3>
        </div>
    );
}
