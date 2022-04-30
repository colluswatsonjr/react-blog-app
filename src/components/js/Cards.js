
const Cards = () => {

    return (
        <div className="cards">
            <h1>
                Cards
            </h1>
            <div className='card'>
                <h2 className='card_top'>Title</h2>

                <div className="card_middle">
                    <h3>author</h3>
                    <p>content</p>
                    <p>created</p>
                </div>

                <div className='card_bottom'>
                    <button className='display'>Display</button>
                    <button className='edit'>Edit</button>
                    <button className='delete'>Delete</button>
                </div>
            </div>
            <div className='card'>
                <h2 className='card_top'>Title</h2>

                <div className="card_middle">
                    <h3>author</h3>
                    <p>content</p>
                    <p>created</p>
                </div>

                <div className='card_bottom'>
                    <button className='display'>Display</button>
                    <button className='edit'>Edit</button>
                    <button className='delete'>Delete</button>
                </div>
            </div>
            <div className='card'>
                <h2 className='card_top'>Title</h2>

                <div className="card_middle">
                    <h3>author</h3>
                    <p>content</p>
                    <p>created</p>
                </div>

                <div className='card_bottom'>
                    <button className='display'>Display</button>
                    <button className='edit'>Edit</button>
                    <button className='delete'>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;