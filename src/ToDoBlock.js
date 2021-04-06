const ToDoBlock = ({ label, onClick }) => {
  return <div onClick={onClick}>I have {label} to do</div>;
};

export default ToDoBlock;
