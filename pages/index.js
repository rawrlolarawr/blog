import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>BlogLolaBlog</title>
        <meta name="description" content="Development blog for Lola Chaison" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {posts.map((post, index) => (
          <Link href={'/' + post.slug} passHref key={index}>
            <div>
              <h5>{post.frontMatter.title}</h5>
              <p>{post.frontMatter.description}</p>
              <p>
                <small>{post.frontMatter.date}</small>
              </p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      posts
    }
  }
}
