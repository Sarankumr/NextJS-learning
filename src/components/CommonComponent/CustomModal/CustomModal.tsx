'use client';
import { ICONES } from "@/assets";
import { 
  DialogActionTrigger, 
  DialogBody, 
  DialogCloseTrigger, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogRoot, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";


interface modalProps  {
    modalSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    scrollBehavior?: 'inside' | 'outside';
    unmountOnExit?: boolean;
    closeOnEscape?: boolean;
    children?: React.ReactNode;
    btnContent?: React.ReactNode;
  }


export const CustomModal = ({
  modalSize = 'md', // Default size
  scrollBehavior = 'inside',
  unmountOnExit = true,
  closeOnEscape = true,
  children = <></>,
  btnContent = <></>
}:modalProps) => {


  // Map modalSize to width classes
  const sizeClasses = {
    xs: 'w-[20%]',
    sm: 'w-[40%]',
    md: 'w-[60%]',
    lg: 'w-[80%]',
    xl: 'w-[90%]',
    full: 'w-full',
  };

  return (
    <DialogRoot 
      unmountOnExit={unmountOnExit}
      closeOnEscape={closeOnEscape}
      size={modalSize}
    >
      <DialogTrigger asChild>
        {btnContent}
      </DialogTrigger>
      <DialogContent 
        bg={'#fff'} 
        className={`rounded-lg ${sizeClasses['md']}`} // Apply size class
      >
        <DialogBody className={`p-5 overflow-${scrollBehavior}`}>
          {children}
        </DialogBody>
        <div className={`absolute top-2 right-2 cursor-pointer`}>
            <DialogCloseTrigger>
                <ICONES.Close size={40} color={'red'} />
            </DialogCloseTrigger>
        </div>
      </DialogContent>
    </DialogRoot>
  );
};
