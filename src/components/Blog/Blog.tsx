import BlogItem from './BlogItem'

type Props = {}

export const blogs = [
  {
    id: 1,
    title:
      "DevOps Tools and Techniques: A Comprehensive Guide to Networking, Linux, and More",
    description:
      "Explore essential DevOps tools and techniques including networking fundamentals, Linux commands, and practical workflows for modern infrastructure.",
    date: "March 2025",
    link: "https://parashar.hashnode.dev/devops-tools-and-techniques-a-comprehensive-guide-to-networking-linux-and-more",
  },
  {
    id: 2,
    title: "Understanding Kubernetes Networking",
    description:
      "A beginner friendly explanation of how Kubernetes networking works including services, pods and cluster communication.",
    date: "February 2025",
    link: "https://parashar.hashnode.dev/kubernetes-persistent-volumes",
  },
  {
    id: 3,
    title: "Git Commands Every DevOps Engineer Should Know",
    description:
      "Essential Git commands used daily by DevOps engineers to debug systems, manage servers and automate tasks.",
    date: "January 2025",
    link: "https://parashar.hashnode.dev/git-commands",
  },
]

const Blog = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto py-8">

      {blogs.map((blog) => (
        <BlogItem
          key={blog.id}
          title={blog.title}
          description={blog.description}
          date={blog.date}
          link={blog.link}
        />
      ))}

    </div>
  )
}

export default Blog