function NoPageFound() {
    return (
        <div id="NoPageFound" className="position-relative mt-5">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-danger fw-bold fst-italic">404!</h1>
                <br />
                <h1 className="text-warning fw-bold fst-italic">Aww Crap!</h1>
                <br />
                <h1 className="text-white fw-bold fst-italic">No Page Found!</h1>
            </div>
        </div>
    );
}

export default NoPageFound;