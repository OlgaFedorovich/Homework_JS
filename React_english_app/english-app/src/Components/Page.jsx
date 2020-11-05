import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            translation: '',
            value: '',
            library: JSON.parse(localStorage.getItem('library')) || [{id: 0, word: '', translate: ''}]
        };

        this.changeMode = this.changeMode.bind(this);
        this.getValue = this.getValue.bind(this);
        this.addWordToLibrary = this.addWordToLibrary.bind(this);
    }

    componentDidMount() {
            
        document.addEventListener('keydown', event => {
            console.log(this.state.isOpen);

            if(this.state.value.length > 0 && event.key === 'Enter') {
                    this.addWordToLibrary();
            }

        });       
    
    }

    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen

        }));
        console.log(this.state.isOpen);
    }

    async removeWordFromLibrary(index) {
        console.log(index);

        await this.setState(prevState => ({
            library: prevState.library.filter((word, i) => i !== index )
        }));
        console.log(this.state.library);

        await localStorage.setItem('library', JSON.stringify(this.state.library));

    }

    async addWordToLibrary() {
        try {
            const response = await fetch(`http://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${this.state.value}`);

            const result = await response.json();
            console.log(result);

            if(result) {
                await this.setState( () => ({
                translation: result.translate
                }));
            }

            await this.setState(prevState => ({
                library: [...prevState.library, {id:this.state.library.length, word:this.state.value, translate: this.state.translation}]
            }));

            await localStorage.setItem('library', JSON.stringify(this.state.library));

            await this.changeMode();
            await this.setState( () => ({
                translation: ''
                }));
            
            //console.log(result[0].l1_text);
        }
        catch(e) {
            console.log(e);

        }
    }

    async getValue(event) {
        

        const value = event.target.value;

        this.setState( () => ({
            value: value
            }));

    }

    render() {
        return (
            <div>
                <div className="add-word-container">
                        {this.state.isOpen ? 
                            <span className="label-title">Add new word</span> :
                            <div>
                                <input onChange={this.getValue} placeholder="Enter New Word" /> 
                                <span>{this.state.translation}</span>
                                <button onClick={this.addWordToLibrary} className="btn-round check"></button>
                            </div>
                        }
                        <button onClick={this.changeMode} className={!this.state.isOpen ? "btn-round close" : "btn-round add" }></button>
                </div> 

                <div className = "library-container">
                            <div className="library-header">
                                <div className="col-name">
                                    Word
                                </div>
                                <div className="col-name">
                                    Translate
                                </div>
                                <div className="col-name">
                                    Learn level
                                </div>
                            </div>
                    {this.state.library.map((word, index) => (
                        <div key = {index} className="word-content">
                            <div>
                                {word.id}
                            </div>
                            <div>
                                {word.word}
                            </div>
                            <div>
                                {word.translate}
                            </div>  
                            <div className = "delete-btn" onClick={() => this.removeWordFromLibrary(index)}></div>                          
                        </div>

                    ))}

                </div>                   
            </div>

        )
    }

}

export default Page