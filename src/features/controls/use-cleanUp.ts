import { useAppDispatch } from '../../store.ts';
import { clearControls } from './controlsSlice.ts';


export const useCleanup = () => {
    const dispatch = useAppDispatch();

    const cleanUp = () => dispatch(clearControls());

    return cleanUp;
}
