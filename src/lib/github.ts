export interface GitHubRelease {
  version: string;
  name: string;
  publishedAt: string;
  isPrerelease: boolean;
  apkDownloadUrl?: string;
  apkSizeMb?: number;
  htmlUrl: string;
}

// Resilient default fallback data so the UI remains 100% operational even if offline or GitHub rate-limits
const FALLBACK_TSROSSA_RELEASE: GitHubRelease = {
  version: "v1.4.0-BETA",
  name: "tsrossa v1.4.0-BETA — Direct-to-DAC Android Audio",
  publishedAt: "2024-03-01T00:00:00Z",
  isPrerelease: true,
  apkDownloadUrl: "https://github.com/yukaatsu/tsrossa/releases",
  apkSizeMb: 12.4,
  htmlUrl: "https://github.com/yukaatsu/tsrossa/releases",
};

/**
 * Fetch latest release from GitHub with ISR caching (1 hour) & standard vnd.github+json headers.
 * Guaranteed fallback if offline or rate limited.
 */
export async function getLatestTsrossaRelease(): Promise<GitHubRelease> {
  "use cache";
  try {
    const res = await fetch("https://api.github.com/repos/yukaatsu/tsrossa/releases/latest", {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "portfolio-web-yukaatsu",
      },
    });

    if (!res.ok) {
      // Fallback check: try array endpoint if latest is 404 or draft
      const allRes = await fetch("https://api.github.com/repos/yukaatsu/tsrossa/releases", {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-web-yukaatsu",
        },
      });

      if (!allRes.ok) return FALLBACK_TSROSSA_RELEASE;
      const data = await allRes.json();
      if (!Array.isArray(data) || data.length === 0) return FALLBACK_TSROSSA_RELEASE;

      const latest = data[0];
      const apkAsset = latest.assets?.find((a: { name?: string }) =>
        a.name?.endsWith(".apk")
      );

      return {
        version: latest.tag_name || FALLBACK_TSROSSA_RELEASE.version,
        name: latest.name || latest.tag_name || FALLBACK_TSROSSA_RELEASE.name,
        publishedAt: latest.published_at || FALLBACK_TSROSSA_RELEASE.publishedAt,
        isPrerelease: Boolean(latest.prerelease),
        apkDownloadUrl: apkAsset?.browser_download_url || FALLBACK_TSROSSA_RELEASE.apkDownloadUrl,
        apkSizeMb: apkAsset ? Math.round((apkAsset.size / (1024 * 1024)) * 10) / 10 : FALLBACK_TSROSSA_RELEASE.apkSizeMb,
        htmlUrl: latest.html_url || FALLBACK_TSROSSA_RELEASE.htmlUrl,
      };
    }

    const latest = await res.json();
    const apkAsset = latest.assets?.find((a: { name?: string }) =>
      a.name?.endsWith(".apk")
    );

    return {
      version: latest.tag_name || FALLBACK_TSROSSA_RELEASE.version,
      name: latest.name || latest.tag_name || FALLBACK_TSROSSA_RELEASE.name,
      publishedAt: latest.published_at || FALLBACK_TSROSSA_RELEASE.publishedAt,
      isPrerelease: Boolean(latest.prerelease),
      apkDownloadUrl: apkAsset?.browser_download_url || FALLBACK_TSROSSA_RELEASE.apkDownloadUrl,
      apkSizeMb: apkAsset ? Math.round((apkAsset.size / (1024 * 1024)) * 10) / 10 : FALLBACK_TSROSSA_RELEASE.apkSizeMb,
      htmlUrl: latest.html_url || FALLBACK_TSROSSA_RELEASE.htmlUrl,
    };
  } catch {
    return FALLBACK_TSROSSA_RELEASE;
  }
}
