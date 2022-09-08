import Icon from '../images/flip.svg';

const Navigation = ({ prev, next, onPrev, onNext, reverseButton }) => {

  const goPrev = () => {
    onPrev();
  }

  const goNext = () => {
    onNext();
  }

  return (
    <nav className="container">
      <ul className="container--flex navigation">
        { prev ? (
          <li>
            <button className="btn btn--prev" onClick={ goPrev }>
              Previous
            </button>
          </li>
          ) : null }
        { next ? (
          <li>
            <button className="btn btn--next" onClick={ goNext }>
              Next
            </button>
          </li>
          ) : null }
          <button className="btn btn--reverse" onClick={ reverseButton }><img className="icon" src={ Icon } alt="Reverse" /></button>
      </ul>
    </nav>

  )
}

export default Navigation;