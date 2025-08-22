import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      {title && <h3 className="mb-2 font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
