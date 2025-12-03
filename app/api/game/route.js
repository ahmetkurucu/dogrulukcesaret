import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const gameCode = searchParams.get('gameCode');

    if (!gameCode) {
      return NextResponse.json({ error: 'Oyun kodu gerekli' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('dogruluk_cesaret');
    
    const gameState = await db.collection('games').findOne({ gameCode });
    
    return NextResponse.json({ gameState: gameState || null });
  } catch (error) {
    console.error('Oyun durumu yükleme hatası:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { gameCode, players, currentPlayerIndex } = body;

    if (!gameCode) {
      return NextResponse.json({ error: 'Oyun kodu gerekli' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('dogruluk_cesaret');
    
    const result = await db.collection('games').updateOne(
      { gameCode },
      {
        $set: {
          players,
          currentPlayerIndex,
          lastUpdate: new Date()
        }
      },
      { upsert: true }
    );
    
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Oyun durumu kaydetme hatası:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
