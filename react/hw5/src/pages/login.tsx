import { Button } from '@/components/ui/button';
import { SpotifyLogo } from '@/components/spotify-logo';
import AppleIcon from '@/assets/apple.svg?react';
import GoogleIcon from '@/assets/google.svg?react';
import XIcon from '@/assets/x.svg?react';

export function LoginPage() {
  return (
    <div className='min-h-screen flex flex-col items-center p-4 sm:p-8 container mx-auto'>
      <SpotifyLogo className='size-24 sm:size-36 text-[#1ED760] md:self-start' />

      <h1 className='text-3xl sm:text-5xl md:text-[64px]/tight pt-8 sm:pt-14 pb-4 sm:pb-7 font-bold text-[#1ED760] text-center md:text-left'>
        LIFE IS WASTED ON THE LIVING
      </h1>

      <div className='text-center mb-4 sm:mb-9 leading-tight'>
        <p className='text-2xl sm:text-3xl md:text-[32px] font-bold text-[#1ED760]'>
          Sign in
        </p>
        <p className='text-2xl sm:text-3xl md:text-[32px] font-bold text-[#1ED760]'>
          with
        </p>
      </div>
      <div className='flex gap-3 sm:gap-5 border-2 border-[#1ED760] p-2 text-[#1ED760] rounded-[65px] p-4 sm:p-8 px-8 sm:px-14'>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <AppleIcon className='size-16 sm:size-20 md:size-24' />
        </Button>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <GoogleIcon className='size-16 sm:size-20 md:size-24' />
        </Button>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <XIcon className='size-[64px] sm:size-[84px] md:size-[102px]' />
        </Button>
      </div>
    </div>
  );
}
