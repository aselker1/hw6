import { useState } from 'react';

const DetailsUser = ({ onSubmit }) => {

    const [show, setShow] = useState({
        name: '',
        email: '',
        phone: '',
        emailnumber: '',
        date: '',

    })


    const showChange = (e) => {
        setShow({

            ...show, [e.target.name]: e.target.value
        })
    }


    const showSubmit = (e) => {
        e.preventDefault();
        onSubmit(show);
        setShow({ name: '', email: '', phone: '',emailnumber: '',
        date: '' })

    }



    return (
        <div >
            <form onSubmit={showSubmit}>
                <input type="text" name='name' value={show.name} onChange={showChange} />

                <input type="text" name='email' value={show.email} onChange={showChange} />

                <input type="text" name='phone' value={show.phone} onChange={showChange} />

                <input type="text" name='email_number' value={show.emailnumber} onChange={showChange} />

                <input type="text" name='date' value={show.date} onChange={showChange} />

                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default DetailsUser;