import React, { useState } from 'react';
import './App.css';

const MenuItem = () => {

    const [text, setText] = useState()

    const visualText = (event) => {setText(event.target.value)}

    return (
        <div>
            <h1>Hello</h1>
            <textarea onChange={visualText} cols="20" rows="5"></textarea>
            <p>{text}</p>
        </div>
    );
};

const Symbols = () => {

    const [symbol, setSymbol] = useState('')

    const visualSymbol = (event) => {
        const newSymbol = event.target.value // event.target – это «целевой» элемент, на котором произошло событие
        setSymbol(newSymbol)
    }

    return (
        <div>
            <input type="text" onChange={visualSymbol} value={symbol}/>
            <button onClick={() => alert(`Количество символов: ${symbol.length}`)}>Symbol</button>
        </div>
    )
}

const Summa = () => {

    const [sum, setSum] = useState()
    const [summa, setSumma] = useState()

    const visualSum = (event) => {
        const newSum = event.target.value
        setSum(newSum)
    }

    const visualSumma = (event) => {
        const newSumma = event.target.value
        setSumma(newSumma)
    }

    const inputSum = () => {
        alert(`Результат ${+sum + +summa}`)
    }

    return (
        <div>
            <p></p>
            <input type="number" onChange={visualSum}/>
            <input type="number" onChange={visualSumma}/>
            <button onClick={inputSum}>Summa</button>
        </div>
    )
}

const Form = () => {

    const [task, setTask] = useState(['item1', 'item2', 'item3', 'item4'])
    const [state, setState] = useState()

    const visualTask = (event) => {
        event.preventDefault()
        setTask((task) => [...task, state])
    }

    const visualState = (event) => {
        const newState = event.target.value
        setState(newState)
    }

    const [tasks, setTasks] = useState(0)

    const visualNewTasks = (event) => {
        event.preventDefault()
        setTask((task) => [...task.slice(0, tasks), ...task.slice(tasks + 1)])
    }

    const visualTasks = (event) => {
        const newTasks = event.target.value
        setTasks(newTasks)
    }

    return (
        <div>
            <p></p>
            <form action="">
                <input type="text" onChange={visualState}/>
                <button onClick={visualTask}>Добавить в конец</button>
                <ul>
                    {task.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </form>
            <form action="">
                <input type="number" onChange={visualTasks}/>
                <button onClick={visualNewTasks}>Удалить</button>
            </form>
        </div>
    )
}

const Authorization = () => {

    const [textError, setTextError] = useState('') // Объявление новой переменной состояния «textError»
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const resLogin = 'alex';
    const resPassword = '12345';

    const newLogin = (event) => {setLogin(event.target.value)}
    const newPassword = (event) => {setPassword(event.target.value)}

    const validate = (event) => {
        event.preventDefault()
        if (resLogin === login && resPassword === password) {
            alert('Вы успешно вошли в систему')
        } else if(login === '' || password === '') {
            setTextError('Поля формы не все заполнены')
        } else {
            setTextError('Неправильный логин или пароль')
        }
    }


    return (
        <div>
            <form onSubmit={validate}>
                <input type="text" onChange={newLogin}/>
                <input type="text" onChange={newPassword}/>
                <button>Войти</button>
                <p>{textError}</p>
            </form>
        </div>
    )

}

const Checkbox = () => {

    const [checked1, setChecked1] = useState(true);

    return (
        <div>
            {/*Обычно в атрибут checked передается стейт, содержащий логическое значение*/}
            {/*<input type="checkbox" checked={true}  /> отмечен*/}
            {/*<input type="checkbox" checked={false} /> не отмечен*/}
            {/*Так же, как и при работе с инпутами, если жестко задать значение атрибута checked - состояние чекбокса*/}
            {/*нельзя будет сменить. Для корректной работы будем по изменению чекбокса менять его стейт на противоположное*/}
            {/*ему значение:*/}

            <input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} />
            {checked1 && <div className='square'></div>}
        </div>
    )
}

const Select = () => {

    const [size, setSize] = useState()
    const newSize = (event) => {setSize(event.target.value)}

    return (
        <div>
            <p style={{fontSize: size}}>Lorem ipsum dolor sit amet.</p>
            <select onChange={newSize}>
                <option>8px</option>
                <option>16px</option>
                <option>24px</option>
                <option>32px</option>
            </select>
        </div>
    )
}

const Options = () => {

    const [option, setOption] = useState([])
    const [newOption, setNewOption] = useState([])

    const addNewOption = (event) => {
        event.preventDefault()
        setOption(option => [...option, newOption])
    }

    const func = (event) => {setNewOption(event.target.value)}

    return (
        <div>
            <form action="#" onSubmit={addNewOption}>
                <select>
                    {option.map(option => <option>{option}</option>)};
                </select>
                <input type="text" onChange={func}/>
                <button>Добавить новую опцию</button>
            </form>
        </div>
    )
}

export default MenuItem;
export { Symbols, Summa, Form, Authorization, Checkbox, Select, Options }