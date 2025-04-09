import { type ReactNode } from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import type BlogPostItemType from "@theme/BlogPostItem";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import { type WrapperProps } from "@docusaurus/types";

import Comments from "@site/src/components/Comments";

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): ReactNode {
  const { isBlogPostPage } = useBlogPost();

  return (
    <>
      <BlogPostItem {...props} />

      {isBlogPostPage && (
        <div className="margin-top--xl margin-bottom--lg">
          <Comments />
        </div>
      )}
    </>
  );
}
