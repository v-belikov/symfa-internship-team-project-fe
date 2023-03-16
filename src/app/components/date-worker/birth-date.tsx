import React from 'react';
import dayjs from 'dayjs';

export const BirthDate = ({ date }: any) => {
  return <div>{dayjs(date).format('D MMMM YYYY')}</div>;
};
