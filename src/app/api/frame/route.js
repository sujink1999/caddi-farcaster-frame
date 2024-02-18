import { NextResponse } from "next/server";
const buttonTexts = ["Security", "Alpha Sharing", "Discover", "What is it?"];
const filenames = [
  "banner.png",
  "error-reporting.gif",
  "security.gif",
  "alpha-sharing.gif",
  "discover.gif",
  "final.png",
];

async function getResponse(req) {
  const data = await req.json();

  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  let idAsNumber = parseInt(id);

  const filename = filenames[idAsNumber];
  const buttonText = buttonTexts[idAsNumber - 1];
  const buttonId = data.untrustedData.buttonIndex;
  const isFinal = buttonId === 2 || idAsNumber === 5;

  if (buttonId === 1 && idAsNumber > 3) {
    idAsNumber = 1;
  }

  if (isFinal) {
    idAsNumber = 5;
  }

  const nextId = idAsNumber + 1;

  if (isFinal) {
    return new NextResponse(`<!DOCTYPE html><html><head>
  <title>This is the final frame </title>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmd6ULUWJwLGs3VSFYgCfvGv2PYgm9bTVT3qo3cA7v4nen/${filename}" />
  <meta property="fc:frame:button:1" content="What is IYKYK?" />
  <meta property="fc:frame:button:2" content="DM @Jaimin" />
  <meta property="fc:frame:button:2:action" content="post_redirect" />
  <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
</head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQy1i7jdu525cuLt77CBZtBtXumQEWe2Kn4HnK8Nis83G/${filename}" />
    <meta property="fc:frame:button:1" content="${buttonText}" />
    <meta property="fc:frame:button:2" content="Gimme Red Packet 🧧" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    <meta property="og:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQy1i7jdu525cuLt77CBZtBtXumQEWe2Kn4HnK8Nis83G/${filename}" />
    <meta property="og:title" content="This is frame ${id}" />
  </head></html>`);
  }
}

export async function POST(req) {
  return getResponse(req);
}

export async function GET(req) {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
