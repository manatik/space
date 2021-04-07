import { useContextProvider } from '../../../hooks/context'

export const useSentence = () => {
  const { index: { index } } = useContextProvider()
  return { index }
}
