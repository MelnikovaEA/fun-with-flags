import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useAppDispatch} from '../../store.ts';
import {loadNeighborsByBorder} from './detailsSlice.ts';
import {selectNeighbors} from './details-selectors.ts';

export const useNeighbors = (borders: string[] = []) => {
    const dispatch = useAppDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByBorder(borders));
        }
    }, [borders, dispatch]);

    return neighbors;
}
