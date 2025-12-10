import { ReactNode } from 'react';

export default function WorkLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
}
