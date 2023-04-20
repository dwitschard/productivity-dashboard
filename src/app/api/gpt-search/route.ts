import { NextRequest } from 'next/server';
import { AxiosResponse } from 'axios';
import { CreateChatCompletionResponse } from 'openai';

export async function POST(request: NextRequest) {
  if (!process.env.GPT_TOKEN) return new Response('No GPT Token', { status: 500 });

  const query = await request.json();
  const prompt = query.prompt;

  if (!prompt || prompt.length > 50 || prompt.length < 10)
    return new Response('Prompt should be within 10-50 characters (to save tokens :/)', {
      status: 400
    });

  const { Configuration, OpenAIApi } = require('openai');
  const configuration = new Configuration({
    apiKey: process.env.GPT_TOKEN
  });
  const openai = new OpenAIApi(configuration);
  const response: AxiosResponse<CreateChatCompletionResponse, any> =
    await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Code Assistant. Ommit imports. No Descriptions. Only return formatted code.'
        },
        { role: 'user', content: prompt }
      ]
    });

  const snippet = response.data.choices[0].message.content;

  return new Response(
    JSON.stringify(
      {
        snippet,
        totalTokens: response.data.usage?.total_tokens
      },
      null,
      2
    )
  );
}
