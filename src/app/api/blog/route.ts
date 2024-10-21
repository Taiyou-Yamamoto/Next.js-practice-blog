import { supabase } from '@/utils/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//     const { data, error } = await supabase.from('posts').select('*');

//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }

//     return res.status(200).json(data);
//   }

export async function GET(req: NextRequest, res: NextResponse) {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    return NextResponse.json(error);
  }

  //   HTTP の 200 OK は成功ステータスレスポンスコード.リクエストが成功したことを示します
  return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
  // req.bodyはNextApiRequestの時だけ
  //   const { id, title, content } = req.body;

  //   Requestは.jsonで.bodyのように書ける
  const { id, title, content } = await req.json();

  const { data, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json(error);
  }
  //   HTTP の 201 Created 成功ステータスレスポンスコードは、リクエストが成功してリソースの作成が完了したことを表します
  return NextResponse.json(data, { status: 201 });
}
