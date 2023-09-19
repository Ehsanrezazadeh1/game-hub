import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text, list } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setEroor] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setEroor(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        {games ? (
          games.map((game) => <li key={game.id}>{game.name}</li>)
        ) : (
          <li>No games available</li>
        )}
      </ul>
    </>
  );
};

export default GameGrid;
