import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src="/giac.png"
            alt="Logo"
            {...props}
            className={`object-contain ${props.className ?? ''}`}
        />
    );
}
