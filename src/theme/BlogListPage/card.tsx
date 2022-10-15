import React from "react";

import type { FrontMatter } from "@theme/BlogPostPage";
import type { Content } from "@theme/BlogPostPage";
import type { Tag, TagModule } from "@docusaurus/utils";
import type { Author } from "@docusaurus/plugin-content-blog";

type Props = {
  content: Omit<Content, "children">;
  tag?: TagModule;
};

export const Cards = ({ tag, content }: Props) => {
  const tags: Tag[] = !!tag ? [tag] : content.metadata.tags ?? [];
  const frontMatter: FrontMatter = content.frontMatter;

  // Todo remove '/docs' after blog migration
  const imageUrl = "/docs/" + frontMatter.image;
  // console.log(tags, { ...content });
  const autor: Author = content.metadata.authors[0];

  return (
    <>
      <a href={content.metadata.permalink} className="blog-card">
        <img src={imageUrl} alt={frontMatter.title} />
        <div className="blog-card-footer">
          <div>
            <span>{tags.map((tag) => tag.label).join(", ")}</span>
            <div>{frontMatter.title}</div>
          </div>

          <div>
            <div>
              <img src={content.assets.authorsImageUrls[0]} alt="Avatar" />
              <div>
                <div>{autor.name}</div>
                <div>
                  {content.metadata.formattedDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
