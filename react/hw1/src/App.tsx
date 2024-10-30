import ImageComponent from './components/ImageComponent';
import VideoComponent from './components/VideoComponent';
import ParagraphsComponent from './components/ParagraphsComponent';
import ListsComponent from './components/ListsComponent';

function App() {
  return (
    <div className='container mx-auto space-y-5'>
      <ImageComponent />
      <VideoComponent />
      <ParagraphsComponent />
      <ListsComponent />
    </div>
  );
}

export default App;
