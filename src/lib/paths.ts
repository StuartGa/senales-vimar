const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix app paths for GitHub Pages project sites. */
export function withBase(path: string) {
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.startsWith("http") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }
  return `${basePath}${path}`;
}

export { basePath };
