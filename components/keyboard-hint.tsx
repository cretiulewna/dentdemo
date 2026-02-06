import { Kbd } from '@/components/ui/kbd'

interface KeyboardHintProps {
  keys: string[]
  action: string
  className?: string
}

export function KeyboardHint({ keys, action, className = '' }: KeyboardHintProps) {
  return (
    <div className={`flex items-center gap-2 text-xs text-muted-foreground ${className}`}>
      <span className="font-medium">Tastatură:</span>
      {keys.map((key, index) => (
        <span key={key} className="flex items-center gap-1">
          <Kbd>{key}</Kbd>
          {index < keys.length - 1 && <span>+</span>}
        </span>
      ))}
      <span>pentru {action}</span>
    </div>
  )
}
