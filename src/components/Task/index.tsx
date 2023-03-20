import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import { ITask } from '../../screens/Home/Home'
import { styles } from './styles'

type IProps = {
  item: ITask;
  handleCheckTask: (id: string) => void;
  handleRemoveTask: (id: string) => void;
};

export const Task = ({ item, handleCheckTask, handleRemoveTask }: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          handleCheckTask(item.id);
        }}
      >
        <Image
          source={
            item.completed
              ? require(`../../../assets/check.png`)
              : require(`../../../assets/uncheck.png`)
          }
          style={styles.checkButton}
        />
      </TouchableWithoutFeedback>
      <Text style={item.completed ? styles.textLineThrough : styles.text}>
        {item.content}
      </Text>
      <TouchableWithoutFeedback
        onPress={() => {
          handleRemoveTask(item.id);
        }}
      >
        <Image
          style={styles.trash}
          source={require('../../../assets/trash.png')}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
