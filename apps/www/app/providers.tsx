import { PostHogProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange
        themes={["light", "dark"]}
      >
        <PostHogProvider>{children}</PostHogProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
