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

const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [error, setError] = useState<Error>();
  const [isFetching, setIsFetching] = useState<boolean>();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await get('https://jsonplaceholder.typicode.com/posts');
        const parsedData = expectedResponseDataSchema.parse(data);

        const blogPosts: BlogPost[] = parsedData.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });

        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
        setError('Failed to fetch posts!');
      }
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

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
