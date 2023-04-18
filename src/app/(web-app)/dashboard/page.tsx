import PasteBin from '@/components/paste-bin/paste-bin';
import News from '@/components/news/news';
import CodePlayground from '@/components/code-playground/code-playground';
import Helpers from '@/components/helpers/helpers';

export default function MePage() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 min-h-screen">
      <News />
      <PasteBin />
      <CodePlayground />
      <Helpers />
    </div>
  );
}
