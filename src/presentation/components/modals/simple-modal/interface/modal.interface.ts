export interface Imodal {
  title?: string;
  content: string;
  isOpen: boolean;
  isClosable?: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  footer?: JSX.Element;
}
