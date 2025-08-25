import { JSX } from 'react';

type HtmlBlockProps = {
  as?: keyof JSX.IntrinsicElements;
  content: string;
  className?: string;
};

export const HtmlBlock = ({ as: Tag = 'div', content, className }: HtmlBlockProps) => {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: content }} />;
};
