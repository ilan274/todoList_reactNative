import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import uuid from 'react-native-uuid'

import { ITask } from '../../screens/Home/Home'
import { styles } from './styles'

type IProps = {
  task: string;
  handleSetTask: (task: string) => void;
  handleCreateTask: (task: ITask) => void;
};

export const NewTask = ({ task, handleSetTask, handleCreateTask }: IProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='Add a new task'
        placeholderTextColor='white'
        value={task}
        onChangeText={(task) => {
          handleSetTask(task);
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleCreateTask({ content: task, id: uuid.v4() as string });
        }}
      >
        <Text style={styles.buttonText}>
          <Image source={require('../../../assets/plus.png')} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
