import './PostItem.css'

const h1Styled = {
    backgroundColor: 'yellow',
    padding: '5px'
}

const PostItem = ({ obj }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {obj.id}</h1>
            <h2 style={{ backgroundColor: 'grey', padding: '5px' }}>Title: {obj.title}</h2>
            <p>{obj.body}</p>
        </div>
    )
}
export default PostItem