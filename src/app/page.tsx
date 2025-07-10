import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightSquare } from "react-icons/bs";
import { Input } from "@/components/input";
import { GameCard } from "@/components/gameCard";

async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 300 } }
    );
    return res.json();
  } catch (error) {
    console.error("Error fetching game:", error);
  }
}

async function getGameData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 300 },
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching game:", error);
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();
  const gameData: GameProps[] = await getGameData();
  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo para você
        </h1>

        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full relative max-h-96 h-96">
              <div className="z-20 absolute flex items-center justify-center gap-2 bottom-0 p-3">
                <p className="font-bold text-white text-xl">{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>
              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority={true}
                quality={100}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-200"
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 44vw"
              />
            </div>
          </section>
        </Link>

        <Input />

        <h2 className="text-lg font-bold mt-8 mb-5 ">Jogos para conehcer</h2>
        <section className="grid gap-7 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mx-auto">
          {gameData.map((game) => (
            <GameCard key={game.id} data={game} />
          ))}
        </section>
      </Container>
    </main>
  );
}
