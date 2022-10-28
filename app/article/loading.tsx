import { SkeletonCard } from '../ui/skeletonCard'

export default function Loading() {
  return (
    <div className='space-y-4'>
      <div className='text-xl font-medium text-zinc-500'>Loading...</div>
      <div className=''>
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
      </div>
    </div>
  )
}
