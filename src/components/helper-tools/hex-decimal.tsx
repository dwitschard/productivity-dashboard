'use client';
import { FC, useState } from 'react';

const HexDecimal: FC<{}> = () => {
  const [dec, setDec] = useState('');
  const [hex, setHex] = useState('');
  const [oct, setOct] = useState('');
  const [bin, setBin] = useState('');

  function calculate(value: string, format: string): void {
    let decimal = parseInt(value).toString();
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
        <input
          type="text"
          placeholder="6872"
          className="px-2 py-3 w-full shadow-sm rounded border border-gray-300"
          value={dec}
          onChange={(e) => calculate(e.target.value, 'dec')}
        />
      </div>
      <div>
        <h3 className="text-sm leading-5 mb-1 font-medium">Hexadecimal</h3>
        <input
          type="text"
          placeholder="1ad8"
          className="px-2 py-3 w-full shadow-sm rounded border border-gray-300"
          value={hex}
          onChange={(e) => calculate(e.target.value, 'hex')}
        />
      </div>
      <div>
        <h3 className="text-sm leading-5 mb-1 font-medium">Octal</h3>
        <input
          type="text"
          placeholder="15330"
          className="px-2 py-3 w-full shadow-sm rounded border border-gray-300"
          value={oct}
          onChange={(e) => calculate(e.target.value, 'oct')}
        />
      </div>
      <div>
        <h3 className="text-sm leading-5 mb-1 font-medium">Binary</h3>
        <input
          type="text"
          placeholder="1101011011000"
          className="px-2 py-3 w-full shadow-sm rounded border border-gray-300"
          value={bin}
          onChange={(e) => calculate(e.target.value, 'bin')}
        />
      </div>
    </div>
  );
};

export default HexDecimal;
