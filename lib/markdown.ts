import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/letters");

export function getPostSummaries() {
  const fileNames = fs.readdirSync(contentDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as {
        title: string;
        date: string;
        description: string;
        image: string;
      }),
    };
  });

  return posts;
}

export function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      content: matterResult.content,
      frontmatter: matterResult.data,
    };
  } catch (err) {
    console.error(`Post not found: ${slug}`, err);
    return null;
  }
}
