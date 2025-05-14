import { Button } from "@repo/ui";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container flex min-h-[600px] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-16 text-center">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Agentes de Conversão
          <br />
          para o seu negócio
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Automatize suas vendas com IA
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <a href="/dashboard">
            Ativar agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline">
          <a href="https://github.com/EmmettM/super-saas-template">
            Saiba mais
          </a>
        </Button>
      </div>
    </section>
  );
}
