import React, { useEffect, useRef } from 'react';

const Menu = () => {

    const ref = useRef(null)

    const funcSelect = (event) => {
        funcSize(event.target.value)
    }

    const funcSize = (a) => {
        // const task = parseInt(a);
        ref.current.style.height = a + 'px'
        ref.current.style.fontSize = (a / 10) + 'px'
        console.log(a)
    }

    useEffect(() => {
        funcSize('100')
    },[])

    return (
        <div>
            <form>
                <select onChange={funcSelect}>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                </select>
            </form>
            <div ref={ref} style={{width: '65%', margin: 'auto'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
                It was popularised in the 1960s with the release of sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    );
};

export default Menu;