import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchAllUsers, createUser,editUser } from '../../store/reducers/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import classes from '../../Components/UserList/UserList.module.css'
import Search from '../Search/Search';
import { DetailsUser } from '../../pages';


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
            <h1>Students List</h1>
            <hr />
            <Search data={users} onSearch={handleSearch} />

            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result.name}</li>
                ))}
            </ul>

            {
                !modalOpen && (
                    <button onClick={() => setModalOpen(true)}>Add New Student</button>




                )
            }
            {
                modalOpen && (
                    <DetailsUser onSubmit={showUser} />

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
                                        <td><img src="https://img.freepik.com/premium-psd/young-female-model-with-beautiful-healthy-and-clean-skin-shown-isolated-on-a-transparent-background_410516-114552.jpg" alt="" /></td>
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