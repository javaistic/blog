import Header, { JavaisticMark } from '@/components/Header'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import smallCard from '@/img/twitter-card-small.png'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import tinytime from 'tinytime'

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

export default function Post({ meta, children, posts }) {
  const router = useRouter()

  if (meta.private) {
    return (
      <>
        <SectionContainer>
          <main>
            <article className="py-16">
              <Head>
                <title>{meta.title} – Javaistic</title>
                <meta name="twitter:site" content="@javaistic" />
                <meta name="twitter:creator" content="@javaistic" />
                <meta name="twitter:title" content={`${meta.title} – Javaistic`} />
                <meta name="twitter:description" content={meta.description} />
                {meta.image ? (
                  <>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                      name="twitter:image"
                      content={`https://blog-javaistic.vercel.app${meta.image}`}
                    />
                  </>
                ) : (
                  <>
                    <meta name="twitter:card" content="summary" />
                    <meta
                      name="twitter:image"
                      content={`https://blog-javaistic.vercel.app${smallCard}`}
                    />
                  </>
                )}
                <meta
                  property="og:url"
                  content={`https://blog-javaistic.vercel.app${router.pathname}`}
                />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${meta.title} – Javaistic`} />
                <meta property="og:description" content={meta.description} />
                <meta
                  property="og:image"
                  content={`https://blog-javaistic.vercel.app${meta.image}`}
                />
                <meta name="description" content={meta.description}></meta>
              </Head>
              <header className="">
                <div className="text-center">
                  <div className="flex justify-center">
                    <Link href="/">
                      <a className="inline-flex">
                        <span className="sr-only">All posts</span>
                        <JavaisticMark className="h-12 w-12" />
                      </a>
                    </Link>
                  </div>
                  <dl className="mt-4 space-y-10">
                    <div>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium text-gray-500">
                        <time dateTime={meta.date}>
                          {postDateTemplate.render(new Date(meta.date))}
                        </time>
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-1">
                    <h1 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                      {meta.title.replace(/ ([^ ]+)$/, '\u00A0$1')}
                    </h1>
                  </div>
                  <dl className="mt-4">
                    <dt className="sr-only">Authors</dt>
                    <dd>
                      <ul className="flex items-center justify-center">
                        {meta.authors.map((author) => (
                          <li key={author.twitter} className="flex items-center space-x-2">
                            <Image
                              src={author.avatar}
                              alt={author.name}
                              height={60}
                              width={60}
                              className="h-8 w-8 rounded-full"
                              placeholder="blur"
                              blurDataURL={author.avatar}
                              loading="lazy"
                            />
                            <dl className="whitespace-no-wrap text-sm font-medium">
                              <dt className="sr-only">Name</dt>
                              <dd className="font-bold text-gray-900">{author.name}</dd>
                            </dl>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </dl>
                </div>
              </header>
              <div className="mt-12">
                <div className="prose mx-auto">
                  <MDXProvider>{children}</MDXProvider>
                </div>
              </div>
            </article>
          </main>
        </SectionContainer>
      </>
    )
  }

  const postIndex = posts.findIndex((post) => post.link === router.pathname)
  const previous = posts[postIndex + 1]
  const next = posts[postIndex - 1]

  return (
    <>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <article className="xl:divide-y xl:divide-gray-200">
            <Head>
              <title>{meta.title} – Javaistic</title>
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@javaistic" />
              <meta name="twitter:creator" content="@javaistic" />
              <meta name="twitter:title" content={`${meta.title} – Javaistic`} />
              <meta name="twitter:description" content={meta.description} />
              <meta
                name="twitter:image"
                content={`https://blog-javaistic.vercel.app${meta.image}`}
              />
              <meta
                property="og:url"
                content={`https://blog-javaistic.vercel.app${router.pathname}`}
              />
              <meta property="og:type" content="article" />
              <meta property="og:title" content={`${meta.title} – Javaistic`} />
              <meta property="og:description" content={meta.description} />
              <meta
                property="og:image"
                content={`https://blog-javaistic.vercel.app${meta.image}`}
              />
              <meta name="description" content={meta.description}></meta>
            </Head>
            <header className="pt-6 xl:pb-10">
              <div className="space-y-1 text-center">
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500">
                      <time dateTime={meta.date}>
                        {postDateTemplate.render(new Date(meta.date))}
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <PageTitle>{meta.title}</PageTitle>
                </div>
              </div>
            </header>
            <div
              className="divide-y divide-gray-200 pb-16 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 xl:pb-20"
              style={{ gridTemplateRows: 'auto 1fr' }}
            >
              <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                    {meta.authors.map((author) => (
                      <li key={author.twitter} className="flex items-center space-x-2">
                        <Image
                          src={author.avatar}
                          alt={author.name}
                          height={60}
                          width={60}
                          className="h-10 w-10 rounded-full"
                          placeholder="blur"
                          blurDataURL={author.avatar}
                          loading="lazy"
                        />
                        <dl className="whitespace-no-wrap text-sm font-medium">
                          <dt className="sr-only">Name</dt>
                          <dd className="font-bold text-gray-900">{author.name}</dd>
                          <dt className="sr-only">Twitter</dt>
                          <dd>
                            <a
                              href={`https://twitter.com/${author.twitter}`}
                              className="text-sky-500 hover:text-blue-500"
                            >
                              @{author.twitter}
                            </a>
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
              <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div className="max-w-none pt-10 pb-8">
                  <MDXProvider>{children}</MDXProvider>
                </div>
                {meta.footer && (
                  <div className="pt-6 pb-16" dangerouslySetInnerHTML={{ __html: meta.footer }} />
                )}
                {!meta.footer && meta.discussion && (
                  <div className="pt-6 pb-16">
                    <p>
                      Want to talk about this post?{' '}
                      <a
                        href={meta.discussion}
                        className="flex items-center font-medium text-sky-500 hover:text-blue-500"
                      >
                        Discuss this on GitHub <ArrowRightIcon className="ml-2 h-4" />
                      </a>
                    </p>
                  </div>
                )}
              </div>
              <footer className="divide-y divide-gray-200 text-sm font-medium xl:col-start-1 xl:row-start-2">
                {(next || previous) && (
                  <div className="space-y-8 py-8">
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase leading-5 tracking-wide text-gray-500">
                          Next Article
                        </h2>
                        <div className="text-sky-500 hover:text-blue-500">
                          <Link href={next.link}>
                            <a>{next.title}</a>
                          </Link>
                        </div>
                      </div>
                    )}
                    {previous && (
                      <div>
                        <h2 className="text-xs uppercase leading-5 tracking-wide text-gray-500">
                          Previous Article
                        </h2>
                        <div className="text-sky-500 hover:text-blue-500">
                          <Link href={previous.link}>
                            <a>{previous.title}</a>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="w-2/3 pt-8">
                  <Link href="/">
                    <a className="flex items-center justify-center rounded-full border bg-gray-100 px-2 py-1 text-sky-500 duration-200 ease-in-out hover:bg-gray-200 hover:text-blue-500">
                      <ArrowLeftIcon className="mr-2 h-4" /> Back to the blog
                    </a>
                  </Link>
                </div>
              </footer>
            </div>
          </article>
        </main>
      </SectionContainer>
    </>
  )
}
