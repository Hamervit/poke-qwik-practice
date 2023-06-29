import { type Signal, component$, useSignal, useTask$ } from "@builder.io/qwik";

interface PokemonImageProps {
  id: number;
  size?: number;
  backImage?: boolean;
  isVisible?: Signal<boolean>;
}

export const PokemonImage = component$<PokemonImageProps>(
  ({ id, size = 200, backImage, isVisible }) => {
    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
      track(() => id);
      imageLoaded.value = false;
      isVisible.value = false;
    });

    return (
      <div
        class="flex justify-center items-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {!imageLoaded.value && <span>Cargando...</span>}
        <img
          width={size}
          height={size}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${
            backImage ? "/back" : ""
          }/${id}.png`}
          alt="pokemonSprite"
          onLoad$={() => {
            setTimeout(() => (imageLoaded.value = true), 500);
          }}
          class={[
            {
              hidden: !imageLoaded.value,
              "brightness-0": !isVisible?.value,
            },
            "transition-all",
          ]}
        />
      </div>
    );
  }
);
