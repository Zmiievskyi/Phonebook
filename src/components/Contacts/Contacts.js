import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../Filter/Filter';
import { Box } from '../Common/Common.styled';
import { getSearchName, getContacts } from 'redux/selector';
import { fetchContacts, deleteContact } from 'redux/operations';

export const Contacts = () => {
  const contactsList = useSelector(getContacts);
  const searchName = useSelector(getSearchName);
  const dispatch = useDispatch();

  const filtredList = contactsList.items.filter(contact =>
    contact.name.toLowerCase().includes(searchName)
  );
  

  const handlerDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
