import React, { FC, PropsWithChildren } from 'react';
import { Modal, Typography } from 'antd';
import { config } from '@core/config';
import { ILessonsModalPropsInterface } from '@pages/courses-block';

export const LessonsModal: FC<ILessonsModalPropsInterface> = ({
  width = 500,
  centered = true,
  item,
  ...rest
}: PropsWithChildren<ILessonsModalPropsInterface>) => {
  return (
    <Modal title={item?.title} width={width} centered={centered} {...rest}>
      <Typography>Duration: {item?.duration} hour(s)</Typography>
      <video key={item?.id} width="100%" height="100%" controls>
        <source src={`${config.API_URL}/${item?.materialPath}`} />
      </video>
    </Modal>
  );
};

export default LessonsModal;
