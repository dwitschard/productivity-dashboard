import News from '@/components/news/news';
import CodePlaygroundWidget from '@/components/code-playground/code-playground-widget';
import HelperTools from '@/components/helper-tools/helper-tools';
import PasteBinContainer from '@/components/paste-bin/paste-bin.container';

export default function DashboardPage() {
  return (
    <div className="py-8 px-9">
      <h1 className="text-3xl leading-9 font-bold mb-2.5">Tabsly</h1>
      <div className="grid grid-cols-2 grid-rows-2 min-h-screen gap-8">
        <News />
        <PasteBinContainer />
        <CodePlaygroundWidget />
        <HelperTools />
      </div>
    </div>
  );
}
