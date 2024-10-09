import { useRef } from "react";
import { createContext, ReactNode, useState } from "react";
import { DominoTileType, GameWasmStateResponse, IGameState, IPlayer, PlayerChoiceType } from "../types/game";
const useProgram = () => {
  const game = useRef<IGameState>();
  const gameWasm = useRef<GameWasmStateResponse>();
  const players = useRef<IPlayer[]>([]);
  const selectedDomino = useRef<[number, DominoTileType]>();
  const playerTiles = useRef<DominoTileType[]>();
  const playerChoice = useRef<PlayerChoiceType>();
  return {
    game: game.current,
    setGame,
    gameWasm: gameWasm.current,
    setGameWasm,
    players: players.current,
    setPlayers,
    playerTiles: playerTiles.current,
    setPlayerTiles,
    selectedDomino: selectedDomino.current,
    setSelectedDomino,
    playerChoice: playerChoice.current,
    setPlayerChoice
  };
};
export const GameCtx = createContext(({} as ReturnType<typeof useProgram>));
export function GameProvider({
  children
}: {
  children: ReactNode;
}) {
  const {
    Provider
  } = GameCtx;
  return <Provider value={useProgram()}>{children}</Provider>;
}