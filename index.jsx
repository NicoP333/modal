import styled from 'styled-components';

const ModalWrapper = styled.div`
position: fixed;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`;

const ModalContent = styled.div`
background-color: #fff;
padding: 1rem;
border-radius: 4px;
width: ${(({ width }) => width)};
height: ${(({height}) => height)};
`;

const CloseButton = styled.span`
position: absolute;
top: 0.5rem;
right: 0.5rem;
font-size: 1rem;
cursor: pointer;
`;

const Modal = ({ isOpen, onClose, children, size }) => {
if (!isOpen) return null;

const handleClose = () => {
onClose();
};

return (
  <ModalWrapper>
    
    <ModalContent width={size.width} height={size.height}>
      <CloseButton onClick={handleClose} />
      {children}
    </ModalContent>
</ModalWrapper>
);
};

export default Modal;
