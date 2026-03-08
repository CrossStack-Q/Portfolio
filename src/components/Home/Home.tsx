import { useRef } from "react"
import indiamart from "/IndiaMart.svg"
import ScrollIndicator from "./ScrollIndicator"
// https://hashnode.com/@ParasharI
const sections = [
  {
    title: "I work as a software engineer",
    media: <img src={indiamart} className="w-40 md:w-48 lg:w-60" />
  },
  {
    title: "Software Intern",
    media: <div className="w-44 md:w-52 lg:w-60"><svg viewBox="0 0 82 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.5874 14.8605C66.5874 11.2271 68.8867 8.67158 72.1571 8.67158C75.4276 8.67158 77.7635 11.2256 77.7635 14.8605C77.7635 18.4955 75.4281 20.9048 72.1571 20.9048C68.8862 20.9048 66.5874 18.3855 66.5874 14.8605ZM63.1734 14.8605C63.1734 20.2218 66.9107 24 72.1566 24C77.4026 24 81.1765 20.2218 81.1765 14.8605C81.1765 9.49929 77.4392 5.57786 72.1566 5.57786C66.874 5.57786 63.1734 9.42843 63.1734 14.8605ZM45.7446 5.79345L52.7884 23.7834H56.095L63.1383 5.79345H59.5808L54.4778 19.6821H54.4056L49.3026 5.79345H45.7446ZM32.053 14.2122C32.2683 10.9014 34.4607 8.67158 37.4435 8.67158C40.0304 8.67158 41.9712 10.327 42.2588 12.8101H36.2931C34.1731 12.8101 33.0227 13.0619 32.1614 14.2138H32.053V14.2122ZM28.6395 14.752C28.6395 20.1132 32.4129 23.9985 37.6227 23.9985C41.1446 23.9985 44.2344 22.1999 45.5639 19.3564L42.6895 17.9166C41.6836 19.7876 39.7428 20.9033 37.6227 20.9033C35.0705 20.9033 32.7712 18.9599 32.7712 17.0889C32.7712 16.1179 33.4182 15.6852 34.3522 15.6852H45.7431V14.7143C45.7431 9.31686 42.2935 5.57484 37.3351 5.57484C32.3767 5.57484 28.639 9.42541 28.639 14.7505M18.8653 23.7814H22.0996V12.7372C22.0996 10.3627 23.5722 8.67108 25.6215 8.67108C26.4843 8.67108 27.3817 8.95904 27.8139 9.35405C28.1376 8.49016 28.6405 7.62778 29.3949 6.76388C28.5321 6.04473 27.0595 5.57584 25.6215 5.57584C21.669 5.57584 18.8653 8.52634 18.8653 12.7357V23.7824V23.7814ZM3.23431 11.8744V3.09373H8.55255C10.3489 3.09373 11.5354 4.13703 11.5354 5.72008C11.5354 7.51872 9.99052 8.88617 6.82849 9.92948C4.67228 10.6124 3.70259 11.1884 3.34272 11.8729L3.23431 11.8744ZM3.23431 20.6897V17.02C3.23431 15.4008 4.60001 13.8177 6.50476 13.2056C8.19419 12.6297 9.59452 12.0538 10.781 11.4432C12.362 12.3794 13.3317 13.9972 13.3317 15.6888C13.3317 18.5669 10.6003 20.6897 6.89926 20.6897H3.23431ZM0 23.7834H7.18685C12.6496 23.7834 16.7452 20.3655 16.7452 15.832C16.7452 13.3489 15.4879 11.119 13.2595 9.6792C14.4098 8.52735 14.9489 7.19608 14.9489 5.57685C14.9489 2.23134 12.5412 0 8.91242 0H0V23.7834Z" fill="#0B996E"></path></svg></div>
  },
  {
    title: <div>I write stuff sometimes <span className={`text-[#74C0FC] cursor-pointer hover:text-blue-500`} > HashNode</span></div>,
    media: <div className="w-32 md:w-36 lg:w-40">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(116, 192, 252)" d="M99.7 235.1C52.8 281.1 52.8 358 99.7 404.9L235.6 540.8C281.6 587.7 358.5 587.7 405.4 540.8L541.3 404.9C588.2 358 588.2 281.1 541.3 235.1L405.4 99.2C358.5 52.3 281.6 52.3 235.6 99.2L99.7 235.1zM260 260.5C292.9 227.4 346.4 227.1 379.5 260C412.6 292.9 412.9 346.4 380 379.5C347.1 412.6 293.6 412.9 260.5 380C227.4 347.1 227.1 293.6 260 260.5z"/></svg>
      </div>
  },
  {
    title: "I teach backend in College",
    media: <img src={indiamart} className="w-40 md:w-48 lg:w-60" />
  }
]

export default function Home() {

  const sectionRefs = sections.map(() => useRef<HTMLDivElement>(null))

  return (
    <div className="max-w-6xl mx-auto relative">

      {/* Scroll indicator */}
      <div className="absolute left-0 top-0 hidden md:block">
        <ScrollIndicator sectionRefs={sectionRefs} />
      </div>

      {sections.map((section, i) => (
        <div
          key={i}
          ref={sectionRefs[i]}
          className="
          grid
          grid-cols-1
          md:grid-cols-[60px_1fr]
          lg:grid-cols-[80px_1fr_1fr]
          items-center
          gap-10 md:gap-12 lg:gap-16
          py-24 md:py-32 lg:py-52
          "
        >

          {/* spacer for dot column */}
          <div className="hidden lg:block" />

          {/* TEXT */}
          <div className="
            text-3xl
            md:text-4xl
            lg:text-6xl
            font-bold
            leading-tight
            text-(--text-main)
          ">
            {section.title}
          </div>

          {/* MEDIA */}
          <div className="
flex
justify-center
items-center
mt-4
md:mt-6
lg:mt-0
lg:justify-start
">
            {section.media}
          </div>

        </div>
      ))}

    </div>
  )
}