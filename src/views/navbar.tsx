
import Navigation from '../elements/navigation'
import Button from '../elements/button'

interface Props {
  onClick: () => void;
  styles: {
    width: string;
    height: string;
    fontSize: string;
  }
}

export default function NavigationBar(props: Props) {
  const { onClick, styles } = props
  return (
    <Navigation { ...styles }>
      <h3> DRAIN REVERSAL </h3>
      <Button
        onClick={onClick}
        margin='1em 2em 0em 0em'
      >
        Dark / Light
      </Button>
    </Navigation>
  )
}
