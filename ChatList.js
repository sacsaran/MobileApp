
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [] // Array to store chat data
    };
  }

  componentDidMount() {
    this.fetchChats();
  }

  fetchChats = async () => {
    try {
      const token = await AsyncStorage.getItem('whatsthat_session_token');
      const response = await fetch(`http://localhost:3333/api/1.0.0/chat`, {
        method: 'GET',
        headers: {
          'X-Authorization': token,
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        this.setState({ chats: data });
      } else {
        throw new Error('Failed to fetch chats');
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleChatItemPress = (chat_id) => {
    const { navigation } = this.props;
    navigation.navigate('SingleChat', { chat_id });
  };

  renderChatItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.chatItem} onPress={() => this.handleChatItemPress(item.chat_id)}>
        <Text style={styles.chatItemText}>{item.name}</Text>
        {/* Render other chat details */}
      </TouchableOpacity>
    );
  };

  render() {
    const { chats } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={chats}
          renderItem={this.renderChatItem}
          keyExtractor={(item) => item.chat_id.toString()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chatItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatItemText: {
    fontSize: 16,
  },
});

