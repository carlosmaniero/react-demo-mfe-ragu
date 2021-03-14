const Hello = ({name}) => 
    <div>Hello, {name}!</div>

export default (props) => 
    <Hello name={props.name || 'World'} />
