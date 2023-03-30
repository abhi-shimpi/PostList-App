import classes from './Modal.module.css';

function Modal({ children, close }){
    return (
        <>   
        {/*Here backdrop is used for background  */}
            <div className={classes.backdrop} onClick={close}></div> 
        <dialog open={true} className={classes.modal} >{children}</dialog>
        </>
    )
}

export default Modal;