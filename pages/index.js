import Container from '../components/container'
import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import HeroPost from '../components/hero-post-new'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
							excerpt={heroPost.excerpt}
							content={heroPost.content}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}


{/* <div>
<NewHero />
<div className="mx-8 lg:mx-4">
	<FirstPost key={posts[0].id} post={posts[0]} />
</div>
<div className="mx-8 mb-8 lg:mx-32 lg:grid lg:grid-cols-3 lg:gap-2">
	{chunk(posts.slice(1, postsToShow), 4).map((chunk, i) => {
		return (
			<>
				{chunk.map((node) => (
					<PostListings key={node.id} post={node} />
				))}
			</>
		)
	})}
</div>
{!showingMore && (
	<div className="text-center mt-8 mb-10 ">
		<button
			className="text-white bg-darkPurple py-2 px-24 rounded-md"
			onClick={() => {
				setpostsToShow(postsToShow + 6)
				setshowingMore(true)
			}}
		>
			Load More
		</button>
	</div>
)}
</div> */}
