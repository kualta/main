import { roboto_mono } from '@/components/fonts';
import Link from 'next/link';
import '@/styles/globals.css';

export const metadata = {
    title: 'kualta',
    description: "kualta's official website",
    icons: {
        icon: '/icon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    let texts = [
        'simply makes things',
        'makes simple things',
        'makes things simple',
    ];
    let action = texts[Math.floor(Math.random() * texts.length)];

    let header = (
        <header
            className={`flex items-center justify-between border-b py-4 dark:border-neutral-800 ${roboto_mono.className}`}
        >
            <Link href={'/'}>
                <b className="text-lg">kualta</b> {action}
            </Link>
            <a href="https://blog.kualta.dev/">{`blog >`}</a>
        </header>
    );

    return (
        <html className={`dark dark:bg-[#111111]`}>
            <head />
            <body className="mx-auto flex flex-col min-h-screen max-w-2xl dark:text-stone-200 px-4">
                {header}
                {children}
            </body>
        </html>
    );
}
