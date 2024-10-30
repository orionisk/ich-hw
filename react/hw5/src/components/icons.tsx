interface IconProps {
  className?: string;
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 24 24'>
      <path
        fill='#ffffff'
        d='M17.05 20.28c-.98.95-2.05.88-3.08.38-1.08-.52-2.07-.53-3.2 0-1.44.71-2.2.51-3.08-.38C3.7 16.33 3.27 12.11 6.28 9.67c1.33-1.08 2.74-.9 4.1-.25 1.37-.65 2.77-.83 4.1.25 1.13.91 1.38 2.19 1.17 3.48l-4.51.02c-.08 2.32 2.04 3.04 2.04 3.04-.61 1.47-1.27 1.47-2.13 1.47z'
      />
    </svg>
  );
}

export function GoogleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 24 24'>
      <path
        fill='#ffffff'
        d='M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z'
      />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 24 24'>
      <path
        fill='#ffffff'
        d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
      />
    </svg>
  );
}
