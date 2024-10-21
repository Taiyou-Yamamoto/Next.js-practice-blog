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

// 13だとNextApiRequestが簡素化されRequestになる
export async function GET(req: NextRequest, res: NextResponse) {
  const id = req.url.split('/blog/')[1];
  //   console.log('a');
  //   console.log(req.url);
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return NextResponse.json(error);
  }

  //   HTTP の 200 OK は成功ステータスレスポンスコード.リクエストが成功したことを示します
  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const id = req.url.split('/blog/')[1];
  //   console.log('a');
  //   console.log(req.url);
  const { error: deleteError } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (deleteError) {
    return NextResponse.json(deleteError);
  }

  //   HTTP の 200 OK は成功ステータスレスポンスコード.リクエストが成功したことを示します
  return NextResponse.json({ status: 200 });
}
