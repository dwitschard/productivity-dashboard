'use client';
import { FC, useState } from 'react';
import HexDecimal from './hex-decimal';
import JsonValidation from './json-validation';

const HelperTools: FC<{}> = () => {
  const [expanded, setExpanded] = useState('');
  let content = null;

  switch (expanded) {
    case 'Json':
      content = <JsonValidation />;
  }

  return (
    <div>
      <h2>Helper Tools</h2>

      {content}
      {expanded === '' && (
        <>
          <input
            type="text"
            placeholder="Search"
            className=""
            onChange={(e) => console.log(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg">
              <HexDecimal />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <JsonValidation />
              <input type="button" value="Expand" onClick={() => setExpanded('Json')} />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">Regex matcher</div>
            <div className="bg-gray-200 p-4 rounded-lg">Date lookup</div>
          </div>
        </>
      )}
    </div>
  );
};

export default HelperTools;
