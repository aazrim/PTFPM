
import { useState } from "react";

interface Client {
  name: string;
  file: string;
}

const clients: Client[] = [
  { name: "EPSON", file: "epson.png" },
  { name: "UNILEVER", file: "unilever.png" },
  { name: "GARUDA AGRO", file: "garuda-agro.png" },
  { name: "PRIMA CHEMICAL", file: "prima-chemical.png" },
  { name: "MEGA STEEL", file: "mega-steel.png" },
  { name: "TIRTA PACK", file: "tirta-pack.png" },
  { name: "ANEKA MINING", file: "aneka-mining.png" },
  { name: "BINTANG FOOD", file: "bintang-food.png" },
];

function ClientLogo({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="mx-4 flex h-24 w-44 shrink-0 items-center justify-center rounded-lg border border-border bg-background px-6">
      {failed ? (
        <span className="text-center font-display text-xs font-extrabold tracking-widest text-muted-foreground">
          {client.name}
        </span>
      ) : (
        <img
          src={`/customers/${client.file}`}
          alt={client.name}
          className="max-h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function CustomerLogos() {
  const loop = [...clients, ...clients];

  return (
    <div className="group relative mt-12 overflow-hidden rounded-lg border border-border bg-surface py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {loop.map((c, i) => (
          <ClientLogo key={`${c.name}-${i}`} client={c} />
        ))}
      </div>
    </div>
  );
}
