import express from 'express';
import 'react-router';
import { createRequestHandler } from '@react-router/express';

declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_EXPRESS: string;
  }
}

export const app = express().use(
  createRequestHandler({
    build: () => import('virtual:react-router/server-build'),
    getLoadContext() {
      return {
        VALUE_FROM_EXPRESS: "Hello, World"
      }
    }
  })
);
