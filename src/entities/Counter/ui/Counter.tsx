import { type FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@shared/ui/Button'

import { counterActions } from '../model/slice'
import { getCounterValue } from '../model/selectors'

export const Counter: FC = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }} data-testid="counter">
      <h1 style={{ marginBottom: 10 }} data-testid="counter-value">
        {'Counter value:'} {counterValue}
      </h1>
      <Button
        onClick={increment}
        variant="outlined"
        style={{ margin: '10px 10px 0 0' }}
        data-testid="increment-btn"
      >
        {'Increment'}
      </Button>
      <Button onClick={decrement} variant="outlined" data-testid="decrement-btn">
        {'Decrement'}
      </Button>
    </div>
  )
}