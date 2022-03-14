import React, {useState} from 'react';
import MenuItem from "./MenuItem";

const Menu = () => {

    const [tasks, setTasks] = useState(['item1', 'item2', 'item3', 'item4']);

    const addNewItemStart = () => {
        const textNewItem = prompt('Введите текст нового элемента списка');
        setTasks((tasks) => [textNewItem, ...tasks]);
    }

    const addNewItemEnd = () => {
        const textNewItem = prompt('Введите текст нового элемента списка');
        setTasks((tasks) => [...tasks, textNewItem]);
    }

    const addNewItemMiddle = () => {
        const textNewItem = prompt('Введите текст нового элемента списка');
        const positionMiddleElement = Math.floor(tasks.length / 2);
        tasks.splice(positionMiddleElement, 0, textNewItem);
        setTasks((tasks) => [...tasks]);
    }

    const deleteItemStart = () => {
        setTasks((tasks) => [...tasks.slice(1)])
    }

    const deleteItemEnd = () => {
        setTasks((tasks) => [...tasks.slice(0, -1)])
    }

    const deleteItemMiddle = () => {
        const index = Math.floor(tasks.length / 2);
        tasks.splice(index, 1)
        setTasks((tasks) => [...tasks])
    }

    return (
        <div>
            <h1>Unordered List</h1>
            <div className='button-container'>
                <button onClick={addNewItemStart}>Добавить в начало</button>
                <button onClick={addNewItemEnd}>Добавить в конец</button>
                <button onClick={addNewItemMiddle}>Добавить в середину</button>
            </div>
            <ul>
                {tasks.map((item) => {
                    return <MenuItem text={item} />
                })}
            </ul>
            <button onClick={deleteItemStart }>Удалить в начало</button>
            <button onClick={deleteItemEnd}>Удалить в конец</button>
            <button onClick={deleteItemMiddle}>Удалить в середину</button>
        </div>
    );
};

export default Menu;