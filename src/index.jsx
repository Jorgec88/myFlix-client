import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const MyFlixApplication = () => {
  return <MainView />;
  // <div className='my-flix'>
  // <div>Good morning</div>
  //</div>
  //);
};

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<MyFlixApplication />);
