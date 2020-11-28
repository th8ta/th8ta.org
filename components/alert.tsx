import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ text }) {
  if (text) { return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': text,
        'bg-accent-1 border-accent-2': !text,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
            <>{text}</>
        </div>
      </Container>
    </div>
  )
} else {
  return <></>
}
}