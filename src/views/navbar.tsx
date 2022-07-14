
import Navigation from '../elements/navigation'
import Button from '../elements/button'

interface Props {
  onClick: () => void;
  styles: {
    dimensions: {
      width: string;
      height: string;
      fontSize: string;
    },
    button: {
      margin: string;
      borderRadius: string;
    }
  }
}

export default function NavigationBar(props: Props) {
  const { onClick, styles } = props
  return (
    <Navigation { ...styles.dimensions }>
      <h2> DRAIN REVERSAL </h2>
      <Button
        {...styles.button}
        onClick={onClick}
        secondary
      >
        Dark / Light
      </Button>
    </Navigation>
  )
}
