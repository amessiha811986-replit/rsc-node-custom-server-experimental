"use client";

import { useRouteLoaderData } from "react-router";
import type { BioLoader } from "../../vite-env.d";

export default function Component() {
  const { data } = useRouteLoaderData<ReturnType<BioLoader>>("bio") as ReturnType<BioLoader>;
  
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
      <article className="prose mx-auto">
        <h1>Message:</h1>
        <p>{data === "" ? "Hello, World" : data}</p>
      </article>
    </main>
  )
}