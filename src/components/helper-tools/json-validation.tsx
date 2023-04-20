'use client';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { FC, useState } from 'react';

const JsonValidation: FC<{}> = () => {
  const [message, setMessage] = useState('Paste or type your json in the box below');
  const [valid, setValid] = useState(true);

  function validate(json: string): void {
    let position = 1;
    let lines = 1;
    let isValid = true;
    try {
      JSON.parse(json);
      setMessage('Your json is valid. Good job!');
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
          lineNumber.value += '❌';
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

  function copyToClipboard(): void {
    const textArea = document.querySelector('textarea.code') as HTMLTextAreaElement;
    var text = textArea.value;
    navigator.clipboard.writeText(text);
  }

  return (
    <>
      <div className={'w-full flex ' + (valid ? 'bg-green-100' : 'bg-red-100')}>
        <div className="w-8 m-5 float-left">
          {valid ? (
            <CheckCircleIcon className="text-green-700" />
          ) : (
            <ExclamationCircleIcon className="text-red-700" />
          )}
        </div>
        <div className="w-full m-auto float-left">
          <h3 className="text-sm leading-5 font-bold">
            {valid ? 'Valid Json' : 'Validation Error'}
          </h3>
          <p className="text-sm leading-5">{message}</p>
        </div>
      </div>
      <div className="editor w-full relative">
        <textarea
          cols={5}
          rows={10}
          readOnly
          value={1}
          className="line-numbers w-1/6 float-left pr-1 resize-none overflow-hidden text-right outline-none rounded-l bg-gray-700 text-gray-200"></textarea>
        <textarea
          wrap="off"
          onChange={(e) => validate(e.target.value)}
          onScroll={() => scrollLineNumbers()}
          className="code w-5/6 h-60 pl-1 resize-none overflow-x-auto overflow-y-scroll border rounded-r border-gray-300"></textarea>

        <button
          className="w-10 p-1 absolute bottom-3 right-6 rounded bg-indigo-500 hover:bg-indigo-600 text-white"
          onClick={() => copyToClipboard()}>
          <ClipboardDocumentIcon />
        </button>
      </div>
    </>
  );
};

export default JsonValidation;
