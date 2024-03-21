import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          <code className='font-mono font-bold text-xl'>
            STORYBOOK FOR REACT
          </code>
        </p>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            <Image
              src='/sirius-logo.svg'
              alt='Vercel Logo'
              width={150}
              height={36}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <svg
          width={300}
          viewBox='0 0 100 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          role='presentation'
          className='css-1r6i2mo e1skfx029'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M26.64 15.831a8.784 8.784 0 0 1-2.464-.344c-.79-.229-1.445-.546-1.968-.952l.8-1.776c1.088.758 2.31 1.136 3.664 1.136.704 0 1.245-.114 1.624-.344.379-.229.568-.546.568-.952 0-.362-.173-.645-.52-.848-.347-.202-.963-.4-1.848-.592-.992-.202-1.784-.448-2.376-.736-.592-.288-1.024-.642-1.296-1.064-.272-.42-.408-.94-.408-1.56 0-.682.19-1.29.568-1.824.379-.533.91-.952 1.592-1.256.683-.304 1.472-.456 2.368-.456.8 0 1.57.118 2.312.352.741.235 1.33.55 1.768.944l-.8 1.776C29.189 6.578 28.101 6.2 26.96 6.2c-.65 0-1.163.126-1.536.376-.373.251-.56.595-.56 1.032 0 .256.072.467.216.632.144.166.384.312.72.44.336.128.813.262 1.432.4 1.45.32 2.493.731 3.128 1.232.635.502.952 1.195.952 2.08 0 1.067-.41 1.907-1.232 2.52-.821.614-1.968.92-3.44.92Zm10.464-1.792c.245 0 .502-.016.768-.048l-.128 1.76a6.78 6.78 0 0 1-.928.064c-1.195 0-2.067-.261-2.616-.784-.55-.522-.824-1.317-.824-2.384V9.64h-1.488V7.831h1.488V5.527h2.416v2.304h1.968V9.64h-1.968v2.992c0 .939.438 1.408 1.312 1.408Zm5.616 1.776c-.832 0-1.563-.168-2.192-.504a3.534 3.534 0 0 1-1.456-1.424c-.341-.613-.512-1.336-.512-2.168 0-.832.17-1.554.512-2.168a3.484 3.484 0 0 1 1.456-1.416c.63-.33 1.36-.496 2.192-.496.832 0 1.563.166 2.192.496.63.331 1.115.803 1.456 1.416.341.614.512 1.336.512 2.168 0 .832-.17 1.555-.512 2.168a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504Zm0-1.84c1.173 0 1.76-.752 1.76-2.256 0-.757-.152-1.322-.456-1.696-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.504.587 2.256 1.76 2.256Zm10.848-4.351-1.36.144c-.672.064-1.146.253-1.424.567-.277.315-.416.734-.416 1.256v4.097h-2.416V7.832h2.32V9.16c.395-.907 1.21-1.403 2.448-1.488l.704-.048.144 2Zm7.02-1.777h2.368l-4.736 10.72h-2.448l1.504-3.312-3.232-7.408h2.512l1.984 4.992 2.048-4.992Zm7.968-.208c.683 0 1.285.166 1.808.496.523.331.93.803 1.224 1.416.293.614.44 1.326.44 2.136 0 .811-.147 1.529-.44 2.152-.293.624-.704 1.11-1.232 1.457a3.207 3.207 0 0 1-1.8.52 3.121 3.121 0 0 1-1.472-.345 2.45 2.45 0 0 1-1.008-.951v1.168h-2.384V4.408h2.416v4.48a2.388 2.388 0 0 1 1-.92 3.16 3.16 0 0 1 1.448-.329Zm-.704 6.337c.566 0 1.003-.2 1.312-.6.31-.4.464-.963.464-1.688 0-.715-.154-1.262-.464-1.64-.31-.38-.746-.569-1.312-.569-.565 0-1.002.195-1.312.585-.31.389-.464.94-.464 1.655 0 .726.155 1.283.464 1.673.31.389.747.584 1.312.584Zm9.424 1.84c-.832 0-1.563-.169-2.192-.505a3.535 3.535 0 0 1-1.456-1.424c-.341-.613-.512-1.336-.512-2.168 0-.832.17-1.554.512-2.168a3.484 3.484 0 0 1 1.456-1.416c.63-.33 1.36-.496 2.192-.496.832 0 1.563.166 2.192.496.63.331 1.115.803 1.456 1.416.341.614.512 1.336.512 2.168 0 .832-.17 1.555-.512 2.168a3.535 3.535 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504Zm0-1.84c1.174 0 1.76-.753 1.76-2.257 0-.757-.152-1.322-.456-1.696-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.504.587 2.256 1.76 2.256Zm9.008 1.84c-.832 0-1.563-.169-2.192-.505a3.534 3.534 0 0 1-1.456-1.424c-.341-.613-.512-1.336-.512-2.168 0-.832.17-1.554.512-2.168a3.484 3.484 0 0 1 1.456-1.416c.63-.33 1.36-.496 2.192-.496.832 0 1.563.166 2.192.496.63.331 1.115.803 1.456 1.416.341.614.512 1.336.512 2.168 0 .832-.17 1.555-.512 2.168a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504Zm0-1.84c1.173 0 1.76-.753 1.76-2.257 0-.757-.152-1.322-.456-1.696-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.504.587 2.256 1.76 2.256ZM100 15.686h-2.96l-3.008-3.503v3.504h-2.416V4.408h2.416v6.783l2.896-3.344h2.88l-3.296 3.744L100 15.689Z'
            fill='#fff'
          ></path>
          <path
            d='M.62 18.43 0 1.92A1.006 1.006 0 0 1 .944.88L14.984.002a1.005 1.005 0 0 1 1.069 1.004v17.989a1.006 1.006 0 0 1-1.051 1.004L1.58 19.396a1.006 1.006 0 0 1-.96-.967Z'
            fill='#FF4785'
          ></path>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='m13.88.071-1.932.12-.094 2.267a.15.15 0 0 0 .24.126l.88-.668.744.586a.15.15 0 0 0 .243-.123l-.08-2.308Zm-1.504 7.59c-.353.275-2.989.462-2.989.071.056-1.493-.612-1.558-.984-1.558-.352 0-.946.106-.946.906 0 .815.868 1.275 1.887 1.815 1.447.767 3.2 1.696 3.2 4.032 0 2.24-1.82 3.476-4.14 3.476-2.395 0-4.488-.969-4.252-4.328.093-.394 3.138-.3 3.138 0-.038 1.386.278 1.794 1.076 1.794.613 0 .891-.338.891-.906 0-.861-.904-1.369-1.945-1.953-1.409-.791-3.067-1.722-3.067-3.859 0-2.132 1.466-3.554 4.084-3.554 2.618 0 4.047 1.4 4.047 4.064Z'
            fill='#fff'
          ></path>
        </svg>
      </div>

      <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <a
          href='https://storybook.js.org/'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Storybook{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Frontend workshop for building UI components and pages in isolation
          </p>
        </a>

        <a
          href='https://www.chromatic.com'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Chromatic{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Cloud-based toolchain for Storybook that helps teams ship UI
            components faster.{' '}
          </p>
        </a>

        <a
          href='https://65fa591fc1956fbe99c2df9f-qteffupmtv.chromatic.com/?path=/docs/primitives-button--docs'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Chromatic Deployment{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Chromatic deployment example.
          </p>
        </a>

        <a
          href='https://fedetoledo.github.io/storybook-workshop/'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GitHub Pages Deployment{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            GitHub Pages deployment example.
          </p>
        </a>
      </div>
    </main>
  );
}
