export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="ClipNest logo">
      <defs>
        <linearGradient id="cn-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#833AB4" />
          <stop offset=".55" stopColor="#E1306C" />
          <stop offset="1" stopColor="#F77737" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#cn-g)" />
      <path d="M26 20v24l20-12z" fill="#fff" />
    </svg>
  );
}
