import { getFrameMetadata } from "@coinbase/onchainkit";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Don't Know",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNpypEw4JnKAZF6aeinPMpLWByrdzyUdRAn4iw2nZemQT/banner.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata = {
  title: "Caddi Dragon Red Packets",
  description: "Caddi Year of the Dragon Giveaway",
  openGraph: {
    title: "Caddi Dragon Red Packets",
    description: "Caddi Year of the Dragon Giveaway",
    image: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNpypEw4JnKAZF6aeinPMpLWByrdzyUdRAn4iw2nZemQT/banner.png`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return <h1>Page 0</h1>;
}
