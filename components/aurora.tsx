export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-backdrop" />
      <div className="animate-drift absolute -top-40 -left-32 size-[34rem] rounded-full bg-accent/25 blur-[120px]" />
      <div className="animate-drift absolute -top-24 right-0 size-[28rem] rounded-full bg-fuchsia-500/20 blur-[120px] [animation-delay:-8s]" />
      <div className="animate-drift absolute top-1/2 left-1/3 size-[30rem] rounded-full bg-emerald-400/15 blur-[130px] [animation-delay:-14s]" />
    </div>
  );
}
