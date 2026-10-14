import { getLatestTsrossaRelease } from "@/lib/github";
import { PortfolioClient } from "@/components/PortfolioClient";

export default async function Home() {
  const latestRelease = await getLatestTsrossaRelease();

  return <PortfolioClient initialRelease={latestRelease} />;
}
