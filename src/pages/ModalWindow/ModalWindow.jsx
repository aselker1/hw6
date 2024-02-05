import { useState } from 'react';
import classes from '../ModalWindow/ModalWindow.module.css';

const ModalWindow = ({ onSubmit }) => {


    const [show, setShow] = useState({
        name: '',
        email: '',
        phone: '',
    })


    const showChange = (e) => {
        setShow({

            ...show, [e.target.name]: e.target.value
        })
    }


    const showSubmit = (e) => {
        e.preventDefault();
        onSubmit(show);
        setShow({ name: '', email: '', phone: '' })

    }



    return (
        <div className={classes.modal_list}>
            <form className={classes.modal}onSubmit={showSubmit}>
                <input type="text" name='name' value={show.name} onChange={showChange} />

                <input type="text" name='email' value={show.email} onChange={showChange} />

                <input type="text" name='phone' value={show.phone} onChange={showChange} />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default ModalWindow;