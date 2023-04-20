import { CopyButton } from '@/components/shared/copy-button/copy-button.component';
import { FC } from 'react';

export interface ButtonInputFieldProps {
  onCopy: () => void;
  disabled: boolean;
}
export const ButtonInputField: FC<ButtonInputFieldProps> = ({
  onCopy,
  disabled
}: ButtonInputFieldProps) => {
  return (
    <div
      className={
        'absolute right-0 top-0 h-12 flex content-center items-center w-16 justify-center'
      }>
      <CopyButton disabled={disabled} onCopy={onCopy} />
    </div>
  );
};
