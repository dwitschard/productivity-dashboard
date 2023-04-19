import { PlaygroundType } from '@/components/code-playground/playground-type';

export interface PlaygroundTemplate {
  type: PlaygroundType;
  title: string;
  description: string;
}
