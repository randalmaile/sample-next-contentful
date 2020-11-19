import PostPreview from '../components/post-preview'

export default function MoreStories ({ posts }) {
  return (
    <section className='mx-8 mb-8 lg:mx-12 lg:grid lg:grid-cols-3 lg:gap-2' id='more-stories'>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </section>
  )
}
