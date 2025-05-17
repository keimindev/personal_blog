import Image from './Image'
import Link from './Link'
import SocialIcon from './social-icons'
import TechStackIcon from './stack-icons'

const Card = ({ title, description, imgSrc, href, github, stack }) => (
  <div
    className={`${
      imgSrc && 'h-full'
    }  hover: group relative w-full overflow-hidden rounded-[30px] border shadow-md dark:border-gray-700`}
  >
    {imgSrc &&
      (href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={640}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
      ))}
    <div className="p-6">
      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
        {href ? (
          <Link
            href={href}
            aria-label={`Link to ${title}`}
            className="relative inline-block font-medium text-gray-900 before:absolute
    before:bottom-0.5 before:left-0 before:-z-10 before:h-[16px]
    before:w-full before:origin-left before:scale-x-0
    before:rounded-sm before:bg-primary-400 before:opacity-70 before:transition-transform
    before:duration-300 hover:before:scale-x-100"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
      <div className="flex justify-between">
        <div className="flex flex-wrap items-center justify-between">
          {github && (
            <>
              <SocialIcon kind="github" href={github} size={5} />
            </>
          )}
        </div>
        {stack?.length > 0 && (
          <div className="flex">
            {stack.map((kind) => (
              <div key={kind} className="mr-1">
                <TechStackIcon size={5} kind={kind} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
)
export default Card
