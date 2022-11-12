import PropTypes from 'prop-types';
import { ListItem, List } from './ContactsListStyled';

export default function ContactList({ items, removeContact }) {
    const elements = items.map(({ name, number, id }) => {
        return (
            <ListItem key={id}>
                {name}: {number}
                <button type="button" onClick={() => removeContact(id)}>x</button>
            </ListItem>
        )
    })

    return (
            <List>{elements}</List>
    )
}

ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ),
    removeContact: PropTypes.func.isRequired,
}