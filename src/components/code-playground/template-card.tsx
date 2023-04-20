import Link from 'next/link';
import { PlaygroundTemplate } from '@/components/code-playground/playground-template';
import Image from 'next/image';

interface TemplateCardProps {
  playgroundTemplate: PlaygroundTemplate;
}

const TemplateCard = (props: TemplateCardProps) => {
  const { playgroundTemplate } = props;

  return (
    <>
      <Link
        href={{ pathname: '/code-playground', query: { playgroundType: playgroundTemplate.type } }}
        className="py-5 px-6 bg-gray-200 rounded-md flex flex-row gap-2.5">
        <div className={'flex flex-0 flex-row items-center justify-center'}>
          <Image
            src={`/playground-images/${playgroundTemplate.type}.svg`}
            alt={playgroundTemplate.type}
            className={'h-full w-10'}
            width="20"
            height="20"
          />
        </div>
        <div className={'flex flex-col text-sm leading-5 '}>
          <span className={'font-bold'}>{playgroundTemplate.title}</span>
          <span className={'font-normal'}>{playgroundTemplate.description}</span>
        </div>
      </Link>
    </>
  );
};

export default TemplateCard;
