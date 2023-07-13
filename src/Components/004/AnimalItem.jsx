import '../../style.scss';
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';
function AnimalItem({animal}) {

    const handleClick = parameter => {
        console.log(parameter, rand(1, 100));
        console.log(animal.type);
    }
    return (
        <>
        <div className="box" style={{
            color: animal.animalColor,
            backgroundColor: randColor(),
            }}>
            <h2 style={{margin: 0}}>{animal.type}</h2>         
        </div>
        <button onClick={_ => handleClick(1)}>Click me</button>
        </>
    );
}

export default AnimalItem;