import React, {Component} from 'react' ;
import {FlatList,
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Button,
    Alert,
    TouchableHighlight,
    Platform} from 'react-native';
import flatlistData from '../data/flatlistData';
import Header from './header';
import AddModal from './AddModal'

class FlatListItem extends Component{
    
    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: "column",
            }}>
            
            <View style={{
                flex: 1,
                flexDirection: 'row',
                //backgroundColor: this.props.index % 2 ==0 ? 'darkgreen': 'darkolivegreen'
                backgroundColor: 'blue',
           }}>

            <Image 
            source={{uri:this.props.item.imageUrl}}
            style={{width:100, height: 100, margin: 5}} >
            </Image>
            
            <View style={{
                flex: 1,
                flexDirection: 'column',
                height: 100,                 
            }}>
 
                <Text style={styles.FlatListItem}>{this.props.item.nama}</Text>
                <Text style={styles.FlatListItem}>{this.props.item.description}</Text>
                <TouchableOpacity
                onPress={() => {this.setState({show:true})}}>
                </TouchableOpacity>
                

            </View>
            </View>
            <View style={{
                height: 2,
                backgroundColor: 'black'
            }}>
                
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    FlatListItem: {
        color: 'khaki',
        padding: 1,
        fontSize: 20,
        //textAlign: 'left'
    }
});

export default class BasicFlatListData extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey:null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollEnd()
    }
    _onPressAdd () {
        //alert("Berhasil Ditambah");
        this.refs.AddModal.showAddModal();
    }
    render(){
        return (
            <View style={{flex:1, marginBottom: Platform.OS === 'android' ? 34 : 0}}>
            <Header/>
            <View
            style={{
                backgroundColor:'yellow',
                height: 50,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',

            }}>
                <TouchableHighlight
                    style={{marginRight: 10}}
                    underLayColor='silver'
                    onPress={this._onPressAdd}
                    >
                        <Image
                        style={{width: 35, height: 35}}
                        source={require('../icons/add.png')}
                        />
                    </TouchableHighlight>

            </View>
            
            <FlatList 
            ref={"flatList"}
            data={flatlistData}
            renderItem={({item ,index}) => {
                return(
                    <FlatListItem item={item} index={index} parentFlatList={this}>
                    
                    <TouchableOpacity onPress ={() => pressHandler (item.id)}>
                    <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                    
                    </FlatListItem>
             );
            }}
            >

            </FlatList>
            <AddModal ref={'AddModal'} parentFlatList={this}>

            </AddModal>

            </View>
    );
}
}