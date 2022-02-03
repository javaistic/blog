import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.png'
import { ArrowRightIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'
import tinytime from 'tinytime'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Home() {
  return (
    <>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main className=" transition-all ">
          <div className="divide-y divide-gray-200">
            <Head>
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@javaistic" />
              <meta name="twitter:creator" content="@javaistic" />
              <meta name="twitter:title" content="Blog – Javaistic" />
              <meta name="twitter:description" content="News content from the Javaistic team." />
              <meta
                name="twitter:image"
                content={`https://blog-javaistic.vercel.app${twitterCard}`}
              />
              <meta property="og:url" content="https://blog-javaistic.vercel.app" />
              <meta property="og:type" content="article" />
              <meta property="og:title" content="Blog – Javaistic" />
              <meta property="og:description" content="News content from the Javaistic team." />
              <meta
                property="og:image"
                content={`https://blog-javaistic.vercel.app${twitterCard}`}
              />
              <title>Blog – Javaistic</title>
              <meta name="description" content="News content from the Javaistic team." />
            </Head>
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-[4rem] md:leading-[3.5rem]">
                Latest
              </h1>
              <p className="text-lg text-gray-500">
                All the latest Javaistic news, straight from the team.
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {posts.map(({ link, module: { default: Component, meta } }) => {
                return (
                  <li key={link} className="py-12">
                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium text-gray-500">
                          <time dateTime={meta.date}>
                            {postDateTemplate.render(new Date(meta.date))}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <h2 className="text-2xl font-bold tracking-tight">
                            <Link href={link}>
                              <a className="text-gray-900">{meta.title}</a>
                            </Link>
                          </h2>
                          <div className="prose max-w-none text-gray-500">
                            <Component />
                          </div>
                        </div>
                        <div className="w-1/3 text-base font-semibold sm:w-1/6">
                          <Link href={link}>
                            <a
                              className="flex items-center justify-center rounded-full border bg-gray-100 px-2 py-1 text-sm text-sky-500 duration-200 ease-in-out hover:bg-gray-200 hover:text-blue-500"
                              aria-label={`Read "${meta.title}"`}
                            >
                              Read more <ArrowRightIcon className="ml-2 h-4" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        </main>
      </SectionContainer>
    </>
  )
}
