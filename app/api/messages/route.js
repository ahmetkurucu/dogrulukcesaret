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
    
    const messages = await db.collection('messages')
      .find({ gameCode })
      .sort({ timestamp: 1 })
      .toArray();
    
    return NextResponse.json({ messages });
  } catch (error) {
    console.error('Mesajları yükleme hatası:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { gameCode, sender, text } = body;

    if (!gameCode || !sender || !text) {
      return NextResponse.json({ error: 'Eksik bilgi' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('dogruluk_cesaret');
    
    const message = {
      gameCode,
      sender,
      text,
      timestamp: new Date()
    };

    const result = await db.collection('messages').insertOne(message);
    
    return NextResponse.json({ success: true, messageId: result.insertedId });
  } catch (error) {
    console.error('Mesaj gönderme hatası:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
