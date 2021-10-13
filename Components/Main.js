import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Note from './Note';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }
  render() {
    let note = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deletenote(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>--NOTES--</Text>
        </View>
        <ScrollView style={styles.scrollcontainer}>
          {note}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
            onChangeText={(noteText) =>
              this.setState({
                noteText,
              })
            }
            value={this.state.noteText}
            style={styles.textInput}
            placeholder="->note"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"></TextInput>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addnote.bind(this)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

    );
  }
  addnote = () => {
    // alert('test');
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        'note':this.state.noteText
      });
      this.setState({noteArray:this.state. noteArray});
      this.setState({noteText: ''});
    }
  }
  deletenote = key => {
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 10,
  },
  headertext: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollcontainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },

  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 40,
  },
});
export default Main;
