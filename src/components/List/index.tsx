import { FlatList, Image, Text, View } from 'react-native'

import { ITask } from '../../screens/Home/Home'
import { Task } from '../Task'
import { NewTask } from './NewTask'
import { styles } from './styles'
import { TaskCount } from './TaskCount'

type IProps = {
  task: string;
  handleSetTask: (task: string) => void;
  taskCount: number;
  handleCreateTask: (task: ITask) => void;
  tasks: ITask[];
  handleCheckTask: (id: string) => void;
  handleRemoveTask: (id: string) => void;
  completedTasks: number;
};

export const List = ({
  task,
  handleSetTask,
  taskCount,
  handleCreateTask,
  tasks,
  handleCheckTask,
  handleRemoveTask,
  completedTasks,
}: IProps) => {
  return (
    <View style={styles.container}>
      <NewTask
        task={task}
        handleSetTask={handleSetTask}
        handleCreateTask={handleCreateTask}
      />
      <TaskCount taskCount={taskCount} completedTasks={completedTasks} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Task
            handleCheckTask={handleCheckTask}
            handleRemoveTask={handleRemoveTask}
            item={item}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <Image source={require('../../../assets/clipboard.png')} />
            <Text style={styles.emptyListText}>
              You don't have any tasks registered yet.{'\n'}
              Create tasks and organize your to-do items.
            </Text>
          </View>
        )}
      />
    </View>
  );
};
