import Heading from "./Header";
import Footing from "./Footer";
import Note from "./Note";
import Card, {contacts} from "./Contacts";
import Avatar from "./Avatar";
import Notes from "./notes";




function App() {
    return (
        <div className="App">
        <Heading />
            <Avatar source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*" />
            {Notes.map(note => <Note
                id={note.id}
                title={note.title}
                content={note.content}
            />)}
            {contacts.map(contact => <Card
                    id={contact.id}
                    key={contact.id}
                    name={contact.name}
                    source={contact.imgURL}
                    email={contact.phone}
                    phone={contact.email}
                />
            )}
        <Footing />
        </div>
    );
};

export default App;