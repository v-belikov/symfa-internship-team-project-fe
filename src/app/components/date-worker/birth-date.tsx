import React from 'react';
import dayjs from 'dayjs';

export const BirthDate = ({ date }: any): React.ReactElement<Date> => {
  return <div>{dayjs(date).format('D MMMM YYYY')}</div>;
};
