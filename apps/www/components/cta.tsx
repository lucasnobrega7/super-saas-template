import { Button } from "@repo/ui";

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Automatize suas vendas com IA
        </h2>
        <p className="max-w-4xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Automatize suas vendas com IA
        </p>
        <Button size="lg" className="mt-4" asChild>
          <a href="https://github.com/EmmettM/super-saas-template">
            Ativar agora
          </a>
        </Button>
      </div>
    </section>
  );
}
