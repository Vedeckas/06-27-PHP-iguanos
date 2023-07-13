// import { Value } from "sass";


const read = key => {
    const value = localStorage.getItem(key);
    if (null === value) {
        return[];
    }
    return JSON.parse(value);
}

// const write = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
// }

export const get = key => read(key);

// export default 