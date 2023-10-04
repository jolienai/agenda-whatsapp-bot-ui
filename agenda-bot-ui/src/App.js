// import React from 'react';
// import ExampleComponent from './components/ExampleComponent';
// import LanguageSwitcher from './LanguageSwitcher';

// function App() {
//   return (
//     <div className="App">
//       <LanguageSwitcher />
//       <ExampleComponent />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Toolbar from './components/Toolbar';
import ExampleComponent from './components/ExampleComponent';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <div className="content">
        <ExampleComponent />
      </div>
    </div>
  );
}

export default App;
