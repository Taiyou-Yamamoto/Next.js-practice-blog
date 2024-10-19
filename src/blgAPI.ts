import { Article } from './type';

export const getAllArticle = async (): Promise<Article[]> => {
  const res = await fetch('http://localhost:3001/post', {
    cache: 'no-store',
  }); //SSR

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  const articles = await res.json();
  return articles;
};
