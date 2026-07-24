import { NextRequest, NextResponse } from "next/server";
import { analyzeWebsite } from "@/lib/analyzer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: "URL is required." },
        { status: 400 }
      );
    }

    const result = await analyzeWebsite(url);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}