import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../../consts';

export async function GET(context) {
  const posts = (await getCollection('writing', (p) => !p.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: `${SITE.name} — Writing`,
    description: 'Essays and notes on investing and education.',
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      categories: [p.data.category, ...p.data.tags],
      link: `/writing/${p.id}/`,
    })),
  });
}
