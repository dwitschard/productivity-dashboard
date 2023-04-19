import PasteBin from '@/components/paste-bin/paste-bin';
import News from '@/components/news/news';
import CodePlaygroundWidget from '@/components/code-playground/code-playground-widget';
import HelperTools from '@/components/helper-tools/helper-tools';

export default function MePage() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 min-h-screen">
      <News />
      <PasteBin />
      <CodePlaygroundWidget />
      <HelperTools />
    </div>
  );
}
