'use client';
import { FC, useState } from 'react';
import { ButtonInputField } from '@/components/shared/button-input-field/button-input-field';

const HexDecimal: FC<{}> = () => {
  const [dec, setDec] = useState('');
  const [hex, setHex] = useState('');
  const [oct, setOct] = useState('');
  const [bin, setBin] = useState('');

  function calculate(value: string, format: string): void {
    let decimal = parseInt(value).toString();
    if (isNaN(+decimal) || !decimal) {
      decimal = '0';
    }

    switch (format) {
      case 'hex':
        decimal = parseInt(value, 16).toString();
        break;
      case 'oct':
        decimal = parseInt(value, 8).toString();
        break;
      case 'bin':
        decimal = parseInt(value, 2).toString();
        break;
    }
    setDec(decimal);
    setHex(parseInt(decimal).toString(16));
    setOct(parseInt(decimal).toString(8));
    setBin(parseInt(decimal).toString(2));
  }

  return (
    <div className="grid grid-cols-2 gap-8  w-full">
      <div>
        <h3 className="text-sm leading-5 mb-1 font-medium">Decimal</h3>
        <div className={'flex w-full relative isolate group'}>
          <input
            type="text"
            placeholder="6872"
            className="pl-2 pr-16 py-3 w-full shadow-sm rounded border border-gray-300"
            value={dec}
            onChange={(e) => calculate(e.target.value, 'dec')}
          />
          <ButtonInputField
            className={'opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300'}
            disabled={!dec}
            onCopy={() => navigator.clipboard.writeText(dec)}
          />
        </div>
      </div>
      <div>
        <h3 className="text-sm leading-5 mb-1 font-medium">Hexadecimal</h3>
        <div className="flex w-full relative isolate group">
          <input
            type="text"
            placeholder="1ad8"
            className="pl-2 pr-16 py-3 w-full shadow-sm rounded border border-gray-300"
            value={hex}
            onChange={(e) => calculate(e.target.value, 'hex')}
          />
          <ButtonInputField
            className={'opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300'}
            disabled={!hex}
            onCopy={() => navigator.clipboard.writeText(hex)}
          />
        </div>
      </div>
      <div>
        <h3 className="text-sm leading-5 mb-1 font-medium">Octal</h3>
        <div className={'flex w-full relative isolate group'}>
          <input
            type="text"
            placeholder="15330"
            className="pl-2 pr-16 py-3 w-full shadow-sm rounded border border-gray-300"
            value={oct}
            onChange={(e) => calculate(e.target.value, 'oct')}
          />
          <ButtonInputField
            className={'opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300'}
            disabled={!oct}
            onCopy={() => navigator.clipboard.writeText(oct)}
          />
        </div>
      </div>
      <div>
        <h3 className="text-sm leading-5 mb-1 font-medium">Binary</h3>
        <div className={'flex w-full relative isolate group'}>
          <input
            type="text"
            placeholder="1101011011000"
            className="pl-2 pr-16 py-3 w-full shadow-sm rounded border border-gray-300"
            value={bin}
            onChange={(e) => calculate(e.target.value, 'bin')}
          />
          <ButtonInputField
            className={'opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300'}
            disabled={!bin}
            onCopy={() => navigator.clipboard.writeText(bin)}
          />
        </div>
      </div>
    </div>
  );
};

export default HexDecimal;
