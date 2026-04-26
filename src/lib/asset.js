import { base } from "$app/paths";

/**
 * Build a URL to a file under /static/ that may contain spaces or other
 * characters that need URL-encoding. We encode each path segment separately
 * so that forward slashes between folders are preserved.
 */
export function asset(path) {
  if (!path) return base;
  const cleaned = path.replace(/^\/+/, "");
  const encoded = cleaned
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${base}/${encoded}`;
}
