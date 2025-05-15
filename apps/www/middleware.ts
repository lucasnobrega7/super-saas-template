import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Rotas que podem ser acessadas sem autenticação
const publicRoutes = createRouteMatcher([
  "/",
  "/sign-in*",
  "/sign-up*",
  "/api/ping",
]);

export default clerkMiddleware((auth, req) => {
  if (!publicRoutes(req)) {
    // Protege todas as rotas exceto as públicas
    return auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(html?|css|js|json|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}; 