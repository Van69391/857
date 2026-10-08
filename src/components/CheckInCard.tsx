import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CheckInCard() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>学习打卡</Text>
      <Text>今天完成了 {count} 次学习</Text>
      <Text>{count === 0 ? '从一次尝试开始吧' : '继续保持！'}</Text>
      <Text>{count >= 3 ? '你真棒！' : ''}</Text>

      <Pressable
        style={styles.button}
        onPress={() => setCount((current) => current + 1)}
      >
        <Text style={styles.buttonText}>完成一次</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => setCount((current) => current = 0)}
      >
        <Text style={styles.buttonText}>重置</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 16, padding: 20, borderRadius: 16, backgroundColor: '#ffffff' },
  title: { marginBottom: 12, fontSize: 20, fontWeight: '700' },
  button: { marginTop: 16, padding: 14, borderRadius: 10, backgroundColor: '#2563eb' },
  buttonText: { color: '#ffffff', textAlign: 'center', fontWeight: '700' },
});