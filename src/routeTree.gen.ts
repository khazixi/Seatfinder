/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HampshireImport } from './routes/hampshire'
import { Route as WorcesterImport } from './routes/Worcester'
import { Route as FranklinImport } from './routes/Franklin'
import { Route as BerkshireImport } from './routes/Berkshire'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const HampshireRoute = HampshireImport.update({
  path: '/hampshire',
  getParentRoute: () => rootRoute,
} as any)

const WorcesterRoute = WorcesterImport.update({
  path: '/Worcester',
  getParentRoute: () => rootRoute,
} as any)

const FranklinRoute = FranklinImport.update({
  path: '/Franklin',
  getParentRoute: () => rootRoute,
} as any)

const BerkshireRoute = BerkshireImport.update({
  path: '/Berkshire',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/Berkshire': {
      preLoaderRoute: typeof BerkshireImport
      parentRoute: typeof rootRoute
    }
    '/Franklin': {
      preLoaderRoute: typeof FranklinImport
      parentRoute: typeof rootRoute
    }
    '/Worcester': {
      preLoaderRoute: typeof WorcesterImport
      parentRoute: typeof rootRoute
    }
    '/hampshire': {
      preLoaderRoute: typeof HampshireImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  BerkshireRoute,
  FranklinRoute,
  WorcesterRoute,
  HampshireRoute,
])

/* prettier-ignore-end */
