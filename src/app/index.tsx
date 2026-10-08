import * as Device from 'expo-device';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import {activities} from '../data/activities';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import ProfileCard from '../components/ProfileCard';
import CheckInCard from '../components/CheckInCard';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
  data={activities}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.activityCard}>
      <Text style={styles.activityTitle}>{item.title}</Text>
      <Text>{item.time} · {item.location}</Text>
    </View>
  )}
  ListHeaderComponent={
    <View>
      <Text style={styles.pageTitle}>CampusHelper</Text>
      <ProfileCard name="谭铭竣" major="海洋技术" goal="React Native" />
      <CheckInCard />
      <Text style={styles.sectionTitle}>校园活动</Text>
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
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
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
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
});