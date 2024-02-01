import { ReactNode, useEffect, useState } from 'react';

import { z } from 'zod';

import BlogPosts, { BlogPost } from './components/BlogPosts.tsx';
import { get } from './util/http.ts';
import fetchingImg from './assets/data-fetching.png';

// type RawDataBlogPost = {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// };

const rawDataBlogPostSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string(),
});

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [error, setError] = useState<Error>();
  const [isFetching, setIsFetching] = useState<boolean>();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);

      const data = await get(
        'https://jsonplaceholder.typicode.com/posts',
        z.array(rawDataBlogPostSchema)
      );

      const blogPosts: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });

      setFetchedPosts(blogPosts);

      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (isFetching) {
    content = <p>Now is loading...</p>;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img
        src={fetchingImg}
        alt='An abstract image depicting a data fetching process.'
      />
      {content}
    </main>
  );
}

export default App;
