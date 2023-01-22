import '../styles/CardPage.css'

const CardPageDown = (props) => {
    return (
        <div className="card-container1">
            <div className="card1">
                <h1 className="card-title">Numero</h1>
                <div className="card-number">{props.page}</div>
            </div>
        </div>
    );
}

export default CardPageDown