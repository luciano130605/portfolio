function buildQr(size = 13) {
  const cells: number[] = [];
  const finder = (x: number, y: number, cx: number, cy: number) => {
    const m = Math.max(Math.abs(x - cx), Math.abs(y - cy));
    if (m > 3) return null;
    if (m === 3 || m <= 1) return 1;
    return 0;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const f =
        finder(x, y, 3, 3) ??
        finder(x, y, size - 4, 3) ??
        finder(x, y, 3, size - 4);
      if (f !== null) {
        cells.push(f);
        continue;
      }
      if (y === 6 || x === 6) {
        cells.push((x + y) % 2 === 0 ? 1 : 0);
        continue;
      }
      cells.push((x * 3 + y * 5 + x * y) % 3 === 0 ? 1 : 0);
    }
  }
  return cells;
}

const QR = buildQr();

export function EventlyPreview() {
  return (
    <div className="relative mx-auto w-full max-w-sm pb-6">
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-6 h-full rounded-2xl bg-elevated shadow-[var(--shadow-border)]"
      />
      <article className="invite-card relative rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
        <header className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">
              Evently
            </p>
            <p className="mt-3 font-display text-3xl leading-none text-fg italic">
              Noche de verano
            </p>
            <p className="mt-2 text-sm text-muted">Invitación digital</p>
          </div>
          <div className="text-right">
            <p className="font-display text-4xl leading-none text-fg">15</p>
            <p className="mt-1 font-mono text-xs tracking-widest text-subtle uppercase">
              May
            </p>
          </div>
        </header>

        <div className="flex items-end justify-between gap-4">
          <div
            className="size-24 rounded-md bg-surface p-1.5 shadow-[var(--shadow-border)] sm:size-28"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(13, minmax(0, 1fr))",
              gap: 1,
            }}
            aria-hidden="true"
          >
            {QR.map((on, i) => (
              <span
                key={i}
                className={on ? "block aspect-square bg-fg" : "block aspect-square"}
              />
            ))}
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-subtle">QR · acceso</p>
            <p className="mt-1 text-sm text-muted">Mesa 12</p>
          </div>
        </div>
      </article>
    </div>
  );
}
