'use client';
import { useState } from 'react';
import { FiEdit, FiX } from 'react-icons/fi';

export function FavoriteGame() {
  const [input, setInput] = useState('');
  const [showInput, setshowInput] = useState(false);
  const [game, setGame] = useState('');

  function handleAddGame() {
    setshowInput(!showInput);

    if (input !== '') setGame(input);
    setInput('');
  }

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full rounded-md h-8 text-black outline-0 px-2"
            type="text"
            value={input}
            placeholder="Digite o nome do jogo..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button>
            <FiX size={24} onClick={handleAddGame} />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-105 duration-200 transition-all"
          onClick={handleAddGame}
        >
          <FiEdit size={24} />
        </button>
      )}

      {game && (
        <div className="text-white">
          <span>Jogo favorito:</span>
          <p className="font-bold">{game}</p>
        </div>
      )}
      {!game && <p className="font-bold text-white">Adicionar jogo</p>}
    </div>
  );
}
