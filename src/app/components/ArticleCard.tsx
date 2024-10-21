import { Article } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <article className='shadow my-4 flex flex-col' key={article.id}>
        <Link href={`articles/${article.id}`} className='hover:opacity-75'>
          <Image
            src='https://images.unsplash.com/photo-1728567409684-e42ba81a3c34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            width={1280}
            height={300}
          />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href='#' className='text-blue-700 pb-4 font-bold'>
            Technology
          </Link>
          <Link
            href={`articles/${article.id}`}
            className='text-slate-900 text-3xl font-bold hover:text-gray-700'
          >
            {article.title}
          </Link>
          <p className='text-sm pb-3 text-slate-900'>
            By Taiyou {new Date(article.createdAt).toLocaleString()}
          </p>
          <Link href={`articles/${article.id}`} className='text-slate-900 pb-6'>
            {article.content.length > 70
              ? article.content.substring(0, 70) + '...'
              : article.content}
          </Link>
          <Link
            href={`articles/${article.id}`}
            className='text-pink-800 hover:text-black'
          >
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
