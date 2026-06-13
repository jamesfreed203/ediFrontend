import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://localhost:8080/api/v1/plans', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.NEXT_PUBLIC_API_AUTH_TOKEN
      },
      cache: 'no-store',
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.data);
    return NextResponse.json(data.data);
  } catch (error) {
    console.error('Error fetching plans from external API:', error);
    
    return NextResponse.json({});
  }
}