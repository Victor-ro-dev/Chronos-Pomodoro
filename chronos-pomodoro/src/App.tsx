import './styles/global.css';
import './styles/theme.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react'

export function App() {
  return (
    <div>
      <Heading>
        Welcome to Chronos Pomodoro
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Your productivity companion.</p>
    </div>
  );
}