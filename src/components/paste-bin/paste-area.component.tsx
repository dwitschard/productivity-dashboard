import { useState } from 'react';

export interface PasteAreaProps {
  onSubmitHandler: (input: string) => void;
}

export const PasteAreaComponent: React.FC<PasteAreaProps> = ({
  onSubmitHandler
}: PasteAreaProps) => {
  const [text, setText] = useState<string>('');

  return (
    <form className="flex flex-col gap-3">
      <textarea
        id="message"
        name="message"
        placeholder={'Write or paste from Clipboard (ctrl-v)'}
        className="overflow-hidden py-1 px-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 leading-6 transition-colors duration-200 ease-in-out"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value ?? '')
        }></textarea>

      <button
        type={'submit'}
        onClick={() => {
          onSubmitHandler(text);
          setText('');
        }}
        className="self-end text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Apply
      </button>
    </form>
  );
};
