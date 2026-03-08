

export const platforms = [
  {
    id: 1,
    title: "Medium",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_1/Screenshot%20(104).png",
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_1/Screenshot%20(105).png",
    ],
  },
  {
    id: 2,
    title: "Facebook",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_2/13.png",
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_2/14.png",
    ],
  },
  {
    id: 3,
    title: "Instagram",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_7/19.png",
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_7/20.png",
    ],
  },
  {
    id: 4,
    title: "Cred Website",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_9/22.png",
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_9/23.png",
    ],
  },
  {
    id: 5,
    title: "Youtube",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_12/12q%20(1).png",
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_12/12q%20(2).png",
    ],
  },
  {
    id: 6,
    title: "Reddit",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_3/15.png",
    ],
  },
  {
    id: 7,
    title: "Netflix",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_4/16.png",
    ],
  },
  {
    id: 8,
    title: "LinkedIn",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_5/17.png",
    ],
  },
  {
    id: 9,
    title: "Spotify",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_6/18.png",
    ],
  },
  {
    id: 10,
    title: "Twitter",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_8/21.png",
    ],
  },
  {
    id: 11,
    title: "Image Gallery",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_10/25.png",
    ],
  },
  {
    id: 12,
    title: "Photos",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_11/day_11.png",
    ],
  },
  {
    id: 13,
    title: "Drive",
    images: [
      "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/13.png",
    ],
  },
]

const ReactFrontend = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 lg:py-16">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 lg:mb-14">
        React Frontend Projects
      </h1>

      <div className="space-y-12 lg:space-y-16">

        {platforms.map((platform) => (
          <div key={platform.id}>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold mb-5 md:mb-6">
              {platform.title}
            </h2>

            {/* Collage */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-${
                platform.images.length === 1 ? "1" : "2"
              } gap-4 md:gap-6`}
            >
              {platform.images.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
                >
                  <img
                    src={img}
                    className="w-full object-contain hover:scale-[1.02] transition duration-300"
                  />
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default ReactFrontend