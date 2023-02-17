import './App.css';
import './common.css';
import BlogHome from './BlogHome';
import Header from './Header';

function App() {
  return (
    <div className="App debug">
      <Header />
      <BlogHome />
    </div>
  );
}

export default App;
/*
+-------------------------------------------------------+
| +---------------------------+ +---------------------+ |
| | +------+  +-------------+ | | +------+  +-------+ | |
| | | LOGO |  | Nom du Site | | | | Blog |  | About | | |
| | +------+  +-------------+ | | +------+  +-------+ | |
| +---------------------------+ +---------------------+ |
+-------------------------------------------------------+
        Big
            Good looking
                          Fullscreen
                                      Wallpaper

*/