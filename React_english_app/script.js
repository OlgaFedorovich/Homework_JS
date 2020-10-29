
const Logo = (props) => {
    return (
        <div className ="logo-container">
        <img src="assets/book.png" />
    <span className ="level-title">LEVEL {props.level}</span>
    </div>
    )
}

const Nav = () => {
    return (
        <nav className ="nav">
            <Logo level={'0'} />
            <ul className ="nav-container">
                <li className ="active">Library</li>
                <li>Training</li>
                <li>Learn</li>
            </ul>
        </nav>)
}

const Score = (props) => {
    return (
        <div className="score">
            <span>Score: {props.score}</span>   
        </div>    
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
        this.changeMode = this.changeMode.bind(this);
    }

    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen

        }))
        console.log(this.state);

    }

    render() {
        return (
            <div>
                <div className="add-word-container">
                        {this.state.isOpen ? 
                            <span className="label-title">Add new word</span> :
                            <div>
                                <input placeholder="Enter New Word" /> 
                                <button onClick={this.changeMode} className="btn-round check"></button>
                            </div>
                        }
                        <button onClick={this.changeMode} className="btn-round add"></button>
                </div>                
            </div>
            


        )
    }

}

const App = () => {
    let score = '0';
    return (
        <div className="app-wrapper">
           <Nav />
           <div className="main-side-wrapper">
                <Score score={score} />
                <Page />               
           </div>
 
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))