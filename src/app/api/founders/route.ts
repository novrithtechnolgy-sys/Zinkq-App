import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "founder"]{
      name,
      role,
      expect,
      summary,
      services,
      businesses[]{
        year,
        title,
        desc,
        "image": image.asset->url
      },
      facebook,
      youtube,
      linkedin,
      "image": image.asset->url
    }
  `;

  const founders = await client.fetch(query);
  return NextResponse.json(founders);
}
