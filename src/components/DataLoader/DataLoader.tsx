import React, { FC, ReactNode } from 'react';

import { Error, Loading, NoData } from '@/styles/DataLoader';

interface Props {
  data: any;
  loading: boolean;
  error: any;
  children: (data: any) => ReactNode;
}

const DataLoader: FC<Props> = ({ data, loading, error, children }) => {
  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>Error: {error}</Error>;
  if (!data) return <NoData>No data available</NoData>;

  return <>{children(data)}</>;
};

export default DataLoader;
