import '../../style.sccs';
function AnimalItem({animal}) {
    return (
        <div className="box" style={{color: animal.animalColor}}>
            <h2 style={{margin: 0}}>{animal.type}</h2>         
        </div>
    );
}

export default AnimalItem;