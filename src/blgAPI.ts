import { notFound } from 'next/navigation';
import { Article } from './type';

export const getAllArticle = async (): Promise<Article[]> => {
  const res = await fetch('http://localhost:3001/post', {
    cache: 'no-store',
  }); //SSR

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await res.json();
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/post/${id}`, {
    next: { revalidate: 600 },
  }); //ISR

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const article = await res.json();
  return article;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDatetime = new Date().toISOString();

  const res = await fetch(`http://localhost:3001/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, title, content, createAt: currentDatetime }),
  }); //ISR

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newarticle = await res.json();
  return newarticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/post/${id}`, {
    method: 'DELETE',
  }); //ISR

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const deleteArticle = await res.json();
  return deleteArticle;
};
