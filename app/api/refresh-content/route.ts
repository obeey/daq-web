import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  const expected = process.env.CONTENT_REFRESH_TOKEN;

  if (expected && auth !== `Bearer ${expected}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    ok: true,
    message:
      "Connect this endpoint to a cron job or hosting scheduler. The local script scripts/refresh-content.mjs demonstrates how external DAQ news can be collected into drafts.",
    refreshedAt: new Date().toISOString(),
  });
}
