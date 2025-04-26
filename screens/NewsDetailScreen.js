import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, Button } from 'react-native';

export default function NewsDetailScreen({ route }) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.fullText}>{article.content}</Text>
        <Button
          title="Читать полностью"
          onPress={() => Linking.openURL(article.url)}
          color="#0066cc"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6fd',
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  fullText: {
    fontSize: 14,
    marginBottom: 20,
    color: '#444',
  },
});
