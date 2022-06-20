import Avatar from "./Avatar";
import Description from "./Description";

const contacts = [
    {
        id: 1,
        name: "Beyonce",
        imgURL:
            "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
        phone: "+123 456 789",
        email: "b@beyonce.com"
    },
    {
        id: 2,
        name: "Jack Bauer",
        imgURL:
            "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
        phone: "+987 654 321",
        email: "jack@nowhere.com"
    },
    {
        id: 3,
        name: "Chuck Norris",
        imgURL:
            "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
        phone: "+918 372 574",
        email: "gmail@chucknorris.com"
    }
];


function Card(props){
    return <div>
        <h1 className="heading">My Contacts</h1>
        <div className="card">
            <div className="top">
                <p className="info">{props.id}</p>
                <h2 className="name">{props.name}</h2>
                <Avatar source={props.source}/>
            </div>
                <Description phone={props.phone} email={props.email}/>
        </div>
    </div>;
}
export default Card;
export {contacts};