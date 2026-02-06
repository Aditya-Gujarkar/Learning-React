function OnClickFormSubmit(event){
    event.preventDefault(); // to prevent the default behavior of form submission
    console.log("Form submitted!");
}

export default function Form(){
    return(
        <form onSubmit={OnClickFormSubmit}>
            <input placeholder="write your name"/>
                <button>Submit</button>
        </form>
    );
}