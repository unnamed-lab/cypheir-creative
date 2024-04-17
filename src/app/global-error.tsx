"use client";
import { Block } from '@/components/ui';
import errorImg from '@/assets/img/error.svg'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Block
          image={errorImg}
          title="Oops, something went wrong!"
          desc=" Our team is on it."
          backLink={false}
        />
      </body>
    </html>
  );
}
