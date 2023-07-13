import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, SliceName } from '@/redux/store';

type SliceWithActions<State> = {
  reducer: SliceName;
  setLoading: (loading: boolean) => any;
  setError: (error: any) => any;
  setData: (data: any) => any;
  state?: State;
};

export const useDataFetcher = <State>(
  fetchFunction: (prevData: any) => Promise<any>,
  slice: SliceWithActions<State>,
  dependencies: any[] = [],
) => {
  const dataState = useSelector((state: RootState) => state[slice.reducer]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(slice.setLoading(true));
    dispatch(slice.setError(null));

    try {
      const newData = await fetchFunction(dataState.data);

      dispatch(slice.setData(newData));
    } catch (err) {
      dispatch(slice.setError(err));
    }

    dispatch(slice.setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  console.log(dataState);

  return dataState as State;
};
