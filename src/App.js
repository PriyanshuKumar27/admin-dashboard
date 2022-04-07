import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import {Home,List, Login, New, Single} from './pages/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Nested Routing */}
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            {/* Nested Routing */}
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            {/* Nested Routing */}
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
