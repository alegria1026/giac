import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface FlashMessages {
    status?: string;
    error?: string;
    timestamp?: number;
}

interface PagePropsWithFlash extends Record<string, unknown> {
    flash: FlashMessages;
}

export default function FlashMessage() {
    const { flash } = usePage<PagePropsWithFlash>().props;

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let timer: NodeJS.Timeout;

        if (flash.status || flash.error) {
            timeoutId = setTimeout(() => setVisible(true), 0);
            timer = setTimeout(() => setVisible(false), 4000);
        } else {
            timeoutId = setTimeout(() => setVisible(false), 0);
        }

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(timer);
        };
    }, [flash.timestamp, flash.status, flash.error]);

    if (!visible || (!flash.status && !flash.error)) {
        return null;
    }

    return (
        <div className={`fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 transition-all duration-300 ${
            flash.error
                ? 'bg-red-100 border border-red-400 text-red-700'
                : 'bg-green-100 border border-green-400 text-green-700'
        }`}>
            <div className="flex items-center gap-3">
                <span className="font-medium">
                    {flash.status || flash.error}
                </span>
                <button
                    onClick={() => setVisible(false)}
                    className="text-2xl font-bold hover:opacity-70 transition-opacity"
                    aria-label="Cerrar"
                >
                    ×
                </button>
            </div>
        </div>
    );
}
