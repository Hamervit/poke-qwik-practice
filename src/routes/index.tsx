import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal(Math.round(Math.random() * 100)); // Primitive
  const showBackImage = useSignal(false);
  const isVisible = useSignal(false);
  // const pokemons = useStore()

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;

    pokemonId.value += value;
  });

  return (
    <>
      <span class="text-2xl">Buscardor simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage
        id={pokemonId.value}
        backImage={showBackImage.value}
        isVisible={isVisible}
      />
      <div class="mt-2">
        <button
          class="btn btn-primary mr-2"
          onClick$={() => changePokemonId(-1)}
        >
          Anterior
        </button>
        <button
          class="btn btn-primary mr-2"
          onClick$={() => changePokemonId(1)}
        >
          Siguiente
        </button>
        <button
          class="btn btn-primary mr-2"
          onClick$={() => (showBackImage.value = !showBackImage.value)}
        >
          Voltear
        </button>
        <button
          class="btn btn-primary"
          onClick$={() => (isVisible.value = !isVisible.value)}
        >
          {isVisible.value ? "Ocultar" : "Revelar"}
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",

  meta: [
    {
      name: "description",
      content: "First qwik app",
    },
  ],
};
