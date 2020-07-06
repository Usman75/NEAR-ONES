import React, {Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Main from './Main'
import Welcome from './Welcome'


class App extends Component{

    async UNSAFE_componentWillMount(){
        await this.loadBlockchainData();
      }
    
      async  loadBlockchainData() {
        const userAccount = await window.accountId
        
          this.setState({userAccount})
          
              window.contract.getAllPosts({ accountId: window.accountId })
              .then(allPostArray => {
                const data = allPostArray
                  this.setState({allPost: data})
                  console.log(data)
                  
              })
    
              this.setState({loading: false})
      }
    constructor(props){
        super(props)
        this.state = {
            userAccout:'',
            post: '',
            loading : true,
            allPost: []

        }
    }
    render() {
        return (
            <div  className="container">
                {!window.walletConnection.isSignedIn() 
                ? <Welcome />
                : 
                <Main post={this.state.post} userAccount={this.state.userAccount} allPost={this.state.allPost}
                 />
                 }
               
            </div>
        )
    }
}

export default App;