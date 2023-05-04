import { ModalProps } from 'antd';

export interface ILessonsModalProps<TItem extends Record<string, any> = any>
  extends Omit<ModalProps, 'onOk'> {
  item?: TItem;
  onOk?: (item?: TItem) => void | Promise<void>;
}
