import { Link } from "react-router-dom"
import ContactCard from "./ContactCard"

const ContactList = props => {
    const deleteContactHandler = id =>  props.getContactID(id)

    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui violet button">Add Contact</button>
            </Link>
            <div className="ui celled list">
                {props.contacts.map(contact => <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} />)}
            </div>
        </div>
    )
}
export default ContactList