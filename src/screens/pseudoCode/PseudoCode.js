import React from 'react'
import { Container,Row,Col,Image,Button} from "react-bootstrap";
import Code from "./image/PseudoCode.png";
import './PseudoCode.css';
import { Link } from "react-router-dom";


function PseudoCode() {
  return (
    <div>
        <Container  className="aboutcontainer">
            <Row>
            <Col>
                 <Image className="imgpseudoCode" src={Code}/>
                  </Col>
                <Col>
                <h2> Pseudo Code</h2>
                <p>
                Pseudocode literally means ‘fake code’. It is an informal and contrived way of writing programs in which you represent the sequence of actions and instructions (aka algorithms) in a form that humans can easily understand. With pseudocode, however, it’s the exact opposite. You make the rules. It doesn’t matter what language you use to write your pseudocode. All that matters is comprehension. In pseudocode, you don't have to think about semi-colons, curly braces, the syntax for arrow functions, how to define promises, DOM methods and other core language principles. You just have to be able to explain what you're thinking and doing.
                </p>
                Pseudocode acts as the bridge between your brain and computer’s code executor. It allows you to plan instructions which follow a logical pattern, without including all of the technical details. Pseudocode is a great way of getting started with software programming as a beginner. You won’t have to overwhelm your brain with coding syntax. In fact, many companies organize programming tests for their interviewees in pseudocode. This is because the importance of problem solving supersedes the ability to ‘hack’ computer code.
                <p>
                <Link to="/pseudoCode" className="chbtn">
           <Button>
           EXPLORE
           </Button>
              
              </Link>

                </p>
  
                 </Col>
                 

            </Row>
        </Container>
    </div>
  )
}

export default PseudoCode