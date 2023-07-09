function Animal ({ type }){

    if (type === 'racoon'){
        return (
            <div>
                <h1>RACOON</h1>
            </div>
        );
    } else if (type === 'cat'){
        return(
            <div>
                <h1>CAT</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>ANIMAL</h1>
            </div>
        );
    }
};

export default Animal