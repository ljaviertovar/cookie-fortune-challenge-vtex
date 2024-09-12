import { useState } from "react";

import axios from "axios";
import confetti from "canvas-confetti";

import { generateLuckyNumber } from "../utils";

interface CookieFortune {
  CookieFortune: string;
}

export default function useCookieFortune() {
  const [cookieFortunePhrase, setCookieFortunePhrase] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getCookieFortunePhrase = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await axios.get<CookieFortune[]>(
        "/api/dataentities/CF/search?_fields=CookieFortune&_cache=no",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "REST-Range": "resources=0-100",
            "Cache-Control": "no-cache",
          },
        }
      );

      const data = response.data;
      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomFortune = data[randomIndex].CookieFortune;

        setCookieFortunePhrase(randomFortune);

        if (typeof OffscreenCanvas !== "undefined") {
          let scalar = 2;
          let cookie = confetti.shapeFromText({ text: "🥠", scalar });

          let defaults = {
            spread: 360,
            ticks: 60,
            gravity: 0,
            decay: 0.96,
            startVelocity: 20,
            shapes: [cookie],
            scalar,
          };

          confetti({
            ...defaults,
            particleCount: 60,
          });
        }
      } else {
        setCookieFortunePhrase("No fortune cookies available.");
      }
    } catch (error) {
      console.error("Error al obtener los registros:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    cookieFortunePhrase,
    luckyNumber: generateLuckyNumber(),
    isLoading,
    isError,
    getCookieFortunePhrase,
  };
}
