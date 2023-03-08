import Link from 'next/link';
import '../styles/globals.css';
import { roboto_mono } from './fonts';

export const metadata = {
  title: 'kualta',
  description: 'kualta\'s official website',
  icons: {
    icon: "/icon.png"
  }
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  let actionTexts = [
    'simply makes things',
    'makes simple things',
    'makes things simple',
  ];
  let action = actionTexts[Math.floor(Math.random() * actionTexts.length)];

  let header = (
    <header className={`flex items-center justify-between border-b py-4 dark:border-neutral-800 ${roboto_mono.className}`}>
      <Link href={'/'}>
        <b>kualta</b> {action}
      </Link>
      <a href="https://blog.kualta.dev/" target={'_blank'} rel={'noreferrer'}>{`blog >`}</a>
    </header>
  );

  return (
    <html className={`dark dark:bg-[#111111]`}>
      <head />
      <body className='mx-auto flex flex-col min-h-screen max-w-2xl dark:text-stone-200 px-4'>
        {header}
        {children}
      </body>
    </html>
  )
}