type Props = {
  title: string
  description: string
  date: string
  link: string
}

export default function BlogItem({ title, description, date, link }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-14 group"
    >
      <h2 className="text-3xl font-semibold text-[var(--nav-active)] group-hover:underline">
        {title}
      </h2>

      <p className="text-lg text-[var(--text-main)] mt-3 max-w-3xl">
        {description}
      </p>

      <p className="text-sm text-[var(--text-main)] mt-4">{date}</p>
    </a>
  )
}