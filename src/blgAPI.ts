import { Article } from './type';

export const getAllArticle = async (): Promise<Article[]> => {
  const res = await fetch('https://localhost:3001/posts', {
    cache: 'no-store',
  });
};
