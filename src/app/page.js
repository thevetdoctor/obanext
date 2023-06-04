import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-full -mt-5"
          src="/obaa.jpeg"
          alt="Next.js Logo"
          width={380}
          height={60}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {[
            { slug: 'Github', link: 'https://github.com/thevetdoctor', tag: 'Checkout my github page.' },
          { slug: 'LinkedIn', link: 'https://www.linkedin.com/in/obafemi-oderanti/', tag: 'Checkout my LinkedIn page.' },
          { slug: 'Twitter', link: 'https://twitter.com/animalworldng', tag: 'Checkout my Twitter page.' },
        ]
          .map((fruit) => (
        <a
          key={fruit.slug}
          href={fruit.link}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {fruit.slug}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {fruit.tag}
          </p>
        </a>))}
      </div>
    </main>
  )
}
