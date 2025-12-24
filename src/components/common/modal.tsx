import { Modal } from 'antd';
import {  X } from 'lucide-react';

import { FaLayerGroup } from "react-icons/fa";

interface ShareStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}






export const ShareStackModal = ({ isOpen, onClose }: ShareStackModalProps) => {
 
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={370}
       maskStyle={{ backdropFilter: 'blur(0px)'}}
      centered
      closeIcon={<X className="h-5 w-5" />}
      className='w-[10%]'
    >
     <div className='text-center grid place-items-center'>
        <h2 className='text-2xl font-bold mb-4 text-black'>Share Your Stack</h2>
        <div className='flex justify-between'>
          <div className='w-10 h-10 rounded-full flex justify-center items-center mb-4 text-[1rem] bg-[#E9D4FF] text-[#9013FE]'>
              <FaLayerGroup/>
          </div>
          
        </div>
        <p className="text-gray-600 mb-4">You have no stack created yet, go to Tech Stack to create one.</p>
        <div className="space-y-2 h-full m-h-[300px] overflow-y-auto"></div>
     </div>
    </Modal>
  );
};