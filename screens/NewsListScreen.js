import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';

export default function NewsListScreen({ navigation }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b8a28a65b55a473ab529ceb890b83557')
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', { article: item })}>
            <View style={styles.card}>
              {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6fd',
    padding: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  image: {
    height: 200,
    width: '100%',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
