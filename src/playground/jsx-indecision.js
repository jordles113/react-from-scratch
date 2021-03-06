const app = {
    title: 'Indecision App',
    subtitle: 'Put you life in the hands of a computer',
    options: []
}

const onFormSubmit = event => {
    event.preventDefault();
    
    const option = event.target.elements.option.value;

    if (option){
        app.options.push(option);
        event.target.elements.option.value = ''
        renderApp(); 
    }
}

const removeOptions = () => {
    app.options = []; 
    renderApp(); 
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); 
    const option = app.options[randomNum];
    alert(option); 
}

const appRoot = document.getElementById('app')

const renderApp = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p> }
            <p>{app.options.length >= 0 ? 'Here are your options' : 'No options' }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Removal All</button>
            <ol>
            {
                app.options.map(option => {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp()
