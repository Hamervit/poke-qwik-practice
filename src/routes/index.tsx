import { component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const pokemonId = useSignal(1); // Primitive
  // const pokemons = useStore()

  return (
    <>
      <span class="text-2xl ">Buscardor simple</span>
      <span class="text-9xl">{pokemonId} </span>
      {/* TODO: Pokemon Image */}
      <div class="mt-2">
        <button class="btn btn-primary mr-2">Anterior</button>
        <button class="btn btn-primary ">Siguiente</button>
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
