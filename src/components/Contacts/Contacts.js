// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Filter } from '../Filter/Filter';
import { Box } from '../Common/Common.styled';
import { getSearchName } from 'redux/selector';
// import { fetchContacts, deleteContact } from 'redux/operations';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/operations';


export const Contacts = () => {
  // const contactsList = useSelector(getContacts);
  const searchName = useSelector(getSearchName);
  // const dispatch = useDispatch();
 const { data = [], isLoading } = useGetContactsQuery();
 const [ deleteContact ] = useDeleteContactMutation();

  const filtredList = data.filter(contact =>
    contact.name.toLowerCase().includes(searchName)
  );
  

  const handlerDeleteContact = async id => {
    // dispatch(deleteContact(id));
    await deleteContact(id);

  };
 

  

  return (
    <Box border="1px solid">
      <Filter />
      <ul>
        {filtredList.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <Box display="flex" justifyContent="space-between">
                {name}:<span>{phone}</span>
                <button onClick={() => handlerDeleteContact(id)}>Delete</button>
              </Box>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
