import * as Device from 'expo-device';
import { FlatList, Text, View, StyleSheet, Pressable } from 'react-native';
import {activities} from '../data/activities';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import ProfileCard from '../components/ProfileCard';
import CheckInCard from '../components/CheckInCard';

export default function HomeScreen() {
  const [joinedIds, setJoinedIds] = useState<string[]>([]);

function toggleJoin(id: string) {
  setJoinedIds((current) =>
    current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]
  );
}
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
  data={activities}
  keyExtractor={(item) => item.id}
  extraData={joinedIds}
  renderItem={({ item }) => (
    <View style={styles.activityCard}>
      <Text style={styles.activityTitle}>{item.title}</Text>
      <Text>{item.time} · {item.location}</Text>
      <Pressable 
      style={styles.actbutton}
      onPress={() => toggleJoin(item.id)}>
   <Text style={styles.actbuttonText}>
        {joinedIds.includes(item.id) ? '取消想参加' : '我想参加'}
      </Text>
</Pressable>
    </View>
  )}
  ListHeaderComponent={
    <View>
      <Text style={styles.pageTitle}>CampusHelper</Text>
      <ProfileCard name="谭铭竣" major="海洋技术" goal="React Native" />
      <CheckInCard />
      <Text style={styles.sectionTitle}>校园活动</Text>
      <Text style={styles.joinedCount}>
        想参加的活动：{joinedIds.length} 个</Text>
    </View>
  }
  contentContainerStyle={styles.content}
/>
      </SafeAreaView>
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
    width: '100%',
    alignSelf: 'center',
  },
 pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2563eb',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    color: '#c8c9cb',
  },
  activityCard: {
    padding: 16,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    marginBottom: 12,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1e293b',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
    color: '#1e293b',
  },
  actbutton: {
    marginTop: 8,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#2563eb',
  },
  actbuttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '700',
  },
  joinedCount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b3b8bf',
    marginBottom: 12,
  },
});