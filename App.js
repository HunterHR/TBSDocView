/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
  Button,
  Alert,
  ActivityIndicator,
  NativeModules,
  NativeEventEmitter
} from 'react-native';//1569809357
import OpenFile from './src/docview/DocView';

export default class App  extends Component {
    handlePressURL = () => {
        //Android
        this.setState({animating: true});
        OpenFile.openDoc([{
          url:"http://www.hrssgz.gov.cn/bgxz/sydwrybgxz/201101/P020110110748901718161.doc", // Local "file://" + filepath
          fileName:"sample",
          cache:false,
          fileType:"jpg"
        }], (error, url) => {
          if (error) {
            this.setState({animating: false});
            console.error(error);
          } else {
            this.setState({animating: false});
            console.log(url)
          }
        })
    }

    handlePressLocalDoc = () => {
        OpenFile.openDoc([{url:"/storage/emulated/0/6.doc",
          fileName:"sample",
          cache:false,
          fileType:"jpg"
        }], (error, url) => {
          if (error) {
            this.setState({animating: false});
          } else {
            this.setState({animating: false});
            console.log(url)
          }
        })
    }

    handlePressLocalTXT = () => {
        
      OpenFile.openDoc([{url:"/storage/emulated/0/perflog.txt",
        fileName:"sample",
        cache:false,
        fileType:"jpg"
      }], (error, url) => {
        if (error) {
          this.setState({animating: false});
        } else {
          this.setState({animating: false});
          console.log(url)
        }
      })
    }

    handlePressLocalXLS = () => {
      
        OpenFile.openDoc([{url:"/storage/emulated/0/qq.xlsx",
          fileName:"sample",
          cache:false,
          fileType:"jpg"
        }], (error, url) => {
           if (error) {
            this.setState({animating: false});
           } else {
            this.setState({animating: false});
             console.log(url)
           }
         })
       
      
    }

    handlePressLocalPPT = () => {
      
      OpenFile.openDoc([{url:"/storage/emulated/0/5.pptx",
        fileName:"sample",
        cache:false,
        fileType:"jpg"
      }], (error, url) => {
         if (error) {
          this.setState({animating: false});
         } else {
          this.setState({animating: false});
           console.log(url)
         }
       })  
    }

    handlePressLocalPDF = () => {
        
      OpenFile.openDoc([{url:"/storage/emulated/0/QN.pdf",
        fileName:"sample",
        cache:false,
        fileType:"jpg"
      }], (error, url) => {
        if (error) {
          this.setState({animating: false});
        } else {
          this.setState({animating: false});
          console.log(url)
        }
      })
    }

    handlePressLocalPic = () => {
        
      OpenFile.openDoc([{url:"/storage/emulated/0/temp_photo.jpg",
        fileName:"sample",
        cache:false,
        fileType:"jpg"
      }], (error, url) => {
        if (error) {
          this.setState({animating: false});
        } else {
          this.setState({animating: false});
          console.log(url)
        }
      })
    }
    
    /*
    * mp4 Video
    */
    handlePressVideo(video) {
      this.setState({animating: true});
      if(Platform.OS === 'ios'){
          OpenFile.playMovie(video, (error, url) => {
                  if (error) {
                      console.error(error);
                      this.setState({animating: false});
                  } else {
                      console.log(url)
                      this.setState({animating: false});
                  }
              })
      }else{
        this.setState({animating: false});
        Alert.alert("Coming soon for Android")
        }
      }

    setToggleTimeout() {
      this.setTimeout(() => {
        this.setState({animating: !this.state.animating});
        this.setToggleTimeout();
      }, 2000);
    }
  
    render() {
      return (
      <View style={styles.container}>

        <View style={{margin:16}}>
          <Button
            onPress={this.handlePressURL.bind(this)}
            title="Press Me Open Doc Url"
            accessibilityLabel="See a Document"
          />
        </View>
        <View style={{margin:16}}>
          <Button
            onPress={this.handlePressLocalDoc.bind(this)}
            title="Press Me Open Doc Path"
            accessibilityLabel="See a Document"
          /> 
        </View> 
          
        <View style={{margin:16}}>
          <Button
            onPress={this.handlePressLocalXLS.bind(this)}
            title="Press Me Open XLS DOC Path"
            accessibilityLabel="See a Document"
          />   
        </View>
          
        <View style={{margin:16}}>
          <Button
          onPress={this.handlePressLocalPPT.bind(this)}
          title="Press Me Open PPT Path"
          accessibilityLabel="See a Document"
        /> 
        </View> 
        
        <View style={{margin:16}}>
          <Button
            onPress={this.handlePressLocalPDF.bind(this)}
            title="Press Me Open PDF Path"
            accessibilityLabel="See a Document"
          /> 
        </View> 
        
        <View style={{margin:16}}>
          <Button
            onPress={this.handlePressLocalTXT.bind(this)}
            title="Press Me Open TXT Path"
            accessibilityLabel="See a Document"
          /> 
        </View>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
