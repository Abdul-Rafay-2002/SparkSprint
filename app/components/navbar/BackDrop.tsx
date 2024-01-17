interface BackDropProps{
    onClick: () => void;
}

const BackDrop:React.FC<BackDropProps> = ({onClick}) => {
    return ( <div className="z-40 bg-black/80 opacity-80  w-full h-screen fixed top-0 left-0 backdrop-blur-3xl" onClick={onClick}></div> );
}
 
export default BackDrop;