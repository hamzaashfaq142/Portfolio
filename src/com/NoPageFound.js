import image from '../img/404.png';

function NoPageFound() {
    return (
        <div id="NoPageFound" className="d-flex flex-column align-items-center">
            <img src={image} alt="404" className="mx-auto d-block img-fluid"></img>
            <h1 className="text-danger fw-bold fst-italic">Aww Crap!</h1>
            <h2 className="text-warning fw-bold fst-italic">No Page Found!</h2>
        </div> 
    );
}

export default NoPageFound;