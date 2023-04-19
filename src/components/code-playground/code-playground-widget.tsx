import { FC } from 'react';
import Link from 'next/link';
import { PlaygroundType } from '@/components/code-playground/playground-type';

const directLinks: PlaygroundType[] = [
  'node',
  'nextjs',
  'react-ts',
  'angular',
  'vue',
  'js',
  'typescript',
  'rxjs',
  'web-platform'
];
const CodePlaygroundWidget: FC<{}> = () => {
  return (
    <div className={'rounded-md bg-white'}>
      <div>Code Playground</div>
      {directLinks.map((type) => (
        <>
          <Link
            href={{ pathname: '/code-playground', query: { playgroundType: type } }}
            className="link">
            {type.toLocaleUpperCase()}
          </Link>
        </>
      ))}
    </div>
  );
};

export default CodePlaygroundWidget;
