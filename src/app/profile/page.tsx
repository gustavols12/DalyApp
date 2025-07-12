import { Container } from '@/components/container';
import Image from 'next/image';
import userImg from '@/app/assests/user.png';
import { FaShareAlt } from 'react-icons/fa';
import { FavoriteGame } from './components/favorite';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meu perfil',
};

export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src={userImg}
              alt="Foto perfil"
              className="rounded-full w-56 h-56 object-cover"
            />
            <h1 className="font-bold text-2xl ">Gustavo Luiz</h1>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
              Configurações
            </button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg">
              <FaShareAlt size={24} />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteGame />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteGame />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteGame />
          </div>
        </section>
      </Container>
    </main>
  );
}
