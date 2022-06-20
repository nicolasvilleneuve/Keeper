
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footing() {
    return (
        <footer> <p>Copyright {currentYear}</p></footer>
    );
}

export default Footing;