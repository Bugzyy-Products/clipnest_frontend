export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Reelorca logo">
      <defs>
        <linearGradient id="ro-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#833AB4" />
          <stop offset=".55" stopColor="#E1306C" />
          <stop offset="1" stopColor="#F77737" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#ro-g)" />
      <path
        fill="#1A1026"
        d="M59 37C59 30 52 25 42 24C40 18 37 12 32 8C30 7 29 8 29.5 10C30.5 15 30.5 20 29.5 25C22 27 15 30 11 33L4 28C4 32 6 35 8 37C6 39 4 42 4 46L11 41C20 45 36 48 48 46C55 44 59 41 59 37Z"
      />
      <ellipse cx="45.5" cy="31.5" rx="4.6" ry="2.2" transform="rotate(-10 45.5 31.5)" fill="#fff" />
      <path fill="#fff" d="M58.5 39C56 43 50 45.5 42 45.5C36 45.5 30 44 25 42C31 40.5 38 40 44 39.5C50 39 55 38.5 58.5 39Z" />
    </svg>
  );
}
