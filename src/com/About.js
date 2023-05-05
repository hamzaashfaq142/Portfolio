import Config from "../config";

var experienceList = Config.techExperience;
var columns = 2;
var itemsPerColumn = experienceList.length / columns;

var PrintUl = (props) => {
    for (let i = 1; i <= props.columns; i++) {
        // console.log(i);
        return (
            
        )
    }
};

// var PrintLi = (props) => {

//     for (let i = 1; i <= props.itemsPerColumn; i++) {
//         console.log(i);
//         console.log(props.list[i]);
//         if (props.column <= props.coulmns) {

//             return (
//                 <li key={i}>
//                     {props.list[i]}
//                 </li>
//             )

//         } else {

//             return (
//                 <li key={i}>
//                     {props.list[i+props.coulmns]}
//                 </li>
//             )
//         }
//     }
// }

function About() {
    return (
        <div id="about" className="container mt-5 mb-2">
            <span className="d-flex flex-row justify-content-center">
                <h2 className="big-heading-white fontSans">About Me</h2>
            </span>

            <div className="d-flex">
                <div className="">
                    <p>{Config.about}</p>
                    <div className="d-flex flex-row">
                        <PrintUl columns = {columns}/>
                    </div>
                </div>
                <img src={Config.imgPath} className="img-fluid rounded w-25 h-25" alt="Portrait"></img>
            </div>
        </div>
    );
}

export default About;