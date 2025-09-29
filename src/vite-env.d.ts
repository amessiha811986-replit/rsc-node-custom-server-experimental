/// <reference types="vite/client" />
import type { AppLoadContext } from "react-router";

export type BioLoader = ({ context }: { context: AppLoadContext }) => {
  data: string;
}