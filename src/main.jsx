import ReactDOM from 'react-dom/client'

import App from './App'

const persons=[{ name: 'Arto Hellas', number: "123-456" }];

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons}/>)