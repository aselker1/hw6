import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchAllUsers, createUser } from '../../store/reducers/userReducer';
import ModalWindow from '../../pages/ModalWindow/ModalWindow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import classes from '../../Components/UserList/UserList.module.css'
import Search from '../Search/Search';


const UserList = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users)
    const onDelete = (userId) => dispatch(deleteUser(userId));
    const [modalOpen, setModalOpen] = useState(false)
    const [searchResults, setSearchResults] = useState([]);


    const handleSearch = (query) => {
        const filteredResults = users.filter(user => user.name.includes(query));
        setSearchResults(filteredResults);
    };

    const showUser = (User) => {
        dispatch(createUser(User))
        setModalOpen(false)
    }


    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    return (



        <div>
            <h1>UserList</h1>
            <hr />
            <Search data={users} onSearch={handleSearch} />

            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result.name}</li>
                ))}
            </ul>

            {
                !modalOpen && (
                    <button onClick={() => setModalOpen(true)}>New Show</button>




                )
            }
            {
                modalOpen && (
                    <ModalWindow onSubmit={showUser} />

                )
            }




            {users && users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr className={classes.block}>
                                        <td><img src="https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg" alt="" /></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td><FontAwesomeIcon icon={faTrashCan} onClick={() => onDelete(user.id)} /></td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            ) : (
                <p>No users found</p>
            )}
        </div>
    )
}

export default UserList