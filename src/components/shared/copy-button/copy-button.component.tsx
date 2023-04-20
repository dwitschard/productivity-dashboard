import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { FC, useState } from 'react';

export interface CopyButtonProps {
  onCopy: () => void;
  disabled?: boolean;
  className?: string;
}

export const CopyButton: FC<CopyButtonProps> = ({
  onCopy,
  className,
  disabled
}: CopyButtonProps) => {
  const [showCopyLabel, setShowCopyLabel] = useState(false);

  const getTextColor = (): string => {
    return disabled ? 'text-gray-400' : 'text-white';
  };

  return (
    <button
      disabled={disabled}
      className={
        className + ' disabled:bg-gray-300 bg-blue-500 hover:bg-blue-600 rounded border-0 p-2'
      }
      onClick={() => {
        onCopy();
        setShowCopyLabel(true);
        setTimeout(() => {
          setShowCopyLabel(false);
        }, 500);
      }}>
      {showCopyLabel && (
        <div className={'bg-black absolute -mt-12 -ml-5 rounded p-1 text-xs text-white'}>
          Copied!
        </div>
      )}

      <ClipboardDocumentIcon className={'w-4 h-4 text-white ' + getTextColor()} />
    </button>
  );
};
