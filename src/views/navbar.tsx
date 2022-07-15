import { DefaultProps } from 'styled-components'

import Navigation from '../elements/navigation'
import Button from '../elements/button'

interface Props extends DefaultProps {
  onClick: () => void;
}

export default function NavigationBar(props: Props) {
  const { onClick, className } = props
  return (
    <Navigation className={className}>
      <h2> DRAIN REVERSAL </h2>
      <Button
        className='navigation-btn'
        onClick={onClick}
        secondary
      >
        Dark / Light
      </Button>
    </Navigation>
  )
}
