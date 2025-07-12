import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "@/components/label";
import { GameCard } from "@/components/gameCard";
import { Metadata } from "next";

interface PropsParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PropsParams): Promise<Metadata> {
  try {
    const response: GameProps = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`
    )
      .then((res) => res.json())
      .catch(() => {
        return {
          title: "DalyGames - Descubra jogos incríveis para se divertir.",
        };
      });

    return {
      title: response.title,
    };
  } catch (erro) {
    return {
      title: "DalyGames - Descubra jogos incríveis para se divertir.",
    };
  }
}

async function getGame(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { cache: "no-store" }
    );
    return res.json();
  } catch {
    return null;
  }
}

async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return res.json();
  } catch (error) {
    console.error("Error fetching game:", error);
  }
}

export default async function Game({
  params: { id },
}: {
  params: { id: string };
}) {
  const game: GameProps = await getGame(id);
  const dalyGame: GameProps = await getDalyGame();

  if (!game) redirect("/");

  return (
    <main className="w-full text-black mt-2">
      <Container>
        <div className="w-full relative bg-black h-80 sm:h-96 rounded-lg">
          <Image
            src={game.image_url}
            alt={game.title}
            priority={true}
            quality={100}
            fill={true}
            className="w-full h-80 sm:h-96 object-cover opacity-75 rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 44vw"
          />
        </div>

        <h1 className="font-bold text-xl my-4">{game.title}</h1>
        <p>{game.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>

        <div className="flex gap-2 flex-wrap">
          {game.categories.map((item, index) => (
            <Label name={item} key={index} />
          ))}
        </div>
        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>

        <div className="flex gap-2 flex-wrap">
          {game.platforms.map((item, index) => (
            <Label name={item} key={index} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de lançamento: </strong>
          {game.release}
        </p>

        <h3 className="font-semibold mt-7 mb-2">Jogo recomendado:</h3>
        <GameCard data={dalyGame} />
      </Container>
    </main>
  );
}
