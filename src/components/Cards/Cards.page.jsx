import '../styles/CardPage.css'

const CardPage = (props) => {
    return (
        <div className="card-container">
            <div className="card">
                <h1 className="card-title">Numero</h1>
                <div className="card-number">{props.page}</div>
            </div>
        </div>
    );
}

export default CardPage