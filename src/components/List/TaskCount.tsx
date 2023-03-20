import { Text, View } from 'react-native'

import { styles } from './styles'

type IProps = {
  taskCount: number;
  completedTasks: number;
};

export const TaskCount = ({ taskCount, completedTasks }: IProps) => {
  return (
    <View style={styles.taskCountContainer}>
      <Text style={styles.taskCount}>Created: {taskCount}</Text>
      <Text style={styles.taskCount}>Completed: {completedTasks}</Text>
    </View>
  );
};
