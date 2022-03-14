import './App.css';
import Image from "./Image";
import img from '../src/img.jpg'
import Button from "./Button";
import Header from "./Header";
import Link from "./Link";
import UnorderedList from "./UnorderedList";
import SmartButton from "./SmartButton";

function App() {

    const check = (a) => {
        return a ? <Button type='text' onClick={() => alert('alert')} /> :
        <Link text='Google' href='https://www.google.com/' isUnderlined={true} color='blue' />
    }

  return (
    <div className="App">

      <Image src={img} alt='image' width={440} height={600} />
      <Button type='text' onClick={() => alert('alert')} />
      <Header color='teal' text='Buvaysar' />
      <Link text='Google' href='https://www.google.com/' isUnderlined={true} color='blue' />
      <UnorderedList listItems={['One', 'Two', 'Three', 'Four', 'Five']} />
      <SmartButton isButton={check(false)} />

    </div>
  );
}

export default App;
