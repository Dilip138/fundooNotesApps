import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  Text: {
    fontSize: 18
  },
  header: {
    flex: 1,
    justifyContent:'space-between',
     flexDirection:'column'
  },
  icon: {
    width: 20,
    height: 20,
  },
  icon1: {
    width: 30,
    height: 30,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    backgroundColor: "#fff",
    flexDirection:'row',
    elevation: 5,
    height:50
  },
  imageIcon: {
    margin:15,
    justifyContent: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
  image1: {
    width: 40,
    height: 40,
  },
  containerSideMenu: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
});
