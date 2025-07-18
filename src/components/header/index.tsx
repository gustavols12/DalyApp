import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assests/logo.svg';
import { LiaGamepadSolid } from 'react-icons/lia';

export function Header() {
  return (
    <header className="w-full h-28 bg-slate-100 text-black px-2 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center h-28 sm:justify-between">
        <nav className="flex items-center justify-center gap-4">
          <Link href="/">
            <Image
              src={logo}
              alt="Daly Games Logo"
              quality={100}
              priority={true}
              className="w-full"
            />
          </Link>
          <Link href="/">Games</Link>
          <Link href="/profile">Perfil</Link>
        </nav>
        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#475569" />
          </Link>
        </div>
      </div>
    </header>
  );
}
