import { useDispatch } from 'react-redux'

import { type AppDispatch } from '@app/config/store'

export const useAppDispatch: () => AppDispatch = useDispatch
