'use client';
import { FC, useState } from 'react';

const JsonValidation: FC<{}> = () => {
  const [message, setMessage] = useState('');
  const [valid, setValid] = useState(true);

  function validate(json: string): void {
    let position = 1;
    let lines = 1;
    let isValid = true;
    try {
      JSON.parse(json);
      setMessage('Valid JSON');
    } catch (e: any) {
      position = e.message.match(/position (\d+)/)?.[1] ?? 1;
      let lineFound = false;
      json.split('\n').forEach((line, index) => {
        if (position > line.length + 1 && !lineFound) {
          position -= line.length + 1;
          lines++;
        } else {
          lineFound = true;
        }
      });
      console.log(position, lines);
      let message = e.message.replace(/at position \d+/, ' on line ' + lines + ':' + position);
      setMessage(message);
      isValid = false;
    }

    const lineNumber = document.querySelector('textarea.line-numbers') as HTMLTextAreaElement;

    if (lineNumber) {
      lineNumber.value = '';
      json.split('\n').forEach((line, index) => {
        if (lines == index + 1 && !isValid) {
          lineNumber.value += '❌  ';
        }
        lineNumber.value += index + 1 + '\n';
      });
    }
    scrollLineNumbers();

    setValid(isValid);
  }

  function scrollLineNumbers(): void {
    const lineNumber = document.querySelector('textarea.line-numbers') as HTMLTextAreaElement;
    const textArea = document.querySelector('textarea.code') as HTMLTextAreaElement;
    if (lineNumber && textArea) {
      lineNumber.scrollTop = textArea.scrollTop;
    }
  }

  return (
    <div>
      <h2>JSON Validation</h2>
      <p>
        {message}
        {valid ? '✓' : '❌'}
      </p>
      <div className="editor">
        <textarea
          cols={3}
          rows={10}
          readOnly
          value={1}
          className="line-numbers w-auto float-left resize-none overflow-hidden text-right outline-none bg-gray-600 text-gray-100"></textarea>
        <textarea
          rows={9}
          wrap="off"
          onChange={(e) => validate(e.target.value)}
          onScroll={() => scrollLineNumbers()}
          className="code float-left w-auto h-60 resize-none overflow-x-auto"></textarea>
      </div>
      <input
        type="button"
        className="w-full"
        value="Copy"
        onClick={(e) => console.log('clicked')}
      />
    </div>
  );
};

export default JsonValidation;
