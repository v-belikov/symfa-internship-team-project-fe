import React, { FC, PropsWithChildren } from 'react';
import { Modal, Typography } from 'antd';
import { config } from '@core/config';
import { ILessonsModalProps } from '@pages/courses';

export const LessonsModal: FC<ILessonsModalProps> = ({
  width = 500,
  centered = true,
  item,
  ...rest
}: PropsWithChildren<ILessonsModalProps>) => {
  return (
    <Modal title={item?.title} width={width} centered={centered} {...rest}>
      <Typography>Duration: {item?.duration} hour(s)</Typography>
      <video key={item?.id} width="100%" height="100%" controls>
        <source src={`${config.API_URL}/${item?.materialPath}`} />
      </video>
    </Modal>
  );
};
