import { useEffect, useState } from "react"

type Props = {
  sectionRefs: React.RefObject<HTMLDivElement | null>[]
}

export default function ScrollIndicator({ sectionRefs }: Props) {

  const [active, setActive] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const middle = window.innerHeight / 2

      sectionRefs.forEach((ref, i) => {
        const el = ref.current
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (rect.top <= middle && rect.bottom >= middle) {
          setActive(i)
        }
      })

    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)

  }, [sectionRefs])

  return (
    <div className="fixed top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">

      {sectionRefs.map((_, i) => (
        <div
    key={i}
    className={`w-12 h-12 flex items-center justify-center rounded-full ${
        active === i
          ? "bg-green-200"
          : "bg-(--dot-out)"
      } transition-all duration-300`}
  >
    <div
      className={`w-4 h-4 rounded-full transition-all duration-300
      ${
        active === i
          ? "bg-green-400"
          : "bg-(--dot-in)"
      }`}
    />
  </div>
      ))}

    </div>
  )
}