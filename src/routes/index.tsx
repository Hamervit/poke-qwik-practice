import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";

export default component$(() => {
  return <span class="text-5xl">Hola mundo</span>;
});

export const head: DocumentHead = {
  title: "Welcome to Qwik || Hello World",
  meta: [
    {
      name: "description",
      content: "Qwik site description for a new project",
    },
  ],
};
