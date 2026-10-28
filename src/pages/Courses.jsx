import { BookOpen, ExternalLink, Github } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const courses = [
  {
    title: 'Digital Image Processing',
    description:
      'Explore the foundations and practical techniques for analyzing, enhancing, and understanding digital images.',
    topics: ['Image enhancement', 'Image analysis', 'Computer vision'],
    repositories: [
      {
        name: 'Digital Image Processing',
        href: 'https://github.com/qazimsajjad/Digital-Image-Processing-DIP',
      },
    ],
  },
  {
    title: 'Data Visualization',
    description:
      'Learn to turn data into clear visual representations that support exploration, communication, and insight.',
    topics: ['Visual encoding', 'Data exploration', 'Information design'],
    repositories: [
      {
        name: 'Data Visualization',
        href: 'https://github.com/qazimsajjad/Data-Visualization',
      },
    ],
  },
  {
    title: 'Artificial Neural Networks',
    description:
      'Study neural-network fundamentals and the deep-learning methods used to build intelligent systems.',
    topics: ['Neural networks', 'Deep learning', 'Model training'],
    repositories: [
      {
        name: 'Deep Learning',
        href: 'https://github.com/qazimsajjad/Deep-Learning-Course',
      },
      {
        name: 'Artificial Intelligence',
        href: 'https://github.com/ImranNawar/artificial-intelligence-course',
      },
    ],
  },
  {
    title: 'Information Retrieval',
    description:
      'Understand how information is represented, indexed, and retrieved to answer user queries effectively.',
    topics: ['Search and ranking', 'Indexing', 'Retrieval models'],
    repositories: [
      {
        name: 'Information Retrieval',
        href: 'https://github.com/qazimsajjad/Information-Retrieval-Course',
      },
    ],
  },
]

export default function Courses() {
  return (
    <div>
      <PageHeader
        kicker="Teaching"
        title="Courses"
        description="Explore the subjects we teach and the open course repositories maintained by our team."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Our expertise</p>
          <h2 className="section-heading">Learn with DIP Lab</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Browse course repositories for learning materials and code. Lecture
            links will be added when they are available.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course, index) => (
            <article
              key={course.title}
              className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                  <BookOpen size={22} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold tracking-widest text-brand">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                {course.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{course.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${course.title} topics`}>
                {course.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-ink/80"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-navy/10 pt-5">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Course repositories
                </h4>
                <div className="flex flex-wrap gap-3">
                  {course.repositories.map((repository) => (
                    <a
                      key={repository.href}
                      href={repository.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-brand hover:text-brand"
                    >
                      <Github size={16} aria-hidden="true" />
                      {repository.name}
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted">Lecture links coming soon.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
