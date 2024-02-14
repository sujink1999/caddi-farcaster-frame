import { NextResponse } from "next/server";

async function getResponse(req) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const idAsNumber = parseInt(id);
  const nextId = id + 1;

  if (idAsNumber === 4) {
    return new NextResponse(`<!DOCTYPE html><html><head>
  <title>This is frame 7</title>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qme4FXhoxHHfyzTfRxSpASbMF8kajLEPkRQWhwWu9pkUjm/frame4.png" />
  <meta property="fc:frame:button:1" content="Cosmic Cowboys" />
  <meta property="fc:frame:button:1:action" content="post_redirect" />
  <meta property="fc:frame:button:2" content="Blog post Tutorial" />
  <meta property="fc:frame:button:2:action" content="post_redirect" />
  <meta property="fc:frame:button:3" content="Video Tutorial" />
  <meta property="fc:frame:button:3:action" content="post_redirect" />
  <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
</head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNpypEw4JnKAZF6aeinPMpLWByrdzyUdRAn4iw2nZemQT/frame${id}.png" />
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
