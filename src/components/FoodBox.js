import { Card , Button , Col } from "antd"

function FoodBox(props){

    return(
        <Col>
            <Card key={props.key}>         
                <h2>Name :{props.details.name}</h2>
                <img alt={props.details.name} src={props.details.image} width={25}/>

                <p>Caloris : {props.details.calories}</p>
                <p>Servings : {props.details.servings}</p>
                <h3>Total of Calories : {props.details.calories * props.details.servings}</h3>
                <Button onClick={() => {props.deleteFood(props.details.name)}}> Delete </Button> 
            </Card>
        </Col>
    )
}
export default FoodBox