function importAll(r) {
  return r.keys().map((fileName) => ({
    link: "/p" + fileName.substr(1).replace(/\/*.mdx$/, ''),
    module: r(fileName),
  }))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export default function getAllPostPreviews() {
  return importAll(require.context('./pages/p/?preview', true, /\.mdx$/))
    .filter((p) => !p.link.includes('/snippets/'))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}

export function getAllPosts() {
  return importAll(require.context('./pages/p/?rss', true, /\.mdx$/))
    .filter((p) => !p.link.includes('/snippets/'))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}
