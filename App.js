import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, Platform, StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoItem from './TodoItem2';
import EditForm from './EditTodo';
import AddTodoForm from './AddTodoForm';
import TodoItem2 from './TodoItem22';
import EditForm2 from './EditTodo22';
import AddTodoForm2 from './AddTodoForm22';


export default function App() {

  

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }




  const [todos1, setTodos1] = useState(() => {
    const savedTodos1 = localStorage.getItem("todos1");
    if (savedTodos1) {
      return JSON.parse(savedTodos1);
    } else {
      return [];
    }
  });
  const [todo1, setTodo1] = useState("");
  const [isEditing1, setIsEditing1] = useState(false);
  const [currentTodo1, setCurrentTodo1] = useState({});

  useEffect(() => {
    localStorage.setItem("todos1", JSON.stringify(todos1));
  }, [todos1]);

  function handleAddInputChange1(e) {
    setTodo1(e.target.value);
  }

  function handleEditInputChange1(e) {
    setCurrentTodo1({ ...currentTodo1, text: e.target.value });
    console.log(currentTodo1);
  }

  function handleAddFormSubmit1(e) {
    e.preventDefault();

    if (todo1 !== "") {
      setTodos1([
        ...todos1,
        {
          id: new Date(),
          text: todo1.trim()
        }
      ]);
    }

    setTodo1("");
  }

  function handleEditFormSubmit1(e) {
    e.preventDefault();

    handleUpdateTodo1(currentTodo1.id, currentTodo1);
  }

  function handleDeleteClick1(id) {
    const removeItem1 = todos1.filter((todo1) => {
      return todo1.id !== id;
    });
    setTodos1(removeItem1);
  }

  function handleUpdateTodo1(id, updatedTodo1) {
    const updatedItem1 = todos1.map((todo1) => {
      return todo1.id === id ? updatedTodo1 : todo1;
    });
    setIsEditing1(false);
    setTodos1(updatedItem1);
  }

  function handleEditClick1(todo1) {
    setIsEditing1(true);
    setCurrentTodo1({ ...todo1 });
  }


  return(

    <View style={styles.container}>

      {/*Titre du projet*/}
      <Header></Header>


<View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
      <View style={styles.content}>

        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          ))}
        </ul>

        {isEditing ? (
          <EditForm
            currentTodo={currentTodo}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
        ) : (
          <AddTodoForm
            todo={todo}
            onAddInputChange={handleAddInputChange}
            onAddFormSubmit={handleAddFormSubmit}
          />
        )}

      

        {/*Affichage des elements*/}

        
      </View> 

      <View style={styles.container3}> 
        <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
          <Text style={styles.buttonText}>{'>>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
          <Text style={styles.buttonText}>{'<<'}</Text>
        </TouchableOpacity>
        </View>

      <View style={styles.content}>

<ul className="todo-list">
  {todos1.map((todo1) => (
    <TodoItem2
      todo1={todo1}
      onEditClick1={handleEditClick1}
      onDeleteClick1={handleDeleteClick1}
    />
  ))}
</ul>

{isEditing1 ? (
  <EditForm2
    currentTodo1={currentTodo1}
    setIsEditing1={setIsEditing1}
    onEditInputChange1={handleEditInputChange1}
    onEditFormSubmit1={handleEditFormSubmit1}
  />
) : (
  <AddTodoForm2
    todo1={todo1}
    onAddInputChange1={handleAddInputChange1}
    onAddFormSubmit1={handleAddFormSubmit1}
  />
)}



{/*Affichage des elements*/}

</View>

</View>


    </View>

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 400,
    borderWidth: 2,
    borderColor: 'black'

  },
  list: {
    
  },
  container3: {
    width: 70,
    height:300,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  button:{
    width:50,
    height:50,
    marginTop:20,
    alignItems: 'center',
    borderColor:'black',
    padding: 10,
    borderWidth:2,
  }
 });
 

