import React, { FC, PropsWithChildren } from 'react';
import { Modal } from 'antd';
import { ILessonsModalPropsInterface } from '@pages/courses-block';

export const LessonsModal: FC<ILessonsModalPropsInterface> = ({
  width = 500,
  title = '',
  centered = true,
  item,
  onOk,
  ...rest
}: PropsWithChildren<ILessonsModalPropsInterface>) => {
  console.log(item);

  return (
    <Modal title={title} width={width} centered={centered} {...rest}>
      {/* {item.title} {item.duration} {item.materialPath} */}
    </Modal>
  );
};

export default LessonsModal;
