import { useMemo, useState } from 'react'
import { View } from 'react-native'

import { Header } from '../../components/Header'
import { List } from '../../components/List'
import { styles } from './styles'

export interface ITask {
  id: string;
  content: string;
  completed?: boolean;
}

export const Home = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSetTask = (task: string) => {
    setTask(task);
  };

  const handleCreateTask = (task: ITask) => {
    task.completed = false;
    if (!task.content.trim().length) return;
    setTasks((prevState) => [...prevState, task]);
    setTask('');
  };

  const memoTasks = useMemo(() => {
    return tasks;
  }, [tasks]);

  const handleCheckTask = (id: string) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleRemoveTask = (id: string) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header />
      <List
        task={task}
        handleSetTask={handleSetTask}
        handleCheckTask={handleCheckTask}
        taskCount={tasks.length}
        handleCreateTask={handleCreateTask}
        tasks={memoTasks}
        completedTasks={
          memoTasks.filter((task) => task.completed === true).length
        }
        handleRemoveTask={handleRemoveTask}
      />
    </View>
  );
};
