import React from 'react';
import dayjs from 'dayjs';

export const SubmittedDate = ({ date }: any): React.ReactElement<Date> => {
  return <div>{dayjs(date).format('DD/MM/YY-h A')}</div>;
};
