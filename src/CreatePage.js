import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Tile-laying');
  const [designer, setDesigner] = useState('');
  const [description, setDescription] = useState('');
  const [minPlayers, setMinPlayers] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game

    // use history.push to send the user to the list page
  }

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input required value={title} name='title' onChange={e => setTitle(e.target.value)}/>
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required value={genre} onChange={e => setTitle(e.target.value)}>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input required value={designer} name='designer' onChange={e => setDesigner(e.target.value)} />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          {
            minPlayers < 0 ? setMinPlayers(0) : <input type='number' required value={minPlayers} name='min_players' onChange={e => setMinPlayers(e.target.value)} /> 
          }
           
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          {
            maxPlayers < minPlayers ? setMaxPlayers(minPlayers) : ''
          }
          <input type='number' required value={maxPlayers} name='max_players' onChange={e => setMaxPlayers(e.target.value)}/>
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea required name='max_players' />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
