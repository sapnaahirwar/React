import First from "./first";
import Second from "./second";

function Third (){
    const isEligible = props.isEligible;
    return(
        <> 
        {isEligible?<First/>:<Second/>}
        </>
    );
}
export default Third;