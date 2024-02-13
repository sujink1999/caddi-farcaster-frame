import { getFrameMetadata } from "@coinbase/onchainkit";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNpypEw4JnKAZF6aeinPMpLWByrdzyUdRAn4iw2nZemQT/frame1.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=2`,
});

export const metadata = {
  title: "Caddi Dragon",
  description: "A frame for the caddi year of dragon",
  openGraph: {
    title: "Caddi Dragon",
    description: "A frame for the caddi year of dragon",
    image: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNpypEw4JnKAZF6aeinPMpLWByrdzyUdRAn4iw2nZemQT/frame1.png`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return <h1>Page 0</h1>;
}
