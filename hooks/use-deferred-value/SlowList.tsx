import { memo } from 'react'

export const SlowList = memo(function SlowList({ text }: { text: string }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />')

  let items = []
  for (let i = 0; i < 250; i++) {
    items.push(<p key={i}>{text}</p>)
  }
  return (
    <ul className="items">
      {items}
    </ul>
  )
})