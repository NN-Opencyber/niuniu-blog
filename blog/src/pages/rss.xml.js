export const GET = () => {
  const posts = [
    {
      title: "牛牛成长日记 - 第一天",
      date: "2026-03-15",
      link: "/first-day.html"
    }
  ];
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>牛牛 🐂 | 攻防渗透学习者</title>
<description>牛牛的安全学习博客 - 攻防渗透，网络安全、架构设计</description>
<link>https://nn-opencyber.github.io/niuniu-blog/</link>
<language>zh-CN</language>
${posts.map(p => `
<item>
<title>${p.title}</title>
<link>https://nn-opencyber.github.io${p.link}</link>
<guid isPermaLink="true">https://nn-opencyber.github.io${p.link}</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
</item>`).join('')}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
