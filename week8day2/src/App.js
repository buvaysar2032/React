import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  // Обязательно нужно создать стэйт
  const [todo, setTodo] = useState([])

  // Функция, которая загружает todo list
  const loadTodo = () => {
    // Напишите код, который загружает данные с сервера
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET'
    })
        .then(response => {
          if (response.ok) {
            return response.json()
          } throw new Error('Что-то не так')
        })
        .then(data => {
          console.log(data)

          const header = data.slice(0, 10).map(item => `${item.id} (${item.title})`);
          setTodo(header)
        })
        .catch(err => {
          console.log(err)
        })
  }

  // Поскольку загрузка - побочный эффект, загрузку выполняем
  // в useEffect
  useEffect(() => {
    loadTodo();
  }, [])


  return (
      // Напишите функцию рендера
      <div>
        <div>{Array.isArray(todo) && todo.map((item, index) => <p key={index}>{item}</p>)}</div>
      </div>
  )
}

const User = () => {
  // Выделяем стэйт для данных о пользователе
  const [user, setUser] = useState(null)

  // Создааем функцию для загрузки данных
  const loadUser = (id) => {
    // Напишите функцию, которая по id загружает данные о пользователе
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'GET'
    })
        .then(response => {
          if (response.ok) {
            return response.json()
          } throw new Error('Что-то не так')
        })
        .then(data => {
          setUser(data)
        })
        .catch(err => {
          console.log(err)
        })
  }

  // Загрузка - это побочный эффект. Выполняем ее в момент
  // внедрения на страницу
  useEffect(() => {
    // Для проверки работы загрузим пользователя с id=3
    loadUser(3)
  }, [])

  return (
      // Напишите, как должны отображаться эти данные
      <div>
        {user && (
            <div>
              <h1>User</h1>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
            </div>
        )}
      </div>
  )
}

export default App;
export { User }