import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=6`,
    {
      headers: {
        "X-Api-Key": process.env.NEWSAPI_KEY!,
      },
    }
  );

  const data = await res.json();

  const articles = data.articles.map((a: any) => ({
    title: a.title,
    description: a.description,
    image: a.urlToImage,
    source: a.source?.name,
    date: a.publishedAt,
  }));

  return NextResponse.json(articles);
}
