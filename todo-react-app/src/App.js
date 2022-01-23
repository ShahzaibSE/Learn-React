import React from 'react'
import Footer from './components/Footer.component'
import AddTodo from './components/addTodo.component'
import VisibleTodoList from './containers/VisibleTodoList.container'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
export default App