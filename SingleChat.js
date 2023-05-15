


// import React, { Component } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRoute } from '@react-navigation/native';

// export default class SingleChat extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [],
//       loading: true,
//       newMessage: '',
//     };
//   }

//   componentDidMount() {
//     this.addMessage();
//    // this.getMessages();
//   }

  
// addMessage = async () => {
//     // Validation
//     if (this.state.newMessage=== "") {
//       console.log("Can't send empty messages");
//       return;
//     }
  
//     const { chat_id } = this.props.route.params; // Obtain chat_id from route params
  
//     try {
//       const response = await fetch(`http://localhost:3333/api/1.0.0/chat/${chat_id}/message`, {
//         method: "POST",
//         headers: {
//           'X-Authorization': await AsyncStorage.getItem("whatsthat_session_token"),
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: this.state.newMessage}),
//       });
  
//       if (response.status === 200) {
//         console.log("Added message");
//         this.setState({ newMessage: "" });
//         this.getMessages();
//       } else {
//         throw new Error("Failed to add message");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
  



  


// getMessages = async () => {
//     const { chat_id } = this.props.route.params;
  
//     try {
//       console.log("Getting messages");
//       const response = await fetch(`http://localhost:3333/api/1.0.0/chat/${chat_id}`, {
//         method: "GET",
//         headers: {
//           "X-Authorization": await AsyncStorage.getItem("whatsthat_session_token"),
//         },
//       });
  
//       if (response.status === 200) {
//         const rjson = await response.json();
//         this.setState({
//           messages: rjson.messages,
//           loading: false,
//         });
//         console.log("Got the Data");
//       } else if (response.status === 401) {
//         throw "Not Authorized";
//       } else if (response.status === 403) {
//         throw "Not Allowed";
//       } else if (response.status === 404) {
//         throw "Not Found";
//       } else {
//         throw "Something is broken";
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
  

  
//   render() {
//     const { messages, loading, newMessage } = this.state;

//     if (loading) {
//       return <Text>Loading...</Text>;
//     }

//     return (
//       <View style={styles.container}>
//        <FlatList
//   data={messages}
//   renderItem={({ item }) => <Text style={styles.messageText}>{item.text}</Text>}
//   keyExtractor={(item) => item.message_id.toString()}
//   style={styles.messageList}
// />
//         <TextInput
//           value={newMessage}
//           onChangeText={(text) => this.setState({ newMessage: text })}
//           placeholder="Type your message"
//           style={styles.input}
//         />

//         <Button title="Send" onPress={this.addMessage} style={styles.button} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 16,
//       justifyContent: 'center',
//     },
//     messageList: {
//       marginBottom: 16,
//     },
//     messageText: {
//       fontSize: 16,
//       marginBottom: 8,
//     },
//     input: {
//       height: 40,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       marginBottom: 8,
//       paddingHorizontal: 8,
//     },
//     button: {
//       alignSelf: 'flex-start',
//     },
//   });
  


 // this code works 

import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SingleChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loading: true,
      newMessage: '',
    };
  }

  componentDidMount() {
    this.getMessages();
  }

  addMessage = async () => {
    // Validation
    if (this.state.newMessage === '') {
      console.log("Can't send empty messages");
      return;
    }

    const { chat_id } = this.props.route.params;

    try {
      const response = await fetch(`http://localhost:3333/api/1.0.0/chat/${chat_id}/message`, {
        method: 'POST',
        headers: {
          'X-Authorization': await AsyncStorage.getItem('whatsthat_session_token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: this.state.newMessage }),
      });

      if (response.status === 200) {
        console.log('Added message');
        const newMessage = { text: this.state.newMessage };
        this.setState((prevState) => ({
          newMessage: '',
          messages: [...prevState.messages, newMessage],
        }));
      } else {
        throw new Error('Failed to add message');
      }
    } catch (error) {
      console.log(error);
    }
  };



  getMessages = async () => {
    const { chat_id } = this.props.route.params;

    try {
      console.log('Getting messages');
      const response = await fetch(`http://localhost:3333/api/1.0.0/chat/${chat_id}`, {
        method: 'GET',
        headers: {
          'X-Authorization': await AsyncStorage.getItem('whatsthat_session_token'),
        },
      });

      if (response.status === 200) {
        const rjson = await response.json();
        this.setState({
          messages: rjson.messages,
          loading: false,
        });
        console.log('Got the Data');
      } else if (response.status === 401) {
        throw 'Not Authorized';
      } else if (response.status === 403) {
        throw 'Not Allowed';
      } else if (response.status === 404) {
        throw 'Not Found';
      } else {
        throw 'Something is broken';
      }
    } catch (err) {
      console.log(err);
    }
  };


  render() {
    const { messages, loading, newMessage } = this.state;

    if (loading) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Text style={styles.messageText}>{item.text}</Text>}
          keyExtractor={(item, index) => index.toString()}
          style={styles.messageList}
          inverted // Scrolls to the bottom of the list
        />
        <TextInput
          value={newMessage}
          onChangeText={(text) => this.setState({ newMessage: text })}
          placeholder="Type your message"
          style={styles.input}
        />
        <Button title="Send" onPress={this.addMessage} style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  messageList: {
    marginBottom: 16,
  },
  messageText: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom:8,
    paddingHorizontal: 8,
  },
  button: {
    alignSelf: 'flex-start',
  },
});




// import React, { Component } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default class SingleChat extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [],
//       loading: true,
//       newMessage: '',
//     };
//   }

//   componentDidMount() {
//     this.getMessages();
//   }

//   addMessage = async () => {
//     // Validation
//     if (this.state.newMessage === '') {
//       console.log("Can't send empty messages");
//       return;
//     }

//     const { chat_id } = this.props.route.params;

//     try {
//       const response = await fetch(`http://localhost:3333/api/1.0.0/chat/${chat_id}/message`, {
//         method: 'POST',
//         headers: {
//           'X-Authorization': await AsyncStorage.getItem('whatsthat_session_token'),
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: this.state.newMessage }),
//       });

//       if (response.status === 200) {
//         console.log('Added message');
//         const newMessage = { id: response.message_id, text: this.state.newMessage };
//         this.setState((prevState) => ({
//           newMessage: '',
//           messages: [...prevState.messages, newMessage],
//         }));
//       } else {
//         throw new Error('Failed to add message');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   editMessage = async (message_id, newText) => {
//     const { chat_id } = this.props.route.params;
//     const { messages } = this.state;

//     try {
//       const response = await fetch(`http://localhost:3333/api/1.0.0/chat/${chat_id}/message/${message_id}`, {
//         method: 'PATCH',
//         headers: {
//           'X-Authorization': await AsyncStorage.getItem('whatsthat_session_token'),
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: newText }),
//       });

//       if (response.status === 200) {
//         console.log('Edited message');
//         const updatedMessages = messages.map((message) => {
//           if (message.id === messageId) {
//             return { ...message, text: newText };
//           }
//           return message;
//         });
//         this.setState({
//           messages: updatedMessages,
//         });
//       } else {
//         throw new Error('Failed to edit message');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // ...

// getMessages = async () => {
//     const { chat_id } = this.props.route.params;
  
//     try {
//       console.log('Getting messages');
//       const response = await fetch(`http://localhost:3333/api/1.0.0/chat/${chat_id}`, {
//         method: 'GET',
//         headers: {
//           'X-Authorization': await AsyncStorage.getItem('whatsthat_session_token'),
//         },
//       });
  
//       if (response.status === 200) {
//         const rjson = await response.json();
//         const messagesWithIds = rjson.messages.map((message) => ({
//           id: message.message_id,
//           text: message.message,
//         }));
//         this.setState({
//           messages: messagesWithIds,
//           loading: false,
//         });
//         console.log('Got the Data');
//       } else if (response.status === 401) {
//         throw 'Not Authorized';
//       } else if (response.status === 403) {
//         throw 'Not Allowed';
//       } else if (response.status === 404) {
//         throw 'Not Found';
//       } else {
//         throw 'Something is broken';
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   render() {
//     const { messages, loading, newMessage } = this.state;
  
//     if (loading) {
//       return <Text>Loading...</Text>;
//     }
  
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={messages}
//           renderItem={({ item }) => (
//             <View style={styles.messageContainer}>
//               <Text style={styles.messageText}>{item.text}</Text>
//               <TextInput
//                 style={styles.editInput}
//                 onChangeText={(text) => this.editMessage(item.id, text)}
//               />
//               <Button title="Edit" onPress={() => this.editMessage(item.id, item.text)} />
//             </View>
//           )}
//           keyExtractor={(item) => item.id.toString()}
//           style={styles.messageList}
//           inverted
//         />
//         <TextInput
//           value={newMessage}
//           onChangeText={(text) => this.setState({ newMessage: text })}
//           placeholder="Type your message"
//           style={styles.input}
//         />
//         <Button title="Send" onPress={this.addMessage} style={styles.button} />
//       </View>
//     );
//   }
// }
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 16,
//       justifyContent: 'center',
//     },
//     messageList: {
//       marginBottom: 16,
//     },
//     messageContainer: {
//       marginBottom: 8,
//     },
//     messageText: {
//       fontSize: 16,
//       marginBottom: 8,
//     },
//     editInput: {
//       height: 40,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       marginBottom: 8,
//       paddingHorizontal: 8,
//     },
//     input: {
//       height: 40,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       marginBottom: 8,
//       paddingHorizontal: 8,
//     },
//     button: {
//       alignSelf: 'flex-start',
//     },
//   });
  
