'use client';
import { FC, useState } from 'react';

const HexDecimal: FC<{}> = () => {
  const [hex, setHex] = useState('');
  const [dec, setDec] = useState('');

  function calculate(hex: string, dec: string): void {
    if (!hex.match(/^(\s*|[0-9a-fA-F]+)$/) || !dec.match(/(\s*|\d+)/)) return;
    setDec(dec);
    setHex(hex);
    if (hex !== '') {
      setDec(parseInt(hex, 16).toString());
    } else if (dec !== '') {
      setHex(parseInt(dec, 10).toString(16));
    }
  }

  return (
    <div>
      <h2>Hex Decimal Converter</h2>
      <input
        type="text"
        placeholder="Hexadecimal"
        className="w-full"
        value={hex}
        onChange={(e) => calculate(e.target.value, '')}
      />
      <input
        type="text"
        placeholder="Decimal"
        className="w-full"
        value={dec}
        onChange={(e) => calculate('', e.target.value)}
      />
    </div>
  );
};

export default HexDecimal;
