'use client'
import clsx from 'clsx'
import { useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link'
import { demos } from '../../data/demo'

export default function CategoryList() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()

  return (
    <div className='space-y-5'>
      {demos.map(demo => {
        return (
          <div key={demo.name}>
            <div className='mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500'>
              <div>{demo.name}</div>
            </div>

            {demo.items.map(item => {
              const isActive = item.slug === selectedLayoutSegments

              return (
                <div key={item.slug}>
                  {item.isDisabled ? (
                    <div className='block rounded-md px-3 py-2 text-sm font-medium text-zinc-600' title='Coming Soon'>
                      {item.name}
                    </div>
                  ) : (
                    <Link
                      href={`/article/${item.slug}`}
                      className={clsx(
                        'block rounded-md px-3 py-2 text-sm font-medium hover:bg-white dark:hover:bg-dark hover:text-dark dark:hover:text-zinc-100',
                        { 'text-zinc-400': !isActive, 'text-white': isActive }
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
