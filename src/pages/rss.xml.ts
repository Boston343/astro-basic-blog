import rss from "@astrojs/rss";
import { getCollection, CollectionEntry } from "astro:content";

import { formatBlogPosts } from "../js/utils";

const postImportResults = await getCollection("blog");
const posts: CollectionEntry<"blog">[] = formatBlogPosts(postImportResults);

export async function get(context) {
  // const blog = await getCollection("blog");
  return rss({
    // ex. use your stylesheet from "public/rss/styles.xsl"
    stylesheet: "/rss/styles.xsl",
    title: "Web Reaper's Blog",
    description: "A website developer's journey",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      // pubDate:
      description: post.data.description,
      // author: post.data.author,
      // custom data example, define in XML tags
      customData: `
        <author>${post.data.author}</author>
      `,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}
