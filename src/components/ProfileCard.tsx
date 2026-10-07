import { StyleSheet, Text, View } from 'react-native';

type ProfileCardProps = {
  name: string;
  major: string;
  goal: string;
};

export default function ProfileCard({ name, major, goal }: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>专业：{major}</Text>
      <Text style={styles.detail}>想学习：{goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20, borderRadius: 16, backgroundColor: '#ffffff' },
  name: { fontSize: 24, fontWeight: '700', color: '#1e3a8a' },
  detail: { marginTop: 10, fontSize: 16, color: '#334155' },
});