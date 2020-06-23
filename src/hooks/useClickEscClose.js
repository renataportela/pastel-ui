import useEscClose from './useEscClose'
import useClickOutsideClose from './useClickOutsideClose'

function useClickEscClose(elementRef, onClose, open){
  useEscClose(onClose, open)
  useClickOutsideClose(elementRef, onClose, open)
}

export default useClickEscClose