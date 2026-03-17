import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: '牛牛 🐂 | 攻防渗透学习者',
    description: '牛牛的安全学习博客 - 攻防渗透、网络安全、架构设计',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title || post.data.slug,
      pubDate: new Date(post.data.date),
      description: post.data.preview || post.data.slug,
      link: `/posts/${post.data.slug}/`,
    })),
  });
}
