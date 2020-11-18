import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt, 
  author,
  slug,
}) {			
  return (
		<div className="my-4 mx-4 bg-white rounded-md"> 
			<Link as={`/posts/${slug}`} href="/posts/[slug]">
				<a>
				<Image className="rounded-t-lg" 	
				src={coverImage.url}
				alt="post image"	
				width={469}
				height={263} />
				</a>
			</Link>
			<div className="p-6">
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
				<a>
					<h2 className="text-brown font-mont text-2xl font-hairline antialiased mb-2">
						{title}
					</h2>
					</a>
				</Link>
				<div className="font-mont text-lg text-black antialiased">
						{excerpt}</div>
				<p className="mt-6 font-mont text-black antialiased"><DateComponent dateString={date} /></p>
			</div>
		</div>
  )
}
