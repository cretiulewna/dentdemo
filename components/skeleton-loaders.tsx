'use client'

export function HeroSkeleton() {
  return (
    <div className="h-[600px] md:h-[700px] bg-secondary/30 animate-pulse flex items-center px-4">
      <div className="max-w-2xl space-y-4 w-full">
        <div className="h-4 bg-primary/20 rounded w-32" />
        <div className="h-12 bg-primary/20 rounded w-64" />
        <div className="h-6 bg-primary/20 rounded w-96" />
        <div className="flex gap-4">
          <div className="h-10 bg-primary/20 rounded w-40" />
          <div className="h-10 bg-primary/20 rounded w-40" />
        </div>
      </div>
    </div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden bg-white animate-pulse">
      <div className="h-48 bg-secondary/30" />
      <div className="p-4 space-y-3">
        <div className="h-10 w-10 bg-primary/20 rounded-full" />
        <div className="h-5 bg-primary/20 rounded w-32" />
        <div className="h-4 bg-primary/20 rounded w-full" />
        <div className="h-4 bg-primary/20 rounded w-24" />
      </div>
    </div>
  )
}

export function TeamPortraitSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden bg-white animate-pulse">
      <div className="aspect-[3/4] bg-secondary/30" />
      <div className="p-4 space-y-2">
        <div className="h-5 bg-primary/20 rounded w-32" />
        <div className="h-4 bg-primary/20 rounded w-40" />
      </div>
    </div>
  )
}

export function BeforeAfterSkeleton() {
  return (
    <div className="rounded-lg aspect-[4/3] bg-secondary/30 animate-pulse" />
  )
}

export function VideoTestimonialSkeleton() {
  return (
    <div className="rounded-lg aspect-[9/16] bg-secondary/30 animate-pulse flex items-center justify-center">
      <div className="w-16 h-16 bg-primary/20 rounded-full" />
    </div>
  )
}

export function GalleryGridSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-4">
          <BeforeAfterSkeleton />
          <div className="space-y-2">
            <div className="h-4 bg-primary/20 rounded w-24" />
            <div className="h-5 bg-primary/20 rounded w-32" />
          </div>
        </div>
      ))}
    </div>
  )
}
