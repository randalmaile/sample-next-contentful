import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import PostBody from '../components/post-body'


const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
	slug,
	content
}) => {

  return (
    <div className="mx-4 mb-4 mt-8 z-0 lg:mx-32 ">
      <div className=" bg-white rounded-md lg:flex md:flex-none">
        <div className="flex-1">
					<Link as={`/posts/${slug}`} href="/posts/[slug]">
								<a className="hover:underline">
									<Image
										src="/logo.png"
										alt="Sharp Logo"	
										width={110}
										height={35}
										layout='intrinsic'
									/>		
								</a>
					</Link>
        </div>
        <div className="flex-1 p-4">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a className="hover:underline">
            <h2 className="text-brown font-mont text-2xl lg:text-4xl font-hairline antialiased mb-2">
              {title}
            </h2>
						</a>
          </Link>
					<PostBody content={content} />
          <DateComponent dateString={date} />
        </div>
      </div>
    </div>
  )
}

export default HeroPost
