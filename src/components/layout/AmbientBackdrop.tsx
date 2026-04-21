export function AmbientBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="glow-ring left-[-10rem] top-20 h-72 w-72 bg-accent/25" />
      <div className="glow-ring right-[-8rem] top-48 h-80 w-80 bg-warm/15" />
      <div className="glow-ring bottom-[-12rem] left-1/2 h-96 w-96 -translate-x-1/2 bg-accent/10" />
      <div className="grid-overlay absolute inset-x-0 top-0 h-[36rem] opacity-40" />
    </div>
  );
}
